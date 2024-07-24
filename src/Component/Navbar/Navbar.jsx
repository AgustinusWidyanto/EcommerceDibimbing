import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const [menu, setMenu] = useState("shop")

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='' />
                <p>MAUBELI</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}>
                    <Link to='/' style={{ textDecoration: 'none'}}>
                        Shop{menu === "shop" ? <hr /> : <></>}
                    </Link>
                </li>
                <li onClick={() => { setMenu("men") }}>
                    <Link to='/mens' style={{ textDecoration: 'none'}}>
                        Men{menu === "men" ? <hr /> : <></>}
                    </Link></li>
                <li onClick={() => { setMenu("women") }}>
                    <Link to='/womens' style={{ textDecoration: 'none'}}>
                        Women{menu === "women" ? <hr /> : <></>}
                    </Link>
                </li>
                <li onClick={() => { setMenu("kid") }}>
                    <Link to='/kids' style={{ textDecoration: 'none'}}>
                        Kids{menu === "kid" ? <hr /> : <></>}
                    </Link>
                </li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'>
                    <button>Login</button>
                </Link>
                <Link to='/cart'>
                    <img src={cart_icon} alt='' />
                </Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}
