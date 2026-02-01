import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, HelpCircle, ChevronDown } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ScrollFloat from '../components/ScrollFloat';

const ContactItem = ({ icon: Icon, title, value, href, delay }) => (
    <ScrollReveal delay={delay} width="100%">
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-white/5 hover:border-cyan-500/30 transition-all group"
        >
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Icon size={20} />
            </div>
            <div>
                <h4 className="text-sm text-slate-400 font-medium mb-1">{title}</h4>
                <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{value}</p>
            </div>
        </a>
    </ScrollReveal>
);

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="border border-white/5 rounded-xl bg-slate-900 overflow-hidden mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
                <span className="font-semibold text-slate-200">{question}</span>
                <ChevronDown
                    className={`text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0 }}
                className="overflow-hidden"
            >
                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                    {answer}
                </div>
            </motion.div>
        </div>
    );
};

const Contact = () => {

    const faqData = [
        {
            q: "What kind of projects are you looking for?",
            a: "I'm interested in web development, mobile app development, and AI/ML projects. I'm particularly excited about full-stack applications, innovative user interfaces, and projects that solve real-world problems."
        },
        {
            q: "Are you available for internships?",
            a: "Yes! As a final year computer science student, I'm actively seeking internship opportunities where I can apply my skills and learn from experienced professionals. I'm available for both full-time and part-time positions."
        },
        {
            q: "What's your preferred tech stack?",
            a: "I love working with JavaScript (React, Node.js), Python for AI/ML projects, and mobile development with React Native. However, I'm always eager to learn new technologies based on project requirements."
        },
        {
            q: "How quickly do you respond to messages?",
            a: "I typically respond to messages within 24 hours, often sooner. For urgent matters, feel free to reach out via multiple channels."
        }
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
                        Get In
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
                        Touch
                    </ScrollFloat>
                </div>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    Let's discuss opportunities, collaborations, or just have a friendly chat about technology.
                </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                {/* Contact Info */}
                <div>
                    <ScrollReveal width="100%">
                        <ScrollFloat
                            animationDuration={1}
                            ease='back.inOut(2)'
                            scrollStart='center bottom+=50%'
                            scrollEnd='bottom bottom-=40%'
                            stagger={0.03}
                            containerClassName="mb-8"
                            textClassName="text-2xl font-bold text-white"
                        >
                            Contact Information
                        </ScrollFloat>
                    </ScrollReveal>
                    <div className="space-y-4 mb-12">
                        <ContactItem
                            icon={Mail}
                            title="Email"
                            value="aashish.sah1013@gmail.com"
                            href="mailto:aashish.sah1013@gmail.com"
                            delay={0}
                        />
                        <ContactItem
                            icon={Phone}
                            title="Phone"
                            value="+91 6305245701"
                            href="tel:+916305245701"
                            delay={0.1}
                        />
                        <ContactItem
                            icon={MapPin}
                            title="Location"
                            value="Chittoor, AP, India"
                            href="#"
                            delay={0.2}
                        />
                    </div>

                    <ScrollReveal width="100%">
                        <ScrollFloat
                            animationDuration={1}
                            ease='back.inOut(2)'
                            scrollStart='center bottom+=50%'
                            scrollEnd='bottom bottom-=40%'
                            stagger={0.03}
                            containerClassName="mb-6"
                            textClassName="text-2xl font-bold text-white"
                        >
                            Frequently Asked Questions
                        </ScrollFloat>
                    </ScrollReveal>
                    <div className="space-y-4">
                        {faqData.map((f, i) => (
                            <ScrollReveal key={i} delay={0.1 * i} width="100%">
                                <FAQItem question={f.q} answer={f.a} />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* Form */}
                <ScrollReveal delay={0.2} width="100%" className="h-full">
                    <div className="bg-white/5 border border-white/5 p-8 rounded-2xl h-full">
                        <ScrollFloat
                            animationDuration={1}
                            ease='back.inOut(2)'
                            scrollStart='center bottom+=50%'
                            scrollEnd='bottom bottom-=40%'
                            stagger={0.03}
                            containerClassName="mb-6"
                            textClassName="text-2xl font-bold text-white"
                        >
                            Send Message
                        </ScrollFloat>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">First Name</label>
                                    <input type="text" className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Last Name</label>
                                    <input type="text" className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                <input type="email" className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Tell me about your project..."></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-cyan-500/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default Contact;
