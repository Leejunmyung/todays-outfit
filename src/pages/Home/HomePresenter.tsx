import React from 'react';
import styled from 'styled-components';
import { currentDate, airPollutionLevel, weatherImage, weatherBackground, getClothesInfo } from '../../recoil/selector';
import { useRecoilValue } from 'recoil';
import { weatherData } from '../../recoil/atom';
import CarouselScroll from '../../components/CarouselScroll';
import Translate from '../../components/Translate';
interface HomePresenterProps {
  getCurrentWeather: () => void;
}

const HomePresenter = ({ getCurrentWeather }: HomePresenterProps) => {
  const { date, sunSet } = useRecoilValue(currentDate);
  const { fineDust, ulFineDust } = useRecoilValue(airPollutionLevel);
  const weatherImg = useRecoilValue(weatherImage);
  const weatherBg = useRecoilValue(weatherBackground);
  const weathers = useRecoilValue(weatherData);
  const clothes = useRecoilValue(getClothesInfo);
  return (
    <>
      <Container>
        <WeatherCardWrapper background={weatherBg}>
          <LocationIcon onClick={getCurrentWeather} loading="lazy" src="img/etc/location-icon5.png" />
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
              <Temperature>{weathers?.main.temp}℃</Temperature>
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
                  <Info>{weathers?.main.feels_like}º</Info>
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
        </WeatherCardWrapper>
        <ClothesCardWrapper>
          <ClothesTitle>Today&apos;s Outfit</ClothesTitle>
          <ScrollWrapper>
            <CarouselScroll baseVelocity={-5}>
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
  padding: 30px 25px;
`;

const WeatherCardWrapper = styled.div<{ background?: string }>`
  position: relative;
  min-width: 330px;
  max-width: 726px;
  width: 83vw;
  background: #f6fff8;
  /* ${(props) =>
    `radial-gradient(178.94% 106.41% at 75.42% 106.41%, ${
      props.background ? props.background : '#fff7b1'
    } 0%, rgba(255, 255, 255, 0) 71.88%), #ffffff`}; */
  border-radius: 20px;
  border: 4px solid #007ea7;
  box-shadow: 4px 4px #007ea7;
  padding: 20px;
  display: flex;
  /* transition: all 0.3s;
  &:active {
    transform: scale(0.95) rotateZ(1.7deg);
  } */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  color: #723d46;
`;

const ClothesCardWrapper = styled.div`
  margin-top: 30px;
  min-width: 330px;
  max-width: 726px;
  width: 83vw;
  height: auto;
  background: #f9f7f3;
  border-radius: 20px;
  box-shadow: 4px 4px #8e7dbe;
  /* 5px 9px 29px rgba(0, 0, 0, 0.22); */
  padding: 20px;
  border: 4px solid #8e7dbe;
  /* flex-wrap: wrap; */
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
  font-family: 'Plaster', cursive;
  text-align: center;
  color: #d88c9a;
  font-size: 6vw;
  font-weight: 600;
`;

const ClothesName = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  color: #05060f;
  font-size: 4.5vw;
  font-weight: 600;
`;

const ClothesIcon = styled.img`
  width: 21vw;
`;

const WeatherDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vw;
  width: 70%;
`;

const WeatherIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

const WeatherIcon = styled.img`
  width: 20vw;
`;

const LocationIcon = styled.img`
  position: absolute;
  right: 8px;
  top: 10px;
  width: 8vw;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  outline: none;
  &:active {
    transform: scale(0.9);
  }
`;

const Date = styled.div`
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
  font-size: 6vw;
`;

const Temperature = styled.p`
  font-size: 8vw;
  font-weight: 500;
`;

const WeatherDesc = styled.p`
  padding-top: 2vw;
  font-size: 4vw;
  font-weight: 600;
`;

const Desc = styled.p`
  font-size: 3.2vw;
  color: #696666;
`;

const Info = styled.p<{ color?: string }>`
  font-size: 3vw;
  line-height: calc(3.5vw + 2px);
  color: ${(props) => props.color};
`;

export default HomePresenter;
