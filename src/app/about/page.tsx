"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { 
  Search, 
  Award, 
  Users, 
  BookOpen, 
  Heart, 
  Scale, 
  Shield, 
  Gavel,
  ArrowRight,
  ExternalLink,
  Download,
  Star,
  CheckCircle,
  Trophy,
  Medal,
  FileText as Certificate,
  FileText,
  Building,
  GraduationCap,
  Target,
  Eye,
  Handshake,
  Sparkles,
  Zap,
  Crown,
  Globe,
  TrendingUp,
  Clock,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  Play,
  Pause,
  Volume2
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface LegalResource {
  title: string;
  category: string;
  description: string;
  downloads: number;
  lastUpdated: string;
  icon: React.ComponentType<{ className?: string }>;
  files?: string[];
  color: string;
}

export default function AboutPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedResource, setSelectedResource] = useState<LegalResource | null>(null);
  const [activeTab, setActiveTab] = useState("attorneys");
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Attorney profiles data
  const attorneys = [
    {
      name: "Alexander Kochukov",
      title: "Senior Partner",
      specialization: "Corporate Law & Business Litigation",
      experience: "6+ Years",
      education: "LLB (University of Cape Town), LLM (Harvard Law School)",
      credentials: ["Admitted Attorney of the High Court", "Certified Commercial Law Specialist", "International Arbitration Panel Member"],
      photo: "/images/attorney1.jpg",
      bio: "Alexander brings extensive experience in complex corporate transactions and has successfully represented companies in high-stakes litigation."
    },
    {
      name: "Justin Blume",
      title: "Senior Partner", 
      specialization: "Family Law & Estate Planning",
      experience: "6+ Years",
      education: "LLB (University of the Witwatersrand)",
      credentials: ["Admitted Attorney of the High Court", "Certified Family Law Specialist", "Mediation Council Accredited"],
      photo: "/images/attorney2.jpg",
      bio: "Justin is renowned for his compassionate approach to family law matters and has helped families navigate difficult transitions."
    }
  ];

  // Legal resources data
  const legalResources = [
    {
      title: "Contract Templates",
      category: "Business",
      description: "Comprehensive collection of business contract templates",
      downloads: 1250,
      lastUpdated: "2024-01-15",
      icon: FileText,
      files: ["Employment Contract", "Service Agreement", "NDA Template", "Partnership Agreement"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Family Law Guides",
      category: "Family",
      description: "Step-by-step guides for family law matters",
      downloads: 890,
      lastUpdated: "2024-01-10",
      icon: Heart,
      files: ["Divorce Process", "Child Custody", "Property Division", "Maintenance Guidelines"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Property Law Resources",
      category: "Real Estate",
      description: "Essential documents for property transactions",
      downloads: 2100,
      lastUpdated: "2024-01-20",
      icon: Building,
      files: ["Purchase Agreement", "Lease Template", "Property Transfer", "Title Deed Guide"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Criminal Defense Handbook",
      category: "Criminal",
      description: "Your rights and legal procedures guide",
      downloads: 650,
      lastUpdated: "2024-01-05",
      icon: Shield,
      files: ["Your Rights", "Arrest Procedures", "Bail Application", "Court Process"],
      color: "from-purple-500 to-violet-500"
    }
  ];

  // Community involvement
  const communityInitiatives = [
    {
      title: "Pro Bono Legal Clinic",
      description: "Monthly free legal consultations for underserved communities",
      icon: Heart,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Legal Education Program",
      description: "Teaching legal literacy in schools and community centers",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Women's Rights Initiative",
      description: "Supporting women in legal matters and empowerment",
      icon: Users,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Youth Legal Mentorship",
      description: "Mentoring aspiring young lawyers and law students",
      icon: GraduationCap,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const filteredResources = legalResources.filter(resource =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-deep-navy via-steel-blue to-deep-navy">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl xl:max-w-6xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 text-white/90 mb-8">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">About Us</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              About <span className="text-steel-blue">Kochukov & Blume</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/80 max-w-6xl mx-auto leading-relaxed mb-12">
              A sophisticated, professional law firm committed to delivering exceptional legal services with integrity, expertise, and compassion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-deep-navy hover:bg-white/90 px-8 py-4 rounded-xl font-semibold text-lg hover:cursor-pointer">
                Meet Our Team
                <Users className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-primary hover:bg-white/10 backdrop-blur-xl px-8 py-4 rounded-xl font-semibold text-lg hover:cursor-pointer">
                Our Values
                <Heart className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Firm History & Mission - Modern Cards */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl xl:max-w-6xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center space-x-2 bg-steel-blue/10 text-steel-blue px-4 py-2 rounded-full text-sm font-medium"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Our Story</span>
                </motion.div>
                
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-deep-navy leading-tight">
                  Excellence in <span className="text-steel-blue">Legal Practice</span>
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Founded in 2020, Kochukov & Blume has grown from a small practice in Sandton 
                    to one of South Africa&apos;s most respected law firms. Our journey began with a simple mission: 
                    to provide accessible, high-quality legal services to individuals and businesses across the country.
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Today, with over 20+ years of combined experience, we continue to uphold the highest standards 
                    of legal excellence while maintaining our commitment to client-centered service and community involvement.
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-steel-blue to-cyan-500 rounded-2xl p-8 text-white"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Our Mission</h3>
                    <p className="text-white/80">To deliver justice through exceptional legal representation</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-display font-bold text-deep-navy mb-8">Our Values</h3>
                <div className="space-y-6">
                  {[
                    { icon: Scale, text: "Integrity in all our dealings", color: "from-blue-500 to-cyan-500" },
                    { icon: Shield, text: "Protecting our clients' interests", color: "from-green-500 to-emerald-500" },
                    { icon: Heart, text: "Compassionate legal counsel", color: "from-pink-500 to-rose-500" },
                    { icon: Eye, text: "Transparency and honesty", color: "from-purple-500 to-violet-500" }
                  ].map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium text-lg">{value.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Attorney Profiles - Premium Cards */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl xl:max-w-6xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 bg-steel-blue/10 text-steel-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Our Team</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-deep-navy mb-6">
              Meet Our <span className="text-steel-blue">Attorneys</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
              Our experienced legal team brings decades of combined experience and a commitment to excellence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {attorneys.map((attorney, index) => (
              <motion.div
                key={attorney.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20 hover:shadow-3xl transition-all duration-500">
                  {/* Header with Gradient */}
                  <div className="relative h-48 bg-gradient-to-br from-steel-blue via-deep-navy to-steel-blue overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-display font-bold">{attorney.name}</h3>
                      <p className="text-steel-blue font-medium">{attorney.title}</p>
                    </div>
                    <div className="absolute top-6 right-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center">
                        <Star className="w-8 h-8 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-10 space-y-8">
                    {/* Specialization */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-deep-navy">Specialization</h4>
                      <p className="text-gray-600 leading-relaxed">{attorney.specialization}</p>
                    </div>

                    {/* Education */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-deep-navy">Education</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{attorney.education}</p>
                    </div>

                    {/* Credentials */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-deep-navy">Credentials</h4>
                      <div className="space-y-3">
                        {attorney.credentials.map((credential, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600 text-sm leading-relaxed">{credential}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-deep-navy">About</h4>
                      <p className="text-gray-600 leading-relaxed">{attorney.bio}</p>
                    </div>

                    {/* CTA */}
                    <Button className="w-full bg-gradient-to-r from-steel-blue to-cyan-500 hover:from-steel-blue/90 hover:to-cyan-500/90 text-white py-4 rounded-xl font-medium group">
                      Schedule Consultation
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Resource Library - Modern Search */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl xl:max-w-6xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-steel-blue/10 text-steel-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Resources</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-deep-navy mb-6">
              Legal <span className="text-steel-blue">Resource Library</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-6xl mx-auto mb-12 leading-relaxed">
              Access our comprehensive collection of legal resources, templates, and guides.
            </p>
            
            {/* Modern Search Bar */}
            <div className="max-w-6xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search legal resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-steel-blue focus:border-steel-blue shadow-lg text-lg text-gray-900 placeholder-gray-500"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-8 h-8 bg-steel-blue rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer h-full"
                  onClick={() => setSelectedResource(resource)}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-steel-blue/30 group-hover:-translate-y-2 h-full flex flex-col">
                    {/* Header with Icon */}
                    <div className="p-6 pb-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-bold text-deep-navy group-hover:text-steel-blue transition-colors mb-3 line-clamp-2">
                        {resource.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                        {resource.description}
                      </p>
                    </div>
                    
                    {/* Stats */}
                    <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span className="flex items-center space-x-1">
                          <Download className="w-3 h-3" />
                          <span>{resource.downloads.toLocaleString('en-US')} downloads</span>
                        </span>
                        <span className="text-gray-400">{resource.lastUpdated}</span>
                      </div>
                      
                      {/* Category and Action */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-steel-blue/10 text-steel-blue px-3 py-1.5 rounded-full font-medium">
                          {resource.category}
                        </span>
                        <div className="flex items-center space-x-1 text-steel-blue group-hover:text-steel-blue/80">
                          <span className="text-xs font-medium">View</span>
                          <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Involvement - Impact Cards */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl xl:max-w-6xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 bg-steel-blue/10 text-steel-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>Community</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-deep-navy mb-6">
              Community <span className="text-steel-blue">Involvement</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
              We believe in giving back to our community and making a positive impact through pro bono work and education.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
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
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 group-hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-r ${initiative.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-deep-navy group-hover:text-steel-blue transition-colors">{initiative.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{initiative.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-32 bg-gradient-to-br from-deep-navy via-steel-blue to-deep-navy relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl xl:max-w-6xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 text-white/90 mb-8">
              <Crown className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Ready to Get Started?</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              Ready to Work <span className="text-cyan-400">With Us?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/80 mb-16 max-w-6xl mx-auto leading-relaxed">
              Contact us today for a consultation and discover how our experienced team can help you achieve your legal goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-deep-navy hover:bg-white/90 px-8 py-5 rounded-2xl font-semibold text-lg group hover:cursor-pointer">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-steel-blue hover:bg-white/10 backdrop-blur-xl px-8 py-5 rounded-2xl font-semibold text-lg group hover:cursor-pointer">
                Download Resources
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}