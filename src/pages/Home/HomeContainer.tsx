import React, { useEffect, useState } from 'react';
import HomePresenter from './HomePresenter';
import { useGetWeather } from '../../apiClient/Queries';
import { useGeoLocation } from '../../utils/hooks/useGeoLocation';
import { WeatherData } from '../../apiClient/type';

const HomeContainer = () => {
  // const geolocationOptions = {
  //   enableHighAccuracy: true,
  //   timeout: 1000 * 10,
  //   maximumAge: 1000 * 3600 * 24,
  // };
  // useGeoLocation(geolocationOptions);
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const { mutateAsync: GetWeather } = useGetWeather();
  const getCurrentWeather = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 1000 * 10,
      maximumAge: 1000 * 3600 * 24,
    };
    navigator.geolocation.getCurrentPosition(
      getLocationSuccess,
      () => alert('위치 정보를 가져오는데 실패했습니다'),
      options,
    );
  };
  const getLocationSuccess = (pos: GeolocationPosition) => {
    const weatherParams = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude,
    };
    console.log(GetWeather(weatherParams));
  };

  return <HomePresenter getCurrentWeather={getCurrentWeather} />;
};
export default HomeContainer;
