import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Database, Layout, Smartphone, MousePointer2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SpotlightCard from '../components/SpotlightCard';
import ScrollReveal, { ParallaxCard } from '../components/ScrollReveal';

import profileImg from '../assets/Aashish.png';

import ScrollFloat from '../components/ScrollFloat';

const Home = () => {
    return (
        <div className="overflow-hidden bg-slate-950">
            {/* Hero Section */}
            <section className="relative min-h-screen pt-16 pb-12 lg:pt-0 overflow-hidden flex flex-col justify-center">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a556812_1px,transparent_1px),linear-gradient(to_bottom,#4a556812_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Ambient Background Glows */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">

                        {/* Left Column: Introduction & CTA */}
                        {/* ... (existing code) ... */}
                        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 relative z-20 -mt-28 lg:mt-0">
                            <ScrollReveal width="100%">
                                <div className="inline-block px-3 py-1 mb-4 border border-cyan-500/30 rounded-full bg-cyan-500/5 backdrop-blur-sm">
                                    <span className="text-cyan-400 text-sm font-bold tracking-wider uppercase flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                                        Available for work
                                    </span>
                                </div>
                                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tight text-white">
                                    Aashish <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                        Is Here!
                                    </span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal width="100%" delay={0.1}>
                                <p className="text-slate-400 text-xl lg:text-2xl mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                    Crafting pixel-perfect, interactive digital experiences that live on the web and mobile.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal width="100%" delay={0.2} className="mb-12">
                                <div className="flex flex-row flex-nowrap gap-4 justify-center lg:justify-start">
                                    <Link
                                        to="/contact"
                                        className="px-9 py-5 bg-cyan-400 text-slate-900 font-bold text-base tracking-wide hover:bg-cyan-300 transition-all hover:scale-105 rounded-full shadow-lg shadow-cyan-400/20"
                                    >
                                        Let's Talk
                                    </Link>
                                    <Link
                                        to="/projects"
                                        className="px-9 py-5 border border-white/10 bg-white/5 text-white font-bold text-base tracking-wide hover:bg-white/10 transition-all hover:scale-105 rounded-full backdrop-blur-md flex items-center gap-2"
                                    >
                                        View Work <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal width="100%" delay={0.3} className="flex gap-8 pt-8 border-t border-white/5 w-full justify-center lg:justify-start">
                                <div className="flex flex-col items-center lg:items-start gap-4">
                                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Tech Stack</span>
                                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 lg:gap-0">
                                        {[
                                            { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                                            { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
                                            { name: 'React', url: 'https://react.dev/' },
                                            { name: 'Next.js', url: 'https://nextjs.org/' },
                                            { name: 'React Native', url: 'https://reactnative.dev/' }
                                        ].map((tech, index) => (
                                            <motion.a
                                                key={index}
                                                href={tech.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                initial={{ opacity: 0, x: -50, rotate: -10 }}
                                                animate={{ opacity: 1, x: 0, rotate: 0 }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: 0.5 + (index * 0.1),
                                                    type: "spring",
                                                    stiffness: 100
                                                }}
                                                whileHover={{
                                                    scale: 1.2,
                                                    zIndex: 100,
                                                    y: -10,
                                                    rotate: Math.random() < 0.5 ? -2 : 2,
                                                    transition: { duration: 0.2 }
                                                }}
                                                className="px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-cyan-400 text-xs font-bold shadow-lg shadow-black/50 relative hover:shadow-cyan-500/20 lg:-ml-4 lg:first:ml-0 cursor-pointer block"
                                                style={{ zIndex: 10 - index }}
                                            >
                                                {tech.name}
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Center Column: Profile Image (Cutout Version) */}
                        <div className="lg:col-span-6 relative flex justify-end items-end order-1 lg:order-2 h-[400px] lg:h-screen mt-0 lg:mt-0 perspective-1000">
                            {/* Dynamic Backdrops */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-cyan-500/20 rounded-full border-dashed z-0"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-purple-500/20 rounded-full border-dotted z-0"
                            />

                            {/* Main Image Layer */}
                            <motion.div
                                className="relative z-10 w-full h-full flex items-end justify-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="relative w-full max-w-lg lg:max-w-full h-full flex items-end justify-center">
                                    {/* The Cutout Image */}
                                    <motion.img
                                        src={profileImg}
                                        alt="Aashish"
                                        className="relative z-20 w-auto h-[100%] lg:h-[120%] max-w-none object-contain opacity-80"
                                        animate={{ y: [0, -20, 0] }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                        style={{
                                            pointerEvents: 'none',
                                            maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                                            WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                                        }}
                                    />
                                    {/* Jacket Mask/Overlay */}


                                    {/* Glass Cards Floating Over/Behind */}



                                </div>
                            </motion.div>
                        </div>



                    </div>
                </div>
            </section>

            {/* Services/Skills Snapshot */}
            <section className="py-24 bg-slate-900/30">
                <div className="container mx-auto px-6">
                    <ScrollReveal width="100%" className="text-center mb-16">
                        <ScrollFloat
                            animationDuration={1}
                            ease='back.inOut(2)'
                            scrollStart='center bottom+=50%'
                            scrollEnd='bottom bottom-=40%'
                            stagger={0.03}
                            containerClassName="mb-4"
                            textClassName="text-3xl md:text-4xl font-bold text-white"
                        >
                            What I Do
                        </ScrollFloat>
                        <p className="text-slate-400 max-w-2xl mx-auto">Combining technical expertise with creative design to build scalable solutions.</p>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Layout size={32} />, title: 'Web Development', desc: 'Modern, responsive websites using React, Next.js and Tailwind CSS.' },
                            { icon: <Smartphone size={32} />, title: 'Mobile Apps', desc: 'Cross-platform mobile applications built with React Native and Flutter.' },
                            { icon: <Code size={32} />, title: 'Backend Systems', desc: 'Robust APIs and server-side logic using Node.js, Express and Python.' },
                            { icon: <Database size={32} />, title: 'Database Design', desc: 'Efficient data modeling with MongoDB, PostgreSQL and Firebase.' }
                        ].map((service, index) => (
                            <ParallaxCard key={index} className="h-full">
                                <SpotlightCard className="p-8 h-full bg-white/5 hover:bg-white/10 transition-colors group border border-white/5">
                                    <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-cyan-400 group-hover:bg-cyan-500/20">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm">
                                        {service.desc}
                                    </p>
                                </SpotlightCard>
                            </ParallaxCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects Preview */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-16">
                        <ScrollReveal>
                            <ScrollFloat
                                animationDuration={1}
                                ease='back.inOut(2)'
                                scrollStart='center bottom+=50%'
                                scrollEnd='bottom bottom-=40%'
                                stagger={0.03}
                                containerClassName="mb-4"
                                textClassName="text-3xl md:text-4xl font-bold text-white"
                            >
                                Featured Projects
                            </ScrollFloat>
                            <p className="text-slate-400">Some of my recent work</p>
                        </ScrollReveal>
                        <Link to="/projects" className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group">
                            View All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <ParallaxCard className="h-full">
                            <SpotlightCard className="p-0 bg-slate-900 group h-full border border-white/10">
                                <div className="aspect-video relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-60" />
                                    <img
                                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                        alt="Hospital Website"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 relative z-20 -mt-12">
                                    <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-bold rounded-full mb-3 backdrop-blur-md">Web App</div>
                                    <h3 className="text-xl font-bold mb-2 text-white">RVS Hospital Platform</h3>
                                    <p className="text-slate-400 text-sm mb-4">Complete patient management system with appointment booking and doctor profiles.</p>
                                    <div className="flex gap-2 text-slate-500 text-sm">
                                        <span>HTML</span>
                                        <span>•</span>
                                        <span>Tailwind</span>
                                        <span>•</span>
                                        <span>JS</span>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </ParallaxCard>

                        {/* Project 2 */}
                        <ParallaxCard className="h-full">
                            <SpotlightCard className="p-0 bg-slate-900 group h-full border border-white/10">
                                <div className="aspect-video relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-60" />
                                    <img
                                        src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                        alt="Task App"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 relative z-20 -mt-12">
                                    <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-bold rounded-full mb-3 backdrop-blur-md">Mobile App</div>
                                    <h3 className="text-xl font-bold mb-2 text-white">Student Task Manager</h3>
                                    <p className="text-slate-400 text-sm mb-4">Productivity app with goal tracking, streaks, and local data persistence.</p>
                                    <div className="flex gap-2 text-slate-500 text-sm">
                                        <span>React Native</span>
                                        <span>•</span>
                                        <span>AsyncStorage</span>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </ParallaxCard>

                        {/* Project 3 */}
                        <ParallaxCard className="h-full">
                            <SpotlightCard className="p-0 bg-slate-900 group h-full border border-white/10">
                                <div className="aspect-video relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-60" />
                                    <img
                                        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                        alt="Finance App"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 relative z-20 -mt-12">
                                    <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full mb-3 backdrop-blur-md">Full Stack</div>
                                    <h3 className="text-xl font-bold mb-2 text-white">Expense Tracker</h3>
                                    <p className="text-slate-400 text-sm mb-4">Shared finance management with real-time room chat and budget tracking.</p>
                                    <div className="flex gap-2 text-slate-500 text-sm">
                                        <span>Firebase</span>
                                        <span>•</span>
                                        <span>React Native</span>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </ParallaxCard>
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link to="/projects" className="inline-flex items-center gap-2 text-cyan-400 font-medium">
                            View All Projects <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
