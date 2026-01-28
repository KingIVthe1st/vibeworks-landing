import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, Wrench, Rocket, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery Call",
    description: "We map your business DNA—your voice, your methodology, your conversion patterns. This becomes your AI's foundation.",
    duration: "60-90 min call",
    color: "indigo"
  },
  {
    number: "02",
    icon: Wrench,
    title: "We Build Your Clone",
    description: "Our team trains your AI on your content, configures integrations, and fine-tunes until it's indistinguishable from you.",
    duration: "7-14 days",
    color: "purple"
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Scale",
    description: "Go live. We monitor, optimize, and iterate. Your AI gets smarter every week. You get your life back.",
    duration: "Ongoing partnership",
    color: "pink"
  }
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-900/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-indigo-400 font-semibold mb-3 sm:mb-4 text-sm tracking-wider uppercase">How It Works</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            AI employee in{' '}
            <span className="text-indigo-400">2 weeks</span>,<br className="sm:hidden" />
            {' '}not 2 months
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            We handle everything. You show up for one call, share your expertise, and we do the rest.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent hidden lg:block" />

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                <div className="p-6 sm:p-8 glass rounded-2xl h-full card-hover">
                  {/* Step number badge */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.15, type: "spring" }}
                    className={`absolute -top-4 left-6 sm:left-8 px-4 py-1.5 bg-gradient-to-r from-${step.color}-500 to-${step.color}-600 rounded-full text-sm font-bold shadow-lg`}
                  >
                    {step.number}
                  </motion.div>
                  
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-${step.color}-500/10 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 mt-2 group-hover:bg-${step.color}-500/20 group-hover:scale-110 transition-all duration-500`}>
                    <step.icon className={`w-7 h-7 sm:w-8 sm:h-8 text-${step.color}-400`} />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm sm:text-base mb-4 leading-relaxed">{step.description}</p>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-full text-sm text-slate-300">
                    <span className={`w-2 h-2 bg-${step.color}-400 rounded-full`} />
                    {step.duration}
                  </div>
                </div>

                {/* Arrow between cards - desktop only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-slate-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors group"
          >
            See what's included in each package
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
