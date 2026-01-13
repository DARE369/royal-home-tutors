import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-white font-bold text-lg tracking-wider mb-4">
              ROYAL HOME TUTORS
            </div>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              Royal Home Tutors delivers classroom-standard education at home. We connect parents with rigorously screened, professional tutors who meet formal classroom teaching standards through personalized home and online tutoring.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-teal-500 mt-1">✉</span>
                <a href="mailto:hello@royalhometutors.com" className="hover:text-white transition-colors">
                  hello@royalhometutors.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-teal-500 mt-1">📞</span>
                <a href="tel:+234" className="hover:text-white transition-colors">
                  +234 (XXX) XXX-XXXX
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-teal-500 mt-1">📍</span>
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Royal Home Tutors. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
