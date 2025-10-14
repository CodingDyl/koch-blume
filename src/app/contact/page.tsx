"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock,
  Calendar,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  Star,
  Award,
  Shield,
  Scale,
  Building,
  Navigation,
  ExternalLink,
  Download,
  FileText,
  Users,
  Globe,
  Heart,
  Gavel,
  Briefcase,
  Target,
  Zap,
  Sparkles,
  Crown,
  Eye,
  Lock,
  Unlock,
  Info,
  HelpCircle,
  Search,
  Filter,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Check,
  X,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    urgency: 'moderate'
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Contact information
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+27 11 123 4567",
      href: "tel:+27111234567",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@kochukovblume.co.za",
      href: "mailto:info@kochukovblume.co.za",
      description: "Send us a detailed message"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Rosebank, Johannesburg, South Africa",
      href: "#",
      description: "Visit our office"
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Mon-Fri: 8:00 AM - 5:00 PM\nSat: 9:00 AM - 1:00 PM",
      href: "#",
      description: "Our business hours"
    }
  ];

  // Available consultation times
  const availableTimes = [
    "09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  // FAQ data
  const faqData = [
    {
      question: "How much does a consultation cost?",
      answer: "Initial consultations are R1,500 for 1 hour. This includes a comprehensive review of your case and strategic advice on the best path forward."
    },
    {
      question: "How quickly can I get an appointment?",
      answer: "We typically schedule consultations within 2-3 business days. For urgent matters, we offer same-day consultations when available."
    },
    {
      question: "What should I bring to my consultation?",
      answer: "Please bring any relevant documents, correspondence, contracts, or evidence related to your legal matter. The more information you provide, the better we can assist you."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment plans for larger cases. We understand that legal fees can be significant, and we work with clients to find suitable payment arrangements."
    },
    {
      question: "What areas of law do you specialize in?",
      answer: "We specialize in Corporate Law, Family Law, Real Estate Law, Criminal Defense, Business Litigation, and Estate Planning. Our experienced attorneys have extensive knowledge in these practice areas."
    },
    {
      question: "Can I get a free initial assessment?",
      answer: "We offer a brief 15-minute phone consultation at no charge to determine if we can assist with your legal matter. This helps both parties understand the situation before scheduling a full consultation."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.phone.trim()) errors.phone = 'Phone is required';
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      preferredContact: 'email',
      urgency: 'moderate'
    });
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
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
              <Phone className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Contact Us</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              Get in <span className="text-steel-blue">Touch</span>
                </h1>
            
                <p className="text-xl lg:text-2xl text-white/80 max-w-6xl mx-auto leading-relaxed mb-12">
              Ready to discuss your legal needs? Contact us today for a consultation and discover how our experienced team can help you achieve your legal goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-deep-navy hover:bg-white/90 px-8 py-4 rounded-xl font-semibold text-lg hover:cursor-pointer">
                Schedule Consultation
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-primary hover:bg-white/10 backdrop-blur-xl px-8 py-4 rounded-xl font-semibold text-lg hover:cursor-pointer">
                Call Now
                <Phone className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Display */}
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
              <Users className="w-4 h-4" />
              <span>Contact Information</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-deep-navy mb-6">
              How to <span className="text-steel-blue">Reach Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
              Multiple ways to get in touch with our legal team. Choose the method that works best for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-steel-blue/30 group-hover:-translate-y-2 h-full">
                    <div className="p-8 text-center">
                      <div className="w-16 h-16 bg-steel-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-steel-blue" />
                      </div>
                      
                      <h3 className="text-lg font-bold text-deep-navy group-hover:text-steel-blue transition-colors mb-3">
                        {contact.title}
                      </h3>
                      
                      {contact.href !== "#" ? (
                        <a
                          href={contact.href}
                          className="text-steel-blue hover:text-steel-blue/80 transition-colors font-medium mb-3 block truncate"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-steel-blue font-medium mb-3 whitespace-pre-line">
                          {contact.value}
                        </p>
                      )}
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Consultation Scheduler */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-steel-blue/10 text-steel-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-deep-navy mb-6">
              Schedule Your <span className="text-steel-blue">Consultation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
              Book a consultation with our experienced legal team. Choose your preferred date and time.
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Date Selection */}
              <div>
                <h3 className="text-xl font-semibold text-deep-navy mb-6">Select Date & Time</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Preferred Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-steel-blue focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Preferred Time</label>
                    <div className="grid grid-cols-2 gap-3">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-lg border transition-all duration-200 ${
                            selectedTime === time
                              ? 'border-steel-blue bg-steel-blue/10 text-steel-blue'
                              : 'border-gray-300 hover:border-steel-blue/50'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Details */}
              <div>
                <h3 className="text-xl font-semibold text-deep-navy mb-6">Consultation Details</h3>
                
                <div className="space-y-4">
                  <div className="bg-steel-blue/10 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Clock className="w-5 h-5 text-steel-blue" />
                      <span className="font-semibold text-steel-blue">Duration</span>
                    </div>
                    <p className="text-gray-600">1 hour consultation</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-800">Cost</span>
                    </div>
                    <p className="text-gray-600">R1,500 (payable on booking)</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-blue-800">Format</span>
                    </div>
                    <p className="text-gray-600">In-person or video call</p>
                  </div>
                </div>

                {selectedDate && selectedTime && (
                  <div className="mt-8">
                    <Button className="w-full bg-steel-blue hover:bg-steel-blue/90 text-white py-4 rounded-xl font-semibold text-lg">
                      Book Consultation
                      <Calendar className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form with Validation */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-steel-blue/10 text-steel-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              <span>Send Message</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-deep-navy mb-6">
              Get in <span className="text-steel-blue">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
              Have a question or need legal advice? Send us a message and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl shadow-2xl p-12 text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-deep-navy mb-4">Message Sent Successfully!</h3>
              <p className="text-gray-600 mb-8">
                Thank you for your message. We&apos;ll get back to you within 24 hours.
              </p>
              <Button onClick={() => setIsSubmitted(false)} className="bg-steel-blue hover:bg-steel-blue/90 text-white px-8 py-4 rounded-xl font-semibold">
                Send Another Message
              </Button>
            </motion.div>
          ) : (
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-steel-blue focus:border-transparent ${
                        formErrors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-steel-blue focus:border-transparent ${
                        formErrors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email"
                    />
                    {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-steel-blue focus:border-transparent ${
                        formErrors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
                    <select
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-steel-blue focus:border-transparent"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-steel-blue focus:border-transparent ${
                      formErrors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="What is this regarding?"
                  />
                  {formErrors.subject && <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-steel-blue focus:border-transparent ${
                      formErrors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Please describe your legal matter in detail..."
                  />
                  {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level</label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-steel-blue focus:border-transparent"
                  >
                    <option value="low">Low - Can wait a few days</option>
                    <option value="moderate">Moderate - Within a week</option>
                    <option value="high">High - Within 24-48 hours</option>
                    <option value="urgent">Urgent - Same day</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-steel-blue hover:bg-steel-blue/90 text-white py-4 rounded-xl font-semibold text-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Office Location and Directions */}
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
              <MapPin className="w-4 h-4" />
              <span>Our Location</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-deep-navy mb-6">
              Visit Our <span className="text-steel-blue">Office</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
              Located in the heart of Rosebank, Johannesburg, our office is easily accessible by car and public transport.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-deep-navy mb-6">Office Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-steel-blue mt-1" />
                  <div>
                    <h4 className="font-semibold text-deep-navy mb-2">Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Rosebank Business District<br />
                      Johannesburg, South Africa<br />
                      Postal Code: 2196
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-steel-blue mt-1" />
                  <div>
                    <h4 className="font-semibold text-deep-navy mb-2">Business Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Navigation className="w-6 h-6 text-steel-blue mt-1" />
                  <div>
                    <h4 className="font-semibold text-deep-navy mb-2">Parking</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Free parking available in our building. Underground parking accessible via the main entrance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-deep-navy mb-6">Getting Here</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-deep-navy mb-3">By Car</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    From Sandton: Take the M1 South, exit at Rosebank, follow signs to Rosebank Business District.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    From CBD: Take the M1 North, exit at Rosebank, turn right into Rosebank Business District.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-deep-navy mb-3">By Public Transport</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Rosebank Gautrain Station is a 5-minute walk from our office.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Multiple bus routes serve the Rosebank area with stops near our building.
                </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-deep-navy mb-3">Accessibility</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Our office is fully accessible with wheelchair ramps, elevators, and accessible restrooms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-steel-blue/10 text-steel-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-deep-navy mb-6">
              Common <span className="text-steel-blue">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
              Find answers to the most frequently asked questions about our legal services and consultation process.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-deep-navy pr-4">
                    {faq.question}
                  </h3>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-steel-blue flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {expandedFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
            </div>
        </div>
      </section>

      {/* CTA Section
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
            <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-6xl mx-auto leading-relaxed">
              Don&apos;t wait to protect your rights. Contact us today for a consultation and take the first step towards resolving your legal matter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-deep-navy hover:bg-white/90 px-8 py-5 rounded-2xl font-semibold text-lg group">
                Schedule Consultation
                <Calendar className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-xl px-8 py-5 rounded-2xl font-semibold text-lg group">
                Call Now
                <Phone className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}