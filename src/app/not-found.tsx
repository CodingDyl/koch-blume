"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Home, 
  ArrowLeft, 
  Search, 
  FileText, 
  Phone, 
  Mail,
  MapPin,
  Clock,
  AlertCircle,
  HelpCircle,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
        >
          {/* 404 Icon */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-24 bg-gradient-to-r from-steel-blue to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <AlertCircle className="w-12 h-12 text-white" />
          </motion.div>

          {/* Error Code */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-6xl lg:text-8xl font-display font-bold text-deep-navy mb-4"
          >
            404
          </motion.h1>

          {/* Error Message */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl lg:text-4xl font-display font-bold text-deep-navy mb-6"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-6xl mx-auto"
          >
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, our legal team is here to help you find what you need.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="/">
              <Button size="lg" className="bg-steel-blue hover:bg-steel-blue/90 text-white px-8 py-4 rounded-xl font-semibold text-lg group">
                <Home className="w-5 h-5 mr-2" />
                Go Home
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-steel-blue text-steel-blue hover:bg-steel-blue/10 px-8 py-4 rounded-xl font-semibold text-lg group"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-light-gray rounded-2xl p-8"
          >
            <h3 className="text-2xl font-display font-bold text-deep-navy mb-6">
              Popular Pages
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Our Services",
                  description: "Legal practice areas",
                  href: "/services",
                  icon: FileText,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "About Us",
                  description: "Meet our team",
                  href: "/about",
                  icon: HelpCircle,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Contact",
                  description: "Get in touch",
                  href: "/contact",
                  icon: Phone,
                  color: "from-purple-500 to-violet-500"
                },
                {
                  title: "Schedule Consultation",
                  description: "Book a meeting",
                  href: "/schedule-consultation",
                  icon: Clock,
                  color: "from-orange-500 to-red-500"
                }
              ].map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link key={link.title} href={link.href}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-steel-blue/30 group cursor-pointer"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-deep-navy mb-2 group-hover:text-steel-blue transition-colors">
                        {link.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {link.description}
                      </p>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 p-6 bg-steel-blue/10 rounded-xl"
          >
            <h4 className="text-lg font-semibold text-deep-navy mb-4">
              Need Help Finding Something?
            </h4>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <Phone className="w-4 h-4 text-steel-blue" />
                <span>+27 11 123 4567</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <Mail className="w-4 h-4 text-steel-blue" />
                <span>info@kochukovblume.co.za</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <MapPin className="w-4 h-4 text-steel-blue" />
                <span>Rosebank, Johannesburg</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
