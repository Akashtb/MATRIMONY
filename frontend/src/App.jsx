import './App.css'
import Google from './components/google/Google';
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (  
  
    <Router>
      <Routes>
        
        <Route  path="/" element={<Login/>} />
        <Route  path="/register/:userId" element={<Register/>} />
        <Route  path="/google" element={<Google/>} />
      </Routes>
    </Router>
  
  )
}

export default App
