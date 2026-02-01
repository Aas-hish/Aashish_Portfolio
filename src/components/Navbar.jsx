import React, { useState, useEffect } from 'react';
import BubbleMenu from './BubbleMenu';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = 'Aashish';
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    // Infinite Loop Typing Effect
    useEffect(() => {
        const handleTyping = () => {
            const currentText = fullText;

            // Determine if we are typing or deleting
            if (isDeleting) {
                setDisplayText(prev => currentText.substring(0, prev.length - 1));
                setTypingSpeed(100); // Faster deleting speed
            } else {
                setDisplayText(prev => currentText.substring(0, prev.length + 1));
                setTypingSpeed(150); // Normal typing speed
            }

            // Logic for switching states
            if (!isDeleting && displayText === currentText) {
                // Finished typing, pause before deleting
                setTypingSpeed(2000); // 2s pause at end
                setIsDeleting(true);
            } else if (isDeleting && displayText === '') {
                // Finished deleting, pause before re-typing
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(500); // 0.5s pause before starting again
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, loopNum]);

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (isMenuOpen) {
                setIsVisible(true);
                return;
            }

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, isMenuOpen]);

    const items = [
        {
            label: 'Home',
            href: '/',
            ariaLabel: 'Home',
            rotation: -8,
            hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
        },
        {
            label: 'About',
            href: '/about',
            ariaLabel: 'About',
            rotation: 8,
            hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
        },
        {
            label: 'Projects',
            href: '/projects',
            ariaLabel: 'Projects',
            rotation: 8,
            hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
        },
        {
            label: 'Skills',
            href: '/skills',
            ariaLabel: 'Skills',
            rotation: -5,
            hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
        },
        {
            label: 'Contact',
            href: '/contact',
            ariaLabel: 'Contact',
            rotation: -8,
            hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
        }
    ];

    const TypingLogo = (
        <span className="flex items-center" style={{ fontWeight: 700, fontSize: '1.2rem', color: '#fff' }}>
            {displayText}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="text-cyan-400 ml-1 inline-block"
            >
                _
            </motion.span>
        </span>
    );

    return (
        <>
            <BubbleMenu
                logo={TypingLogo}
                items={items}
                menuAriaLabel="Toggle navigation"
                menuBg="#0f172a" /* slate-900 */
                menuContentColor="#f1f5f9" /* slate-100 */
                useFixedPosition={true}
                animationEase="back.out(1.5)"
                animationDuration={0.5}
                staggerDelay={0.12}
                className="!px-[20px] md:!px-[100px]"
                onMenuClick={(isOpen) => setIsMenuOpen(isOpen)}
                style={{
                    transform: isVisible ? 'translateY(0)' : 'translateY(-300%)',
                    transition: 'transform 0.3s ease-in-out'
                }}
            />
        </>
    );
};

export default Navbar;
