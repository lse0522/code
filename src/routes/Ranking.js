import React from 'react'
import { Button, Alert } from 'react-bootstrap';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import styled from 'styled-components';



const Container = styled.div`
 background-color: white;
 height: 100vh;
 width: 100%;
 padding: 0px;
`
const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 12px;
`
const HeaderMain = styled.div`
  font-size: 24px;
  font-weight: 600;
  font-family: 'cookieBold';
`
const HeaderSub = styled.div`
  font-family: 'cookieRegular';

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