import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './styles/GlobalStyle';
import { RecoilRoot } from 'recoil';
import ReactQueryWrapper from './queryClient/ReactQueryWrapper';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RecoilRoot>
    <ReactQueryWrapper>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyle />
      <App />
    </ReactQueryWrapper>
  </RecoilRoot>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorkerRegistration.register();
