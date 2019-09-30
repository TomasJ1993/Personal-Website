import React, { Component } from 'react'
import {linkData} from './linkData'
import {socialData} from './socialData'
import {animateScroll as scroll} from 'react-scroll'

const ProductContext  = React.createContext();
// Provider
// Consumer
class ProductProvider extends Component{
    state={
        sidebarOpen:false,
        cartOpen: false ,
        links: linkData,
        socialIcons: socialData,
        cart: [],
        cartItems: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProducts: {},
        loading: true,
        search: '',
        price: 0,
        min:0,
        max:0,
        company: 'all',
        shipping: false

    };
// try using useeffect here instead of componentidmount function
//https://dev.to/trentyang/replace-lifecycle-with-hooks-in-react-3d4n

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo(height){
      scroll.scrollTo(height)
  }








    handleSidebar = () =>{
        console.log('sidebar clicked', this.state.sidebarOpen);
        

        this.setState({
            sidebarOpen: !this.state.sidebarOpen
        })}
    

        handleCart = () =>{
            this.setState({
                cartOpen: !this.state.cartOpen
                
            })}


        

  

    render(){
        return(
        <ProductContext.Provider value =  {{
                ...this.state,
                increment: this.increment,
                scrollToTop: this.scrollToTop,
                scrollTo: this.scrollTo,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                handleSidebar: this.handleSidebar,
                handleCart: this.handleCart,
                closeCart: this.closeCart,
                openCart: this.openCart,
                addToCart: this.addToCart,
                setSingleProduct: this.setSingleProduct,
                handleChange: this.handleChange
                }}>
            {this.props.children}
        </ProductContext.Provider>
        );
    }

}



const ProductConsumer = ProductContext.Consumer;
    

export {ProductProvider, ProductConsumer };