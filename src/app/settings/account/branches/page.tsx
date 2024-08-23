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
import Button from "@/components/buttons/Buttons";
import Dialog from "@/components/dialogs/Dialogs";
import Form from "@/components/forms/Forms";
import TextField from "@/components/inputs/fields/Fields";

export default function AccountSettings() {

	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const isLargeScreen: boolean = useScreenSize(1024);
    const [ isBranchEditDialogOpen, setBranchEditDialog ] = React.useState(false);
    const [ isInfoDialogOpen, setInfoDialog ] = React.useState(false);

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Account Settings" /> : <CoreSearchbarAppbar hideSettingsBtn title="Account Settings" />}
			{isLargeScreen && <CoreNavDrawer isOpen={isNavDrawerOpen} active={1} /> }
			<Container hasSearchbarAppbar hasNavbar={false} navDrawerOpen={isNavDrawerOpen}>
				<List heading="Logged in as">
					<ListItem heading="Current Branch" icon="apartment" onClick={() => setBranchEditDialog(true)} />
				</List>
				<List heading="Registered Branches">
					<ListItem heading="Branch name" onClick={() => setInfoDialog(true)} />
					<ListItem heading="Branch name" onClick={() => setInfoDialog(true)} />
					<ListItem heading="Branch name" onClick={() => setInfoDialog(true)} />
					<ListItem heading="Branch name" onClick={() => setInfoDialog(true)} />
					<ListItem heading="Branch name" onClick={() => setInfoDialog(true)} />
				</List>
				<div className={styles.action_btn}>
					<Button variant="filled-tonal" href="/account/branches">Switch branch</Button>
				</div>
                <Dialog
                    isOpen={isBranchEditDialogOpen}
                    onClose={() => setBranchEditDialog(false)}
                    type="full-screen"
                    title="Edit Branch Details"
                    overlayClassName={!useScreenSize(1024) ? styles.overlay_fs_dialog : ""}
                    dialogClassName={!useScreenSize(1024) ? styles.fs_dialog_short : styles.fs_dialog_ls_cont}
                    
                >
                    <Form
                        inputs={
                            <>
                                <TextField labelClassName={styles.fs_dialog_input_label} label="Branch name" />
                                <TextField labelClassName={styles.fs_dialog_input_label} label="Branch Address" />
                                <TextField labelClassName={styles.fs_dialog_input_label} label="Branch Description" />
                                <TextField labelClassName={styles.fs_dialog_input_label} label="Branch Phone Number" value="+251******@8" disabled />
                                <TextField labelClassName={styles.fs_dialog_input_label} label="Branch Admin name" />
                                <TextField labelClassName={styles.fs_dialog_input_label} label="Branch Admin Email" value="email@mailservice.com" disabled />
                                <TextField labelClassName={styles.fs_dialog_input_label} label="Branch Admin phone number" value="email@mailservice.com" disabled />
                            </>
                        }
                        formAction={
                            <>
                                <Button variant="outlined" type="button" onClick={() => setBranchEditDialog(false)} textClass={styles.btn_text_center} fullWidth>Cancel</Button>
                                <Button variant="filled" type="submit" textClass={styles.btn_text_center} fullWidth>Save</Button>
                            </>
                        }
                    />
                </Dialog>
                <Dialog
                    isOpen={isInfoDialogOpen}
                    onClose={() => setInfoDialog(false)}
                    type="basic"
                    title="Info"
                    actionsAlignment="right"
                    actions={
                        <>
                            <Button variant="filled" type="submit" onClick={() => setInfoDialog(false)}>Okay</Button>
                        </>
                    }
                >
                    To edit another branch you need first to switch branch and attempt; to do so click the switch button below!
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