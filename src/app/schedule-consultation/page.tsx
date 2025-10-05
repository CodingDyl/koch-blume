"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { 
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Star,
  Award,
  Shield,
  Scale,
  Building,
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
  ArrowUpRight,
  Check,
  X,
  DollarSign,
  CreditCard,
  FileText,
  MessageSquare,
  Send,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  Navigation,
  ExternalLink,
  Download,
  Phone as PhoneIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScheduleConsultationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedType, setSelectedType] = useState('in-person');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    legalMatter: '',
    urgency: 'moderate',
    preferredContact: 'email',
    additionalInfo: ''
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Available consultation types
  const consultationTypes = [
    {
      type: 'in-person',
      title: 'In-Person Consultation',
      description: 'Meet with our attorneys at our Rosebank office',
      duration: '1 hour',
      price: 'R1,500',
      icon: Building,
      color: 'from-blue-500 to-cyan-500',
      benefits: ['Face-to-face interaction', 'Document review', 'Immediate feedback', 'Professional setting']
    },
    {
      type: 'video',
      title: 'Video Consultation',
      description: 'Secure video call from anywhere',
      duration: '1 hour',
      price: 'R1,200',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      benefits: ['Convenient location', 'Screen sharing', 'Recording available', 'Time efficient']
    },
    {
      type: 'phone',
      title: 'Phone Consultation',
      description: 'Quick phone call for urgent matters',
      duration: '30 minutes',
      price: 'R800',
      icon: Phone,
      color: 'from-purple-500 to-violet-500',
      benefits: ['Immediate availability', 'Quick assessment', 'Cost effective', 'Flexible timing']
    }
  ];

  // Available time slots (mock data - in real app, this would come from API)
  const availableTimeSlots = {
    '09:00': { available: true, type: 'morning' },
    '10:00': { available: true, type: 'morning' },
    '11:00': { available: true, type: 'morning' },
    '14:00': { available: true, type: 'afternoon' },
    '15:00': { available: true, type: 'afternoon' },
    '16:00': { available: true, type: 'afternoon' }
  };

  // Get next 30 days for date selection
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      // Skip weekends for now (in real app, this would be configurable)
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (step: number) => {
    const errors: {[key: string]: string} = {};
    
    if (step === 3) {
      if (!formData.firstName.trim()) errors.firstName = 'First name is required';
      if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
      if (!formData.email.trim()) errors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
      if (!formData.phone.trim()) errors.phone = 'Phone number is required';
      if (!formData.legalMatter.trim()) errors.legalMatter = 'Please describe your legal matter';
    }
    
    return Object.keys(errors).length === 0;
  };

  // Memoized validation to prevent infinite re-renders
  const isStepValid = useMemo(() => {
    if (currentStep === 1) return selectedType !== '';
    if (currentStep === 2) return selectedDate !== '' && selectedTime !== '';
    if (currentStep === 3) return validateStep(3);
    return true;
  }, [currentStep, selectedType, selectedDate, selectedTime, formData]);

  const handleNext = () => {
    if (currentStep === 1 && !selectedType) return;
    if (currentStep === 2 && (!selectedDate || !selectedTime)) return;
    if (currentStep === 3) {
      const errors: {[key: string]: string} = {};
      if (!formData.firstName.trim()) errors.firstName = 'First name is required';
      if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
      if (!formData.email.trim()) errors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
      if (!formData.phone.trim()) errors.phone = 'Phone number is required';
      if (!formData.legalMatter.trim()) errors.legalMatter = 'Please describe your legal matter';
      
      setFormErrors(errors);
      if (Object.keys(errors).length > 0) return;
    }
    
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors: {[key: string]: string} = {};
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.legalMatter.trim()) errors.legalMatter = 'Please describe your legal matter';
    
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;
    
    setIsSubmitting(true);
    
    // Simulate booking submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsBooked(true);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-ZA', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getSelectedConsultation = () => {
    return consultationTypes.find(type => type.type === selectedType);
  };

  if (isBooked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-display font-bold text-deep-navy mb-6">
              Consultation Booked!
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Your consultation has been successfully scheduled. We'll send you a confirmation email with all the details.
            </p>
            
            <div className="bg-steel-blue/10 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-deep-navy mb-4">Booking Details</h3>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-semibold text-steel-blue">{formatDate(selectedDate)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-semibold text-steel-blue">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-semibold text-steel-blue">{getSelectedConsultation()?.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold text-steel-blue">{getSelectedConsultation()?.duration}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button className="w-full bg-steel-blue hover:bg-steel-blue/90 text-white py-4 rounded-xl font-semibold text-lg">
                Download Calendar Invite
                <Download className="w-5 h-5 ml-2" />
              </Button>
              
              <Button variant="outline" className="w-full border-steel-blue text-steel-blue hover:bg-steel-blue/10 py-4 rounded-xl font-semibold text-lg">
                Book Another Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

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
              <Calendar className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">Book Consultation</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              Schedule Your <span className="text-steel-blue">Consultation</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/80 max-w-6xl mx-auto leading-relaxed mb-12">
              Get expert legal advice from our experienced attorneys. Choose your preferred consultation type, 
              select a convenient time, and book your session in just a few clicks.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-xl rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Expert Legal Advice</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-xl rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Flexible Scheduling</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-xl rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-purple-400" />
                <span>Confidential & Secure</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-20 bg-white">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-8">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step <= currentStep 
                      ? 'bg-steel-blue text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-1 ml-4 ${
                      step < currentStep ? 'bg-steel-blue' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-sm text-gray-600">
              <span>Consultation Type</span>
              <span>Date & Time</span>
              <span>Your Details</span>
              <span>Confirmation</span>
            </div>
          </div>

          {/* Step 1: Consultation Type */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold text-deep-navy mb-4">
                  Choose Your Consultation Type
                </h2>
                <p className="text-lg text-gray-600">
                  Select the consultation format that works best for you
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {consultationTypes.map((type, index) => {
                  const Icon = type.icon;
                  return (
                    <motion.button
                      key={type.type}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedType(type.type)}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                        selectedType === type.type
                          ? 'border-steel-blue bg-steel-blue/10'
                          : 'border-gray-200 hover:border-steel-blue/50'
                      }`}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-deep-navy mb-2">{type.title}</h3>
                      <p className="text-gray-600 mb-4">{type.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-500">Duration: {type.duration}</span>
                        <span className="text-lg font-bold text-steel-blue">{type.price}</span>
                      </div>
                      
                      <div className="space-y-1">
                        {type.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Step 2: Date & Time Selection */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold text-deep-navy mb-4">
                  Select Date & Time
                </h2>
                <p className="text-lg text-gray-600">
                  Choose a convenient date and time for your consultation
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Date Selection */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-deep-navy mb-4">Select Date</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {availableDates.slice(0, 14).map((date) => (
                      <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`p-3 rounded-lg border transition-all duration-200 text-sm ${
                          selectedDate === date
                            ? 'border-steel-blue bg-steel-blue/10 text-steel-blue'
                            : 'border-gray-300 hover:border-steel-blue/50'
                        }`}
                      >
                        {new Date(date).toLocaleDateString('en-ZA', { 
                          month: 'short', 
                          day: 'numeric',
                          weekday: 'short'
                        })}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-deep-navy mb-4">Select Time</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(availableTimeSlots).map(([time, slot]) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        disabled={!slot.available}
                        className={`p-3 rounded-lg border transition-all duration-200 text-sm ${
                          selectedTime === time
                            ? 'border-steel-blue bg-steel-blue/10 text-steel-blue'
                            : slot.available
                            ? 'border-gray-300 hover:border-steel-blue/50'
                            : 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Personal Details */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold text-deep-navy mb-4">
                  Your Details
                </h2>
                <p className="text-lg text-gray-600">
                  Please provide your information so we can prepare for your consultation
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-steel-blue focus:border-transparent ${
                        formErrors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your first name"
                    />
                    {formErrors.firstName && <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-steel-blue focus:border-transparent ${
                        formErrors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your last name"
                    />
                    {formErrors.lastName && <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company (Optional)</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-steel-blue focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Describe Your Legal Matter *</label>
                  <textarea
                    name="legalMatter"
                    value={formData.legalMatter}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-steel-blue focus:border-transparent ${
                      formErrors.legalMatter ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Please provide a brief description of your legal matter..."
                  />
                  {formErrors.legalMatter && <p className="text-red-500 text-sm mt-1">{formErrors.legalMatter}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information (Optional)</label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-steel-blue focus:border-transparent"
                    placeholder="Any additional information you'd like us to know..."
                  />
                </div>
              </form>
            </motion.div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold text-deep-navy mb-4">
                  Confirm Your Booking
                </h2>
                <p className="text-lg text-gray-600">
                  Please review your consultation details before confirming
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Consultation Details */}
                  <div>
                    <h3 className="text-xl font-semibold text-deep-navy mb-6">Consultation Details</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-semibold text-steel-blue">{getSelectedConsultation()?.title}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="font-semibold text-steel-blue">{formatDate(selectedDate)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time:</span>
                        <span className="font-semibold text-steel-blue">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold text-steel-blue">{getSelectedConsultation()?.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price:</span>
                        <span className="font-semibold text-steel-blue">{getSelectedConsultation()?.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Your Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-deep-navy mb-6">Your Information</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Name:</span>
                        <span className="font-semibold text-steel-blue">{formData.firstName} {formData.lastName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Email:</span>
                        <span className="font-semibold text-steel-blue">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Phone:</span>
                        <span className="font-semibold text-steel-blue">{formData.phone}</span>
                      </div>
                      {formData.company && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Company:</span>
                          <span className="font-semibold text-steel-blue">{formData.company}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-gray-600">Urgency:</span>
                        <span className="font-semibold text-steel-blue capitalize">{formData.urgency}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-steel-blue/10 rounded-xl">
                  <h4 className="font-semibold text-deep-navy mb-3">Legal Matter</h4>
                  <p className="text-gray-600 leading-relaxed">{formData.legalMatter}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            <Button
              onClick={handleBack}
              disabled={currentStep === 1}
              variant="outline"
              className="border-steel-blue text-steel-blue hover:bg-steel-blue/10 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 rounded-xl font-semibold"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>

             {currentStep < 4 ? (
               <Button
                 onClick={handleNext}
                 disabled={!isStepValid}
                 className="bg-steel-blue hover:bg-steel-blue/90 text-white px-8 py-4 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
               >
                 Next
                 <ArrowRight className="w-5 h-5 ml-2" />
               </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-steel-blue hover:bg-steel-blue/90 text-white px-8 py-4 rounded-xl font-semibold disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Booking...
                  </div>
                ) : (
                  <>
                    Confirm Booking
                    <CheckCircle className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl xl:max-w-6xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-deep-navy mb-6">
              Why Choose Our <span className="text-steel-blue">Consultations?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
              Experience the difference of working with South Africa's premier legal team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Expert Legal Advice",
                description: "Get guidance from experienced attorneys with proven track records in your practice area.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Shield,
                title: "Confidential & Secure",
                description: "Your information is protected by attorney-client privilege and our strict confidentiality policies.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Clock,
                title: "Flexible Scheduling",
                description: "Choose from multiple consultation types and times that fit your schedule and preferences.",
                color: "from-purple-500 to-violet-500"
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-8 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-deep-navy mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
