'use client'
import * as React from "react";
import styles from "./page.module.css";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import useScreenSize from "@/hooks/useScreenSize";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import List, { ListItem } from "@/components/lists/Lists";
import { settingsAppData } from "./data";
import { useNavDrawer } from "@/context/NavDrawerContext";
import Container from "@/components/containers/Containers";

export default function Settings() {

	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const isLargeScreen: boolean = useScreenSize(1024);

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Settings" /> : <CoreSearchbarAppbar hideSettingsBtn title="Settings" />}
			{isLargeScreen && <CoreNavDrawer isOpen={isNavDrawerOpen} active={1} /> }
			<Container hasSearchbarAppbar hasNavbar={false} navDrawerOpen={isNavDrawerOpen}>
				{settingsAppData.map((list, i) => (
					<List 
						key={i}
						heading={list.groupName}
					>
						
						<>
								{list.groupMembers.map((listItem, i) => {
									return <ListItem 
										key={i}
										icon={listItem.icon} 
										heading={listItem.setting} 
										supportingText={listItem.description} 
										href={
											listItem.href ? listItem.href : 
											`/settings/${listItem.setting.toLowerCase().replace(/ /g, "-")}`} 
									/>
								})}
						</>
					</List>
				))}
			</Container>
		</>
	);
}