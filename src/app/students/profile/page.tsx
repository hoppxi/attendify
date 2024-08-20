'use client'
import * as React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import style from "./page.module.css";
import { useNavDrawer } from "@/context/NavDrawerContext";
import useScreenSize from "@/hooks/useScreenSize";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import CoreNavbar from "@/widgets/UI/Navbar";
import Container from "@/components/containers/Containers";
import Button from "@/components/buttons/Buttons";
import List, { ListItem } from "@/components/lists/Lists";
import Dialog from "@/components/dialogs/Dialogs";

const ChartComponent = dynamic(() => import('./chart'), {ssr: false});

type dialogsProps = Array<
	{isOpen: boolean; onClose: () => void; title: string; actions: React.ReactNode; children: React.ReactNode}
>

export default function StudentProfile() {
	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const isLargeScreen: boolean = useScreenSize(1024);

	// Dialogs
	const [ isDeleteDialogOpen, setDeleteDialog ] = React.useState(false);
	const [ isReportFalseDialogOpen, setReportFalseDialog ] = React.useState(false);
	const [ isAddToPrintQuickOpen, setAddToPrintQuick ] = React.useState(false);

	const dialogs: dialogsProps= [
		{
			isOpen: isDeleteDialogOpen, 
			onClose: () => setDeleteDialog(false), 
			title: "Delete Student", 
			actions: <>
				<Button variant="outlined" onClick={() => setDeleteDialog(false)}>Cancle</Button>
				<Button variant="filled" href="/students/delete?uid=#1002">Continue</Button>
			</>, 
			children: <>Are you sure you want to permanently delete this student from the database? This action cannot be undone.</>
		},
		{
			isOpen: isReportFalseDialogOpen, 
			onClose: () => setReportFalseDialog(false), 
			title: "False Report", 
			actions: <>
				<Button variant="outlined" onClick={() => setReportFalseDialog(false)}>Cancle</Button>
				<Button variant="filled" href="/attendance/change-status">Change status</Button>
			</>, 
			children: <>If the current report contains any errors or if a student&apos;s status needs updating, you can make the necessary changes here.</>
		},
		{
			isOpen: isAddToPrintQuickOpen, 
			onClose: () => setAddToPrintQuick(false), 
			title: "Add to print quick", 
			actions: <>
				<Button variant="outlined" onClick={() => setAddToPrintQuick(false)}>Cancle</Button>
				<Button variant="filled" href="/attendance/change-status">Add</Button>
			</>, 
			children: <>If the current report contains any errors or if a student&apos;s status needs updating, you can make the necessary changes here.</>
		}
	]

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Student Profile" /> : <CoreSearchbarAppbar title="Student Profile" />}
			{isLargeScreen ? <CoreNavDrawer isOpen={isNavDrawerOpen} active={2} /> : <CoreNavbar active={2} />}
			<Container hasSearchbarAppbar navDrawerOpen={isNavDrawerOpen}>
				<div className={style.profile_section}>
					<div className={style.profile_info}>
						<div>
							<Image src={"/images/profile-pic/default-avatar-icon.png"} alt="" width="100" height="100" className={style.profile_pic} />
							<div className={style.name_section}>
								<div className={style.name_main}>Student Name</div>
								<div className={style.name_prim}>@username</div>
								<div className={style.name_seco}>Grade 10 - section C</div>
							</div>
						</div>
						<div className={style.qr_code_container}>
							<Image src={"/images/test-qr-code.png"} alt="" width="100" height="100" className={style.qr_code}></Image>
							<div className={style.ab_button}>
								<Button variant="filled-tonal" onClick={() => setAddToPrintQuick(true)} icon="print"></Button>
							</div>
						</div>
					</div>
					<div className={style.action_buttons}>
						<Button variant="filled-tonal" icon="history" href="/students/activities" tooltip="Attend History" />
						<Button variant="filled-tonal" icon="edit" href="/students/edit?uid=#1202" tooltip="Edit" />
						<Button variant="filled-tonal" icon="delete" onClick={() => setDeleteDialog(true)} tooltip="Delete" />
					</div>
					<div className={style.description_section}>
						<p>Student&apos;s info</p><br />
						<List>
							<ListItem icon="today" heading="Absent" onClick={() => setReportFalseDialog(true)} supportingText="Today" />
                            <ListItem icon="call" heading="0912131415 / 0912345678 / 0912141618" supportingText="Phone Number" href="tel:+251912131415" />
                            <ListItem icon="mail" heading="student@mailservice.com" supportingText="Email" href="mailto:student@mailservice.com" />
                            <ListItem icon="celebration" heading="1999/22/11" supportingText="Birthday" />
                            <ListItem icon="family_restroom" heading="Father name" supportingText="Ftaher name" />
                            <ListItem icon="family_restroom" heading="Mother name" supportingText="Mother Name" />
                            <ListItem icon="male" heading="Male" supportingText="Gender" />
                        </List>
					</div>
					<div className={style.additional_info}>
						<ChartComponent />
					</div>
				</div>
				{dialogs.map(({isOpen, onClose, title, actions, children}, i) => (
					<Dialog
						key={i}
						type="basic"
						title={title}
						isOpen={isOpen}
						onClose={onClose}
						actions={actions}
					>
						{children}
					</Dialog>
				))}
			</Container>
		</>
	);
}
