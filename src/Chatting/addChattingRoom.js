import { useNavigate } from 'react-router-dom';

function addChattingRoom({ writerId, documentId, token, userId, title }) {
  // 여기에서 채팅방 ID를 생성 (글 작성자 ID와 글 ID 조합)
  const roomId = writerId + '-' + documentId; // 예: '작성자ID-글ID'
  const roomName = title; // document title
  const contentsId = documentId; // 채팅방과 연결된 콘텐츠 ID (여기서는 글 ID 사용)
  const sellerId = writerId; // 판매자 ID 설정
  const buyerIds = [userId]; // 구매자 ID를 배열로 설정 (첫 번째 구매자)


  const requestData = {
    roomId,
    roomName,
    enterUsers: [sellerId, ...buyerIds], // 판매자와 모든 구매자 ID를 합친 배열
    messageCnt: 0,
    contentsId,
    sellerId,
    buyerIds, // 수정된 부분: 구매자 ID 배열로 설정
  };

  const apiurl = 'https://www.honeybee-goody.site/goody/chatroom/create'; // API 엔드포인트 URL
  const headers = {
    Authorization: token, // 토큰이 필요한 경우, 사용자의 토큰으로 설정
    'Content-Type': 'application/json',
  };

  fetch(apiurl, {
    method: 'POST',
    headers,
    body: JSON.stringify(requestData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('HTTP 오류 ' + response.status);
      }
      return response.json();
    })
    .then((data) => {
      // 채팅방 생성이 성공하면 처리할 작업을 추가하세요
      console.log('채팅방 생성 완료:', data);

       // 생성된 채팅방으로 리다이렉트
       const navigate = useNavigate();
       navigate(`/chatdetails/${data.roomId}`); // 채팅방의 URL로 이동
    })
    .catch((error) => {
      console.log('Request Data:', requestData);
      console.log('Request URL:', apiurl);
      
      console.error('채팅방 생성 중 오류 발생:', error);
    });
}

export default addChattingRoom;
