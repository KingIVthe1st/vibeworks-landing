import { Bot, Instagram, Twitter, Linkedin, Mail } from 'lucide-react'

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
    { name: 'Press', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ]
}

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="py-16 sm:py-20 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <span className="text-xl font-semibold">Farrah AI</span>
            </div>
            <p className="text-zinc-500 mb-6 max-w-xs leading-relaxed text-sm">
              AI assistants that think, speak, and sell like you—so you can scale without burning out.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center hover:bg-zinc-800 transition-colors duration-300 mobile-tap"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-zinc-500" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium mb-4 text-zinc-300 text-sm">Product</h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-zinc-300 text-sm">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-zinc-300 text-sm">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="mailto:investors@farrah.ai" className="text-zinc-600 hover:text-zinc-400 transition-colors text-sm">
                  Investors
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Farrah AI. All rights reserved.
          </p>
          <a
            href="mailto:hello@farrah.ai"
            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
          >
            <Mail className="w-4 h-4" />
            hello@farrah.ai
          </a>
        </div>
      </div>
    </footer>
  )
}
