import React from 'react';
import styled from 'styled-components';

const SplashScreen = () => {
  return (
    <Container>
      <Outfit src="img/etc/outfit.png" />
      <WeatherType src="img/etc/weather_type.png" />
    </Container>
  );
};

const Container = styled.div`
  background: #fff9ec;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Viewport height */
  width: 100vw; /* Viewport width */
`;

const Outfit = styled.img`
  width: 30vw;
`;

const WeatherType = styled.img`
  width: 10vw;
  position: fixed;
  top: 49%;
`;

export default SplashScreen;
