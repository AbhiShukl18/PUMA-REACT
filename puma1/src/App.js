import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav1 from './Pages/Nav1';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
 
   
    <div className="App">
      <Nav1/>
    
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />


      {/* <Route path="/nav1" element={<Nav1/>} /> */}

        </Routes>
    </div>

  );
}

export default App;
