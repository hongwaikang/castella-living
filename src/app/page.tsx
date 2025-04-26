import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-100">
        <Image
          src="/hero.jpg" // Replace with your actual hero image in /public
          alt="Elegant Curtains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Elegant Living Starts Here
          </h1>
          <p className="mt-4 text-lg text-white drop-shadow">
            Custom Curtains, Blinds & Interiors for Every Home
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 px-6 py-3 bg-white text-gray-800 font-medium rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get a Free Quote
          </Link>
        </div>
        <div className="absolute inset-0 bg-black/30 z-[5]" />
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Castella Living?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          At Castella Living, we transform spaces with beautifully tailored window furnishings and custom interior accents.
          Our expert team specializes in modern curtains, stylish blinds, elegant wall panels, and bespoke carpentry —
          crafted to blend function and style seamlessly into your home.
        </p>
      </section>

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            title="Curtains"
            image="/products/curtains.jpg"
            link="/products"
          />
          <ProductCard
            title="Blinds"
            image="/products/blinds.jpg"
            link="/products"
          />
          <ProductCard
            title="Wall Panels"
            image="/products/wallpanels.jpg"
            link="/products"
          />
        </div>
      </section>

      {/* Services Teaser Section */}
      <section className="py-20 bg-gray-50 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Beyond Products — Full Service Experience</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
          From complimentary consultations to professional installation,
          Castella Living ensures every product fits your space perfectly.
        </p>
        <Link
          href="/services"
          className="inline-block px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
        >
          Explore Our Services
        </Link>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <p className="text-gray-700 mb-4">"Castella Living completely transformed our living room. The curtains fit perfectly and the service was amazing!"</p>
              <h4 className="font-semibold text-gray-900">— Sarah T.</h4>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <p className="text-gray-700 mb-4">"Professional advice, premium quality, and beautiful installation. Highly recommend them!"</p>
              <h4 className="font-semibold text-gray-900">— James L.</h4>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <p className="text-gray-700 mb-4">"The team made the process so easy from start to finish. Thank you Castella Living!"</p>
              <h4 className="font-semibold text-gray-900">— Melissa K.</h4>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Home?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Reach out for a free consultation and let's bring your dream space to life — beautifully and effortlessly.
          </p>

          <div className="flex justify-center flex-wrap gap-4">
            <a
              href="https://wa.me/6591234567"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium"
            >
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
