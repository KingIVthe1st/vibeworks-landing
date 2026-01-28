import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Business Coach",
    revenue: "$40K/mo",
    quote: "I was drowning—200+ DMs a day answering the same 10 questions. Now my AI handles 80% of it, and the leads that hit my calendar are pre-qualified. I 3x'd my close rate because I'm only talking to buyers.",
    result: "3x close rate",
    initial: "S"
  },
  {
    name: "Marcus Johnson",
    role: "Course Creator",
    revenue: "$2.1M/year",
    quote: "The voice clone is WILD. Students literally can't tell it's not me. They get 'personal' voice notes at 3am checking on their progress. Course completion jumped because they feel seen. This is the future.",
    result: "2x completion",
    initial: "M"
  },
  {
    name: "Elena Rodriguez",
    role: "Fitness Influencer",
    revenue: "127K followers",
    quote: "I was skeptical—how can AI capture MY energy? But it nailed it. My community gets instant replies at all hours and they love it. DMs went from a chore to a revenue machine. 40% engagement bump in 60 days.",
    result: "+40% engagement",
    initial: "E"
  }
]

const stats = [
  { value: "50+", label: "AI clones deployed" },
  { value: "92%", label: "See ROI in 30 days" },
  { value: "$2.4M", label: "Client revenue generated" }
]

export default function Testimonials() {
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
          <p className="text-indigo-400 font-medium mb-4 text-sm tracking-wide uppercase">Real Results</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight tracking-tight">
            They cloned themselves.{' '}
            <span className="text-indigo-400">You're next.</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
            Don't take our word for it. Here's what happened when they stopped being the bottleneck.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-14 sm:mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 glass rounded-2xl flex flex-col h-full card-hover"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-zinc-300 leading-relaxed mb-6 flex-grow">
                "{testimonial.quote}"
              </p>

              {/* Result badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm text-emerald-400 w-fit mb-6">
                <span className="font-semibold">{testimonial.result}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-800">
                <div className="w-11 h-11 bg-zinc-800 rounded-full flex items-center justify-center text-sm font-semibold text-zinc-400">
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-semibold text-zinc-200">{testimonial.name}</p>
                  <p className="text-zinc-500 text-sm">{testimonial.role} • {testimonial.revenue}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 sm:p-8 glass-subtle rounded-2xl">
              <div className="text-3xl sm:text-4xl font-semibold text-indigo-400 mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-zinc-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
