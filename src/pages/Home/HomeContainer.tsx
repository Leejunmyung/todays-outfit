import React, { useEffect, useState } from 'react';
import HomePresenter from './HomePresenter';
import { useGetWeather } from '../../apiClient/Queries';
import { useGeoLocation } from '../../utils/hooks/useGeoLocation';
import { WeatherData } from '../../apiClient/type';

const HomeContainer = () => {
  const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 1000 * 10,
    maximumAge: 1000 * 3600 * 24,
  };
  useGeoLocation(geolocationOptions);
  const { isLoading, data, refetch } = useGetWeather();
  const getCurrentWeather = () => {
    refetch();
  };
  if (isLoading) {
    return <div>로딩중..</div>;
  }

  return <HomePresenter data={data} getCurrentWeather={getCurrentWeather} />;
};
export default HomeContainer;
