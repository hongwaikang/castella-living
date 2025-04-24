import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ServiceCard from "@/components/ServiceCard";

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
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">Why Castella Living?</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          At Castella Living, we transform spaces with beautifully tailored window furnishings and interior accents.
          Our expert team specializes in modern curtains, blinds, wall panels, and bespoke carpentry, crafted with style
          and function in mind.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
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
            link="/services"
          />
        </div>
      </section>

      {/* Services Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Custom Carpentry"
            image="/services/carpentry.jpg"
            description="Tailor-made carpentry solutions including feature walls, built-ins, and custom furniture."
          />
          <ServiceCard
            title="Wall Paneling"
            image="/services/wallpanels.jpg"
            description="Add texture and depth to your interiors with elegant wall panel designs."
          />
          <ServiceCard
            title="Professional Installation"
            image="/services/installation.jpg"
            description="Reliable, on-time installations of curtains, blinds, and panels by our expert team."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-gray-600 mb-6">
            Get in touch for a free consultation on curtains, blinds, wall panels, or carpentry. We're happy to help you design a home you'll love.
          </p>

          <div className="flex justify-center flex-wrap gap-4">
            <a
              href="https://wa.me/6591234567" // Replace with your real number
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
            >
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-50 transition"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
