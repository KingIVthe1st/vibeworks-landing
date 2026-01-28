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
  Mail,
  FileText
} from 'lucide-react'

const features = [
  {
    icon: MessageCircle,
    title: "Smart Conversations",
    description: "Context-aware dialogue that handles objections and guides leads to booking."
  },
  {
    icon: Mic2,
    title: "Voice Clone",
    description: "Send voice notes and take calls in your actual voice."
  },
  {
    icon: Calendar,
    title: "Auto-Scheduling",
    description: "Books calls, sends reminders, manages your calendar."
  },
  {
    icon: BarChart3,
    title: "Lead Scoring",
    description: "Qualifies prospects and routes hot leads to you."
  },
  {
    icon: Globe,
    title: "Multi-Platform",
    description: "Website, IG, WhatsApp, email—wherever they reach out."
  },
  {
    icon: Shield,
    title: "Brand Safe",
    description: "Trained on your values. Never goes off-script."
  },
  {
    icon: Zap,
    title: "Instant Reply",
    description: "Sub-second responses. No lead waits."
  },
  {
    icon: Users,
    title: "Community Mgmt",
    description: "Engages your audience and answers FAQs."
  },
  {
    icon: Mail,
    title: "Email Autopilot",
    description: "Drafts, follows up, manages your inbox."
  },
  {
    icon: FileText,
    title: "Content Help",
    description: "Brainstorm and draft in your voice."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section className="py-16 sm:py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-indigo-400 font-semibold mb-3 sm:mb-4 text-sm tracking-wider uppercase">Features</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Not a chatbot.{' '}
            <span className="text-indigo-400">An employee.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Everything you need to scale your 1:1 expertise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group p-4 sm:p-5 glass rounded-xl sm:rounded-2xl card-hover cursor-default"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-400">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
              </div>
              <h3 className="font-semibold mb-1 text-sm sm:text-base">{feature.title}</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 sm:mt-14 p-5 sm:p-6 glass-light rounded-xl sm:rounded-2xl text-center"
        >
          <p className="text-slate-300 text-sm sm:text-base">
            <span className="text-indigo-400 font-semibold">Custom integrations?</span>{' '}
            We connect to any tool in your stack—CRM, payment processor, course platform, you name it.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
