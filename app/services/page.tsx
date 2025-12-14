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
  Check,
} from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import Link from "next/link";
import Button from "@/components/ui/Button";

const services = [
  {
    icon: Palette,
    title: "Visual Brand Identity Design",
    description: "Comprehensive brand identity that captures your essence",
    features: [
      "Logo design & variations",
      "Brand guidelines",
      "Color palette creation",
      "Typography selection",
      "Brand asset library",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Interface Design",
    description: "Beautiful, intuitive mobile experiences",
    features: [
      "iOS & Android design",
      "User flow optimization",
      "Interactive prototypes",
      "Design systems",
      "App icon design",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Website Interface Design",
    description: "Stunning websites that convert",
    features: [
      "Responsive web design",
      "Landing page design",
      "E-commerce design",
      "Web app interfaces",
      "Design handoff",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Briefcase,
    title: "Corporate Identity Design",
    description: "Professional business identity solutions",
    features: [
      "Business cards",
      "Letterheads",
      "Email signatures",
      "Presentation templates",
      "Marketing materials",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: FileText,
    title: "Written Content Creation",
    description: "Compelling content that engages",
    features: [
      "Website copy",
      "Blog articles",
      "Product descriptions",
      "SEO content",
      "Marketing copy",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Professional video content",
    features: [
      "Promotional videos",
      "Explainer animations",
      "Social media videos",
      "Video editing",
      "Motion graphics",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: ImageIcon,
    title: "Static & Animated Image Creation",
    description: "Eye-catching visual content",
    features: [
      "Social media graphics",
      "Banner ads",
      "Infographics",
      "GIF animations",
      "Illustrations",
    ],
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: MessageSquare,
    title: "Client Communication Tools",
    description: "Streamlined client interaction",
    features: [
      "Project management",
      "Real-time chat",
      "File sharing",
      "Feedback systems",
      "Status tracking",
    ],
    color: "from-teal-500 to-green-500",
  },
  {
    icon: Mail,
    title: "Professional Email Services",
    description: "Business email solutions",
    features: [
      "Custom domain email",
      "Email templates",
      "Newsletter design",
      "Email automation",
      "Analytics tracking",
    ],
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Languages,
    title: "Multilingual Article & Post Writing",
    description: "Content in any language",
    features: [
      "Professional translation",
      "Native writers",
      "Cultural adaptation",
      "SEO localization",
      "Global reach",
    ],
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Complete social media solutions",
    features: [
      "Content strategy",
      "Post scheduling",
      "Community management",
      "Paid advertising",
      "Analytics & reporting",
    ],
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: Calendar,
    title: "Content Scheduling",
    description: "Automated content posting",
    features: [
      "Multi-platform scheduling",
      "Content calendar",
      "Best time optimization",
      "Bulk uploading",
      "Performance tracking",
    ],
    color: "from-cyan-500 to-blue-500",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-background to-accent/30">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-space-grotesk mb-6">
                Complete Design &{" "}
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Content Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Everything you need to build, grow, and manage your brand in one platform
              </p>
              <Link href="/contact">
                <Button size="lg">Get Started Today</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6`}
                  >
                    <service.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold font-space-grotesk mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check size={16} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the services you need or let us create a custom package for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
