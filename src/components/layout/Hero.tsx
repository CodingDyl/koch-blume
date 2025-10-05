// src/components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUpRight, FileText, Scale, Shield, BookOpen, Gavel, Users, ChevronDown } from "lucide-react";

export default function Hero() {
  const legalLinks = [
    { name: "Legal Documentation", icon: FileText },
    { name: "Court Procedures", icon: Scale },
    { name: "Legal Rights", icon: Shield },
    { name: "Case Studies", icon: BookOpen },
    { name: "Legal Precedents", icon: Gavel },
    { name: "Client Resources", icon: Users },
    { name: "Legal Forms", icon: FileText },
    { name: "Compliance Guide", icon: Shield },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col overflow-hidden">
      {/* Background Image with Subtle Overlay */}
      <Image
        src="/images/background.png"
        alt="Professional legal office background"
        fill
        priority
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Main Content - Left/Right Layout */}
      <div className="relative z-10 flex-1 flex items-center pt-20">
        <div className="w-full max-w-7xl xl:max-w-6xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Section - Social Proof & Headline */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-8"
            >
              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-6 text-white">
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-foreground">25</div>
                    <div className="text-sm lg:text-base text-gray-200">Years Combined Experience</div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-foreground">500+</div>
                    <div className="text-sm lg:text-base text-gray-200">Cases Won</div>
                  </div>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display text-white leading-tight"
              >
                Tired of <br /> Feeling Powerless?<br />
                <span className="text-foreground">Get the Legal <br />Protection You Deserve.</span>
              </motion.h1>
            </motion.div>

            {/* Right Section - Paragraph & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-8 flex flex-col justify-center"
            >
              {/* Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed"
              >
                Whether you're facing a business dispute, divorce, or courtroom challenge, we give you the confidence and legal protection you need.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col items-end space-y-6"
              >
                <Button 
                  size="lg" 
                  className="bg-foreground hover:bg-transparent hover:text-foreground hover:text-xl hover:font-bold text-white text-lg px-8 py-4 hover:border-2 hover:border-foreground hover:cursor-pointer rounded-lg font-medium transition-all duration-200 group"
                >
                  Get Started Today
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>

                {/* Scroll Indicator - Horizontal */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.8 }}
                  className="flex flex-col items-center space-y-3"
                >
                  {/* Horizontal Divider */}
                  <div className="w-16 h-px bg-white/30"></div>
                  
                  {/* Scroll Icon */}
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ChevronDown className="w-4 h-4 text-white/70" />
                  </motion.div>
                  
                  {/* Serving Since Text */}
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="text-xs text-white/60 tracking-widest"
                  >
                    SERVING CLIENTS SINCE 2020
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Menu at Bottom */}
      <div className="relative z-10">
        <div className="overflow-hidden py-4 sm:py-6">
          <motion.div
            className="flex gap-8 sm:gap-12 items-center"
            animate={{ x: [0, -100 * legalLinks.length] }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Duplicate the links for seamless scrolling */}
            {[...legalLinks, ...legalLinks].map((link, index) => {
              const Icon = link.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 text-white/70 hover:text-white transition-colors duration-200 whitespace-nowrap group cursor-pointer"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-xs sm:text-sm font-medium tracking-wide">{link.name}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
