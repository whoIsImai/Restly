import { Home } from "lucide-react"
import {Link} from 'react-router-dom'

export default function Footer() {

    return(
        <footer className="border-t">
        <div className="container flex flex-col gap-3 py-10 md:flex-row md:gap-7 md:py-12">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 font-semibold">
              <Home className="w-5 h-5" />
              <span>Rently</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting landlords and tenants.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/properties" className="text-muted-foreground hover:underline">
                    Browse Properties
                  </Link>
                </li>
                <li>
                  <Link to="/properties/new" className="text-muted-foreground hover:underline">
                    List a Property
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-between gap-4 border-t py-6 md:h-16 md:flex-row md:py-0">
          <p className="text-xs text-muted-foreground">© 2025 Rently. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link to="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    )
}