"use client";

import { motion } from "framer-motion";
import { Thermometer, Award, ShieldCheck, Heart } from "lucide-react";
import Image from "next/image";

export function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Our Mission for Better Health
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              We&apos;re dedicated to creating innovative healthcare solutions
              that improve lives and provide relief when you need it most.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-w-4 aspect-h-3">
              <Image
                width={1000}
                height={1000}
                src="/WhatsApp Image 2025-05-01 at 11.52.27 AM.jpeg"
                alt="Medical researchers in laboratory"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-blue-600 dark:bg-blue-500 rounded-lg p-4 text-white shadow-lg">
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6" />
                <p className="text-sm font-medium">
                  Award-winning research team
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              About CoolFever
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Founded in 2018 by a team of medical professionals and scientists,
              CoolFever is revolutionizing fever management with advanced
              cooling technology. Our medical-grade patches provide safe,
              effective, and long-lasting relief for people of all ages.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Through continuous research and innovation, we strive to create
              products that meet the highest standards of safety and efficacy,
              providing families with peace of mind during illness.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-3">
                  <Thermometer className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Advanced Technology
                </h4>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-3">
                  <ShieldCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Safety Certified
                </h4>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-3">
                  <Heart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Patient Focused
                </h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
