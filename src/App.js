import React,{ useEffect} from 'react';
import './App.css';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
// import Sell from './components/home/Sell';
import Buy from './components/buy/Buybusiness';
import Sell from './components/sell/sell';
import Show from './components/home/Show';
import Login from './components/home/Login';
import About from './components/dashboard/About';
import Nav from './components/navbar/Nav';
import Getbuyer from './components/dashboard/Getbuyer';
import Getseller from './components/dashboard/Getseller';
import Buyshell from './components/buy/Buyshell';
import Dashoard from './components/dashboard/Dashoard';
import Create from './components/dashboard/Create';
import Post from './components/dashboard/Post';
import { useDispatch, useSelector } from 'react-redux';
import {isUserLogin } from './actions/authActions'
import DisplayData from './data/Displaydata';


function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if(!auth.authenticate){
        dispatch(isUserLogin());
    }

});

  return (
    <div className="App">
      <Router>
      {/* <Navbar /> */}
      <Nav/>
      
        <Routes>  
          <Route exact path='/' element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/sell" element={<Sell />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/show/:postId' element={<Show />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/buyshell' element={<Buyshell />} />
          <Route path='/sellers' element={<Getbuyer />} />
          <Route path='/buyers' element={<Getseller />} />
          <Route path='/dashoard' element={<Dashoard />} />
          <Route path='/create' element={<Create />} />
          <Route path='/post' element={<Post />} />
          <Route path='/data' element={<DisplayData />} />
          
        </Routes>

        </Router>
    
    </div>
  );
}

export default App;
