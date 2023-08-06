// App.js 파일
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Collection from '../Collection/collection';
import AddWrite from '../Write/AddWrite';
import Chatting from '../Chatting/chatting';
import Mypage from '../MyPage/mypage';
import Categories from './Categories';
import Home from './Home'; // 새로운 Home.js 파일로부터 Home 컴포넌트를 import
import CollectionDetail from '../Collection/collectionDetail';
import Inquiry from '../ReadingWriting/Inquiry';
import CollectionWrtie from '../Collection/collectionWrite';
import Inspect from '../ReadingWriting/Inspect';
import Sightseeing from '../ReadingWriting/Sightseeing';

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/addWrite" element={<AddWrite />} />
          <Route path="/chatting" element={<Chatting />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route exact path="/collectionDetail" element={<CollectionDetail />} />
          <Route exact path="/collectionWrite" element={<CollectionWrtie/>} />
          <Route exact path="/inspect" element={<Inspect />} />
          <Route exact path="/sightseeing"  element={<Sightseeing />} />
          <Route exact path="/inquiry"  element={<Inquiry />} />


        </Routes>
      </Router>
    );
  };
  
  export default App;