import { useState, useEffect } from 'react';
import updateStatusBarAndNavigationBar from "../utils/updateStatusBarAndNavigationBar";

const useTheme = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => updateStatusBarAndNavigationBar(theme), [theme]);

    return [theme, setTheme];
};

export default useTheme;
