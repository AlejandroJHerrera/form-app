import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../Reducers/userSlice';
import axios from '../config';

function Login() {
  const emailField = useRef(null);
  const passField = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = JSON.parse(localStorage.getItem('token'));

  useEffect(() => {
    const verifyToken = () => {
      if (token) {
        dispatch(
          setUser({
            fullName: token.fullName,
            email: token.email,
            dni: token.dni,
            isAdmin: token.isAdmin,
            signature: token.signature,
            id: token._id,
          })
        );
        navigate('/');
      }
    };
    verifyToken();
  }, [dispatch, token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = `/auth/login`;
    let user = {
      email: emailField.current.value,
      password: passField.current.value,
    };

    try {
      const res = await axios.post(url, user, { withCredentials: true });
      localStorage.setItem('token', JSON.stringify(res.data));
      dispatch(
        setUser({
          email: res.data.email,
          fullName: res.data.fullName,
          dni: res.data.dni,
          isAdmin: res.data.isAdmin,
          signature: res.data.signature,
          id: res.data._id,
        })
      );
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="flex flex-col justify-center items-center "
        onSubmit={handleSubmit}
      >
        <h1>Login</h1>
        <input type="email" placeholder="Email" ref={emailField} />
        <input type="password" placeholder="Password" ref={passField} />
        <button className="rounded-md p-2"> Submit</button>
      </form>
    </div>
  );
}

export default Login;
