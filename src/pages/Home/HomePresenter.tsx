import React from 'react';
import styled from 'styled-components';
import {
  currentDate,
  hourlyWeather,
  weeklyWeather,
  airPollutionLevel,
  weatherImage,
  weatherBackground,
  getClothesInfo,
} from '../../recoil/selector';
import { useRecoilValue } from 'recoil';
import { weatherData } from '../../recoil/atom';
import CarouselScroll from '../../components/CarouselScroll';
import Translate from '../../components/Translate';
import AdComponent from '../../components/AdComponent';
interface HomePresenterProps {
  getCurrentWeather: () => void;
}

const HomePresenter = ({ getCurrentWeather }: HomePresenterProps) => {
  const { date, sunSet } = useRecoilValue(currentDate);
  const { fineDust, ulFineDust } = useRecoilValue(airPollutionLevel);
  const weatherImg = useRecoilValue(weatherImage);
  const weatherBg = useRecoilValue(weatherBackground);
  const hourlyWeathers = useRecoilValue(hourlyWeather);
  const weeklyWeathers = useRecoilValue(weeklyWeather);
  const weathers = useRecoilValue(weatherData);
  const clothes = useRecoilValue(getClothesInfo);
  return (
    <>
      <AdComponent code={process.env.REACT_APP_KAKAO_ADFIT_FIRST} />
      <Container>
        <WeatherCardWrapper background={weatherBg}>
          <LocationIcon onClick={getCurrentWeather} loading="lazy" src="img/etc/location-icon5.png" />
          <WeatherCurrentWrapper>
            <WeatherDetailWrapper>
              <TopDetailWrapper>
                <Date>{date}</Date>
                <AreaWrapper>
                  <Area>
                    <Translate text={weathers?.name} />
                  </Area>
                </AreaWrapper>
              </TopDetailWrapper>
              <MiddleDetailWrapper>
                <Temperature>{weathers?.main.temp.toFixed(1)}℃</Temperature>
                <WeatherDesc>{weathers?.weather[0].description}</WeatherDesc>
              </MiddleDetailWrapper>
              <BottomDetailWrapper>
                <AdditionalInfoPack>
                  <AdditionalInfo>
                    <Desc>습도</Desc>
                    <Info>{weathers?.main.humidity}%</Info>
                  </AdditionalInfo>
                  <AdditionalInfo>
                    <Desc>미세</Desc>
                    <Info color={fineDust === '좋음' || fineDust === '보통' ? '#3f62e8' : '#e83f3f'}>{fineDust}</Info>
                  </AdditionalInfo>
                </AdditionalInfoPack>
                <AdditionalInfoPack>
                  <AdditionalInfo>
                    <Desc>체감</Desc>
                    <Info>{weathers?.main.feels_like.toFixed(1)}º</Info>
                  </AdditionalInfo>
                  <AdditionalInfo>
                    <Desc>초미세</Desc>
                    <Info color={ulFineDust === '좋음' || ulFineDust === '보통' ? '#3f62e8' : '#e83f3f'}>
                      {ulFineDust}
                    </Info>
                  </AdditionalInfo>
                </AdditionalInfoPack>
                <AdditionalInfoPack>
                  <AdditionalInfo>
                    <Desc>서풍</Desc>
                    <Info>{weathers?.wind.speed}m/s</Info>
                  </AdditionalInfo>
                  <AdditionalInfo>
                    <Desc>일몰</Desc>
                    <Info>{sunSet}</Info>
                  </AdditionalInfo>
                </AdditionalInfoPack>
              </BottomDetailWrapper>
            </WeatherDetailWrapper>
            <WeatherIconWrapper>
              <WeatherIcon loading="lazy" src={weatherImg} />
            </WeatherIconWrapper>
          </WeatherCurrentWrapper>
          <WeatherHourlyWrapper>
            {hourlyWeathers?.map((h, i) => {
              return (
                <WeatherHourlyDetailWrapper key={i}>
                  <Hour>{h.hour}시</Hour>
                  <HourlyWeatherIcon src={h.weather} />
                  <HourlyTemperature>{h.temp.toFixed(0)}</HourlyTemperature>
                </WeatherHourlyDetailWrapper>
              );
            })}
          </WeatherHourlyWrapper>
        </WeatherCardWrapper>
        <WeeklyWeatherCardWrapper>
          <WeeklyTitle>Weekly Forecast</WeeklyTitle>
          <WeatherWeeklyContentsWrapper>
            {weeklyWeathers?.map((w, i) => {
              return (
                <WeatherWeeklyDetailWrapper key={i}>
                  {/* <Day>{w.date?.day}</Day> */}
                  <SimpleDate>{w.date?.simpleDate + '(' + w.date?.day + ')'}</SimpleDate>
                  <WeeklyWeatherIcon src={w.weather} />
                  <TemperatureWrapper>
                    <WeeklyMorningTemperature>{w.temp.morning.toFixed(0)}º</WeeklyMorningTemperature>
                    <DividingLine />
                    <WeeklyEveningTemperature>{w.temp.evening.toFixed(0)}º</WeeklyEveningTemperature>
                  </TemperatureWrapper>
                </WeatherWeeklyDetailWrapper>
              );
            })}
          </WeatherWeeklyContentsWrapper>
        </WeeklyWeatherCardWrapper>
        <ClothesCardWrapper>
          <ClothesTitle>Today&apos;s Outfit</ClothesTitle>
          <ScrollWrapper>
            <CarouselScroll baseVelocity={-3}>
              <ClothesBox>
                {clothes?.map((c, i) => {
                  return (
                    <ClothesPack key={i}>
                      <ClothesIcon loading="lazy" src={`img/clothes/` + c.clothes} />
                      <ClothesName>{c.name}</ClothesName>
                    </ClothesPack>
                  );
                })}
              </ClothesBox>
            </CarouselScroll>
          </ScrollWrapper>
        </ClothesCardWrapper>
      </Container>
      <AdComponent code={process.env.REACT_APP_KAKAO_ADFIT_SECOND} />
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 20px 18px;
`;

const WeatherCardWrapper = styled.div<{ background?: string }>`
  @media (min-width: 768px) {
    width: 400px;
  }
  position: relative;
  min-width: 330px;
  width: 88vw;
  background: #f6fff8;
  /* ${(props) =>
    `radial-gradient(178.94% 106.41% at 75.42% 106.41%, ${
      props.background ? props.background : '#fff7b1'
    } 0%, rgba(255, 255, 255, 0) 71.88%), #ffffff`}; */
  border-radius: 20px;
  border: 4px solid #007ea7;
  box-shadow: 4px 4px #007ea7;
  padding: 25px 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  color: #723d46;
`;

const ClothesCardWrapper = styled.div`
  @media (min-width: 768px) {
    width: 400px;
  }
  margin-top: 20px;
  min-width: 330px;
  width: 88vw;
  height: auto;
  background: #f9f7f3;
  border-radius: 6%;
  box-shadow: 4px 4px #8e7dbe;
  /* 5px 9px 29px rgba(0, 0, 0, 0.22); */
  padding: 20px;
  border: 4px solid #8e7dbe;
  /* flex-wrap: wrap; */
`;

const WeatherCurrentWrapper = styled.div`
  display: flex;
`;

const WeeklyWeatherCardWrapper = styled.div`
  @media (min-width: 768px) {
    width: 400px;
  }
  margin-top: 20px;
  min-width: 330px;
  width: 88vw;
  height: auto;
  background: #fefcf9;
  border-radius: 6%;
  box-shadow: 4px 4px #f4d1ae;
  /* 5px 9px 29px rgba(0, 0, 0, 0.22); */
  padding: 15px 15px;
  border: 4px solid #f4d1ae;
  text-align: center;
  /* flex-wrap: wrap; */
`;

const WeatherWeeklyContentsWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
`;

const WeatherWeeklyDetailWrapper = styled.div`
  @media (min-width: 768px) {
    gap: 12px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3vw;
  border: 2px solid lightgray;
  border-radius: 10px;
  padding: 10px 15px;
  margin-right: 20px;
`;

const WeeklyTitle = styled.div`
  @media (min-width: 768px) {
    font-size: 20px;
  }
  margin-bottom: 20px;
  color: #4e8098;
  font-size: 5vw;
  font-weight: 600;
  font-family: 'Plaster', cursive;
`;

const SimpleDate = styled.div`
  @media (min-width: 768px) {
    font-size: 12px;
  }
  white-space: nowrap;
  color: #696666;
  font-size: 3vw;
  font-weight: 600;
`;

const WeeklyWeatherIcon = styled.img`
  @media (min-width: 768px) {
    width: 56px;
  }
  width: 10vw;
`;

const TemperatureWrapper = styled.div`
  @media (min-width: 768px) {
    gap: 4px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;
`;

const WeeklyMorningTemperature = styled.div`
  @media (min-width: 768px) {
    font-size: 8px;
  }
  color: blue;
  font-size: 2vw;
  font-weight: 600;
`;

const DividingLine = styled.hr`
  border: none;
  border-left: 1px solid hsla(200, 10%, 50%, 100);
  height: 12px;
  width: 1px;
`;

const WeeklyEveningTemperature = styled.div`
  @media (min-width: 768px) {
    font-size: 8px;
  }
  color: red;
  font-size: 2vw;
  font-weight: 600;
`;

const WeatherHourlyWrapper = styled.div`
  @media (min-width: 768px) {
    gap: 13px;
  }
  margin-top: 20px;
  display: flex;
  overflow-x: scroll;
  gap: 4vw;
`;

const WeatherHourlyDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3px;
`;

const Hour = styled.div`
  @media (min-width: 768px) {
    font-size: 13px;
  }
  white-space: nowrap;
  color: #696666;
  font-size: 3vw;
  font-weight: 600;
`;

const HourlyWeatherIcon = styled.img`
  @media (min-width: 768px) {
    width: 20px;
  }
  width: 5vw;
`;

const HourlyTemperature = styled.div`
  @media (min-width: 768px) {
    font-size: 13px;
  }
  color: #05060f;
  font-size: 3vw;
  font-weight: 600;
`;

const ScrollWrapper = styled.div`
  overflow: hidden;
`;

const ClothesBox = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  display: flex;
  gap: 10px;
`;

const ClothesPack = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 2px solid #d88c9a;
  border-radius: 10px;
  padding: 10px;
  gap: 15px;
`;

const ClothesTitle = styled.div`
  @media (min-width: 768px) {
    font-size: 20px;
  }
  font-family: 'Plaster', cursive;
  text-align: center;
  color: #d88c9a;
  font-size: 5vw;
  font-weight: 600;
`;

const ClothesName = styled.div`
  @media (min-width: 768px) {
    font-size: 20px;
  }
  font-family: 'Noto Sans KR', sans-serif;
  color: #05060f;
  font-size: 4.5vw;
  font-weight: 600;
`;

const ClothesIcon = styled.img`
  @media (min-width: 768px) {
    width: 90px;
  }
  width: 21vw;
`;

const WeatherDetailWrapper = styled.div`
  @media (min-width: 768px) {
    gap: 13px;
  }
  display: flex;
  flex-direction: column;
  gap: 1vw;
  width: 70%;
`;

const WeatherIconWrapper = styled.div`
  margin-top: 12%;
  margin-bottom: 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

const WeatherIcon = styled.img`
  @media (min-width: 768px) {
    width: 86px;
  }
  width: 20vw;
`;

const LocationIcon = styled.img`
  @media (min-width: 768px) {
    width: 34px;
  }
  position: absolute;
  right: 8px;
  top: 10px;
  width: 8vw;
  border-radius: 40px;
  cursor: pointer;
  outline: none;
  border: 2px solid #ea6a66;
  box-shadow: 0px 2px #ea6a66;
  transform: translateY(-0.23em);
  &:active {
    transform: translateY(0);
    box-shadow: 0px 0px #ea6a66;
  }
`;

const Date = styled.div`
  @media (min-width: 768px) {
    font-size: 13px;
  }
  color: #696666;
  font-size: 3vw;
  font-weight: 600;
`;

const TopDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const AreaWrapper = styled.div`
  display: flex;
`;

const MiddleDetailWrapper = styled.div`
  padding: 0px 5px;
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
`;

const BottomDetailWrapper = styled.div`
  display: flex;
  gap: 7px;
`;

const AdditionalInfoPack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const AdditionalInfo = styled.div`
  gap: 3px;
  display: flex;
`;

const Area = styled.div`
  @media (min-width: 768px) {
    font-size: 26px;
  }
  font-weight: 500;
  font-size: 6vw;
`;

const Temperature = styled.p`
  @media (min-width: 768px) {
    font-size: 34px;
  }
  font-size: 8vw;
  font-weight: 500;
`;

const WeatherDesc = styled.p`
  @media (min-width: 768px) {
    padding: 8.6px;
    font-size: 17px;
  }
  padding-top: 2vw;
  font-size: 4vw;
  font-weight: 600;
`;

const Desc = styled.p`
  @media (min-width: 768px) {
    font-size: 13px;
  }
  font-size: 3.2vw;
  color: #696666;
`;

const Info = styled.p<{ color?: string }>`
  @media (min-width: 768px) {
    font-size: 13px;
    line-height: 17px;
  }
  font-size: 3vw;
  line-height: calc(3.5vw + 2px);
  color: ${(props) => props.color};
`;

export default HomePresenter;
