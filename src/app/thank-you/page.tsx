"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Clock,
  Gift,
  ArrowRight,
  Twitter,
  Linkedin
} from "lucide-react";
import Link from "next/link";

export default function ThankYou() {
  const shareText = "Just signed up for JobSite Hours - GPS time tracking that automatically clocks workers in/out at job sites. No more time theft! 🏗️⏰";
  const shareUrl = typeof window !== "undefined" ? window.location.origin : "https://landing-jobsitehours.vercel.app";

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-950 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 className="w-10 h-10 text-white" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Badge className="mb-4 bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 border-0">
            <Gift className="w-3 h-3 mr-1" />
            Founding Member
          </Badge>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            You&apos;re In! 🎉
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Welcome to the JobSite Hours founding members list. You&apos;ll be among the first to know when we launch, plus you&apos;ll get exclusive early-bird pricing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-orange-100 dark:border-gray-700 mb-8"
        >
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4">
            What&apos;s Next?
          </h2>
          <ul className="text-left space-y-3">
            {[
              "Check your inbox for a welcome email",
              "We'll notify you as soon as we launch",
              "Founding members get 50% off for life"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Know someone else struggling with time tracking?
          </p>
          
          <div className="flex justify-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank')}
              className="border-orange-200 hover:bg-orange-50 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <Twitter className="w-4 h-4 mr-2" />
              Tweet
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')}
              className="border-orange-200 hover:bg-orange-50 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>

          <div className="pt-6">
            <Link href="/">
              <Button variant="ghost" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-gray-800">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to Home
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 pt-6 border-t border-orange-100 dark:border-gray-800"
        >
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Clock className="w-4 h-4" />
            <span>JobSite Hours</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
