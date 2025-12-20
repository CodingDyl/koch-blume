"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Scale, Shield, Building2, Users, FileText, Gavel, Briefcase, Heart, ArrowRight, CheckCircle, Star, Award, Clock, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AreaOfExpertise() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const expertiseAreas = [
    {
      icon: Scale,
      title: "Corporate Law",
      description: "Strategic legal counsel for businesses of all sizes, from startups to Fortune 500 companies.",
      color: "from-blue-500 to-blue-600",
      features: ["M&A Transactions", "Corporate Governance", "Compliance", "Contract Negotiation"]
    },
    {
      icon: Heart,
      title: "Family Law",
      description: "Compassionate representation in divorce, custody, and family matters with proven results.",
      color: "from-pink-500 to-pink-600",
      features: ["Divorce & Separation", "Child Custody", "Property Division", "Mediation"]
    },
    {
      icon: Building2,
      title: "Real Estate Law",
      description: "Expert guidance through complex property transactions and real estate disputes.",
      color: "from-green-500 to-green-600",
      features: ["Property Transactions", "Commercial Leases", "Zoning Issues", "Title Disputes"]
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description: "Aggressive defense strategies to protect your rights and secure the best possible outcome.",
      color: "from-purple-500 to-purple-600",
      features: ["DUI Defense", "White Collar Crime", "Drug Offenses", "Appeals"]
    },
    {
      icon: Briefcase,
      title: "Business Litigation",
      description: "Skilled representation in commercial disputes and complex business litigation matters.",
      color: "from-orange-500 to-orange-600",
      features: ["Contract Disputes", "Partnership Issues", "Employment Law", "IP Litigation"]
    },
    {
      icon: FileText,
      title: "Estate Planning",
      description: "Comprehensive estate planning to protect your assets and secure your family's future.",
      color: "from-indigo-500 to-indigo-600",
      features: ["Wills & Trusts", "Tax Planning", "Asset Protection", "Probate"]
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      
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
            <Target className="w-4 h-4" />
            <span>Practice Areas</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-deep-navy mb-6">
            Areas of <span className="text-transparent bg-clip-text bg-gradient-to-r from-steel-blue to-cyan-500">Expertise</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
            Our experienced attorneys specialize in multiple practice areas, providing comprehensive legal solutions 
            tailored to your unique needs.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-white/20 group-hover:border-steel-blue/30 group-hover:-translate-y-2">
                  {/* Header with Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-display font-bold text-deep-navy group-hover:text-steel-blue transition-colors duration-300">
                      {area.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {area.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Arrow */}
                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <motion.div
                      className="text-steel-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 4 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-deep-navy via-steel-blue to-deep-navy rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 text-white/90 mb-8">
                <Scale className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Ready to Get Started?</span>
              </div>
              
              <h3 className="text-4xl lg:text-5xl font-display font-bold mb-6">
                Need Legal <span className="text-cyan-400">Assistance?</span>
              </h3>
              
              <p className="text-xl text-white/80 mb-12 max-w-6xl mx-auto leading-relaxed">
                Our team of experienced attorneys is ready to help you navigate any legal challenge 
                with confidence, expertise, and proven results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-deep-navy hover:bg-white/90 px-8 py-5 rounded-2xl font-semibold text-lg group shadow-2xl"
                >
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-xl px-8 py-5 rounded-2xl font-semibold text-lg group"
                >
                  View Our Team
                  <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
