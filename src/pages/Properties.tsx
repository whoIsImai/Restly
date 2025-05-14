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
import { properties } from "@/lib/properties"
import { useState } from "react"


export default function PropertiesPage() {
  const [filteredProperties, setFilteredProperties] = useState(properties)
  const [filters, setFilters] = useState({
    type: '',
    priceRange: '',
    sharing: ''
})

  const handleApplyFilters = () => {
    
  const filtered = properties.filter((item) => {

    const matchesType = filters.type === "all" ? true : filters.type ? item.type === filters.type : true;

    const matchesLocation = filters.sharing ? item.location === filters.sharing : true;

    const matchesPrice = filters.priceRange
      ? (() => {
          if (filters.priceRange === "1500+") return item.price >= 1500;
          const [min, max] = filters.priceRange.split("-").map(Number);
          return item.price >= min && item.price <= max;
        })()
      : true;

    return matchesLocation && matchesType && matchesPrice;
  });

  setFilteredProperties(filtered);
};


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
                Add Your Property
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
                  <Select
                    value={filters.type}
                    onValueChange={(value)=> {
                      setFilters((prev)=> ({...prev, type: value}))
                    }}
                  >
                    <SelectTrigger id="property-type">
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="House">House</SelectItem>
                      <SelectItem value="Room">Room</SelectItem>
                      <SelectItem value="Apartment">Apartment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="price-range" className="text-sm font-medium">
                    Price Range
                  </label>
                  <Select
                  value={filters.priceRange}
                    onValueChange={(value)=> {
                      setFilters({...filters, priceRange: value})
                    }}
                  >
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
                  <Select
                  value={filters.sharing}
                    onValueChange={(value)=> {
                      setFilters({...filters, sharing: value})
                    }}
                    >
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
                <Button variant="outline" className="w-full" onClick={handleApplyFilters}>
                  Apply Filters
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Showing {properties.length} properties</div>
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
                  {filteredProperties.map((property) => (
                  <Card key={property.id} className="border-2">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{property.title}</CardTitle>
                        <Badge>R{property.price}/mo</Badge>
                      </div>
                      <div className="flex items-center text-sm text-zinc-500">
                        <MapPin className="mr-1 h-3 w-3" />
                        {property.location}
                      </div>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Property Type:</span>
                          <span className="font-medium">{property.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sharing:</span>
                          <span className="font-medium">{property.sharing}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Utilities:</span>
                          <span className="font-medium">{property.utilities.join(", ")}</span>
                        </div>
                        <Separator className="my-2" />
                        <p className="line-clamp-3">{property.description}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link to={`/properties/${property.id}`} className="w-full">
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
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
