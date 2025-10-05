"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Target, TrendingUp, Users, Clock, CheckCircle, Star } from "lucide-react";

export default function ProvenTrackRecord() {
  const stats = [
    {
      icon: Trophy,
      value: "98%",
      label: "Success Rate",
      description: "Cases won in favor of our clients",
      color: "text-yellow-500"
    },
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      description: "Satisfied clients across all practice areas",
      color: "text-blue-500"
    },
    {
      icon: Clock,
      value: "25",
      label: "Years Experience",
      description: "Combined legal expertise and knowledge",
      color: "text-green-500"
    },
    {
      icon: Award,
      value: "15+",
      label: "Awards Won",
      description: "Industry recognition and accolades",
      color: "text-purple-500"
    }
  ];

  const achievements = [
    {
      title: "Top 1% of Attorneys",
      description: "Recognized by the National Trial Lawyers Association",
      icon: Star,
      year: "2023"
    },
    {
      title: "Best Law Firm",
      description: "Voted by local community for three consecutive years",
      icon: Award,
      year: "2021-2023"
    },
    {
      title: "Client Choice Award",
      description: "Highest client satisfaction rating in the region",
      icon: CheckCircle,
      year: "2022"
    },
    {
      title: "Excellence in Service",
      description: "Outstanding legal representation and client care",
      icon: Target,
      year: "2023"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display text-deep-navy mb-6">
            Proven <span className="text-steel-blue">Track Record</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Our results speak for themselves. With decades of experience and a commitment to excellence, we deliver outcomes that exceed expectations.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-200 group-hover:border-blue-200">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  
                  <motion.div
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2`}
                  >
                    {stat.value}
                  </motion.div>
                  
                  <h3 className="text-xl font-display text-deep-navy mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Achievements List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-display text-deep-navy mb-8">
              Recognition & <span className="text-steel-blue">Achievements</span>
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-light-gray rounded-lg flex items-center justify-center group-hover:bg-steel-blue transition-colors duration-300">
                      <Icon className="w-6 h-6 text-steel-blue group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-deep-navy group-hover:text-steel-blue transition-colors duration-300">
                          {achievement.title}
                        </h4>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-steel-blue to-deep-navy rounded-3xl p-8 lg:p-12 text-white">
              <div className="text-center">
                <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
                <h4 className="text-2xl font-display mb-4">
                  Excellence in Every Case
                </h4>
                <p className="text-gray-200 mb-8 leading-relaxed px-4">
                  Our commitment to achieving the best possible outcomes for our clients has earned us recognition from peers and industry organizations.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300 mb-1">A+</div>
                    <div className="text-sm text-gray-300">BBB Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300 mb-1">5.0</div>
                    <div className="text-sm text-gray-300">Client Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-yellow-400 text-slate-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
            >
              #1 Rated
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-white text-steel-blue px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
            >
              Trusted Choice
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
