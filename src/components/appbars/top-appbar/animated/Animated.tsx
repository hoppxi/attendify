
import React, { useRef } from "react";
import style from "./Animated.module.css";
import Button from "@/components/buttons/Buttons";
import { useRouter } from "next/navigation";
import useVisibility from "@/hooks/useVisibility";

interface AnimatedAppbarProps {
    title?: React.ReactNode;
    icon?: React.ReactNode;
    rightButtons?: React.ReactNode;
    noBackBtn?: boolean
}

const AnimatedAppbar: React.FC<AnimatedAppbarProps> = ({title, icon, rightButtons, noBackBtn=false}) => {
    const router = useRouter();
    const titlePRef = useRef<HTMLDivElement>(null);
    const isTitlePVisible = useVisibility(titlePRef);

    const handleBackClick = () => {
        if (window.history.length <= 1) {
            // Redirect to the home if there's no history
            router.push("/"); 
        } else {
            router.back();
        }
    };

    return(
        <div className={style.top_appbar_animated}>
            <div ref={titlePRef} className={style.title_p}>
                <span className={`material-symbols-outlined ${style.app_icon}`}>{icon}</span>
                <span className={style.app_name}>{title}</span>
            </div>
            <div className={style.t_ab_a_bar}>
                <div className={style.t_ab_a_bar_left}>
                    {!noBackBtn && <Button variant="icon" icon="arrow_back_ios_new" tooltip="Navigate Up" alignTooltip="left" onClick={handleBackClick} />}
                    <span className={`${style.title_s} ${isTitlePVisible ? style.hidden : ''}`}>{title}</span>
                </div>
                <div className={style.t_ab_a_bar_right}>
                    {rightButtons}
                </div>
            </div>
        </div>
    )
}

export default AnimatedAppbar;