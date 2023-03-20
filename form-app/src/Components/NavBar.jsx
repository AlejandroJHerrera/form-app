import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
  return (
    <div>
      <ul className="flex justify-around w-full bg-slate-600 text-slate-200">
        <Link to={'/'}>
          <li>Home</li>
        </Link>
        <Link to={'/login'}>
          <li>LogIn</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
