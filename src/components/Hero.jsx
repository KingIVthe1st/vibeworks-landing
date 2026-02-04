import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react'
import { useRef } from 'react'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient" />
      
      {/* Subtle ambient orbs */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/15 rounded-full blur-[150px] float"
      />
      <motion.div 
        style={{ y }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[130px] float-delayed"
      />
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/5 rounded-full blur-[180px] pulse-ring"
      />

      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center"
      >
        {/* Subtle badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8 sm:mb-10"
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-sm text-zinc-400 font-medium tracking-wide">Not a chatbot. A partner.</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold mb-6 sm:mb-8 leading-[1.05] tracking-tight text-balance"
        >
          What if you had
          <br />
          <span className="gradient-text">
            a clone?
          </span>
        </motion.h1>

        {/* Subheadline - CONVERSION OPTIMIZED */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Imagine waking up to DMs already answered, leads already qualified, 
          and a report on opportunities <span className="text-zinc-200">you would have missed</span>.{' '}
          Farrah is trained on <em>your</em> voice, <em>your</em> style, <em>your</em> business.{' '}
          <span className="text-zinc-200">She doesn't wait for commands. She hunts.</span>
        </motion.p>

        {/* Value props - UPDATED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 sm:mb-12 text-sm text-zinc-400"
        >
          {[
            'Proactive, not reactive', 
            'Custom-trained by experts', 
            'Gets smarter every day'
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-20"
        >
          <a
            href="#pricing"
            className="group w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 rounded-full font-semibold text-base hover:bg-zinc-100 transition-all duration-300 flex items-center justify-center gap-3 mobile-tap"
          >
            Get my AI clone
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#demo"
            className="w-full sm:w-auto px-8 py-4 glass rounded-full font-medium text-base hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 mobile-tap"
          >
            <Play className="w-4 h-4" />
            See it in action
          </a>
        </motion.div>

        {/* Social proof - UPDATED */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center gap-5"
        >
          <div className="flex -space-x-3">
            {['N', 'T', 'M', 'J'].map((letter, i) => (
              <div
                key={i}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-sm font-medium text-zinc-400"
              >
                {letter}
              </div>
            ))}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-800/50 border-2 border-zinc-900 flex items-center justify-center text-xs text-zinc-500">
              +50
            </div>
          </div>
          <p className="text-sm text-zinc-500">
            <span className="text-zinc-300">"I made back the setup cost in 11 days."</span> — Coach, 47K followers
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border border-zinc-700 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 bg-zinc-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
