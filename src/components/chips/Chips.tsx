import React, { useState } from "react";
import style from "./Chips.module.css";
import Button from "@/components/buttons/Buttons";

type ChipsButtonProps = {
    label: string;
    selected?: boolean;
    onSelect?: () => void;
};

type ChipsTitle = {
    icon?: React.ReactNode;
    label: React.ReactNode;
};

type ChipsContainerProps = {
    title: ChipsTitle;
    buttons: ChipsButtonProps[];
};

interface ChipsProps {
    chips: ChipsContainerProps[];
}

const Chips: React.FC<ChipsProps> = ({ chips }) => {
    const [selectedChips, setSelectedChips] = useState<{ [key: number]: boolean }>({});

    const handleClick = (containerIndex: number, buttonIndex: number, onClick?: () => void) => {
        if (onClick) onClick();
        
        setSelectedChips(prevState => {
            const newState = { ...prevState };
            const key: number = containerIndex - buttonIndex;
            newState[key] = !newState[key];
            return newState;
        });
    };

    return (
        <div className={style.chips_container}>
            {chips.map((container, containerIndex) => (
                <div key={containerIndex} className={style.chips_sections}>
                    <div className={style.chips_title}>
                        {container.title.icon && (
                            <span className="material-symbols-outlined">
                                {container.title.icon}
                            </span>
                        )}
                        <span className={style.text}>{container.title.label}</span>
                    </div>
                    <div className={style.chips_btn}>
                        {container.buttons.map((button, buttonIndex) => {
                            const key: number = containerIndex - buttonIndex;
                            return (
                                <Button
                                    key={buttonIndex}
                                    variant="outlined"
                                    onClick={() => handleClick(containerIndex, buttonIndex, button.onSelect)}
                                    className={`${style.btn_chips} ${
                                        selectedChips[key] ? style.btn_chips_selected : ""
                                    }`}
                                >
                                    {button.label}
                                </Button>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Chips;
