import React from 'react'
import { Button, Alert } from 'react-bootstrap';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import styled from 'styled-components';



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
function Ranking() {
  return (
    <Container className='container-sm' >
      <Header>
        <HeaderMain>Leader Board</HeaderMain>
        <HeaderSub>오늘의 판매 순위를 알려드립니다.</HeaderSub>
      </Header>
      <div>section</div>
    </Container>
  )
}

export default Ranking