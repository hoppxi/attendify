'use client'
import * as React from "react";
import styles from "../../page.module.css";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import useScreenSize from "@/hooks/useScreenSize";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import List, { ListItem } from "@/components/lists/Lists";
import { useNavDrawer } from "@/context/NavDrawerContext";
import Container from "@/components/containers/Containers";
import Link from "@/components/links/Links";

export default function BranchesAnalyticsSettings() {

	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const isLargeScreen: boolean = useScreenSize(1024);

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Branches Analytics" /> : <CoreSearchbarAppbar hideSettingsBtn title="Branches Analytics" />}
			{isLargeScreen && <CoreNavDrawer isOpen={isNavDrawerOpen} active={1} /> }
			<Container hasSearchbarAppbar hasNavbar={false} navDrawerOpen={isNavDrawerOpen}>
				<List heading="Branches' data">
					<ListItem icon="groups" heading="Branches" supportingText="6" />
					<ListItem icon="groups" heading="Total Registered students" supportingText="3209" />
				</List>
				<section className={styles.ql_container}>
					<h1 className={styles.ql_header}>Info</h1>
					<p className={styles.ql_paragraph}>For more information you need to log in to the branch you want to see.</p>
				</section>
                <List heading="Looking for something?" sectionClassName={styles.ql_list} >
					<Link padded href="/settings/account">Account Settings</Link>
					<Link padded href="/settings/account">Privacy Policy</Link>
					<Link padded href="/settings/account">Help & Support</Link>
					<Link padded href="/settings/account">User Guides</Link>
				</List>
			</Container>
		</>
	);
}