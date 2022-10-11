import './App.css';
import React, { useTransition } from 'react';
import ReactDOM from 'react-dom';
import data from './data.js';
import { useEffect, useState} from 'react';
import { googleLogout } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import Card from './components/reader-board/Card';
import Button from './components/Button';

function App() {
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

    <div className='ranking'>
      <h2>Leaderbord</h2>
      <span>오늘의 랭킹</span>
      <Button title={'버튼'} height={60} width={120} action={() => console.log("버튼")} />
    {
      Array.map((v, i)=>{
        return(
            <Card 
              key={i}
              action={() => console.log("페이지 이동하겠습니다")} 
              title={"1위"}
              text={'테스트'}  
            />
        );
      })
    }
    </div>




  </div>

  );
}


export default App;