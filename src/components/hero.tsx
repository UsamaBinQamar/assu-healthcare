"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight, Shield, Clock, CheckCircle } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-blue-50 dark:bg-blue-950 py-20 sm:py-32">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-blue-100 dark:bg-blue-900/20 opacity-70"
          animate={{
            y: [0, 15, 0],
            x: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 -left-20 h-72 w-72 rounded-full bg-blue-100 dark:bg-blue-900/20 opacity-70"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Advanced Cooling Technology for{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Fever Relief
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-xl">
              Our medical-grade cooling patches provide immediate and
              long-lasting relief for fevers, helping you and your family
              recover faster.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium"
              >
                <Link href="#buy">
                  Shop Now <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#learn-more">Learn More</Link>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Clinically Tested
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  8+ Hours Relief
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Dermatologist Approved
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-w-16 aspect-h-12 relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  width={1000}
                  height={1000}
                  src="https://images.pexels.com/photos/3985162/pexels-photo-3985162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Fever cooling patch on forehead"
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Temperature reduction in minutes
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
