import axios, { AxiosInstance } from 'axios';

export const baseApi: AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    appid: `${process.env.REACT_APP_API_KEY}`,
    units: 'metric',
    lang: 'kr',
  },
});
