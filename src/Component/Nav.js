import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

const iconStyle = { width: 25, margintop: '2px' }; // Adjust the size of your icons

const Nav = () => {
  const location = useLocation();

  return (
    <div>
    <Paper elevation={3} style={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <BottomNavigation>
        <BottomNavigationAction
          label="Home"
          icon={
            <img
              src={location.pathname === '/home' ? '../img/home_yellow.png' : '../img/home_gray.png'}
              alt="Home"
              style={iconStyle}
            />
          }
          component={Link}
          to="/home"
          selected={location.pathname === '/home'}
        />
        <BottomNavigationAction
          label="Collection"
          icon={
            <img
              src={location.pathname === '/collection' ? '../img/collection_yellow.png' : '../img/collection_gray.png'}
              alt="Collection"
              style={iconStyle}
            />
          }
          component={Link}
          to="/collection"
          selected={location.pathname === '/collection'}
        />
        <BottomNavigationAction
          label="Add Write"
          icon={
            <img
              src={location.pathname === '/addWrite' ? '../img/write_yellow.png' : '../img/write_gray.png'}
              alt="Add Write"
              style={iconStyle}
            />
          }
          component={Link}
          to="/addWrite"
          selected={location.pathname === '/addWrite'}
        />
        <BottomNavigationAction
          label="Chatting"
          icon={
            <img
              src={location.pathname === '/chatting' ? '../img/chat_yellow.png' : '../img/chat_gray.png'}
              alt="Chatting"
              style={iconStyle}
            />
          }
          component={Link}
          to="/chatting"
          selected={location.pathname === '/chatting'}
        />
        <BottomNavigationAction
          label="My Page"
          icon={
            <img
              src={location.pathname === '/mypage' ? '../img/my_yellow.png' : '../img/my_gray.png'}
              alt="My Page"
              style={iconStyle}
            />
          }
          component={Link}
          to="/mypage"
          selected={location.pathname === '/mypage'}
        />
      </BottomNavigation>
    </Paper>
    </div>
  );
};

export { Nav };
