"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Facebook, Instagram } from "lucide-react";

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
          isMenuOpen 
            ? 'bg-deep-navy' 
            : 'bg-gradient-to-r from-white via-white to-deep-navy/70'
        } ${
          isScrolled ? 'backdrop-blur-md shadow-sm' : ''
        }`}
      >
        <div className="max-w mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 sm:h-28">
            
            {/* Logo */}
            <Link href="/" className="relative z-50 flex items-center">
              <Image
                src="/images/nav_logo.png"
                alt="Kochukov & Blume Law Firm"
                width={640}
                height={200}
                sizes="(min-width: 1280px) 520px, (min-width: 1024px) 460px, (min-width: 768px) 380px, (min-width: 640px) 320px, 260px"
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain transition-all duration-300 hover:scale-105"
                priority
              />
            </Link>

            {/* Menu Button */}
            <button
              onClick={toggleMenu}
              className="relative z-50 flex flex-col items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 focus:outline-none group hover:cursor-pointer transition-colors duration-300 touch-manipulation text-white"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
              
              {/* Hamburger/Close Icon */}
              <div className="relative w-5 h-4 sm:w-6 sm:h-5 md:w-7 md:h-6 lg:w-8 lg:h-7 flex flex-col justify-center">
                <span
                  className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-full bg-current top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? '-rotate-45 top-1/2 -translate-y-1/2' : 'bottom-0'
                  }`}
                />
              </div>

              {/* Menu Text */}
              <span className={`text-[10px] sm:text-xs md:text-sm lg:text-base font-medium mt-1 sm:mt-1.5 transition-opacity duration-300 ${
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
            className="fixed inset-0 z-40 bg-deep-navy overflow-y-auto"
          >
            {/* Scrollable Container */}
            <div className="min-h-screen flex flex-col">
              
              {/* Top Spacer for Navbar */}
              <div className="h-24 sm:h-28 md:h-32 flex-shrink-0"></div>
              
              {/* Menu Content Container */}
              <div className="flex-1 px-4 sm:px-6 lg:px-8 pb-8">
                <div className="w-full max-w-4xl mx-auto">
                  
                  {/* Navigation Links */}
                  <nav className="space-y-2 sm:space-y-3 md:space-y-4 mb-10 sm:mb-12 md:mb-16 lg:mb-20">
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
                          className="group block py-3 sm:py-4 md:py-5 lg:py-6 border-b border-white/10 hover:border-steel-blue/50 transition-colors duration-300 touch-manipulation"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-light text-white group-hover:text-steel-blue transition-colors duration-300">
                              {item.label}
                            </span>
                            <span className="text-white/40 text-[10px] sm:text-xs md:text-sm font-medium group-hover:text-steel-blue transition-colors duration-300">
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
                    className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 sm:gap-12"
                  >
                    
                    {/* Contact Info */}
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <p className="text-white/60 text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-2">
                          Get in Touch
                        </p>
                        <a 
                          href="mailto:info@kblegal.co.za"
                          className="text-white hover:text-steel-blue transition-colors duration-300 text-sm sm:text-base md:text-lg break-words touch-manipulation"
                        >
                          info@kblegal.co.za
                        </a>
                      </div>
                      <div>
                        <p className="text-white/60 text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-2">
                          Call Us
                        </p>
                        <a 
                          href="tel:0103000247"
                          className="text-white hover:text-steel-blue transition-colors duration-300 text-sm sm:text-base md:text-lg touch-manipulation"
                        >
                          010 300 0247
                        </a>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div>
                      <p className="text-white/60 text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-3 sm:mb-4">
                        Follow Us
                      </p>
                      <div className="flex items-center gap-3 sm:gap-4">
                        {socialItems.map((social) => {
                          const Icon = social.icon;
                          return (
                            <a
                              key={social.label}
                              href={social.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center border border-white/20 hover:border-steel-blue hover:bg-steel-blue/10 transition-all duration-300 group rounded-lg touch-manipulation"
                              aria-label={social.label}
                            >
                              <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:text-steel-blue transition-colors duration-300" />
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
                className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 border-t border-white/10 mt-auto"
              >
                <div className="max-w-4xl mx-auto">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 md:gap-4 text-white/60 text-[10px] sm:text-xs md:text-sm">
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
