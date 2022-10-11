import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: ${props => props.height ? '60px' : '80px'};
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    position: fixed;
    bottom: 0px;
`
const Item = styled.div`
    display: flex;
    align-self: center; 
    justify-content: center;
    width: 60px;
`

function Navigation() {
    const [ height, setHeight ] = useState(0)
    const [ toggle, setToggle ] = useState(true)
    const navigation = useNavigate()

    // function onScroll() {
    //     const h = window.innerHeight
    //     if (height == h) return
    //     setHeight(window.innerHeight)
    // }

    // useEffect(() => {
    //     setHeight(window.innerHeight)
    //     window.addEventListener('scroll', () => onScroll())

    //     return(
    //         window.removeEventListener('scroll', () => {})
    //     )
    // })


return (
    <Container>
        <Item onClick={() => navigation('/')} >게시판</Item>
        <Item onClick={() => navigation('/Ranking')} >랭킹</Item>
        <Item>상점</Item>
        <Item>설정</Item>
    </Container>
  )
}

export default Navigation