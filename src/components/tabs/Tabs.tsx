
import React from "react";
import style from "./Tabs.module.css";
import Button, { type ButtonProps } from "../buttons/Buttons";

interface TabButtonProps extends ButtonProps {
    icon?: React.ReactNode,
    label?: React.ReactNode,
    active?: boolean
}

interface TabsProps {
    row?: boolean;
    scrollable?: boolean;
    noLabel?: boolean;
    noIcon?: boolean;
    children?: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({icon, label, active, ...props}) => {
    return(
        <Button
            {...props}
            className={`
                ${style.btn_tab} 
                ${active ? style.active : ""}
            `} 
            icon={icon}
        >{label}</Button>
    )
}

const Tabs: React.FC<TabsProps> = ({row, children, scrollable, noLabel, noIcon}) => {
    return(
        <div className={style.tab_container}>
            <div className={`${style.tab} ${row ? style.row : ""} ${scrollable ? style.scrollable : ""} ${noLabel ? style.no_label : ""} ${noIcon ? style.no_icon : ""}`}>
                {children}
            </div>
        </div>
    )
}

export default Tabs;
export {TabButton};