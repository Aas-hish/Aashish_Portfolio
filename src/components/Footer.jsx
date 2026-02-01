import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import ScrollFloat from './ScrollFloat';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [footerHeight, setFooterHeight] = useState(0);
    const footerRef = useRef(null);

    const socialLinks = [
        { icon: <Github size={20} />, href: "https://github.com/Aas-hish" },
        { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/aashish-sah-a6549b287" },
        { icon: <Instagram size={20} />, href: "https://www.instagram.com/_aashish_sah?igsh=czV1eXE2NHNqNXN1" },
        { icon: <Twitter size={20} />, href: "https://x.com/Aashish79576757" }
    ];

    useEffect(() => {
        const updateHeight = () => {
            if (footerRef.current) {
                setFooterHeight(footerRef.current.offsetHeight);
            }
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);

        const observer = new ResizeObserver(updateHeight);
        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            window.removeEventListener('resize', updateHeight);
            observer.disconnect();
        };
    }, []);

    return (
        <div style={{ height: footerHeight }} className="relative z-0">
            <div
                ref={footerRef}
                className="fixed bottom-0 left-0 w-full -z-10"
            >
                <footer className="bg-slate-950 border-t border-white/5 py-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50 pointer-events-none" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                            <div className="col-span-1 md:col-span-2">
                                <ScrollReveal width="100%">
                                    <div className="text-2xl font-bold mb-4">
                                        <ScrollFloat
                                            animationDuration={1}
                                            ease='back.inOut(2)'
                                            scrollStart='center bottom+=50%'
                                            scrollEnd='bottom bottom-=40%'
                                            stagger={0.03}
                                            containerClassName="inline-block"
                                            textClassName="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
                                        >
                                            Aashish.
                                        </ScrollFloat>
                                    </div>
                                    <p className="text-slate-400 max-w-sm leading-relaxed">
                                        Passionate Computer Science student and Full Stack Developer building the future of the web with modern technologies.
                                    </p>
                                </ScrollReveal>
                            </div>

                            <ScrollReveal delay={0.1} className="col-span-1">
                                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                                <ul className="space-y-2">
                                    <li><Link to="/about" className="text-slate-400 hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 duration-300">About Me</Link></li>
                                    <li><Link to="/projects" className="text-slate-400 hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 duration-300">Projects</Link></li>
                                    <li><Link to="/skills" className="text-slate-400 hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 duration-300">Skills</Link></li>
                                    <li><Link to="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 duration-300">Contact</Link></li>
                                </ul>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2} className="col-span-1">
                                <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
                                <p className="text-slate-400 mb-4 flex items-center gap-2">
                                    <Mail size={16} className="text-cyan-500" />
                                    aashish.sah1013@gmail.com
                                </p>
                                <div className="flex gap-4">
                                    {socialLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/30 transition-all hover:-translate-y-1 hover:shadow-cyan-500/20 hover:shadow-lg"
                                        >
                                            {link.icon}
                                        </a>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>

                        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-center items-center">
                            <p className="text-slate-500 text-sm">
                                &copy; {currentYear} Aashish. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
