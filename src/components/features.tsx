"use client";

import { motion } from "framer-motion";
import {
  ThermometerSnowflake,
  Clock,
  ShieldCheck,
  Sparkles,
  Leaf,
  Droplets,
  Baby,
  User,
} from "lucide-react";

const features = [
  {
    icon: (
      <ThermometerSnowflake className="h-6 w-6 text-blue-600 dark:text-blue-400" />
    ),
    title: "Advanced Cooling",
    description:
      "Our proprietary cooling gel technology provides instant and long-lasting temperature reduction.",
  },
  {
    icon: <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Long-Lasting Relief",
    description:
      "Each patch provides up to 8 hours of continuous cooling relief, helping to manage fever symptoms.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Clinically Tested",
    description:
      "All our products undergo rigorous clinical testing to ensure safety and effectiveness.",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Easy to Apply",
    description:
      "Self-adhesive design makes application simple, with no mess or preparation needed.",
  },
  {
    icon: <Leaf className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Hypoallergenic",
    description:
      "Formulated for sensitive skin with gentle, hypoallergenic materials.",
  },
  {
    icon: <Droplets className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Water-Based Formula",
    description:
      "Our water-based cooling gel is gentle on skin while providing effective relief.",
  },
  {
    icon: <Baby className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Child-Friendly",
    description:
      "Special formulations for children with fun designs and extra-gentle adhesive.",
  },
  {
    icon: <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "For All Ages",
    description:
      "Specific products designed for infants, children, and adults with appropriate sizing.",
  },
];

export function Features() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Why Choose CoolFever Patches?
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Our cooling patches combine innovative technology with
              medical-grade quality to provide you with the best fever
              management solution.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
