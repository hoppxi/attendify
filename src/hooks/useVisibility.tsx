import { useEffect, useState } from 'react';

const useVisibility = (ref: React.RefObject<HTMLElement>) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const currentRef = ref.current;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref]);

    return isVisible;
};

export default useVisibility;
