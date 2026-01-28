import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, MessageSquare, TrendingDown, Users, AlertTriangle } from 'lucide-react'

const problems = [
  {
    icon: Clock,
    title: "You ARE the Business",
    description: "Every DM. Every lead. Every question. It all flows through YOU. Your income has a hard ceiling: your calendar.",
    stat: "15+ hrs/week",
    statLabel: "answering the same questions"
  },
  {
    icon: MessageSquare,
    title: "Inbox = Graveyard",
    description: "Leads slide into your DMs at 2am. By the time you respond, they've already bought from someone else. Every notification is a reminder you're dropping balls.",
    stat: "78%",
    statLabel: "of leads ghost after 5 minutes"
  },
  {
    icon: TrendingDown,
    title: "You're Bleeding Money",
    description: "While you're asleep, your competitors are closing. While you're on calls, opportunities are slipping through your fingers. It's costing you more than you realize.",
    stat: "$3-10K",
    statLabel: "lost monthly in missed leads"
  },
  {
    icon: Users,
    title: "You Can't Hire You",
    description: "You've tried VAs. They don't get your voice, your methodology, your way of converting skeptics into believers. Training them takes months—and they still don't sound like you.",
    stat: "4+ months",
    statLabel: "to train a decent VA"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

export default function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900/50 to-slate-950" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-4 sm:mb-6"
          >
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-300 font-medium">Warning: The Growth Trap</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Your Success Is{' '}
            <span className="text-red-400">Strangling</span>{' '}
            You
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            You built something amazing. Now you're drowning in it.{' '}
            <span className="text-white">Does this sound familiar?</span>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 gap-4 sm:gap-6"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              variants={itemVariants}
              className="group p-5 sm:p-6 glass rounded-2xl hover:border-red-500/30 transition-all duration-500 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 group-hover:scale-110 transition-all duration-500">
                  <problem.icon className="w-6 h-6 sm:w-7 sm:h-7 text-red-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{problem.title}</h3>
                  <p className="text-slate-400 text-sm sm:text-base mb-3">{problem.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-red-400 font-bold">{problem.stat}</span>
                    <span className="text-slate-500">{problem.statLabel}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Transition - The "Bridge" in BAB */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-base sm:text-lg text-slate-500 mb-2">
            Here's the thing nobody tells you:
          </p>
          <p className="text-lg sm:text-xl text-white font-medium">
            You don't need to work harder. You need to{' '}
            <span className="text-indigo-400">duplicate yourself</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
