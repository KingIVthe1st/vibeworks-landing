import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, ArrowRight, Play, CheckCircle2 } from 'lucide-react'
import { useRef } from 'react'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient" />
      
      {/* Premium orbs with better animation */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-[120px] float"
      />
      <motion.div 
        style={{ y }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[100px] float-delayed"
      />
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pulse-ring"
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTJoLTJ2Mmgyem0tNCAwdi0ySDMwdjJoMnptLTIgMGgtMnYyaDJ2LTJ6bTAgNHYyaDJ2LTJoLTJ6bTQgMGgtMnYyaDJ2LTJ6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9nPjwvc3ZnPg==')] opacity-40" />

      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center"
      >
        {/* Badge with shimmer */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-6 sm:mb-8"
        >
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span className="text-xs sm:text-sm text-indigo-300 font-medium">Your AI Employee is Ready</span>
        </motion.div>

        {/* Main headline - mobile optimized */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-[1.1] tracking-tight"
        >
          Stop Being the
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Bottleneck
          </span>
        </motion.h1>

        {/* Subheadline - improved copy */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2"
        >
          We build AI assistants that speak in your voice, know your business, and work 24/7—so you can{' '}
          <span className="text-white font-medium">scale without burning out</span>.
        </motion.p>

        {/* Value props - mobile stacked */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8 sm:mb-10 text-sm text-slate-400"
        >
          {['Voice Clone Tech', 'Lead Qualification', 'Multi-Platform'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons - mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          <a
            href="#pricing"
            className="group w-full sm:w-auto px-6 sm:px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-[length:200%_100%] rounded-xl font-semibold text-base sm:text-lg hover:bg-[position:100%_0] hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-500 flex items-center justify-center gap-2 btn-premium mobile-tap"
          >
            Get Your AI Employee
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#demo"
            className="w-full sm:w-auto px-6 sm:px-8 py-4 glass rounded-xl font-semibold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 mobile-tap"
          >
            <Play className="w-5 h-5" />
            See It In Action
          </a>
        </motion.div>

        {/* Social proof - refined */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex -space-x-3">
            {[
              'from-indigo-400 to-purple-500',
              'from-pink-400 to-rose-500',
              'from-amber-400 to-orange-500',
              'from-emerald-400 to-teal-500',
            ].map((gradient, i) => (
              <div
                key={i}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${gradient} border-2 border-slate-950 flex items-center justify-center text-xs sm:text-sm font-bold`}
              >
                {['S', 'M', 'E', 'J'][i]}
              </div>
            ))}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-xs sm:text-sm text-slate-400">
              +47
            </div>
          </div>
          <p className="text-sm text-slate-500">
            Trusted by <span className="text-slate-300">50+</span> coaches & creators
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - hidden on very small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
