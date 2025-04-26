export default function AboutPage() {
    return (
      <main className="bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-20">
          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold mb-4">About Castella Living</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe that beautiful interiors start with thoughtful details. Castella Living offers premium curtains, blinds, wall panels, and bespoke carpentry — combining elegance with practicality.
            </p>
          </div>
  
          {/* Who We Are */}
          <section className="mb-20">
            <div className="border-l-4 border-green-500 pl-6">
              <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed">
                Founded in Singapore, Castella Living is dedicated to crafting inspiring spaces for homes and businesses. Our curated collection of products is handpicked to reflect timeless style and impeccable quality.
              </p>
            </div>
          </section>
  
          {/* Divider */}
          <hr className="my-12 border-gray-300" />
  
          {/* Mission */}
          <section className="mb-20">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
              <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                To enhance every environment with thoughtful design, premium materials, and a consultative customer experience — delivering not just products, but comfort and inspiration.
              </p>
            </div>
          </section>
  
          {/* Divider */}
          <hr className="my-12 border-gray-300" />
  
          {/* Values / What Sets Us Apart */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-center mb-10">What Sets Us Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">Curated Selection</h3>
                <p className="text-gray-600 text-sm">
                  Fabrics, materials, and designs handpicked to balance beauty, functionality, and longevity.
                </p>
              </div>
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">Personalized Consultations</h3>
                <p className="text-gray-600 text-sm">
                  Our team visits your space, provides tailored advice, and helps you visualize possibilities on-site.
                </p>
              </div>
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">End-to-End Service</h3>
                <p className="text-gray-600 text-sm">
                  From initial measurement to final installation, we manage every detail to ensure a seamless experience.
                </p>
              </div>
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">Workmanship Guarantee</h3>
                <p className="text-gray-600 text-sm">
                  We stand behind our installations with a workmanship warranty — because your satisfaction is our reputation.
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
  