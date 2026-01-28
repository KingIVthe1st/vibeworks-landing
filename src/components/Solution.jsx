import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Bot, Mic, Brain, Zap, Sparkles } from 'lucide-react'

const benefits = [
  {
    icon: Brain,
    title: "Trained on YOUR Expertise",
    description: "We feed it your courses, your podcasts, your sales calls, your email sequences. It doesn't just know your business—it THINKS like you.",
    gradient: "from-blue-500/20 to-indigo-500/20"
  },
  {
    icon: Mic,
    title: "Your Voice. Literally.",
    description: "Send voice notes in your actual voice. Take calls as you. It's not an impression—it's indistinguishable from the real thing.",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Bot,
    title: "Sells Like You Sell",
    description: "Same objection handling. Same closing cadence. Same conversion psychology. We don't just copy your words—we capture your sales DNA.",
    gradient: "from-indigo-500/20 to-purple-500/20"
  },
  {
    icon: Zap,
    title: "Never. Stops. Working.",
    description: "3am in Tokyo? Handled. Sunday morning? On it. Your AI clone doesn't sleep, doesn't take PTO, doesn't need motivation. Just results.",
    gradient: "from-amber-500/20 to-orange-500/20"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

export default function Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[200px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4 sm:mb-6"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-300 font-medium">Introducing Vibeworks</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            What If You Could{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Clone Yourself
            </span>
            ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Not a chatbot. Not a template. A <span className="text-white font-medium">digital twin</span>—trained 
            on your content, speaking in your voice, converting like you do.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 gap-4 sm:gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group relative p-6 sm:p-8 glass rounded-2xl overflow-hidden card-hover"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                  <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Visual showcase - The "Picture" */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16 relative"
        >
          <div className="aspect-video sm:aspect-[21/9] glass rounded-2xl sm:rounded-3xl overflow-hidden flex items-center justify-center relative group cursor-pointer">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
            
            {/* Content */}
            <div className="text-center p-6 sm:p-8 relative z-10">
              <motion.div 
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl shadow-indigo-500/30"
              >
                <Bot className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
              </motion.div>
              <p className="text-slate-300 text-sm sm:text-base font-medium mb-2">🎬 Watch: AI Clone in Action</p>
              <p className="text-slate-500 text-xs sm:text-sm">See a real Vibeworks AI handling DMs, voice notes & sales calls</p>
            </div>
          </div>
          
          {/* Premium glow */}
          <div className="absolute -inset-px bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl sm:rounded-3xl blur-xl opacity-40 -z-10 group-hover:opacity-60 transition-opacity" />
        </motion.div>

        {/* Proof snippet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 sm:mt-10 text-center"
        >
          <p className="text-slate-400 text-sm sm:text-base">
            <span className="text-indigo-400 font-semibold">92% of our clients</span> see positive ROI in the first 30 days.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
