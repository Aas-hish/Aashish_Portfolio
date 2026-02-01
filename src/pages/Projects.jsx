import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Filter } from 'lucide-react';
import ScrollReveal, { ParallaxCard } from '../components/ScrollReveal';

const projectsData = [
    {
        id: 1,
        title: 'RVS Hospital Website',
        category: 'web',
        image: 'https://i.pinimg.com/originals/4c/e0/cd/4ce0cda757e0a792673339c7a5b722fb.jpg',
        description: 'A modern, patient-friendly hospital website with appointment booking, doctor profiles, and medical services information.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
        liveLink: 'https://www.rvsmch.org',
        githubLink: '#'
    },
    {
        id: 2,
        title: 'Student To-Do App',
        category: 'mobile',
        image: 'https://t4.ftcdn.net/jpg/15/15/72/75/360_F_1515727584_fsqPsq0xztNr1SYQue6PpNp7yx2cyYF6.jpg',
        description: 'Productivity-focused mobile app helping students set study goals, track progress, and maintain daily streaks.',
        technologies: ['React Native', 'JavaScript', 'AsyncStorage'],
        liveLink: null,
        githubLink: 'https://github.com/Aas-hish/HabbitO'
    },
    {
        id: 3,
        title: 'Expense Tracker App',
        category: 'mobile',
        image: 'https://www.shutterstock.com/image-photo/computer-app-money-budget-expense-260nw-2103117641.jpg',
        description: 'Feature-rich finance app with room-based sharing, real-time chat, and income/expense tracking.',
        technologies: ['React Native', 'Firebase', 'JavaScript'],
        liveLink: null,
        githubLink: 'https://github.com/Aas-hish/XpenseTracker'
    },
    {
        id: 4,
        title: 'Personal Portfolio',
        category: 'web',
        image: 'https://i.postimg.cc/cLVrGktc/Screenshot-from-2025-09-25-22-23-06.png',
        description: 'Sleek, responsive portfolio website optimized for performance and SEO to showcase projects and skills.',
        technologies: ['HTML5', 'Bootstrap', 'JavaScript', 'SEO'],
        liveLink: 'https://aashishportfolioo.netlify.app/',
        githubLink: 'https://github.com/Aas-hish'
    },
    {
        id: 5,
        title: 'Bank Management System',
        category: 'other',
        image: 'https://i.pinimg.com/originals/11/25/19/112519173a978616f3cd65e474cf4b57.jpg',
        description: 'Java-based console application simulating core banking features like transactions, account management, and balance checks.',
        technologies: ['Java', 'OOP', 'Console'],
        liveLink: null,
        githubLink: 'https://github.com/Aas-hish/Banking-System'
    },
    {
        id: 6,
        title: 'Budget Tracker App',
        category: 'mobile',
        image: 'https://t3.ftcdn.net/jpg/13/94/77/26/360_F_1394772660_2Y7kRxi07TALifLyG4iojFDnf26900u3.jpg',
        description: 'Native Android finance app using Java and Firebase for secure budget management and auth.',
        technologies: ['Android Studio', 'Java', 'Firebase'],
        liveLink: null,
        githubLink: '#'
    }
];

const FilterButton = ({ active, label, onClick }) => (
    <button
        onClick={onClick}
        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${active
            ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
            : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
            }`}
    >
        {label}
    </button>
);

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const filteredProjects = projectsData.filter(project =>
        filter === 'all' ? true : project.category === filter
    );

    return (
        <div className="pt-20 pb-20 container mx-auto px-6">
            <ScrollReveal width="100%" className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">My <span className="text-cyan-400">Projects</span></h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    A showcase of my technical skills and creative problem-solving abilities across web and mobile platforms.
                </p>
            </ScrollReveal>

            {/* Filters */}
            <ScrollReveal width="100%" delay={0.2} className="flex flex-wrap justify-center gap-4 mb-16">
                {[
                    { id: 'all', label: 'All Projects' },
                    { id: 'web', label: 'Web Development' },
                    { id: 'mobile', label: 'Mobile Apps' },
                    { id: 'other', label: 'Others' }
                ].map(f => (
                    <FilterButton
                        key={f.id}
                        active={filter === f.id}
                        label={f.label}
                        onClick={() => setFilter(f.id)}
                    />
                ))}
            </ScrollReveal>

            {/* Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ParallaxCard className="h-full">
                                <div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all h-full flex flex-col">
                                    {/* Image */}
                                    <div className="aspect-video relative overflow-hidden bg-slate-800 shrink-0">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />

                                        {/* Overlay Links */}
                                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/60 backdrop-blur-sm">
                                            {project.liveLink && (
                                                <a
                                                    href={project.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-3 bg-cyan-500 rounded-full text-white hover:bg-cyan-400 transform hover:scale-110 transition-all shadow-lg"
                                                    title="Live Demo"
                                                >
                                                    <ExternalLink size={20} />
                                                </a>
                                            )}
                                            {project.githubLink && (
                                                <a
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-3 bg-slate-800 border border-white/20 rounded-full text-white hover:bg-white hover:text-slate-900 transform hover:scale-110 transition-all shadow-lg"
                                                    title="Source Code"
                                                >
                                                    <Github size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col grow">
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.technologies.map(tech => (
                                                <span
                                                    key={tech}
                                                    className="text-xs font-semibold px-2 py-1 bg-slate-800 text-slate-300 rounded border border-white/5"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ParallaxCard>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Projects;
