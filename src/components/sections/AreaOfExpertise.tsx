"use client";

import { motion } from "framer-motion";
import { Scale, Shield, Building2, Users, FileText, Gavel, Briefcase, Heart } from "lucide-react";

export default function AreaOfExpertise() {
  const expertiseAreas = [
    {
      icon: Scale,
      title: "Corporate Law",
      description: "Strategic legal counsel for businesses of all sizes, from startups to Fortune 500 companies.",
      cases: "200+ Cases",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Family Law",
      description: "Compassionate representation in divorce, custody, and family matters with proven results.",
      cases: "150+ Cases",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Building2,
      title: "Real Estate Law",
      description: "Expert guidance through complex property transactions and real estate disputes.",
      cases: "300+ Cases",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description: "Aggressive defense strategies to protect your rights and secure the best possible outcome.",
      cases: "180+ Cases",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Briefcase,
      title: "Business Litigation",
      description: "Skilled representation in commercial disputes and complex business litigation matters.",
      cases: "120+ Cases",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: FileText,
      title: "Estate Planning",
      description: "Comprehensive estate planning to protect your assets and secure your family's future.",
      cases: "250+ Cases",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display text-white mb-6">
            Areas of <span className="text-deep-navy">Expertise</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-6xl mx-auto leading-relaxed px-4">
            Our experienced attorneys specialize in multiple practice areas, providing comprehensive legal solutions tailored to your unique needs.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => {
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
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 group-hover:border-gray-200">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-display text-deep-navy mb-4 group-hover:text-steel-blue transition-colors duration-300">
                    {area.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                    {area.description}
                  </p>

                  {/* Case Count */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-steel-blue bg-light-gray px-3 py-1 rounded-full">
                      {area.cases}
                    </span>
                    <motion.div
                      className="text-steel-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 4 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
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
          className="text-center mt-16"
        >
            <div className="bg-foreground rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-display mb-4">
              Need Legal Assistance?
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 max-w-6xl mx-auto leading-relaxed px-4">
              Our team of experienced attorneys is ready to help you navigate any legal challenge with confidence and expertise.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Schedule Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
