import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Save } from "lucide-react"
// import { useToast } from "@/hooks/use-toast"
import Footer from "@/components/footer"
import NavBar from "@/components/navBar"

export default function NewPropertyPage() {
  //const { toast } = useToast()
  const [isShared, setIsShared] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // submit the form data to your backend
    // toast({
    //   title: "Property Listed Successfully",
    //   description: "Your property has been listed and is now visible to potential tenants.",
    // })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 mt-[-48px]">
        <div className="container px-4 py-6 md:px-6 md:py-8">
          <div className="flex items-center gap-2 mb-6">
            <Link to="/properties">
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to Properties
              </Button>
            </Link>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">List Your Property</CardTitle>
                <CardDescription>
                  Provide detailed information about your rental property to attract potential tenants.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Basic Information</h3>

                    <div className="grid gap-2">
                      <Label htmlFor="title">Property Title</Label>
                      <Input id="title" placeholder="e.g. Cozy Room in Shared House" required />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="property-type">Property Type</Label>
                      <Select required>
                        <SelectTrigger id="property-type">
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="House">House</SelectItem>
                          <SelectItem value="Apartment">Apartment</SelectItem>
                          <SelectItem value="Room">Room</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="location">Location/Area</Label>
                      <Input id="location" placeholder="e.g., Rustenburg North West, etc." required />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="rent">Monthly Rent (R)</Label>
                      <Input id="rent" type="number" min="0" placeholder="e.g. 2000" required />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Sharing Details</h3>

                    <div className="grid gap-2">
                      <Label>Is this property shared with other tenants?</Label>
                      <RadioGroup defaultValue="no" onValueChange={(value) => setIsShared(value === "yes")}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="Private" />
                          <Label htmlFor="Private">No, it's a private property</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="Sharing" />
                          <Label htmlFor="Sharing">Yes, it's shared with other tenants</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {isShared && (
                      <div className="grid gap-2">
                        <Label htmlFor="tenants">Number of other tenants</Label>
                        <Select required>
                          <SelectTrigger id="tenants">
                            <SelectValue placeholder="Select number of tenants" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 other tenant</SelectItem>
                            <SelectItem value="2">2 other tenants</SelectItem>
                            <SelectItem value="3">3 other tenants</SelectItem>
                            <SelectItem value="4">4 other tenants</SelectItem>
                            <SelectItem value="5+">5+ other tenants</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Utilities</h3>

                    <div className="space-y-2">
                      <Label>Which utilities are included in the rent?</Label>
                      <div className="grid gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="water" />
                          <Label htmlFor="water">Water</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="electricity" />
                          <Label htmlFor="electricity">Electricity</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="gas" />
                          <Label htmlFor="gas">Gas</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="internet" />
                          <Label htmlFor="internet">Internet</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="none" />
                          <Label htmlFor="none">None (tenant pays all utilities)</Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Property Description</h3>

                    <div className="grid gap-2">
                      <Label htmlFor="description">Detailed Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your property in detail. Include information about the space, amenities, neighborhood, etc."
                        className="min-h-[150px]"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between mt-3">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                  <Button type="submit" className="gap-2 bg-amber-300 text-black-50">
                    <Save className="h-4 w-4" />
                    Add Property
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </main>
       <Footer />
    </div>
  )
}
