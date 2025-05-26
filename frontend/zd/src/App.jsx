import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Navbar from './components/NavBar.jsx'
import Employees from './pages/Employees.jsx'
import Products from './pages/Products.jsx';
import Customers from './pages/Customers.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar/>
      <div className="content-container">
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
