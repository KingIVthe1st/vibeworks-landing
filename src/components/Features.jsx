import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  MessageCircle, 
  Mic2, 
  Calendar, 
  BarChart3, 
  Globe, 
  Shield, 
  Zap, 
  Users,
  GitBranch,
  LineChart
} from 'lucide-react'

const features = [
  { icon: MessageCircle, title: "DM automation", description: "AI handles Instagram & TikTok DMs" },
  { icon: Mic2, title: "Voice synthesis", description: "Neural voice clone technology" },
  { icon: Calendar, title: "Calendar integration", description: "Automated scheduling + reminders" },
  { icon: BarChart3, title: "Lead scoring", description: "ML-powered qualification" },
  { icon: Globe, title: "Omnichannel", description: "Web, IG, WhatsApp, email, SMS" },
  { icon: Shield, title: "Guardrails", description: "Brand-safe, compliant responses" },
  { icon: Zap, title: "Proactive alerts", description: "Comes to YOU with opportunities" },
  { icon: Users, title: "CRM sync", description: "Bi-directional data flow" },
  { icon: GitBranch, title: "Continuous learning", description: "Gets smarter every day" },
  { icon: LineChart, title: "Analytics", description: "Revenue attribution + insights" }
]

export default function Features() {
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
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
        >
          <p className="text-indigo-400 font-medium mb-4 text-sm tracking-wide uppercase">Platform Capabilities</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight tracking-tight">
            Enterprise-grade AI,
            <br />
            <span className="text-indigo-400">creator-friendly UX</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
            Built for scale. Designed for simplicity. Every feature optimized for revenue generation.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.03 }}
              className="group p-5 sm:p-6 glass-subtle rounded-xl hover:bg-zinc-800/50 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors duration-300">
                <feature.icon className="w-5 h-5 text-zinc-400 group-hover:text-indigo-400 transition-colors duration-300" />
              </div>
              <h3 className="font-semibold mb-1 text-sm sm:text-base text-zinc-200">{feature.title}</h3>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Integration note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 glass-subtle rounded-2xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-semibold text-zinc-200 mb-1">API-first architecture</h3>
              <p className="text-zinc-500 text-sm">
                RESTful API, webhooks, and native integrations with Stripe, Calendly, HubSpot, and 40+ platforms.
              </p>
            </div>
            <a href="#" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium whitespace-nowrap transition-colors">
              View documentation →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
