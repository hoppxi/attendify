'use client'
import * as React from "react";
import styles from "../../page.module.css";
import useScreenSize from "@/hooks/useScreenSize";
import { useNavDrawer } from "@/context/NavDrawerContext";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import CoreNavbar from "@/widgets/UI/Navbar";
import Container from "@/components/containers/Containers";
import List from "@/components/lists/Lists";
import Link from "@/components/links/Links";

export default function Policy() {
	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	
	const isLargeScreen: boolean = useScreenSize(1024);

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Privacy Policy" /> : <CoreSearchbarAppbar title="Privacy Policy" />}
			{isLargeScreen && <CoreNavDrawer  isOpen={isNavDrawerOpen} active={1} />}
			<Container hasNavbar={false} hasSearchbarAppbar navDrawerOpen={isNavDrawerOpen}>
				<section className={styles.container}>
					<h1 className={styles.header}>Privacy Policy</h1>
					<p className={styles.paragraph}>
						Welcome to <strong>Attendify</strong>, an innovative school attendance management platform developed by a passionate team of four young developers: Ermiyas Arage, Nathnael Demeke, Dagim W/Rufael, and Alazar. Our mission is to revolutionize the way schools handle attendance through cutting-edge technology and seamless user experience.
					</p>

					<p className={styles.paragraph}>
						Our team consists of teenagers who are driven by a shared passion for creating impactful software solutions. We are constantly exploring new technologies and methodologies to build robust, scalable, and cross-platform applications. With expertise in a diverse range of programming languages and frameworks, we are committed to pushing the boundaries of what is possible.
					</p>

					<h2 className={styles.subHeader}>Our Project: Attendify</h2>
					<p className={styles.paragraph}>
						Attendify is a comprehensive attendance management system designed to streamline the process of tracking and registering students in educational institutions. The front-end of the application is built using <strong>Next.js</strong> and <strong>TypeScript</strong>, ensuring a smooth and efficient user interface. On the back-end, we leverage the power of <strong>MySQL</strong> and <strong>MongoDB</strong> for reliable data storage and management.
					</p>
					
					<p className={styles.paragraph}>
						One of the standout features of Attendify is its integration with QR code technology. This allows for quick and accurate registration and attendance of students, enhancing both security and convenience. The QR code system is implemented using a combination of <strong>Python</strong>, <strong>C++</strong>, <strong>Java</strong>, and <strong>Flutter</strong>, showcasing our team's versatility in handling complex, multi-language projects.
					</p>

					<h2 className={styles.subHeader}>Our Vision</h2>
					<p className={styles.paragraph}>
						Beyond Attendify, we are dedicated to developing robust, cross-platform applications that cater to a wide range of user needs. Our toolkit includes modern frameworks and technologies such as <strong>Next.js</strong>, <strong>Electron</strong>, <strong>Expo</strong>, <strong>Express</strong>, <strong>Flutter</strong>, <strong>Java</strong>, <strong>Python</strong>, and various databases like <strong>MySQL</strong>, <strong>Oracle</strong>, <strong>Prisma</strong>, and <strong>MongoDB</strong>.
					</p>
					
					<p className={styles.paragraph}>
						We believe in the power of technology to create positive change, and we are excited to continue building applications that not only solve problems but also inspire and empower others to do the same. Our journey has just begun, and we are eager to see where our passion and dedication will take us next.
					</p>
				</section>
                <List heading="Looking for something?" sectionClassName={styles.ql_list} >
					<Link padded href="/info/about">About Us</Link>
					<Link padded href="/info/legal/terms">Terms and Comditions</Link>
					<Link padded href="/info/support/help">Help & Support</Link>
					<Link padded href="/info/support/guides">User Guides</Link>
				</List>
            </Container>
        </>
    )
}