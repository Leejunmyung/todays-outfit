import React, { useEffect, useState } from 'react';
import HomePresenter from './HomePresenter';
import { useGetPollution, useGetWeather } from '../../apiClient/Queries';
import { weatherData, airPollutionData } from '../../recoil/atom';
import { useRecoilState } from 'recoil';
import Loading from '../../components/Loading';
import SplashScreen from '../../components/SplashScreen';

const DEFAULT_LOCATION = { lat: 37.566535, lon: 126.9779692 };

const HomeContainer = () => {
  const [splashing, setSplashing] = useState(true);
  const [, setWeathersData] = useRecoilState(weatherData);
  const [, setAirPollutionData] = useRecoilState(airPollutionData);
  const [location, setLocation] = useState(DEFAULT_LOCATION);

  const weatherQuery = useGetWeather(location);
  const pollutionQuery = useGetPollution(location);

  const fetchLocation = () => {
    if (!navigator.geolocation) {
      return alert('Geolocation is not supported');
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => setLocation({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
      (error) => console.log(error),
    );
  };

  const getCurrentWeather = () => {
    fetchLocation();
    weatherQuery.refetch();
    pollutionQuery.refetch();
  };

  useEffect(() => {
    if (weatherQuery.data && pollutionQuery.data) {
      setWeathersData(weatherQuery.data);
      setAirPollutionData(pollutionQuery.data);
    }
  }, [weatherQuery.data, pollutionQuery.data]);

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

  return <HomePresenter getCurrentWeather={getCurrentWeather} />;
};

export default HomeContainer;
