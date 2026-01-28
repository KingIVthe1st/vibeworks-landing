import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: "01",
    title: "Capture",
    description: "We ingest your content library—courses, podcasts, sales calls, emails. Our Knowledge Distillation Engine extracts expertise, voice patterns, and conversion psychology.",
    duration: "Day 1-3"
  },
  {
    number: "02",
    title: "Train",
    description: "Your AI is built on our proprietary architecture, fine-tuned on your specific methodology. We optimize for your sales patterns, objection handling, and closing style.",
    duration: "Day 4-10"
  },
  {
    number: "03",
    title: "Deploy",
    description: "Go live across all channels simultaneously. The platform handles scaling, monitoring, and continuous optimization. Your AI gets smarter with every interaction.",
    duration: "Day 11-14"
  }
]

export default function HowItWorks() {
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
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-24"
        >
          <p className="text-indigo-400 font-medium mb-4 text-sm tracking-wide uppercase">The Process</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight tracking-tight">
            From expert to AI
            <br className="hidden sm:block" />
            <span className="text-indigo-400">in 14 days</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
            Our deployment process is streamlined for speed without sacrificing quality. 
            You provide the expertise—we handle the technology.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-zinc-700 to-transparent z-0" />
              )}
              
              <div className="p-8 sm:p-10 glass rounded-2xl h-full card-hover relative z-10">
                {/* Number watermark */}
                <span className="text-6xl sm:text-7xl font-bold text-zinc-800 absolute top-6 right-6 select-none">
                  {step.number}
                </span>
                
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-zinc-100">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-base leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full" />
                    <span className="text-zinc-500">{step.duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <p className="text-zinc-500 text-sm">
            Average deployment time: 11 days • Fastest deployment: 7 days • No technical expertise required
          </p>
        </motion.div>
      </div>
    </section>
  )
}
