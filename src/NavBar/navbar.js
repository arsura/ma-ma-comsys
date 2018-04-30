import React from 'react';
import { Link } from 'react-router-dom';
import { fakeAuth } from '../Login/login';
import './navbar.css';

//const isAuthen = fakeAuth.isAuthenticated ? 'ออกจากระบบ' : 'เข้าสู่ระบบ';
//const status = fakeAuth.isAuthenticated ? '/logout' : '/login';

const NavBar = () => {

    const username = fakeAuth.userName;

    return fakeAuth.isAuthenticated ?
        (
            <div className="nav-bar" >
                <ul>
                    <li>
                        <Link to="/">หน้าหลัก</Link>
                    </li>
                    <li>
                        <Link className='login-link' to='/logout'>ออกจากระบบ</Link>
                    </li>
                    <li>
                        <Link className='user-status' to={`/profile/${fakeAuth.userName}`}>{username}</Link>
                    </li>

                </ul>
            </div>
        ) :
        (
            <div className="nav-bar" >
                <ul>
                    <li>
                        <Link to="/">หน้าหลัก</Link>
                    </li>
                    <li>
                        <Link className='login-link' to='/login'>เข้าสู่ระบบ</Link>
                    </li>
                    <li>
                        <Link className='signup-link' to='/signup'>สมัครสมาชิก</Link>
                    </li>
                </ul>
            </div>
        );
}

export default NavBar;