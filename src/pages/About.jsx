import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Heart, User, Calendar } from 'lucide-react';
import ScrollReveal, { ParallaxCard } from '../components/ScrollReveal';
import ScrollFloat from '../components/ScrollFloat';

const About = () => {
    return (
        <div className="pt-20 pb-20">
            {/* Hero */}
            <section className="container mx-auto px-6 mb-20">
                <ScrollReveal width="100%" className="text-center max-w-3xl mx-auto">
                    <div className="text-4xl md:text-6xl font-bold mb-6">
                        <ScrollFloat
                            animationDuration={1}
                            ease='back.inOut(2)'
                            scrollStart='center bottom+=50%'
                            scrollEnd='bottom bottom-=40%'
                            stagger={0.03}
                            textClassName="text-white"
                            containerClassName="inline-block mr-2"
                        >
                            About
                        </ScrollFloat>
                        <ScrollFloat
                            animationDuration={1}
                            ease='back.inOut(2)'
                            scrollStart='center bottom+=50%'
                            scrollEnd='bottom bottom-=40%'
                            stagger={0.03}
                            textClassName="text-cyan-400"
                            containerClassName="inline-block"
                        >
                            Me
                        </ScrollFloat>
                    </div>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        I'm a final year Computer Science student with a deep love for technology and innovation.
                        Driving the future through code, creativity, and continuous learning.
                    </p>
                </ScrollReveal>
            </section>

            {/* Story & Image */}
            <section className="container mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <ParallaxCard>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-3xl blur-2xl opacity-20" />
                            <img
                                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                                alt="Aashish studying"
                                className="relative rounded-3xl shadow-2xl border border-white/10 w-full object-cover h-[500px]"
                            />
                        </div>
                    </ParallaxCard>

                    <ScrollReveal width="100%" delay={0.2}>
                        <div className="flex items-center gap-3 mb-6">
                            <User className="text-purple-400" size={32} />
                            <ScrollFloat
                                animationDuration={1}
                                ease='back.inOut(2)'
                                scrollStart='center bottom+=50%'
                                scrollEnd='bottom bottom-=40%'
                                stagger={0.03}
                                textClassName="text-3xl font-bold text-white"
                            >
                                My Story
                            </ScrollFloat>
                        </div>
                        <div className="space-y-6 text-slate-300 leading-relaxed">
                            {/* ... Content ... */}
                            <p>
                                My journey in computer science began with a curiosity about how things work behind the scenes of the digital world.
                                Since then, I've dived deep into programming, algorithms, and software engineering principles.
                            </p>
                            <p>
                                I'm particularly passionate about <span className="text-cyan-400 font-medium">Full-Stack Development</span> and
                                <span className="text-purple-400 font-medium"> Artificial Intelligence</span>. I love building applications that solve real-world problems and provide intuitive user experiences.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                                or mentoring fellow students to help them overcome programming challenges.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
                            {[
                                { label: 'Projects', value: '10+' },
                                { label: 'Years Code', value: '3+' },
                                { label: 'Tech Stack', value: '10+' },
                                { label: 'CGPA', value: '7.49' }
                            ].map((stat, i) => (
                                <div key={i} className="text-center p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Education Timeline */}
            <section className="container mx-auto px-6 mb-24">
                <ScrollReveal width="100%">
                    <div className="mb-12 text-center flex justify-center items-center gap-3">
                        <BookOpen className="text-cyan-400" size={32} />
                        <ScrollFloat
                            animationDuration={1}
                            ease='back.inOut(2)'
                            scrollStart='center bottom+=50%'
                            scrollEnd='bottom bottom-=40%'
                            stagger={0.03}
                            textClassName="text-3xl font-bold text-white"
                        >
                            Education Journey
                        </ScrollFloat>
                    </div>
                </ScrollReveal>

                <div className="max-w-3xl mx-auto relative pl-8 border-l border-white/10 space-y-12">
                    {/* ... Education items ... */}
                    {/* Item 1 */}
                    <ScrollReveal width="100%" className="relative">
                        <span className="absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-slate-950 bg-cyan-500" />
                        <div className="bg-slate-900 border border-white/5 p-6 rounded-2xl hover:border-cyan-500/30 transition-colors">
                            <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                                <h3 className="text-xl font-bold text-white">Bachelor of Computer Science</h3>
                                <span className="text-xs font-semibold px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded-lg flex items-center gap-1">
                                    <Calendar size={12} /> 2022 - 2026
                                </span>
                            </div>
                            <p className="text-slate-400 text-sm mb-4">Focus on Software Engineering, Data Structures & AI</p>
                            <div className="flex flex-wrap gap-2">
                                {['DSA', 'Web Dev', 'Database Systems', 'Cloud Computing'].map(tag => (
                                    <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Item 2 */}
                    <ScrollReveal width="100%" delay={0.2} className="relative">
                        <span className="absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-slate-950 bg-slate-600" />
                        <div className="bg-slate-900 border border-white/5 p-6 rounded-2xl hover:border-slate-500/30 transition-colors">
                            <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                                <h3 className="text-xl font-bold text-white">Higher Secondary Education</h3>
                                <span className="text-xs font-semibold px-2 py-1 bg-slate-700/30 text-slate-400 rounded-lg flex items-center gap-1">
                                    <Calendar size={12} /> 2020 - 2022
                                </span>
                            </div>
                            <p className="text-slate-400 text-sm">Mathematics, Physics, Chemistry</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Interests */}
            <section className="container mx-auto px-6">
                <ScrollReveal width="100%">
                    <div className="mb-12 text-center flex justify-center items-center gap-3">
                        <Heart className="text-red-400" size={32} />
                        <ScrollFloat
                            animationDuration={1}
                            ease='back.inOut(2)'
                            scrollStart='center bottom+=50%'
                            scrollEnd='bottom bottom-=40%'
                            stagger={0.03}
                            textClassName="text-3xl font-bold text-white"
                        >
                            What I Love
                        </ScrollFloat>
                    </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: 'Gaming', icon: '🎮', desc: 'Strategic & Puzzle games that challenge the mind.' },
                        { title: 'Exploring', icon: '🚀', desc: 'Tech blogs, research papers & sci-fi novels.' },
                        { title: 'Community', icon: '🤝', desc: 'Active contributor in tech communities & open source.' }
                    ].map((item, i) => (
                        <ParallaxCard key={i} className="h-full">
                            <div className="bg-white/5 border border-white/5 p-8 rounded-2xl text-center hover:bg-white/10 transition-all h-full">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-slate-400">{item.desc}</p>
                            </div>
                        </ParallaxCard>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
