import React from 'react';
import { motion } from 'motion/react';
import { Shield, TrendingUp, Sun, MessageSquare, CheckCircle2, LayoutTemplate as Design, Zap, Battery, DollarSign, Leaf, ExternalLink } from 'lucide-react';

export function KatyAdvantage() {
  const advantages = [
    {
      title: "Panel Sales",
      description: "High-efficiency 280W+ panels optimized for maximum energy capture in the Texas sun.",
      icon: Sun,
      tag: "PREMIUM HARDWARE"
    },
    {
      title: "Custom Financing",
      description: "Custom plans to build home equity with $0 down options and low-interest rates.",
      icon: DollarSign,
      tag: "BUILD EQUITY"
    },
    {
      title: "Energy Independence",
      description: "Lock in your rates for decades and escape the volatility of commercial utility pricing.",
      icon: Zap,
      tag: "RATE LOCK GUARANTEE"
    },
    {
      title: "Resale Value",
      description: "Texas tax-exempt property value increase. Studies show up to 4.1% boost in home value instantly.",
      icon: TrendingUp,
      tag: "TAX EXEMPT ASSET"
    },
    {
      title: "Environment",
      description: "Clean, water-free energy production. Reduce your carbon footprint with sustainable technology.",
      icon: Leaf,
      tag: "SUSTAINABLE FUTURE"
    },
    {
      title: "Backup Power",
      description: "Intelligent battery backups for outages. Keep your luxury home running when the grid fails.",
      icon: Battery,
      tag: "OUTAGE PROTECTION"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tighter mb-4 uppercase">The <span className="text-yellow-400">6 Pillars</span> of Excellence</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Why Katy's elite homeowners choose Solar Glow Energy for their transition to clean power.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((adv, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col justify-between group hover:border-yellow-400/30 transition-all min-h-[300px]"
            >
              <div>
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-6 border border-yellow-400/20">
                  <adv.icon className="text-yellow-400" size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-4 tracking-tight">{adv.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed italic">
                  "{adv.description}"
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="text-[10px] text-slate-500 font-black tracking-widest uppercase">{adv.tag}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClientWins() {
  return (
    <section className="py-24 px-6 bg-slate-900/10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-2xl"
        >
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em]">Real Client Wins</h4>
            <a 
              href="https://www.google.com/maps/place/Solar+Glow+Energy/@29.7930486,-95.8244982,15z/data=!4m16!1m9!3m8!1s0x86412584ebeacefd:0x72c40df50305c9a0!2sSolar+Glow+Energy!8m2!3d29.7930504!4d-95.8241329!9m1!1b1!16s%2Fg%2F11kq81hnm5!3m5!1s0x86412584ebeacefd:0x72c40df50305c9a0!8m2!3d29.7930504!4d-95.8241329!16s%2Fg%2F11kq81hnm5?authuser=0&hl=en&entry=ttu&g_ep=EgoyMDI2MDQxOS4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-black text-yellow-400 uppercase tracking-widest flex items-center gap-2 hover:text-yellow-300 transition-colors"
            >
              View All Google Reviews
              <ExternalLink size={10} />
            </a>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-14 h-14 rounded-full bg-slate-800 flex-shrink-0 border border-white/5 overflow-hidden">
               <img src="https://ui-avatars.com/api/?name=Fernando+Guerrero&background=1A365D&color=D4AF37" alt="Fernando Guerrero" />
            </div>
            <div>
              <p className="text-lg text-slate-200 mb-4 font-medium leading-relaxed italic">
                "Solar Glow helped us build home equity while erasing our electric bills. The service was impeccable and the ROI happened even faster than they predicted. A must for Katy homeowners."
              </p>
              <div className="flex items-center gap-4">
                <div className="text-[11px] font-black tracking-widest uppercase">FERNANDO GUERRERO</div>
                <div className="flex text-yellow-500 text-[10px]">★★★★★</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ProcessTimeline() {
  const steps = [
    { 
      title: "CONSULT", 
      desc: "Initial Audit", 
      icon: Sun,
      detail: "Initial energy assessment and site survey to determine optimal layout."
    },
    { 
      title: "DESIGN", 
      desc: "3D Engineering", 
      icon: Design,
      detail: "Custom 3D system architecture and engineering tailored to your roof."
    },
    { 
      title: "INSTALL", 
      desc: "White-Glove Mount", 
      icon: Zap,
      detail: "White-glove professional mounting and wiring by our certified elite team."
    },
    { 
      title: "POWER ON", 
      desc: "Grid Connect", 
      icon: CheckCircle2,
      detail: "System activation and real-time monitoring setup for instant production."
    }
  ];

  return (
    <section className="py-24 px-6 overflow-hidden bg-[#020617]">
      <div className="max-w-5xl mx-auto glass p-12 rounded-2xl relative overflow-hidden">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-12 text-center">3D Process Timeline</h4>
        
        <div className="relative flex justify-between px-4 mb-20">
          <div className="step-line" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center gap-4 relative z-10 group"
            >
              <div className="dot group-hover:scale-125 transition-transform duration-300" />
              <div className="text-center">
                <span className="block text-[10px] font-black tracking-widest uppercase text-white mb-1">{step.title}</span>
                <span className="block text-[8px] text-slate-500 tracking-wider uppercase font-bold">{step.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-center"
              >
                <p className="text-[10px] text-slate-400 leading-relaxed font-medium">
                  {step.detail}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
