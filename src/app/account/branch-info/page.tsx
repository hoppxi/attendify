'use client'
import * as React from "react";
import style from "../page.module.css";
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

export default function BranchProfile() {
	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const isLargeScreen: boolean = useScreenSize(1024);

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Branch Profile" /> : <CoreSearchbarAppbar title="Branch Profile" />}
			{isLargeScreen ? <CoreNavDrawer isOpen={isNavDrawerOpen} active={5} /> : <CoreNavbar active={5} />}
			<Container hasSearchbarAppbar navDrawerOpen={isNavDrawerOpen}>
				<div className={style.profile_section}>
					<div className={style.profile_info}>
						<Image src={"/next.svg"} alt="" width="100" height="100" className={style.profile_pic} />
						<div className={style.name_section}>
							<div className={style.name_main}>Omur Sibhatu</div>
							<div className={style.name_prim}>Manager Weyishot</div>
							<div className={style.name_seco}>Branch address</div>
						</div>
					</div>
					<div className={style.action_buttons}>
						<Button variant="filled-tonal" icon="history" href="/account/activities" tooltip="Branch Activities" />
						<Button variant="filled-tonal" icon="settings" href="/settings/account-settings/branch" tooltip="Branch Settings" />
						<Button variant="filled-tonal" icon="help" href="/settings/account-settings" tooltip="Help" />
					</div>
					<div className={style.description_section}>
						<p>Branch Description</p><br />
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus odio, dicta dolores hic a vel eligendi commodi beatae eos distinctio ipsam libero, cum placeat magni fugiat labore maiores vero iste.
					</div>
					<div className={style.additional_info}>
						<Card 
							heading="Switch Branch"
							type="filled"
							details="Click here to view and manage the branch's profile, including all related information and settings."
							actions={
								<>
									<Button variant="outlined" href="/account/branches">Switch Branch</Button>
								</>
							}
						/>
						<Card 
							heading="See Students List"
							type="filled"
							details="Click here to view a comprehensive list of all branches associated with this company, along with their details and information."
							actions={
								<>
									<Button variant="outlined" href="/students/portal">Show list</Button>
								</>
							}
						/>
					</div>
				</div>
				
			</Container>
		</>
	);
}