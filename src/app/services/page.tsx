"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { ThemeAnimatedButton } from "@/components/ui/button";
import Link from "next/link";
import AreaOfExpertise from "@/components/sections/AreaOfExpertise";

export default function ServicesPage() {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean & Minimal */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-4 sm:mb-6"
            >
              <p className="text-[#548caf] text-sm sm:text-base md:text-lg font-medium uppercase tracking-wider pl-2">
                Legal Services
              </p>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-gray-900 leading-tight mb-6 sm:mb-8 font-display"
              style={{ fontFamily: 'var(--font-headline)' }}
            >
              Comprehensive legal solutions.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed pl-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              We provide expert legal representation across multiple practice areas, delivering strategic counsel and proven results for businesses and individuals alike.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <AreaOfExpertise 
        title="Practice Areas"
        subtitle="Tailored expertise across diverse legal disciplines"
        titleSize="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        showCTA={false}
      />

      {/* How We Work Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#1a385c] relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center opacity-5"></div>
        
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-3 sm:mb-4 font-display"
                style={{ fontFamily: 'var(--font-headline)' }}>
              Our Approach
            </h2>
            <p className="text-base sm:text-lg text-gray-300 px-4"
               style={{ fontFamily: 'var(--font-body)' }}>
              A methodical process designed to deliver exceptional results and peace of mind
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {[
              {
                number: "01",
                title: "Consultation",
                description: "We begin with a thorough understanding of your requirements and objectives."
              },
              {
                number: "02",
                title: "Strategy",
                description: "Develop a comprehensive legal strategy tailored to your specific needs."
              },
              {
                number: "03",
                title: "Execution",
                description: "Implement the strategy with precision, keeping you informed throughout."
              },
              {
                number: "04",
                title: "Resolution",
                description: "Achieve optimal outcomes while protecting your interests at every stage."
              }
            ].map((step, index) => (
                <motion.div
                key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                className="relative"
              >
                <div className="mb-3 sm:mb-4">
                  <span className="text-4xl sm:text-5xl font-light text-white/30"
                        style={{ fontFamily: 'var(--font-headline)' }}>
                    {step.number}
                  </span>
                      </div>
                <h3 className="text-lg sm:text-xl font-light text-white mb-2 sm:mb-3 font-display"
                    style={{ fontFamily: 'var(--font-headline)' }}>
                  {step.title}
                    </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed"
                   style={{ fontFamily: 'var(--font-body)' }}>
                  {step.description}
                </p>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 mb-4 sm:mb-6 font-display"
                  style={{ fontFamily: 'var(--font-headline)' }}>
                Why choose Kochukov & Blume?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8"
                 style={{ fontFamily: 'var(--font-body)' }}>
                Our commitment goes beyond legal representation. We invest in understanding your business, your challenges, and your goals to deliver solutions that truly serve your long-term interests.
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                {[
                  "Accessible and outcome-orientated",
                  "Proven track record of successful outcomes",
                  "Personalized attention and strategic counsel",
                  "Transparent communication at every stage"
                ].map((point, index) => (
            <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#548caf] mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700"
                          style={{ fontFamily: 'var(--font-body)' }}>
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#1a385c] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-12 text-white"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-4 sm:mb-6 font-display"
                  style={{ fontFamily: 'var(--font-headline)' }}>
                Schedule a consultation
              </h3>
              <p className="text-sm sm:text-base text-white/80 mb-6 sm:mb-8 leading-relaxed"
                 style={{ fontFamily: 'var(--font-body)' }}>
                Discuss your legal needs with our experienced team. We&apos;ll help you understand your options and chart the best path forward.
              </p>
              
              <Link href="/contact" className="inline-block">
                <ThemeAnimatedButton 
                  size="md"
                  variant="primary"
                  className="whitespace-nowrap rounded-xl"
                >
                  Get in touch
                </ThemeAnimatedButton>
              </Link>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
                <p className="text-xs sm:text-sm text-white/60 mb-2"
                   style={{ fontFamily: 'var(--font-body)' }}>
                  Office Hours
                </p>
                <p className="text-sm sm:text-base text-white/90"
                   style={{ fontFamily: 'var(--font-body)' }}>
                  Monday - Friday: 8:00 AM - 6:00 PM
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
