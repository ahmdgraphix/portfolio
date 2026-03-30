'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, CheckCircle } from 'lucide-react';
import styles from './Hero.module.css';

const useTypewriter = (words: string[], typingSpeed = 150, deletingSpeed = 100, pauseDuration = 2000) => {
    const [displayText, setDisplayText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];

        const handleTyping = () => {
            if (isDeleting) {
                setDisplayText(currentWord.substring(0, displayText.length - 1));
            } else {
                setDisplayText(currentWord.substring(0, displayText.length + 1));
            }

            if (!isDeleting && displayText === currentWord) {
                setTimeout(() => setIsDeleting(true), pauseDuration);
            } else if (isDeleting && displayText === '') {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

    return displayText;
};

export default function Hero() {
    const typeWriterText = useTypewriter(['Graphics Designer', 'SaaS Builder', 'Developer', 'Video Editor']);
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={styles.content}
                >
                    <div className={styles.badge}>
                        Available for Hire
                    </div>

                    <div className={styles.mobileImageWrapper}>
                        <div className={styles.mobileGlow} />
                        <div className={styles.mobileImageContainer}>
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={styles.profileImage} style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
                                <defs>
                                    <linearGradient id="gradMob1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="var(--primary)" stopOpacity="1" />
                                        <stop offset="100%" stopColor="var(--secondary)" stopOpacity="1" />
                                    </linearGradient>
                                    <linearGradient id="gradMob2" x1="100%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="var(--accent)" stopOpacity="1" />
                                        <stop offset="100%" stopColor="var(--primary)" stopOpacity="1" />
                                    </linearGradient>
                                </defs>
                                <motion.path
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                    d="M100 20 L180 60 L180 140 L100 180 L20 140 L20 60 Z"
                                    fill="rgba(255, 255, 255, 0.05)"
                                    stroke="url(#gradMob1)"
                                    strokeWidth="4"
                                />
                                <motion.path
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                                    d="M100 20 L100 100 L180 140 M100 100 L20 140 M100 100 L100 180"
                                    fill="none"
                                    stroke="url(#gradMob2)"
                                    strokeWidth="2"
                                />
                                <motion.circle
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1, delay: 1 }}
                                    cx="100" cy="100" r="10" fill="url(#gradMob1)"
                                />
                            </svg>
                        </div>
                    </div>

                    <h1 className={styles.title}>
                        Irshad <span className={styles.highlight}>Ahamed</span>
                    </h1>

                    <div className={styles.subtitle}>
                        I am a{' '}
                        <span className={styles.typewriterWrapper}>
                            <span className={`${styles.role} ${styles.highlight} ${styles.typewriterText}`}>
                                {typeWriterText}
                            </span>
                            <span className={styles.cursor}>_</span>
                        </span>
                    </div>

                    <p className={styles.description}>
                        I transform complex problems into elegant, scalable digital solutions. With a blend of technical expertise and creative vision, I help businesses build trust and authority through exceptional design and engineering.
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem', marginBottom: '2.5rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', color: '#10b981', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600 }}>
                            <CheckCircle size={16} /> 100% Halal Content
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', color: '#3b82f6', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600 }}>
                            <CheckCircle size={16} /> Modest Designs
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.2)', color: '#8b5cf6', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600 }}>
                            <CheckCircle size={16} /> Ethical Approach
                        </span>
                    </div>

                    <div className={styles.ctaGroup}>
                        <a href="#contact" className={styles.primaryBtn}>
                            Let&apos;s Talk <Mail size={20} />
                        </a>
                        {/* <a href="#projects" className={styles.secondaryBtn}>
                            View Projects <ArrowRight size={20} />
                        </a> */}
                    </div>
                </motion.div>

                {/* Remove Graphic Column */}
            </div>

            <div className={styles.scrollIndicator}>
                Scroll Down
            </div>
        </section>
    );
}
