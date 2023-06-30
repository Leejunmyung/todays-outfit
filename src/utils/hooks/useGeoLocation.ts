import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { currentLocation } from '../../recoil/atom';

export const useGeoLocation = (options = {}) => {
  const [, setLocation] = useRecoilState(currentLocation);
  const [, setError] = useState('');

  const handleSuccess = (pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      lat: latitude,
      lon: longitude,
    });
  };

  const handleError = (err: GeolocationPositionError) => {
    setError(err.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError('Geolocation is not supported');
      return;
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, [options]);

  return;
};
