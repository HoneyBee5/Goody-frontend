import React, { useState, useEffect } from 'react';
import { Nav } from '../Component/Nav';
import { HomeActionBar } from '../Main/Home';
import { Link } from 'react-router-dom';
import { EditOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Card, Input, Button } from 'antd';
const { Meta } = Card;

const Mypage = () => {
  const [userData, setUserData] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({
    nickname: '',
    grade: '',
    daysSinceJoin: '',
    accountBank: '',
    accountNum: '',
    address: '',
    userPhoneNum: '',
  });

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
          setEditedData({
            nickname: data.nickname,
            grade: data.grade,
            daysSinceJoin: data.daysSinceJoin,
            accountBank: data.accountBank,
            accountNum: data.accountNum,
            address: data.address,
            userPhoneNum: data.userPhoneNum,
          });
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

  const handleEllipsisClick = () => {
    setShowDetails(!showDetails);
  };

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleSaveClick = async () => {
    try {
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `${token}`,
        'Content-Type': 'application/json',
      };

      const response = await fetch('https://www.honeybee-goody.site/goody/myPage/updateUser', {
        method: 'PATCH',
        headers,
        body: JSON.stringify(editedData),
      });

      if (response.ok) {
        setUserData(editedData);
        setEditMode(false);
      } else {
        console.error('API 요청 중 오류 발생: ', response.status);
      }
    } catch (error) {
      console.error('API 요청 중 오류 발생: ', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'birth') {
      // 'birth' 필드의 경우, 입력값을 Date 객체로 변환하여 저장
      setEditedData((prevData) => ({
        ...prevData,
        [name]: value ? new Date(value).toISOString().split('T')[0] : '',
      }));
    } else {
      // 다른 필드의 경우, 그냥 저장
      setEditedData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <>
      <HomeActionBar imageSrc="img/ActionBar.png" />
      <div className='flex justify-center'>
        <Card
          style={{
            width: 350,
          }}
          actions={[
            <EditOutlined key="edit" onClick={handleEditClick} />,
            <EllipsisOutlined key="ellipsis" onClick={handleEllipsisClick} />,
          ]}
        >
          <Meta
            avatar={
              <Avatar
                style={{
                  backgroundColor: '#87d068',
                }}
                icon={<UserOutlined />}
              />
            }
            title={editMode ? (
              <Input
                name="nickname"
                value={editedData.nickname}
                onChange={handleInputChange}
                placeholder="Nickname"
              />
            ) : (
              userData ? userData.nickname : 'Loading...'
            )}
            description={editMode ? (
              <>
                <Input
                  name="grade"
                  value={editedData.grade}
                  placeholder="Grade"
                />
              </>
            ) : (
              <>
                <div>Grade: {userData ? userData.grade : 'Loading...'}</div>
                <div>함께한지 {userData ? userData.daysSinceJoin : 'Loading...'} 일 째</div>
              </>
            )}
          />
          {showDetails && (
            <div className="pr-5 pl-12 pt-7" >
              {/* Additional information display */}
              <p>
                은행 : {editMode ? (
                  <Input
                    name="accountBank"
                    value={editedData.accountBank}
                    onChange={handleInputChange}
                    placeholder="Account Bank"
                  />
                ) : (
                  userData ? userData.accountBank : ''
                )} 계좌: {editMode ? (
                  <Input
                    name="accountNum"
                    value={editedData.accountNum}
                    onChange={handleInputChange}
                    placeholder="Account Number"
                  />
                ) : (
                  userData ? userData.accountNum : ''
                )}
              </p>
              <p >
                주소: {editMode ? (
                  <Input
                    name="address"
                    value={editedData.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                  />
                ) : (
                  userData ? userData.address : ''
                )}
              </p>
              <p>
                전화번호: {editMode ? (
                  <Input
                    name="userPhoneNum"
                    value={editedData.userPhoneNum}
                    placeholder="User Phone Number"
                  />
                ) : (
                  userData ? userData.userPhoneNum : ''
                )}
              </p>
              
              { editMode && (
                <div className='flex justify-end'>
                <Button
                  type="primary"
                  style={{ backgroundColor: '#FFD52B', color: 'black'}}
                  className='flex items-end'
                  onClick={handleSaveClick}
                >
                  Save
                </Button>
                </div>
              )}
            </div>
          )}
        </Card>
      </div>


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
          <Link to="/myContentsList">
            <button className="flex p-2 items-center">
              <img src="img/Icon_List.png" alt="내 글 목록" className="h-5 w-5 mr-5" />
              <span className="font-extrabold text-sm">내 글 목록</span>
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
