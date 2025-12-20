"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock,
  Calendar,
  MessageSquare,
  Send,
  CheckCircle,
  Navigation,
  Users,
  Upload,
  Paperclip,
  X as XIcon
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
    practiceArea: ''
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  
  const containerRef = useRef<HTMLDivElement>(null);

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
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@kblegal.co.za",
      href: "mailto:info@kblegal.co.za",
      description: "Send us a detailed message"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "1st Floor, 145 Second St, Sandton",
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
    // Clear error when user starts typing
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

            <div className="flex justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-primary hover:bg-white/10 backdrop-blur-xl px-8 py-4 rounded-xl font-semibold text-lg hover:cursor-pointer"
                onClick={() => window.location.href = 'tel:0103000247'}
              >
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

      {/* Consultation Scheduler */}
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
              <span>Schedule Consultation</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-deep-navy mb-6">
              Book Your <span className="text-steel-blue">Consultation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-8xl mx-auto leading-relaxed">
              Select your preferred date and time for a consultation with our legal team.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
              <div className="space-y-8">
                <div>
                  <label className="block text-base font-semibold text-deep-navy mb-4">Preferred Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-steel-blue focus:border-transparent text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-base font-semibold text-deep-navy mb-4">Preferred Time</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-200 text-base font-medium whitespace-nowrap ${
                          selectedTime === time
                            ? 'border-steel-blue bg-steel-blue text-white shadow-lg'
                            : 'border-gray-300 text-gray-700 hover:border-steel-blue hover:bg-steel-blue/5'
                        }`}
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
                  >
                    <Button className="w-full bg-steel-blue hover:bg-steel-blue/90 text-white py-4 rounded-xl font-semibold text-lg shadow-lg">
                      Confirm Booking
                      <Calendar className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Practice Area *</label>
                  <select
                    name="practiceArea"
                    value={formData.practiceArea}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-steel-blue focus:border-transparent ${
                      formErrors.practiceArea ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a practice area</option>
                    {practiceAreas.map((area) => (
                      <option key={area.value} value={area.value}>
                        {area.label}
                      </option>
                    ))}
                  </select>
                  {formErrors.practiceArea && <p className="text-red-500 text-sm mt-1">{formErrors.practiceArea}</p>}
                </div>

                {/* File Upload Section */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Supporting Documents <span className="text-gray-500 font-normal">(Optional, max 5 files, 10MB each)</span>
                  </label>
                  
                  <div className="relative">
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
                      className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-gray-300 rounded-xl hover:border-steel-blue transition-colors duration-300 cursor-pointer bg-gray-50 hover:bg-steel-blue/5"
                    >
                      <div className="text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                        <p className="text-sm text-gray-600 font-medium mb-1">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
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
                          className="flex items-center justify-between p-3 bg-steel-blue/5 border border-steel-blue/20 rounded-lg"
                        >
                          <div className="flex items-center space-x-3 flex-1 min-w-0">
                            <Paperclip className="w-4 h-4 text-steel-blue flex-shrink-0" />
                            <span className="text-sm text-gray-700 truncate">
                              {file.name}
                            </span>
                            <span className="text-xs text-gray-500">
                              ({(file.size / 1024).toFixed(0)} KB)
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="ml-2 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                            aria-label="Remove file"
                          >
                            <XIcon className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
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
              Located in the heart of Sandton, our office is easily accessible by car and public transport.
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
                      1st Floor, 145 Second St<br />
                      Sandton, South Africa<br />
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
                    From Johannesburg CBD: Take the M1 North to Sandton, exit at Second Street.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    From Pretoria: Take the N1 South, exit at Sandton, follow signs to Second Street.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-deep-navy mb-3">By Public Transport</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Sandton Gautrain Station is a 5-minute walk from our office.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Multiple bus routes serve the Sandton area with stops near our building.
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
    </div>
  );
}