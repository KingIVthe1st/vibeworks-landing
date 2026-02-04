import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Mic2, Target, Clock } from 'lucide-react'
import ChatDemo from './ChatDemo'

const benefits = [
  {
    icon: Brain,
    title: "Trained on YOUR business",
    description: "We feed it your content, your sales style, your way of talking. It doesn't just know your business—it thinks like you.",
    tag: "Custom training"
  },
  {
    icon: Mic2,
    title: "Your voice. Literally.",
    description: "Voice notes in your actual voice. Responses that sound like you wrote them. It's indistinguishable from the real thing.",
    tag: "Neural voice clone"
  },
  {
    icon: Target,
    title: "Handles what drowns you",
    description: "DMs, emails, customer inquiries, scheduling, follow-ups. The stuff that eats your day? Gone.",
    tag: "Task automation"
  },
  {
    icon: Clock,
    title: "Never. Stops. Working.",
    description: "3am inquiry? Handled. Sunday morning? On it. Your AI clone doesn't sleep, doesn't take breaks. Just results.",
    tag: "24/7 operation"
  }
]

export default function Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 sm:py-32 lg:py-40 relative overflow-hidden" ref={ref}>
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-indigo-500/5 rounded-full blur-[200px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <p className="text-indigo-400 font-medium mb-4 text-sm tracking-wide uppercase">Meet Farrah AI</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight tracking-tight">
            Your digital{' '}
            <span className="gradient-text">twin</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
            Not a chatbot. Not a template. A <span className="text-zinc-200 font-medium">clone of you</span>—
            trained on your expertise, speaking in your voice, working while you sleep.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-16 sm:mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 sm:p-10 glass rounded-2xl card-hover"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors duration-500">
                  <benefit.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <span className="px-3 py-1 bg-zinc-800/80 rounded-full text-xs font-medium text-zinc-500">
                  {benefit.tag}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-zinc-100">
                {benefit.title}
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Chat Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-center mb-8">
            <p className="text-indigo-400 font-medium text-sm uppercase tracking-wide mb-2">See It In Action</p>
            <h3 className="text-2xl sm:text-3xl font-semibold text-zinc-100">Watch Farrah handle real scenarios</h3>
          </div>
          <ChatDemo />
        </motion.div>

        {/* Proof point */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center text-zinc-500"
        >
          <span className="text-indigo-400 font-medium">92% of clients</span> see positive ROI in the first 30 days.
        </motion.p>
      </div>
    </section>
  )
}
