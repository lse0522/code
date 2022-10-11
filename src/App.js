import { useEffect, useState} from 'react';
import { Routes, Route } from 'react-router';
import Home from './routes/Home';
import Login from './routes/Login';

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(true)

  return (
    isLoggedIn 
      ?
      // 로그인 되었을 때
    <Routes>
      <Route element={<Home />} path='/' />
    </Routes> 
      :
      // 로그인 안되었을 때
    <Routes>
      <Route element={<Login />} path='/' />
    </Routes>
  );
}


export default App;