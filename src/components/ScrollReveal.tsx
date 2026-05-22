'use client';

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
}

export default function ScrollReveal({ children, width = "100%" }: ScrollRevealProps) {
    return (
        <div style={{ width, position: 'relative' }}>
            {children}
        </div>
    );
}

