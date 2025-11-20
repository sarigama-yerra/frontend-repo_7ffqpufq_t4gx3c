import React from 'react'
import { Layers, Sparkles, TrendingUp, ShieldCheck, Workflow, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    title: 'Smart spend controls',
    desc: 'Set limits, categories, and approvals to keep budgets on track automatically.'
  },
  {
    icon: Workflow,
    title: 'No-code automations',
    desc: 'Trigger actions on transactions, vendors, or teams — without writing a line of code.'
  },
  {
    icon: BarChart3,
    title: 'Live reconciliation',
    desc: 'Sync receipts and books in real time so your close is days, not weeks.'
  },
  {
    icon: ShieldCheck,
    title: 'Compliance built-in',
    desc: 'SCA, 3DS, and audit trails help you ship fast while staying compliant.'
  },
]

function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur px-3 py-1.5 text-xs text-white/80 mb-6">
            <Layers className="h-3.5 w-3.5 text-cyan-300" /> Finance automation platform
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">Everything you need to automate finance</h2>
          <p className="mt-4 text-slate-300/90">Designed for modern teams — beautiful, fast, and secure by default.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition shadow-[0_10px_40px_-20px_rgba(56,189,248,0.4)]">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-white/20 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="text-white font-medium">{title}</h3>
              <p className="text-sm text-slate-300/90 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
