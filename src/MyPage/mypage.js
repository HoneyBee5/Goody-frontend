import React, { useState, useEffect } from 'react';
import { Nav } from '../Component/Nav';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { HomeActionBar } from '../Main/Home';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  transform: 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RecipeReviewCard = ({ userData }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='flex justify-center'>
      <Card style={{ width: 355, backgroundColor: grey[100], borderRadius: 16 }}>

        <CardHeader
          avatar={<Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">  {userData ?userData.nickname.charAt(0) : ''} </Avatar>}
          action={<IconButton aria-label="settings"></IconButton>}
          title={<Typography variant="h7" style={{ fontWeight: 'bold' }}>{userData ? userData.nickname : ''}</Typography>}
          subheader={<Typography variant="subtitle1" style={{ fontWeight: '' }}>{userData ? userData.grade : ''}</Typography>}
        />

        <CardActions disableSpacing>
          <ExpandMore
            {...(expanded ? { expand: "true" } : {})}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >

            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>대표계좌: {userData ? userData.accountNum : ''}</Typography>
            <Typography paragraph></Typography>
            <Typography paragraph>주소 : {userData ? userData.address : ''} </Typography>
            <Typography paragraph></Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}


RecipeReviewCard.propTypes = {
  userData: PropTypes.shape({
    nickname: PropTypes.string,
    grade: PropTypes.string,
    accountNum: PropTypes.string,
    address: PropTypes.string,
  }),
};

const Mypage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = {
          Authorization: `${token}`,
        };

        const response = await fetch('https://www.honeybee-goody.site/goody/myPage/', {
          method: 'GET',
          headers,
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
          console.log(data);
        } else {
          console.error('API 요청 중 오류 발생: ', response.status);
        }
      } catch (error) {
        console.error('API 요청 중 오류 발생: ', error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <>
      <HomeActionBar imageSrc="img/ActionBar.png" />
      <RecipeReviewCard userData={userData} />

      <div className=" pr-5 pl-5 pt-7 pb-7">
        <span className="font-extrabold p-2 text-gray-400 text-sm">사용이력</span>
        <div className="flex pb-2 mt-2">
          <Link to="/reviewlist">
            <button className="flex p-2 items-center">
              <img src="img/Icon_List.png" alt="리뷰 목록" className="h-5 w-5 mr-5" />
              <span className="font-extrabold text-sm">리뷰 목록</span>
            </button>
          </Link>
        </div>
        <div className="flex">
          <Link to="/purchaselist">
            <button className="flex p-2 items-center">
              <img src="img/Icon_Purchase.png" alt="구매 참여 목록" className="h-5 w-5 mr-5" />
              <span className="font-extrabold text-sm">구매 & 참여 목록</span>
            </button>
          </Link>
        </div>
        <div className="flex pb-2">
          <Link to="/favoritelist">
            <button className="flex p-2 items-center">
              <img src="img/Icon_Favorite.png" alt="찜 목록" className="h-5 w-5 mr-5" />
              <span className="font-extrabold text-sm">찜 목록</span>
            </button>
          </Link>
        </div>
        <div className="flex pb-2">
          <Link to="/collectionlist">
            <button className="flex p-2 items-center">
              <img src="img/Icon_Favorite.png" alt="찜 목록" className="h-5 w-5 mr-5" />
              <span className="font-extrabold text-sm">컬렉션 찜 목록</span>
            </button>
          </Link>
        </div>
        <hr className="my-5" />
        <span className="font-extrabold p-2 text-gray-400 text-sm">서비스</span>
        <div className="flex pb-2 mt-2">
          <button className="flex p-2 items-center">
            <img src="img/Icon_Info.png" alt="공지사항" className="h-5 w-5 mr-5" />
            <span className="font-extrabold text-sm">공지사항</span>
          </button>
        </div>
        <div className="flex pb-2 mb-10">
          <Link to='/'>
            <button className="flex p-2 items-center" onClick={handleLogout}>
              <img src="img/Icon_Settings.png" alt="로그아웃" className="h-5 w-5 mr-5" />
              <span className="font-extrabold text-sm">로그아웃</span>
            </button>
          </Link>
        </div>
      </div>
      <Nav />
    </>
  );
}

export default Mypage;
