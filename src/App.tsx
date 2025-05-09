import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home"
import PropertiesPage from "./pages/Properties"
import NewPropertyPage from "./pages/NewProperty"
import PropertyDetailPage from "./pages/PropertyDetail"
import Login from "./pages/Login"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/properties" element={<PropertiesPage/>} />
        <Route path="/properties/new" element={<NewPropertyPage/>} />
        <Route path="/properties/:id" element={<PropertyDetailPage/>} />
        <Route path="/properties/:id/edit" element={<div>Edit Property</div>} />
        <Route path="/properties/:id/delete" element={<div>Delete Property</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<div>signup</div>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
