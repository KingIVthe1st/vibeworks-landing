import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote, TrendingUp } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Business Coach • 45K followers",
    content: "I was drowning in DMs—literally 200+ per day. Now my AI handles 80% of them, and the quality of leads hitting my calendar went UP. It's like having a clone of my best sales rep.",
    result: "Saved 15+ hrs/week",
    resultIcon: "⏰",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    name: "Marcus Johnson",
    role: "Course Creator • $2M/year",
    content: "The voice clone is scary good. My students literally can't tell the difference. Course completion jumped because they feel like I'm personally checking in on them 24/7.",
    result: "2x completion rate",
    resultIcon: "📈",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    name: "Elena Rodriguez",
    role: "Fitness Influencer • 120K",
    content: "I was super skeptical—how can AI sound like ME? But damn, it nailed my energy. My community loves getting instant responses at 3am. Engagement is through the roof.",
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
          <p className="text-indigo-400 font-semibold mb-3 sm:mb-4 text-sm tracking-wider uppercase">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Creators who{' '}
            <span className="text-indigo-400">cloned themselves</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Real results from entrepreneurs who took the leap.
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

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 sm:mt-14 grid grid-cols-3 gap-4 sm:gap-6"
        >
          {[
            { value: "50+", label: "AI Employees Deployed" },
            { value: "92%", label: "Client Retention Rate" },
            { value: "$2.4M", label: "Revenue Generated" }
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
