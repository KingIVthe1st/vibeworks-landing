import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Mic2, Target, Clock } from 'lucide-react'
import { useVideoModal } from '../App'

const benefits = [
  {
    icon: Brain,
    title: "Trained on YOUR expertise",
    description: "We feed it your courses, podcasts, sales calls, emails. Your AI doesn't just know your business—it thinks like you.",
    tag: "Proprietary training"
  },
  {
    icon: Mic2,
    title: "Your voice. Literally.",
    description: "Send voice notes in your actual voice. Take calls as you. It's not an impression—it's indistinguishable from the real thing.",
    tag: "Neural voice clone"
  },
  {
    icon: Target,
    title: "Sells like you sell",
    description: "Same objection handling. Same closing cadence. We capture your sales DNA, not just your words.",
    tag: "Conversion optimized"
  },
  {
    icon: Clock,
    title: "Never. Stops. Working.",
    description: "3am in Tokyo? Handled. Sunday morning? On it. Your AI clone doesn't sleep, doesn't take PTO. Just results.",
    tag: "24/7 deployment"
  }
]

export default function Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { openVideo } = useVideoModal()

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
          <p className="text-indigo-400 font-medium mb-4 text-sm tracking-wide uppercase">Introducing Farrah AI</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight tracking-tight">
            What if you could{' '}
            <span className="gradient-text">clone yourself</span>?
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
            Not a chatbot. Not a template. A <span className="text-zinc-200 font-medium">digital twin</span>—
            trained on your content, speaking in your voice, converting like you do.
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

        {/* Demo visual - clickable to open video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <button 
            onClick={openVideo}
            className="w-full aspect-[21/9] glass rounded-3xl overflow-hidden flex items-center justify-center relative group cursor-pointer glow-hover"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-pink-600/10 opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
            
            <div className="text-center px-8 relative z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-zinc-300 font-medium mb-1">🎬 Watch: AI Clone in Action</p>
              <p className="text-zinc-500 text-sm">Click to see a 30-second explainer</p>
            </div>
          </button>
        </motion.div>

        {/* Proof point */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 text-center text-zinc-500"
        >
          <span className="text-indigo-400 font-medium">92% of clients</span> see positive ROI in the first 30 days.
        </motion.p>
      </div>
    </section>
  )
}
