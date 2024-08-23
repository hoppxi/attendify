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
import Dialog from "@/components/dialogs/Dialogs";

export default function AccountSettings() {

	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const isLargeScreen: boolean = useScreenSize(1024);

	const [ isShareProfileDialogOpen, setShareProfileDialog ] = React.useState(false);

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
					<ListItem heading="Branches" supportingText="Oumr Sibhatu" href="/settings/account/branches" />
					<ListItem heading="Security and Privacy" href="/settings/account/privacy" />
				</List>
				<List heading="Apps and features">
					<ListItem heading="Share Profile" icon="account_circle" onClick={() => setShareProfileDialog(true)} />
					<ListItem heading="Manage History" icon="history" href="/account/history" />
					<ListItem heading="QR code settings" icon="qr_code" href="/settings/qr-code" />
				</List>
				<List>
					{/* <ListItem heading="Notices" icon="reminder" /> */}
					<ListItem heading="Help" href="/info/support/help" icon="help" />
				</List>
				<div className={styles.action_btn}>
					<Button variant="filled-tonal">Signout</Button>
					<Button variant="filled-tonal">Delete Account</Button>
				</div>
				<Dialog
					isOpen={isShareProfileDialogOpen}
					onClose={() => setShareProfileDialog(false)}
					type="basic"
					title="Share Company profile"
					actionsAlignment="right"
					actions={
						<>
							<Button variant="outlined" onClick={() => setShareProfileDialog(false) }>Cancle</Button>
							<Button variant="filled" onClick={ShareProfile}>Share</Button>
						</>
					}
				>
					Share Profile so that other can find your school on different platforms
				</Dialog>
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

function ShareProfile(): void {
	const data: ShareData = {
		url: "http://localhost:300/shared/company/:id", 
		title: "Company Name", 
		text: "Share your school profile" 
	};

	navigator.share && navigator.share(data)
}