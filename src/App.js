import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Signup></Signup>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/login' element={<LoginPage></LoginPage>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      
      

    </Routes>
  );
}

export default App;
