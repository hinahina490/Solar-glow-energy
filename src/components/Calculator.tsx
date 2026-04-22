import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Calculator() {
  const [bill, setBill] = useState(350);

  const systemSize = (bill / 10).toFixed(1);
  const annualSavings = bill * 12 * 0.9;
  const savings25Year = annualSavings * 25;
  const propertyValueIncrease = savings25Year * 0.4;

  return (
    <section id="calculator" className="py-24 px-6 bg-[#020617]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass p-10 rounded-3xl w-full blue-glow space-y-8 relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-600/10 blur-[80px]" />
               
               <h3 className="text-xl font-bold border-l-4 border-yellow-400 pl-4 tracking-tight">Solar Savings Calculator</h3>
               
               <div className="space-y-8">
                 <div className="space-y-4">
                   <div className="flex justify-between items-end">
                     <span className="text-slate-400 text-sm uppercase tracking-widest font-medium">Monthly Electric Bill</span>
                     <span className="text-yellow-400 font-mono text-2xl font-black tracking-tighter">${bill}</span>
                   </div>
                   <input
                    type="range"
                    min="50"
                    max="1000"
                    step="10"
                    value={bill}
                    onChange={(e) => setBill(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                  />
                 </div>

                 <div className="grid grid-cols-2 gap-8 pt-4">
                   <div className="space-y-2">
                     <div className="text-[10px] uppercase text-slate-500 tracking-widest font-black">Estimated System Size</div>
                     <div className="text-3xl font-mono font-bold tracking-tighter">{systemSize} <span className="text-xs text-slate-500 font-sans">kW</span></div>
                   </div>
                   <div className="space-y-2">
                     <div className="text-[10px] uppercase text-slate-500 tracking-widest font-black">Annual Savings</div>
                     <div className="text-3xl font-mono font-bold text-blue-400 tracking-tighter">${annualSavings.toLocaleString()}</div>
                   </div>
                 </div>

                 <div className="bg-white/5 p-6 rounded-2xl space-y-6 border border-white/5">
                   <div className="flex justify-between items-end">
                     <div className="text-[10px] text-slate-400 uppercase tracking-widest font-black">25-Year Predicted Savings</div>
                     <div className="text-5xl font-black text-yellow-400 gold-glow tracking-tighter">
                       ${savings25Year.toLocaleString()}
                     </div>
                   </div>
                   <div className="flex justify-between items-end">
                     <div className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Property Value Increase</div>
                     <div className="text-xl font-bold text-white tracking-tight">
                       +${propertyValueIncrease.toLocaleString()}
                     </div>
                   </div>
                 </div>
               </div>

               <p className="text-[10px] text-center text-slate-600 font-medium">
                 *Calculated based on Katy, TX average sunlight hours and current utility index.
               </p>
            </div>
          </motion.div>

          <div className="space-y-10">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="space-y-4"
            >
              <h2 className="text-5xl font-black tracking-tighter leading-tight">Investment Grade <br /><span className="text-yellow-400 italic">Energy Planning.</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
                Solar isn't just an upgrade; it's a strategic financial asset that pays dividends every time the sun rises.
              </p>
            </motion.div>

            <motion.a 
              href="https://wa.me/18322806390?text=Hi%20Solar%20Glow,%20I%20just%20used%20your%20ROI%20calculator%20and%20want%20to%20save%20on%20my%20bill!"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-5 bg-yellow-400 text-black font-black rounded-sm hover:bg-yellow-300 transition-all shadow-[0_0_30px_rgba(250,204,21,0.4)] text-sm uppercase tracking-widest text-center"
            >
              Get Started Today
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
