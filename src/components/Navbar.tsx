'use client'

import { useState, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleHover = (menu: string | null) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (menu) {
      setHoveredMenu(menu);
    } else {
      timerRef.current = setTimeout(() => setHoveredMenu(null), 300); // delay close
    }
  };

  return (
    <nav className="bg-white shadow-md z-50 relative">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          Castella Living
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-black">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-black">About Us</Link>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleHover("products")}
            onMouseLeave={() => handleHover(null)}
          >
            <button className="text-gray-600 hover:text-black flex items-center gap-1">
              Products ▼
            </button>
            {hoveredMenu === "products" && (
              <div className="absolute top-full left-0 mt-2 w-[300px] bg-white border shadow-lg rounded-lg p-4 z-50">
                <div>
                  <h4 className="font-semibold text-sm text-gray-500 mb-1">Curtains</h4>
                  <Link href="/products/night-curtains" className="block text-gray-800 hover:text-black">Night Curtains</Link>
                  <Link href="/products/day-curtains" className="block text-gray-800 hover:text-black">Day Curtains</Link>
                  <Link href="/products/unislat" className="block text-gray-800 hover:text-black">Unislat Curtains</Link>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-sm text-gray-500 mb-1">Blinds</h4>
                  <Link href="/products/korean-blinds" className="block text-gray-800 hover:text-black">Korean/Combi Blinds</Link>
                  <Link href="/products/shangrila" className="block text-gray-800 hover:text-black">Shangri-La Blinds</Link>
                  <Link href="/products/roller" className="block text-gray-800 hover:text-black">Roller Blinds</Link>
                  <Link href="/products/roman" className="block text-gray-800 hover:text-black">Roman Blinds</Link>
                  <Link href="/products/venetian" className="block text-gray-800 hover:text-black">Venetian Blinds</Link>
                  <Link href="/products/honeycomb" className="block text-gray-800 hover:text-black">Honeycomb Blinds</Link>
                  <Link href="/products/vertical" className="block text-gray-800 hover:text-black">Vertical Blinds</Link>
                </div>
                <div className="pt-4 border-t mt-4">
                  <h4 className="font-semibold text-sm text-gray-500 mb-1">Wall Panels</h4>
                  <Link href="/products/wall-panels/flat" className="block text-gray-800 hover:text-black">BPC Flat Panel</Link>
                  <Link href="/products/wall-panels/fluted" className="block text-gray-800 hover:text-black">BPC Fluted Wall Panel</Link>
                </div>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleHover("services")}
            onMouseLeave={() => handleHover(null)}
          >
            <button className="text-gray-600 hover:text-black flex items-center gap-1">
              Services ▼
            </button>
            {hoveredMenu === "services" && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border shadow-lg rounded-lg p-4 space-y-2 z-50">
                <Link href="/services/installation" className="block text-gray-800 hover:text-black">Installation</Link>
                <Link href="/services/measurement" className="block text-gray-800 hover:text-black">Site Measurement</Link>
                <Link href="/services/consultation" className="block text-gray-800 hover:text-black">Free Consultation</Link>
              </div>
            )}
          </div>

          <Link href="/about" className="text-gray-600 hover:text-black">Carpentry</Link>
          <Link href="/contact" className="text-gray-600 hover:text-black">Contact Us</Link>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/6591234567"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </nav>
  );
}
