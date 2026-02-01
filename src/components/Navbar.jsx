import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, User, Briefcase, Mail, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [displayText, setDisplayText] = useState('');
    const fullText = 'Aashish.';
    const [isDeleting, setIsDeleting] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Infinite Bidirectional Typing effect logic
    useEffect(() => {
        let timer;
        const handleTyping = () => {
            const currentText = fullText;

            if (isDeleting) {
                setDisplayText(prev => currentText.substring(0, prev.length - 1));
            } else {
                setDisplayText(prev => currentText.substring(0, prev.length + 1));
            }

            if (!isDeleting && displayText === currentText) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end
            } else if (isDeleting && displayText === '') {
                setIsDeleting(false); // Pause at start handled by next tick naturally or add delay if needed
            }
        };

        // Speed control
        const typingSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && displayText === fullText) {
            // Already handled by timeout above, but we need to clear interval/timeout logic to avoid race conditions.
            // Actually, a simpler standard approach:
        } else {
            timer = setTimeout(handleTyping, typingSpeed);
        }

        return () => clearTimeout(timer);
    }, [displayText, isDeleting]);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/', icon: <Code size={18} /> },
        { name: 'About', path: '/about', icon: <User size={18} /> },
        { name: 'Skills', path: '/skills', icon: <Zap size={18} /> },
        { name: 'Projects', path: '/projects', icon: <Briefcase size={18} /> },
        { name: 'Contact', path: '/contact', icon: <Mail size={18} /> },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-slate-900/80 backdrop-blur-md shadow-lg'
                : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex items-center justify-between h-16">
                    {/* Logo with Typing Effect */}
                    <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-80 transition-opacity flex items-center">
                        {displayText}
                        <span className="text-cyan-400 animate-pulse ml-1">_</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 group ${location.pathname === link.path
                                    ? 'text-white bg-white/10'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {link.icon}
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 rounded-full border border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white p-2 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center gap-3 ${location.pathname === link.path
                                        ? 'bg-cyan-500/10 text-cyan-400'
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {link.icon}
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
