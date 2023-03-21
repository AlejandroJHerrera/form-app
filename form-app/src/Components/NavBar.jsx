import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { unSetUser } from '../Reducers/userSlice';
import axios from '../config';

function NavBar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = async () => {
    let url = '/auth/logout';
    try {
      await axios.get(url, { withCredentials: true });
      dispatch(unSetUser());
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ul className="flex justify-around w-full bg-slate-600 text-slate-200">
        <Link to={'/'}>
          <li>Home</li>
        </Link>
        {user.fullName.length === 0 ? (
          <Link to={'/login'}>
            <li>Iniciar Sesion</li>
          </Link>
        ) : (
          <Link onClick={logOut}>
            <li>Cerrar Sesion</li>
          </Link>
        )}
      </ul>
    </div>
  );
}

export default NavBar;
