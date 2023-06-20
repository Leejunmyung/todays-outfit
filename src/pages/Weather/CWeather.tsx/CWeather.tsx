import React, { useEffect } from 'react';
import VWeather from '../VWeather/VWeather';
import { useGetWeather } from '../../../apiClient/Queries';

const CWeather = () => {
  const getWeather = () => {
    const weatherParams = {
      lat: 37.47,
      lon: 126.975974,
    };
    return useGetWeather(weatherParams);
  };
  // console.log(getWeather());
  // useEffect(() => {
  //   getWeather();
  // });
  return <VWeather />;
};
export default CWeather;
