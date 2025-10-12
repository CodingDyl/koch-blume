"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Award, CheckCircle, Users, TrendingUp, Shield, Heart, Building, Scale } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "Fortune 500 Technology",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Kochukov & Blume helped us navigate a complex merger that seemed impossible. Their expertise and attention to detail saved us millions and protected our interests every step of the way.",
      case: "Corporate Merger",
      result: "R50M+ Saved",
      duration: "6 months",
      category: "Corporate Law",
      highlight: "Fortune 500 Experience"
    },
    {
      name: "Michael Chen",
      role: "Small Business Owner",
      company: "Local Manufacturing",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "When I was facing a wrongful termination lawsuit, I didn't know where to turn. This firm not only won my case but treated me with dignity and respect throughout the entire process.",
      case: "Employment Law",
      result: "Complete Victory",
      duration: "3 months",
      category: "Employment Law",
      highlight: "Wrongful Termination"
    },
    {
      name: "Emily Rodriguez",
      role: "Real Estate Developer",
      company: "Commercial Properties Ltd",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Their real estate team is simply outstanding. They handled our multi-million dollar property acquisition flawlessly and caught issues that could have cost us dearly.",
      case: "Real Estate Transaction",
      result: "R25M+ Transaction",
      duration: "4 months",
      category: "Real Estate Law",
      highlight: "Commercial Expert"
    },
    {
      name: "David Thompson",
      role: "Family Man",
      company: "Private Client",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Going through a divorce is never easy, but having the right legal team made all the difference. They were compassionate yet aggressive in protecting my children's best interests.",
      case: "Family Law",
      result: "Favorable Settlement",
      duration: "8 months",
      category: "Family Law",
      highlight: "Child Custody Expert"
    },
    {
      name: "Lisa Park",
      role: "Entrepreneur",
      company: "Startup Ventures",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The business litigation team is incredible. They turned what seemed like a losing case into a complete victory. I can't recommend them highly enough.",
      case: "Business Litigation",
      result: "R5M+ Recovery",
      duration: "12 months",
      category: "Business Litigation",
      highlight: "Complex Commercial"
    }
  ];

  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+", color: "text-blue-500" },
    { icon: Award, label: "Cases Won", value: "98%", color: "text-green-500" },
    { icon: Star, label: "Client Rating", value: "4.9/5", color: "text-yellow-500" },
    { icon: TrendingUp, label: "Success Rate", value: "95%", color: "text-purple-500" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-transparent"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-steel-blue/10 text-steel-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            <span>Client Testimonials</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-deep-navy mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-steel-blue to-cyan-500">Clients Say</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed mb-12">
            Don't just take our word for it. Hear from the clients whose lives and businesses 
            we've helped transform through expert legal representation and exceptional results.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-12 h-12 ${stat.color} bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-deep-navy mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative mb-16">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Testimonial Content */}
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Quote className="w-8 h-8 text-steel-blue" />
                  <div className="inline-flex items-center space-x-2 bg-steel-blue/10 text-steel-blue px-3 py-1 rounded-full text-xs font-medium">
                    <Scale className="w-3 h-3" />
                    <span>{testimonials[currentTestimonial].category}</span>
                  </div>
                </div>
                
                <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-steel-blue to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-deep-navy mb-1">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600 font-medium">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Case Details */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-steel-blue to-cyan-500 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-display font-bold mb-6">
                    Case Results
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Case Type</span>
                      <span className="font-semibold">{testimonials[currentTestimonial].case}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Result</span>
                      <span className="font-bold text-yellow-400">{testimonials[currentTestimonial].result}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-white/80">Duration</span>
                      <span className="font-semibold">{testimonials[currentTestimonial].duration}</span>
                    </div>
                    
                    <div className="pt-4 border-t border-white/20">
                      <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                        <Award className="w-4 h-4" />
                        <span className="text-sm font-medium">{testimonials[currentTestimonial].highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-xl rounded-2xl p-4 border border-white/30"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-steel-blue">5★</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-xl rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-white/20"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-xl rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-white/20"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-3 rounded-full transition-all duration-200 ${
                index === currentTestimonial 
                  ? 'bg-steel-blue w-8' 
                  : 'bg-gray-300 hover:bg-gray-400 w-3'
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
          className="text-center"
        >
          <div className="bg-gradient-to-r from-deep-navy via-steel-blue to-deep-navy rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 text-white/90 mb-8">
                <Shield className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Trusted & Recognized</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Recognized by <span className="text-cyan-400">Leading Organizations</span>
              </h3>
              
              <p className="text-lg text-white/80 mb-12 max-w-6xl mx-auto">
                Our commitment to excellence has earned recognition from industry leaders and professional organizations.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {[
                  { name: "Legal 500", rating: "Recommended", icon: Award },
                  { name: "BBB", rating: "A+ Rating", icon: Star },
                  { name: "Avvo", rating: "10.0 Rating", icon: CheckCircle },
                  { name: "Martindale", rating: "AV Preeminent", icon: Building }
                ].map((org, index) => {
                  const Icon = org.icon;
                  return (
                    <div key={org.name} className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-yellow-400" />
                      </div>
                      <div className="text-lg font-semibold mb-1">{org.name}</div>
                      <div className="text-sm text-white/70">{org.rating}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
