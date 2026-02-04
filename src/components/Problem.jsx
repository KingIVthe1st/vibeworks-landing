import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const problems = [
  {
    stat: "15+",
    unit: "hrs/week",
    title: "You ARE the business",
    description: "Every DM. Every email. Every customer inquiry flows through you. Your growth has a ceiling—your calendar."
  },
  {
    stat: "78%",
    unit: "",
    title: "Opportunities vanish fast",
    description: "Someone reaches out at 2am. By the time you respond, they've moved on. Speed wins—and you're sleeping."
  },
  {
    stat: "$3-10K",
    unit: "/month",
    title: "Money left on the table",
    description: "While you sleep, leads go cold. While you're running operations, DMs pile up. It's costing you more than you realize."
  },
  {
    stat: "4+",
    unit: "months",
    title: "Hiring doesn't fix it",
    description: "VAs don't sound like you. Chatbots feel robotic. Training takes forever. You need a clone, not an employee."
  }
]

export default function Problem() {
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
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <p className="text-red-400/80 font-medium mb-4 text-sm tracking-wide uppercase">Sound familiar?</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight tracking-tight">
            Your success is{' '}
            <span className="text-red-400">strangling</span> you
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
            You built something incredible. Now you're drowning in it. 
            The more you grow, the more <em>you</em> become the bottleneck.
          </p>
        </motion.div>

        {/* Problem grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 sm:p-10 glass rounded-2xl hover:border-red-500/20 transition-all duration-500 card-hover"
            >
              {/* Stat */}
              <div className="mb-6">
                <span className="text-4xl sm:text-5xl font-semibold text-red-400 tracking-tight">
                  {problem.stat}
                </span>
                {problem.unit && (
                  <span className="text-lg text-red-400/60 ml-1">{problem.unit}</span>
                )}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-zinc-100">
                {problem.title}
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bridge statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <p className="text-lg sm:text-xl text-zinc-300 font-medium">
            You don't need to work harder.
            <span className="text-indigo-400 block sm:inline sm:ml-2">You need to duplicate yourself.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
