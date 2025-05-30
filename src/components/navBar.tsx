import {Link} from 'react-router-dom'
import { Home, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from 'react'

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return(
      <>
      <div className="container flex items-center justify-between h-16 px-4 md:px-6 relative top-[-35px] border-b">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <Home className="w-7 h-7 fill-amber-300"/>
          <span>Restly</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/properties" className="text-sm font-medium hover:underline underline-offset-4">
             Properties
          </Link>
          <Link to="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
        </nav>

        {/* Buttons + Hamburger */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-2">
            <Link to="/login">
              <Button variant="outline" size="sm">Log In</Button>
            </Link>
            <Link to="/register">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>

          {/* Hamburger Icon (only mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 mb-5">
          <Link to="/properties" className="block text-sm font-medium hover:underline p-1">Browse Properties</Link>
          <Link to="/about" className="block text-sm font-medium hover:underline p-1">About</Link>
          <div className="pt-2 border-t mt-2 p-1">
            <Link to="/login" className="block mb-2">
              <Button variant="outline" size="sm" className="w-50">Login</Button>
            </Link>
            <Link to="/register" className="block mb-2">
              <Button size="sm" className="w-50">Sign Up</Button>
            </Link>
          </div>
        </div>
      )}
      </>
    )
}