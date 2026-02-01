import React from 'react';
import { motion } from 'framer-motion';
import { Hand } from 'lucide-react';

const PageWrapper = ({ children }) => {
    // Curtain styling with Hardware Acceleration (transform-gpu, backface-hidden)
    // w-[calc(50%+2px)] ensures substantial overlap to prevent center line gaps/glitches.
    const commonClasses = "fixed top-0 h-full z-[9999] transform-gpu backface-hidden will-change-transform";
    const shadowLeft = "shadow-[10px_0_40px_rgba(0,0,0,0.9)]"; // Stronger shadow for depth
    const shadowRight = "shadow-[-10px_0_40px_rgba(0,0,0,0.9)]";

    const leftCurtainClass = `${commonClasses} left-0 w-[calc(50%+2px)] bg-gradient-to-r from-slate-900 via-slate-950 to-black border-r border-white/5 ${shadowLeft}`;
    const rightCurtainClass = `${commonClasses} right-0 w-[calc(50%+2px)] bg-gradient-to-l from-slate-900 via-slate-950 to-black border-l border-white/5 ${shadowRight}`;

    // Animation Variants
    const curtainVariants = {
        leftOpen: { x: "-100%" },
        leftClosed: { x: "0%" },
        rightOpen: { x: "100%" },
        rightClosed: { x: "0%" }
    };

    // Smooth Hand Visibility
    const handVariants = {
        hidden: {
            opacity: 0,
            // Delay fade-out so the hand is visible while pulling the curtain open.
            transition: { duration: 0.3, ease: "easeInOut", delay: 1.0 }
        },
        visible: {
            opacity: 1,
            transition: { duration: 0.3, ease: "easeInOut" }
        }
    };

    // Physics-based transition for ultra-smooth movement
    // easeInOutQuart [0.76, 0, 0.24, 1] is great for "heavy" objects.
    const transition = { duration: 1.4, ease: [0.76, 0, 0.24, 1] };

    const CurtainHand = ({ side }) => (
        <motion.div
            className={`absolute top-1/2 transform -translate-y-1/2 ${side === 'left' ? '-right-8' : '-left-8'} z-[10000] text-slate-300 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] pointer-events-none`}
        >
            <Hand
                size={56} // Slightly larger for better visibility
                strokeWidth={1}
                // Rotation increased to 45 degrees as requested
                className={`fill-black/40 ${side === 'left' ? 'scale-x-[-1] -rotate-45' : 'rotate-45'}`}
            />
        </motion.div>
    );

    return (
        <>
            {/* ---------------- EXIT ANIMATION (Closing) ---------------- */}
            {/* These curtains SLIDE IN to cover the current page before it unmounts */}

            <motion.div
                className={leftCurtainClass}
                initial="leftOpen"
                animate="leftOpen"
                exit="leftClosed"
                variants={curtainVariants}
                transition={transition}
            >
                <motion.div variants={{ leftOpen: handVariants.hidden, leftClosed: handVariants.visible }}>
                    <CurtainHand side="left" />
                </motion.div>
            </motion.div>

            <motion.div
                className={rightCurtainClass}
                initial="rightOpen"
                animate="rightOpen"
                exit="rightClosed"
                variants={curtainVariants}
                transition={transition}
            >
                <motion.div variants={{ rightOpen: handVariants.hidden, rightClosed: handVariants.visible }}>
                    <CurtainHand side="right" />
                </motion.div>
            </motion.div>


            {/* ---------------- ENTER ANIMATION (Opening) ---------------- */}
            {/* These curtains START CLOSED and SLIDE OUT to reveal the new page */}

            <motion.div
                className={leftCurtainClass}
                initial="leftClosed"
                animate="leftOpen"
                exit="leftOpen"
                variants={curtainVariants}
                transition={transition}
            >
                <motion.div variants={{ leftOpen: handVariants.hidden, leftClosed: handVariants.visible }}>
                    <CurtainHand side="left" />
                </motion.div>
            </motion.div>

            <motion.div
                className={rightCurtainClass}
                initial="rightClosed"
                animate="rightOpen"
                exit="rightOpen"
                variants={curtainVariants}
                transition={transition}
            >
                <motion.div variants={{ rightOpen: handVariants.hidden, rightClosed: handVariants.visible }}>
                    <CurtainHand side="right" />
                </motion.div>
            </motion.div>

            {/* Content Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.96, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 1, scale: 0.96, filter: 'blur(4px)', transition: { duration: 0.8 } }}
                // Delay content appearing until curtains are partially open for dramatic effect
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
                className="w-full relative z-0"
            >
                {children}
            </motion.div>
        </>
    );
};

export default PageWrapper;
