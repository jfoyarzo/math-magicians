import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Famous Quotes',
    },
  ];
  return (
    <nav className="navBar">
      <h1>Math-Magicians</h1>
      <ul className="link-wrapper">
        {links.map((link) => <li key={link.id} className="nav-li"><NavLink to={link.path} className={({ isActive }) => (isActive ? 'active-link' : 'none')}>{link.text}</NavLink></li>)}
      </ul>
    </nav>
  );
};
export default Navbar;
