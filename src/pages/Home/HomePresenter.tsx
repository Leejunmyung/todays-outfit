import React from 'react';
import styled from 'styled-components';
import { WeatherData } from '../../apiClient/type';

interface HomePresenterProps {
  // data: WeatherData | undefined;
  getCurrentWeather: () => void;
}

const HomePresenter = ({ getCurrentWeather }: HomePresenterProps) => {
  return (
    <>
      <Container>
        <WeatherCardWrapper>
          <WeatherDetailWrapper>
            <TopDetailWrapper>
              <Area>서울특별시</Area>
              <LocationIcon onClick={getCurrentWeather} loading="lazy" src="img/etc/location-icon2.png" />
            </TopDetailWrapper>
            <MiddleDetailWrapper>
              <Temperature>28℃</Temperature>
              <Weather>맑음</Weather>
            </MiddleDetailWrapper>
            <BottomDetailWrapper>
              <AdditionalInfoPack>
                <AdditionalInfo>
                  <Desc>습도</Desc>
                  <Info>42%</Info>
                </AdditionalInfo>
                <AdditionalInfo>
                  <Desc>미세</Desc>
                  <Info color="#3f62e8">좋음</Info>
                </AdditionalInfo>
              </AdditionalInfoPack>
              <AdditionalInfoPack>
                <AdditionalInfo>
                  <Desc>체감</Desc>
                  <Info>24.2º</Info>
                </AdditionalInfo>
                <AdditionalInfo>
                  <Desc>초미세</Desc>
                  <Info color="#e83f3f">좋음</Info>
                </AdditionalInfo>
              </AdditionalInfoPack>
              <AdditionalInfoPack>
                <AdditionalInfo>
                  <Desc>서풍</Desc>
                  <Info>3.1m/s</Info>
                </AdditionalInfo>
                <AdditionalInfo>
                  <Desc>일몰</Desc>
                  <Info>19:54</Info>
                </AdditionalInfo>
              </AdditionalInfoPack>
            </BottomDetailWrapper>
          </WeatherDetailWrapper>
          <WeatherIconWrapper>
            <WeatherIcon loading="lazy" src="img/weather/Clear.png" />
          </WeatherIconWrapper>
        </WeatherCardWrapper>
        <ClothesCardWrapper></ClothesCardWrapper>
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
  padding: 30px;
`;

const WeatherCardWrapper = styled.div`
  min-width: 330px;
  max-width: 726px;
  width: 80vw;
  height: 50vw;
  background: radial-gradient(178.94% 106.41% at 26.42% 106.41%, #fff7b1 0%, rgba(255, 255, 255, 0) 71.88%), #ffffff; //#8ec9ed
  border-radius: 20px;
  box-shadow: 5px 9px 29px rgba(0, 0, 0, 0.22);
  padding: 20px;
  display: flex;
  transition: all 0.3s;
  &:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
`;

const ClothesCardWrapper = styled.div`
  margin-top: 30px;
  min-width: 330px;
  max-width: 726px;
  width: 80vw;
  height: 60vw;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 5px 9px 29px rgba(0, 0, 0, 0.22);
  padding: 20px;
  display: flex;
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
  width: calc(100px + 2vw);
`;

const LocationIcon = styled.img`
  width: 8vw;
  cursor: pointer;
`;

const TopDetailWrapper = styled.div`
  display: flex;
`;

const MiddleDetailWrapper = styled.div`
  padding: 0px 10px;
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

const Area = styled.p`
  font-size: 6vw;
  font-weight: 600;
`;

const Temperature = styled.p`
  font-size: 9vw;
  font-weight: 500;
`;

const Weather = styled.p`
  font-size: 5vw;
  font-weight: 600;
  line-height: 11vw;
`;

const Desc = styled.p`
  font-size: 3.2vw;
  color: #8f8e8e;
  font-weight: 500;
`;

const Info = styled.p<{ color?: string }>`
  font-size: 3vw;
  font-weight: 600;
  line-height: calc(3.5vw + 2px);
  color: ${(props) => (props.color ? props.color : '#33333')};
`;

export default HomePresenter;
