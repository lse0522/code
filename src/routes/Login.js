import React, { useState } from 'react'

function Login() {
    // const [user, setUser] = useState({});

    // function handleCallbackResponse(response){
    //   console.log("Encoded JWT ID token: " + response.credential);
    //   var userObject = jwt_decode(response.credential);
    //   console.log(userObject)
    //   setUser(userObject);
    //   document.getElementById("SignInDiv").hidden = true;
    // }
  
    // function handleSignOut(e) {
    //   setUser({});
    //   document.getElementById("SignInDiv").hidden = false;
    // }
  
    // useEffect(()=>{
    //   /* global google */
    //   google.accounts.id.initialize({
    //     client_id : "759846455907-i3k0302v3b1k97pivh13ttkcdsjir8b6.apps.googleusercontent.com",
    //     callback: handleCallbackResponse
    //   });
  
    //   google.accounts.id.renderButton(
    //     document.getElementById("SignInDiv"),
    //     {theme: "outline", size: "large"}
    //   );
  
    //   google.accounts.id.prompt();
  
    // }, []);
  return (
    <div>Login</div>
  )
}

export default Login