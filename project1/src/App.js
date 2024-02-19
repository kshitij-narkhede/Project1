import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Features from './pages/Features';
import SSignup from './pages/Signup/SSignup';
import FSignup from './pages/Signup/FSignup';
import StudentLogin from './pages/Login_v1/StudentLogin';
import Dashboard from './classroom/Dashboard';
function App() {
  return (
    <>
     <Router>
<Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/signup" element={<Signup/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/feature" element={<Features/>} />
      <Route exact path="/ssignup" element={<SSignup/>} />
      <Route exact path="/fsignup" element={<FSignup/>} />
      <Route exact path="/slogin" element={<StudentLogin/>} />
      <Route exact path="/dashboard" element={<Dashboard/>} />

   
      <Route exact path="/about" element={<About/>} />
</Routes>
    </Router></>
  );
}

export default App;
