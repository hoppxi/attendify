'use client';

import React, { useState, useCallback, memo } from "react";
import styles from "../page.module.css";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import useScreenSize from "@/hooks/useScreenSize";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import List, { ListItem } from "@/components/lists/Lists";
import { useNavDrawer } from "@/context/NavDrawerContext";
import Container from "@/components/containers/Containers";
import Link from "@/components/links/Links";
import Dialog from "@/components/dialogs/Dialogs";
import Form from "@/components/forms/Forms";
import TextField from "@/components/inputs/fields/Fields";
import Button from "@/components/buttons/Buttons";

interface DialogFormProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	inputs: React.ReactNode;
}

const DialogForm: React.FC<DialogFormProps> = memo(({ isOpen, onClose, title, inputs }) => (
	<Dialog
		isOpen={isOpen}
		onClose={onClose}
		type="full-screen"
		title={title}
	>
		<Form
			inputs={inputs}
			formAction={
				<>
					<Button variant="outlined" type="button" onClick={onClose}>Cancel</Button>
					<Button variant="filled" type="submit">Save</Button>
				</>
			}
		/>
	</Dialog>
));

export default function ProfileSettings() {
	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const isLargeScreen: boolean = useScreenSize(1024);

	const [isNameDialogOpen, setNameDialog] = useState(false);
	const [isAdminDialogOpen, setAdminDialog] = useState(false);
	const [isDescriptionDialogOpen, setDescriptionDialog] = useState(false);
	const [isAddressDialogOpen, setAddressDialog] = useState(false);

	const openDialog = useCallback((setDialog: React.Dispatch<React.SetStateAction<boolean>>) => () => setDialog(true), []);
	const closeDialog = useCallback((setDialog: React.Dispatch<React.SetStateAction<boolean>>) => () => setDialog(false), []);

	return (
		<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Profile Settings" /> : <CoreSearchbarAppbar hideSettingsBtn title="Profile Settings" />}
			{isLargeScreen && <CoreNavDrawer isOpen={isNavDrawerOpen} active={1} />}
			<Container hasSearchbarAppbar hasNavbar={false} navDrawerOpen={isNavDrawerOpen}>
				<List heading="Account ID">
					<ListItem heading="Email" supportingText="email@mailservice.com" />
				</List>
				<List heading="Company Info">
					<ListItem heading="Name" onClick={openDialog(setNameDialog)} supportingText="Safari Academy" icon="source_environment" />
					<ListItem heading="Admin (owner)" onClick={openDialog(setAdminDialog)} supportingText="Eyob" icon="person" />
					<ListItem heading="Phone Number" supportingText="+2519292929229" href="tel:2519292929229" icon="call" />
					<ListItem heading="Number of branches" href="/account/branches" supportingText="5" icon="apartment" />
					<ListItem heading="Number of students" href="/students/list" supportingText="6732" icon="groups" />
					<ListItem
						heading="Description"
						onClick={openDialog(setDescriptionDialog)}
						icon="description"
						supportingText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat harum sint cum saepe omnis quis repudiandae labore totam cupiditate assumenda, voluptatum nostrum excepturi iste, ad quo? Amet, placeat tempore. Recusandae."
					/>
					<ListItem heading="Address (Head office)" onClick={openDialog(setAddressDialog)} icon="contact_mail" supportingText="Ethiopia, Addis Ababa, 2023YTK" />
				</List>
				<List heading="Looking for something?" sectionClassName={styles.ql_list}>
					<Link padded href="/settings/analytics/branches">Branches Settings</Link>
					<Link padded href="/settings/analytics/company">Company Analytics</Link>
					<Link padded href="/settings/account">Account settings</Link>
				</List>

				<DialogForm
					isOpen={isNameDialogOpen}
					onClose={closeDialog(setNameDialog)}
					title="Edit Company name"
					inputs={<TextField labelClassName={styles.fs_dialog_input_label} label="Company name" />}
				/>
				<DialogForm
					isOpen={isAdminDialogOpen}
					onClose={closeDialog(setAdminDialog)}
					title="Edit Company Admin"
					inputs={
						<>
							<TextField labelClassName={styles.fs_dialog_input_label} label="Admin name" />
							<TextField labelClassName={styles.fs_dialog_input_label} label="Admin Phone Number" value="+251******@8" disabled />
							<TextField labelClassName={styles.fs_dialog_input_label} label="Admin Email" value="email@mailservice.com" disabled />
						</>
					}
				/>
				<DialogForm
					isOpen={isDescriptionDialogOpen}
					onClose={closeDialog(setDescriptionDialog)}
					title="Edit Company Description"
					inputs={<TextField labelClassName={styles.fs_dialog_input_label} label="Company Description" />}
				/>
				<DialogForm
					isOpen={isAddressDialogOpen}
					onClose={closeDialog(setAddressDialog)}
					title="Edit Company Address"
					inputs={<TextField labelClassName={styles.fs_dialog_input_label} label="Address" />}
				/>
			</Container>
		</>
	);
}
