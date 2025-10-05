"use client";

import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Kochukov & Blume helped us navigate a complex merger that seemed impossible. Their expertise and attention to detail saved us millions and protected our interests every step of the way.",
      case: "Corporate Merger"
    },
    {
      name: "Michael Chen",
      role: "Small Business Owner",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "When I was facing a wrongful termination lawsuit, I didn't know where to turn. This firm not only won my case but treated me with dignity and respect throughout the entire process.",
      case: "Employment Law"
    },
    {
      name: "Emily Rodriguez",
      role: "Real Estate Developer",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Their real estate team is simply outstanding. They handled our multi-million dollar property acquisition flawlessly and caught issues that could have cost us dearly.",
      case: "Real Estate Transaction"
    },
    {
      name: "David Thompson",
      role: "Family Man",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Going through a divorce is never easy, but having the right legal team made all the difference. They were compassionate yet aggressive in protecting my children's best interests.",
      case: "Family Law"
    },
    {
      name: "Lisa Park",
      role: "Entrepreneur",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The business litigation team is incredible. They turned what seemed like a losing case into a complete victory. I can't recommend them highly enough.",
      case: "Business Litigation"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display text-deep-navy mb-6">
            What Our <span className="text-steel-blue">Clients Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Don't just take our word for it. Hear from the clients whose lives and businesses we've helped transform through expert legal representation.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Testimonial Content */}
              <div>
                <Quote className="w-12 h-12 text-steel-blue mb-6" />
                
                <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic px-4">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-steel-blue to-deep-navy rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-deep-navy">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <span className="text-sm text-steel-blue bg-light-gray px-3 py-1 rounded-full mt-2 inline-block">
                      {testimonials[currentTestimonial].case}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side - Visual Element */}
              <div className="relative">
                <div className="bg-gradient-to-br from-steel-blue to-deep-navy rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-display mb-6">
                    Client Success Stories
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-200">Client Satisfaction</span>
                      <span className="text-2xl font-bold">100%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full w-full"></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-200">Cases Won</span>
                      <span className="text-2xl font-bold">98%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-200">Repeat Clients</span>
                      <span className="text-2xl font-bold">85%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Floating Quote */}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-yellow-400 text-slate-800 p-3 rounded-full shadow-lg"
                >
                  <Quote className="w-6 h-6" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentTestimonial 
                  ? 'bg-steel-blue w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-8">
            Trusted by over 500 clients across various industries
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Google Reviews</div>
            <div className="text-2xl font-bold text-gray-400">BBB A+ Rating</div>
            <div className="text-2xl font-bold text-gray-400">Avvo 10.0</div>
            <div className="text-2xl font-bold text-gray-400">Martindale-Hubbell</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
