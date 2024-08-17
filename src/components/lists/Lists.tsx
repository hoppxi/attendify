
import React from "react";
import Button from "../buttons/Buttons";
import style from "./Lists.module.css";

interface ListItemConfig {
    icon?: React.ReactNode;
    listNum?: string | number;
    heading?: React.ReactNode,
    supportingText?: React.ReactNode,
    info?: React.ReactNode;
    href?: string;
    onClick?: () => void;
}

interface ListConfig {
    heading?: string,
    children?: React.ReactNode
}

const ListItem: React.FC<ListItemConfig> = ({onClick, icon, listNum, heading, supportingText, info, href}) => {
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

const List: React.FC<ListConfig> = ({heading, children}) => {
    return(
        <div className={style.list}>
            <div className={style.list_heading}>{heading}</div>
            <div className={style.list_section}>
                {children}
            </div>
        </div>
    )
}

export default List;
export {ListItem}