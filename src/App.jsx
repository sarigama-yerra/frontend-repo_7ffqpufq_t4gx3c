import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Automations from './components/Automations'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background texture */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.1),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(56,189,248,0.08),transparent_40%)]" />

      <Navbar />
      <Hero />
      <Features />
      <Automations />
      <Pricing />
      <CTA />

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-400/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} FlowCard, Inc.</div>
          <div className="flex items-center gap-6">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Security</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
