'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Shield, Users, Heart, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white">
        <div className="relative h-[420px] md:h-[520px]">
          {/* Use fill + style for objectFit in Next Image */}
          <Image
            src="/hero-farm.jpg"
            alt="Farm workers"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-40"
            priority
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl text-center px-6">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Affordable H-2A Worker Insurance
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-200">
                Protecting farmworkers and employers with trusted, compliant coverage.
              </p>

              <div className="mt-8 flex justify-center gap-4">
                <Link href="/plans" className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl font-semibold shadow-lg">
                  View Plans
                </Link>
                <Link href="/contact" className="px-6 py-3 bg-white text-blue-900 hover:bg-gray-200 rounded-xl font-semibold shadow-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose H2A-Insure?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <Shield className="mx-auto h-12 w-12 text-blue-600" aria-hidden />
              <h3 className="mt-4 font-semibold text-lg">Trusted Protection</h3>
              <p className="mt-2 text-gray-600">Fully compliant with U.S. H-2A program requirements, giving you peace of mind.</p>
            </div>
            <div className="text-center">
              <Users className="mx-auto h-12 w-12 text-green-600" aria-hidden />
              <h3 className="mt-4 font-semibold text-lg">For Workers & Employers</h3>
              <p className="mt-2 text-gray-600">Flexible plans designed to support both farmworkers and farm owners.</p>
            </div>
            <div className="text-center">
              <Heart className="mx-auto h-12 w-12 text-red-600" aria-hidden />
              <h3 className="mt-4 font-semibold text-lg">Affordable Coverage</h3>
              <p className="mt-2 text-gray-600">Low-cost insurance that covers essential health needs without hidden fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Choose Your Plan</h2>
          <p className="text-gray-600 mb-12">Affordable insurance options designed for H-2A workers and employers. Select the coverage that fits your needs.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="bg-white shadow-lg rounded-2xl p-8 border hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-4">Basic</h3>
              <p className="text-4xl font-bold text-blue-600 mb-6">$49<span className="text-lg font-medium text-gray-600">/mo</span></p>
              <ul className="space-y-3 text-left mb-6">
                <li className="flex items-center gap-2 text-gray-700"><CheckCircle className="w-5 h-5" aria-hidden /> Emergency coverage</li>
                <li className="flex items-center gap-2 text-gray-700"><CheckCircle className="w-5 h-5" aria-hidden /> Doctor visits (limited)</li>
                <li className="flex items-center gap-2 text-gray-700"><CheckCircle className="w-5 h-5" aria-hidden /> Prescription discounts</li>
              </ul>
              <Link href="/checkout?plan=basic" className="block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md">Select Plan</Link>
            </div>

            {/* Standard - Most Popular */}
            <div className="bg-white shadow-xl rounded-2xl p-8 border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow">Most Popular</div>
              <h3 className="text-xl font-bold mb-4">Standard</h3>
              <p className="text-4xl font-bold text-blue-600 mb-6">$79<span className="text-lg font-medium text-gray-600">/mo</span></p>
              <ul className="space-y-3 text-left mb-6">
                <li className="flex items-center gap-2 text-gray-700"><CheckCircle className="w-5 h-5" aria-hidden /> Full emergency coverage</li>
                <li className="flex items-center gap-2 text-gray-700"><CheckCircle className="w-5 h-5" aria-hidden /> Unlimited doctor visits</li>
                <li className="flex items-center gap-2 text-gray-700"><CheckCircle className="w-5 h-5" aria-hidden /> Prescriptions included</li>
                <li className="flex items-center gap-2 text-gray-700"><CheckCircle className="w-5 h-5" aria-hidden /> Employer compliance support</li>
              </ul>
              <Link href="/checkout?plan=standard" className="block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md">Select Plan</Link>
            </div>

            {/* Premium */}
            <div className="bg-white shadow-lg rounded-2xl p-8 border hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-4">Premium</h3>
              <p className="text-4xl font-bold text-blue-600 mb-6">$99<span className="text-lg font-medium text-gray-600">/mo</span></p>
              <ul className="space-y-3 text-left mb-6">
                <li className="flex items-center gap-2 text-gray-700"><CheckCircle className="w-5 h-5" aria-hidden /> All Standard benefits</li>
                <li className="flex items-center gap-2 text-gray-700"><CheckCircle className="w-5 h-5" aria-hidden /> Specialist & hospital care</li>
                <li className="flex items-center gap-2 text-gray-700"><CheckCircle className="w-5 h-5" aria-hidden /> Vision & dental coverage</li>
                <li className="flex items-center gap-2 text-gray-700"><CheckCircle className="w-5 h-5" aria-hidden /> Priority claim processing</li>
              </ul>
              <Link href="/checkout?plan=premium" className="block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md">Select Plan</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">What does the insurance cover?</h3>
              <p className="text-gray-600">Coverage includes medical emergencies, doctor visits, prescriptions, and more.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Can I sign up as an individual worker?</h3>
              <p className="text-gray-600">Yes, we offer both individual and group employer coverage options.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Is my payment secure?</h3>
              <p className="text-gray-600">Absolutely. We use PayPal and Stripe secure checkout with full SSL encryption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Payment Logos */}
      <section className="py-12 bg-gray-100 border-t">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-700 text-lg font-medium">Payments secured by:</p>
          <div className="flex gap-6 items-center">
            <Image src="/paypal-logo.png" alt="PayPal" width={100} height={40} />
            <Image src="/stripe-logo.png" alt="Stripe" width={100} height={40} />
            <Image src="/ssl-secure.png" alt="SSL Secure" width={100} height={40} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="font-bold text-lg">H2A-Insure</h3>
            <p className="mt-2 text-gray-300">Affordable insurance for farmworkers & employers.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li><Link href="/plans">Plans</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-400 mt-10 text-sm">© {new Date().getFullYear()} H2A-Insure. All rights reserved.</p>
      </footer>
    </main>
  );
}
