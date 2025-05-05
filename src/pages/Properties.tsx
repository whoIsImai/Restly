import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Filter, MapPin, Plus, Search } from "lucide-react"
import NavBar from "@/components/navBar"
import Footer from "@/components/footer"

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <div className="container px-4 py-6 md:px-6 md:py-8 top-[-50px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Available Properties</h1>
              <p className="text-muted-foreground">Find your perfect rental from our listings</p>
            </div>
            <Link to="/properties/new">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                List Your Property
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-[280px_1fr]">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="font-medium flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </div>
                <Separator />
                <div className="space-y-2">
                  <label htmlFor="search" className="text-sm font-medium">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="search" type="search" placeholder="Search properties..." className="pl-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="property-type" className="text-sm font-medium">
                    Property Type
                  </label>
                  <Select>
                    <SelectTrigger id="property-type">
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="room">Room</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="price-range" className="text-sm font-medium">
                    Price Range
                  </label>
                  <Select>
                    <SelectTrigger id="price-range">
                      <SelectValue placeholder="Any Price" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Price</SelectItem>
                      <SelectItem value="0-500">R1,000 - R1,500</SelectItem>
                      <SelectItem value="500-1000">R1,600 - R5,000</SelectItem>
                      <SelectItem value="1000-1500">R6,000 - R9,000</SelectItem>
                      <SelectItem value="1500+">R10,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="sharing" className="text-sm font-medium">
                    Sharing
                  </label>
                  <Select>
                    <SelectTrigger id="sharing">
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="private">Private (No Sharing)</SelectItem>
                      <SelectItem value="shared">Shared</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline" className="w-full">
                  Apply Filters
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Showing 6 properties</div>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Property Card 1 */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Private Room in Shared House</CardTitle>
                      <Badge>$650/mo</Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-3 w-3" />
                      Downtown Area
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Property Type:</span>
                        <span className="font-medium">Room</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sharing:</span>
                        <span className="font-medium">With 2 tenants</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Utilities:</span>
                        <span className="font-medium">Water included</span>
                      </div>
                      <Separator className="my-2" />
                      <p className="line-clamp-3">
                        Cozy private room in a well-maintained house. Shared kitchen and bathroom with 2 other tenants.
                        Close to public transportation and shopping centers.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link to="/properties/1" className="w-full">
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                {/* Property Card 2 */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Studio Apartment</CardTitle>
                      <Badge>$850/mo</Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-3 w-3" />
                      Westside
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Property Type:</span>
                        <span className="font-medium">Apartment</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sharing:</span>
                        <span className="font-medium">No sharing</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Utilities:</span>
                        <span className="font-medium">All included</span>
                      </div>
                      <Separator className="my-2" />
                      <p className="line-clamp-3">
                        Modern studio apartment with private bathroom and kitchenette. All utilities included in the
                        rent. Perfect for students or young professionals.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link to="/properties/2" className="w-full">
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                {/* Property Card 3 */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Shared Room in Apartment</CardTitle>
                      <Badge>$400/mo</Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-3 w-3" />
                      University District
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Property Type:</span>
                        <span className="font-medium">Room</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sharing:</span>
                        <span className="font-medium">With 1 tenant</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Utilities:</span>
                        <span className="font-medium">Water & electricity</span>
                      </div>
                      <Separator className="my-2" />
                      <p className="line-clamp-3">
                        Affordable shared room in a 2-bedroom apartment near the university. Ideal for students looking
                        to save on rent. All utilities included.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link to="/properties/3" className="w-full">
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                {/* Property Card 4 */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Entire House</CardTitle>
                      <Badge>$1,500/mo</Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-3 w-3" />
                      Suburban Area
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Property Type:</span>
                        <span className="font-medium">House</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sharing:</span>
                        <span className="font-medium">No sharing</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Utilities:</span>
                        <span className="font-medium">Not included</span>
                      </div>
                      <Separator className="my-2" />
                      <p className="line-clamp-3">
                        Spacious 3-bedroom house with a backyard and garage. Perfect for families or groups. Utilities
                        not included in the rent.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link to="/properties/4" className="w-full">
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                {/* Property Card 5 */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">Private Room in House</CardTitle>
                      <Badge>$550/mo</Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-3 w-3" />
                      Eastside
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Property Type:</span>
                        <span className="font-medium">Room</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sharing:</span>
                        <span className="font-medium">With 3 tenants</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Utilities:</span>
                        <span className="font-medium">All included</span>
                      </div>
                      <Separator className="my-2" />
                      <p className="line-clamp-3">
                        Furnished private room in a large house. Shared common areas with 3 friendly roommates. All
                        utilities included in the rent.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link to="/properties/5" className="w-full">
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                {/* Property Card 6 */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">1-Bedroom Apartment</CardTitle>
                      <Badge>$950/mo</Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-3 w-3" />
                      City Center
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Property Type:</span>
                        <span className="font-medium">Apartment</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sharing:</span>
                        <span className="font-medium">No sharing</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Utilities:</span>
                        <span className="font-medium">Water included</span>
                      </div>
                      <Separator className="my-2" />
                      <p className="line-clamp-3">
                        Modern 1-bedroom apartment in the heart of the city. Walking distance to restaurants, shops, and
                        public transportation. Water included in rent.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link to="/properties/6" className="w-full">
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>

              <div className="flex justify-center">
                <Button variant="outline" className="gap-2">
                  Load More Properties
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    <Footer />
    </div>
  )
}
