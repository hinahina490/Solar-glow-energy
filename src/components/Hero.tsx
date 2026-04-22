import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden perspective-1000">
      {/* 3D-Style Animated Background */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[#020617]/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Solar House" 
          className="w-full h-[120%] object-cover scale-110 brightness-[0.35] saturate-[0.8]"
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-left w-full pt-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block bg-yellow-20 text-black px-5 py-2 font-black tracking-[0.2em] uppercase text-xs mb-8 rounded-none border-l-4 border-black"
          >
            Premium Solar Solutions
          </motion.span>
          
          <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-8 text-white uppercase">
            Own Your <br />
            <span className="text-yellow-400 italic">Energy.</span>
          </h1>
          
          <p className="text-white max-w-xl text-lg md:text-2xl leading-relaxed mb-12">
            Premium residential solar systems for Katy, Texas homeowners who refuse to rent their power. With solar panels, you can reduce the cost of electricity in your home or business. Get started to learn more about the benefits.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <motion.a 
              href="https://wa.me/18322806390?text=Hi%20Solar%20Glow,%20I%20want%20to%20get%20started%20with%20premium%20solar%20solutions!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 bg-yellow-400 text-black font-black rounded-sm hover:bg-yellow-300 transition-all text-sm uppercase tracking-widest text-center"
            >
              GET STARTED TODAY
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-yellow-400"
      >
        <div className="dot" />
        <span className="text-[10px] uppercase tracking-widest font-black">Scroll</span>
      </motion.div>
    </section>
  );
}
