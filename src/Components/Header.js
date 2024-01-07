import React, {useEffect} from 'react';
import Logo from './Assets/Logo (1).png'
import {Link, useNavigate} from "react-router-dom";
import {isAuth} from "../Lib/helper";
import Cookies from "js-cookie";


const Header = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        Cookies.remove('token')
        localStorage.removeItem('token')
        navigate('/')
    }
    return (
        <header>
            <div className={'container'}>
                <div className={'header-wrapper'}>
                    <div className={'header-box'}>
                        <a href="#">
                            <img src={Logo} alt="" className={'header-img'}/>
                        </a>
                    </div>
                    <nav className={'header-nav'}>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/'}>Admin</Link>
                        {
                            !isAuth() ?<>
                                    <Link to={'/sign-up'}>Signup</Link>
                                    <Link to={'/sign-in'}>Signin</Link>
                                </> :
                                <button onClick={handleLogout}>
                                    Logout
                                </button>
                        }
                    </nav>
                    <div className={'icons'}>
                        <button className={'header-btn'}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2_42)">
                                    <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="black"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_42">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <button className={'header-btn'}>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.001 1.52901C12.35 -0.57999 15.98 -0.50999 18.243 1.75701C20.505 4.02501 20.583 7.63701 18.479 9.99301L9.99901 18.485L1.52101 9.99301C-0.582994 7.63701 -0.503994 4.01901 1.75701 1.75701C4.02201 -0.506989 7.64501 -0.58299 10.001 1.52901ZM16.827 3.17001C15.327 1.66801 12.907 1.60701 11.337 3.01701L10.002 4.21501L8.66601 3.01801C7.09101 1.60601 4.67601 1.66801 3.17201 3.17201C1.68201 4.66201 1.60701 7.04701 2.98001 8.62301L10 15.654L17.02 8.62401C18.394 7.04701 18.319 4.66501 16.827 3.17001Z" fill="black"/>
                            </svg>
                        </button>
                        <button className={'header-btn'}>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 14V2H0V0H3C3.26522 0 3.51957 0.105357 3.70711 0.292893C3.89464 0.48043 4 0.734784 4 1V13H16.438L18.438 5H6V3H19.72C19.872 3 20.022 3.03466 20.1586 3.10134C20.2952 3.16801 20.4148 3.26495 20.5083 3.38479C20.6019 3.50462 20.6668 3.6442 20.6983 3.79291C20.7298 3.94162 20.7269 4.09555 20.69 4.243L18.19 14.243C18.1358 14.4592 18.011 14.6512 17.8352 14.7883C17.6595 14.9255 17.4429 15 17.22 15H3C2.73478 15 2.48043 14.8946 2.29289 14.7071C2.10536 14.5196 2 14.2652 2 14ZM4 21C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19C2 18.4696 2.21071 17.9609 2.58579 17.5858C2.96086 17.2107 3.46957 17 4 17C4.53043 17 5.03914 17.2107 5.41421 17.5858C5.78929 17.9609 6 18.4696 6 19C6 19.5304 5.78929 20.0391 5.41421 20.4142C5.03914 20.7893 4.53043 21 4 21ZM16 21C15.4696 21 14.9609 20.7893 14.5858 20.4142C14.2107 20.0391 14 19.5304 14 19C14 18.4696 14.2107 17.9609 14.5858 17.5858C14.9609 17.2107 15.4696 17 16 17C16.5304 17 17.0391 17.2107 17.4142 17.5858C17.7893 17.9609 18 18.4696 18 19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21Z" fill="black"/>
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;