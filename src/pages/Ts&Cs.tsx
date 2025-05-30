import Navbar from "@/components/navBar"
import Footer from "@/components/footer"

export default function TsAndCs() {
     return (
        < >
    <Navbar />
    <div className="min-h-screen  text-black py-12 px-6 md:px-20 top-0 mt-[-50px]">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">Privacy Policy</h1>
        <p className="text-sm text-center text-gray-500">Effective Date: 2025/05/30</p>

        <section>
          <p>
            Restly (“we”, “us”, or “our”) respects your privacy and is committed to protecting your personal information in accordance with the Protection of Personal Information Act, 4 of 2013 (POPIA). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <p className="font-medium mt-2">a. Information You Provide Voluntarily</p>
          <ul className="list-disc list-inside ml-4">
            <li>Name, email address, phone number</li>
            <li>Property details (for listers)</li>
            <li>Payment and billing information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Provide and maintain our services</li>
            <li>Communicate with you</li>
            <li>Facilitate bookings</li>
            <li>Process payments</li>
            <li>Verify identities</li>
            <li>Comply with legal obligations</li>
            <li>Improve security and functionality</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">3. Legal Basis for Processing</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Your consent</li>
            <li>Performance of a contract</li>
            <li>Legal obligations</li>
            <li>Legitimate interest</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. Sharing of Personal Information</h2>
          <p>We may share your data with:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Payment processors</li>
            <li>Hosting and cloud providers</li>
            <li>Legal authorities, if required</li>
            <li>Service partners</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">5. Data Retention</h2>
          <p>We retain data as long as necessary for its purpose, legal requirements, or until your account is deleted.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">6. Your Rights Under POPIA</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Access personal information</li>
            <li>Correct or update data</li>
            <li>Request deletion</li>
            <li>Object to direct marketing</li>
            <li>Lodge a complaint with the Information Regulator</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">7. Security</h2>
          <p>We use appropriate safeguards to protect your data against unauthorized access or disclosure.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">8. Cookies</h2>
          <p>We use cookies to improve your experience. You can disable them in your browser settings.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">9. Children’s Privacy</h2>
          <p>Restly is not for users under 18. We do not knowingly collect data from minors.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">10. International Data Transfers</h2>
          <p>If data is transferred outside South Africa, we ensure protection in line with POPIA.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">11. Changes to This Policy</h2>
          <p>We may update this policy. Continued use means you accept the changes.</p>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  )
}