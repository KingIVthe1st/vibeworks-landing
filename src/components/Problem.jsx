import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const problems = [
  {
    stat: "147",
    unit: "DMs",
    title: "That's today's inbox",
    description: "Brand deals, customer questions, collabs, spam. All mixed together. By the time you sort through it, the hot leads are ice cold."
  },
  {
    stat: "2am",
    unit: "",
    title: "Your best lead messaged",
    description: "You woke up at 8. They bought from your competitor at 3. Speed wins every time—and you were sleeping."
  },
  {
    stat: "$8K",
    unit: "/month",
    title: "That's what you're losing",
    description: "Not hypothetical. Real math. Missed brand deals. Cold leads. Slow responses. Your inbox is bleeding money."
  },
  {
    stat: "0",
    unit: "days off",
    title: "When's your last real break?",
    description: "Vacation? You're still checking DMs. Sick? Still responding. You've built a business that can't survive without you."
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
          <p className="text-red-400/80 font-medium mb-4 text-sm tracking-wide uppercase">The truth nobody talks about</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight tracking-tight">
            Your audience is{' '}
            <span className="text-red-400">outgrowing</span> you
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
            Every follower you gain is another person who expects a response. 
            The math doesn't work. <em>You can't scale yourself</em>—but your competitors are figuring out how.
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
            The creators who scale aren't working harder.
            <span className="text-indigo-400 block sm:inline sm:ml-2">They've cloned themselves.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
