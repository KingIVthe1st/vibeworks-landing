import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
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
    title: "Intelligent Conversations",
    description: "Natural dialogue that understands context, handles objections, and guides leads toward booking."
  },
  {
    icon: Mic2,
    title: "Voice Clone Technology",
    description: "AI that speaks in your actual voice. Send voice notes, take calls, create content—all sounding like you."
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Integrates with your calendar to book calls, send reminders, and manage your time automatically."
  },
  {
    icon: BarChart3,
    title: "Lead Qualification",
    description: "Asks the right questions, scores leads, and routes hot prospects directly to your calendar."
  },
  {
    icon: Globe,
    title: "Multi-Platform",
    description: "Works on your website, Instagram, WhatsApp, email—wherever your audience reaches out."
  },
  {
    icon: Shield,
    title: "On-Brand Always",
    description: "Trained on your values, boundaries, and guidelines. Never goes off-script or damages your reputation."
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description: "Sub-second reply times. No lead waits more than a few seconds, day or night."
  },
  {
    icon: Users,
    title: "Community Management",
    description: "Engages your audience, answers FAQs, and keeps conversations flowing in your communities."
  },
  {
    icon: Mail,
    title: "Email Automation",
    description: "Drafts responses, follows up with leads, and manages your inbox like a pro assistant."
  },
  {
    icon: FileText,
    title: "Content Assistance",
    description: "Helps brainstorm, draft, and repurpose content in your voice and style."
  }
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-semibold mb-4">FEATURES</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need to <span className="text-indigo-400">scale</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A full-featured AI employee, not just a simple chatbot.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-5 bg-slate-800/30 border border-slate-700/30 rounded-xl hover:border-indigo-500/30 hover:bg-slate-800/50 transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-indigo-500/20 transition-colors">
                <feature.icon className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="font-semibold mb-1 text-sm">{feature.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
