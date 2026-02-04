"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface AreaOfExpertiseProps {
  title?: string;
  subtitle?: string;
  titleSize?: string;
  showCTA?: boolean;
}

export default function AreaOfExpertise({ 
  title = "Areas of Expertise",
  subtitle = "Practical and comprehensive legal solutions tailored to your unique needs",
  titleSize = "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
  showCTA = true
}: AreaOfExpertiseProps = {}) {
  const expertiseAreas = [
    {
      icon: "/icons/corporate.png",
      title: "Corporate Law",
      description: "Strategic legal counsel for businesses of all sizes, from startups to Fortune 500 companies.",
      features: ["M&A Transactions", "Corporate Governance", "Compliance", "Contract Negotiation"]
    },
    {
      icon: "/icons/family.png",
      title: "Family Law",
      description: "Compassionate representation in divorce, custody, and family matters with proven results.",
      features: ["Divorce & Separation", "Child Custody", "Property Division", "Mediation"]
    },
    {
      icon: "/icons/construction.png",
      title: "Real Estate Law",
      description: "Expert guidance through complex property transactions and real estate disputes.",
      features: ["Property Transactions", "Commercial Leases", "Zoning Issues", "Title Disputes"]
    },
    {
      icon: "/icons/criminal.png",
      title: "Criminal Defense",
      description: "Aggressive defense strategies to protect your rights and secure the best possible outcome.",
      features: ["DUI Defense", "White Collar Crime", "Drug Offenses", "Appeals"]
    },
    {
      icon: "/icons/commercial.png",
      title: "Business Litigation",
      description: "Skilled representation in commercial disputes and complex business litigation matters.",
      features: ["Contract Disputes", "Partnership Issues", "Employment Law", "IP Litigation"]
    },
    {
      icon: "/icons/estate.png",
      title: "Estate Planning",
      description: "Comprehensive estate planning to protect your assets and secure your family's future.",
      features: ["Wills & Trusts", "Tax Planning", "Asset Protection", "Probate"]
    }
  ];

  return (
    <section className="pt-12 sm:pt-16 lg:pt-20 pb-20 md:pb-28 lg:pb-32 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Minimal & Clean */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-steel-blue text-sm font-semibold uppercase tracking-wider mb-4">
            Practice Areas
          </p>
          
          <h2 className={`${titleSize} font-display font-semibold text-deep-navy mb-6 tracking-tight`}>
            {title}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-8xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Expertise Grid - Clean Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {expertiseAreas.map((area, index) => {
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href="/services" className="block h-full">
                  <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-steel-blue/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    {/* Icon - Minimal Style */}
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 p-2">
                        <div className="relative w-full h-full">
                          <Image
                            src={area.icon}
                            alt={area.title}
                            fill
                            className="object-contain transition-all duration-300"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-semibold text-deep-navy mb-3 group-hover:text-steel-blue transition-colors duration-300">
                      {area.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed flex-grow">
                      {area.description}
                    </p>

                    {/* Features - Simplified List */}
                    <div className="space-y-2 pb-6 border-b border-gray-100">
                      {area.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-1 h-1 rounded-full bg-steel-blue mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <div className="flex items-center justify-between pt-4 text-steel-blue text-sm font-medium">
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        Learn more
                      </span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section - Minimal & Professional */}
        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-deep-navy rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center opacity-5"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white mb-4 md:mb-6">
                  Need Legal Assistance?
                </h3>
                
                <p className="text-base md:text-lg lg:text-xl text-white/80 mb-8 md:mb-10 max-w-6xl mx-auto leading-relaxed">
                  Our experienced team is ready to help you navigate your legal challenges with confidence and expertise.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" >
                  <Link href="/contact">
                    <Button 
                      size="lg" 
                      className="bg-white text-deep-navy  hover:bg-white/10 hover:border-2 hover:border-white/50 hover:text-white hover:cursor-pointer px-6 md:px-8 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg group shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
                    >
                      Schedule Consultation
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  
                  <Link href="/about">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="hidden md:flex border-2 border-white/30 text-deep-navy hover:bg-white/10 hover:border-white/50 hover:cursor-pointer px-6 md:px-8 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
                    >
                      View Our Team
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
