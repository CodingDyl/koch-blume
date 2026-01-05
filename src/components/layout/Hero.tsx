// src/components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { ThemeAnimatedButton } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center bg-white overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-16 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 xl:gap-32 items-center">
          
          {/* Left Section - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6 sm:space-y-8 relative z-20"
          >
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-gray-900 leading-tight font-display"
              style={{ fontFamily: 'var(--font-headline)' }}
            >
              Steadfast beside you, always.
            </motion.h1>

            {/* Body Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                We believe great counsel is built on fidelity, true partnership and genuine understanding. Your success is our business and so we invest fully in your long-term growth, working together your trenches, navigate obstacles and protecting your interests.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                When your business grows, ours does too.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <ThemeAnimatedButton 
                size="md"
                variant="primary"
                className="whitespace-nowrap rounded-xl"
                onClick={() => window.location.href = '/contact'}
              >
                Get in touch
              </ThemeAnimatedButton>
            </motion.div>
          </motion.div>

          {/* Right Section - Image (Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:flex items-end justify-end mt-8 lg:mt-0 z-10"
          >
            <div className="relative w-full h-[600px] lg:h-[800px] xl:h-[900px] 2xl:h-[1000px] flex items-end justify-end">
              <Image
                src="/images/hero_logo.png"
                alt="Geometric design"
                width={1100}
                height={1100}
                className="object-contain w-full h-full scale-110"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Gemsbok Image - Mobile (Behind Text, Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-0 right-0 lg:hidden z-0 pointer-events-none"
        style={{ width: '70%', height: '50%' }}
      >
        <Image
          src="/images/hero_logo.png"
          alt="Geometric design"
          fill
          className="object-contain object-bottom-right opacity-20"
          priority
        />
      </motion.div>
    </section>
  );
}
