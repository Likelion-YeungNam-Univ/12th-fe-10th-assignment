import styled from 'styled-components';

function ResInfo({resTitle, detail, mainMenu, gugun, addr, tel, weekNTime, homepage}){

    return(
        <ResListContainer>
            <Title>{resTitle}</Title>
            <Menu>대표메뉴 : {mainMenu}</Menu>
            <p>{detail}</p>
            <br/>

            <Text>구군 : {gugun}</Text>
            <Text>주소 : {addr}</Text>
            <Text>연락처 : {tel}</Text>
            <Text>운영 및 시간 : {weekNTime}</Text>
            <Text>홈페이지 : {homepage}</Text>
        </ResListContainer>
    )
}

const ResListContainer = styled.ul`
    background-color: #f6f6db;
    border-radius: 20px;
    padding: 8px;
    margin: 24px 12px;
`
const Title = styled.p`
    font-size: 19px;
    font-weight: bold;
    margin-bottom: 12px;
`
const Menu = styled.p`
    font-weight: bold;
`
const Text = styled.p`
    color: #858585;
`

export default ResInfo;