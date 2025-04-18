"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// FAQ data
const faqData = [
  {
    id: "gaming",
    title: "Gaming",
    questions: [
      {
        question: "What games can I play on Mythic Arena?",
        answer:
          "Mythic Arena offers a variety of games including BGMI, Call of Duty, Free Fire Max, and many other popular mobile and desktop games. We regularly add new titles to our platform.",
      },
      {
        question: "Do I need to download any software to play?",
        answer:
          "Most games on Mythic Arena can be played directly through your browser. For certain games, you might need to download our lightweight gaming client for optimal performance.",
      },
      {
        question: "Can I play on mobile devices?",
        answer:
          "Yes! Mythic Arena is fully optimized for mobile gaming. You can play on Android and iOS devices through our dedicated mobile app, which you can download from the respective app stores.",
      },
      {
        question: "How do skill-based matchmaking systems work?",
        answer:
          "Our skill-based matchmaking system pairs you with players of similar skill levels to ensure fair and competitive gameplay. The system evaluates your performance across several games to determine your skill rating.",
      },
    ],
  },
  {
    id: "tournaments",
    title: "Tournaments",
    questions: [
      {
        question: "How do I join a tournament?",
        answer:
          "To join a tournament, navigate to the 'Tournaments' page, browse available tournaments, and click 'Register Now' on the one you're interested in. You'll need to pay the entry fee and follow the registration instructions.",
      },
      {
        question: "What happens if I can't participate after registering?",
        answer:
          "If you can't participate after registering, you should notify us at least 24 hours before the tournament starts. While entry fees are generally non-refundable, we may offer credit for future tournaments depending on the circumstances.",
      },
      {
        question: "How are winners determined in tournaments?",
        answer:
          "Winner determination varies by tournament type. Most tournaments use a combination of placement points and elimination points. The specific rules for each tournament are clearly outlined on the tournament details page.",
      },
      {
        question: "When and how do I receive my tournament winnings?",
        answer:
          "Tournament winnings are credited to your Mythic Arena account within 24 hours after the end of the tournament. You can withdraw your winnings through our supported payment methods.",
      },
    ],
  },
  {
    id: "account",
    title: "Account & Payments",
    questions: [
      {
        question: "How do I create a Mythic Arena account?",
        answer:
          "Creating an account is simple. Click on 'Sign Up' at the top right of the website, provide your email, create a password, and verify your email address. You can then complete your profile and start playing.",
      },
      {
        question: "What payment methods are accepted?",
        answer:
          "We accept various payment methods including credit/debit cards, PayPal, UPI (for Indian users), and select cryptocurrencies. All payment processing is secure and compliant with industry standards.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Yes, we take data security very seriously. We use industry-standard encryption to protect your personal and payment information. Our privacy policy details how we collect, use, and protect your data.",
      },
      {
        question: "How can I reset my password?",
        answer:
          "To reset your password, click on 'Login', then select 'Forgot Password'. Enter your registered email address and we'll send you instructions to reset your password.",
      },
    ],
  },
  {
    id: "technical",
    title: "Technical Support",
    questions: [
      {
        question: "What are the minimum system requirements?",
        answer:
          "System requirements vary depending on the game. For browser-based games, you'll need a modern browser (Chrome, Firefox, Edge, or Safari) and a stable internet connection. Specific game requirements are listed on each game's page.",
      },
      {
        question: "I'm experiencing lag during gameplay. What can I do?",
        answer:
          "Lag can be caused by various factors. Try: 1) Ensuring you have a stable internet connection, 2) Closing other applications that may be using bandwidth, 3) Clearing your browser cache, or 4) Contacting our support if the issue persists.",
      },
      {
        question: "The game crashes frequently. How can I fix this?",
        answer:
          "If you're experiencing crashes, try updating your browser or app, clearing cache and cookies, or reinstalling the game. If problems persist, contact our support team with details about your device and the specific issue.",
      },
      {
        question: "How can I contact customer support?",
        answer:
          "You can contact our customer support team through the 'Contact' page on our website, via email at support@mythicarena.com, or through live chat available on our platform. Our support team is available 24/7.",
      },
    ],
  },
];

const Faq = () => {
  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Mythic Arena gaming platform,
            tournaments, payments, and technical support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {faqData.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-orange-500 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {category.id === "gaming" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5m0 0l9-5-9-5-9 5 9 5m0 0v8"
                    />
                  )}
                  {category.id === "tournaments" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  )}
                  {category.id === "account" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  )}
                  {category.id === "technical" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                  )}
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-1">{category.title}</h2>
              <p className="text-gray-600 text-sm">
                {category.questions.length} questions
              </p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((category) => (
            <div key={category.id} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">
                {category.title} <span className="text-orange-500">FAQs</span>
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={`${category.id}-q${index}`}
                    value={`${category.id}-q${index}`}
                    className="bg-white rounded-lg shadow-md px-4 py-2"
                  >
                    <AccordionTrigger className="text-lg font-medium text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 text-white max-w-3xl mx-auto mt-12">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="mb-6">
            Our support team is here to help with any questions you might have
            about Mythic Arena.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md text-center transition-colors duration-300"
            >
              Contact Support
            </a>
            <a
              href="mailto:support@mythicarena.com"
              className="bg-transparent hover:bg-white/10 border border-white/30 text-white font-medium py-3 px-6 rounded-md text-center transition-colors duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
