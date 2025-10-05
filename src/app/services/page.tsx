"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { 
  Scale, 
  Shield, 
  Heart, 
  Building, 
  Gavel, 
  FileText, 
  Users, 
  Clock, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  Target,
  Zap,
  BookOpen,
  Phone,
  Mail,
  Calendar,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  ExternalLink,
  Download,
  Play,
  Pause,
  Volume2,
  Sparkles,
  Crown,
  Globe,
  Briefcase,
  Handshake,
  Eye,
  Lock,
  Unlock,
  AlertCircle,
  Info,
  HelpCircle,
  Search,
  Filter,
  SortAsc,
  SortDesc
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const [currentQuizStep, setCurrentQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [selectedService, setSelectedService] = useState(null);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Practice areas data
  const practiceAreas = [
    {
      title: "Corporate Law",
      description: "Strategic legal counsel for businesses of all sizes, from startups to Fortune 500 companies.",
      icon: Building,
      color: "from-blue-500 to-cyan-500",
      cases: "200+ Cases",
      successRate: "95%",
      features: ["Business Formation", "Contract Negotiation", "Mergers & Acquisitions", "Compliance"]
    },
    {
      title: "Family Law",
      description: "Compassionate representation in divorce, custody, and family matters with proven results.",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      cases: "150+ Cases",
      successRate: "98%",
      features: ["Divorce", "Child Custody", "Property Division", "Adoption"]
    },
    {
      title: "Real Estate Law",
      description: "Expert guidance through complex property transactions and real estate disputes.",
      icon: Building,
      color: "from-green-500 to-emerald-500",
      cases: "300+ Cases",
      successRate: "97%",
      features: ["Property Transactions", "Title Issues", "Zoning Disputes", "Commercial Leases"]
    },
    {
      title: "Criminal Defense",
      description: "Aggressive defense strategies to protect your rights and secure the best possible outcome.",
      icon: Shield,
      color: "from-purple-500 to-violet-500",
      cases: "180+ Cases",
      successRate: "92%",
      features: ["DUI Defense", "White Collar Crimes", "Drug Offenses", "Traffic Violations"]
    },
    {
      title: "Business Litigation",
      description: "Skilled representation in commercial disputes and complex business litigation matters.",
      icon: Gavel,
      color: "from-orange-500 to-red-500",
      cases: "120+ Cases",
      successRate: "94%",
      features: ["Contract Disputes", "Partnership Issues", "Employment Law", "Intellectual Property"]
    },
    {
      title: "Estate Planning",
      description: "Comprehensive estate planning to protect your assets and secure your family's future.",
      icon: FileText,
      color: "from-indigo-500 to-blue-500",
      cases: "250+ Cases",
      successRate: "99%",
      features: ["Wills & Trusts", "Power of Attorney", "Estate Administration", "Tax Planning"]
    }
  ];

  // Legal case assessment quiz
  const quizQuestions = [
    {
      id: 1,
      question: "What type of legal matter are you facing?",
      options: [
        { value: "business", label: "Business/Corporate", icon: Building },
        { value: "family", label: "Family Law", icon: Heart },
        { value: "criminal", label: "Criminal Defense", icon: Shield },
        { value: "real-estate", label: "Real Estate", icon: Building },
        { value: "litigation", label: "Business Litigation", icon: Gavel },
        { value: "estate", label: "Estate Planning", icon: FileText }
      ]
    },
    {
      id: 2,
      question: "What is the urgency of your legal matter?",
      options: [
        { value: "immediate", label: "Immediate (Within 24 hours)", icon: AlertCircle },
        { value: "urgent", label: "Urgent (Within a week)", icon: Clock },
        { value: "moderate", label: "Moderate (Within a month)", icon: Calendar },
        { value: "planning", label: "Planning ahead", icon: Target }
      ]
    },
    {
      id: 3,
      question: "What is your preferred communication method?",
      options: [
        { value: "phone", label: "Phone calls", icon: Phone },
        { value: "email", label: "Email", icon: Mail },
        { value: "video", label: "Video calls", icon: Play },
        { value: "in-person", label: "In-person meetings", icon: Users }
      ]
    }
  ];

  // Detailed service descriptions
  const serviceDetails = [
    {
      title: "Corporate Law Services",
      category: "Business",
      description: "Comprehensive legal support for businesses at every stage of growth.",
      icon: Building,
      color: "from-blue-500 to-cyan-500",
      pricing: "From R2,500/hour",
      duration: "1-6 months",
      features: [
        "Business formation and structuring",
        "Contract drafting and negotiation",
        "Mergers and acquisitions",
        "Corporate governance",
        "Regulatory compliance",
        "Intellectual property protection"
      ],
      process: [
        "Initial consultation and case assessment",
        "Strategy development and planning",
        "Document preparation and filing",
        "Negotiation and representation",
        "Ongoing support and monitoring"
      ],
      benefits: [
        "Reduced legal risks",
        "Improved business efficiency",
        "Cost savings through proper structuring",
        "Enhanced investor confidence"
      ]
    },
    {
      title: "Family Law Services",
      category: "Family",
      description: "Compassionate legal representation for all family matters.",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      pricing: "From R1,800/hour",
      duration: "3-12 months",
      features: [
        "Divorce and separation",
        "Child custody and support",
        "Property division",
        "Domestic violence protection",
        "Adoption proceedings",
        "Prenuptial agreements"
      ],
      process: [
        "Confidential consultation",
        "Case evaluation and strategy",
        "Document preparation",
        "Court representation",
        "Settlement negotiation"
      ],
      benefits: [
        "Protection of your rights",
        "Minimized emotional stress",
        "Fair asset distribution",
        "Child welfare prioritization"
      ]
    }
  ];

  // Case studies
  const caseStudies = [
    {
      title: "Multi-Million Rand Corporate Merger",
      category: "Corporate Law",
      client: "Tech Startup",
      challenge: "Complex merger with international company involving multiple jurisdictions",
      solution: "Structured deal to minimize tax implications and regulatory hurdles",
      result: "Successful R50M merger completed in 4 months",
      outcome: "Client retained 60% ownership while gaining international market access",
      icon: Building,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "High-Profile Divorce Settlement",
      category: "Family Law",
      client: "Business Executive",
      challenge: "Complex asset division involving multiple properties and business interests",
      solution: "Negotiated fair settlement protecting client's business interests",
      result: "Settlement reached without court proceedings",
      outcome: "Client retained business control while ensuring fair property division",
      icon: Heart,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Commercial Property Dispute Resolution",
      category: "Real Estate Law",
      client: "Property Developer",
      challenge: "Zoning dispute threatening R20M development project",
      solution: "Navigated complex zoning regulations and secured necessary approvals",
      result: "Project approved and construction commenced",
      outcome: "Client saved R5M in potential delays and penalties",
      icon: Building,
      color: "from-green-500 to-emerald-500"
    }
  ];

  // Fee structure
  const feeStructure = [
    {
      type: "Hourly Rates",
      description: "Standard billing for ongoing legal work",
      rates: [
        { service: "Senior Partner", rate: "R2,500/hour" },
        { service: "Associate Attorney", rate: "R1,800/hour" },
        { service: "Paralegal", rate: "R800/hour" }
      ],
      icon: Clock,
      color: "from-blue-500 to-cyan-500"
    },
    {
      type: "Fixed Fees",
      description: "Predictable pricing for specific services",
      rates: [
        { service: "Business Formation", rate: "R15,000" },
        { service: "Will & Testament", rate: "R3,500" },
        { service: "Contract Review", rate: "R2,500" }
      ],
      icon: DollarSign,
      color: "from-green-500 to-emerald-500"
    },
    {
      type: "Contingency",
      description: "No win, no fee arrangements",
      rates: [
        { service: "Personal Injury", rate: "30% of settlement" },
        { service: "Employment Disputes", rate: "25% of award" },
        { service: "Debt Collection", rate: "35% of recovered amount" }
      ],
      icon: TrendingUp,
      color: "from-purple-500 to-violet-500"
    }
  ];

  const handleQuizAnswer = (questionId, answer) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
    if (currentQuizStep < quizQuestions.length - 1) {
      setCurrentQuizStep(currentQuizStep + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuizStep(0);
    setQuizAnswers({});
    setIsQuizComplete(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50" ref={containerRef}>
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
              <Scale className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Legal Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              Professional <span className="text-steel-blue">Legal Services</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
              Comprehensive legal solutions tailored to your unique needs. From corporate law to family matters, 
              we provide expert representation with proven results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-deep-navy hover:bg-white/90 px-8 py-4 rounded-xl font-semibold text-lg hover:cursor-pointer">
                Get Legal Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-primary hover:bg-white/10 backdrop-blur-xl px-8 py-4 rounded-xl font-semibold text-lg hover:cursor-pointer">
                View Our Fees
                <DollarSign className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl xl:max-w-6xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-steel-blue/10 text-steel-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Scale className="w-4 h-4" />
              <span>Practice Areas</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-deep-navy mb-6">
              Our <span className="text-steel-blue">Legal Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
              We specialize in multiple practice areas, providing comprehensive legal solutions 
              tailored to your specific needs and circumstances.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedService(area)}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-steel-blue/30 group-hover:-translate-y-2 h-full">
                    <div className="p-8">
                      <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-deep-navy group-hover:text-steel-blue transition-colors mb-4">
                        {area.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {area.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Cases Handled</span>
                          <span className="font-semibold text-steel-blue">{area.cases}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Success Rate</span>
                          <span className="font-semibold text-green-600">{area.successRate}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {area.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legal Case Assessment Quiz */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-steel-blue/10 text-steel-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              <span>Assessment</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-deep-navy mb-6">
              Legal Case <span className="text-steel-blue">Assessment Quiz</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
              Get personalized legal guidance by answering a few quick questions about your situation.
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            {!isQuizComplete ? (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-deep-navy">
                    Question {currentQuizStep + 1} of {quizQuestions.length}
                  </h3>
                  <div className="flex space-x-2">
                    {quizQuestions.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                          index <= currentQuizStep ? 'bg-steel-blue' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-deep-navy mb-6">
                    {quizQuestions[currentQuizStep].question}
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {quizQuestions[currentQuizStep].options.map((option, index) => {
                      const Icon = option.icon;
                      return (
                        <motion.button
                          key={option.value}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleQuizAnswer(quizQuestions[currentQuizStep].id, option.value)}
                          className="p-6 bg-gray-50 hover:bg-steel-blue/10 rounded-xl border border-gray-200 hover:border-steel-blue/30 transition-all duration-300 text-left group hover:cursor-pointer"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-steel-blue/10 rounded-lg flex items-center justify-center group-hover:bg-steel-blue group-hover:text-white transition-colors duration-300">
                              <Icon className="w-6 h-6" />
                            </div>
                            <span className="font-medium text-gray-900 group-hover:text-steel-blue transition-colors">
                              {option.label}
                            </span>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-deep-navy mb-4">Assessment Complete!</h3>
                <p className="text-gray-600 mb-8">
                  Based on your answers, we recommend scheduling a consultation to discuss your legal needs in detail.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-steel-blue hover:bg-steel-blue/90 text-white px-8 py-4 rounded-xl font-semibold">
                    Schedule Consultation
                    <Calendar className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" onClick={resetQuiz} className="border-steel-blue text-steel-blue hover:bg-steel-blue/10 px-8 py-4 rounded-xl font-semibold">
                    Retake Assessment
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Detailed Service Descriptions */}
      <section className="py-20 bg-white">
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
              <span>Service Details</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-deep-navy mb-6">
              Detailed <span className="text-steel-blue">Service Descriptions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
              Comprehensive legal services with transparent pricing and clear processes.
            </p>
          </motion.div>

          <div className="space-y-12">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
                >
                  <div className="p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-deep-navy">{service.title}</h3>
                            <p className="text-steel-blue font-medium">{service.category}</p>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {service.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-gray-50 rounded-lg p-4">
                            <div className="text-sm text-gray-500 mb-1">Pricing</div>
                            <div className="font-semibold text-steel-blue">{service.pricing}</div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <div className="text-sm text-gray-500 mb-1">Duration</div>
                            <div className="font-semibold text-steel-blue">{service.duration}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-deep-navy mb-3">What We Include</h4>
                          <div className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-deep-navy mb-3">Our Process</h4>
                          <div className="space-y-2">
                            {service.process.map((step, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-6 h-6 bg-steel-blue/10 rounded-full flex items-center justify-center">
                                  <span className="text-xs font-semibold text-steel-blue">{idx + 1}</span>
                                </div>
                                <span className="text-gray-600">{step}</span>
                              </div>
                            ))}
                          </div>
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

      {/* Case Study Examples */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl xl:max-w-6xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-steel-blue/10 text-steel-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Case Studies</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-deep-navy mb-6">
              Real <span className="text-steel-blue">Case Studies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
              See how we've helped clients achieve successful outcomes in complex legal matters.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                >
                  <div className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${study.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-steel-blue font-medium">{study.category}</div>
                        <div className="text-xs text-gray-500">{study.client}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-deep-navy mb-4 group-hover:text-steel-blue transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Challenge</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Solution</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Result</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{study.result}</p>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-green-800 mb-2">Outcome</h4>
                        <p className="text-sm text-green-700 leading-relaxed">{study.outcome}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fee Structure Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl xl:max-w-6xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-steel-blue/10 text-steel-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4" />
              <span>Pricing</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-deep-navy mb-6">
              Transparent <span className="text-steel-blue">Fee Structure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
              Clear, upfront pricing with no hidden fees. We believe in transparent billing practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {feeStructure.map((fee, index) => {
              const Icon = fee.icon;
              return (
                <motion.div
                  key={fee.type}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 p-8"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${fee.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-deep-navy mb-3">{fee.type}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{fee.description}</p>
                  
                  <div className="space-y-3">
                    {fee.rates.map((rate, idx) => (
                      <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-gray-600">{rate.service}</span>
                        <span className="font-semibold text-steel-blue">{rate.rate}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-deep-navy via-steel-blue to-deep-navy">
        <div className="max-w-7xl xl:max-w-6xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              Ready to Get <span className="text-cyan-400">Started?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Contact us today for a consultation and discover how our experienced team can help you achieve your legal goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-deep-navy hover:bg-white/90 px-8 py-5 rounded-2xl font-semibold text-lg group hover:cursor-pointer">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-blue-500 hover:bg-white/10 backdrop-blur-xl px-8 py-5 rounded-2xl font-semibold text-lg group hover:cursor-pointer">
                Download Fee Guide
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
