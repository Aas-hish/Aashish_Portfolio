import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const MouseSpotlight = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the spotlight
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

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-[5] overflow-hidden"
            style={{ opacity: 0.7 }}
        >
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/15 to-purple-500/15 blur-3xl"
                style={{
                    left: springX,
                    top: springY,
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </motion.div>
    );
};

export default MouseSpotlight;
