'use client'
import * as React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import useScreenSize from "@/hooks/useScreenSize";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import { useNavDrawer } from "@/context/NavDrawerContext";
import Container from "@/components/containers/Containers";

export default function Notifications() {
	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const isLargeScreen: boolean = useScreenSize(1024);

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Page not found" /> : <CoreSearchbarAppbar title="Page not found"/>}
			{isLargeScreen && <CoreNavDrawer isOpen={isNavDrawerOpen} active={1} />}
			<Container hasSearchbarAppbar navDrawerOpen={isNavDrawerOpen}>
                <div className={styles.not_found}>
                    <Image src={"/images/icons/error.png"} alt="All Done" width={100} height={100} ></Image>
                    <div className={styles.not_found_description}>
                        <div>404 - Not found error!!</div>
                        <div>The page you&apos;re looking for is not found; Try navigating back</div>
                    </div>
                </div>
			</Container>
		</>
	);
}