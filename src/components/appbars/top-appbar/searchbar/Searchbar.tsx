'use client'
import React, { useState, useEffect, useRef } from "react";
import style from "./Searchbar.module.css";
import Button from "@/components/buttons/Buttons";
import { useRouter } from "next/navigation";

interface SearchbarAppbarProps {
    buttons?: React.ReactNode, 
    title?: React.ReactNode,
    type?: "transparent" | "filled",
    noBackBtn?: boolean,
}

const SearchbarAppbar: React.FC<SearchbarAppbarProps> = ({buttons, title, type="transparent", noBackBtn=false }) => {
    const router = useRouter();

    const handleBackClick = () => {
        if (window.history.length <= 1) {
            // Redirect to the home if there's no history
            router.push("/"); 
        } else {
            router.back();
        }
    };
    const [placeholder, setPlaceholder] = useState(`Search...`);
    const [zommOut, setZoomOut] = useState(false);
    const [show, setShow] = useState(true);
    const [transitionDuration, setTransitionDuration] = useState('0.3s');
    const [lastScrollY, setLastScrollY] = useState(0);
    const scrollContainerRef = useRef<HTMLElement | null>(null);
    const lastTimeRef = useRef(Date.now());
    const [hasImage, setHasImage] = useState(false);

    useEffect(() => {
        const searchbar = document.querySelector(`.${style.searchbar}`);
        const imageExists: boolean = searchbar ? searchbar.querySelector('img') !== null : false;
        setHasImage(imageExists);
    }, [placeholder]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (title && title !== 'search...') {
                setZoomOut(true);
        
                setTimeout(() => {
                    setPlaceholder(title as string);
                    setZoomOut(false);
                }, 300);
            }
        }, 1000);
    
        return () => clearTimeout(timer);
    }, [title]);
  
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
            className={`${show ? style.show : style.hide} ${type === "transparent" ? style.transparent_bgc : style.filled_bgc}`}
            style={{ transitionDuration }}
        >
            <div className={style.appbar_cont}>
                <div className={style.left_button}>
                    {
                        noBackBtn ? 
                        <Button variant="icon" icon="search" href="/search" tooltip="Search" alignTooltip="left" /> :
                        <Button variant="icon" icon="arrow_back_ios_new" tooltip="Navigate Up" alignTooltip="left" onClick={handleBackClick} />
                    }
                </div>
                <Button variant="text" className={style.searchbar_trigger} href="/search" fullWidth>
                    <span className={`${style.searchbar} ${hasImage ? style.no_padding : ''}`}>
                        <span className={`${zommOut ? style.zoomOut : style.zoomIn} ${style.placeholder}`}>{placeholder}</span>
                    </span>
                </Button>
                <span className={style.right_buttons}>
                    {buttons}
                </span>
            </div>
        </div>
    )
}

export default SearchbarAppbar;