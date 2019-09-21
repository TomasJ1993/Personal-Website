import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaHome} from 'react-icons/fa';
import styled from 'styled-components';
import About from  './pages/AboutPage';
import Home from  './pages/HomePage';
import Products from  './pages/ProductsPage';
import Contact from  './pages/ContactPage';
import SingleProduct from  './pages/SingleProductPage';
import Cart from './pages/CartPage';
import Default from  './pages/Default';

import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import SideCart from './components/SideCart';
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
      <Route path="/about"  component={About}/>
      <Route path="/contact"  component={Contact}/>
      <Route path="/products" exact component={Products}/>
      <Route path="/products/:id" component={SingleProduct}/>
      <Route path="/cart" component={Cart}/>
      <Route component={Default}/>
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
