"use client";

import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import Link from "next/link";
import Button from "@/components/ui/Button";

const pricingTiers = [
  {
    name: "Starter",
    price: "$999",
    period: "/month",
    description: "Perfect for small businesses and startups",
    features: [
      "Brand identity design",
      "Website design (5 pages)",
      "Social media graphics (10/month)",
      "2 revisions per project",
      "Email support",
      "Monthly strategy call",
    ],
    unavailable: [
      "Video production",
      "Paid advertising",
      "Dedicated account manager",
      "Priority support",
    ],
    color: "from-blue-500 to-cyan-500",
    popular: false,
  },
  {
    name: "Professional",
    price: "$2,499",
    period: "/month",
    description: "Ideal for growing businesses",
    features: [
      "Everything in Starter",
      "Mobile app design",
      "Video production (2/month)",
      "Written content (10 articles)",
      "Social media management",
      "Paid advertising management",
      "Unlimited revisions",
      "Priority email & chat support",
      "Bi-weekly strategy calls",
    ],
    unavailable: ["Dedicated account manager", "24/7 phone support"],
    color: "from-purple-500 to-pink-500",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with complex needs",
    features: [
      "Everything in Professional",
      "Unlimited design projects",
      "Custom video production",
      "Multilingual content",
      "Advanced analytics",
      "API access",
      "Dedicated account manager",
      "24/7 priority support",
      "Weekly strategy sessions",
      "Custom integrations",
      "White-label solutions",
    ],
    unavailable: [],
    color: "from-orange-500 to-red-500",
    popular: false,
  },
];

const faqs = [
  {
    question: "Can I change my plan later?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers for enterprise accounts.",
  },
  {
    question: "Is there a contract or commitment?",
    answer:
      "No long-term contracts required. You can cancel anytime with 30 days notice.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 30-day money-back guarantee if you're not satisfied with our services.",
  },
  {
    question: "Can I add extra services?",
    answer:
      "Absolutely! We offer à la carte services that can be added to any plan.",
  },
];

export default function PricingPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-background to-accent/30">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-space-grotesk mb-6">
                Simple, Transparent{" "}
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Choose the perfect plan for your business needs
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`relative h-full p-8 rounded-2xl bg-card border-2 transition-all duration-300 ${
                    tier.popular
                      ? "border-primary shadow-xl shadow-primary/20"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-purple-500 text-white text-sm font-medium">
                        <Sparkles size={14} />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}

                  <div
                    className={`inline-flex px-4 py-2 rounded-xl bg-gradient-to-br ${tier.color} text-white font-semibold mb-4`}
                  >
                    {tier.name}
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold font-space-grotesk">
                        {tier.price}
                      </span>
                      <span className="text-muted-foreground">{tier.period}</span>
                    </div>
                    <p className="text-muted-foreground mt-2">{tier.description}</p>
                  </div>

                  <Link href="/contact">
                    <Button
                      variant={tier.popular ? "primary" : "outline"}
                      className="w-full mb-6"
                    >
                      Get Started
                    </Button>
                  </Link>

                  <div className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {tier.unavailable.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <X size={20} className="text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about our pricing
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl bg-card border border-border"
                >
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
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
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us for a tailored package that fits your unique requirements
            </p>
            <Link href="/contact">
              <Button size="lg">Contact Sales</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
