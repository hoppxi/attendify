
import React from "react";
import style from "./Navbar.module.css";
import Button, { ButtonProps } from "@/components/buttons/Buttons";

interface NavbarButtonProps extends ButtonProps {
    active?: boolean,
    btnIcon?: React.ReactNode,
    label?: React.ReactNode
}

interface NavbarProps {
    children?: React.ReactNode,
    noLabel?: boolean,
    noLabelActive?: boolean
}

const NavbarButton: React.FC<NavbarButtonProps> = ({active, btnIcon, label, ...props}) => {
    return(
        <Button {...props} className={`${active ? style.active : ""} ${style.btn_navbar}`}>
            <span className={`material-symbols-outlined ${style.icon}`}>{btnIcon}</span>
            <span className={style.text}>{label}</span>
        </Button>
    )
}

const Navbar: React.FC<NavbarProps> = ({children, noLabel, noLabelActive}) => {
    return(
        <div className={`${style.navbar} ${noLabel ? style.no_label : ""} ${noLabelActive ? style.no_label_active : ""}`}>
            {children}
        </div>
    )
}

export default Navbar;
export { NavbarButton };