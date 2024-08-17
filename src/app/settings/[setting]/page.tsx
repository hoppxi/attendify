'use client'
import React from "react";
import style from "./page.module.css";
import { useParams } from 'next/navigation';
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import useScreenSize from "@/hooks/useScreenSize";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import { useNavDrawer } from "@/context/NavDrawerContext";

export default function SettingPage () {
    const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
    const params = useParams();
    const setting = params.setting;// Access the dynamic parameter
    const isLargeScreen: boolean = useScreenSize(1024);

    return (
            <>
                {isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title={setting} /> : <CoreSearchbarAppbar title={setting} />}
                {isLargeScreen && <CoreNavDrawer isOpen={isNavDrawerOpen} active={1} />}
            </>
    );
};