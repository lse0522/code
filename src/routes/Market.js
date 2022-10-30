import React from 'react'
import styled from 'styled-components';
import Navigation from '../components/Navigation';

const Container = styled.div`
  background-color: white;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  padding: 0px;
`
const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin-bottom: 8px;
`
const HeaderMain = styled.div`
  font-size: 28px;
  font-family: 'cookieBold';
  margin-bottom: 6px;
`
const HeaderSub = styled.div`
  font-family: 'cookieRegular';
  font-size: 14px;
`
const Upload = styled.div`
  margin : 40px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: 'cookieRegular';
  border: 2px solid black;
  height: 60px;
  border-radius: 4px;
  align-items: center;
  padding-top: 18px;
`
const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin : 30px 20px 50px 12px;
  border-radius: 4px;
  height: 500px;
  font-size: 16px;
  font-family: 'cookieRegular';
`

const Item_name = styled.div`
  display: flex;
  margin : 10px;
  border-bottom: 0.4px solid black;
  height: 40px;
  align-items: center;
`

const Item_ex = styled.div`
  display: flex;
  margin : 10px;
  border: 0.4px solid black;
  border-radius: 4px;
  height: 200px;
  align-items: center;
`

const Item_price = styled.div`
  display: flex;
  margin : 10px;
  border-bottom: 0.4px solid black;
  height: 50px;
  align-items: center;
`

const Item_picture = styled.div`
  display: flex;
  margin : 10px;
  border: 1px solid gray;
  border-radius: 4px;
  height: 100px;
  font-size: 16px;
  font-family: 'cookieRegular';
  align-items: center;
`


function Market() {
  return (
    <>
        <Container>
        <Header>
          <HeaderMain>Market</HeaderMain>
          <HeaderSub>물건들을 사고 팝니다.</HeaderSub>
        </Header>
        <Item>
          <Item_name>
            제품 이름
          </Item_name>
          <Item_ex>
            제품 설명
          </Item_ex>
          <Item_price>
            가격 선정
          </Item_price>
          <Item_picture>
            사진 올리기
          </Item_picture>
        </Item>
          <Upload>상품 올리기</Upload>
      </Container>
      <Navigation />
    </>
  )
}

export default Market