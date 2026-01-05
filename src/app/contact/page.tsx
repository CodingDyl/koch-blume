"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock,
  CheckCircle,
  Calendar,
  Upload,
  Paperclip,
  X as XIcon
} from "lucide-react";
import { ThemeAnimatedButton } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    practiceArea: ''
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  // Available consultation times
  const availableTimes = [
    "09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  // Contact information
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "010 300 0247",
      href: "tel:0103000247",
      description: "Monday - Friday, 8:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@kblegal.co.za",
      href: "mailto:info@kblegal.co.za",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office",
      value: "1st Floor, 145 Second St, Sandton",
      href: "#location",
      description: "Visit us by appointment"
    }
  ];

  // Practice areas for dropdown
  const practiceAreas = [
    { value: 'corporate', label: 'Corporate Law' },
    { value: 'family', label: 'Family Law' },
    { value: 'real-estate', label: 'Real Estate Law' },
    { value: 'criminal', label: 'Criminal Defense' },
    { value: 'litigation', label: 'Business Litigation' },
    { value: 'estate', label: 'Estate Planning' },
    { value: 'other', label: 'Other Legal Matter' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      // Limit to 5 files max, 10MB each
      const validFiles = fileArray.filter(file => file.size <= 10 * 1024 * 1024);
      setUploadedFiles(prev => [...prev, ...validFiles].slice(0, 5));
    }
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files) {
      const fileArray = Array.from(files);
      const validFiles = fileArray.filter(file => file.size <= 10 * 1024 * 1024);
      setUploadedFiles(prev => [...prev, ...validFiles].slice(0, 5));
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.phone.trim()) errors.phone = 'Phone is required';
    if (!formData.practiceArea) errors.practiceArea = 'Please select a practice area';
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
      practiceArea: ''
    });
    setUploadedFiles([]);
  };

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
                Get in Touch
              </p>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-gray-900 leading-tight mb-6 sm:mb-8 font-display"
              style={{ fontFamily: 'var(--font-headline)' }}
            >
              Let&apos;s discuss your legal needs.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Whether you need immediate legal assistance or wish to schedule a consultation, our experienced team is ready to help you navigate your legal challenges.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <a 
                    href={contact.href}
                    className="block bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-[#548caf]/30 hover:shadow-xl transition-all duration-300 h-full"
                  >
                    <div className="mb-5 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-[#548caf]/10 flex items-center justify-center group-hover:bg-[#548caf] group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#548caf] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-light text-[#1a385c] mb-2 sm:mb-3 font-display"
                        style={{ fontFamily: 'var(--font-headline)' }}>
                      {contact.title}
                    </h3>
                    
                    <p className="text-base sm:text-lg text-[#548caf] font-medium mb-2"
                       style={{ fontFamily: 'var(--font-body)' }}>
                      {contact.value}
                    </p>

                    <p className="text-sm text-gray-600"
                       style={{ fontFamily: 'var(--font-body)' }}>
                      {contact.description}
                    </p>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation Booking Section */}
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
              Book a consultation
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4"
               style={{ fontFamily: 'var(--font-body)' }}>
              Select your preferred date and time
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-lg p-6 sm:p-8 lg:p-10"
            >
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3"
                         style={{ fontFamily: 'var(--font-body)' }}>
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#548caf] focus:border-transparent text-sm sm:text-base"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3"
                         style={{ fontFamily: 'var(--font-body)' }}>
                    Preferred Time
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`w-full px-4 py-3 sm:py-4 rounded-xl border-2 transition-all duration-200 text-sm sm:text-base font-medium whitespace-nowrap ${
                          selectedTime === time
                            ? 'border-[#548caf] bg-[#548caf] text-white'
                            : 'border-gray-200 text-gray-700 hover:border-[#548caf] hover:bg-[#548caf]/5'
                        }`}
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {selectedDate && selectedTime && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="pt-4"
                  >
                    <button 
                      className="w-full px-6 py-4 bg-[#548caf] text-white rounded-xl hover:bg-[#548caf]/90 transition-colors duration-200 text-base font-medium flex items-center justify-center gap-2"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Confirm Booking
                      <Calendar className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
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
              Send us a message
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4"
               style={{ fontFamily: 'var(--font-body)' }}>
              We&apos;ll respond within 24 hours
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-lg p-8 sm:p-12 text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-light text-[#1a385c] mb-3 sm:mb-4 font-display"
                    style={{ fontFamily: 'var(--font-headline)' }}>
                  Message sent successfully
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8"
                   style={{ fontFamily: 'var(--font-body)' }}>
                  Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-[#548caf] text-white rounded-xl hover:bg-[#548caf]/90 transition-colors duration-200 text-sm sm:text-base font-medium"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-lg p-6 sm:p-8 lg:p-10"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2"
                             style={{ fontFamily: 'var(--font-body)' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#548caf] focus:border-transparent transition-all ${
                          formErrors.name ? 'border-red-500' : 'border-gray-200'
                        }`}
                        placeholder="Enter your full name"
                        style={{ fontFamily: 'var(--font-body)' }}
                      />
                      {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2"
                             style={{ fontFamily: 'var(--font-body)' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#548caf] focus:border-transparent transition-all ${
                          formErrors.email ? 'border-red-500' : 'border-gray-200'
                        }`}
                        placeholder="your.email@example.com"
                        style={{ fontFamily: 'var(--font-body)' }}
                      />
                      {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2"
                             style={{ fontFamily: 'var(--font-body)' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#548caf] focus:border-transparent transition-all ${
                          formErrors.phone ? 'border-red-500' : 'border-gray-200'
                        }`}
                        placeholder="010 300 0247"
                        style={{ fontFamily: 'var(--font-body)' }}
                      />
                      {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2"
                             style={{ fontFamily: 'var(--font-body)' }}>
                        Preferred Contact Method
                      </label>
                      <select
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#548caf] focus:border-transparent transition-all"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="both">Both</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2"
                             style={{ fontFamily: 'var(--font-body)' }}>
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#548caf] focus:border-transparent transition-all"
                        placeholder="Brief description"
                        style={{ fontFamily: 'var(--font-body)' }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2"
                             style={{ fontFamily: 'var(--font-body)' }}>
                        Practice Area *
                      </label>
                      <select
                        name="practiceArea"
                        value={formData.practiceArea}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#548caf] focus:border-transparent transition-all ${
                          formErrors.practiceArea ? 'border-red-500' : 'border-gray-200'
                        }`}
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        <option value="">Select a practice area</option>
                        {practiceAreas.map((area) => (
                          <option key={area.value} value={area.value}>
                            {area.label}
                          </option>
                        ))}
                      </select>
                      {formErrors.practiceArea && <p className="text-red-500 text-xs mt-1">{formErrors.practiceArea}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2"
                           style={{ fontFamily: 'var(--font-body)' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#548caf] focus:border-transparent transition-all resize-none ${
                        formErrors.message ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="Please describe your legal matter in detail..."
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                    {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
                  </div>

                  {/* File Upload Section */}
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700"
                           style={{ fontFamily: 'var(--font-body)' }}>
                      Supporting Documents{' '}
                      <span className="text-gray-500 font-normal">(Optional, max 5 files, 10MB each)</span>
                    </label>
                    
                    <div
                      onDragEnter={handleDragEnter}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className="relative"
                    >
                      <input
                        type="file"
                        id="file-upload"
                        multiple
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <label
                        htmlFor="file-upload"
                        className={`flex items-center justify-center w-full px-4 py-8 sm:py-10 border-2 border-dashed rounded-xl transition-all duration-300 cursor-pointer ${
                          isDragging
                            ? 'border-[#548caf] bg-[#548caf]/5'
                            : 'border-gray-200 hover:border-[#548caf] hover:bg-[#548caf]/5'
                        }`}
                      >
                        <div className="text-center">
                          <Upload className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 transition-colors ${
                            isDragging ? 'text-[#548caf]' : 'text-gray-400'
                          }`} />
                          <p className="text-sm sm:text-base text-gray-700 font-medium mb-1"
                             style={{ fontFamily: 'var(--font-body)' }}>
                            {isDragging ? 'Drop files here' : 'Click to upload or drag and drop'}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-500"
                             style={{ fontFamily: 'var(--font-body)' }}>
                            PDF, DOC, DOCX, JPG, PNG up to 10MB
                          </p>
                        </div>
                      </label>
                    </div>

                    {/* Uploaded Files List */}
                    {uploadedFiles.length > 0 && (
                      <div className="space-y-2">
                        {uploadedFiles.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 sm:p-4 bg-[#548caf]/5 border border-[#548caf]/20 rounded-lg"
                          >
                            <div className="flex items-center space-x-3 flex-1 min-w-0">
                              <Paperclip className="w-4 h-4 text-[#548caf] flex-shrink-0" />
                              <div className="flex-1 min-w-0">
                                <span className="text-sm text-gray-700 truncate block"
                                      style={{ fontFamily: 'var(--font-body)' }}>
                                  {file.name}
                                </span>
                                <span className="text-xs text-gray-500"
                                      style={{ fontFamily: 'var(--font-body)' }}>
                                  {(file.size / 1024).toFixed(0)} KB
                                </span>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="ml-2 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0 p-1"
                              aria-label="Remove file"
                            >
                              <XIcon className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 bg-[#548caf] text-white rounded-xl hover:bg-[#548caf]/90 transition-colors duration-200 text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></span>
                          Sending message...
                        </span>
                      ) : (
                        'Send message'
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Office Location Section */}
      <section id="location" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-slate-50/50 to-white">
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
              Visit our office
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4"
               style={{ fontFamily: 'var(--font-body)' }}>
              Located in the heart of Sandton
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-lg p-6 sm:p-8 lg:p-10"
            >
              <h3 className="text-xl sm:text-2xl font-light text-[#1a385c] mb-6 font-display"
                  style={{ fontFamily: 'var(--font-headline)' }}>
                Office information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-[#548caf] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2"
                        style={{ fontFamily: 'var(--font-body)' }}>
                      Address
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed"
                       style={{ fontFamily: 'var(--font-body)' }}>
                      1st Floor, 145 Second St<br />
                      Sandton, Johannesburg<br />
                      2196, South Africa
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-[#548caf] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2"
                        style={{ fontFamily: 'var(--font-body)' }}>
                      Business hours
                    </h4>
                    <div className="text-sm sm:text-base text-gray-600 space-y-1"
                         style={{ fontFamily: 'var(--font-body)' }}>
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: By appointment only</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-lg p-6 sm:p-8 lg:p-10"
            >
              <h3 className="text-xl sm:text-2xl font-light text-[#1a385c] mb-6 font-display"
                  style={{ fontFamily: 'var(--font-headline)' }}>
                Getting here
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3"
                      style={{ fontFamily: 'var(--font-body)' }}>
                    By car
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed"
                     style={{ fontFamily: 'var(--font-body)' }}>
                    Free parking available in our building. Underground parking accessible via the main entrance on Second Street.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3"
                      style={{ fontFamily: 'var(--font-body)' }}>
                    By public transport
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed"
                     style={{ fontFamily: 'var(--font-body)' }}>
                    Sandton Gautrain Station is a 5-minute walk from our office. Multiple bus routes serve the area with stops nearby.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3"
                      style={{ fontFamily: 'var(--font-body)' }}>
                    Accessibility
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed"
                     style={{ fontFamily: 'var(--font-body)' }}>
                    Our office is fully accessible with wheelchair ramps, elevators, and accessible facilities.
                  </p>
                </div>
              </div>
            </motion.div>
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
              Prefer to speak directly?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed"
               style={{ fontFamily: 'var(--font-body)' }}>
              Call us now for immediate assistance or to schedule a consultation
            </p>
            
            <a href="tel:0103000247">
              <ThemeAnimatedButton 
                size="lg"
                variant="primary"
                className="whitespace-nowrap rounded-xl"
              >
                Call 010 300 0247
              </ThemeAnimatedButton>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
