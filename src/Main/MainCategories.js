import React, { useState, useEffect } from 'react';
import { ActionBarClose } from '../Component/ActionBarClose';
import Item_width from '../Component/Item_width';
import { useLocation } from 'react-router-dom';

const MainCategories = () => {
    
    const [postPreviewInfo, setPostPreviewInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
  
    const categoryId = queryParams.get('category');
    const categoryName = queryParams.get('name');

    useEffect(() => {

        // 토큰 가져오기
        const token = localStorage.getItem('token');

        const fetchData = async () => {
            try {
                const headers = {
                    Authorization: `${token}`,
                };

                const response = await fetch(
                    `http://27.96.134.23:4001/goody/contents/search?category=${categoryId}`,
                    {
                        method: 'GET',
                        headers,
                    }
                );

                if (!response.ok) {
                    throw new Error('HTTP 오류 ' + response.status);
                }

                const data = await response.json();
                console.log(data);

                if (data && data.length > 0) {
                    setPostPreviewInfo(data);
                    setLoading(false);
                } else {
                    console.error('API에서 데이터를 가져오는 중 오류 발생: 데이터가 비어 있습니다.');
                }
            } catch (error) {
                console.error('API에서 데이터를 가져오는 중 오류 발생:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [categoryId, categoryName]); // 빈 배열을 의존성 배열로 사용하여 최초 한 번만 실행되도록 설정

    return (
        <>
            <ActionBarClose actionBarName={categoryName} />
            {loading ? (
                <div>Loading...</div>
            ) : (
                postPreviewInfo.map((item, index) => (
                    <div key={index}>
                        <Item_width data={item} />
                        {index === postPreviewInfo.length - 1 && <div style={{ marginBottom: '6rem' }}></div>}
                    </div>
                ))
            )}
        </>
    );
}

export default MainCategories;
