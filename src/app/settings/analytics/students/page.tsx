'use client'
import * as React from "react";
import dynamic from "next/dynamic";
import styles from "../../page.module.css";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import useScreenSize from "@/hooks/useScreenSize";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import List, { ListItem } from "@/components/lists/Lists";
import { useNavDrawer } from "@/context/NavDrawerContext";
import Container from "@/components/containers/Containers";
import Link from "@/components/links/Links";

const AttendanceStatusChart = dynamic(() => import("@/widgets/sections/AttendanceStatusChart"), {ssr: false});
const DailyAttendanceByClassChart = dynamic(() => import("@/widgets/sections/DailyAttendanceByClassChart"), {ssr: false});
const AttendanceTrendsChart = dynamic(() => import("@/widgets/sections/AttendanceTrendsChart"), {ssr: false});

export default function StudentsAnalyticsSettings() {

	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const isLargeScreen: boolean = useScreenSize(1024);

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Students Analytics" /> : <CoreSearchbarAppbar hideSettingsBtn title="Students Analytics" />}
			{isLargeScreen && <CoreNavDrawer isOpen={isNavDrawerOpen} active={1} /> }
			<Container hasSearchbarAppbar hasNavbar={false} navDrawerOpen={isNavDrawerOpen}>
				<List heading="Students' data">
					<ListItem icon="groups" heading="Registered students" supportingText="1021" />
					<ListItem icon="event_busy" heading="Average Absent students" supportingText="80" />
					<ListItem icon="assignment_late" heading="Average Late students" supportingText="172" />
					<ListItem icon="folder_supervised" heading="Average Permission" supportingText="6" />
				</List>
				<List heading="Students Analytics">
						<AttendanceTrendsChart />
						<DailyAttendanceByClassChart />
						<AttendanceStatusChart />
					</List>
                <List heading="Looking for something?" sectionClassName={styles.ql_list} >
					<Link padded href="/settings/account">Account Settings</Link>
					<Link padded href="/settings/account">Privacy Policy</Link>
					<Link padded href="/settings/account">Help & Support</Link>
					<Link padded href="/settings/account">User Guides</Link>
				</List>
			</Container>
		</>
	);
}