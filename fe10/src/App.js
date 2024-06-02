import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function App() {

  const [res, setRes] = useState([]);

  const fetch = async() => {
    const url = "http://apis.data.go.kr/6260000/FoodService/getFoodKr";
    const endpoint = `${url}?serviceKey=REACT_APP_MY_KEY&numOfRows=10&pageNo=1&resultType=json`;
    try{
      await axios
        .get(endpoint)
        .then((res)=>{
          const foodList = res.data.getFoodKr.item;
          setRes([...foodList]);
        });
    }catch(error){
      console.error(error);
      window.alert("error");
    }
  }

  useEffect(() => {
    fetch()
  },[])


  return (
    <div>

      <ul>
        {res.map((item)=>{
          return(
            <li>
              <p>가게명 : {item.MAIN_TITLE}</p>
              <p>제목 : {item.TITLE}</p>
              <p>상세내용 : {item.ITEMCNTNTS}</p>
              <p>대표메뉴 : {item.RPRSNTV_MENU}</p>
              <p>구군 : {item.GUGUN_NM}</p>
              <p>주소 : {item.ADDR1}</p>
              <p>연락처 : {item.CNTCT_TEL}</p>
              <p>운영 및 시간 : {item.USAGE_DAY_WEEK_AND_TIME}</p>
              <p>홈페이지 : {item.HOMEPAGE_URL}</p>
          </li>
          )
          
        })}
      </ul>

    </div>
  );
}


const FoodListWrapper = styled.div`
`
export default App;
