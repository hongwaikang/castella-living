export default function ServicesPage() {
    return (
      <main className="bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-20">
          {/* Page Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold mb-4">Our Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Castella Living, we don't just deliver premium curtains, blinds, and panels — we deliver the full experience. From
              measurement to installation, our team handles every detail so you don’t have to.
            </p>
          </div>
  
          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h2 className="text-xl font-semibold mb-2">On-Site Measurement</h2>
              <p className="text-gray-600 text-sm mb-3">
                We'll visit your space, take precise measurements, and offer layout suggestions to ensure a perfect fit.
              </p>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>Free, no-obligation measurement</li>
                <li>Advice on layout & coverage</li>
                <li>Supports accurate quoting</li>
              </ul>
            </div>
  
            {/* Service Card 2 */}
            <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h2 className="text-xl font-semibold mb-2">Interior Consultation</h2>
              <p className="text-gray-600 text-sm mb-3">
                Not sure what to choose? We’ll bring fabric and panel samples to help match your space and style preferences.
              </p>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>On-site material previews</li>
                <li>Tailored design guidance</li>
                <li>Weekday & weekend slots</li>
              </ul>
            </div>
  
            {/* Service Card 3 */}
            <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h2 className="text-xl font-semibold mb-2">Professional Installation</h2>
              <p className="text-gray-600 text-sm mb-3">
                Our trained team handles every installation with precision, care, and cleanliness — so you get a flawless finish.
              </p>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>On-site alignment & fitting</li>
                <li>Disposal of old fixtures</li>
                <li>1-year workmanship warranty</li>
              </ul>
            </div>
          </div>
  
          {/* CTA */}
          <div className="mt-24 text-center">
            <p className="text-gray-700 mb-4">Want to speak with us directly?</p>
            <a
              href="https://wa.me/6591234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </main>
    );
  }
  