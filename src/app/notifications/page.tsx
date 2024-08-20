'use client'
import * as React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import useScreenSize from "@/hooks/useScreenSize";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import { useNavDrawer } from "@/context/NavDrawerContext";
import Container from "@/components/containers/Containers";
import List, { ListItem } from "@/components/lists/Lists";
import Button from "@/components/buttons/Buttons";
import SearchbarAppbar from "@/components/appbars/top-appbar/searchbar/Searchbar";

interface notificationsFormat {
	id: number;
	message: string;
	timestamp: string;
	href: string;
}

export default function Notifications() {
	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const isLargeScreen: boolean = useScreenSize(1024);

	const notifications: notificationsFormat[] = [
		{ id: 1, message: 'New message from John Doe', timestamp: '2024-08-19T14:48:00Z', href: "" },
		{ id: 2, message: 'Your order has been shipped', timestamp: '2024-08-18T09:30:00Z', href: "" },
		{ id: 3, message: 'Reminder: Meeting at 3 PM today', timestamp: '2024-08-17T08:15:00Z', href: "" },
	];

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Notifications" /> :
				 <SearchbarAppbar
					buttons={
						<>
							<Button variant="icon" icon="settings" tooltip="Settings" href="/settings" />
							{notifications.length > 0 && <Button variant="icon" icon="mark_email_read" tooltip="Mark as Read"></Button>}
						</>
					}
					title={"Notifications"}
			 />
			}
			{isLargeScreen && <CoreNavDrawer isOpen={isNavDrawerOpen} active={1} />}
			<Container hasSearchbarAppbar navDrawerOpen={isNavDrawerOpen} rightActions={
				notifications.length > 0 && <Button variant="icon" icon="mark_email_read" tooltip="Mark as Read"></Button>
			}>
				{notifications.length > 0 ? (
					<List heading="Recent">
						{notifications.map(({message, href, timestamp, id}) => (
							<ListItem key={id} heading={message} supportingText={timestamp} href={href} />
						))}
					</List>
					) : (
					<div className={styles.no_notifications}>
						<Image src={"/images/icons/done.svg"} alt="All Done" width={100} height={100} ></Image>
						<div className={styles.no_notifications_description}>
							<div>You&apos;re all caught up</div>
							<div>This is where you&apos;ll see notifications about your account</div>
						</div>
					</div>
				)}
			</Container>
		</>
	);
}