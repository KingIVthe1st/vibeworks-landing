import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Business Coach",
    image: null,
    content: "My AI handles 80% of my DMs now. I went from spending 3 hours a day on messages to 30 minutes. The ROI was immediate.",
    result: "Saved 15+ hours/week"
  },
  {
    name: "Marcus Johnson",
    role: "Course Creator",
    image: null,
    content: "The voice clone is insane. My students can't tell the difference. It's like having a clone of myself available 24/7.",
    result: "2x course completion rate"
  },
  {
    name: "Elena Rodriguez",
    role: "Fitness Influencer",
    image: null,
    content: "I was skeptical about AI, but this actually sounds like me. My community loves getting instant responses at any hour.",
    result: "40% more engagement"
  }
]

export default function Testimonials() {
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
          <p className="text-indigo-400 font-semibold mb-4">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by <span className="text-indigo-400">entrepreneurs</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Real results from real people who trusted us with their AI employee.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 bg-slate-800/50 border border-slate-700/50 rounded-2xl"
            >
              <Quote className="w-10 h-10 text-indigo-500/20 absolute top-6 right-6" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Result badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-sm text-green-400 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                {testimonial.result}
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-700/50">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-lg font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
