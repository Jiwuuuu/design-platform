"use client";

import { motion } from "framer-motion";
import { Target, Heart, Zap, Users } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import Link from "next/link";
import Button from "@/components/ui/Button";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every project, delivering quality that exceeds expectations.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do, and it shows in our creative solutions and dedication.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of trends, bringing cutting-edge design and technology to our clients.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We view our clients as partners, working together to achieve their goals.",
  },
];

const milestones = [
  { year: "2018", title: "Founded", description: "Started with a vision to revolutionize design services" },
  { year: "2019", title: "First 100 Clients", description: "Reached our first major milestone" },
  { year: "2020", title: "Global Expansion", description: "Expanded services to international markets" },
  { year: "2022", title: "Award Recognition", description: "Won multiple industry awards for excellence" },
  { year: "2023", title: "500+ Projects", description: "Delivered over 500 successful projects" },
  { year: "2024", title: "Platform Launch", description: "Launched integrated design platform" },
];

const team = [
  { name: "Sarah Johnson", role: "CEO & Founder", image: "from-purple-500 to-pink-500" },
  { name: "Michael Chen", role: "Creative Director", image: "from-blue-500 to-cyan-500" },
  { name: "Emily Rodriguez", role: "Head of Design", image: "from-green-500 to-emerald-500" },
  { name: "David Kim", role: "Technology Lead", image: "from-orange-500 to-red-500" },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-background to-accent/30">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-space-grotesk mb-6">
                Designing the{" "}
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Future
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                We&apos;re a team of passionate designers and creators helping businesses tell their stories through exceptional design and content.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <FadeIn direction="right">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2018, DesignPlatform started with a simple mission: make world-class design and content creation accessible to businesses of all sizes.
                  </p>
                  <p>
                    What began as a small team of passionate designers has grown into a comprehensive platform serving hundreds of clients worldwide. We&apos;ve evolved from a traditional agency into an integrated platform that combines cutting-edge design, content creation, and technology.
                  </p>
                  <p>
                    Today, we&apos;re proud to offer a complete suite of services that help businesses build their brand, create compelling content, and connect with their audience across all channels.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 backdrop-blur-sm border border-border">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 p-8 w-full">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: i * 0.1,
                            type: "spring",
                          }}
                          className="aspect-square rounded-lg bg-gradient-to-br from-primary/40 to-purple-500/40 backdrop-blur-sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="text-center p-8 rounded-2xl bg-card border border-border h-full"
                >
                  <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary mb-4">
                    <value.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold font-space-grotesk mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                Key milestones in our growth
              </p>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex gap-8 items-center ${
                    index % 2 === 1 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 text-right">
                    {index % 2 === 0 && (
                      <div className="p-6 rounded-2xl bg-card border border-border">
                        <h3 className="text-2xl font-bold font-space-grotesk mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    {index % 2 === 1 && (
                      <div className="p-6 rounded-2xl bg-card border border-border">
                        <h3 className="text-2xl font-bold font-space-grotesk mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground">
                The talented people behind the magic
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="text-center"
                >
                  <div
                    className={`aspect-square rounded-2xl bg-gradient-to-br ${member.image} mb-4`}
                  />
                  <h3 className="text-xl font-bold font-space-grotesk mb-1">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              Join Us on Our Journey
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let&apos;s create something amazing together
            </p>
            <Link href="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
