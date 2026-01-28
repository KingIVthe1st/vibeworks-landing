import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: "How fast can you build my AI?",
    answer: "Most projects launch in 1-2 weeks. That includes our discovery call, building & training your AI, configuring integrations, and your walkthrough. Complex setups with video cloning may take 2-3 weeks."
  },
  {
    question: "Will people know they're talking to AI?",
    answer: "Your choice. Many clients go transparent ('Hi! I'm Sarah's AI assistant'), others prefer seamless. We train your AI to handle the question gracefully either way. With voice cloning, it genuinely sounds like you."
  },
  {
    question: "What if it says something wrong?",
    answer: "We train your AI on your boundaries, values, and guidelines. It knows what to avoid, when to escalate to you, and how to stay on-brand. You can review transcripts anytime, and we continuously optimize based on real conversations."
  },
  {
    question: "Do I need technical skills?",
    answer: "Zero. We handle all the technical setup, integrations, and maintenance. You just show up for our discovery call and share your expertise. It's as simple as texting."
  },
  {
    question: "What platforms does it work on?",
    answer: "Website, Instagram DMs, WhatsApp, Facebook Messenger, email, Slack, Discord, and more. We'll recommend the best platforms based on where your audience already reaches out."
  },
  {
    question: "How is this different from ChatGPT?",
    answer: "ChatGPT is generic. Your Farrah AI is trained specifically on YOUR content, speaks in YOUR voice, knows YOUR business, and is optimized for YOUR sales process. It's the difference between a random temp and cloning your best employee."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes—no long-term contracts. Cancel your monthly plan anytime. We believe in earning your business every month. That said, most clients stay because the ROI is undeniable."
  },
  {
    question: "What makes Farrah AI different from other AI tools?",
    answer: "We've built proprietary technology for voice synthesis, knowledge extraction, and conversion optimization over 18 months. We're not a wrapper around ChatGPT—we've developed specialized infrastructure for expertise replication."
  }
]

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className={`border-b border-zinc-800/50 ${isOpen ? 'bg-zinc-900/30' : ''} transition-colors duration-300`}>
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:bg-zinc-900/20 transition-colors duration-300 mobile-tap"
      >
        <span className="font-medium text-base sm:text-lg pr-8 text-zinc-100">{faq.question}</span>
        <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center flex-shrink-0">
          {isOpen ? (
            <Minus className="w-4 h-4 text-zinc-400" />
          ) : (
            <Plus className="w-4 h-4 text-zinc-400" />
          )}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-zinc-400 leading-relaxed pr-12">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-zinc-950/50" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-indigo-400 font-medium mb-4 text-sm tracking-wide uppercase">FAQ</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            Questions? <span className="text-indigo-400">Answered.</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl overflow-hidden px-6 sm:px-8"
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

        {/* Contact note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-zinc-500"
        >
          Still have questions?{' '}
          <a href="mailto:hello@farrah.ai" className="text-indigo-400 hover:text-indigo-300 transition-colors">
            hello@farrah.ai
          </a>
        </motion.p>
      </div>
    </section>
  )
}
