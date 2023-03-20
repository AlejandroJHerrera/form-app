import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Components/Form';
import NavBar from './Components/NavBar';
import Login from './Views/Login';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
