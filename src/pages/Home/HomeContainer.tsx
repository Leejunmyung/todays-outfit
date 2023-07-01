import React, { useEffect, useState } from 'react';
import HomePresenter from './HomePresenter';
import { useGetPollution, useGetWeather } from '../../apiClient/Queries';
import { useGeoLocation } from '../../utils/hooks/useGeoLocation';

const HomeContainer = () => {
  const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 1000 * 10,
    maximumAge: 1000 * 3600 * 24,
  };
  useGeoLocation(geolocationOptions);
  const { isLoading: weatherLoading, data: weatherData, refetch: weatherRefetch } = useGetWeather();
  const { isLoading: airLoading, data: airData, refetch: airRefetch } = useGetPollution();
  const getCurrentWeather = () => {
    weatherRefetch();
    airRefetch();
  };
  if (weatherLoading && airLoading) {
    return <div>로딩중..</div>;
  }

  return <HomePresenter data={weatherData} getCurrentWeather={getCurrentWeather} />;
};
export default HomeContainer;
