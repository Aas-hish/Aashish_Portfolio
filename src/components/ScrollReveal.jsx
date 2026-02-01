import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const ScrollReveal = ({ children, width = "fit-content", delay = 0, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} style={{ width, position: 'relative', overflow: 'hidden' }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay: delay, ease: [0.17, 0.55, 0.55, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export const ParallaxCard = ({ children, className = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1.33 1"] });
    const scaleShow = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityShow = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleShow,
                opacity: opacityShow,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default ScrollReveal;
