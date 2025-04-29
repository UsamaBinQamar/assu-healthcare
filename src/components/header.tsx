"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                AssuHealthcare
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-green-600"
            >
              Home
            </Link>
            <Link
              href="#products"
              className="text-sm font-medium transition-colors hover:text-green-600"
            >
              Products
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-green-600"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-green-600"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Phone Number - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-2">
              <Phone className="h-4 w-4 text-green-600" />
              <a
                href="tel:+923001234567"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors"
              >
                +92 300 1234567
              </a>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md hover:bg-accent hover:text-accent-foreground"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#products"
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="#about"
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              {/* Phone Number in Mobile Menu */}
              <div className="flex items-center space-x-2 px-3 py-2">
                <Phone className="h-4 w-4 text-green-600" />
                <a
                  href="tel:+923001234567"
                  className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors"
                >
                  +92 300 1234567
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
