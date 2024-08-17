'use client'
import * as React from "react";
import styles from "./page.module.css";
import { useNavDrawer } from "@/context/NavDrawerContext";
import useScreenSize from "@/hooks/useScreenSize";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import CoreNavbar from "@/widgets/UI/Navbar";
import Container from "@/components/containers/Containers";
import Button from "@/components/buttons/Buttons";
import Card from "@/components/cards/Cards";
import Dialog from "@/components/dialogs/Dialogs";

export default function Attendance() {
	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const isLargeScreen: boolean = useScreenSize(1024);
	const [ isRestartDialogOpen, setRestartDialog ] = React.useState(false);

	const cardData = [
		{ heading: "Generate A report", href: "/attendance/generate-report", buttonText: "Generate", details: "Explore the comprehensive and detailed list of all students currently enrolled, allowing you to review and manage their information with ease." },
		{ heading: "QR code not working", href: "/students/add", buttonText: "Attend Manually", details: "Register a new student by adding their details to the system, ensuring they are included in the student database." },
		{ heading: "Restart Attendance", href: "#", onClick: () => setRestartDialog(true), buttonText: "Help", details: "Review the records of all students who were absent today, providing an up-to-date overview of today's attendance." },
		{ heading: "Help and Support", href: "/help", buttonText: "Help", details: "Review the records of all students who were absent today, providing an up-to-date overview of today's attendance." },
	];
	
	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Attendance" /> : <CoreSearchbarAppbar title="Attendance" />}
			{isLargeScreen ? <CoreNavDrawer isOpen={isNavDrawerOpen} active={3} /> : <CoreNavbar active={3} />}
			<Container hasSearchbarAppbar navDrawerOpen={isNavDrawerOpen}>
				<div className={styles.actions_list}>
					{cardData.map(({ heading, href, buttonText, details, onClick }) => (
						<Card
							key={heading}
							heading={heading}
							type="filled"
							details={details}
							actions={<Button variant="outlined" onClick={onClick} href={href}>{buttonText}</Button>}
							className={styles.box}
						/>
					))}
				</div>
				<div className={styles.action_button}>
					<Button variant="extended" icon="edit" href="/attendance/edit">Review</Button>
				</div>
				<Dialog
					isOpen={isRestartDialogOpen}
					onClose={() => setRestartDialog(false)} 
					type="basic"
					title="Restart Process"
					actions={
						<>
							<Button variant="outlined" onClick={() => setRestartDialog(false)}>Cancle</Button>
							<Button variant="filled" href="/students/delete?uid=#1002">Continue</Button>
						</>
					}
				>
					Are you sure you want to permanently delete this student from the database? This action cannot be undone.
				</Dialog>
			</Container>
		</>
	);
}