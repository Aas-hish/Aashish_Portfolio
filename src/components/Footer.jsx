import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <Github size={20} />, href: "https://github.com/Aas-hish" },
        { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/aashish-sah-a6549b287" },
        { icon: <Instagram size={20} />, href: "https://www.instagram.com/_aashish_sah?igsh=czV1eXE2NHNqNXN1" },
        { icon: <Twitter size={20} />, href: "https://x.com/Aashish79576757" }
    ];

    return (
        <footer className="bg-slate-950 border-t border-white/5 py-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
                            Aashish<span className="text-cyan-400">.</span>
                        </h3>
                        <p className="text-slate-400 max-w-sm">
                            Passionate Computer Science student and Full Stack Developer building the future of the web with modern technologies.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/about" className="text-slate-400 hover:text-cyan-400 transition-colors">About Me</a></li>
                            <li><a href="/projects" className="text-slate-400 hover:text-cyan-400 transition-colors">Projects</a></li>
                            <li><a href="/skills" className="text-slate-400 hover:text-cyan-400 transition-colors">Skills</a></li>
                            <li><a href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
                        <p className="text-slate-400 mb-2 flex items-center gap-2">
                            <Mail size={16} className="text-cyan-500" />
                            aashish.sah1013@gmail.com
                        </p>
                        <div className="flex gap-4 mt-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/30 transition-all hover:-translate-y-1"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-center items-center">
                    <p className="text-slate-500 text-sm">
                        &copy; {currentYear} Aashish. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
