"use client";

import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Kochukov & Blume helped us navigate a complex merger that seemed impossible. Their expertise and attention to detail saved us millions and protected our interests every step of the way."
    },
    {
      name: "Michael Chen",
      text: "When I was facing a wrongful termination lawsuit, I didn't know where to turn. This firm not only won my case but treated me with dignity and respect throughout the entire process."
    },
    {
      name: "Emily Rodriguez",
      text: "Their real estate team is simply outstanding. They handled our multi-million dollar property acquisition flawlessly and caught issues that could have cost us dearly."
    },
    {
      name: "David Thompson",
      text: "Going through a divorce is never easy, but having the right legal team made all the difference. They were compassionate yet aggressive in protecting my children's best interests."
    },
    {
      name: "Lisa Park",
      text: "The business litigation team is incredible. They turned what seemed like a losing case into a complete victory. I can't recommend them highly enough."
    }
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 6000); // Change testimonial every 6 seconds
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, nextTestimonial]);

  const handleManualNavigation = (callback: () => void) => {
    setIsAutoPlaying(false);
    callback();
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-20 md:py-32 lg:py-40 bg-white relative overflow-hidden" id="testimonials">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20 lg:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-deep-navy tracking-tight">
            Client Testimonials
          </h2>
        </motion.div>

        {/* Testimonial Display */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Quote Icon - Subtle */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -top-4 left-0 md:-left-8 z-0"
          >
            <Quote className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-steel-blue/10" />
          </motion.div>

          {/* Testimonial Content */}
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Testimonial Text */}
            <div className="mb-12 md:mb-16">
              <p className="text-xl md:text-2xl lg:text-3xl text-deep-navy/90 font-light leading-relaxed md:leading-relaxed lg:leading-relaxed tracking-tight">
                {testimonials[currentTestimonial].text}
              </p>
            </div>

            {/* Client Name with Divider */}
            <div className="flex items-center space-x-6">
              <div className="h-px w-12 md:w-16 bg-steel-blue"></div>
              <h3 className="text-base md:text-lg lg:text-xl font-medium text-deep-navy tracking-wide">
                {testimonials[currentTestimonial].name}
              </h3>
            </div>
          </motion.div>

          {/* Navigation Buttons - Minimal Design */}
          <div className="flex items-center justify-between mt-12 md:mt-16 lg:mt-20">
            
            {/* Previous Button */}
            <button
              onClick={() => handleManualNavigation(prevTestimonial)}
              className="group flex items-center space-x-2 text-deep-navy/60 hover:text-deep-navy transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-deep-navy/20 group-hover:border-steel-blue transition-colors duration-300">
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <span className="hidden sm:inline text-sm md:text-base font-medium">Previous</span>
            </button>

            {/* Dot Indicators */}
            <div className="flex items-center space-x-2 md:space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleManualNavigation(() => setCurrentTestimonial(index))}
                  className="group"
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <div
                    className={`transition-all duration-300 ${
                      index === currentTestimonial
                        ? "w-8 md:w-10 h-1 bg-steel-blue"
                        : "w-1 h-1 bg-deep-navy/20 group-hover:bg-deep-navy/40"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => handleManualNavigation(nextTestimonial)}
              className="group flex items-center space-x-2 text-deep-navy/60 hover:text-deep-navy transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <span className="hidden sm:inline text-sm md:text-base font-medium">Next</span>
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-deep-navy/20 group-hover:border-steel-blue transition-colors duration-300">
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </button>
          </div>
        </div>

        {/* Subtle Bottom Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-24 lg:mt-32 h-px bg-gradient-to-r from-transparent via-steel-blue/20 to-transparent origin-center"
        />
      </div>
    </section>
  );
}
