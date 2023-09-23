// App.js 파일
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chatdetails  from '../Chatting/chatdetails';
import Address  from '../Chatting/address';
import Review from '../Review/review';
import Honeyhome from '../Review/ReviewHoneyHome';
import Reviewperfect from '../Review/reviewperfect';
import Collection from '../Collection/collection';
import AddWrite from '../Write/AddWrite';
import Mypage from '../MyPage/mypage';
import ReviewList from '../MyPage/ReviewList';
import FavoriteList from '../MyPage/FavoriteList';
import PurchaseList from '../MyPage/PurchaseList';
import Categories from './Categories';
import CollectionDetail from '../Collection/collectionDetail';
import Inquiry from '../ReadingWriting/Inquiry';
import CollectionWrtie from '../Collection/collectionWrite';
import Inspect from '../ReadingWriting/Inspect';
import Sightseeing from '../ReadingWriting/Sightseeing';
import Home from './Home';
import Login from '../Login/Login';
import Join from '../Login/Join';
import FindId from '../Login/FindId';
import FindPw from '../Login/FindPw';
import {Inquiry_Item} from '../Component/Inquiry_Item';
import Chatting from '../Chatting/chatting';
import TabView from './TabView';

const App = () => {
    return (
      <Router>
        <Routes>
        <Route path="/chatting" element={<Chatting />} />
          <Route path="/address" element={<Address />} />
          <Route path="/chatdetails" element={<Chatdetails />} />
          <Route path="/review" element={<Review />} />
          <Route path="/honeyhome" element={<Honeyhome />} />
          <Route path="/reviewperfect" element={<Reviewperfect />} />
          <Route path="/addWrite" element={<AddWrite />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/reviewlist" element={<ReviewList />} />
          <Route path="/favoritelist" element={<FavoriteList />} />
          <Route path="/purchaselist" element={<PurchaseList />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/collection" element={<Collection />} />
          <Route  path="/collectionDetail" element={<CollectionDetail />} />
          <Route  path="/collectionWrite" element={<CollectionWrtie/>} />
          <Route exact path="/inspect" element={<Inspect />} />
          <Route exact path="/sightseeing"  element={<Sightseeing />} />
          <Route exact path="/inquiry"  element={<Inquiry />} />
          <Route exact path="/inquiry_Item" element={<Inquiry_Item />} />
          <Route path="/home" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/findid" element={<FindId />} />
          <Route path="/findpw" element={<FindPw />} />
          <Route path="/tabview" element={<TabView />} />
          <Route path="/" element={<Login />} />

        </Routes>
      </Router>
    );
  };
  
  export default App;