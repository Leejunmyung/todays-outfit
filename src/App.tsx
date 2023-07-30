import React, { useEffect } from 'react';
import Home from './pages/Home/HomeContainer';
import { BrowserRouter as Router, Route, useLocation, Routes } from 'react-router-dom';
import ReactGA from 'react-ga';

ReactGA.initialize(`${process.env.REACT_APP_GOOGLE_ANALYTICS}`);

function UsePageViews() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <UsePageViews />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
