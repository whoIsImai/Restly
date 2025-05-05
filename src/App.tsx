import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home"
import './App.css'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/signup" element={<div>signup</div>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
