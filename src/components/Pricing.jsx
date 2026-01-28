import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Sparkles, Zap, Crown } from 'lucide-react'

const plans = [
  {
    name: "SPARK",
    icon: Zap,
    description: "Perfect for solopreneurs ready to automate",
    setup: "$2,500",
    monthly: "$497",
    features: [
      "AI assistant trained on your content",
      "Website chatbot integration",
      "Lead capture & qualification",
      "Email notifications",
      "30-minute strategy call",
      "Monthly optimization call",
      "Email support"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "IGNITE",
    icon: Sparkles,
    description: "For coaches & influencers ready to scale",
    setup: "$5,000",
    monthly: "$997",
    features: [
      "Everything in SPARK, plus:",
      "Voice clone (sounds like you)",
      "Multi-platform deployment",
      "Custom AI persona development",
      "CRM integration",
      "Advanced conversation flows",
      "Bi-weekly strategy calls",
      "Priority support"
    ],
    cta: "Most Popular",
    popular: true
  },
  {
    name: "BLAZE",
    icon: Crown,
    description: "White-glove service for high-ticket brands",
    setup: "$10-15K",
    monthly: "$1,997",
    features: [
      "Everything in IGNITE, plus:",
      "Video AI clone",
      "Full funnel automation",
      "White-label option",
      "Custom integrations",
      "Dedicated account manager",
      "Weekly strategy sessions",
      "Revenue share partnership option"
    ],
    cta: "Contact Us",
    popular: false
  }
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="py-24 bg-slate-900/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-semibold mb-4">PRICING</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Invest in your <span className="text-indigo-400">growth</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            One-time setup + monthly partnership. 
            <br />
            <span className="text-slate-500">Cancel anytime. No long-term contracts.</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border-indigo-500/50 scale-105 shadow-2xl shadow-indigo-500/10' 
                  : 'bg-slate-800/50 border-slate-700/50 hover:border-slate-600/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  plan.popular ? 'bg-indigo-500/20' : 'bg-slate-700/50'
                }`}>
                  <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-indigo-400' : 'text-slate-400'}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-slate-400 text-sm">{plan.description}</p>
                </div>
              </div>

              <div className="mb-6 pb-6 border-b border-slate-700/50">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold">{plan.setup}</span>
                  <span className="text-slate-400">setup</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-indigo-400">{plan.monthly}</span>
                  <span className="text-slate-400">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-indigo-400' : 'text-slate-500'
                    }`} />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-lg hover:shadow-indigo-500/25'
                  : 'bg-slate-700 hover:bg-slate-600'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* ROI callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 rounded-2xl text-center"
        >
          <p className="text-xl md:text-2xl font-semibold mb-2">
            If your AI closes just <span className="text-indigo-400">one extra client</span> per month...
          </p>
          <p className="text-slate-400">
            ...it pays for itself 5-10x over. Most of our clients see ROI within the first month.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
