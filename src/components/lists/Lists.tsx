
import React from "react";
import Button from "../buttons/Buttons";
import style from "./Lists.module.css";

interface ListItemToggleProps extends Omit<ListItemProps, "info"> {
    checked: boolean;
    onChange?: (checked: boolean) => void;
    id: string;
    disabled?: boolean;
}

interface ListItemProps {
    icon?: React.ReactNode;
    listNum?: string | number;
    heading?: React.ReactNode,
    supportingText?: React.ReactNode,
    info?: React.ReactNode;
    href?: string;
    onClick?: () => void;
}

interface ListProps {
    heading?: string,
    children?: React.ReactNode;
    className?: string;
    sectionClassName?: string;
}

const ListItemToggle: React.FC<ListItemToggleProps> = ({id, onClick, icon, listNum, heading, supportingText, href, checked, onChange, disabled, ...props}) => {
    return(
        <Button 
            onClick={onClick} 
            fullWidth 
            textClass={style.text} 
            variant="text" 
            className={`${style.list_item_toggle} ${style.list_item}`} 
            href={href}
            disabled={disabled}
        >
            <label style={{width: "100%"}} htmlFor={id} aria-disabled={disabled} className={disabled ? style.disabled : ""}>
                <div className={style.li_left}>
                    <span className={icon ? "material-symbols-outlined" : ""}>{icon? icon : listNum}</span>
                    <div className={style.li_details}>
                        <div className={style.heading}>{heading}</div>
                        <div className={style.supporting_text}>{supportingText}</div>
                    </div>
                </div>
                <div className={style.li_right}>
                    <input type="checkbox" aria-hidden="true" id={id} hidden onChange={(e) => onChange && onChange(e.target.checked)} {...props} />
                    <span className={`material-symbols-outlined ${style.tli_check_icon} ${checked ? style.tli_checked : ""}`}>{ checked ? "toggle_on" : "toggle_off" }</span>
                </div>
            </label>
        </Button>
    )
}

const ListItem: React.FC<ListItemProps> = ({onClick, icon, listNum, heading, supportingText, info, href}) => {
    return(
        <Button onClick={onClick} textClass={style.text} variant="text" className={style.list_item} href={href}>
            <div className={style.li_left}>
                <span className={icon ? "material-symbols-outlined" : ""}>{icon? icon : listNum}</span>
                <div className={style.li_details}>
                    <div className={style.heading}>{heading}</div>
                    <div className={style.supporting_text}>{supportingText}</div>
                </div>
            </div>
            <div className={style.li_right}>{info}</div>
        </Button>
    )
}

const List: React.FC<ListProps> = ({heading, children, sectionClassName, className}) => {
    return(
        <div className={`${className ? className : ""} ${style.list}`}>
            <div className={style.list_heading}>{heading}</div>
            <div className={`${sectionClassName ? sectionClassName : ""} ${style.list_section}`}>
                {children}
            </div>
        </div>
    )
}

export default List;
export {ListItem, ListItemToggle}