
'use client'
import * as React from "react";
import styles from "../../page.module.css";
import Image from "next/image";
import { useNavDrawer } from "@/context/NavDrawerContext";
import useScreenSize from "@/hooks/useScreenSize";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import CoreNavbar from "@/widgets/UI/Navbar";
import SearchbarAppbar from "@/components/appbars/top-appbar/searchbar/Searchbar";
import Container from "@/components/containers/Containers";
import List, { ListItem } from "@/components/lists/Lists";
import Button from "@/components/buttons/Buttons";
import Dialog from "@/components/dialogs/Dialogs";
import Alert from "@/components/alerts/Alerts";

interface DataType {
    id: number;
    fullname: string;
    grade: string;
    status: "active" | "inactive" | "under regulation";
    uid: `#${string}`;
}

export default function Attendance() {
	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const isLargeScreen: boolean = useScreenSize(1024);
    const [ isRemoveDialogOpen, setRemoveDialog ] = React.useState<boolean>(false);
    const [showAlert, setShowAlert] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setShowAlert(false)
        }, 5000);
    }, []);

    const QuickedData: Array<DataType> = [
        { id: 1, fullname: "John Doe", grade: "10 A", status: "active", uid: "#1021" },
        { id: 2, fullname: "Jane Smith", grade: "10 B", status: "inactive", uid: "#1022" },
        { id: 3, fullname: "Emily Johnson", grade: "10 C", status: "under regulation", uid: "#1023" },
        { id: 4, fullname: "Michael Brown", grade: "10 D", status: "active", uid: "#1024" },
        { id: 5, fullname: "Sarah Davis", grade: "10 E", status: "inactive", uid: "#1025" },
        { id: 6, fullname: "David Wilson", grade: "10 F", status: "under regulation", uid: "#1026" },
        { id: 7, fullname: "Laura Martinez", grade: "11 A", status: "active", uid: "#1027" },
        { id: 8, fullname: "James Anderson", grade: "11 B", status: "inactive", uid: "#1028" },
        { id: 9, fullname: "Olivia Thomas", grade: "11 C", status: "under regulation", uid: "#1029" },
    ];

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Print Quick" /> :
                <SearchbarAppbar
                    buttons={
                        <>
                            <Button variant="icon" icon="settings" tooltip="Settings" href="/settings" />
                            {QuickedData.length > 0 && <Button variant="icon" icon="print" tooltip="Print" href="/attendance/print"></Button>}
                        </>
                    }
                    title={"Print Quick"}
                />
            }
			{isLargeScreen ? <CoreNavDrawer isOpen={isNavDrawerOpen} active={3} /> : <CoreNavbar active={3} />}
			<Container hasSearchbarAppbar navDrawerOpen={isNavDrawerOpen} rightActions={
				QuickedData.length > 0 && <Button variant="icon" icon="print" tooltip="Print" href="/attendance/print"></Button>
			}>
                {QuickedData.length > 0 ? (
                    <List heading="Quick Data">
                        {QuickedData.map((student) => (
                            <ListItem 
                                key={student.id} 
                                listNum={student.id} 
                                heading={student.fullname} 
                                supportingText={`${student.status} - ${student.grade}`} 
                                info={student.uid} 
                                onClick={() => setRemoveDialog(true)}
                            />
                        ))}
                    </List>
                    ) : (
                        <div className={styles.no_data}>
                            <Image src={"/images/icons/done.svg"} alt="All Done" width={100} height={100} ></Image>
                            <div className={styles.no_data_description}>
                                <div>You&apos;ve not added QR Code in to the Quick</div>
                                <div>This is where you&apos;ll see Quicked QR Code for print</div>
                            </div>
                        </div>
                    )}
                    <Dialog
                        type="basic"
                        isOpen={isRemoveDialogOpen}
                        onClose={() => setRemoveDialog(false)}
                        title="Remove QR Code"
                        actions={
                            <>
                                <Button variant="outlined" onClick={() => setRemoveDialog(false)}>Cancle</Button>
                                <Button variant="filled">Remove</Button>
                            </>
                        }
                    >
                        <>Are you sure you want to remove this student&apos;s QR Code from the quick?</>
                    </Dialog>
                    { showAlert && 
                        <Alert type="info" onClose={() => setShowAlert(false)} message="Click the student to remove from the quick"></Alert>
                    }
            </Container>
        </>
    )
}