// import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Info from './Components/Info';

import { BrowserRouter , Route , Routes} from 'react-router-dom';


import Navbar2 from './task2/Navbar2';
import User from './task2/User';
import Calculator from './Components/Calculator';
import UserInfo from './task2/UserInfo';
import Parent from './lifing state up/Parent';

class  App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar2/>}/>
          <Route path="cards" element={<Info/>}/>
          <Route path="/users"element={<User/>}/>
          <Route path="/calculator" element={<Calculator/>}/>
          <Route path="/parent" element={<Parent/>}/>
          <Route path="/user/:id"  element={<UserInfo/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
