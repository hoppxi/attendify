'use client'
import * as React from "react";
import useScreenSize from "@/hooks/useScreenSize";
import { useNavDrawer } from "@/context/NavDrawerContext";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import CoreNavbar from "@/widgets/UI/Navbar";
import Container from "@/components/containers/Containers";
import List,{ ListItem } from "@/components/lists/Lists";

export default function Home() {
	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	
	const isLargeScreen: boolean = useScreenSize(1024);

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Account activities" /> : <CoreSearchbarAppbar title="Account activities" />}
			{isLargeScreen ? <CoreNavDrawer  isOpen={isNavDrawerOpen} active={5} /> : <CoreNavbar active={5} />}
			<Container hasSearchbarAppbar navDrawerOpen={isNavDrawerOpen}>
				<>
					<List heading="Recent Actions">
						<ListItem icon="co_present" heading="James William" supportingText="Marked as present"></ListItem>
						<ListItem icon="event_busy" heading="Jonah Silca" supportingText="Marked as Absent"></ListItem>
						<ListItem icon="folder_supervised" heading="Zolla Brims" supportingText="Marked as permission"></ListItem>
						<ListItem icon="edit" heading="John Emile" supportingText="Profile Edited"></ListItem>
					</List>
					<List heading="Announcements Panel">
						<ListItem icon="update" heading="Attendify" supportingText="App just got updated"></ListItem>
						<ListItem icon="news" heading="Welcome to Attendify" supportingText="You joined Attendify"></ListItem>
						<ListItem icon="edit" heading="Company Profile" supportingText="Admin just updated Company profile"></ListItem>
					</List>
				</>
			</Container>
		</>
	);
}
