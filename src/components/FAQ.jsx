import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: "How is this different from ChatGPT or other AI tools?",
    answer: "ChatGPT is a generic tool that waits for you to tell it what to do. Farrah is custom-trained on YOUR business, YOUR voice, YOUR sales style — and she's proactive. She comes to YOU with opportunities, alerts, and ideas. She doesn't just answer questions; she anticipates what you need. Plus, she's set up by experts (not self-serve), gets smarter every day, and works across all your platforms — voice, text, calls, everything."
  },
  {
    question: "Will it actually sound like me?",
    answer: "Yes. We train it on YOUR voice, your phrases, your communication style. We've had clients' teams not realize they were talking to AI. It's not a generic chatbot—it's a clone of how YOU communicate."
  },
  {
    question: "What if it says something wrong?",
    answer: "You approve responses initially and set guardrails. It learns your preferences over time. For sensitive situations, you can always step in. Think of it like training a really smart employee—except it learns 100x faster."
  },
  {
    question: "I've tried chatbots before. They suck.",
    answer: "We hear this all the time. Traditional chatbots ARE terrible—they're generic templates that feel robotic. Farrah is different. It's trained specifically on YOUR business, YOUR methodology, YOUR voice. It's a clone, not a chatbot."
  },
  {
    question: "How long does setup take?",
    answer: "2 weeks to go live. We handle everything—you just do a voice interview and share your existing content (emails, DMs, sales scripts). Most clients are surprised how painless it is."
  },
  {
    question: "What can it actually handle?",
    answer: "DMs, emails, customer inquiries, scheduling, lead qualification, follow-ups, FAQ responses, booking calls—basically anything that eats your time and doesn't require YOU specifically. We customize based on what's drowning you."
  },
  {
    question: "Is my data safe?",
    answer: "Yes. Enterprise-grade security. Your data trains only YOUR AI—it's never shared with other clients or used to train other models. We're SOC 2 compliant and take privacy seriously."
  },
  {
    question: "Can it handle multiple platforms?",
    answer: "Absolutely. Instagram DMs, WhatsApp, email, website chat, SMS—we deploy across all your channels so you're covered everywhere your customers reach out."
  },
  {
    question: "What if I want to cancel?",
    answer: "No contracts, no BS. Cancel anytime. We're confident you won't want to—most clients see ROI in the first 2 weeks—but you're never locked in."
  }
]

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b border-zinc-800 last:border-0"
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-zinc-100 pr-8 group-hover:text-white transition-colors">
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          isOpen ? 'bg-indigo-500 rotate-180' : 'bg-zinc-800 group-hover:bg-zinc-700'
        }`}>
          {isOpen ? (
            <Minus className="w-4 h-4 text-white" />
          ) : (
            <Plus className="w-4 h-4 text-zinc-400" />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-zinc-400 leading-relaxed pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-24 sm:py-32 lg:py-40" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 sm:mb-20"
        >
          <p className="text-indigo-400 font-medium mb-4 text-sm tracking-wide uppercase">Questions?</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            Let's clear things up
          </h2>
        </motion.div>

        {/* FAQ list */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-6 sm:p-10"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-zinc-500">
            Still have questions?{' '}
            <a href="#pricing" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
              Book a call
            </a>
            {' '}and we'll answer everything.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
