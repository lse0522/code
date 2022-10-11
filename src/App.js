import './App.css';
import React, { useTransition } from 'react';
import ReactDOM from 'react-dom';
import {Routes, Route} from "react-router-dom";
import { Container, Nav ,Navbar } from 'react-bootstrap'
import Login from './components/Login';
import Rr from './components/Rr';
import Ranking from './components/Ranking';
import data from './data.js';
import { useEffect, useState} from 'react';
import { googleLogout } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

function App() {
  // let [product, setProduct] = useState(data);
  const Array = [0, 1, 2, 3, 4];
  

  const [user, setUser] = useState({});

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject)
    setUser(userObject);
    document.getElementById("SignInDiv").hidden = true;
  }

  function handleSignOut(e) {
    setUser({});
    document.getElementById("SignInDiv").hidden = false;
  }

  useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
      client_id : "759846455907-i3k0302v3b1k97pivh13ttkcdsjir8b6.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("SignInDiv"),
      {theme: "outline", size: "large"}
    );

    google.accounts.id.prompt();

  }, []);
  return (
    <div className="App">
      <h1 className='logo_name'>MNB</h1>
      <div id="SignInDiv"></div>
      {
        Object.keys(user).length !=0 &&
        <button onClick={(e) => handleSignOut(e)}>로그아웃</button>
      }
       {/* {
        user &&
          <div>
             <img src={user.picture}></img>
             <h4>{user.name}</h4>
          </div>
      } */}

{/* 
 <Navbar  variant="light">
  <Container>
    <Nav className="me-auto">
    <Nav.Link href="/" className="shop_list" >Home</Nav.Link>
      <Nav.Link href="/login" className="shop_list" >로그인</Nav.Link>
      <Nav.Link href="/rr" className="shop_list" >게시판</Nav.Link> 
      <Nav.Link href="/rank" className="shop_list" >랭킹</Nav.Link>
    </Nav>
  </Container>
</Navbar>

<Routes>
  <Route path="/"/>
  <Route path="/login" element={<Login />} />
  <Route path="/rr" element={<Rr />} />
  <Route path="/rank" element={<Ranking />} />
</Routes>  */}



    <div className='ranking'>
      <h2>Leaderbord</h2>
      <span>오늘의 랭킹</span>
    {
      Array.map(()=>{
        return(
          <div className='p_box'>
          <img className='p_box_p' src='./logo192.png'/>
          <h4 className='p_box_r'>1위</h4>
          <span className='p_box_t'>설명설명설명설명설명설명</span>
        </div>
        );
      })
    }
    </div>




  </div>

  );
}


export default App;