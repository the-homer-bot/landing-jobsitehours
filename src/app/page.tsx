"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  Users, 
  Shield, 
  DollarSign, 
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  Building2,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "hero" }),
      });

      if (res.ok) {
        router.push("/thank-you");
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong");
      }
    } catch {
      setError("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-orange-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white">JobSite Hours</span>
          </div>
          <Badge variant="secondary" className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            Coming Soon
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <Badge className="mb-6 bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 border-0">
              <AlertTriangle className="w-3 h-3 mr-1" />
              Built for contractors, cleaners & field teams
            </Badge>
          </motion.div>
          
          <motion.h1 
            {...fadeInUp}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Stop Losing Money on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Time Theft
            </span>
          </motion.h1>
          
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            GPS-verified time tracking that automatically clocks your workers in and out when they arrive at job sites. No buddy punching. No early clock-ins. No guesswork.
          </motion.p>

          <motion.form 
            onSubmit={handleSubmit}
            {...fadeInUp}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 bg-white dark:bg-gray-800 border-orange-200 dark:border-gray-700 focus:ring-orange-500"
            />
            <Button 
              type="submit" 
              disabled={loading}
              className="h-12 px-8 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold"
            >
              {loading ? "Joining..." : "Get Early Access"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.form>
          {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
          
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-sm text-gray-500 dark:text-gray-400 mt-4"
          >
            Join 847+ business owners already on the waitlist • No spam, ever
          </motion.p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              You&apos;re Bleeding Money Every Week
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Managing time across multiple job sites is a nightmare. And it&apos;s costing you more than you think.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: DollarSign,
                title: "Payroll Padding",
                description: "Workers clock in 10 minutes early, leave 10 minutes late on paper. That's 1.5+ hours of fake time per worker, per week.",
                stat: "$3,000+",
                statLabel: "lost per employee yearly"
              },
              {
                icon: Users,
                title: "Buddy Punching",
                description: "One worker clocks in for another who's running late or not showing up. You're paying for ghosts.",
                stat: "74%",
                statLabel: "of companies experience this"
              },
              {
                icon: Building2,
                title: "Wrong Location",
                description: "Workers clock in from home, from their car, or at the wrong job site. You can't verify where they actually are.",
                stat: "43%",
                statLabel: "of mobile workers admit to this"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 rounded-2xl border border-orange-100 dark:border-gray-800 bg-gradient-to-b from-orange-50/50 to-white dark:from-gray-800/50 dark:to-gray-900"
              >
                <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                <div className="pt-4 border-t border-orange-100 dark:border-gray-800">
                  <span className="text-2xl font-bold text-red-600 dark:text-red-400">{item.stat}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">{item.statLabel}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-0">
              <CheckCircle2 className="w-3 h-3 mr-1" />
              The Solution
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              GPS-Verified Time Tracking That Just Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Set up your job sites once. Your workers clock in automatically when they arrive. It&apos;s that simple.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  icon: MapPin,
                  title: "Geofenced Job Sites",
                  description: "Draw boundaries around your job sites. Workers can only clock in when physically present."
                },
                {
                  icon: Smartphone,
                  title: "Automatic Clock In/Out",
                  description: "The app detects when workers arrive and leave. No buttons to push, no times to remember."
                },
                {
                  icon: Shield,
                  title: "Photo Verification",
                  description: "Optional selfie at clock-in proves who's actually there. End buddy punching forever."
                },
                {
                  icon: Clock,
                  title: "Real-Time Dashboard",
                  description: "See who's at which site right now. Export clean timesheets for payroll in one click."
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-8 text-white">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold">Oak Street Renovation</p>
                      <p className="text-sm text-white/70">3 workers on site</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {["Mike Johnson", "Sarah Chen", "Carlos Rivera"].map((name, i) => (
                      <div key={i} className="flex items-center justify-between bg-white/10 rounded-xl p-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-medium">
                            {name.split(" ").map(n => n[0]).join("")}
                          </div>
                          <span className="font-medium">{name}</span>
                        </div>
                        <Badge className="bg-green-500/20 text-green-100 border-0">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          On Site
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl opacity-30"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Built for Small Businesses Like Yours
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
              Whether you run 2 crews or 20, JobSite Hours scales with you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: "🏗️", label: "General Contractors" },
              { icon: "🧹", label: "Cleaning Services" },
              { icon: "🌳", label: "Landscapers" },
              { icon: "⚡", label: "Electricians" },
              { icon: "🔧", label: "Plumbers" },
              { icon: "🏠", label: "Property Managers" },
              { icon: "🚚", label: "Delivery Teams" },
              { icon: "🛠️", label: "Handyman Services" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 rounded-xl bg-orange-50 dark:bg-gray-800"
              >
                <span className="text-3xl mb-2 block">{item.icon}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-orange-500 to-amber-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stop the Bleeding. Start Saving.
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 847+ business owners who are done losing money to time theft. Get early access and founding member pricing.
            </p>

            <form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-white"
              />
              <Button 
                type="submit" 
                disabled={loading}
                className="h-12 px-8 bg-white text-orange-600 hover:bg-white/90 font-semibold"
              >
                {loading ? "Joining..." : "Get Early Access"}
              </Button>
            </form>

            <p className="text-sm text-white/70 mt-4">
              ✓ Free for early adopters &nbsp; ✓ No credit card required &nbsp; ✓ Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-white">JobSite Hours</span>
          </div>
          <p className="text-sm">© 2025 JobSite Hours. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
