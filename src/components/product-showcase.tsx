"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  Baby,
  CheckCircle,
  Droplets,
  Minus,
  Plus,
  Shield,
  ShoppingCart,
  ThermometerSnowflake,
  User,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const products = [
  {
    id: "adult",
    name: "AssuHealthcare medical devices and general wellness products",
    description:
      "Our easy save fever patch cooling patches provide help to the patients with fever and other related issues",
    price: 1499,
    pricePerUnit: "PKR 250 per patch",
    quantity: "6 patches per box",
    features: [
      "8+ hours of cooling relief",
      "Hypoallergenic material",
      "Easy to apply and remove",
      "Non-medicated formula",
      "Made in Pakistan",
      "Available in all major cities",
    ],
    image:
      "https://images.pexels.com/photos/3985162/pexels-photo-3985162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <User className="h-5 w-5" />,
  },
  {
    id: "children",
    name: "Children's Cooling Patches",
    description:
      "Gentle and safe cooling patches specially designed for children. Pediatrician recommended in Pakistan.",
    price: 1299,
    pricePerUnit: "PKR 217 per patch",
    quantity: "6 patches per box",
    features: [
      "6+ hours of cooling relief",
      "Extra gentle adhesive",
      "Fun designs for kids",
      "Pediatrician recommended",
      "Made in Pakistan",
      "Available in all major cities",
    ],
    image:
      "https://images.pexels.com/photos/3985162/pexels-photo-3985162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <Baby className="h-5 w-5" />,
  },
  {
    id: "extra",
    name: "Extra Strength Formula",
    description:
      "Maximum strength cooling patches for severe fever symptoms. Trusted by hospitals across Pakistan.",
    price: 1999,
    pricePerUnit: "PKR 333 per patch",
    quantity: "6 patches per box",
    features: [
      "10+ hours of cooling relief",
      "Enhanced cooling technology",
      "Larger size for better coverage",
      "For adults and teens",
      "Made in Pakistan",
      "Available in all major cities",
    ],
    image:
      "https://images.pexels.com/photos/3985162/pexels-photo-3985162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <Droplets className="h-5 w-5" />,
  },
];

export function ProductShowcase() {
  const [quantities, setQuantities] = useState<Record<string, number>>({
    adult: 1,
    children: 1,
    extra: 1,
  });

  const handleQuantityChange = (productId: string, increment: boolean) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, prev[productId] + (increment ? 1 : -1)),
    }));
  };

  const handleAddToCart = (productId: string) => {
    // Implement add to cart functionality
    console.log(`Added ${quantities[productId]} ${productId} to cart`);
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              AssuHealthcare Cooling Patch Range
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Choose the perfect cooling solution for your needs with our
              specialized range of products. Available across Pakistan.
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="adult" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-green-100 dark:bg-green-900/30">
              {products.map((product) => (
                <TabsTrigger
                  key={product.id}
                  value={product.id}
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-green-600 dark:data-[state=active]:text-green-400"
                >
                  <div className="flex items-center space-x-2">
                    {product.icon}
                    <span className="hidden sm:inline">{product.name}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {products.map((product) => (
            <TabsContent key={product.id} value={product.id}>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <motion.div variants={fadeInUp} className="relative">
                  <div className="aspect-w-4 aspect-h-3 relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      width={1000}
                      height={1000}
                      src={product.image}
                      alt={product.name}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="absolute -bottom-4 right-4 bg-white dark:bg-gray-900 rounded-full h-16 w-16 flex items-center justify-center shadow-lg">
                    <ThermometerSnowflake className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {product.description}
                  </p>

                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      PKR {product.price}
                    </span>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                      {product.pricePerUnit} · {product.quantity}
                    </span>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Card
                    id="buy"
                    className="bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800"
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Add to Cart</CardTitle>
                      <CardDescription>
                        In stock. Free delivery across Pakistan.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 border rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              handleQuantityChange(product.id, false)
                            }
                            disabled={quantities[product.id] <= 1}
                            className="h-9 w-9"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">
                            {quantities[product.id]}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              handleQuantityChange(product.id, true)
                            }
                            disabled={quantities[product.id] >= 10}
                            className="h-9 w-9"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <Button
                          className="bg-green-600 hover:bg-green-700 text-white font-medium"
                          onClick={() => handleAddToCart(product.id)}
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-1 text-xs text-gray-500 dark:text-gray-400 flex items-center space-x-2">
                      <Shield className="h-4 w-4" />
                      <span>Secure payment & 30-day money back guarantee</span>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
