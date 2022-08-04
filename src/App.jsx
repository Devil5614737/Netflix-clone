import React from 'react';
import Intro from './pages/Intro';
import Login from './pages/login';
import './styles/app.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import WhoIsWatching from './pages/WhoIsWatching';

function App() {
  return (
  <>
  <Routes>
    <Route  path='/' element={<Intro/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/results' element={<SearchResults/>}/>
    <Route path='/whoiswatching' element={<WhoIsWatching/>}/>
  </Routes>

  </>
  )
}

export default App