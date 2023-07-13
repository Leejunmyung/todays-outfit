import React, { useEffect } from 'react';
import HomePresenter from './HomePresenter';
import { useGetPollution, useGetWeather } from '../../apiClient/Queries';
import { useGeoLocation } from '../../utils/hooks/useGeoLocation';
import { weatherData, airPollutionData } from '../../recoil/atom';
import { useRecoilState } from 'recoil';

const HomeContainer = () => {
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
  if (weatherLoading && airLoading) {
    return <div>로딩중..</div>;
  }

  return <HomePresenter getCurrentWeather={getCurrentWeather} />;
};
export default HomeContainer;
