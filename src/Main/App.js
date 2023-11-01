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
import SearchDetail from '../Search/SearchDetail';
import CollectionWrtie from '../Collection/collectionWrite';
import Search from '../Search/Search';
import WriteDetail from '../Write/WriteDetail';
import Home from './Home';
import Login from '../Login/Login';
import Join from '../Login/Join';
import Chatting from '../Chatting/Chatting';
import TabView from './TabView';
import MainCategories from './MainCategories';
import { SearchDatail_Item } from '../Search/SearchDetail_item';

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
          <Route path="/collectionDetail/:collectionId" element={<CollectionDetail />} />
          <Route path="/SearchDatail_Item" element={<SearchDatail_Item />} />

          <Route  path="/collectionWrite" element={<CollectionWrtie/>} />
          <Route exact path="/Search" element={<Search />} />
          <Route exact path="/WriteDetail/:documentId"  element={<WriteDetail />} />
          <Route path="/SearchDetail/" element={<SearchDetail />} />
          <Route path="/SearchDetail/:Searchtext" element={<SearchDetail />} />
          <Route path="/home" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/tabview" element={<TabView />} />
          <Route path="/maincategories" element={<MainCategories />} />
          <Route path="/" element={<Login />} />

        </Routes>
      </Router>
    );
  };
  
  export default App;