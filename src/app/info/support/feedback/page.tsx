'use client'
import * as React from "react";
import useScreenSize from "@/hooks/useScreenSize";
import { useNavDrawer } from "@/context/NavDrawerContext";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import CoreNavbar from "@/widgets/UI/Navbar";
import Container from "@/components/containers/Containers";

export default function Feedback() {
	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	
	const isLargeScreen: boolean = useScreenSize(1024);

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Feedback" /> : <CoreSearchbarAppbar title="Feedback" />}
			{isLargeScreen ? <CoreNavDrawer  isOpen={isNavDrawerOpen} active={1} /> : <CoreNavbar active={1} />}
			<Container hasSearchbarAppbar navDrawerOpen={isNavDrawerOpen}>
                <></>
            </Container>
        </>
    )
}