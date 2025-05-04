import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/signup" element={<div>signup</div>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
