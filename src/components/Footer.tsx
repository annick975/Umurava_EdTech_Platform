import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#000C2D] text-white py-12">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Top Social Icons */}
        <div className="flex justify-between items-center mb-12">
          <Image
            src="/CareerTicket.png"
            alt="CE Logo"
            width={55}
            height={45}
            className="w-12 h-12"
          />
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/UmuravaAfrica"
              className="bg-white rounded-full w-12 h-12 flex items-center justify-center"
            >
              <Image
                src="/icons/fb.svg"
                alt="Facebook"
                width={15}
                height={15}
              />
            </Link>
            <Link
              href="#google"
              className="bg-white rounded-full w-12 h-12 flex items-center justify-center"
            >
              <Image
                src="/icons/google.svg"
                alt="Google"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/umuravaafrica"
              className="bg-white rounded-full w-12 h-12 flex items-center justify-center p-auto"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={22}
                height={22}
              />
            </Link>
            <Link
              href="https://www.youtube.com/@umurava_Africa"
              className="bg-white rounded-full w-12 h-12 flex items-center justify-center"
            >
              <Image src="/icons/yt.svg" alt="YouTube" width={22} height={22} />
            </Link>
          </div>
        </div>
        {/* Horizontal Line */}
        <div className="w-full h-px bg-white/10 mb-12" />
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Address Section */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-semibold mb-6">Our Address</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5" />
                <span>career@tickets.com</span>
              </p>
              <p className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>89 KG 14 Ave, Kigali</span>
              </p>
              <p className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5" />
                <span>+250 700 000</span>
              </p>
            </div>
          </div>
          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/Landing_Pages/Challenges"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Program
                </Link>
              </li>
              <li>
                <Link
                  href="/Landing_Pages/About"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div className="md:col-span-5">
            <h3 className="text-xl font-semibold mb-6">
              Join our newsletter to keep up to date with us!
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <form className="flex items-center justify-between w-full rounded-lg bg-white px-4 py-2 gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 text-gray-700 rounded-lg focus:outline-none focus:ring-0 focus:ring-white"
                />
                <button
                  type="submit"
                  className="px-4 lg:px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Horizontal Line */}
        <div className="w-full h-px bg-white/10 mb-12" />
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300">
            Copyright © All Rights Reserved SawaPay 2025.
          </p>
          <div className="flex items-center gap-4 text-gray-300">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms-conditions" className="hover:text-white">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
