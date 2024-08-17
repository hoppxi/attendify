'use client'
import React, { useState, useEffect } from "react";
import style from "./Normal.module.css";
import Button from "@/components/buttons/Buttons";
import useScreenSize from "@/hooks/useScreenSize";
import { useRouter } from "next/navigation";

interface NormalAppbarProps {
    backBtn?: boolean;
    navdrawerOpener?: () => void;
    searchbar?: React.ReactNode
    title?: React.ReactNode;
    rightButtons?: React.ReactNode
}

const NormalAppbar: React.FC<NormalAppbarProps> = ({ backBtn, navdrawerOpener, searchbar, title, rightButtons }) => {

    const isLargeScreen: boolean = useScreenSize(1024);
    const router = useRouter();

    const handleBackClick = () => {
      router.back();
    };

    return(
        <div className={style.top_appbar}>
            <div className={style.t_ab_left}>
               {isLargeScreen ?
                    <>
                        <Button variant="icon" onClick={navdrawerOpener} icon="menu" tooltip="Menu"></Button>
                        <span className={style.title}>{title}</span>
                    </> :
                    <>
                        {backBtn && <Button variant="icon" icon="arrow_back_ios_new" tooltip="Navigate Up" onClick={handleBackClick} />}
                        <span className={style.title}>{title}</span>
                    </>
               }
            </div>
            <div className={style.t_ab_center}>
                {isLargeScreen && searchbar}
            </div>
            <div className={style.t_ab_right}>
                {!isLargeScreen ? 
                    <>
                        <Button variant="icon" icon="search"></Button>
                        {rightButtons}
                    </> :
                    rightButtons
                }
            </div>
        </div>
    )
}

export default NormalAppbar;