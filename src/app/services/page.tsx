"use client";

import { motion } from "framer-motion";
import { 
  Scale, 
  Shield, 
  Heart, 
  Building2, 
  FileText,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { ThemeAnimatedButton } from "@/components/ui/button";
import Link from "next/link";

interface PracticeArea {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  process: string[];
}

export default function ServicesPage() {
  const practiceAreas: PracticeArea[] = [
    {
      title: "Corporate Law",
      description: "Strategic legal counsel for businesses navigating complex corporate matters, mergers, and regulatory compliance.",
      icon: Building2,
      features: [
        "Business Formation & Structuring",
        "Contract Drafting & Negotiation",
        "Mergers & Acquisitions",
        "Corporate Governance",
        "Regulatory Compliance",
        "Commercial Transactions"
      ],
      process: [
        "Initial consultation and needs assessment",
        "Strategic planning and structure development",
        "Documentation and legal framework",
        "Implementation and ongoing support"
      ]
    },
    {
      title: "Family Law",
      description: "Compassionate legal representation in divorce, custody, and family matters, protecting what matters most to you.",
      icon: Heart,
      features: [
        "Divorce & Separation",
        "Child Custody & Support",
        "Property Division",
        "Domestic Partnerships",
        "Adoption Services",
        "Prenuptial Agreements"
      ],
      process: [
        "Confidential consultation",
        "Case evaluation and strategy",
        "Mediation and negotiation",
        "Court representation when needed"
      ]
    },
    {
      title: "Real Estate Law",
      description: "Expert guidance through property transactions, commercial leases, and real estate disputes.",
      icon: Building2,
      features: [
        "Property Acquisitions & Sales",
        "Commercial Leasing",
        "Title Resolution",
        "Zoning & Land Use",
        "Development Projects",
        "Real Estate Litigation"
      ],
      process: [
        "Property analysis and due diligence",
        "Transaction structuring",
        "Document preparation and review",
        "Closing coordination"
      ]
    },
    {
      title: "Litigation",
      description: "Skilled representation in complex commercial disputes and business litigation matters.",
      icon: Scale,
      features: [
        "Commercial Disputes",
        "Contract Litigation",
        "Partnership Disputes",
        "Employment Law",
        "Intellectual Property",
        "Appeals & Arbitration"
      ],
      process: [
        "Case assessment and strategy",
        "Discovery and evidence gathering",
        "Motion practice and negotiation",
        "Trial representation"
      ]
    },
    {
      title: "Criminal Defense",
      description: "Aggressive defense strategies protecting your rights and securing the best possible outcome.",
      icon: Shield,
      features: [
        "White Collar Crimes",
        "Fraud Defense",
        "Regulatory Investigations",
        "DUI Defense",
        "Appeals Process",
        "Plea Negotiations"
      ],
      process: [
        "Immediate consultation",
        "Case investigation and analysis",
        "Defense strategy development",
        "Representation through resolution"
      ]
    },
    {
      title: "Estate Planning",
      description: "Comprehensive planning to protect your assets and secure your family's future for generations.",
      icon: FileText,
      features: [
        "Wills & Trusts",
        "Power of Attorney",
        "Estate Administration",
        "Tax Planning",
        "Asset Protection",
        "Probate Services"
      ],
      process: [
        "Estate assessment",
        "Strategy and document preparation",
        "Implementation and funding",
        "Ongoing review and updates"
      ]
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
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              We provide expert legal representation across multiple practice areas, delivering strategic counsel and proven results for businesses and individuals alike.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Grid */}
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
              Practice Areas
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4"
               style={{ fontFamily: 'var(--font-body)' }}>
              Tailored expertise across diverse legal disciplines
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {practiceAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-[#548caf]/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    
                    {/* Icon */}
                    <div className="mb-5 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-[#548caf]/10 flex items-center justify-center group-hover:bg-[#548caf] group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#548caf] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-light text-[#1a385c] mb-3 sm:mb-4 group-hover:text-[#548caf] transition-colors duration-300 font-display"
                        style={{ fontFamily: 'var(--font-headline)' }}>
                      {area.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5 sm:mb-6 flex-grow"
                       style={{ fontFamily: 'var(--font-body)' }}>
                      {area.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-5 sm:mb-6">
                      {area.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-1 h-1 rounded-full bg-[#548caf] mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600"
                                style={{ fontFamily: 'var(--font-body)' }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More */}
                    <div className="pt-4 border-t border-gray-100">
                      <span className="text-[#548caf] text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300"
                            style={{ fontFamily: 'var(--font-body)' }}>
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
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
              Our Approach
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4"
               style={{ fontFamily: 'var(--font-body)' }}>
              A methodical process designed to deliver exceptional results and peace of mind
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {[
              {
                number: "01",
                title: "Consultation",
                description: "We begin with a thorough understanding of your situation and objectives."
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
                  <span className="text-4xl sm:text-5xl font-light text-[#548caf]/20"
                        style={{ fontFamily: 'var(--font-headline)' }}>
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-light text-[#1a385c] mb-2 sm:mb-3 font-display"
                    style={{ fontFamily: 'var(--font-headline)' }}>
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed"
                   style={{ fontFamily: 'var(--font-body)' }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
                Why choose Kochukov & Blume?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8"
                 style={{ fontFamily: 'var(--font-body)' }}>
                Our commitment goes beyond legal representation. We invest in understanding your business, your challenges, and your goals to deliver counsel that truly serves your long-term interests.
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                {[
                  "Decades of combined experience across multiple jurisdictions",
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
                  className="whitespace-nowrap rounded-xl w-full sm:w-auto"
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
