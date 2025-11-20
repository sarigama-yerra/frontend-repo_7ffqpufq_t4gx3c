import React from 'react'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    highlight: false,
    features: ['Unlimited virtual cards', 'Basic rules', 'Email support']
  },
  {
    name: 'Growth',
    price: '$49',
    period: 'per month',
    highlight: true,
    features: ['Advanced automations', 'Team controls', 'Priority support']
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: '',
    highlight: false,
    features: ['Enterprise security', 'SAML SSO', 'Dedicated manager']
  },
]

function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-300/90">Start free. Upgrade when you scale.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl border p-6 bg-white/5 ${tier.highlight ? 'border-cyan-400/40 shadow-[0_20px_60px_-20px_rgba(56,189,248,0.5)]' : 'border-white/10'}`}>
              <div className="text-white/80">{tier.name}</div>
              <div className="mt-2 flex items-end gap-1">
                <div className="text-4xl font-semibold text-white">{tier.price}</div>
                <div className="text-slate-300/80 mb-2">{tier.period}</div>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-300/90">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> {f}</li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-xl px-4 py-2 font-medium ${tier.highlight ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900' : 'border border-white/15 text-white/90 bg-white/5'}`}>Choose {tier.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
