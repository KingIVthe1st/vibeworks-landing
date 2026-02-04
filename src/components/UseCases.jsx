import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, TrendingUp, UtensilsCrossed, Sparkles } from 'lucide-react'

const useCases = [
  {
    icon: Briefcase,
    audience: "Entrepreneurs",
    title: "She runs your business while you strategize",
    problems: [
      "Content creation takes hours you don't have",
      "Social media feels like a full-time job",
      "Competitor moves happen and you find out too late"
    ],
    solution: "Farrah researches your niche, writes content, and posts to social media — A to Z. She monitors competitors and alerts you to opportunities. She follows up with leads, books calls, and closes deals. You wake up to work already done.",
    proactiveExample: "\"I researched 3 trending topics in your niche and drafted posts for the week. I also noticed your competitor raised prices — want me to update our positioning?\"",
    stat: "40+ hrs/month",
    statLabel: "of work done for you"
  },
  {
    icon: TrendingUp,
    audience: "Traders",
    title: "She trades while you sleep",
    problems: [
      "Markets move 24/7 but you can't watch them 24/7",
      "You miss entries because life gets in the way",
      "Research takes hours that could be spent trading"
    ],
    solution: "Connect your wallet and let Farrah execute YOUR strategy automatically. She monitors positions, takes profits, cuts losses — following your rules. She researches opportunities and wakes you up only when something matters.",
    proactiveExample: "\"Took 3.2% profit on SOL while you slept. Also found a new token with strong fundamentals — want me to size a position?\"",
    stat: "24/7",
    statLabel: "automated trading"
  },
  {
    icon: UtensilsCrossed,
    audience: "Restaurant Owners",
    title: "She markets your restaurant on autopilot",
    problems: [
      "No time to post on social media consistently",
      "Google reviews pile up unanswered",
      "Customers forget about you between visits"
    ],
    solution: "Farrah posts your daily specials, responds to every Google review, sends follow-up texts to customers, and manages your online presence — all automatically. She even tracks what's working and adjusts.",
    proactiveExample: "\"Posted today's special to Instagram and Google. Also sent 'we miss you' texts to 47 customers who haven't visited in 30 days. 12 already made reservations.\"",
    stat: "90%",
    statLabel: "less marketing work"
  },
  {
    icon: Sparkles,
    audience: "Influencers",
    title: "She runs your account so you can create",
    problems: [
      "DMs are overwhelming and brand deals get buried",
      "Posting consistently is exhausting",
      "Engagement takes hours away from creating"
    ],
    solution: "Farrah creates content, schedules posts, responds to DMs in your voice, negotiates brand deals, and grows your engagement — while you focus on what you love: creating. She runs your business so you can be the talent.",
    proactiveExample: "\"Scheduled 5 posts for the week. Negotiated the Nike deal up to $7,500 (they started at $5K). Your engagement is up 23% — here's what's working.\"",
    stat: "3x",
    statLabel: "more deals closed"
  }
]

export default function UseCases() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 sm:py-32 lg:py-40" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <p className="text-indigo-400 font-medium mb-4 text-sm tracking-wide uppercase">What She Actually Does</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight tracking-tight">
            Not just responses.{' '}
            <span className="gradient-text">Real work.</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
            ChatGPT answers questions. Farrah <span className="text-zinc-200">does the work</span> — 
            proactively, automatically, while you focus on what matters.
          </p>
        </motion.div>

        {/* Use cases grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.audience}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 sm:p-10 glass rounded-2xl card-hover"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors duration-500">
                    <useCase.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <span className="text-indigo-400 text-sm font-medium">{useCase.audience}</span>
                    <h3 className="text-lg font-semibold text-zinc-100">{useCase.title}</h3>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-semibold text-emerald-400">{useCase.stat}</span>
                  <p className="text-xs text-zinc-500">{useCase.statLabel}</p>
                </div>
              </div>

              {/* Problems - condensed */}
              <div className="mb-4">
                <ul className="space-y-1">
                  {useCase.problems.map((problem, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-500 text-sm">
                      <span className="text-red-400/60 mt-0.5">×</span>
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {useCase.solution}
                </p>
              </div>

              {/* Proactive Example - the key differentiator */}
              <div className="pt-4 border-t border-zinc-800">
                <p className="text-xs text-indigo-400 font-medium mb-2 uppercase tracking-wide">What she might say:</p>
                <p className="text-zinc-400 text-sm italic leading-relaxed bg-zinc-800/30 rounded-lg p-3">
                  {useCase.proactiveExample}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
