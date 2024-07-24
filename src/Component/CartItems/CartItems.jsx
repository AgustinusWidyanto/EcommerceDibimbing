import React from 'react'
import new_collection from '../Assets/new_collections'
import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'
import { useState } from 'react'

const CartItems = () => {
    let totalPrice = 0;
    let qty = 2;
    let totalTemp;
    let numbDisc;

    const [codeMsg, setCodeMsg] = useState("")

    new_collection.map((item, i) => {
        totalTemp = item.new_price * qty
        totalPrice = totalPrice + totalTemp
    })

    const [totalDisc, setTotalDisc] = useState(totalPrice)

    const codePromo = () => {
        numbDisc = (Math.floor(Math.random() * 51))
        console.log(numbDisc)
        setTotalDisc(totalPrice - (totalPrice * numbDisc / 100))
        setCodeMsg("*You get " + numbDisc + "% discount.")
    }

    return (
        <div className='cartitems'>
            <div className="ct-left">
                <div className="ct-format-main">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                {new_collection.map((item, i) => {
                    return (
                        <div>
                            <div className="ct-format ct-format-main">
                                <img src={item.image} alt="" className='ct-prod-icon' />
                                <p>{item.name}</p>
                                <p>${item.new_price}</p>
                                <button className='ct-quantity'>{qty}</button>
                                <p>${totalTemp}</p>
                                <img src={remove_icon} alt="" className='ct-remove-icon' />
                            </div>
                        </div>
                    )

                })}
                <hr />
            </div>
            <div className="ct-right">
                <div className="ct-down">
                    <div className="ct-total">
                        <h1>Cart Total</h1>
                        <div className="">
                            <div className="ct-total-item">
                                <p>Subtotal</p>
                                <p>${0}</p>
                            </div>
                            <hr />
                            <div className="ct-total-item">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="ct-total-item">
                                <h3>Total</h3>
                                <h3>${totalPrice}</h3>
                            </div>
                        </div>
                        <div className="ct-promocode">
                            <p>If you have a promo code, Enter it here</p>
                            <div className="ct-promobox">
                                <input type="text" placeholder='Promo Code' />
                                <button onClick={() => { codePromo() }}>Submit</button>

                            </div>
                            <p><i>
                                {codeMsg}
                            </i> </p>
                        </div>
                        <div className="ct-total-item">
                            <h3>Total After Discount</h3>
                            <h3>${totalDisc}</h3>
                        </div>


                        <button>Proceed To Checkout</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartItems