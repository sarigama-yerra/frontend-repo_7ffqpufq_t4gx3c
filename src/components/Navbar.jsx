import React from 'react'
import { Menu, CreditCard, ArrowRight } from 'lucide-react'

function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center shadow-lg">
            <CreditCard className="h-6 w-6 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight text-lg">FlowCard</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#automations" className="hover:text-white transition">Automations</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm text-white/90 hover:text-white">Sign in</button>
          <a href="#cta" className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-medium shadow-[0_10px_30px_-10px_rgba(59,130,246,0.7)]">
            Get started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button className="md:hidden p-2 rounded-lg border border-white/15 text-white/90">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
