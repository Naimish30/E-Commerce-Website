import { NavLink, useNavigate, Link } from 'react-router-dom'
import logo from '../images/logo-no-background.png'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Home from './Home';
import { Button, Nav } from 'react-bootstrap';
function Headers(props) {
    const user = localStorage.getItem('login')

    let navigate = useNavigate()

    function logout() {
        localStorage.clear()
        navigate('/login')
    }
    let count = localStorage.getItem('count')
    return (
        <header className='flex bg-white border-b py-4 sm:px-8 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50 mb-4'>
            <div className='flex flex-wrap items-center lg:gap-y-2 gap-4 w-full'>
                <NavLink to='/'><img src={logo} alt="logo" class='w-36' /></NavLink>


                <div id="collapseMenu"
                    className='lg:ml-10 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
                    <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </button>
                    {localStorage.getItem('login') ? <>
                        <ul
                            class='lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>

                            <li className='max-lg:border-b max-lg:py-3 px-3'><NavLink to='/'
                                className='text-[#007bff] hover:text-[#007bff] text-[15px] block font-semibold'>Home</NavLink></li>
                            <li className='max-lg:border-b max-lg:py-3 px-3'><NavLink to='/products'
                                className='text-[#333] hover:text-[#007bff] text-[15px] block font-semibold'>Products</NavLink></li>
                            <li className='max-lg:border-b max-lg:py-3 px-3'><NavLink to='/aboutus'
                                className='text-[#333] hover:text-[#007bff] text-[15px] block font-semibold'>About Us</NavLink></li>
                            <li className='max-lg:border-b max-lg:py-3 px-3'><NavLink to='/contact'
                                className='text-[#333] hover:text-[#007bff] text-[15px] block font-semibold'>Contact</NavLink></li>
                        </ul>
                    </> : null}

                </div>
                <div className="flex gap-x-6 gap-y-4 ml-auto">
                    <div className='flex items-center space-x-8'>
                        {
                            localStorage.getItem('login') ? <>
                                <NavLink to='/cart'>
                                    <span className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="cursor-pointer fill-[#333] inline"
                                            viewBox="0 0 512 512">
                                            <path
                                                d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                                                data-original="#000000"></path>
                                        </svg>
                                        <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
                                    </span>
                                </NavLink>

                                <button
                                    onClick={logout}
                                    className='px-5 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]'>Logout
                                </button>
                            </> : <>
                                <NavLink to='/register' ><button
                                    className='px-5 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]'>SignIn
                                </button></NavLink>
                                <NavLink to='/login'  ><button

                                    className='px-5 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]'>Login
                                </button></NavLink>
                            </>
                        }




                    </div>
                </div>
            </div>
        </header>
        // <>

        //     <ul className="nav-bar-header">
        //         <li><NavLink to='/'><img className='logo' src={logo}></img></NavLink></li>
        //         {
        //             localStorage.getItem('login') ?
        //                 <>
        //                     <li><NavLink to='/' className='headers-center'>Home</NavLink></li>
        //                     <li><NavLink to='/aboutus' className='headers-center'>About Us</NavLink></li>
        //                     <li><NavLink to='/products' className='headers-center'>Products</NavLink></li>
        //                     <li><NavLink to='/contact' className='headers-center'>Contact</NavLink></li>
        //                 </> :
        //                 null
        //         }
        //         {
        //             localStorage.getItem('login') ?
        //                 <>
        //                     <li><button className='logout-btn'>{user}</button></li>

        //                     <li><button onClick={logout} className='logout-btn' >Logout</button></li>
        //                     <li>
        //                         <NavLink to='/cart' className='headers-right'>
        //                             <div style={{ position: 'relative', display: 'inline-block' }}>
        //                                 <FontAwesomeIcon className='cart-icon' icon={faShoppingCart} />

        //                             </div>
        //                         </NavLink>
        //                     </li>
        //                 </> :
        //                 <>
        //                     <li><NavLink to='/register' className='headers-right'>Signup</NavLink></li>
        //                     <li><NavLink to='/login' className='headers-right' >Login</NavLink></li>
        //                 </>
        //         }
        //     </ul>
        // </>
    )
}
export default Headers;