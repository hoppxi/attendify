'use client'
import * as React from "react";
import styles from "../../page.module.css";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import useScreenSize from "@/hooks/useScreenSize";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import List, { ListItem, ListItemToggle } from "@/components/lists/Lists";
import { useNavDrawer } from "@/context/NavDrawerContext";
import Container from "@/components/containers/Containers";
import Dialog from "@/components/dialogs/Dialogs";
import Form from "@/components/forms/Forms";
import TextField from "@/components/inputs/fields/Fields";
import Button from "@/components/buttons/Buttons";

export default function AccountSettings() {

	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const isLargeScreen: boolean = useScreenSize(1024);

    const [ isGetOffersChecked, setGetOffers ] = React.useState(false);
    const [ isPasswordDialogOpened, setPasswordDialog ] = React.useState(false);

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Account Settings" /> : <CoreSearchbarAppbar hideSettingsBtn title="Account Settings" />}
			{isLargeScreen && <CoreNavDrawer isOpen={isNavDrawerOpen} active={1} /> }
			<Container hasSearchbarAppbar hasNavbar={false} navDrawerOpen={isNavDrawerOpen}>
				<List heading="Security">
					<ListItem heading="Password" onClick={() => setPasswordDialog(true)} icon="lock" info={<><span className="material-symbols-outlined">check_circle</span></>} />
					<ListItem heading="Recent account activity" icon="history" href="/account/activities" />
					<ListItem heading="Account Recovery" icon="person_alert" href="/settings/account/recovery" />
				</List>
				<List heading="Privacy">
                    <ListItem icon="shield" heading="Privacy Policy" href="/info/legal/policy"></ListItem> 
                    <ListItem icon="gavel" heading="Terms and Conditions" href="/info/legal/terms"></ListItem>
                    <ListItem icon="help" heading="Help and support" supportingText="Explore what to find from Attendify" href="/info/support/help"></ListItem>
                    <ListItemToggle id="get-offers" checked={isGetOffersChecked} onChange={(checked) => setGetOffers(checked)} icon="update" heading="Get new and special offers"></ListItemToggle>
				</List>
                <Dialog
                    isOpen={isPasswordDialogOpened}
                    onClose={() => setPasswordDialog(false)}
                    type="full-screen"
                    title="Change password"
                    overlayClassName={!useScreenSize(1024) ? styles.overlay_fs_dialog : ""}
                    dialogClassName={!useScreenSize(1024) ? styles.fs_dialog_short : styles.fs_dialog_ls_cont}
                    actionsAlignment="fill-row"
                >
                    <Form
                        details="Your current password is secured; if you want to change it you can continue"
                        inputs={
                            <>
                                <TextField labelClassName={styles.fs_dialog_input_label} label="Old password" type="password" />
                                <TextField labelClassName={styles.fs_dialog_input_label} label="New Password" type="password" />
                            </>
                        }
                        formAction={
                            <>
                                <Button variant="outlined" type="button" onClick={() => setPasswordDialog(false)} textClass={styles.btn_text_center} fullWidth>Cancel</Button>
                                <Button variant="filled" type="submit" textClass={styles.btn_text_center} fullWidth>Save</Button>
                            </>
                        }
                    />
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