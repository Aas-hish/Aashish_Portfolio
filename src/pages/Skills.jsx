import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Terminal, Cpu, Users } from 'lucide-react';
import ScrollReveal, { ParallaxCard } from '../components/ScrollReveal';
import ScrollFloat from '../components/ScrollFloat';

const SkillBar = ({ name, percentage, color }) => (
    // ... (SkillBar and SkillCategory remain the same)
    <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-slate-200">{name}</span>
            <span className="text-sm text-slate-400">{percentage}%</span>
        </div>
        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`h-full rounded-full ${color}`}
            />
        </div>
    </div>
);

const SkillCategory = ({ title, icon: Icon, skills, delay }) => (
    <ScrollReveal delay={delay} width="100%" className="h-full">
        <div className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:border-cyan-500/20 transition-all h-full">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Icon className="text-cyan-400" size={24} />
                {title}
            </h3>
            <div>
                {skills.map((skill, index) => (
                    <SkillBar
                        key={index}
                        name={skill.name}
                        percentage={skill.level}
                        color={skill.color}
                    />
                ))}
            </div>
        </div>
    </ScrollReveal>
);

const CertificationCard = ({ title, issuer, desc, delay }) => (
    <ParallaxCard className="h-full">
        <div className="bg-slate-900 border border-white/5 p-6 rounded-xl hover:border-purple-500/40 transition-all group h-full">
            <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                <AwardIcon />
            </div>
            <h4 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">{title}</h4>
            <p className="text-cyan-400 text-sm font-medium mb-3">{issuer}</p>
            <p className="text-slate-400 text-sm">{desc}</p>
        </div>
    </ParallaxCard>
);

const AwardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
);

const Skills = () => {

    const categories = [
        {
            title: "Languages",
            icon: Code,
            skills: [
                { name: "JavaScript", level: 90, color: "bg-yellow-400" },
                { name: "Python", level: 85, color: "bg-blue-500" },
                { name: "Java", level: 80, color: "bg-red-500" },
                { name: "C++", level: 75, color: "bg-indigo-500" },
                { name: "Kotlin", level: 70, color: "bg-purple-500" }
            ]
        },
        {
            title: "Web Technologies",
            icon: Server,
            skills: [
                { name: "React.js", level: 85, color: "bg-cyan-400" },
                { name: "Node.js", level: 80, color: "bg-green-500" },
                { name: "Tailwind CSS", level: 85, color: "bg-sky-400" },
                { name: "Express.js", level: 80, color: "bg-gray-400" },
                { name: "HTML/CSS", level: 95, color: "bg-orange-500" }
            ]
        },
        {
            title: "Databases",
            icon: Database,
            skills: [
                { name: "MongoDB", level: 80, color: "bg-green-600" },
                { name: "MySQL", level: 75, color: "bg-blue-600" },
                { name: "Firebase", level: 70, color: "bg-amber-500" },
                { name: "PostgreSQL", level: 65, color: "bg-blue-400" }
            ]
        },
        {
            title: "Tools & DevOps",
            icon: Terminal,
            skills: [
                { name: "Git & GitHub", level: 90, color: "bg-orange-600" },
                { name: "Linux", level: 70, color: "bg-yellow-500" },
                { name: "Docker", level: 30, color: "bg-blue-500" },
                { name: "AWS", level: 25, color: "bg-orange-400" }
            ]
        }
    ];

    const softSkills = [
        { name: "Team Collaboration", icon: Users, desc: "Effective team player contributing to shared success." },
        { name: "Problem Solving", icon: Cpu, desc: "Analytical approach to solving complex technical challenges." },
        { name: "Adaptability", icon: Terminal, desc: "Quick learner adapting to new tools and environments." },
        { name: "Communication", icon: Users, desc: "Clear articulation of technical concepts." }
    ];

    return (
        <div className="pt-20 pb-20 container mx-auto px-6">
            <ScrollReveal width="100%" className="text-center mb-16">
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
                        Technical
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
                        Expertise
                    </ScrollFloat>
                </div>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    A comprehensive overview of my technical skills, tools, and proficiencies.
                </p>
            </ScrollReveal>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {categories.map((cat, i) => (
                    <SkillCategory key={i} {...cat} delay={i * 0.1} />
                ))}
            </div>

            {/* Certifications */}
            <ScrollReveal width="100%">
                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=50%'
                    scrollEnd='bottom bottom-=40%'
                    stagger={0.03}
                    containerClassName="mb-10 text-center"
                    textClassName="text-3xl font-bold text-white"
                >
                    Certifications
                </ScrollFloat>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                <CertificationCard
                    title="AWS Cloud Practitioner"
                    issuer="Amazon Web Services"
                    desc="Foundational understanding of AWS cloud concepts, security, and core services."
                    delay={0}
                />
                <CertificationCard
                    title="Machine Learning"
                    issuer="Google / Coursera"
                    desc="Comprehensive course on ML algorithms, neural networks, and implementation."
                    delay={0.1}
                />
                <CertificationCard
                    title="React Developer"
                    issuer="Meta"
                    desc="Advanced React concepts, state management, and modern development practices."
                    delay={0.2}
                />
            </div>

            {/* Soft Skills */}
            <ScrollReveal width="100%">
                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=50%'
                    scrollEnd='bottom bottom-=40%'
                    stagger={0.03}
                    containerClassName="mb-10 text-center"
                    textClassName="text-3xl font-bold text-white"
                >
                    Soft Skills
                </ScrollFloat>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {softSkills.map((skill, i) => (
                    <ParallaxCard key={i} className="h-full">
                        <div className="text-center p-6 bg-slate-900 border border-white/5 rounded-xl hover:bg-slate-800 transition-colors h-full">
                            <div className="w-12 h-12 mx-auto bg-cyan-500/10 text-cyan-400 rounded-full flex items-center justify-center mb-4">
                                <skill.icon size={24} />
                            </div>
                            <h4 className="font-bold text-lg mb-2">{skill.name}</h4>
                            <p className="text-slate-400 text-sm">{skill.desc}</p>
                        </div>
                    </ParallaxCard>
                ))}
            </div>
        </div>
    );
};

export default Skills;
