import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, Wrench, Rocket } from 'lucide-react'

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "We dive deep into your business—your audience, your content, your voice, your workflows. We identify exactly where AI can multiply your impact.",
    duration: "1-2 hours"
  },
  {
    number: "02",
    icon: Wrench,
    title: "Build & Train",
    description: "We build your custom AI assistant, train it on your content, configure integrations, and fine-tune until it represents you perfectly.",
    duration: "1-2 weeks"
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Optimize",
    description: "Your AI goes live. We handle the handoff, train you to work with it, and continuously optimize based on real conversations.",
    duration: "Ongoing"
  }
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-slate-900/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-semibold mb-4">HOW IT WORKS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From idea to AI employee in <span className="text-indigo-400">weeks, not months</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We handle everything. You just show up, share your expertise, and watch your AI come to life.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 hidden lg:block" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="p-8 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-indigo-500/30 transition-colors h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8 px-3 py-1 bg-indigo-500 rounded-full text-sm font-bold">
                    {step.number}
                  </div>
                  
                  <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 mt-2">
                    <step.icon className="w-7 h-7 text-indigo-400" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-slate-400 mb-4">{step.description}</p>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full" />
                    {step.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
