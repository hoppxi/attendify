'use client'
import * as React from "react";
import styles from "./page.module.css";
import useScreenSize from "@/hooks/useScreenSize";
import { useNavDrawer } from "@/context/NavDrawerContext";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import CoreNavbar from "@/widgets/UI/Navbar";
import Container from "@/components/containers/Containers";

const Loading = () => {
	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	
	const isLargeScreen: boolean = useScreenSize(1024);

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Loading..." /> : <CoreSearchbarAppbar hideBackBtn title="Loading..." />}
			{isLargeScreen && <CoreNavDrawer  isOpen={isNavDrawerOpen} active={1} />}
			<Container hasSearchbarAppbar navDrawerOpen={isNavDrawerOpen} hideContextBar>
                <div className={styles.container}>
                    <svg className={styles.spinner} viewBox="0 0 50 50">
                        <circle 
                            className={styles.path} 
                            cx="25" 
                            cy="25" 
                            r="20" 
                            fill="none" 
                            strokeWidth="5"
                        ></circle>
                    </svg>
                </div>
            </Container>
        </>
    )
}

export default Loading;
