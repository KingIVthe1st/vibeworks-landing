import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: "How fast can you build my AI?",
    answer: "Most projects launch in 1-2 weeks. That includes our discovery call, building & training your AI, configuring integrations, and your walkthrough. Complex setups with video cloning or extensive integrations may take 2-3 weeks."
  },
  {
    question: "Will people know they're talking to AI?",
    answer: "Your choice. Many clients go transparent (\"Hi! I'm Sarah's AI assistant\"), others prefer seamless. We train your AI to handle the 'are you a robot?' question gracefully either way. With voice cloning, it genuinely sounds like you."
  },
  {
    question: "What if it says something wrong?",
    answer: "We train your AI on your boundaries, values, and guidelines. It knows what to avoid, when to escalate to you, and how to stay on-brand. Plus we continuously optimize based on real conversations. You can review transcripts anytime."
  },
  {
    question: "Do I need technical skills?",
    answer: "Zero. We handle all the technical setup, integrations, and maintenance. You just show up for our discovery call and share your expertise. It's designed to be as simple as texting."
  },
  {
    question: "What platforms does it work on?",
    answer: "Website, Instagram DMs, WhatsApp, Facebook Messenger, email, Slack, Discord, and more. We'll recommend the best platforms based on where your audience already reaches out."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes—no long-term contracts. Cancel your monthly plan anytime. We believe in earning your business every month. That said, most clients stay because the ROI is undeniable."
  },
  {
    question: "How is this different from ChatGPT?",
    answer: "ChatGPT is generic. Your Vibeworks AI is trained specifically on YOUR content, speaks in YOUR voice, knows YOUR business, and is optimized for YOUR sales process. It's the difference between a random temp and cloning your best employee."
  },
  {
    question: "How do you train it on my content?",
    answer: "We ingest everything—blog posts, podcasts, courses, social media, FAQs, sales scripts, email sequences. The more content, the better. We also do a deep discovery session to capture nuances that aren't written down."
  }
]

function FAQItem({ faq, isOpen, onClick, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`border-b border-slate-700/50 ${isOpen ? 'bg-slate-800/30' : ''} transition-colors duration-300`}
    >
      <button
        onClick={onClick}
        className="w-full py-5 sm:py-6 px-4 sm:px-6 flex items-center justify-between text-left hover:bg-slate-800/20 transition-colors duration-300 mobile-tap"
      >
        <span className="font-semibold text-sm sm:text-base md:text-lg pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
        </motion.div>
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
            <p className="px-4 sm:px-6 pb-5 sm:pb-6 text-slate-400 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-900/50" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4 sm:mb-6"
          >
            <HelpCircle className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-300 font-medium">FAQ</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Questions?{' '}
            <span className="text-indigo-400">Answered.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400">
            Everything you need to know. If you don't see it, just ask.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl sm:rounded-3xl overflow-hidden"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-10 text-center"
        >
          <p className="text-slate-400 text-sm sm:text-base">
            Still have questions?{' '}
            <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
              Chat with our AI
            </a>{' '}
            or{' '}
            <a href="mailto:hello@vibeworks.ai" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
              email us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
