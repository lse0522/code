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

const Set_main = styled.div`
  display: flex;
  flex-direction: column;
  margin : 10px;
  border-radius: 4px;
  font-size: 16px;
  font-family: 'cookieRegular';
`


const Set_user = styled.div`
  display: flex;
  padding-top: 14px;
  flex-direction: column;
  margin : 10px;
  border: 2px solid black;
  border-radius: 4px;
  height: 50px;
  align-items: center;
`

const Set_qna = styled.div`
  display: flex;
  padding-top: 14px;
  flex-direction: column;
  margin : 10px;
  border: 2px solid black;
  border-radius: 4px;
  height: 50px;
  align-items: center;
`

const Set_return = styled.div`
  display: flex;
  padding-top: 14px;
  flex-direction: column;
  margin : 10px;
  border: 2px solid black;
  border-radius: 4px;
  height: 50px;
  align-items: center;
`

const Set_call = styled.div`
  display: flex;
  padding-top: 14px;
  flex-direction: column;
  margin : 10px;
  border: 2px solid black;
  border-radius: 4px;
  height: 50px;
  align-items: center;
`




function Set() {
  return (
    <>
        <Container>
        <Header>
          <HeaderMain>설정</HeaderMain>
          <HeaderSub></HeaderSub>
        </Header>
        <Set_main>
            <Set_user>
                계정관리
            </Set_user>
            <Set_qna>
               상품 Q&A
            </Set_qna>
            <Set_return>
               반품/환불
            </Set_return>
            <Set_call>
               고객센터
            </Set_call>
        </Set_main>
      </Container>
      <Navigation />
    </>
  )
}

export default Set