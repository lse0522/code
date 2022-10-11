import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: white;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Button = styled.div`
  height: 120px;
  width: 200px;
  display: flex;
  align-items:center;
  justify-content:center;
`

function Login(props) {
  return (
    <Container>
      <Button onClick={() => props.action(true) } >로그인하기</Button>
    </Container>
  )
}

export default Login