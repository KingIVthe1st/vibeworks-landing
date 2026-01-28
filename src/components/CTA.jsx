import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Calendar, MessageCircle, Sparkles } from 'lucide-react'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section className="py-16 sm:py-24" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-3xl overflow-hidden"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 animated-gradient" />
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48L2c+PC9zdmc+')] opacity-50" />
          
          {/* Floating sparkles */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute top-8 right-8 sm:top-12 sm:right-12"
          >
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white/30" />
          </motion.div>
          <motion.div 
            animate={{ y: [10, -10, 10], rotate: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12"
          >
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white/20" />
          </motion.div>
          
          {/* Content */}
          <div className="relative z-10 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            >
              Ready to stop being<br className="hidden sm:block" /> the bottleneck?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto"
            >
              Your competitors are already closing deals while you sleep.
              <br className="hidden md:block" />
              Let's build an AI that works as hard as you do.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <a
                href="#"
                className="group w-full sm:w-auto px-6 sm:px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-base sm:text-lg hover:shadow-xl hover:shadow-black/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mobile-tap"
              >
                <Calendar className="w-5 h-5" />
                Book Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold text-base sm:text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 mobile-tap"
              >
                <MessageCircle className="w-5 h-5" />
                Chat With Our AI
              </a>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 sm:mt-8 text-white/50 text-xs sm:text-sm"
            >
              Free 30-min consultation • No hard sell • See if we're a fit
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
