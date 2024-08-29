
'use client'
import * as React from "react";
import styles from "../page.module.css";
import Image from "next/image";
import { useNavDrawer } from "@/context/NavDrawerContext";
import useScreenSize from "@/hooks/useScreenSize";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import CoreNavbar from "@/widgets/UI/Navbar";
import Container from "@/components/containers/Containers";
import Button from "@/components/buttons/Buttons";
import Link from "@/components/links/Links";

export default function Attendance() {
	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const isLargeScreen: boolean = useScreenSize(1024);

	const handlePrint = React.useCallback(() => {
		if (typeof window !== 'undefined') {
		  window.print();
		}
	  }, []);

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Print QR Code" /> : <CoreSearchbarAppbar title="Print QR Code" />}
			{isLargeScreen ? <CoreNavDrawer isOpen={isNavDrawerOpen} active={3} /> : <CoreNavbar active={3} />}
			<Container hasSearchbarAppbar navDrawerOpen={isNavDrawerOpen} className={styles.print_container}>
				<PrintableSection />
				<div className={styles.print_action}>
					<div>
						To remove QR Code from this print <Link href="/attendance/print/quick">click here</Link> and select the student you want to remove.
					</div>
					<Button variant="filled" onClick={handlePrint}>Print</Button>
				</div>
            </Container>
        </>
    )
}

// Test
const images = Array(12).fill('/images/test-qr-code.jpg');

const PrintableSection = () => (
  <div className={`${styles.printable_section} printable_section`}>
    {images.map((src, index) => (
      <div key={index} className={styles.image_box}>
        <Image 
          width={30} 
          height={30} 
          className={styles.print_qr_code} 
          sizes="(max-width: 768px) 100vw, 1024px" 
          quality={100}
          src={src} 
          alt="QR Code Image" 
        />
      </div>
    ))}
  </div>
);