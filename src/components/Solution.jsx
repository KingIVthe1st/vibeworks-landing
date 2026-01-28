import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Bot, Mic, Brain, Zap } from 'lucide-react'

const benefits = [
  {
    icon: Bot,
    title: "AI That Sounds Like You",
    description: "Trained on your content, your voice, your style. Your audience won't know the difference."
  },
  {
    icon: Brain,
    title: "Learns Your Business",
    description: "Understands your products, services, and unique way of solving problems."
  },
  {
    icon: Mic,
    title: "Your Voice, Literally",
    description: "Optional voice cloning means your AI can speak in your actual voice—for voice notes, calls, and more."
  },
  {
    icon: Zap,
    title: "Works 24/7/365",
    description: "Never takes a break, never gets sick, never needs motivation. Always on, always helping."
  }
]

export default function Solution() {
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
          <p className="text-indigo-400 font-semibold mb-4">THE SOLUTION</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet your AI <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">twin</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We don't just set up a chatbot. We create a digital version of you—
            trained on your expertise, speaking in your voice, representing your brand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-2xl hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-slate-400 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Visual showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 relative"
        >
          <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 overflow-hidden flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-10 h-10 text-indigo-400" />
              </div>
              <p className="text-slate-400">Interactive Demo Coming Soon</p>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute -inset-px bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-50 -z-10" />
        </motion.div>
      </div>
    </section>
  )
}
