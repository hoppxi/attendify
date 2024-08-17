
import React from "react";
import style from "./Accordions.module.css";
import { ListItem } from "@/components/lists/Lists";

interface AccordionItemProps {
    icon?: string;
    startingIcon?: string;
    label?: string;
    children?: React.ReactNode;
    defaultState?: "expanded" | "collapsed";
    disabled?: boolean;
    childClassName?: boolean;
    className?: string;
}

interface AccordionProps {
    children?: React.ReactNode;
    title?: string;
    variant?: "light" | "filled" | "outlined"
    className?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
    icon,
    startingIcon,
    label,
    children,
    defaultState,
    childClassName,
    disabled,
    className
}) => {

    const [isExpanded, setIsExpanded] = React.useState(defaultState === "expanded");

    const toggleAccordion = () => {
        if (!disabled) {
            setIsExpanded(!isExpanded);
        }
    };

    return(
        <div className={`${style.accordion_item_container} ${isExpanded ? style.accordion_item_active : ""} ${className ? className : ""}`}>
            <ListItem 
                info={<span className={`material-symbols-outlined ${style.icon}`}>{icon ? icon : "chevron_left"}</span>}
                heading={label}
                icon={startingIcon ? startingIcon : ""}
                onClick={toggleAccordion}
            ></ListItem>
            <div className={`${style.expanded_container} ${childClassName ? childClassName : ""}`}>
                {children}
            </div>
        </div>
    )
}

const Accordion: React.FC<AccordionProps> = ({
    title,
    children,
    variant="light",
    className
}) => {

    const variantStyles: Function = () => {
        switch (variant) {
            case "light":
                return style.light_accordion
            case "filled":
                return style.filled_accordion
            case "outlined":
                return style.outlined_accordion
            default:
                return style.light_accordion
        }
    }

    return(
        <div className={`${className ? className : ""} ${style.accordion} ${variantStyles()}`}>
            <div className={style.title}>{title}</div>
            <div className={style.accordion_items}>{children}</div>
        </div>
    )
}

export { Accordion, AccordionItem }