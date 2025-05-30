import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { MapPin, Plus } from "lucide-react"
import NavBar from "@/components/navBar"
import Footer from "@/components/footer"
import { properties } from "@/lib/properties"
import { useState } from "react"


export default function PropertiesPage() {
  const [filteredProperties, setFilteredProperties] = useState(properties)

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
              <Button className="gap-2 bg-amber-400 text-black">
                <Plus className="h-4 w-4" />
                Add Your Property
              </Button>
            </Link>
          </div>

          <div className="grid gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Showing {filteredProperties.length} properties</div>
                <Select defaultValue="newest"
                onValueChange={(value) => {
                   const sorted = [...filteredProperties];
                    if (value === "price-low") {
                      sorted.sort((a, b) => a.price - b.price);
                    } else if (value === "price-high") {
                      sorted.sort((a, b) => b.price - a.price);
                    } else if (value === "newest") {
                      sorted.sort(
                        (a, b) => new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime()
                      );
                    }

                    setFilteredProperties(sorted);
                }}
                >
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
               {filteredProperties.length === 0 ? (
                  <div className="text-center mt-8 text-gray-500 text-5xl">
                  No properties available.
                </div>
               )    
               : 
               (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProperties.map((property) => (
                  <Card key={property.id} className="border-2">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg underline">{property.title}</CardTitle>
                        <Badge className="bg-amber-400 text-black">R{property.price}/mo</Badge>
                      </div>
                      <div className="flex items-center text-sm text-zinc-500 font-bold">
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
              )}
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
