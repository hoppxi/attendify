import React from "react";
import style from "./Logo.module.css";
import Image from "next/image";

interface LogoProps {
    type?: "small" | "large" | "medium";
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ type, className }) => {
    const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

    React.useEffect(() => {
        const updateDarkMode = () => {
            const isDark = document.documentElement.classList.contains('dark-mode');
            const isLight = document.documentElement.classList.contains('light-mode');
            setIsDarkMode(isDark ? isDark : !isLight);
        };

        updateDarkMode();
        const handleClassChange = () => updateDarkMode();

        const observer = new MutationObserver(handleClassChange);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => {
            observer.disconnect();
        };
    }, []);

    const logoStyle: string = `
        ${type === "small" ? style.logo_small
        : type === "medium" ? style.logo_medium
        : type === "large" ? style.logo_large
        : style.logo_medium} ${className ? className : ""}
    `;

    return (
        <Image
            src={
                isDarkMode
                    ? '/images/logo/default-monochrome-white.svg'
                    : '/images/logo/default-monochrome.svg'
            }
            alt="Attendify"
            className={logoStyle}
            width={120}
            height={30}
            draggable={false}
        />
    );
}

export default Logo;
