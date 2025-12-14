"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Smartphone,
  Globe,
  Briefcase,
  FileText,
  Video,
  Image as ImageIcon,
  MessageSquare,
  Mail,
  Languages,
  Share2,
  Calendar,
} from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const services = [
  {
    icon: Palette,
    title: "Visual Brand Identity",
    description: "Create memorable brand identities that stand out",
  },
  {
    icon: Smartphone,
    title: "Mobile App Design",
    description: "Intuitive and beautiful mobile experiences",
  },
  {
    icon: Globe,
    title: "Website Design",
    description: "Stunning websites that convert visitors",
  },
  {
    icon: Briefcase,
    title: "Corporate Identity",
    description: "Professional business identity design",
  },
  {
    icon: FileText,
    title: "Content Creation",
    description: "Engaging written content that resonates",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "High-quality video content for your brand",
  },
  {
    icon: ImageIcon,
    title: "Image Creation",
    description: "Static and animated visuals that captivate",
  },
  {
    icon: MessageSquare,
    title: "Client Communication",
    description: "Streamlined communication tools",
  },
  {
    icon: Mail,
    title: "Professional Email",
    description: "Business email solutions",
  },
  {
    icon: Languages,
    title: "Multilingual Content",
    description: "Content in any language you need",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Complete social media management",
  },
  {
    icon: Calendar,
    title: "Content Scheduling",
    description: "Automated content posting",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-accent/30">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
              Everything Your Brand Needs
            </h2>
            <p className="text-xl text-muted-foreground">
              A comprehensive suite of design and content services under one roof
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <service.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
