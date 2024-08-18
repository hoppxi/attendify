// components/Card.tsx
import React from 'react';
import style from './Cards.module.css';

type CardType = "outlined" | "elevated" | "filled" | "outlined-filled";

interface CardProps {
    type?: CardType;
    heading?: string;
    subHeading?: string;
    details?: string;
    actions?: React.ReactNode;
    alignActions?: 'right' | 'column' | 'row' | 'fill-row' | 'fill-column';
    className?: string
}

const Card: React.FC<CardProps> = ({
    type="filled",
    heading,
    subHeading,
    details,
    actions,
    alignActions = 'right',
    className
}) => {
    const getActionStyle = () => {
        switch (alignActions) {
        case 'right':
            return style.actions_right;
        case 'column':
            return style.actions_column;
        case 'row':
            return style.actions_row;
        case 'fill-row':
            return style.actions_fill_row;
        case 'fill-column':
            return style.actions_fill_column;
        default:
            return style.actions_right;;
        }
    };

    return (
        <div className={`${style.card} ${className ? className : ""} ${style[`card_${type === "outlined-filled" ? "outlined_filled" : type}`]}`}>
            <div className={style.header}>
                <h3 className={style.heading}>{heading}</h3>
                {subHeading && <h4 className={style.sub_heading}>{subHeading}</h4>}
            </div>
            <p className={style.details}>{details}</p>
            <div className={`${style.actions} ${getActionStyle()}`}>
                {actions}
            </div>
        </div>
    );
};

export default Card;
