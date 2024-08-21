'use client'
import React, {useRef, useEffect} from "react";
import style from "./Buttons.module.css";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes } from "react";

type ButtonVariant = 
    | "filled" 
    | "filled-tonal" 
    | "text" 
    | "outlined" 
    | "icon" 
    | "extended" 
    | "fab" 
    | "elevated" 
    | "segemented";

type segementedButton = {
    label: string, 
    onClick?: () => void, 
    selected?: boolean
}

interface ButtonProps {
    variant: ButtonVariant;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    segemented?: Array<segementedButton>;
    disabled?: boolean;
    onClick?: () => void;
    ripple?: boolean;
    tooltip?: string;
    className?: string;
    textClass?: string;
    fullWidth?: boolean;
    href?: string;
    type?: "submit" | "reset" | "button" | undefined;
    alignTooltip?: "right" | "left"
}

const Button: React.FC<ButtonProps> = ({variant="text", icon, children, segemented, disabled=false, onClick, href, tooltip, className, fullWidth, type, textClass, alignTooltip}) => {
    const router = useRouter();

    const navigate = (href: string) => {
      router.push(href);
    };
    
    const rippleRef = useRef<HTMLSpanElement | null>(null);
    const isHeldDown = useRef(false);

    const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);
    const [isTouchScreen, setIsTouchScreen] = React.useState(false);
    const holdTimer = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const checkTouchScreen = () => {
            setIsTouchScreen('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };
    
        checkTouchScreen();
    }, []);
    
    const handleTouchStart = () => {
        holdTimer.current = setTimeout(() => {
            setIsTooltipVisible(true);
            navigator.vibrate && navigator.vibrate(50);
        }, 600);
    };
    
    const handleTouchEnd = () => {
        if (holdTimer.current) {
            clearTimeout(holdTimer.current);
        }
        setTimeout(() => {
            setIsTooltipVisible(false);
        }, 1000);
    };

    const buttonStyleClass = 
        variant === "text" ? style.btn_text : 
        variant === "filled" ? style.btn_filled :
        variant === "icon" ? style.btn_icon :
        variant === "elevated" ? style.btn_elevated :
        variant === "extended" ? style.btn_extended :
        variant === "fab" ? style.btn_fab :
        variant === "filled-tonal" ? style.btn_filled_tonal :
        variant === "outlined" ? style.btn_outlined :
        style.btn_text;
    
    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button = event.currentTarget;

         // Remove any existing ripple before creating a new one
         if (rippleRef.current) {
            rippleRef.current.remove();
            rippleRef.current = null;
        }

        const ripple = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
    
        ripple.style.width = ripple.style.height = `${diameter}px`;
        ripple.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
        ripple.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
        ripple.className = style.ripple;
    
        rippleRef.current = ripple;
        isHeldDown.current = true;
    
        button.appendChild(ripple);
    };

    const endRipple = () => {
        if (rippleRef.current) {
            isHeldDown.current = false;
        
            // Delay removal to allow the ripple to complete the animation if it was held down for a short time
            setTimeout(() => {
                if (rippleRef.current && !isHeldDown.current) {
                    rippleRef.current.style.transition = 'opacity 300ms ease-out'; // Add a transition for opacity
                    rippleRef.current.style.opacity = '0'; // Fade out ripple

                    const handleTransitionEnd = () => {
                        rippleRef.current?.remove(); // Remove the ripple element
                        rippleRef.current = null; // Reset the ref
                    };

                    // Listen for the transition end event and remove the ripple element
                    rippleRef.current.addEventListener('transitionend', handleTransitionEnd, { once: true });
                }
            }, 300);
        } 
    };

    if (segemented && segemented.length > 1) {
        return(
            <div className={style.btn_segemented} aria-disabled={disabled}>
                {
                    segemented.map((button, i) => (
                        <button 
                            onClick={() => {
                                button.onClick
                                if (href) navigate(href);
                            }} 
                            key={i} 
                            className={`
                                ${style[`btn_segement_${i == 0 ? "fc" : i == segemented.length-1 ? "lc" : "c"}`]} 
                                ${style.btn_segement} 
                                ${button.selected ? style.btn_segemented_selected : ""}
                                ${className}
                            `}
                            onMouseDown={createRipple}
                            onMouseUp={endRipple}
                            onMouseLeave={endRipple}
                        >
                            {button.label}
                        </button>
                    ))
                }
            </div>
        )
    }

    return(
        <div className={`${!isTouchScreen ? style.no_touchscreen : ""} ${style.btn_container}`} style={{width: fullWidth ? "100%" : "unset"}}>
            <button 
                className={`${buttonStyleClass} ${className}`} 
                disabled={disabled} 
                onClick={() => {
                    if (onClick) onClick();
                    if (href) navigate(href);
                }}
                onMouseDown={createRipple}
                onMouseUp={endRipple}
                onMouseLeave={() => {
                    () => endRipple();
                    !isTouchScreen && setIsTooltipVisible(false);
                }}
                onMouseEnter={() => !isTouchScreen && setIsTooltipVisible(true)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                type={type}
            >
                {icon && <span className={`material-symbols-outlined ${style.icon}`}>{icon}</span>}
                {children && <span className={`${textClass ? textClass : ""} ${style.text}`}>{children}</span>}
            </button>
            {tooltip && <div className={`${isTooltipVisible ? style.show_tooltip : ""} ${style.btn_tooltip} ${alignTooltip ? (alignTooltip == "left" ? style.left : style.right) : ""}`}>{tooltip}</div>}
        </div>
    )
}

export default Button;
export {type ButtonProps};