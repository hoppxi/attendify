'use client'
import * as React from "react";
import styles from "../page.module.css";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import useScreenSize from "@/hooks/useScreenSize";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import List, { ListItem } from "@/components/lists/Lists";
import { useNavDrawer } from "@/context/NavDrawerContext";
import Container from "@/components/containers/Containers";
import Link from "@/components/links/Links";
import Button from "@/components/buttons/Buttons";
import Image from "next/image";

export default function AccountSettings() {

	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const isLargeScreen: boolean = useScreenSize(1024);

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Account Settings" /> : <CoreSearchbarAppbar hideSettingsBtn title="Account Settings" />}
			{isLargeScreen && <CoreNavDrawer isOpen={isNavDrawerOpen} active={1} /> }
			<Container hasSearchbarAppbar hasNavbar={false} navDrawerOpen={isNavDrawerOpen}>
				<List className={styles.account_section}>
					<div className={styles.profile_section}>
						<Image src={"/vercel.svg"} alt="profile_pic" width={100} height={100}></Image>
						<div>Safari Academy</div>
						<div>email@mailservice.com</div>
					</div>
					<ListItem heading="Profile Info" href="/settings/profile" />
					<ListItem heading="Branches" supportingText="Oumr Sibhatu" />
					<ListItem heading="Security and Privacy" />
				</List>
				<List heading="Apps and features">
					<ListItem heading="Share Profile" icon="account_circle" />
					<ListItem heading="Manage History" icon="history" />
					<ListItem heading="QR code settings" icon="qr_code" />
				</List>
				<List heading="Quick Links">
					<ListItem heading="Notices" icon="reminder" />
					<ListItem heading="Help" icon="help" />
				</List>
				<div className={styles.action_btn}>
					<Button variant="filled-tonal">Signout</Button>
				</div>
                {/* <List heading="Looking for something?" sectionClassName={styles.ql_list} >
					<Link padded href="/settings/account">Account Settings</Link>
					<Link padded href="/settings/account">Privacy Policy</Link>
					<Link padded href="/settings/account">Help & Support</Link>
					<Link padded href="/settings/account">User Guides</Link>
				</List> */}
			</Container>
		</>
	);
}