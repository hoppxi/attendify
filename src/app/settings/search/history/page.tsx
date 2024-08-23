'use client'
import * as React from "react";
import styles from "../../page.module.css";
import Image from "next/image";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import useScreenSize from "@/hooks/useScreenSize";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import List, { ListItem } from "@/components/lists/Lists";
import { useNavDrawer } from "@/context/NavDrawerContext";
import Container from "@/components/containers/Containers";
import Link from "@/components/links/Links";

export default function SearchFiltersSettings() {

	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const isLargeScreen: boolean = useScreenSize(1024);

    const SearchHistory: string[] = [
        "Samuel Addisu",
        "Samuel Addisu",
        "Samuel Addisu",
        "Samuel Addisu",
        "Samuel Addisu",
    ];

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Search Filters Settings" /> : <CoreSearchbarAppbar hideSettingsBtn title="Search Filters Settings" />}
			{isLargeScreen && <CoreNavDrawer isOpen={isNavDrawerOpen} active={1} /> }
			<Container hasSearchbarAppbar hasNavbar={false} navDrawerOpen={isNavDrawerOpen}>
                {
                    SearchHistory.length > 0 ? 
                    <List>
                        {SearchHistory.map((search, i) => (
                            <ListItem listNum={i+1} heading={search} key={i} href={`/search?q=${search}`}></ListItem>
                        ))}
                    </List> :
                    <div className={styles.error}>
                        <Image src={"/images/icons/error.png"} alt="All Done" width={100} height={100} ></Image>
                        <div className={styles.error_description}>
                            <div>No Search history</div>
                            <div>You might have disabled search history saving or cleared.</div>
                        </div>
                    </div>
                }
                <List heading="Looking for something?" sectionClassName={styles.ql_list} >
					<Link padded href="/settings/account">Clear search histroy</Link>
					<Link padded href="/settings/account">Privacy Policy</Link>
					<Link padded href="/settings/account">Help & Support</Link>
					<Link padded href="/settings/account">User Guides</Link>
				</List>
			</Container>
		</>
	);
}