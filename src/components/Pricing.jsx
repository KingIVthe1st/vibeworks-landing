import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Sparkles, Zap, Crown, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: "SPARK",
    icon: Zap,
    tagline: "For solopreneurs ready to automate",
    setup: "$2,500",
    monthly: "$497",
    features: [
      "AI trained on your content & voice",
      "Website chatbot deployment",
      "Lead capture & qualification",
      "Real-time notifications",
      "1-hour strategy session",
      "Monthly optimization call",
      "Email support (24h response)"
    ],
    cta: "Start with Spark",
    popular: false,
    gradient: "from-slate-800/50 to-slate-900/50"
  },
  {
    name: "IGNITE",
    icon: Sparkles,
    tagline: "For coaches ready to scale",
    setup: "$5,000",
    monthly: "$997",
    features: [
      "Everything in SPARK, plus:",
      "Voice clone (sounds like you)",
      "Instagram, WhatsApp, FB Messenger",
      "Custom persona development",
      "CRM & calendar integration",
      "Advanced sales sequences",
      "Bi-weekly strategy calls",
      "Priority support (same-day)"
    ],
    cta: "Scale with Ignite",
    popular: true,
    gradient: "from-indigo-900/60 to-purple-900/60"
  },
  {
    name: "BLAZE",
    icon: Crown,
    tagline: "White-glove for 7-figure brands",
    setup: "$10-15K",
    monthly: "$1,997",
    features: [
      "Everything in IGNITE, plus:",
      "Video AI clone",
      "Full funnel automation",
      "White-label option",
      "Custom API integrations",
      "Dedicated account manager",
      "Weekly strategy sessions",
      "Revenue share partnership"
    ],
    cta: "Go Blaze",
    popular: false,
    gradient: "from-slate-800/50 to-slate-900/50"
  }
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900/50 to-slate-950" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-indigo-400 font-semibold mb-3 sm:mb-4 text-sm tracking-wider uppercase">Pricing</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Investment that{' '}
            <span className="text-indigo-400">pays for itself</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            One-time setup + monthly partnership.{' '}
            <span className="text-slate-500">No contracts. Cancel anytime.</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-indigo-900/60 to-purple-900/60 border border-indigo-500/50 scale-100 lg:scale-105 shadow-2xl shadow-indigo-500/20' 
                  : 'glass hover:border-slate-600/50'
              }`}
            >
              {plan.popular && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-px left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-b-xl text-sm font-semibold"
                >
                  Most Popular
                </motion.div>
              )}

              <div className="flex items-center gap-3 mb-4 sm:mb-5 mt-2">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center ${
                  plan.popular ? 'bg-indigo-500/20' : 'bg-slate-700/50'
                }`}>
                  <plan.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${plan.popular ? 'text-indigo-400' : 'text-slate-400'}`} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">{plan.name}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">{plan.tagline}</p>
                </div>
              </div>

              <div className="mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-slate-700/50">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl sm:text-4xl font-bold">{plan.setup}</span>
                  <span className="text-slate-400 text-sm">setup</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl sm:text-2xl font-semibold text-indigo-400">{plan.monthly}</span>
                  <span className="text-slate-400 text-sm">/month</span>
                </div>
              </div>

              <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 sm:gap-3">
                    <Check className={`w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-indigo-400' : 'text-slate-500'
                    }`} />
                    <span className="text-slate-300 text-xs sm:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`group w-full py-3.5 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 mobile-tap ${
                plan.popular
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-lg hover:shadow-indigo-500/30 btn-premium'
                  : 'bg-slate-700 hover:bg-slate-600'
              }`}>
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* ROI callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 sm:mt-14 p-6 sm:p-8 glass rounded-2xl sm:rounded-3xl text-center relative overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5" />
          
          <div className="relative z-10">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Close just <span className="text-indigo-400">one extra deal</span> per month...
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              ...and your AI pays for itself 5-10x over. Most clients see ROI in week one.
            </p>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-slate-500 text-xs sm:text-sm"
        >
          <span>🔒 Secure payments via Stripe</span>
          <span>💳 Payment plans available</span>
          <span>🤝 30-day satisfaction guarantee</span>
        </motion.div>
      </div>
    </section>
  )
}
