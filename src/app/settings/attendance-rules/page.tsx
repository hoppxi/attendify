'use client'
import * as React from "react";
import styles from "../page.module.css";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import useScreenSize from "@/hooks/useScreenSize";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import List, { ListItem, ListItemToggle } from "@/components/lists/Lists";
import { useNavDrawer } from "@/context/NavDrawerContext";
import Container from "@/components/containers/Containers";
import Link from "@/components/links/Links";

export default function AttendanceRulesSettings() {

	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const isLargeScreen: boolean = useScreenSize(1024);
    const [ isPermissionChecked, setPermission ] = React.useState(true);
    const [ isLateChecked, setLate ] = React.useState(true);
    const [ isCallParentChecked, setCallParent ] = React.useState(true);

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Attendance Rules" /> : <CoreSearchbarAppbar hideSettingsBtn title="Attendance Rules" />}
			{isLargeScreen && <CoreNavDrawer isOpen={isNavDrawerOpen} active={1} /> }
			<Container hasSearchbarAppbar hasNavbar={false} navDrawerOpen={isNavDrawerOpen}>
				<List>
					<ListItemToggle checked icon="notifications" id="present" heading="Present" disabled />
					<ListItemToggle checked icon="notifications" id="absent" heading="Absent" disabled />
					<ListItemToggle checked={isPermissionChecked} onChange={(checked) => setPermission(checked)} icon="notifications" id="permission" heading="Permission" />
					<ListItemToggle checked={isLateChecked} onChange={(checked) => setLate(checked)} icon="notifications" id="late" heading="Late" />
				</List>
				<List>
					<ListItemToggle checked={isCallParentChecked} onChange={(checked) => setCallParent(checked)} icon="notifications" id="call-parent" heading="Call parents" supportingText="notify parents/guardians when a student's is absent." />
				</List>
                <List heading="Looking for something?" sectionClassName={styles.ql_list} >
					<Link padded href="/settings/notifications">Notifications Settings</Link>
					<Link padded href="/settings/account">Privacy Policy</Link>
					<Link padded href="/settings/account">Help & Support</Link>
					<Link padded href="/settings/account">User Guides</Link>
				</List>
			</Container>
		</>
	);
}