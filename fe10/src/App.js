import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ResInfo from './components/ResInfo';

function App() {

  const [res, setRes] = useState([]); //가게 리스트 정보 관리
  let [pageNum, setPageNum] = useState(1); // 페이지 번호를 상태로 관리

  // 맛집 api호출
  const fetch = async (pageNum) => {
    const url = "http://apis.data.go.kr/6260000/FoodService/getFoodKr";
    const endpoint = `${url}?serviceKey=REACT_APP_MY_KEY&numOfRows=10&pageNo=${pageNum}&resultType=json`;

    try{
      const res = await axios.get(endpoint);
      const foodList = res.data.getFoodKr.item;
      setRes([...foodList]);
    }catch(error){
      console.error(error);
      window.alert("error");
    }
  }

  useEffect(() => {
    fetch(pageNum)
  },[pageNum])

  // 음식점 리스트 다음 페이지 호출
  const gotoNextPage = () =>{
    setPageNum((prePageNum) => prePageNum + 1);
    console.log("newPageNum = ",pageNum);
  }

  return (
    <> 
      <Title>부산 맛집 정보 리스트</Title>
    
      <ul>
        {res.map((item)=>{
          return(
            // 가게 리스트 컴포넌트
            <ResInfo resTitle={item.MAIN_TITLE} detail={item.ITEMCNTNTS} mainMenu={item.RPRSNTV_MENU}
                gugun={item.GUGUN_NM} addr={item.ADDR1} tel={item.CNTCT_TEL} weekNTime={item.USAGE_DAY_WEEK_AND_TIME} 
                homepage={item.HOMEPAGE_URL && item.HOMEPAGE_URL.length > 0 ? item.HOMEPAGE_URL : "없음"}> {/* 홈페이지가 없을때 없음 처리 */}
            </ResInfo>
          )
        })}
      </ul>

      <Button onClick={gotoNextPage}>다음 페이지</Button>
    </>
  );
}

const Title = styled.h1`
    text-align: center;
    margin: 40px 0;
`
const Button = styled.button`
    font-size: 18px;
    padding: 4px 20px;
    float: right;
    margin: 0 20px 20px 0;
    background-color: #545454;
    border: solid 2px #545454;
    border-radius: 10px;
    color: white;
    cursor: pointer;
`

export default App;
