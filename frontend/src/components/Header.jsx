import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import sc_logo from '../assets/imgs/sc_logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { resetCart } from '../slices/cartSlice';
import SearchBox from './SearchBox';

import { FiBox, FiHelpCircle, FiLogIn, FiLogOut, FiMessageSquare, FiShoppingBag, FiShoppingCart, FiUser, FiUsers } from "react-icons/fi";

const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const { userInfo } = useSelector((state) => state.auth);

    const collapseNavBar = () => {
        const navbarContent = document.getElementById('navbarSupportedContent');
        navbarContent.classList.remove("show");

        const navbarToggelBtn = document.getElementById('navbarTogglerBtn');
        navbarToggelBtn.classList.add('collapsed')
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
          await logoutApiCall().unwrap();
          dispatch(logout());
          // NOTE: here we need to reset cart state for when a user logs out so the next
          // user doesn't inherit the previous users cart and shipping
          dispatch(resetCart());
          navigate('/login');
          // setIsUserProfile(false);
        } catch (err) {
          console.error(err);
        }
    };

    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                <img src={sc_logo} alt='Brand Name' className='brandLogo'/></Link>
                <button className="navbar-toggler" id='navbarTogglerBtn' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={collapseNavBar}><FiUsers /> About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products" onClick={collapseNavBar}><FiBox /> Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/faq" onClick={collapseNavBar}><FiHelpCircle /> FAQ's</Link>
                        </li>
                        {userInfo && userInfo.isAdmin && (
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Admin Dashboard
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/admin/userlist" onClick={collapseNavBar}><FiUsers /> Users</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/productlist" onClick={collapseNavBar}><FiBox /> Products</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/orderlist" onClick={collapseNavBar}><FiShoppingBag /> Orders</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/messagelist" onClick={collapseNavBar}><FiMessageSquare /> Messages</Link></li>
                                </ul>
                            </li>
                        )}
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0 d-flex">

                        <li className="nav-item">
                            <SearchBox />
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/cart" onClick={collapseNavBar}><FiShoppingCart /> Cart <span style={{"color": "black", "background": "white", "borderRadius": "50px", "padding": "0px 5px", "fontWeight": "bold"}}>{cartItems.length}</span></Link>
                        </li>

                        {userInfo ? (
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FiUser /> {userInfo.name}</Link>
                                <ul className="dropdown-menu dropdown-menu-profile">
                                    <li><Link className="dropdown-item" to="/profile" onClick={collapseNavBar}><FiUser /> My Profile</Link></li>
                                    <li><Link className="dropdown-item" to="#" onClick={logoutHandler}><FiLogOut /> SignOut</Link></li>
                                </ul>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link" to="/login" onClick={collapseNavBar}><FiLogIn /> Login</Link>
                            </li>
                        )}
                    </ul>

                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}

export default Header;