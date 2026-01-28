import { motion } from 'framer-motion'
import { Bot, Instagram, Twitter, Linkedin, Youtube, Mail, Heart } from 'lucide-react'

const links = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Demo', href: '#demo' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Cookies', href: '#' },
  ]
}

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-xl sm:text-2xl font-bold">Vibeworks</span>
            </div>
            <p className="text-slate-400 mb-5 sm:mb-6 max-w-xs text-sm sm:text-base leading-relaxed">
              AI assistants that think, speak, and sell like you—so you can scale without the burnout.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 sm:w-11 sm:h-11 glass rounded-xl flex items-center justify-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 mobile-tap"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
            <ul className="space-y-2 sm:space-y-3">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs sm:text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Vibeworks AI Studio. Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 fill-pink-500" /> in LA
          </p>
          <a
            href="mailto:hello@vibeworks.ai"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
          >
            <Mail className="w-4 h-4" />
            hello@vibeworks.ai
          </a>
        </div>
      </div>
    </footer>
  )
}
