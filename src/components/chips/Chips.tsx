
import React from "react";
import style from "./Chips.module.css";
import Button from "../buttons/Buttons";

type ChipsButtonProps = {
    label: string,
    selected?: boolean,
    onClick?: () => {}
}

type ChipsTitle = {
    icon?: React.ReactNode,
    label: React.ReactNode
}

type ChipsContainerProps = {
    title: ChipsTitle,
    buttons: Array<ChipsButtonProps>
}

interface ChipsProps {
    chips: Array<ChipsContainerProps>
}

const Chips: React.FC<ChipsProps> = ({chips}) => {
    return(
        <div className={style.chips_container}>
            {
                chips.map((container, i) => (
                    <div key={i} className={style.chips_sections}>
                        <div className={style.chips_title}>
                            <span className="material-symbols-outlined">{container.title.icon}</span>
                            <span className={style.text}>{container.title.label}</span>
                        </div>
                        <div className={style.chips_btn}>
                            {
                                container.buttons.map((button, i) => (
                                    <Button 
                                        key={i}
                                        variant="outlined" 
                                        onClick={button.onClick} 
                                        className={
                                            `${style.btn_chips} 
                                            ${button.selected && style.btn_chips_selected}`}
                                    >
                                        {button.label}
                                    </Button>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Chips;