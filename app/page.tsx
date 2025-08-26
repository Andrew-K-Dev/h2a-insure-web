"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-green-200 p-6">
      <div className="max-w-2xl bg-white rounded-2xl shadow-lg p-10 text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-6">H2A Insure</h1>
        <p className="text-lg text-gray-700 mb-8">
          Affordable bilingual insurance coverage for agricultural workers.  
          Get essential health protection and a $50,000 death & disability benefit.  
          Peace of mind while you work in the U.S.
        </p>
        <Link
          href="/register"
          className="px-6 py-3 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-800 transition"
        >
          Get Covered Now
        </Link>
      </div>
      <footer className="mt-8 text-sm text-gray-600">
        © {new Date().getFullYear()} H2A Insure – Secure, Affordable Coverage
      </footer>
    </div>
  );
}
