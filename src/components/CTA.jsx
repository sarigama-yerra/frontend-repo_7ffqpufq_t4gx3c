import React from 'react'
import { ArrowRight } from 'lucide-react'

function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.25),transparent_40%)]" />
          <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl text-white font-semibold tracking-tight">Ready to automate your finance stack?</h3>
              <p className="mt-3 text-slate-300/90 max-w-xl">Join forward-thinking teams using FlowCard to issue virtual cards, enforce rules, and close the books faster.</p>
            </div>
            <div className="flex-shrink-0">
              <a href="#" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-slate-900 font-medium shadow-[0_20px_60px_-15px_rgba(56,189,248,0.7)]">
                Create your account <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
