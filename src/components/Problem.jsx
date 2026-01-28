import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, MessageSquare, TrendingDown, Users } from 'lucide-react'

const problems = [
  {
    icon: Clock,
    title: "You're the bottleneck",
    description: "Every lead, every DM, every question has to go through you. Your business can't grow past your personal bandwidth."
  },
  {
    icon: MessageSquare,
    title: "Inbox overwhelm",
    description: "Hundreds of messages pile up daily. Hot leads go cold while you're stuck answering the same questions over and over."
  },
  {
    icon: TrendingDown,
    title: "Missed opportunities",
    description: "While you sleep, your competitors are capturing your potential clients. Time zones shouldn't cost you money."
  },
  {
    icon: Users,
    title: "Can't scale 1:1",
    description: "Your expertise is valuable, but you can only serve so many people. Traditional hiring is expensive and slow."
  }
]

export default function Problem() {
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
          <p className="text-indigo-400 font-semibold mb-4">THE PROBLEM</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            You're <span className="text-red-400">drowning</span> in your own success
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Your audience is growing, but so is the workload. 
            Something has to give—and it shouldn't be your sanity or your growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-red-500/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                <problem.icon className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-slate-400">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
