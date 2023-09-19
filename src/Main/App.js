// App.js 파일
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chatdetails  from '../Chatting/chatdetails';
import Address  from '../Chatting/address';
import Review from '../Chatting/review';
import Honeyhome from '../Chatting/honeyhome';
import Reviewperfect from '../Chatting/reviewperfect';
import Collection from '../Collection/collection';
import AddWrite from '../Write/AddWrite';
import Mypage from '../MyPage/mypage';
import ReviewList from '../MyPage/ReviewList';
import FavoriteList from '../MyPage/FavoriteList';
import PurchaseList from '../MyPage/PurchaseList';
import Categories from './Categories';
import CollectionDetail from '../Collection/collectionDetail';
import SearchDetail from '../Search/SearchDetail';
import CollectionWrtie from '../Collection/collectionWrite';
import Search from '../Search/Search';
import WriteDetail from '../Write/WriteDetail';
import Home from './Home';
import Login from '../Login/Login';
import Join from '../Login/Join';
import FindId from '../Login/FindId';
import FindPw from '../Login/FindPw';
import Chatting from '../Chatting/Chatting';
import TabView from './TabView';
import {SearchDetail_Item} from '../Component/SearchDetail_Item';

const App = () => {
    return (
      <Router>
        <Routes>
        <Route path="/chatting" element={<Chatting />} />

          <Route path="/address" element={<Address />} />
          <Route path="/chatdetails" element={<Chatdetails />} />s
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
          <Route exact path="/collectionDetail" element={<CollectionDetail />} />
          <Route exact path="/collectionWrite" element={<CollectionWrtie/>} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/writeDetail"  element={<WriteDetail />} />
          <Route exact path="/searchDetail"  element={<SearchDetail />} />
          <Route exact path="/searchDetail_Item" element={<SearchDetail_Item />} />
\          <Route path="/home" element={<Home />} />
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