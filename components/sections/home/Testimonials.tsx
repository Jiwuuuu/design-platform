"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "The design platform transformed our brand identity completely. Their attention to detail and creative approach exceeded all expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    content: "From branding to social media management, they handle everything seamlessly. Our engagement has increased by 300% since working with them.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, StyleHub",
    content: "Best investment we've made for our business. The team is responsive, creative, and delivers exceptional quality every time.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Don&apos;t just take our word for it
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-card border border-border h-full relative"
              >
                <Quote className="absolute top-6 right-6 text-primary/20" size={40} />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 relative z-10">
                  &quot;{testimonial.content}&quot;
                </p>

                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
