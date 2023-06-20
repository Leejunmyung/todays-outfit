import axios, { AxiosInstance } from 'axios';

export const baseApi: AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    key: `${process.env.REACT_APP_API_KEY}`,
  },
});

// https://api.weatherbit.io/v2.0/current?lat=37.473393&lon=126.975974&key=e3b31a30995640b499d4a338fb169208
