import { useEffect, useLayoutEffect, useState} from 'react';
import { Routes, Route } from 'react-router';
import Ranking from './routes/Ranking';
import Login from './routes/Login';
import Navigation from './components/Navigation';
import Home from './routes/Home';

function setScreenSize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)

  useEffect(() => {
    setScreenSize()
  })

  return (
    isLoggedIn 
      ?
      // 로그인 되었을 때
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Ranking />} path='/ranking' />
    </Routes> 
      :
      // 로그인 안되었을 때
    <>
      <Routes>
        <Route element={<Login action={setIsLoggedIn} />} path='/' />
      </Routes>
    </>
  );
}


export default App;