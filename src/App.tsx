/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar, Footer, FloatingSocial } from './components/Navigation';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import { KatyAdvantage, ClientWins, ProcessTimeline } from './components/Sections';

export default function App() {
  return (
    <main className="min-h-screen selection:bg-yellow-400 selection:text-black">
      <Navbar />
      <FloatingSocial />
      <Hero />
      <KatyAdvantage />
      <Calculator />
      <ProcessTimeline />
      <ClientWins />
      <Footer />
    </main>
  );
}
