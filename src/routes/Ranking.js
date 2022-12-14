import React from 'react'
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import data from '../data';



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
const Items = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`
const Item = styled.div`
  border-bottom: 0.4px solid gray;
  height: 160px;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  padding: 2px;
`
const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: space-around;
`
const Itemtitle = styled.div`
  font-size: 16px;
  font-family: 'cookieRegular';
  margin-bottom: 2px;
`
const ItemBody = styled.div`
  font-size: 12px;
`
const ItemPrice = styled.div`
  font-weight: 900;
  font-size: 16px;
`

const Dot = styled.div`
  font-family: 'cookieRegular';
  position: relative;
  height: 32px;
  width: 32px;
  background-color: red;
  border-radius: 50%;
  display: flex; 
  align-items:center;
  justify-content: center;
  color: white;
  top: 50px;
  left: 26px;
` 

function Ranking() {
  return (
    <>
      <Container className='container-sm'>
        <Header>
          <HeaderMain>Leader Board</HeaderMain>
          <HeaderSub>오늘의 판매 순위를 알려드립니다.</HeaderSub>
        </Header>
        <Items>
          {data.map((item, i) => (
            <>
              <Dot  >{i+1}</Dot>
            <Item key={item.id}>
              <img  width={140} height={140} src={item.url} />
              <ItemContent>
                <Itemtitle>
                  {item.title}
                </Itemtitle>
                <ItemBody>
                  {item.content}
                </ItemBody>
                <ItemPrice>
                {item.price}
                </ItemPrice>
              </ItemContent>
            </Item>
            </>
          ))}
        </Items>
      </Container>
      <Navigation />
    </>
  )
}

export default Ranking