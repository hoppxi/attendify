
import React, { useEffect, useRef, useState } from "react";
import style  from "./Containers.module.css";
import useScreenSize from "@/hooks/useScreenSize";
import Button from "@/components/buttons/Buttons";
import { useRouter } from "next/navigation";

interface ContainerProps {
    hasNavbar?: boolean;
    hasNavDrawer?: boolean;
    hasSearchbarAppbar?: boolean;
    hasTopAppbar?: boolean;
    hasSmallScreenTopAppbar?: boolean
    hasTab?: boolean;
    navDrawerOpen?: boolean;
    icon?: string;
    title?: string;
    rightActions?: React.ReactNode;
    animateContextBar?: boolean;
    children: React.ReactNode;
    className?: string;
    hideContextBar?: boolean
}

const Container:React.FC<ContainerProps> = ({
    hasNavbar=true, 
    hasNavDrawer=true, 
    hasSearchbarAppbar, 
    hasTopAppbar=true, 
    hasSmallScreenTopAppbar,
    hasTab, 
    icon,
    title,
    rightActions,
    animateContextBar=true,
    children, 
    navDrawerOpen,
    className,
    hideContextBar
}) => {

    const isLargeScreen = useScreenSize(1024);
    const [show, setShow] = useState(true);
    const [transitionDuration, setTransitionDuration] = useState('0.3s');
    const [lastScrollY, setLastScrollY] = useState(0);
    const scrollContainerRef = useRef<HTMLElement | null>(null);
    const lastTimeRef = useRef(Date.now());
    const router = useRouter();

    const handleBackClick = () => {
      router.back();
    };

    useEffect(() => {
        scrollContainerRef.current = document.getElementById("scroll-container");
    
        const handleScroll = () => {
          if (scrollContainerRef.current) {
            const currentScrollY = scrollContainerRef.current.scrollTop;
            const currentTime = Date.now();
            const timeDiff = currentTime - lastTimeRef.current;
    
            const scrollDiff = Math.abs(currentScrollY - lastScrollY);
            const speed = scrollDiff / timeDiff; 

            const duration = Math.min(.5, 1 / (speed + 0.1));
            setTransitionDuration(`${duration}s`);
    
            if (currentScrollY > lastScrollY) {
                // Scrolling up
                setShow(false);
            } else {
              // Scrolling down
              setShow(true);
            }
    
            setLastScrollY(currentScrollY);
            lastTimeRef.current = currentTime;
          }
        };
    
        if (scrollContainerRef.current) {
          scrollContainerRef.current.addEventListener('scroll', handleScroll);
        }
    
        return () => {
          if (scrollContainerRef.current) {
            scrollContainerRef.current.removeEventListener('scroll', handleScroll);
          }
        };
      }, [lastScrollY]);

    return(
        <div 
            className={`
                ${style.container} 
                ${hasNavbar ? style.has_navbar : ""} 
                ${hasTab ? style.has_tab : ""} 
                ${hasNavDrawer ? style.has_nav_drawer : ""} 
                ${hasTopAppbar ? style.has_top_appbar : ""} 
                ${hasSmallScreenTopAppbar ? style.has_small_screen_top_appbar : ""} 
                ${hasSearchbarAppbar ? style.has_searchbar_appbar : ""} 
                ${isLargeScreen ? style.large_screen : ""} 
                ${isLargeScreen && navDrawerOpen ? style.nav_drawer_open : ""} 
                ${className ? className : ""}
            `}
            id="scroll-container"
        >
            {isLargeScreen && !hideContextBar && <div className={`${show ? style.show : style.hide} ${animateContextBar ? style.animate_context_bar : ""} ${style.context_bar}`} style={{ transitionDuration }}>
                <div className={style.context_bar_left}>
                    <Button variant="icon" tooltip="Back" onClick={handleBackClick} icon="arrow_back" />
                    <div className={style.title}>{title ? title : ""}</div>
                </div>
                <div className={style.right_Actions}>
                    <div>{rightActions}</div>
                    <div className={`${style.icon} material-symbols-outlined`}>{icon ? icon : ""}</div>
                </div>
            </div>}
            <div style={{paddingBottom: "1rem"}}>{children}</div>
        </div>
    )
}

export default Container;