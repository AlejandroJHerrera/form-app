import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../Reducers/userSlice';
import axios from '../config';

function Login() {
  const emailField = useRef(null);
  const nameField = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = `/auth/login`;
    let user = {
      email: emailField.current.value,
      password: nameField.current.value,
    };

    try {
      const res = await axios.post(url, user, { withCredentials: true });
      console.log(res.data);
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
        <input type="text" placeholder="Name" ref={nameField} />
        <input type="email" placeholder="Email" ref={emailField} />
        <input type="password" placeholder="Password" />
        <button className="rounded-md bg-blue"> Submit</button>
      </form>
    </div>
  );
}

export default Login;
