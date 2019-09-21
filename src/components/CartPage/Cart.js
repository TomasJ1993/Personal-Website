import React from 'react'
import Title from '../Title'
import CartColumns from '../CartPage/CartColumns'
import CartList from '../CartPage/CartList'
import CartTotals from '../CartPage/CartTotals'


export default function Cart() {
    return ( 
        <section>
            {/*title*/}
            <div className="container">
                <Title title='your cart items' center/>
            </div>
            {/*cart columns*/}
            <CartColumns/>
            {/*cart list*/}           
            <CartList/>
            {/*cart totals*/}
            <CartTotals/>

            </section>
    )
}
