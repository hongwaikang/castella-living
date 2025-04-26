export default function AboutPage() {
    return (
      <main className="bg-white text-gray-900">
  
        {/* Hero Section with neutral background */}
        <section className="w-full h-[60vh] bg-stone-100 flex items-center justify-center text-center px-6 mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">About Castella Living</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Beautiful interiors begin with thoughtful details. Discover premium curtains, blinds, wall panels, and bespoke carpentry crafted with care.
            </p>
          </div>
        </section>
  
        <div className="max-w-6xl mx-auto px-6">
  
          {/* Who We Are */}
          <section className="mb-20">
            <div className="border-l-4 border-gray-300 pl-6">
              <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
              <p className="text-gray-500 text-sm mb-4">Passionate creators of tailored, livable spaces in Singapore.</p>
              <p className="text-gray-700 leading-relaxed">
                Founded in Singapore, Castella Living is dedicated to crafting inspiring spaces for homes and businesses. Our curated collection reflects timeless style and impeccable quality.
              </p>
            </div>
          </section>
  
          {/* Divider */}
          <div className="border-t border-gray-200 my-16"></div>
  
          {/* Mission */}
          <section className="mb-20 bg-gray-50 py-16 px-6 rounded-xl shadow-sm">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
              <p className="text-gray-500 text-sm mb-4">Blending beauty, function, and comfort in every space.</p>
              <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                To enhance every environment with thoughtful design, premium materials, and a consultative experience — delivering not just products, but lifestyle inspiration.
              </p>
            </div>
          </section>
  
          {/* Divider */}
          <div className="border-t border-gray-200 my-16"></div>
  
          {/* What Sets Us Apart */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-center mb-10">What Sets Us Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">Curated Selection</h3>
                <p className="text-gray-600 text-sm">
                  Handpicked fabrics and materials, blending aesthetics with durability.
                </p>
              </div>
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">Personalized Consultations</h3>
                <p className="text-gray-600 text-sm">
                  Tailored advice and on-site visualization to bring your vision to life.
                </p>
              </div>
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">End-to-End Service</h3>
                <p className="text-gray-600 text-sm">
                  Full project management from measurements to seamless installation.
                </p>
              </div>
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">Workmanship Guarantee</h3>
                <p className="text-gray-600 text-sm">
                  Confidence backed by our commitment to quality craftsmanship.
                </p>
              </div>
            </div>
          </section>
  
          {/* CTA */}
          <section className="mt-24 text-center">
            <div className="inline-block bg-green-50 border border-green-200 rounded-xl px-10 py-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Ready to build your dream space?</h3>
              <p className="text-gray-700 mb-6">Chat with our team today and experience the Castella Living difference.</p>
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
  