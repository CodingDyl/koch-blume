"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import { 
  Home, 
  ArrowLeft, 
  RefreshCw, 
  AlertTriangle,
  Phone, 
  Mail,
  MapPin,
  Clock,
  Shield,
  FileText,
  HelpCircle,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
        >
          {/* Error Icon */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <AlertTriangle className="w-12 h-12 text-white" />
          </motion.div>

          {/* Error Code */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-6xl lg:text-8xl font-display font-bold text-deep-navy mb-4"
          >
            Oops!
          </motion.h1>

          {/* Error Message */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl lg:text-4xl font-display font-bold text-deep-navy mb-6"
          >
            Something Went Wrong
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-6xl mx-auto"
          >
            We encountered an unexpected error. Our technical team has been notified, 
            but you can try refreshing the page or contact us for immediate assistance.
          </motion.p>

          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === 'development' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8 text-left"
            >
              <h4 className="text-sm font-semibold text-red-800 mb-2">Error Details (Development):</h4>
              <p className="text-sm text-red-700 font-mono break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-red-600 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button 
              size="lg" 
              onClick={reset}
              className="bg-steel-blue hover:bg-steel-blue/90 text-white px-8 py-4 rounded-xl font-semibold text-lg group"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Try Again
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Link href="/">
              <Button size="lg" variant="outline" className="border-steel-blue text-steel-blue hover:bg-steel-blue/10 px-8 py-4 rounded-xl font-semibold text-lg group">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Button>
            </Link>
          </motion.div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-light-gray rounded-2xl p-8"
          >
            <h3 className="text-2xl font-display font-bold text-deep-navy mb-6">
              Need Immediate Help?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-deep-navy mb-4">Contact Our Team</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Phone className="w-5 h-5 text-steel-blue flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm">010 300 0247</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Mail className="w-5 h-5 text-steel-blue flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm">info@kblegal.co.za</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-steel-blue flex-shrink-0" />
                    <div>
                      <p className="font-medium">Office</p>
                      <p className="text-sm">1st Floor, 145 Second St, Sandton</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-deep-navy mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <Link href="/contact">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-steel-blue/30 hover:bg-steel-blue/5 transition-all duration-200 group cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <HelpCircle className="w-5 h-5 text-steel-blue" />
                        <span className="text-gray-700 group-hover:text-steel-blue">Contact Support</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-steel-blue" />
                    </div>
                  </Link>
                  
                  <Link href="/schedule-consultation">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-steel-blue/30 hover:bg-steel-blue/5 transition-all duration-200 group cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-steel-blue" />
                        <span className="text-gray-700 group-hover:text-steel-blue">Schedule Consultation</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-steel-blue" />
                    </div>
                  </Link>
                  
                  <Link href="/services">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-steel-blue/30 hover:bg-steel-blue/5 transition-all duration-200 group cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-steel-blue" />
                        <span className="text-gray-700 group-hover:text-steel-blue">View Services</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-steel-blue" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technical Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 p-6 bg-steel-blue/10 rounded-xl"
          >
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <Shield className="w-4 h-4 text-steel-blue" />
              <span>Your data is secure and protected by attorney-client privilege</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
