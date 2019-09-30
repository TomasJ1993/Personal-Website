import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import About from  './pages/AboutPage';
import Home from  './pages/HomePage';
import Contact from  './pages/ContactPage';
import Default from  './pages/Default';

import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import AOS from 'aos' 
import 'aos/dist/aos.css'


class App extends Component {
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
  render(){
    
  return (
    
    <div>
 
    {/*navbar, sidebar, cart, footer*/}
    <Navbar/>
    <SideBar/>
    <Switch>
      <Route path="/" exact component={Home}/>
    </Switch>
    <Footer/>
      </div>
  );
}
}

const color = '#f15025';
const Button = styled.button`
color:red;
background: ${color};
font-size: ${(props) => props.large? '3rem': '1rem'}

`

export default App;
