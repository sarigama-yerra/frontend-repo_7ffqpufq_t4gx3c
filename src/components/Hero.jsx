import React from 'react'
import Spline from '@splinetool/react-spline'
import { Check, Shield, Zap } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and noise overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur px-3 py-1.5 text-xs text-white/80 mb-6">
            <Shield className="h-3.5 w-3.5 text-emerald-300" /> Bank-grade security • PCI-ready
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-tight">
            Automate your finance ops with a secure, modern card stack
          </h1>
          <p className="mt-5 text-lg text-slate-200/90 max-w-2xl">
            FlowCard centralizes spend, rules, and reconciliation so your team moves faster. Virtual cards, approvals, and automations — all in one place.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-slate-900 font-medium shadow-[0_20px_60px_-15px_rgba(56,189,248,0.7)]">
              Start free trial
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 hover:text-white">
              See features
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-slate-200/90"><Check className="h-4 w-4 text-emerald-400"/> Instant virtual cards</div>
            <div className="flex items-center gap-2 text-slate-200/90"><Check className="h-4 w-4 text-emerald-400"/> Automated rules</div>
            <div className="flex items-center gap-2 text-slate-200/90"><Check className="h-4 w-4 text-emerald-400"/> Real-time insights</div>
          </div>
        </div>
      </div>

      {/* Decorative glows */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
    </section>
  )
}

export default Hero
