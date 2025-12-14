"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";

const categories = ["All", "Branding", "Web Design", "Mobile App", "Content", "Video"];

const portfolioItems = [
  {
    title: "TechCorp Rebranding",
    category: "Branding",
    color: "from-blue-500 to-cyan-500",
    description: "Complete brand identity redesign for a tech company",
  },
  {
    title: "FitLife Mobile App",
    category: "Mobile App",
    color: "from-green-500 to-emerald-500",
    description: "Health and fitness tracking app design",
  },
  {
    title: "Gourmet Restaurant Website",
    category: "Web Design",
    color: "from-orange-500 to-red-500",
    description: "Luxury restaurant website with online ordering",
  },
  {
    title: "Fashion Brand Campaign",
    category: "Content",
    color: "from-pink-500 to-purple-500",
    description: "Social media content creation and strategy",
  },
  {
    title: "SaaS Dashboard",
    category: "Web Design",
    color: "from-indigo-500 to-purple-500",
    description: "Modern SaaS platform interface design",
  },
  {
    title: "E-commerce Platform",
    category: "Web Design",
    color: "from-yellow-500 to-orange-500",
    description: "Full e-commerce website design and development",
  },
  {
    title: "Startup Brand Identity",
    category: "Branding",
    color: "from-teal-500 to-green-500",
    description: "Logo, guidelines, and brand materials",
  },
  {
    title: "Finance App UI",
    category: "Mobile App",
    color: "from-blue-500 to-indigo-500",
    description: "Banking and investment tracking app",
  },
  {
    title: "Product Launch Video",
    category: "Video",
    color: "from-fuchsia-500 to-pink-500",
    description: "Promotional video for product launch",
  },
  {
    title: "Travel Blog Content",
    category: "Content",
    color: "from-violet-500 to-purple-500",
    description: "Written content and photography",
  },
  {
    title: "Wellness Brand",
    category: "Branding",
    color: "from-cyan-500 to-blue-500",
    description: "Holistic wellness brand identity",
  },
  {
    title: "Educational Platform",
    category: "Web Design",
    color: "from-rose-500 to-pink-500",
    description: "Online learning platform design",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-background to-accent/30">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-space-grotesk mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Explore our latest projects and creative work
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 sticky top-20 bg-background/80 backdrop-blur-lg border-b border-border z-40">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-accent hover:bg-accent/80"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${activeCategory}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
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
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-2">
                          {item.category}
                        </span>
                        <h3 className="text-white text-2xl font-bold font-space-grotesk mb-2">
                          {item.title}
                        </h3>
                        <p className="text-white/90 text-sm">{item.description}</p>
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
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-muted-foreground">
                No projects found in this category
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              Want to See Your Project Here?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let&apos;s work together to create something amazing
            </p>
            <Button size="lg">Start Your Project</Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
