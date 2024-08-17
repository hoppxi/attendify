'use client'
import * as React from "react";
import style from "./page.module.css";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import useScreenSize from "@/hooks/useScreenSize";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import Card from "@/components/cards/Cards";
import Button from "@/components/buttons/Buttons";
import { useNavDrawer } from "@/context/NavDrawerContext";
import Container from "@/components/containers/Containers";

export default function Settings() {

	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const isLargeScreen: boolean = useScreenSize(1024);

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Select School" /> : <CoreSearchbarAppbar title="Select School" />}
			<Container hasSearchbarAppbar hasNavbar={false} hasNavDrawer={false} className={style.container} >
				<div className={style.header}>Select a school to login</div>
				<div className={style.card_container}>
					<Card
						type="filled"
						heading="School Name"
						subHeading="Branch Address"
						details="This is an example of an elevated card with right-aligned actions."
						actions={
						<>
							<Button variant="filled">Select</Button>
						</>
						}
						alignActions="right"
					/>
					<Card
						type="filled"
						heading="School Name"
						subHeading="Branch Address"
						details="This is an example of an elevated card with right-aligned actions."
						actions={
						<>
							<Button variant="filled">Select</Button>
						</>
						}
						alignActions="right"
					/>
					<Card
						type="filled"
						heading="School Name"
						subHeading="Branch Address"
						details="This is an example of an elevated card with right-aligned actions."
						actions={
						<>
							<Button variant="filled">Select</Button>
						</>
						}
						alignActions="right"
					/>
				</div>
				<div className={style.action_button}>
					<Button variant="extended" icon="add">Add Branch</Button>
				</div>
			</Container>
		</>
	);
}