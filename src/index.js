import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './mypage'; // app.js 가 여기에 임포트 되어서 앱 컴포넌트를 루트에 렌더링!
import reportWebVitals from './reportWebVitals';


// document.getElementById('root') root를 퍼블릭 인덱스 바디와 연결
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
/*  위의 앱 컴포넌트를 루트에 렌더링 */
reportWebVitals();
