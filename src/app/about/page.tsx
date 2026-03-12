"use client";

import { motion } from "framer-motion";
import { 
  Scale, 
  Shield, 
  Heart, 
  Target,
  Eye
} from "lucide-react";
import { ThemeAnimatedButton } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { david, justin } from "../../../public/index";

export default function AboutPage() {
  // Attorney profiles data
  const attorneys = [
    {
      name: "David Kochukov",
      title: "Director",
      subtitle: "Admitted Attorney of the High Court",
      expertiseAreas: [
        "Corporate Law",
        "Property Law",
        "Commercial Litigation",
        "Insolvency and Business Rescue",
        "Debt Collection",
        "Criminal Defense",
      ],
      education: "BA (Wits) LLB (Wits)",
      bio: "As an Admitted Attorney of the High Court, David's primary practice rests in Corporate and Commercial Law. His deepest pools of experience are in Liquidations, Business Rescues, Company Law, Construction Law, Restraint of Trade disputes, Arbitrations and Mediations, Debt Collection and General Civil Litigation. His passions in these sectors began during his studies at the University of the Witwatersrand, where he obtained his LLB degree. David believes that knowledge of the law is fundamental to any successful business. He actively imparts this knowledge onto his clients as he works diligently to secure their present interests so that they are better equipped for the future. Working in tandem with his clients, David leverages his experience to fight for the best outcome, ensuring that each attorney-client relationship with KB Incorporated is cemented in the long-term, and to the mutual benefit of each party.",
      image: david
    },
    {
      name: "Justin Blume",
      title: "Director", 
      subtitle: "Admitted Attorney of the High Court",
      expertiseAreas: [
        "Corporate Law",
        "Family Law",
        "Commercial Litigation",
        "Insolvency and Business Rescue",
        "Debt Collection",
      ],
      education: "LLB (Unisa)",
      bio: "Justin is an Admitted Attorney of the High Court, having started his legal journey as a paralegal in a renowned boutique law firm while in the process of completing his degree, and thereafter completing his articles. During this time, Justin developed his passion and focus in Corporate and Commercial Law, whilst remaining committed to garnering knowledge and skills in Family Law, Insolvency and Business Rescue, Dispute Resolution, and Debt Collection. Committed to providing his clients with the best possible service, Justin takes a collaborative approach to legal work by working alongside his clients to understand their objectives and support their growth in a practical and considered way, all the while considering and prioritising his clients’ long term needs.",
      image: justin
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
              className="mb-3 sm:mb-4"
            >
              <p className="text-[#548caf] text-sm sm:text-base md:text-lg font-medium uppercase tracking-wider pl-2">
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
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed pl-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Kochukov &amp; Blume Incorporated has established itself as a trusted South African law firm, recognised for delivering clear, considered legal advice with integrity and precision. We are committed to excellence in every matter we handle, combining technical expertise with a practical, client-focused approach. 
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200">
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
                Kochukov &amp; Blume Incorporated was founded with a clear purpose: to make high-quality legal services available and accessible.  From our beginnings as a boutique practice in Sandton, the firm has grown into a respected legal partner. 
                </p>
                <p>
                  We work closely with our clients to understand the context of their legal challenges, offering honest judgment, direct communication, and solutions that support informed decision-making and sustainable growth.
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
                    Our mission is to deliver exceptional legal representation grounded in integrity, expertise, and genuine partnership. We strive to be trusted advisers who protect our clients’ interests, support long-term success, and achieve practical, outcome-driven solutions.
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
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200">
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
              Meet our Co-Founders
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4"
               style={{ fontFamily: 'var(--font-body)' }}>
              Experienced attorneys dedicated to your success
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-stretch">
            {attorneys.map((attorney, index) => (
                <motion.div
                key={attorney.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                className="group flex"
              >
                <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative flex flex-col w-full">
                  
                  {/* Header */}
                  <div className="bg-[#1a385c] p-6 sm:p-8 relative overflow-hidden">
                    {/* Gemsbok Logo Background in Header */}
                    <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 opacity-10 pointer-events-none">
                      <Image
                        src="/images/hero_logo.png"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-xl sm:text-2xl font-light text-white mb-2 font-display"
                          style={{ fontFamily: 'var(--font-headline)' }}>
                        {attorney.name}
                      </h3>
                      <p className="text-sm sm:text-base text-[#548caf] font-medium"
                         style={{ fontFamily: 'var(--font-body)' }}>
                        {attorney.title}
                      </p>
                      <p className="text-xs sm:text-sm text-white/70 mt-1"
                         style={{ fontFamily: 'var(--font-body)' }}>
                        {attorney.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6 sm:p-8 flex-grow flex flex-col">
                    <div className="space-y-6 flex-grow">
                      {/* Experience */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2"
                            style={{ fontFamily: 'var(--font-body)' }}>
                          Areas of Expertise
                        </h4>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed"
                           style={{ fontFamily: 'var(--font-body)' }}>
                          {attorney.expertiseAreas.join(", ")}
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

                    {/* Photo Below - Rounded Bubble */}
                    <div className="flex justify-center pt-6 mt-6">
                      <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                        <div className="absolute inset-0 rounded-full overflow-hidden shadow-xl">
                          <Image
                            src={attorney.image}
                            alt={attorney.name}
                            fill
                            className="object-cover scale-110 object-center"
                          />
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
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
            
            <Link href="/contact" className="inline-block">
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
