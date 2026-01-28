import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, MessageSquare, TrendingDown, Users, AlertTriangle } from 'lucide-react'

const problems = [
  {
    icon: Clock,
    title: "Your Time = Your Ceiling",
    description: "Every DM, every question, every lead goes through you. Your income is capped by your calendar.",
    stat: "15+ hrs/week",
    statLabel: "lost to repetitive messages"
  },
  {
    icon: MessageSquare,
    title: "Inbox Bankruptcy",
    description: "Hundreds of messages pile up while you sleep. Hot leads go cold because you can't reply fast enough.",
    stat: "78%",
    statLabel: "of leads ghost after 5 min"
  },
  {
    icon: TrendingDown,
    title: "Leaving Money on the Table",
    description: "Your competitors are closing deals in your timezone's dead hours. Every unanswered message is lost revenue.",
    stat: "$3-5K",
    statLabel: "lost monthly per unanswered lead"
  },
  {
    icon: Users,
    title: "The Clone Problem",
    description: "You can't hire 'you.' Traditional VAs miss your tone, your expertise, your way of converting strangers to buyers.",
    stat: "4 months",
    statLabel: "to train a good VA"
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
            <span className="text-sm text-red-300 font-medium">The Growth Trap</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Success is{' '}
            <span className="text-red-400">suffocating</span>{' '}
            you
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Your audience is exploding. So is the chaos.{' '}
            <span className="text-white">Sound familiar?</span>
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

        {/* Transition text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-lg sm:text-xl text-slate-400">
            What if you could{' '}
            <span className="text-indigo-400 font-semibold">clone yourself</span>
            {' '}without the sci-fi?
          </p>
        </motion.div>
      </div>
    </section>
  )
}
