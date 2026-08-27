/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import About from './components/About';
import FreeUniversity from './components/FreeUniversity';
import Areas from './components/Areas';
import Gallery from './components/Gallery';
import Programs from './components/Programs';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-emerald-500 selection:text-white scroll-smooth">
      <Hero />
      <About />
      <FreeUniversity />
      <Areas />
      <Gallery />
      <Programs />
      <Footer />
    </main>
  );
}
