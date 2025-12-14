"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

const portfolioItems = [
  {
    title: "TechCorp Rebranding",
    category: "Brand Identity",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "FitLife Mobile App",
    category: "Mobile Design",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Gourmet Website",
    category: "Web Design",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Fashion Campaign",
    category: "Content Creation",
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "E-commerce Platform",
    category: "Web Design",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-accent/30">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div className="max-w-2xl mb-6 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
                Featured Work
              </h2>
              <p className="text-xl text-muted-foreground">
                Explore our latest projects and success stories
              </p>
            </div>
            <Link href="/portfolio">
              <Button variant="outline" className="group">
                View All Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-card">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-white/80 text-sm mb-1">{item.category}</p>
                    <h3 className="text-white text-2xl font-bold font-space-grotesk">
                      {item.title}
                    </h3>
                  </motion.div>
                </div>
                <motion.div
                  className="absolute inset-0 bg-black/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
