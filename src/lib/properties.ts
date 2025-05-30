type Property = {
    id: string
    title: string
    price: number
    location: string
    type: string
    sharing: string
    utilities: string[]
    description: string
    amenities: string[]
    availableFrom: string
    minStay: string
    landlord: {
      name: string
      email: string
      phone: string
      preferredContact: string
    }
    datePosted: string
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Private Room in Shared House",
    price: 1500,
    location: "Rustenburg noord",
    type: "Room",
    sharing: "Shared",
    utilities: ["Water included"],
    description: "Cozy private room in a well-maintained house. Shared kitchen and bathroom with 2 other tenants. Close to public transportation and shopping centers.",
    amenities: ["Shared kitchen", "Shared bathroom"],
    availableFrom: "2024-05-01",
    minStay: "6 months",
    landlord: {
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      preferredContact: "email"
    },
    datePosted: "2024-04-15"
  },
  {
    id: "2",
    title: "1-Bedroom Apartment",
    price: 5000,
    location: "Rustenburg noord Snel Street",
    type: "Apartment",
    sharing: "Private",
    utilities: ["All included"],
    description: "Modern studio apartment with private bathroom and kitchenette. All utilities included in the rent. Perfect for students or young professionals.",
    amenities: ["Private bathroom", "Kitchenette"],
    availableFrom: "2024-05-01",
    minStay: "12 months",
    landlord: {
      name: "Jane Mailo",
      email: "jane@example.com",
      phone: "123-456-7891",
      preferredContact: "phone"
    },
    datePosted: "2024-04-16"
  },
  {
    id: "3",
    title: "Shared Room in Apartment",
    price: 3000,
    location: "Tlhabane near Tlhabane Square",
    type: "Room",
    sharing: "Shared",
    utilities: ["Water & electricity"],
    description: "Affordable shared room in a 2-bedroom apartment near the university. Ideal for students looking to save on rent. All utilities included.",
    amenities: ["Shared kitchen", "Shared bathroom"],
    availableFrom: "2024-05-01",
    minStay: "6 months",
    landlord: {
      name: "John Leng",
      email: "john@example.com",
      phone: "123-456-7892",
      preferredContact: "email"
    },
    datePosted: "2024-04-17"
  },
  {
    id: "4",
    title: "Entire House",
    price: 10000,
    location: "Rustenburg Square",
    type: "House",
    sharing: "Private",
    utilities: ["Not included"],
    description: "Spacious 3-bedroom house with a backyard and garage. Perfect for families or groups. Utilities not included in the rent.",
    amenities: ["Backyard", "Garage", "3 bedrooms"],
    availableFrom: "2024-05-01",
    minStay: "12 months",
    landlord: {
      name: "Lerato Katsane",
      email: "Lerato@example.com",
      phone: "123-456-7893",
      preferredContact: "phone"
    },
    datePosted: "2024-04-18"
  },
  {
    id: "5",
    title: "Private Room in House",
    price: 3500,
    location: "Cashane",
    type: "Room",
    sharing: "Shared",
    utilities: ["All included"],
    description: "Furnished private room in a large house. Shared common areas with 3 friendly roommates. All utilities included in the rent.",
    amenities: ["Furnished", "Shared common areas"],
    availableFrom: "2024-05-01",
    minStay: "6 months",
    landlord: {
      name: "David Brown",
      email: "david@example.com",
      phone: "123-456-7894",
      preferredContact: "email"
    },
    datePosted: "2024-04-19"
  },
  {
    id: "6",
    title: "1-Bedroom Apartment",
    price: 6000,
    location: "Rustenburg noord snel",
    type: "Apartment",
    sharing: "Private",
    utilities: ["Water included"],
    description: "Modern 1-bedroom apartment in the heart of the city. Walking distance to restaurants, shops, and public transportation. Water included in rent.",
    amenities: ["1 bedroom", "Modern appliances"],
    availableFrom: "2024-05-01",
    minStay: "12 months",
    landlord: {
      name: "Tumelo Lesane",
      email: "Tumi@example.com",
      phone: "123-456-7895",
      preferredContact: "phone"
    },
    datePosted: "2024-04-20"
  }
]