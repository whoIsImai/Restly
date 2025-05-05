import {Link} from 'react-router-dom'
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NavBar() {

    return(
        <header className="border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Home className="w-5 h-5" />
            <span>RentConnect</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/properties" className="text-sm font-medium hover:underline underline-offset-4">
              Browse Properties
            </Link>
            <Link to="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline" size="sm" className="hidden md:flex">
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
    )
}