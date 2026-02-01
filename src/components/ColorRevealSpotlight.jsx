import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';

const ColorRevealSpotlight = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Initialize over the face (approx 75% width, 40% height)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            mouseX.set(window.innerWidth * 0.75);
            mouseY.set(window.innerHeight * 0.4);
        }
    }, []);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Use mix-blend-mode: color with a black layer to force grayscale.
    // Mask makes the center transparent (revealing original color) and edges opaque (forcing B&W).
    const maskImage = useMotionTemplate`radial-gradient(circle at ${springX}px ${springY}px, transparent 0px, transparent 150px, black 350px)`;

    return (
        <motion.div
            className="fixed inset-0 z-[100000] pointer-events-none"
            style={{
                backgroundColor: 'black',
                mixBlendMode: 'color',
                maskImage: maskImage,
                WebkitMaskImage: maskImage,
            }}
        />
    );
};

export default ColorRevealSpotlight;
