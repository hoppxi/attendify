'use client'
import * as React from "react";
import style from "./page.module.css";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import useScreenSize from "@/hooks/useScreenSize";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import CoreNavbar from "@/widgets/UI/Navbar";
import { useNavDrawer } from "@/context/NavDrawerContext";
import Container from "@/components/containers/Containers";
import Button from "@/components/buttons/Buttons";
import Card from "@/components/cards/Cards";

export default function Branches() {
	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const isLargeScreen: boolean = useScreenSize(1024);

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Branches" /> : <CoreSearchbarAppbar title="Branches" />}
			{isLargeScreen ? <CoreNavDrawer isOpen={isNavDrawerOpen} active={5} /> : <CoreNavbar active={5} />}
			<Container hasSearchbarAppbar navDrawerOpen={isNavDrawerOpen} className={style.container}>
				<div className={style.title}>Branches of Company Name</div>
				<div className={style.branches_list}>
					<Card 
						heading="Branch Name"
						subHeading="Branch address"
						type="filled"
						details="Click here to view and manage the branch's profile, including all related information and settings."
						actions={
							<>
								<Button variant="outlined">Switch</Button>
							</>
						}
						className={style.box}
					/>
					<Card 
						heading="Branch Name"
						subHeading="Branch address"
						type="filled"
						details="Click here to view and manage the branch's profile, including all related information and settings."
						actions={
							<>
								<Button variant="outlined">Switch</Button>
							</>
						}
						className={style.box}
					/>
					<Card 
						heading="Branch Name"
						subHeading="Branch address"
						type="filled"
						details="Click here to view and manage the branch's profile, including all related information and settings."
						actions={
							<>
								<Button variant="outlined">Switch</Button>
							</>
						}
						className={style.box}
					/>
					<Card 
						heading="Branch Name"
						subHeading="Branch address"
						type="filled"
						details="Click here to view and manage the branch's profile, including all related information and settings."
						actions={
							<>
								<Button variant="outlined">Switch</Button>
							</>
						}
						className={style.box}
					/>
					<Card 
						heading="Branch Name"
						subHeading="Branch address"
						type="filled"
						details="Click here to view and manage the branch's profile, including all related information and settings."
						actions={
							<>
								<Button variant="outlined">Switch</Button>
							</>
						}
						className={style.box}
					/>
					<Card 
						heading="Branch Name"
						subHeading="Branch address"
						type="filled"
						details="Click here to view and manage the branch's profile, including all related information and settings."
						actions={
							<>
								<Button variant="outlined">Switch</Button>
							</>
						}
						className={style.box}
					/>
				</div>
				<div className={style.action_button}>
					<Button variant="extended" icon="add" href="/auth/signup/create-branch">Add Branch</Button>
				</div>
			</Container>
		</>
	);
}