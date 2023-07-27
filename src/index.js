import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Main/App'; // app.js 가 여기에 임포트 되어서 앱 컴포넌트를 루트에 렌더링!

// document.getElementById('root') root를 퍼블릭 인덱스 바디와 연결
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*  위의 앱 컴포넌트를 루트에 렌더링 */

