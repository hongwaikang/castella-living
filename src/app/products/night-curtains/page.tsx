export default function NightCurtainsPage() {
    return (
      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="w-full h-[500px] relative bg-cover bg-center" style={{ backgroundImage: "url('/path-to-hero-image.jpg')" }}>
          <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-4xl font-extrabold text-white mb-2">Night Curtains</h1>
              <p className="text-white text-lg">Elegance and Privacy, Perfectly Balanced</p>
            </div>
          </div>
        </section>
  
        {/* Product Overview */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-semibold mb-6">Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Our Night Curtains are designed to provide maximum privacy, light blocking, and a touch of sophistication to any room.
            With a wide range of fabrics and finishes available, they are perfect for bedrooms, living spaces, and home offices where ambiance and comfort matter most.
          </p>
        </section>
  
        {/* Features */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Premium Light Control</h3>
                <p className="text-gray-600 text-sm">Effectively blocks sunlight for better sleep and comfort during the day.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Extensive Fabric Choices</h3>
                <p className="text-gray-600 text-sm">Choose from textured, matte, or velvet finishes to match your decor.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tailor-Made to Fit</h3>
                <p className="text-gray-600 text-sm">Custom-sized to suit your windows perfectly, no matter the dimensions.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Elegant Finishings</h3>
                <p className="text-gray-600 text-sm">Neatly sewn hems, optional blackout linings, and premium tie-backs available.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Masonry Gallery Section (Neutral Color Demo) */}
        <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
            
            {/* Section Heading */}
            <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Our Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Discover how our premium curtains transform real living spaces — blending privacy, comfort, and timeless style.
            </p>
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            
            {/* Simulated Neutral Color Blocks */}
            <div className="h-80 bg-gray-300 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 break-inside-avoid"></div>
            <div className="h-56 bg-stone-300 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 break-inside-avoid"></div>
            <div className="h-96 bg-neutral-400 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 break-inside-avoid"></div>
            <div className="h-64 bg-gray-400 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 break-inside-avoid"></div>
            <div className="h-72 bg-stone-400 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 break-inside-avoid"></div>
            <div className="h-52 bg-neutral-300 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 break-inside-avoid"></div>

            </div>

        </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-semibold mb-6">Transform Your Home Today</h2>
            <p className="text-gray-700 mb-8">
              Book a free consultation with our team to explore fabric options, get expert recommendations, and create the perfect atmosphere for your space.
            </p>
            <a
              href="https://wa.me/6591234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </section>
      </main>
    );
  }
  