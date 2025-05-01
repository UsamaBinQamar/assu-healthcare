"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              AssuHealthcare
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Providing premium quality cooling patches made in Pakistan.
              Trusted by hospitals and families across the country.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-sm text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-600" />
                <a
                  href="tel:+923001234567"
                  className="text-sm text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                >
                  +92 320 4430997
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-600" />
                <a
                  href="mailto:assu.healthcare@gmail.com"
                  className="text-sm text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
                >
                  assu.healthcare@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Lahore, Pakistan
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Business Hours
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 dark:text-gray-300">
                Monday - Friday: 9:00 AM - 6:00 PM
              </li>
              <li className="text-sm text-gray-600 dark:text-gray-300">
                Saturday: 10:00 AM - 4:00 PM
              </li>
              <li className="text-sm text-gray-600 dark:text-gray-300">
                Sunday: Closed
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} AssuHealthcare. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
              >
                Terms of Service
              </Link>
              <Link
                href="/shipping"
                className="text-sm text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
              >
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
