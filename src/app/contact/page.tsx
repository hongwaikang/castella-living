import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-gray-600 text-center mb-10">
          Have a question, need a quote, or want to consult with our team? We’d love to hear from you.
        </p>

        {/* Contact Form */}
        <form className="space-y-6 bg-gray-50 p-6 rounded-xl shadow">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring focus:ring-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring focus:ring-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows={5}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring focus:ring-gray-200"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* WhatsApp CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">Prefer to chat with us directly?</p>
          <a
            href="https://wa.me/6586112740"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

        {/* Location Info */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-2">Visit Our Showroom</h2>
          <p className="text-gray-600 mb-1 font-medium">Castella Living Pte Ltd</p>
          <p className="text-gray-600 mb-1">Oxley BizHub 2</p>
          <p className="text-gray-600 mb-1">
            62 Ubi Rd 1, #01-26 OXLEY BIZHUB 2<br />Singapore 408734
          </p>
          <p className="text-gray-600 mb-4">Phone: <a href="tel:+6589256928" className="text-blue-600 hover:underline">8925 6928</a></p>

          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md mt-4">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.739766388964!2d103.8895310749657!3d1.3322685986551075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17dcc1fce2bb%3A0x13fa289a00f16723!2sCastella%20Living%20Pte%20Ltd!5e0!3m2!1sen!2ssg!4v1745511085272!5m2!1sen!2ssg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

    </main>
  );
}