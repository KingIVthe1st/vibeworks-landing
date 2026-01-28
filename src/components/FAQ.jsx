import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "How long does it take to set up my AI assistant?",
    answer: "Most projects take 1-2 weeks from kickoff to launch. This includes our discovery session, building and training your AI, integrations, and your training on how to work with it. Complex setups with video cloning or extensive integrations may take 2-3 weeks."
  },
  {
    question: "Will my audience know they're talking to an AI?",
    answer: "That's up to you. Many clients choose to be transparent (\"Hi, I'm Sarah's AI assistant!\"), while others prefer a seamless experience. We train your AI to handle the 'are you a robot?' question gracefully either way. With voice cloning, it truly sounds like you."
  },
  {
    question: "What if the AI says something wrong or off-brand?",
    answer: "We train your AI on your boundaries, values, and guidelines. It knows what topics to avoid, when to escalate to you, and how to stay on-brand. Plus, we continuously optimize based on real conversations. You can always review transcripts and give feedback."
  },
  {
    question: "Do I need any technical skills?",
    answer: "None at all. We handle all the technical setup, integrations, and maintenance. You just need to show up for our discovery session and share your expertise. We'll train you on how to work with your AI, but it's designed to be as simple as texting a friend."
  },
  {
    question: "What platforms does it work on?",
    answer: "Your AI can be deployed on your website, Instagram DMs, WhatsApp, Facebook Messenger, email, Slack, Discord, and more. We'll recommend the best platforms based on where your audience already reaches out."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, there are no long-term contracts. Cancel your monthly plan anytime. We believe in earning your business every month. That said, most clients stay because the ROI is undeniable."
  },
  {
    question: "What's the difference between this and ChatGPT?",
    answer: "ChatGPT is a general AI. Your Vibeworks AI is trained specifically on YOUR content, speaks in YOUR voice, knows YOUR business, and is optimized for YOUR goals. It's the difference between hiring a random temp and cloning your best employee."
  },
  {
    question: "How do you train the AI on my content?",
    answer: "We ingest your existing content—blog posts, podcasts, courses, social media, FAQs, sales scripts, email sequences, and more. The more content you have, the better your AI represents you. We also conduct a deep discovery session to capture nuances that aren't in your content."
  }
]

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div 
      className={`border-b border-slate-700/50 ${isOpen ? 'bg-slate-800/30' : ''}`}
    >
      <button
        onClick={onClick}
        className="w-full py-6 px-6 flex items-center justify-between text-left hover:bg-slate-800/20 transition-colors"
      >
        <span className="font-semibold text-lg pr-8">{faq.question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-slate-400 leading-relaxed">{faq.answer}</p>
      </motion.div>
    </div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-24 bg-slate-900/50" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-semibold mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Got <span className="text-indigo-400">questions?</span>
          </h2>
          <p className="text-xl text-slate-400">
            We've got answers. If you don't see yours, just ask.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden"
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
      </div>
    </section>
  )
}
