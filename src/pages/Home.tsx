import { Button } from "@/components/ui/button"
import { ArrowRight, Home, Search, User } from "lucide-react"
import {Link} from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    List Your Rental Property Today
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Connect with potential tenants quickly and easily. No images required - just describe your property
                    and start receiving inquiries.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/properties/new">
                    <Button size="lg" className="gap-2">
                      List Your Property
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/properties">
                    <Button size="lg" variant="outline" className="gap-2">
                      <Search className="h-4 w-4" />
                      Find a Rental
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] aspect-square rounded-xl bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center p-8">
                  <div className="absolute inset-4 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2 p-6">
                      <Home className="w-16 h-16 mx-auto text-slate-400" />
                      <h3 className="text-xl font-medium">Simple Property Listings</h3>
                      <p className="text-sm text-muted-foreground">
                        No need for photos. Just describe your property and connect with tenants.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our platform makes it easy to list and find rental properties without the hassle of uploading images.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 md:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <User className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Create an Account</h3>
                <p className="text-muted-foreground">
                  Sign up as a landlord to start listing your properties on our platform.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Home className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">List Your Property</h3>
                <p className="text-muted-foreground">
                  Provide detailed descriptions of your rental, including type, price, and amenities.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ArrowRight className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Connect with Tenants</h3>
                <p className="text-muted-foreground">
                  Receive inquiries directly from interested tenants looking for properties like yours.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 font-semibold">
              <Home className="w-5 h-5" />
              <span>RentConnect</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting landlords and tenants without the hassle of image uploads.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-3">
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
                <li>
                  <Link to="/pricing" className="text-muted-foreground hover:underline">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
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
                <li>
                  <Link to="/blog" className="text-muted-foreground hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/terms" className="text-muted-foreground hover:underline">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-muted-foreground hover:underline">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-muted-foreground hover:underline">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-between gap-4 border-t py-6 md:h-16 md:flex-row md:py-0">
          <p className="text-xs text-muted-foreground">© 2025 RentConnect. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link to="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link to="/privacy" className="hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
