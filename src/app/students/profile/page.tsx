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

const ChartComponent = dynamic(() => import('./chart'), {ssr: false})

export default function StudentProfile() {
	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const isLargeScreen: boolean = useScreenSize(1024);
	const [ isDeleteDialogOpen, setDeleteDialog ] = React.useState(false);
	const [ isReportFalseDialogOpen, setReportFalseDialog ] = React.useState(false);

	const handleDialogOpen = () => {
		setDeleteDialog(true)
	}

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Student Profile" /> : <CoreSearchbarAppbar title="Student Profile" />}
			{isLargeScreen ? <CoreNavDrawer isOpen={isNavDrawerOpen} active={2} /> : <CoreNavbar active={2} />}
			<Container hasSearchbarAppbar navDrawerOpen={isNavDrawerOpen}>
				<div className={style.profile_section}>
					<div className={style.profile_info}>
						<Image src={"/images/profile-pic/default-avatar-icon.png"} alt="" width="100" height="100" className={style.profile_pic} />
						<div className={style.name_section}>
							<div className={style.name_main}>Student Name</div>
							<div className={style.name_prim}>@username</div>
							<div className={style.name_seco}>Grade 10 - section C</div>
						</div>
					</div>
					<div className={style.action_buttons}>
						<Button variant="filled-tonal" icon="history" href="/students/activities" tooltip="Attend History" />
						<Button variant="filled-tonal" icon="edit" href="/students/edit?uid=#1202" tooltip="Edit" />
						<Button variant="filled-tonal" icon="delete" onClick={() => setDeleteDialog(true)} tooltip="Delete" />
					</div>
					<div className={style.description_section}>
						<p>Student's info</p><br />
						<List>
							<ListItem icon="today" heading="Absent" onClick={() => setReportFalseDialog(true)} supportingText="Today" />
                            <ListItem icon="call" heading="0912131415 / 0912345678 / 0912141618" supportingText="Phone Number" />
                            <ListItem icon="mail" heading="student@mailservice.com" supportingText="Email" />
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
				<Dialog
					isOpen={isDeleteDialogOpen}
					onClose={() => setDeleteDialog(false)} 
					type="basic"
					title="Delete Student"
					actions={
						<>
							<Button variant="outlined" onClick={() => setDeleteDialog(false)}>Cancle</Button>
							<Button variant="filled" href="/students/delete?uid=#1002">Continue</Button>
						</>
					}
				>
					Are you sure you want to permanently delete this student from the database? This action cannot be undone.
				</Dialog>
				<Dialog
					isOpen={isReportFalseDialogOpen}
					onClose={() => setReportFalseDialog(false)} 
					type="basic"
					title="False Report"
					actions={
						<>
							<Button variant="outlined" onClick={() => setReportFalseDialog(false)}>Cancle</Button>
							<Button variant="filled" href="/attendance/change-status">Change status</Button>
						</>
					}
				>
					If the current report contains any errors or if a student's status needs updating, you can make the necessary changes here.
				</Dialog>
			</Container>
		</>
	);
}
