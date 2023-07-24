// App.js 파일
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Collection from '../Collection/collection';
import AddWrite from '../Write/AddWrite';
import Chatting from '../Chatting/chatting';
import Mypage from '../MyPage/mypage';
import Home from './Home'; // 새로운 Home.js 파일로부터 Home 컴포넌트를 import

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/collection" element={<Collection />} />
          <Route path="/addWrite" element={<AddWrite />} />
          <Route path="/chatting" element={<Chatting />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  };
  
  export default App;