"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUpRight,
  Scale,
  Shield,
  FileText,
  Users,
  ArrowRight
} from "lucide-react";
import { ThemeAnimatedButton } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Corporate Law", href: "/services#corporate" },
      { name: "Family Law", href: "/services#family" },
      { name: "Real Estate Law", href: "/services#real-estate" },
      { name: "Criminal Defense", href: "/services#criminal" },
      { name: "Business Litigation", href: "/services#litigation" },
      { name: "Estate Planning", href: "/services#estate" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about#team" },
      { name: "Testimonials", href: "/#testimonials" },
      { name: "Case Studies", href: "/about#cases" },
      { name: "Careers", href: "/careers" },
      { name: "News & Insights", href: "/news" },
    ],
    resources: [
      { name: "Legal Resources", href: "/resources" },
      { name: "Client Portal", href: "/portal" },
      { name: "Legal Forms", href: "/forms" },
      { name: "FAQ", href: "/faq" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-sky-500" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-700" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-600" },
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+27 11 123 4567",
      href: "tel:+27111234567"
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@kochukovblume.co.za",
      href: "mailto:info@kochukovblume.co.za"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Rosebank\nJohannesburg, South Africa"
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon-Fri: 8:00 AM - 5:00 PM\nSat: 9:00 AM - 1:00 PM"
    }
  ];

  return (
    <footer className="bg-deep-navy text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Company Info & Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Logo */}
            <div className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/nav_logo.png"
                  alt="Kochukov & Blume Law Firm"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">Kochukov & Blume</h3>
                <p className="text-sm text-gray-300">Legal Excellence</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              Providing trusted legal counsel and representation for over 20+ years. 
              We are committed to protecting your rights and achieving the best possible outcomes for our clients.
            </p>

            {/* Trust Indicators */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Shield className="w-4 h-4 text-steel-blue" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Users className="w-4 h-4 text-steel-blue" />
                <span>500+ Cases Won</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Scale className="w-4 h-4 text-steel-blue" />
                <span>20+ Years Experience</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-display font-semibold text-white">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-steel-blue transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-display font-semibold text-white">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-steel-blue transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-display font-semibold text-white">
              Contact Information
            </h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <Icon className="w-5 h-5 text-steel-blue" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {contact.label}
                      </p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-gray-300 hover:text-steel-blue transition-colors duration-200 text-sm whitespace-pre-line"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-sm whitespace-pre-line">
                          {contact.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <ThemeAnimatedButton
                variant="cyan"
                size="md"
                className="w-full"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule Consultation
              </ThemeAnimatedButton>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm text-gray-400 text-center md:text-left"
            >
              © {currentYear} Kochukov & Blume Law Firm. All rights reserved.
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm"
            >
              <Link href="/privacy" className="text-gray-400 hover:text-steel-blue transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-steel-blue transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-steel-blue transition-colors duration-200">
                Sitemap
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}