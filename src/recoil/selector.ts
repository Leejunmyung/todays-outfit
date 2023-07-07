import { selector } from 'recoil';
import { airPollutionData, weatherData } from './atom';
import { convertDate } from '../utils/tools/convertDate';
import { weatherInfo } from '../utils/tools/weatherInfo';

export const currentDate = selector({
  key: 'currentDate',
  get: ({ get }) => {
    const weather = get(weatherData);
    const date = convertDate.formatDate(weather?.dt);
    const sunSet = convertDate.formatDate(weather?.sys.sunset)?.slice(-5);
    return { date, sunSet };
  },
});

export const airPollutionLevel = selector({
  key: 'airPollutionLevel',
  get: ({ get }) => {
    const air = get(airPollutionData);
    const fineDust = weatherInfo.fineDustJudge(air?.list[0].components.pm10);
    const ulFineDust = weatherInfo.ultraFineDustJudge(air?.list[0].components.pm2_5);
    return { fineDust, ulFineDust };
  },
});
