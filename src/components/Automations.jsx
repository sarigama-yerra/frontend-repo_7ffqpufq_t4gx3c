import React from 'react'
import { PlayCircle, Plus, Split, Receipt, GitBranch } from 'lucide-react'

function Step({ number, title, desc }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-cyan-400/20 border border-white/20 text-white flex items-center justify-center font-semibold">{number}</div>
      <h3 className="text-white font-medium mt-2">{title}</h3>
      <p className="text-sm text-slate-300/90 mt-2">{desc}</p>
    </div>
  )
}

function Automations() {
  return (
    <section id="automations" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur px-3 py-1.5 text-xs text-white/80 mb-6">
              <GitBranch className="h-3.5 w-3.5 text-cyan-300" /> Workflows
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">Build automations that save hours</h2>
            <p className="mt-4 text-slate-300/90">Create triggers and actions for any event with an elegant, no-code builder.</p>

            <div className="mt-8 grid gap-4">
              <Step number="1" title="Create a rule" desc="Start with a trigger like 'transaction above $1,000' or 'vendor is SaaS'." />
              <Step number="2" title="Add conditions" desc="Refine by team, card, or time window with AND/OR logic." />
              <Step number="3" title="Automate actions" desc="Auto-approve, request receipt, or post to Slack and your ERP." />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-6">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="text-white/90">When transaction matches:</div>
              <div className="mt-3 grid sm:grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/5 px-4 py-3 border border-white/10">Amount > $1,000</div>
                <div className="rounded-xl bg-white/5 px-4 py-3 border border-white/10">Vendor = SaaS</div>
              </div>
              <div className="mt-5 text-white/90">Then do:</div>
              <div className="mt-3 grid sm:grid-cols-3 gap-3">
                <div className="rounded-xl bg-white/5 px-4 py-3 border border-white/10">Request receipt</div>
                <div className="rounded-xl bg-white/5 px-4 py-3 border border-white/10">Notify Finance</div>
                <div className="rounded-xl bg-white/5 px-4 py-3 border border-white/10">Post to ERP</div>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-slate-900 font-medium">Run <PlayCircle className="h-4 w-4" /></button>
                <button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white/90"><Plus className="h-4 w-4" /> Add Step</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Automations
