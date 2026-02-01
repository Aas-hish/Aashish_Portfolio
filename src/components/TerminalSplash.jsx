import React, { useState, useEffect } from 'react';

const TerminalSplash = ({ onComplete }) => {
    const [text, setText] = useState('');
    const [phase, setPhase] = useState('typing'); // typing, complete, fading
    const fullText = "> initializing_portfolio.exe";

    useEffect(() => {
        let currentIndex = 0;
        let timeout;

        // Typing loop
        const typeNextChar = () => {
            if (currentIndex < fullText.length) {
                setText(fullText.slice(0, currentIndex + 1));
                currentIndex++;
                // Randomize typing speed for realism (30ms to 80ms)
                timeout = setTimeout(typeNextChar, Math.random() * 50 + 30);
            } else {
                setPhase('complete');
                // Wait a bit before fading out
                setTimeout(() => {
                    setPhase('fading');
                    // Wait for fade animation to finish before unmounting
                    setTimeout(onComplete, 800);
                }, 1200);
            }
        };

        // Start typing after a short delay
        timeout = setTimeout(typeNextChar, 500);

        return () => clearTimeout(timeout);
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-slate-950 transition-opacity duration-700 ease-in-out ${phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            {/* Background Gradients - Matching Home Hero */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-700/10 blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-700/10 blur-[100px]" />
            </div>

            <div className="relative z-10 font-mono text-xl md:text-3xl font-bold flex items-center gap-2">
                <span className="text-cyan-400">
                    {text}
                </span>
                <span
                    className={`w-3 h-8 bg-purple-500 inline-block ${phase === 'typing' ? 'animate-pulse' : 'opacity-0'
                        }`}
                ></span>
            </div>

            {/* Optional: Status Text below */}
            <div className={`absolute bottom-10 text-slate-500 font-mono text-sm transition-opacity duration-300 ${phase === 'complete' ? 'opacity-100' : 'opacity-0'}`}>
                [ OK ] Loaded successfully...
            </div>
        </div>
    );
};

export default TerminalSplash;
