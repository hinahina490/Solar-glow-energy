import React, { useState } from 'react';
import { Phone, MapPin, Instagram, Facebook, Linkedin, MessageCircle, Mail, Send } from 'lucide-react';
import { motion } from 'motion/react';
import Logo from './Logo';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 border-b border-white/5 backdrop-blur-md bg-[#020617]/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo className="w-12 h-12 transition-transform hover:scale-105 duration-300 cursor-pointer" />
          <div className="flex flex-col -space-y-1">
            <span className="text-2xl font-serif text-white font-bold leading-tight">Solar Glow</span>
            <span className="text-[10px] font-sans text-yellow-500 font-black tracking-[0.3em] uppercase leading-tight">ENERGY</span>
          </div>
        </div>
        
        <div className="hidden lg:flex gap-8 text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <MapPin size={12} className="text-yellow-400" />
            25807 Westheimer Pkwy, Suite 427, Katy, TX
          </div>
          <div className="flex items-center gap-2 text-yellow-400 font-black">
            <Phone size={12} />
            (832) 280-6390
          </div>
        </div>

        <div className="flex items-center gap-6">
          <motion.a 
            href="https://wa.me/18322806390"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-yellow-400 text-black font-black rounded-sm hover:bg-yellow-300 transition-all text-[10px] uppercase tracking-widest"
          >
            Contact us
          </motion.a>
        </div>
      </div>
    </nav>
  );
}

export function FloatingSocial() {
  const socials = [
    { icon: Instagram, href: 'https://www.instagram.com/solarglowenergy/', label: 'Instagram' },
    { 
      icon: MessageCircle, 
      href: 'https://wa.me/18322806390?text=Hi%20Solar%20Glow,%20I%20just%20used%20your%20ROI%20calculator%20and%20want%20to%20save%20on%20my%20bill!', 
      label: 'WhatsApp', 
      color: 'text-green-500' 
    }
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {socials.map((social, i) => (
        <motion.a
          key={i}
          href={social.href}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 + i * 0.1 }}
          whileHover={{ scale: 1.1, x: -5 }}
          className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-400 hover:text-yellow-400 hover:border-yellow-400/50 transition-all group relative"
          target="_blank"
          rel="noopener noreferrer"
        >
          <social.icon size={20} className={social.color} />
          <span className="absolute right-14 px-3 py-1 bg-yellow-400 text-black text-[10px] font-bold uppercase tracking-widest rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {social.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
}

export function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-[#020617] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-4 mb-6">
              <Logo className="w-10 h-10" />
              <div className="flex flex-col -space-y-1">
                <span className="text-xl font-serif text-white font-bold leading-tight">Solar Glow</span>
                <span className="text-[8px] font-sans text-yellow-500 font-black tracking-[0.3em] uppercase leading-tight">ENERGY</span>
              </div>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed text-sm">
              Katy's premier provider of luxury residential solar solutions. Excellence in engineering, design, and customer service since inception.
            </p>
            
            <div className="mb-8 max-w-sm">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Stay Connected</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-sm px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-yellow-400 transition-colors"
                />
                <button className="bg-yellow-400 text-black px-4 py-2 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-yellow-300 transition-all flex items-center gap-2">
                  <Send size={12} />
                  Join
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://www.instagram.com/solarglowenergy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-yellow-400 transition-colors"><Instagram size={18} /></a>
              <a href="https://wa.me/18322806390" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-yellow-400 transition-colors"><MessageCircle size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 tracking-widest uppercase text-[10px] text-yellow-400">Contact Us</h4>
            <div className="space-y-6">
              <div className="flex gap-3 items-start text-slate-400">
                <MapPin className="text-yellow-400 mt-1 shrink-0" size={16} />
                <span className="text-xs leading-relaxed">25807 Westheimer Pkwy, <br />Suite 427, Katy, TX 77494</span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-center text-slate-400">
                  <Phone className="text-yellow-400 shrink-0" size={16} />
                  <a href="tel:8322806390" className="text-xs hover:text-yellow-400 transition-colors font-bold uppercase tracking-widest">(832) 280-6390</a>
                </div>
                <div className="flex gap-3 items-center text-slate-400">
                  <Mail className="text-yellow-400 shrink-0" size={16} />
                  <a href="mailto:solarglowtx@gmail.com" className="text-xs hover:text-yellow-400 transition-colors lowercase tracking-widest">solarglowtx@gmail.com</a>
                </div>
                <a 
                  href="tel:8322806390"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 text-black font-black text-[10px] uppercase tracking-widest rounded-sm hover:bg-yellow-300 transition-all"
                >
                  <Phone size={12} />
                  Call Now
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 tracking-widest uppercase text-[10px] text-slate-400">Services</h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Residential Solar</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Battery Storage</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Commercial Setup</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Tax Incentives</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-600 uppercase tracking-widest font-bold">
            © 2024 Solar Glow Energy.
          </p>
          <div className="flex gap-8 text-[10px] text-slate-600 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
