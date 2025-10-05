"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-xl shadow-2xl border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-0">
        <div className="flex items-center justify-between h-16 lg:h-20 px-4 sm:px-6 lg:px-16">
            <div className="flex items-center space-x-3 group">
            <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <Image
                src="/images/nav_logo.png"
                alt="Kochukov & Blume Law Firm"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-200"
                priority
              />
            </div>
          </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12 lg:space-x-16">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-medium transition-colors duration-300 hover:scale-105 transform ${
                  isScrolled ? "text-black/90 hover:text-blue-800" : "text-white hover:text-blue-300 tracking-widest"
                }`}
              >
                {link.name}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}
          </div>
            </div>
          {/* Logo */}
          

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Button className={`tracking-widest border-2 transition-all duration-300 group hover:cursor-pointer ${
              isScrolled 
                ? "bg-white/10 border-black/30 text-black hover:bg-blue-200 hover:border-blue-500/50" 
                : "bg-transparent border-white text-white hover:bg-white/10 hover:cursor-pointer"
            }`}>
              Schedule Consultation
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? "text-white/90 hover:bg-white/10"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4 bg-white/95 backdrop-blur-md border-t border-gray-200/50">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="px-4 pt-4 space-y-3 border-t border-gray-200">
                  <Link href="/schedule-consultation" className="block">
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white group"
                      onClick={() => setIsOpen(false)}
                    >
                      Schedule Consultation
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
