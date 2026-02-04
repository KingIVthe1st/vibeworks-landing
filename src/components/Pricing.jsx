import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: "Spark",
    tagline: "For solopreneurs ready to automate",
    setup: "$2,500",
    monthly: "$497",
    features: [
      "AI trained on your content & voice",
      "Website chatbot deployment",
      "Lead capture & qualification",
      "Real-time Slack/email alerts",
      "1-hour strategy session",
      "Monthly optimization call",
      "Email support"
    ],
    cta: "Get started",
    popular: false
  },
  {
    name: "Ignite",
    tagline: "For coaches scaling to 7 figures",
    setup: "$5,000",
    monthly: "$997",
    features: [
      "Everything in Spark, plus:",
      "Voice clone (your actual voice)",
      "Instagram + WhatsApp + Messenger",
      "Custom AI persona development",
      "CRM & calendar integration",
      "Advanced sales sequences",
      "Bi-weekly strategy calls",
      "Priority support (same day)"
    ],
    cta: "Get started",
    popular: true
  },
  {
    name: "Blaze",
    tagline: "White-glove for 7-figure+ brands",
    setup: "$10-15K",
    monthly: "$1,997",
    features: [
      "Everything in Ignite, plus:",
      "Video AI clone (your face + voice)",
      "Full funnel automation",
      "White-label for your clients",
      "Custom API integrations",
      "Dedicated account manager",
      "Weekly strategy sessions",
      "Revenue share option"
    ],
    cta: "Let's talk",
    popular: false
  }
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="py-24 sm:py-32 lg:py-40 bg-zinc-950/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section header - ROI focused */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
        >
          <p className="text-indigo-400 font-medium mb-4 text-sm tracking-wide uppercase">Investment</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight tracking-tight">
            One client pays for{' '}
            <span className="text-indigo-400">a year of service</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
            One-time setup + monthly partnership. No contracts, no BS.{' '}
            <span className="text-zinc-500">Cancel anytime.</span>
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-5">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative p-8 sm:p-10 rounded-2xl transition-all duration-500 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-indigo-950/80 to-zinc-900/80 border border-indigo-500/30 lg:scale-105' 
                  : 'glass'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-500 rounded-full text-xs font-semibold tracking-wide">
                  Most popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-1">{plan.name}</h3>
                <p className="text-zinc-500 text-sm">{plan.tagline}</p>
              </div>

              <div className="mb-8 pb-8 border-b border-zinc-800">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-semibold tracking-tight">{plan.setup}</span>
                  <span className="text-zinc-500 text-sm">setup</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-indigo-400">{plan.monthly}</span>
                  <span className="text-zinc-500 text-sm">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-indigo-400' : 'text-zinc-600'
                    }`} />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`group w-full py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 mobile-tap ${
                plan.popular
                  ? 'bg-white text-zinc-900 hover:bg-zinc-100'
                  : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-100'
              }`}>
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* ROI callout - loss aversion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 sm:mt-20 p-8 sm:p-10 glass rounded-2xl text-center"
        >
          <p className="text-xl sm:text-2xl font-semibold mb-2 text-zinc-100">
            One brand deal covers your entire year. <span className="text-red-400">You're missing 3+ per month.</span>
          </p>
          <p className="text-zinc-500">
            Average client closes <span className="text-indigo-400 font-medium">$12K in new revenue</span> in the first 30 days.
          </p>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-zinc-500 text-sm"
        >
          <span>🔒 Secure payments</span>
          <span>💳 Payment plans available</span>
          <span>🤝 30-day money-back guarantee</span>
        </motion.div>
      </div>
    </section>
  )
}
