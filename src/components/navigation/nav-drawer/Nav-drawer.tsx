
import React from "react";
import style from "./Nav-drawer.module.css";
import Button, { ButtonProps } from "@/components/buttons/Buttons";

type NavDrawerSections = {
    title?: string;
    actions?: React.ReactNode;
}

interface NavDrawerButtonProps extends ButtonProps {
    active?: boolean,
    btnIcon?: React.ReactNode,
    label?: React.ReactNode
}

interface NavDrawerProps {
    sections: Array<NavDrawerSections>, 
    isOpen?: boolean,
    onClose?: () => void,
    top?: string,
    noDivider?: boolean
}

const NavDrawerButton: React.FC<NavDrawerButtonProps> = ({active, btnIcon, label, ...props}) => {
    return(
        <Button {...props} className={`${active ? style.active : ""} ${style.btn_nav_drawer}`}>
            <span className={`material-symbols-outlined ${style.icon}`}>{btnIcon}</span>
            <span className={style.text}>{label}</span>
        </Button>
    )
}

const NavDrawer: React.FC<NavDrawerProps> = ({sections, isOpen, top, noDivider}) => {
    
    return(
        <div 
            className={`${style.nav_drawer} ${isOpen ? style.is_open : ""}`} 
            style={{top: top}}
        >
                {sections.map((section, i) => (
                    <div key={i} className={`${noDivider && style.no_divider} ${style.nd_section}`}>
                        <div className={style.nd_s_title}>{section.title}</div>
                        <div className={style.nd_s_actions}>{section.actions}</div>
                    </div>
                ))}
        </div>
    )
}

export default NavDrawer;
export { NavDrawerButton }