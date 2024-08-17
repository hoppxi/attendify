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
import Image from "next/image";
import Button from "@/components/buttons/Buttons";
import Card from "@/components/cards/Cards";

export default function Account() {
	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const isLargeScreen: boolean = useScreenSize(1024);

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Account" /> : <CoreSearchbarAppbar title="Account" />}
			{isLargeScreen ? <CoreNavDrawer isOpen={isNavDrawerOpen} active={5} /> : <CoreNavbar active={5} />}
			<Container hasSearchbarAppbar navDrawerOpen={isNavDrawerOpen}>
				<div className={style.profile_section}>
					<div className={style.profile_info}>
						<Image src={"/next.svg"} alt="" width="100" height="100" className={style.profile_pic} />
						<div className={style.name_section}>
							<div className={style.name_main}>Safari Academy</div>
							<div className={style.name_prim}>Eyob</div>
							<div className={style.name_seco}>Location</div>
						</div>
					</div>
					<div className={style.action_buttons}>
						<Button variant="filled-tonal" icon="history" href="/account/activities" tooltip="My Activities" />
						<Button variant="filled-tonal" icon="settings" href="/settings/account-settings" tooltip="Settings" />
						<Button variant="filled-tonal" icon="help" href="/settings/account-settings" tooltip="Help" />
					</div>
					<div className={style.description_section}>
						<p>Description</p><br />
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus odio, dicta dolores hic a vel eligendi commodi beatae eos distinctio ipsam libero, cum placeat magni fugiat labore maiores vero iste.
					</div>
					<div className={style.additional_info}>
						<Card 
							heading="Branch Profile"
							type="filled"
							details="Click here to view and manage the branch's profile, including all related information and settings."
							actions={
								<>
									<Button variant="outlined" href="/account/branch-info">Go to profile</Button>
								</>
							}
						/>
						<Card 
							heading="See all Branches"
							type="filled"
							details="Click here to view a comprehensive list of all branches associated with this company, along with their details and information."
							actions={
								<>
									<Button variant="outlined" href="/account/branches">See Branches</Button>
								</>
							}
						/>
					</div>
				</div>
				
			</Container>
		</>
	);
}