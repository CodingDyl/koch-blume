// src/components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { ThemeAnimatedButton } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Section - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-5 sm:space-y-6 relative z-20"
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
              className="space-y-3 sm:space-y-4"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                We believe great legal counsel is built on trust, partnership, and a deep understanding of our clients&apos; objectives. At Kochukov &amp; Blume Incorporated, we work closely with you to navigate legal complexity, protect your interests, and support informed decision-making.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Your success drives our work - and as your business grows, so does ours.
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
            className="relative hidden lg:flex items-center justify-end z-10"
          >
            <div className="relative w-full h-[800px] lg:h-[800px] xl:h-[900px] 2xl:h-[1000px] flex items-center justify-end lg:translate-x-28 xl:translate-x-36 2xl:translate-x-44">
              <Image
                src="/images/hero_logo.png"
                alt="Geometric design"
                width={1200}
                height={1200}
                className="object-contain h-full w-[240%] max-w-none opacity-20"
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
        style={{ width: '140%', height: '100%' }}
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
