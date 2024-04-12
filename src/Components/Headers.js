import { NavLink, useNavigate, Link } from 'react-router-dom'
import logo from '../images/logo-no-background.png'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Home from './Home';
import { Button } from 'react-bootstrap';
function Headers(props) {
    const user = localStorage.getItem('login')
   
    let navigate = useNavigate()
    
    function logout() {
        localStorage.clear()
        navigate('/login')
    }
    let count = localStorage.getItem('count')
    return (
        <>

            <ul className="nav-bar-header">
                <li><NavLink to='/'><img className='logo' src={logo}></img></NavLink></li>
                {
                    localStorage.getItem('login') ?
                        <>
                            <li><NavLink to='/' className='headers-center'>Home</NavLink></li>
                            <li><NavLink to='/aboutus' className='headers-center'>About Us</NavLink></li>
                            <li><NavLink to='/products' className='headers-center'>Products</NavLink></li>
                            <li><NavLink to='/' className='headers-center'>Contact</NavLink></li>
                        </> :
                        null
                }
                {
                    localStorage.getItem('login') ?
                        <>
                            <li><button className='logout-btn'>{user}</button></li>
                            
                            <li><button onClick={logout} className='logout-btn' >Logout</button></li>
                            <li>
                                <NavLink to='/cart' className='headers-right'>
                                    <div style={{ position: 'relative', display: 'inline-block' }}>
                                        <FontAwesomeIcon className='cart-icon' icon={faShoppingCart} />
                                        
                                    </div>
                                </NavLink>
                            </li>
                        </> :
                        <>
                            <li><NavLink to='/register' className='headers-right'>Signup</NavLink></li>
                            <li><NavLink to='/login' className='headers-right' >Login</NavLink></li>
                        </>
                }
            </ul>
        </>
    )
}
export default Headers;