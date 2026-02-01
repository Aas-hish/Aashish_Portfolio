import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const Cursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring for the outer ring (slightly laggy for organic feel)
    const springConfig = { damping: 20, stiffness: 300 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.classList.contains('cursor-hover') ||
                window.getComputedStyle(e.target).cursor === 'pointer'
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    // Hide on touch devices
    if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return null;
    }

    return (
        <>
            {/* Main Pointer - Solid Dot */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[100001] mix-blend-exclusion"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    x: -3, // Center 6px dot
                    y: -3,
                }}
            />

            {/* Tech Ring - Rotating Dashed Circle */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100000]"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: -16, // Center 32px ring
                    y: -16,
                    border: '1.5px dashed rgba(6, 182, 212, 0.5)', // Cyan-500 dashed
                }}
                animate={{
                    scale: isHovered ? 1.8 : 1,
                    rotate: isHovered ? 0 : 360, // Rotate when ideal, stop when hovering
                    borderColor: isHovered ? 'rgba(255, 255, 255, 0.8)' : 'rgba(6, 182, 212, 0.5)',
                    borderStyle: isHovered ? 'solid' : 'dashed', // Snap to solid on hover
                }}
                transition={{
                    scale: { duration: 0.2 },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" }, // Slow constant rotation
                    borderStyle: { duration: 0.1 }
                }}
            />
        </>
    );
};

export default Cursor;
