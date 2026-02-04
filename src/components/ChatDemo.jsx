import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Zap, TrendingUp, Sparkles } from 'lucide-react'

const scenarios = [
  {
    id: 'content',
    label: 'Content A→Z',
    icon: Sparkles,
    color: 'indigo',
    messages: [
      { type: 'system', time: '8:15 AM', text: "☀️ Good morning! Here's what I did while you slept:" },
      { type: 'outgoing', sender: 'Farrah', time: '8:15 AM', text: "1️⃣ Researched trending topics in your niche — found 3 hooks that are blowing up right now\n\n2️⃣ Wrote a script for the best one (60 sec video about the '5-second rule' for entrepreneurs)\n\n3️⃣ Sent it to your AI avatar — video is rendered and ready\n\n4️⃣ Posted it to Instagram and TikTok at 7am (optimal time based on your analytics)\n\n5️⃣ Already got 47 comments — I'm replying to them now in your voice" },
      { type: 'typing', duration: 1500 },
      { type: 'outgoing', sender: 'Farrah', time: '8:16 AM', text: "Update: 3 of those commenters are potential leads. I DMed them your free guide and added them to your CRM. One already booked a discovery call for tomorrow at 2pm. ✅" },
      { type: 'alert', text: "🤯 From research → script → video → post → engagement → leads → booked call. All while you slept." },
    ]
  },
  {
    id: 'trading',
    label: 'Trading 24/7',
    icon: TrendingUp,
    color: 'emerald',
    messages: [
      { type: 'system', time: '3:47 AM', text: "🌙 Overnight trading report:" },
      { type: 'outgoing', sender: 'Farrah', time: '3:47 AM', text: "Market moved while you slept. Here's what I did:\n\n📈 SOL hit your take-profit at $142 — sold 50% of position, locked in 3.2% gain ($847)\n\n🔍 Spotted unusual volume on a new memecoin. Researched the team, checked the contract, verified liquidity. Looks solid.\n\n💰 Sized a small position (2% of portfolio) based on your risk rules. Already up 12%." },
      { type: 'typing', duration: 1200 },
      { type: 'outgoing', sender: 'Farrah', time: '3:48 AM', text: "Also: I noticed ETH/BTC ratio breaking down. Moved some ETH to stables as a hedge. Your portfolio is now 60% stable while we wait for clarity.\n\nTotal overnight P&L: +$1,247 💰\n\nWant me to wake you for anything, or handle it?" },
      { type: 'alert', text: "💰 Research → Analysis → Execution → Risk management → Reporting. All automated. All YOUR strategy." },
    ]
  },
  {
    id: 'business',
    label: 'Business Growth',
    icon: Zap,
    color: 'amber',
    messages: [
      { type: 'system', time: '9:00 AM', text: "📊 Weekly business automation report:" },
      { type: 'outgoing', sender: 'Farrah', time: '9:00 AM', text: "Here's what I handled this week without you lifting a finger:\n\n📬 147 DMs responded to (23 were potential clients — I qualified them and 8 booked calls)\n\n📝 5 blog posts researched, written, and scheduled\n\n📱 21 social posts created and published across all platforms\n\n⭐ 34 Google reviews responded to (all 5-star replies personalized)\n\n📧 Email sequence sent to 2,847 subscribers — 4.2% click rate, 12 new sales" },
      { type: 'typing', duration: 1500 },
      { type: 'outgoing', sender: 'Farrah', time: '9:01 AM', text: "I also noticed your competitor launched a new product. I:\n\n• Analyzed their offer and pricing\n• Drafted 3 counter-positioning strategies\n• Built a comparison landing page (it's on staging)\n• Wrote email copy to send to your list\n\nWant me to launch the campaign, or review first?" },
      { type: 'alert', text: "🚀 DMs + Content + Reviews + Email + Competitive intel + Strategy. A full marketing team in one AI." },
    ]
  }
]

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      <motion.div
        className="w-2 h-2 bg-zinc-400 rounded-full"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
      />
      <motion.div
        className="w-2 h-2 bg-zinc-400 rounded-full"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
      />
      <motion.div
        className="w-2 h-2 bg-zinc-400 rounded-full"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
      />
    </div>
  )
}

function Message({ message, index }) {
  if (message.type === 'typing') {
    return <TypingIndicator />
  }

  if (message.type === 'alert') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-4 my-3 p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-xl"
      >
        <p className="text-sm text-indigo-200">{message.text}</p>
      </motion.div>
    )
  }

  if (message.type === 'system') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center my-4"
      >
        <span className="text-xs text-zinc-500 bg-zinc-800/50 px-3 py-1 rounded-full">{message.text}</span>
      </motion.div>
    )
  }

  const isOutgoing = message.type === 'outgoing'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, x: isOutgoing ? 10 : -10 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex flex-col ${isOutgoing ? 'items-end' : 'items-start'} px-4 my-2`}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs text-zinc-500">{message.sender}</span>
        <span className="text-xs text-zinc-600">{message.time}</span>
      </div>
      <div
        className={`max-w-[90%] px-4 py-3 rounded-2xl ${
          isOutgoing
            ? 'bg-indigo-600 text-white rounded-br-sm'
            : 'bg-zinc-800 text-zinc-100 rounded-bl-sm'
        }`}
      >
        <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
      </div>
    </motion.div>
  )
}

export default function ChatDemo() {
  const [activeScenario, setActiveScenario] = useState(0)
  const [visibleMessages, setVisibleMessages] = useState([])
  const [isPlaying, setIsPlaying] = useState(true)

  const scenario = scenarios[activeScenario]

  useEffect(() => {
    setVisibleMessages([])
    setIsPlaying(true)

    let currentIndex = 0
    let timeouts = []

    const showNextMessage = () => {
      if (currentIndex >= scenario.messages.length) {
        // Auto-advance to next scenario after delay
        const advanceTimeout = setTimeout(() => {
          setActiveScenario((prev) => (prev + 1) % scenarios.length)
        }, 5000)
        timeouts.push(advanceTimeout)
        return
      }

      const message = scenario.messages[currentIndex]
      
      if (message.type === 'typing') {
        setVisibleMessages((prev) => [...prev, message])
        const typingTimeout = setTimeout(() => {
          setVisibleMessages((prev) => prev.filter((m) => m.type !== 'typing'))
          currentIndex++
          showNextMessage()
        }, message.duration)
        timeouts.push(typingTimeout)
      } else {
        setVisibleMessages((prev) => [...prev, message])
        currentIndex++
        const nextTimeout = setTimeout(showNextMessage, 1200)
        timeouts.push(nextTimeout)
      }
    }

    const startTimeout = setTimeout(showNextMessage, 500)
    timeouts.push(startTimeout)

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [activeScenario])

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Scenario tabs */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2 justify-center">
        {scenarios.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActiveScenario(i)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
              activeScenario === i
                ? 'bg-indigo-600 text-white'
                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
            }`}
          >
            <s.icon className="w-4 h-4" />
            {s.label}
          </button>
        ))}
      </div>

      {/* Chat window */}
      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 border-b border-zinc-800 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-medium text-sm text-zinc-100">Farrah AI</p>
            <p className="text-xs text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
              Working proactively
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto py-4">
          <AnimatePresence mode="sync">
            {visibleMessages.map((message, index) => (
              <Message key={`${activeScenario}-${index}`} message={message} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-zinc-800 bg-zinc-900/50">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span>Real scenarios — this is what Farrah does while you focus on what matters</span>
          </div>
        </div>
      </div>
    </div>
  )
}
