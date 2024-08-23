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

export default function CompanyAnalyticsSettings() {

	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const isLargeScreen: boolean = useScreenSize(1024);

	const dailyAttedanceData = [
        ['Grade', 'Present', 'Absent', 'Late'],
        ['Grade 9', 30, 5, 2],
        ['Grade 10', 28, 7, 3],
        ['Grade 11', 35, 3, 4],
        ['Grade 12', 32, 6, 1],
    ];

	const attedanceTradeData = [
        ['Date', 'Total Attendance', 'Absences', 'Lateness'],
        ['2024-08-01', 3209, 300, 520],
        ['2024-08-02', 3209, 200, 500],
        ['2024-08-03', 3209, 100, 420],
        ['2024-08-04', 3209, 100, 120],
    ];

	const attedanceStatusData = [
		['Attendance Status', 'Number of Students'],
        ['Present', 3200],
        ['Absent', 172],
        ['Late', 320],
    ];

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Company Analytics" /> : <CoreSearchbarAppbar hideSettingsBtn title="Company Analytics" />}
			{isLargeScreen && <CoreNavDrawer isOpen={isNavDrawerOpen} active={1} /> }
			<Container hasSearchbarAppbar hasNavbar={false} navDrawerOpen={isNavDrawerOpen}>
				<List heading="Company's data">
					<ListItem icon="schedule" heading="since" supportingText="2024" />
					<ListItem icon="groups" heading="Branches" supportingText="6" />
					<ListItem icon="group" heading="Registered students" supportingText="3201" />
					<ListItem icon="event_busy" heading="Average Absent students" supportingText="80" />
					<ListItem icon="assignment_late" heading="Average Late students" supportingText="172" />
					<ListItem icon="folder_supervised" heading="Average Permission" supportingText="6" />
					<ListItem icon="mood" heading="status" supportingText="Good" />
				</List>
				<List heading="Students Analytics">
					<AttendanceTrendsChart data={attedanceTradeData} />
					<DailyAttendanceByClassChart data={dailyAttedanceData} />
					<AttendanceStatusChart data={attedanceStatusData} />
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