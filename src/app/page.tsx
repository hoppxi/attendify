'use client'
import * as React from "react";
import dynamic from "next/dynamic";
import styles from "./page.module.css";
import useScreenSize from "@/hooks/useScreenSize";
import { useNavDrawer } from "@/context/NavDrawerContext";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import CoreNavbar from "@/widgets/UI/Navbar";
import Container from "@/components/containers/Containers";
import List,{ ListItem } from "@/components/lists/Lists";

const AttendanceStatusChart = dynamic(() => import("@/widgets/sections/AttendanceStatusChart"), {ssr: false});
const DailyAttendanceByClassChart = dynamic(() => import("@/widgets/sections/DailyAttendanceByClassChart"), {ssr: false});
const AttendanceTrendsChart = dynamic(() => import("@/widgets/sections/AttendanceTrendsChart"), {ssr: false});

export default function Home() {
	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	
	const isLargeScreen: boolean = useScreenSize(1024);

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} /> : <CoreSearchbarAppbar />}
			{isLargeScreen ? <CoreNavDrawer  isOpen={isNavDrawerOpen} active={1} /> : <CoreNavbar active={1} />}
			<Container hasSearchbarAppbar navDrawerOpen={isNavDrawerOpen} hideContextBar>
				<>
					<List heading="Key metrics of today">
						<ListItem icon="groups" heading="1021" supportingText="Total Registered Students"></ListItem>
						<ListItem icon="co_present" heading="941" supportingText="Students Attended Class today"></ListItem>
						<ListItem icon="event_busy" heading="69" supportingText="Students Absent"></ListItem>
						<ListItem icon="assignment_late" heading="4" supportingText="Students marked as late"></ListItem>
						<ListItem icon="folder_supervised" heading="7" supportingText="Students asked for permission"></ListItem>
						<ListItem icon="percent" heading="92.1%" supportingText="Students Attend Class today"></ListItem>
					</List>
					<List heading="Dashboard Overview">
						<AttendanceTrendsChart />
						<DailyAttendanceByClassChart />
						<AttendanceStatusChart />
					</List>
					<List heading="Recent Actions">
						<ListItem icon="co_present" heading="James William" supportingText="Marked as present"></ListItem>
						<ListItem icon="event_busy" heading="Jonah Silca" supportingText="Marked as Absent"></ListItem>
						<ListItem icon="folder_supervised" heading="Zolla Brims" supportingText="Marked as permission"></ListItem>
						<ListItem icon="edit" heading="John Emile" supportingText="Profile Edited"></ListItem>
					</List>
					<List heading="Announcements Panel">
						<ListItem icon="update" heading="Attendify" supportingText="App just got updated"></ListItem>
						<ListItem icon="news" heading="Welcome to Attendify" supportingText="You joined Attendify"></ListItem>
						<ListItem icon="edit" heading="Company Profile" supportingText="Admin just updated Company profile"></ListItem>
					</List>
					<List heading="Quick Links">
						<ListItem icon="help" heading="Help and support" supportingText="Explore what to find from Attendify"></ListItem>
						<ListItem icon="feedback" heading="Feedback" supportingText="Tell us what to update and change"></ListItem>
						<ListItem icon="info" heading="About us" supportingText="Who is Attendify"></ListItem>
						<ListItem icon="gavel" heading="Terms and Conditions"></ListItem>
						<ListItem icon="shield" heading="Privacy Policy"></ListItem>
					</List>
				</>
			</Container>
		</>
	);
}
