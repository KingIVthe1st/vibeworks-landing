import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { X, Check, Zap, Brain, Users, TrendingUp, Mic, MessageSquare } from 'lucide-react'

const comparisons = [
  {
    generic: "Waits for your commands",
    farrah: "Comes to you with opportunities",
    icon: Zap
  },
  {
    generic: "Template responses",
    farrah: "Trained on YOUR voice + style",
    icon: Mic
  },
  {
    generic: "Self-serve 'upload your docs'",
    farrah: "White-glove setup by experts",
    icon: Users
  },
  {
    generic: "Static — same as day one",
    farrah: "Gets smarter every single day",
    icon: TrendingUp
  },
  {
    generic: "Just a chatbot",
    farrah: "Voice, calls, research, everywhere",
    icon: MessageSquare
  },
  {
    generic: "Robotic and corporate",
    farrah: "Real personality (actually fun)",
    icon: Brain
  }
]

const proactiveExamples = [
  {
    time: "6:47 AM",
    message: "Good morning! ☀️ While you were sleeping, I built out a landing page for that coaching program idea we talked about. It's live on a test URL — check it out and let me know what you'd change. I also drafted the email sequence to go with it."
  },
  {
    time: "7:32 AM",
    message: "Quick heads up — your competitor dropped their prices overnight by 15%. I pulled together 3 response strategies with pros/cons. Want to review before your 9am call?"
  },
  {
    time: "2:15 PM", 
    message: "You have a call with Sarah in 45 min. I researched her company — they just raised $2M and are scaling fast. Here's a one-pager on what I'd pitch her and the objections she'll probably raise."
  }
]

export default function WhyDifferent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-zinc-950/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <p className="text-indigo-400 font-medium mb-4 text-sm tracking-wide uppercase">The Difference</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight tracking-tight">
            This isn't another{' '}
            <span className="text-zinc-500 line-through">AI tool</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
            You've seen the chatbots. The "AI assistants" that feel like talking to a wall. 
            <span className="text-zinc-200"> Farrah is different.</span>
          </p>
        </motion.div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-20">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 glass rounded-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span className="text-zinc-500 text-sm line-through truncate">{item.generic}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-zinc-200 text-sm font-medium">{item.farrah}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proactive AI section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass rounded-3xl p-8 sm:p-12 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px]" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 font-medium text-sm uppercase tracking-wide">Proactive AI</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-zinc-100">
              She doesn't wait. She works.
            </h3>
            <p className="text-zinc-400 mb-8 max-w-2xl">
              Most AI sits there waiting for you to ask something. Farrah comes to YOU — 
              with opportunities, alerts, and ideas. Like a partner who's always thinking about your business.
            </p>

            {/* Example messages */}
            <div className="space-y-4">
              {proactiveExamples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="w-16 text-xs text-zinc-600 pt-1 flex-shrink-0">{example.time}</div>
                  <div className="flex-1 p-4 bg-zinc-800/50 rounded-2xl rounded-tl-sm border border-zinc-700/50">
                    <p className="text-zinc-300 text-sm leading-relaxed">{example.message}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-8 text-zinc-500 text-sm italic">
              Real examples from real Farrah users. She doesn't just respond — she anticipates.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
