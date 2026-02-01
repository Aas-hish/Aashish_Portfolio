import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import TerminalSplash from './components/TerminalSplash';
import MouseSpotlight from './components/MouseSpotlight';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <TerminalSplash onComplete={() => setLoading(false)} />}

      {!loading && (
        <Router>
          <ScrollToTop />
          <SmoothScroll />
          <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500 selection:text-white font-sans overflow-x-hidden animate-in fade-in duration-700">
            <MouseSpotlight />

            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-700/10 blur-[100px]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-700/10 blur-[100px]" />
            </div>

            <Navbar />

            <main className="relative pt-20">
              <AnimatedRoutes />
            </main>


            <Footer />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
