import { FC, ReactNode } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import style from "./Links.module.css";

interface LinkProps extends NextLinkProps {
    children: ReactNode;
    className?: string;
    type?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    padded?: boolean
}

const Link: FC<LinkProps> = ({ children, type, padded, className, ...props }) => {
    const getLinkTypeStyle = () => {
        switch (type) {
        case 'primary':
            return style.link_primary;
        case 'secondary':
            return style.link_secondary;
        case 'success':
            return style.link_success;
        case 'danger':
            return style.link_danger;
        case 'warning':
            return style.link_warning;
        case 'info':
            return style.link_info;
        case 'light':
            return style.link_light;
        case 'dark':
            return style.link_dark;
        default:
            return '';
        }
    };
    return (
        <NextLink 
            {...props} 
            className={`
                ${style.link} 
                ${className && className} 
                ${getLinkTypeStyle()}
                ${padded && style.padded}
            `}
        >
            {children}
        </NextLink>
    );
};

export default Link;
