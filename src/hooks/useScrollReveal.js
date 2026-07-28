import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollReveal() {
    const { pathname } = useLocation();

    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {

                    const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.08}s`;
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.12,
            }
        );

        revealElements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [pathname]);
}
