"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, Facebook, Instagram } from "lucide-react";

export default function NewNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Services', link: '/services' },
    { label: 'Contact', link: '/contact' }
  ];

  const socialItems = [
    { label: 'LinkedIn', link: 'https://linkedin.com', icon: Linkedin },
    { label: 'Facebook', link: 'https://facebook.com', icon: Facebook },
    { label: 'Instagram', link: 'https://instagram.com', icon: Instagram }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link href="/" className="relative z-50 flex items-center">
              <Image
                src="/images/nav_logo.png"
                alt="Kochukov & Blume Law Firm"
                width={140}
                height={40}
                className="h-10 w-auto object-contain transition-all duration-300 hover:scale-105"
                priority
              />
            </Link>

            {/* Menu Button */}
            <button
              onClick={toggleMenu}
              className={`relative z-50 flex flex-col items-center justify-center w-12 h-12 focus:outline-none group hover:cursor-pointer ${
                isMenuOpen ? 'text-white' : isScrolled ? 'text-deep-navy' : 'text-white'
              }`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
              
              {/* Hamburger/Close Icon */}
              <div className="relative w-6 h-5 flex flex-col justify-center">
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? '-rotate-45 top-1/2 -translate-y-1/2' : 'bottom-0'
                  }`}
                />
              </div>

              {/* Menu Text */}
              <span className={`text-xs font-medium mt-1.5 transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}>
                Menu
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-deep-navy"
          >
            <div className="h-full flex flex-col">
              
              {/* Menu Content Container */}
              <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-4xl">
                  
                  {/* Navigation Links */}
                  <nav className="space-y-2 mb-16">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Link
                          href={item.link}
                          onClick={closeMenu}
                          className="group block py-4 border-b border-white/10 hover:border-steel-blue/50 transition-colors duration-300"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white group-hover:text-steel-blue transition-colors duration-300">
                              {item.label}
                            </span>
                            <span className="text-white/40 text-sm font-medium group-hover:text-steel-blue transition-colors duration-300">
                              0{index + 1}
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Bottom Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8"
                  >
                    
                    {/* Contact Info */}
                    <div className="space-y-4">
                      <div>
                        <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-2">
                          Get in Touch
                        </p>
                        <a 
                          href="mailto:info@kblegal.co.za"
                          className="text-white hover:text-steel-blue transition-colors duration-300 text-lg"
                        >
                          info@kblegal.co.za
                        </a>
                      </div>
                      <div>
                        <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-2">
                          Call Us
                        </p>
                        <a 
                          href="tel:0103000247"
                          className="text-white hover:text-steel-blue transition-colors duration-300 text-lg"
                        >
                          010 300 0247
                        </a>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div>
                      <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-4">
                        Follow Us
                      </p>
                      <div className="flex items-center gap-4">
                        {socialItems.map((social) => {
                          const Icon = social.icon;
                          return (
                            <a
                              key={social.label}
                              href={social.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-steel-blue hover:bg-steel-blue/10 transition-all duration-300 group"
                              aria-label={social.label}
                            >
                              <Icon className="w-5 h-5 text-white group-hover:text-steel-blue transition-colors duration-300" />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Footer Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="px-4 sm:px-6 lg:px-8 py-8 border-t border-white/10"
              >
                <div className="max-w-4xl mx-auto">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-white/60 text-sm">
                    <p>1st Floor, 145 Second St, Sandton</p>
                    <p>© 2024 Kochukov & Blume. All rights reserved.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
