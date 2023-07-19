import React, { useEffect, useState } from 'react';
import HomePresenter from './HomePresenter';
import { useGetPollution, useGetWeather } from '../../apiClient/Queries';
import { useGeoLocation } from '../../utils/hooks/useGeoLocation';
import { weatherData, airPollutionData } from '../../recoil/atom';
import { useRecoilState } from 'recoil';
import Loading from '../../components/Loading';
import SplashScreen from '../../components/SplashScreen';

const HomeContainer = () => {
  const [splashing, setSplashing] = useState(true);
  const [, setWeathersData] = useRecoilState(weatherData);
  const [, setAirPollutionData] = useRecoilState(airPollutionData);
  const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 1000 * 10,
    maximumAge: 1000 * 3600 * 24,
  };
  const { isLoading: weatherLoading, data: weather, refetch: weatherRefetch } = useGetWeather();
  const { isLoading: airLoading, data: airPollution, refetch: airRefetch } = useGetPollution();
  const getCurrentWeather = () => {
    weatherRefetch();
    airRefetch();
  };
  useGeoLocation(geolocationOptions);
  useEffect(() => {
    if (weather && airPollution !== undefined) {
      setWeathersData(weather);
      setAirPollutionData(airPollution);
    }
  }, [weather, airPollution, getCurrentWeather]);
  useEffect(() => {
    setTimeout(() => {
      setSplashing(false);
    }, 2000);
  }, []);
  if ((weatherLoading || airLoading) && !splashing) {
    return <Loading />;
  } else if (splashing) {
    return <SplashScreen />;
  }

  return <HomePresenter getCurrentWeather={getCurrentWeather} />;
};
export default HomeContainer;
