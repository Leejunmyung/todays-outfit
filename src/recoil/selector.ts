import { selector } from 'recoil';
import { airPollutionData, weatherData, weeklyWeatherData } from './atom';
import { convertDate } from '../utils/tools/convertDate';
import { weatherInfo } from '../utils/tools/weatherInfo';
import { clothesInfo } from '../utils/tools/clothesInfo';

export const currentDate = selector({
  key: 'currentDate',
  get: ({ get }) => {
    const weather = get(weatherData);
    const date = convertDate.formatDate(weather?.dt);
    const sunSet = convertDate.formatDate(weather?.sys.sunset)?.slice(-5);
    return { date, sunSet };
  },
});

export const hourlyWeather = selector({
  key: 'hourlyWeather',
  get: ({ get }) => {
    const weeklyWeather = get(weeklyWeatherData);
    const hourWeather = weeklyWeather?.hourly.slice(0, 9).map((h) => {
      const hourObj = {
        hour: convertDate.outputHour(h.dt),
        temp: h.temp,
        weather: weatherInfo.weatherImageJudge(h.weather[0]?.main),
      };
      return hourObj;
    });
    return hourWeather;
  },
});

export const weeklyWeather = selector({
  key: 'weeklyWeather',
  get: ({ get }) => {
    const weeklyWeather = get(weeklyWeatherData);
    const newWeeklyWeather = weeklyWeather?.daily.map((d) => {
      const weekObj = {
        date: convertDate.outputSimpleDate(d.dt),
        temp: {
          morning: d.temp.morn,
          evening: d.temp.eve,
        },
        weather: weatherInfo.weatherImageJudge(d.weather[0]?.main),
      };
      return weekObj;
    });
    return newWeeklyWeather;
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

export const weatherImage = selector({
  key: 'weatherImage',
  get: ({ get }) => {
    const allWeatherData = get(weatherData);
    const weather = weatherInfo.weatherImageJudge(allWeatherData?.weather[0].main);
    return weather;
  },
});

export const weatherBackground = selector({
  key: 'weatherBackground',
  get: ({ get }) => {
    const allWeatherData = get(weatherData);
    const background = weatherInfo.weatherBackgroundJudge(allWeatherData?.weather[0].main);
    return background;
  },
});

export const getClothesInfo = selector({
  key: 'getClothesInfo',
  get: ({ get }) => {
    const allWeatherData = get(weatherData);
    const tempt = allWeatherData?.main.temp;
    const clothes = clothesInfo.getClothesType(tempt);
    return clothes;
  },
});
