import './App.css';
import React, { useEffect } from 'react';
import Social from './components/Social/Social';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Download from './components/Download/Download';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Projects from './components/Project/Projects';
import Education from './components/Education/Education';
import Hobbies from './components/Hobbies/Hobbies';

function App() {
  
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [])
  
  
  return (
    <div className='app'>
     <BrowserRouter>
     <Header/>
     <Social/>
     <Routes>
        <Route path='/'  element={<CoverPage/>} />
        <Route path='/Projects' element={<Landing/>} />
     </Routes>
     <Download/>
     </BrowserRouter>
    </div>
  );
}

function Landing(){
  return(
    <>
        <Projects/>
        <Education/>
    </>
  )
}
function CoverPage(){
  return(
    <>
        <Profile/>
        <Hobbies/>
        <Education/>
    </>
  )
}

export default App;
