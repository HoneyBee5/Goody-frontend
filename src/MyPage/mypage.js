import React, { useState } from 'react';
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

// 카드 컴포넌트
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

const RecipeReviewCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='ml-7 '>
    <Card style={{ width: 355, backgroundColor: grey[100], borderRadius: 16}}>

    <CardHeader
        avatar={<Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe"> G </Avatar>}
        action={<IconButton aria-label="settings"></IconButton>}
        title={<Typography variant="h7" style={{ fontWeight: 'bold' }}> 사용자 이름 </Typography> }
        subheader={<Typography variant="subtitle1" style={{ fontWeight: '' }}>사용자 등급 </Typography> }
      />
     
      <CardActions disableSpacing>
        <ExpandMore
         {...(expanded ? { expand: "true" } : {})} // Pass expand prop only when expanded is true
         onClick={handleExpandClick}
         aria-expanded={expanded}
         aria-label="show more"
        >
          
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>대표계좌:</Typography>
          <Typography paragraph></Typography>
          <Typography paragraph>주소 : </Typography>
          <Typography paragraph></Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}


const Mypage = () => {

  return (
    <>

      <HomeActionBar imageSrc="img/ActionBar.png" />
      <RecipeReviewCard />

      {/* 버튼 */}
      <div className=" pr-5 pl-5 pt-7 pb-7">

        <span className="font-extrabold p-2 text-gray-400 text-sm">사용이력</span>

        <div className="flex pb-2 mt-2"><Link to="/reviewlist">
          <button className="flex p-2 items-center"> 
            <img src="img/Icon_List.png" alt="리뷰 목록" className="h-6 w-6 mr-5" />
            <span className="font-extrabold">리뷰 목록</span>
          </button></Link>
        </div>

        <div className="flex pb-2"><Link to="/purchaselist">
          <button className="flex p-2 items-center">
            <img src="img/Icon_Purchase.png" alt="구매 참여 목록" className="h-6 w-6 mr-5" />
            <span className="font-extrabold">구매 & 참여 목록</span>
          </button></Link>
        </div>

        <div className="flex pb-2 mb-5"><Link to="/favoritelist">
          <button className="flex p-2 items-center"> 
            <img src="img/Icon_Favorite.png" alt="찜 목록" className="h-6 w-6 mr-5" />
            <span className="font-extrabold">찜 목록</span>
          </button></Link>
        </div>


        <hr className="mb-5" />
        <span className="font-extrabold p-2 text-gray-400  text-sm">서비스</span>

        <div className="flex pb-2 mt-2">
          <button className="flex p-2 items-center">
            <img src="img/Icon_Info.png" alt="공지사항" className="h-6 w-6 mr-5" />
            <span className="font-extrabold">공지사항</span>
          </button>
        </div>

        <div className="flex pb-2 mb-10">
          <button className="flex p-2 items-center">
            <img src="img/Icon_Settings.png" alt="로그아웃" className="h-6 w-6 mr-5" />
            <span className="font-extrabold">로그아웃</span>
          </button>
        </div>
      </div>


      <Nav />
    </>
  );
};


export default Mypage;