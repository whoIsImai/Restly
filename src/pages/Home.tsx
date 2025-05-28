import { Button } from "@/components/ui/button"
import { ArrowRight, Home, Search, User } from "lucide-react"
import {Link} from 'react-router-dom'
import NavBar from "@/components/navBar"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 relative top-[-35px]">
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
                        Describe your property and connect with tenants.
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
              <div className="flex flex-col items-center space-y-4 text-center p-10 bg-gray-200 rounded-2xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <User className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Create an Account</h3>
                <p className="text-muted-foreground">
                  Sign up as a landlord to start listing your properties on our platform.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center p-10 bg-gray-200 rounded-2xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Home className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">List Your Property</h3>
                <p className="text-muted-foreground">
                  After a payment provide detailed descriptions of your rental, including type, price, and amenities.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center p-10 bg-gray-200 rounded-2xl">
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
        <Footer />
      </main>
    </div>
  )
}
