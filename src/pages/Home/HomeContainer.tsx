import React, { useEffect, useState } from 'react';
import HomePresenter from './HomePresenter';
import { useGetPollution, useGetWeather, useGetWeeklyWeather } from '../../apiClient/Queries';
import { weatherData, airPollutionData, weeklyWeatherData } from '../../recoil/atom';
import { useRecoilState } from 'recoil';
import Loading from '../../components/Loading';
import SplashScreen from '../../components/SplashScreen';
import axios from 'axios';

const DEFAULT_LOCATION = { lat: 37.566535, lon: 126.9779692 };

const HomeContainer = () => {
  const [splashing, setSplashing] = useState(true);
  const [loading, setLoading] = useState(false);
  const [translatedText, setTranslatedText] = useState('위치');
  const [weatherInfo, setWeatherInfo] = useRecoilState(weatherData);
  const [, setAirPollutionData] = useRecoilState(airPollutionData);
  const [, setWeeklyWeatherData] = useRecoilState(weeklyWeatherData);
  const [location, setLocation] = useState(DEFAULT_LOCATION);

  const weatherQuery = useGetWeather(location);
  const pollutionQuery = useGetPollution(location);
  const weeklyWeatherQuery = useGetWeeklyWeather(location);

  const fetchLocation = () => {
    if (!navigator.geolocation) {
      return alert('Geolocation is not supported');
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => setLocation({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
      (error) => console.log(error),
    );
  };

  const doTranslation = async (text: string) => {
    try {
      const { data } = await axios.post(
        'https://todays-outfit.vercel.app/api/translate',
        // https://openapi.naver.com/v1/papago/n2mt
        // https://thingproxy.freeboard.io/fetch/

        {
          text: text,
        },
      );
      const result = data.message.result.translatedText;
      setTranslatedText(result);
      return;
    } catch (error) {
      console.error('Failed to translate text.', error);
    }
  };

  const getCurrentWeather = async () => {
    setLoading(true);
    fetchLocation();
    weatherQuery.refetch();
    pollutionQuery.refetch();
    weeklyWeatherQuery.refetch();
    await doTranslation(weatherInfo?.name ?? 'location');
    setLoading(false);
  };

  useEffect(() => {
    if (weatherQuery.data && pollutionQuery.data && weeklyWeatherQuery.data) {
      setWeatherInfo(weatherQuery.data);
      setAirPollutionData(pollutionQuery.data);
      setWeeklyWeatherData(weeklyWeatherQuery.data);
      doTranslation(weatherQuery.data.name);
    }
  }, [weatherQuery.data, pollutionQuery.data, weeklyWeatherQuery.data]);

  useEffect(() => {
    fetchLocation();
    const timer = setTimeout(() => setSplashing(false), 2000);

    return () => clearTimeout(timer);
  }, []);

  if (splashing) {
    return <SplashScreen />;
  }

  if (weatherQuery.isLoading || pollutionQuery.isLoading) {
    return <Loading />;
  }

  return <HomePresenter loading={loading} translatedText={translatedText} getCurrentWeather={getCurrentWeather} />;
};

export default HomeContainer;
