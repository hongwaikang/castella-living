export default function CarpentryPage() {
    return (
      <main className="bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-20">
          {/* Page Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold mb-4">Custom Carpentry Solutions</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built for your lifestyle. Designed for your space. Castella Living crafts custom carpentry features that blend functionality and style — whether you’re maximizing storage or making a statement.
            </p>
          </div>
  
          {/* What We Build */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-10 text-center">What We Can Build</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">TV Feature Walls</h3>
                <p className="text-gray-600 text-sm">
                  Create stunning media walls with concealed wiring, shelving, and sleek design to anchor your living room.
                </p>
              </div>
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">Built-In Wardrobes</h3>
                <p className="text-gray-600 text-sm">
                  Maximize space beautifully with fully customized wardrobes, fitted perfectly into your bedrooms or hallways.
                </p>
              </div>
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">Platform Beds & Storage</h3>
                <p className="text-gray-600 text-sm">
                  Stylish and functional bedframes with integrated drawers, compartments, or elevated platforms for hidden storage.
                </p>
              </div>
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">Custom Cabinets & Shelving</h3>
                <p className="text-gray-600 text-sm">
                  Design your dream study, dining console, shoe cabinet, or kitchen pantry — made to your measurements and taste.
                </p>
              </div>
            </div>
          </section>
  
          {/* Why Choose Castella Living */}
          <section className="text-center mb-20">
            <h2 className="text-2xl font-semibold mb-6">Why Choose Castella Living Carpentry?</h2>
            <ul className="text-gray-700 space-y-3 max-w-2xl mx-auto list-disc list-inside">
              <li>Tailored-to-fit designs that maximize every inch of space</li>
              <li>Premium materials and meticulous craftsmanship</li>
              <li>Seamless project management — from design to installation</li>
            </ul>
          </section>
  
          {/* CTA */}
          <section className="mt-24 text-center">
            <div className="inline-block bg-green-50 border border-green-200 rounded-xl px-10 py-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Let's Build Something Beautiful Together</h3>
              <p className="text-gray-700 mb-6">Reach out to us to start planning your custom carpentry project today.</p>
              <a
                href="https://wa.me/6591234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition"
              >
                WhatsApp Us
              </a>
            </div>
          </section>
        </div>
      </main>
    );
  }
  