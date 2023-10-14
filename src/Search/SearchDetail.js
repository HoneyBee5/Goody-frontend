import React, { useState,} from 'react';
import { Nav } from '../Component/Nav';
import { SearchDetail_Item } from '../Component/SearchDetail_Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

{/*상단*/ }
const SearchDetail = () => {

  const token = localStorage.getItem('token');

  const [text, setText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTransType, setSelectedTransType] = useState(null);
  const [selectedox, setSelectedox] = useState(null);
  // const [Data, setData] = useState(null);
  const [isToggleOn, setIsToggleOn] = useState(true);


  const handleToggleClick = () => {
    setIsToggleOn(!isToggleOn);
  };

  const handleCategoryChange = (selectedValue) => {
    setSelectedCategory(selectedValue);
  };

  const handleTransTypeChange = (selectedValue) => {
    setSelectedTransType(selectedValue);
  };

  const handleoxChange = (selectedValue) => {
    setSelectedox(selectedValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // 폼 제출 기본 동작을 중지
    // 여기서 API 요청을 수행하거나 원하는 동작을 실행하세요
    console.log('검색 버튼을 눌렀습니다. 입력값:', text);
  };


  const apiUrl = `http://27.96.134.23:4001/goody/contents/search?search=${text}&category=${selectedCategory}&transType=${selectedTransType}&sold=${selectedox}`;


  const handleSearch = () => {
  
    // 요청 헤더 설정
    const headers = {
      Authorization: `${token}`,
    };
    // GET 요청을 수행
    fetch(apiUrl, {
      method: 'GET',
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      // .then((data) => {
      //   setData(data);
      // })
      .catch((error) => {
        console.error('API 요청 중 오류 발생:', error);
      });
  };


  {/*상단바*/}

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const [category, setCategory] = useState("카테고리");
  const newCategory = (event) => {
    setCategory(event.target.value)
  }

  const [transType, setTransType] = useState("거래종류");
  const newTransType = (event) => {
    setTransType(event.target.value)
  }

  const [condition, setCondition] = useState("싱태등급");
  const newCondition = (event) => {
    setCondition(event.target.value)
  }

  // if (Data === null) {
  //   return null;
  // }
  
  {/*드롭박스*/}

  return (
    <div>

        {/*상단바*/}
        <div className='flex mt-10 bg-yellow' style={{ alignItems: 'center' }}>

          {/*뒤로가기*/}
          <div className='flex mt-[0.2rem] ml-[0.8rem]'>
            <button>
              <img src='img\yellow_left.png' className='w-[1.1rem] h-[1.9rem]'></img>
            </button>
          </div>


          {/*검색입력창*/}
          <form onSubmit={handleSubmit}> {/* 폼 제출을 가로채고 handleSubmit 함수 호출 */}
          <div className='h-[2rem] w-[19rem] ml-[1.2rem] border-rounded-[0.5rem] flex items-center'>

            <img src='img\Bar.png' className='w-[23rem] h-[0.3rem] mt-[2rem] flex items-center'></img>


            <input
              type="text"
              value={text}
              maxLength={100}
              onChange={handleChange}
              placeholder='검색어를 입력해주세요.'
              className='transparent outline-none border-0 focus:outline-none w-[22rem] ml-[-19.5rem] mt-[-0.25rem]'
              style={{ border: 'none', padding: '0 8px'}}
            />
          </div>
          </form>

          {/*돋보기*/}
          <div className='ml-[0.6rem] mb-[-0.8rem]'>
            <button  onClick={handleSearch}>
              <img src="img/Search2.png" alt='검색' width={'30px'} height={'30px'}/>
            </button>
          </div>
        </div>



        {/*드롭박스*/}
        <div className='flex mt-[2rem] pl-[1.6rem]'>
          <form>
            <select className='border-[0.13rem] border-[#E6E6E6] w-[6.5rem] p-[0.25rem] rounded-[0.7rem]' 
            value={category} onChange={newCategory} onSelect={handleCategoryChange}>
              <option value="카테고리">카테고리</option>
              <option value="MOV">영화</option>
              <option value="GAME">게임</option>
              <option value="ENT">연예인</option>
              <option value="SPO">스포츠</option>
              <option value="ANI">애니/만화</option>
            </select>
          </form>

          <form className='pl-[3rem]'>
            <select className='border-[0.13rem] border-[#E6E6E6] ml-[-1.5rem] w-[6.5rem] p-[0.25rem] rounded-[0.7rem]' 
            value={transType} onChange={newTransType} onSelect={handleTransTypeChange}>
            <option value="거래종류">거래종류</option>
            <option value="판매해요">판매해요</option>
            <option value="교환해요">교환해요</option>
            <option value="나눔해요">나눔해요</option>
            <option value="같이해요">같이해요</option>
            </select>
          </form>

          <form className='pl-[3rem]'>
            <select className='border-[0.13rem] border-[#E6E6E6] ml-[-1.5rem] w-[6.5rem] p-[0.25rem] rounded-[0.7rem]' 
            value={condition} onChange={newCondition} onSelect={handleoxChange}>
            <option value="상태등급">상태등급</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            </select>
          </form>
        </div>

        <div className='bg-[#ffffff] mt-[2rem] h-[2rem] flex '>

            <p className='font-medium text-[1rem] mt-[0.1rem] ml-[20.2rem]'>품절</p>
  
          {isToggleOn ? (
            <FontAwesomeIcon icon={faToggleOn} className='flex inline-block ml-[-0.4rem] w-[4rem] h-[2rem]' style={{ color: '#f5e69e' }} onClick={handleToggleClick} />
          ) : (
            <FontAwesomeIcon icon={faToggleOff} className='flex inline-block ml-[-0.4rem] w-[4rem] h-[2rem]' style={{ color: '#f5e69e' }} onClick={handleToggleClick} />
          )}

        </div>
        
{/* 
        {Data.map((item, index) => (
        <SearchDetail_Item 
          key={index}
          title={item.title}
          price={item.price}
          createdDate={item.createdDate}
          thumbnailImg={item.thumbnailImg}
          transType={item.transType} />
        ))} */}

        <SearchDetail_Item />

        <Nav/>

    </div>
  )
}


export default SearchDetail;