import { useEffect } from 'react';

export const useWaterRipple = () => {
    useEffect(() => {
        const createRipple = (e) => {
            // Only trigger on elements we want (cards, buttons, nodes)
            const target = e.target.closest('.sustain-card, .analyze-btn, .hw-node, .timeline-card, .enter-btn');
            if (!target) return;

            const ripple = document.createElement('span');
            ripple.classList.add('water-ripple');

            const rect = target.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            target.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        };

        window.addEventListener('mousedown', createRipple);
        return () => window.removeEventListener('mousedown', createRipple);
    }, []);
};

export default useWaterRipple;