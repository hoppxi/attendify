
import React from "react";
import style from "./Bottom-appbar.module.css";
import Button from "@/components/buttons/Buttons";

interface BottomAppbarProps {
    leftButtons?: React.ReactNode; 
    fabIcon?: string
    fabClick?: () => {}
}

const BottomAppbar: React.FC<BottomAppbarProps> = ({leftButtons, fabIcon, fabClick}) => {
    return(
        <div className={style.bottom_appbar}>
            <div className={style.b_ab_left}>
                {leftButtons}
            </div>
            <Button variant="fab" icon={fabIcon} onClick={fabClick} />
        </div>
    )
}

export default BottomAppbar