import NavBar from "@/components/navBar"
import Footer from "@/components/footer"
import { Link } from "react-router-dom"

export default function About(){

return(
    <>
        <NavBar />
        <div className="flex flex-1 justify-center py-5 mt-[-48px]">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-center gap-3 p-4">
                <p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight min-w-72">
                    About Restly
                </p>
            </div>
            <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Restly is a online platform connecting renters with property owners. Our mission is to simplify the rental process, making it more transparent and efficient
              for everyone. We believe in fostering a community where renters can find their ideal homes and owners can manage their properties with ease. We are committed to
              providing a seamless and trustworthy experience for all users, ensuring that every interaction is met with professionalism and care.
            </p>
            <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Story</h2>
            <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Founded in 2025, Restly is a small startup with a big vision: to revolutionize the rental market. Over the coming years, we will continue to grown into a trusted platform, serving
              thousands of renters and property owners across the nation. Our journey has begun with innovation, a commitment to customer satisfaction, and a passion for
              creating a better rental experience. From our humble beginnings, we plan to expand our services to include property management tools, advanced search filters, and
              secure communication channels, all designed to enhance the rental process.
            </p>
            <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What Sets Us Apart</h2>
            <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
              At Restly, we're not just another rental platform. We stand out through our commitment to transparency, user-friendly technology, and exceptional customer support.
              Our platform offers advanced detailed property listings, and secure communication tools, ensuring a seamless rental experience. We're dedicated to
              building trust and long-term relationships with our users. Our unique features include real-time availability updates and a dedicated support
              team available 24/7 to assist with any inquiries or issues. Property owners are charged a small fee to list their properties on Restly, reflecting the high demand
              and popularity of our platform among renters.
            </p>
            <div className="flex px-4 py-3 justify-center">
              <button
                className="flex items-center justify-center overflow-hidden rounded-2xl h-10 px-4 bg-amber-300 text-black-50 text-sm font-bold"
              >
                <Link to="/properties" className="flex items-center gap-2">
                <span className="truncate">Explore Rental Options</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <Footer/>
    </>
)
}