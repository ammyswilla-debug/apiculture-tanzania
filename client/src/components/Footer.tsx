import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

/**
 * Footer Component
 * Design: Organic Warmth
 * - Forest green background with cream text
 * - Organized sections with quick links and contact info
 * - Social media integration
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">🐝</span>
              </div>
              <h3 className="font-bold text-lg">Apiculture Tanzania</h3>
            </div>
            <p className="text-sm opacity-90">
              Empowering sustainable beekeeping knowledge and practices across Tanzania.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="opacity-80 hover:opacity-100 transition-opacity">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/learn">
                  <a className="opacity-80 hover:opacity-100 transition-opacity">
                    Learn Beekeeping
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/resources">
                  <a className="opacity-80 hover:opacity-100 transition-opacity">
                    Resources
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <a className="opacity-80 hover:opacity-100 transition-opacity">
                    News & Updates
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-semibold text-base mb-4">More</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <a className="opacity-80 hover:opacity-100 transition-opacity">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="opacity-80 hover:opacity-100 transition-opacity">
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/support">
                  <a className="opacity-80 hover:opacity-100 transition-opacity">
                    Support Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-base mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:info@apiculture-tz.org"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  info@apiculture-tz.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+255123456789"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  +255 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="#"
              className="p-2 hover:bg-primary/20 rounded-lg transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-primary/20 rounded-lg transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-primary/20 rounded-lg transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm opacity-75">
            <p>
              © {currentYear} Apiculture Tanzania. All rights reserved. | Empowering
              sustainable beekeeping knowledge.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
