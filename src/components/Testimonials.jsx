import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote, TrendingUp } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Business Coach • $40K/mo",
    content: "I was drowning. 200+ DMs a day, and I was answering the same 10 questions over and over. Now? My AI handles 80% of it, and the leads that DO hit my calendar are pre-qualified. I literally 3x'd my close rate because I'm only talking to buyers.",
    result: "3x close rate",
    resultIcon: "📈",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    name: "Marcus Johnson",
    role: "Course Creator • $2.1M/year",
    content: "The voice clone is WILD. My students literally can't tell it's not me. They're getting 'personal' voice notes from 'me' checking in on their progress—at 3am. Course completion jumped because they feel seen. This is the future.",
    result: "2x completion",
    resultIcon: "🎓",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    name: "Elena Rodriguez",
    role: "Fitness Influencer • 127K followers",
    content: "I was SUPER skeptical. How can AI capture MY energy? But holy sh*t, it nailed it. My community is getting instant replies at all hours and they love it. DMs went from a chore to a revenue machine. 40% engagement bump in 60 days.",
    result: "+40% engagement",
    resultIcon: "🔥",
    gradient: "from-amber-500 to-orange-500"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

export default function Testimonials() {
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
          <p className="text-indigo-400 font-semibold mb-3 sm:mb-4 text-sm tracking-wider uppercase">Real Results</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            They Cloned Themselves.{' '}
            <span className="text-indigo-400">You're Next.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Don't take our word for it. Here's what happened when they stopped being the bottleneck.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 sm:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="relative p-6 sm:p-8 glass rounded-2xl sm:rounded-3xl overflow-hidden group card-hover"
            >
              {/* Subtle gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-500/20 absolute top-5 sm:top-6 right-5 sm:right-6" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4 sm:mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-slate-300 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base relative z-10">
                "{testimonial.content}"
              </p>

              {/* Result badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500/10 border border-green-500/20 rounded-full text-xs sm:text-sm text-green-400 mb-5 sm:mb-6">
                <span>{testimonial.resultIcon}</span>
                <span className="font-semibold">{testimonial.result}</span>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-slate-700/50">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-base sm:text-lg font-bold`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-slate-400 text-xs sm:text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row - Social proof with numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 sm:mt-14 grid grid-cols-3 gap-4 sm:gap-6"
        >
          {[
            { value: "50+", label: "AI Clones Deployed" },
            { value: "92%", label: "See ROI in 30 Days" },
            { value: "$2.4M", label: "Client Revenue Generated" }
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 sm:p-6 glass-light rounded-xl sm:rounded-2xl">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-400 mb-1">{stat.value}</div>
              <div className="text-slate-400 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
