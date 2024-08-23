
import { useState, useEffect } from 'react';

const useSimulatedLoading = (delay: number) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return loading;
};

export default useSimulatedLoading;
