import React, {useEffect} from 'react'
import {GoogleLogin} from 'react-google-login'

function Login() {

  const clientId="759846455907-i3k0302v3b1k97pivh13ttkcdsjir8b6.apps.googleusercontent.com"

   async function onSuccess(res) {
     const profile = res.getBasicProfile();
     const userdata = {
       email: profile.getEmail(),
     };
     console.log(userdata) 
   }


   const onFailure = (res) => {
     console.log("로그인 실패",res);
   };

  return(
    
    <div>
       <h4>login</h4>
       <GoogleLogin
         clientId={clientId}
         buttonText="구글 로그인"
         onSuccess={onSuccess}
         onFailure={onFailure}
         cookiePolicy={"single_host_origin"}
       />
     </div>
  );
}
export default Login;