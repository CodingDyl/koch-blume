"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Award, 
  Users, 
  BookOpen, 
  Heart, 
  Scale, 
  Shield, 
  CheckCircle,
  GraduationCap,
  Target,
  Eye,
  Handshake,
  ArrowRight
} from "lucide-react";
import { ThemeAnimatedButton } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  // Attorney profiles data
  const attorneys = [
    {
      name: "Alexander Kochukov",
      title: "Senior Partner",
      specialization: "Corporate Law & Business Litigation",
      experience: "6+ Years",
      education: "LLB (University of Cape Town), LLM (Harvard Law School)",
      credentials: [
        "Admitted Attorney of the High Court",
        "Certified Commercial Law Specialist",
        "International Arbitration Panel Member"
      ],
      bio: "Alexander brings extensive experience in complex corporate transactions and has successfully represented companies in high-stakes litigation."
    },
    {
      name: "Justin Blume",
      title: "Senior Partner", 
      specialization: "Family Law & Estate Planning",
      experience: "6+ Years",
      education: "LLB (University of the Witwatersrand)",
      credentials: [
        "Admitted Attorney of the High Court",
        "Certified Family Law Specialist",
        "Mediation Council Accredited"
      ],
      bio: "Justin is renowned for his compassionate approach to family law matters and has helped families navigate difficult transitions."
    }
  ];

  // Core values
  const coreValues = [
    {
      icon: Scale,
      title: "Integrity",
      description: "Maintaining the highest ethical standards in all our dealings"
    },
    {
      icon: Shield,
      title: "Excellence",
      description: "Delivering exceptional legal services with meticulous attention to detail"
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Understanding our clients' needs and providing empathetic counsel"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear communication and honest advice at every stage"
    }
  ];

  // Community initiatives
  const communityInitiatives = [
    {
      title: "Pro Bono Legal Clinic",
      description: "Monthly free legal consultations for underserved communities",
      icon: Heart
    },
    {
      title: "Legal Education Program",
      description: "Teaching legal literacy in schools and community centers",
      icon: BookOpen
    },
    {
      title: "Women's Rights Initiative",
      description: "Supporting women in legal matters and empowerment",
      icon: Users
    },
    {
      title: "Youth Legal Mentorship",
      description: "Mentoring aspiring young lawyers and law students",
      icon: GraduationCap
    }
  ];

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
              <p className="text-[#548caf] text-xs sm:text-sm font-medium uppercase tracking-wider">
                About Us
              </p>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-gray-900 leading-tight mb-6 sm:mb-8 font-display"
              style={{ fontFamily: 'var(--font-headline)' }}
            >
              Excellence in legal practice.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Founded in 2020, Kochukov & Blume has grown to become one of South Africa&apos;s most respected law firms, delivering exceptional legal services with integrity, expertise, and genuine care for our clients.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gray-900 mb-4 sm:mb-6 font-display"
                  style={{ fontFamily: 'var(--font-headline)' }}>
                Our story
              </h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-600 leading-relaxed"
                   style={{ fontFamily: 'var(--font-body)' }}>
                <p>
                  Founded in 2020, Kochukov & Blume began with a simple mission: to provide accessible, high-quality legal services to individuals and businesses across South Africa. What started as a small practice in Sandton has grown into a firm known for its commitment to excellence and client-centered service.
                </p>
                <p>
                  Today, with over 20+ years of combined experience, we continue to uphold the highest standards of legal practice while maintaining our dedication to the communities we serve. Our approach combines deep legal expertise with genuine understanding of our clients&apos; needs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#1a385c] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 text-white"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-light mb-2 font-display"
                      style={{ fontFamily: 'var(--font-headline)' }}>
                    Our Mission
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed"
                     style={{ fontFamily: 'var(--font-body)' }}>
                    To deliver exceptional legal representation built on integrity, expertise, and genuine partnership with our clients.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gray-900 mb-3 sm:mb-4 font-display"
                style={{ fontFamily: 'var(--font-headline)' }}>
              Our values
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4"
               style={{ fontFamily: 'var(--font-body)' }}>
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-[#548caf]/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="mb-5 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-[#548caf]/10 flex items-center justify-center group-hover:bg-[#548caf] group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#548caf] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-light text-[#1a385c] mb-2 sm:mb-3 font-display"
                        style={{ fontFamily: 'var(--font-headline)' }}>
                      {value.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed"
                       style={{ fontFamily: 'var(--font-body)' }}>
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gray-900 mb-3 sm:mb-4 font-display"
                style={{ fontFamily: 'var(--font-headline)' }}>
              Meet our team
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4"
               style={{ fontFamily: 'var(--font-body)' }}>
              Experienced attorneys dedicated to your success
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {attorneys.map((attorney, index) => (
              <motion.div
                key={attorney.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Header */}
                  <div className="bg-[#1a385c] p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-light text-white mb-2 font-display"
                        style={{ fontFamily: 'var(--font-headline)' }}>
                      {attorney.name}
                    </h3>
                    <p className="text-sm sm:text-base text-[#548caf] font-medium"
                       style={{ fontFamily: 'var(--font-body)' }}>
                      {attorney.title}
                    </p>
                  </div>
                  
                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Specialization */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2"
                          style={{ fontFamily: 'var(--font-body)' }}>
                        Specialization
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed"
                         style={{ fontFamily: 'var(--font-body)' }}>
                        {attorney.specialization}
                      </p>
                    </div>

                    {/* Experience */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2"
                          style={{ fontFamily: 'var(--font-body)' }}>
                        Experience
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600"
                         style={{ fontFamily: 'var(--font-body)' }}>
                        {attorney.experience}
                      </p>
                    </div>

                    {/* Education */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2"
                          style={{ fontFamily: 'var(--font-body)' }}>
                        Education
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed"
                         style={{ fontFamily: 'var(--font-body)' }}>
                        {attorney.education}
                      </p>
                    </div>

                    {/* Credentials */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3"
                          style={{ fontFamily: 'var(--font-body)' }}>
                        Credentials
                      </h4>
                      <div className="space-y-2">
                        {attorney.credentials.map((credential, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-[#548caf] mt-0.5 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-gray-600 leading-relaxed"
                                  style={{ fontFamily: 'var(--font-body)' }}>
                              {credential}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bio */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2"
                          style={{ fontFamily: 'var(--font-body)' }}>
                        About
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed"
                         style={{ fontFamily: 'var(--font-body)' }}>
                        {attorney.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gray-900 mb-3 sm:mb-4 font-display"
                style={{ fontFamily: 'var(--font-headline)' }}>
              Community involvement
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4"
               style={{ fontFamily: 'var(--font-body)' }}>
              Giving back through pro bono work and education
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {communityInitiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <motion.div
                  key={initiative.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-[#548caf]/30 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="mb-5 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-[#548caf]/10 flex items-center justify-center group-hover:bg-[#548caf] group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#548caf] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-light text-[#1a385c] mb-2 sm:mb-3 font-display"
                        style={{ fontFamily: 'var(--font-headline)' }}>
                      {initiative.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed"
                       style={{ fontFamily: 'var(--font-body)' }}>
                      {initiative.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gray-900 mb-4 sm:mb-6 font-display"
                style={{ fontFamily: 'var(--font-headline)' }}>
              Ready to work with us?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed"
               style={{ fontFamily: 'var(--font-body)' }}>
              Contact us today to discuss how we can help with your legal needs
            </p>
            
            <Link href="/contact">
              <ThemeAnimatedButton 
                size="lg"
                variant="primary"
                className="whitespace-nowrap rounded-xl"
              >
                Get in touch
              </ThemeAnimatedButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
