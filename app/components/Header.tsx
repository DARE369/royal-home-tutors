'use client';

import React from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Tutors', href: '/tutors' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Pricing Approach', href: '/pricing' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <div className="text-teal-700 font-bold text-xl tracking-wider">
              ROYAL HOME TUTORS
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/request"
              className="bg-teal-600 text-white px-6 py-2.5 rounded-md hover:bg-teal-700 transition-colors duration-200 font-medium"
            >
              Request a Tutor
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-teal-600 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/request"
                className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors duration-200 font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request a Tutor
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
