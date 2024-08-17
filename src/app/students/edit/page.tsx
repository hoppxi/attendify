'use client'
import * as React from "react";
import styles from "./page.module.css";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import useScreenSize from "@/hooks/useScreenSize";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import CoreNavbar from "@/widgets/UI/Navbar";
import { useNavDrawer } from "@/context/NavDrawerContext";
import Container from "@/components/containers/Containers";
import Form from "@/components/forms/Forms";
import TextField from "@/components/inputs/fields/Fields";
import ToggleInput from "@/components/inputs/toggle-inputs/Toggle-inputs";
import Link from "@/components/links/Links";
import Button from "@/components/buttons/Buttons";
import Dialog from "@/components/dialogs/Dialogs";

export default function Edit() {
	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
    const [ isDialogOpen, setDialogOpen ] = React.useState(false);

	const handleDialogOpen = () => {
		setDialogOpen(true)
	}

	const isLargeScreen: boolean = useScreenSize(1024);

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Edit Student" /> : <CoreSearchbarAppbar title="Edit Student" />}
			{isLargeScreen ? <CoreNavDrawer isOpen={isNavDrawerOpen} active={2} /> : <CoreNavbar active={2} />}
            <Container 
                hasSearchbarAppbar 
                navDrawerOpen={isNavDrawerOpen} 
                icon="edit" 
                animateContextBar={false} 
                rightActions={
                    <Button variant="filled" onClick={handleDialogOpen} icon="delete">Delete</Button>
                }
            >
                <Form 
                    // heading="Edit student profile"
                    className={styles.form}
                    inputs={
                        <>
                            <div className={styles.field}>
                                <span className={`material-symbols-outlined ${styles.field_icon}`}>person</span>
                                <div className={styles.field_cont}>
                                    <TextField label="First Name" name="first_name" required />
                                    <TextField label="Last Name" name="last_name" required />
                                </div>
                            </div>
                            <div className={styles.field}>
                                <span className={`material-symbols-outlined ${styles.field_icon}`}>mail</span>
                                <div className={styles.field_cont}>
                                    <TextField label="Email" name="email" type="name" required />
                                    <TextField label="Username" name="username" required />
                                </div>
                            </div>
                            <div className={styles.field}>
                                <span className={`material-symbols-outlined ${styles.field_icon}`}>family_restroom</span>
                                <div className={styles.field_cont}>
                                    <TextField label="Father Name" name="father_name" required />
                                    <TextField label="Mother Name" name="mother_name" required />
                                </div>
                            </div>
                            <div className={styles.field}>
                                <span className={`material-symbols-outlined ${styles.field_icon}`}>call</span>
                                <div className={styles.field_cont}>
                                    <TextField label="Phone Number" name="phone_number" required />
                                    <TextField label="Father's Phone Number" name="f_phone_number" required />
                                    <TextField label="Mother's Phone Number" name="m_phone_number" required />
                                </div>
                            </div>
                            <div className={styles.field}>
                                <span className={`material-symbols-outlined ${styles.field_icon}`}>other_admission</span>
                                <div className={styles.field_cont}>
                                    <TextField label="Birthday" name="birthday" type="date" required />
                                    <TextField label="Gender" name="gender" required />
                                </div>
                            </div>
                            <div className={styles.field}>
                                <span className={`material-symbols-outlined ${styles.field_icon}`}>grade</span>
                                <div className={styles.field_cont}>
                                    <TextField label="Grade" name="grade" type="number" required />
                                    <TextField label="stream" name="stream" required />
                                    <TextField label="section" name="section" required />
                                </div>
                            </div>
                        </>
                    }
                    formLinks={
                        <Link href="/help" padded>Need Help?</Link>
                    }
                    formAction={
                        <>
                            {!isLargeScreen ?
                                <Button variant="outlined" onClick={handleDialogOpen}>Delete</Button> :
                                <Button variant="outlined" type="button" href="/students/profile?uid=#1012">Cancle</Button>
                            }
                            <Button variant="filled" type="submit">Save</Button>
                        </>
                    }
                />
                <Dialog
					isOpen={isDialogOpen}
					onClose={() => setDialogOpen(false)} 
					type="basic"
					title="Delete Student"
					actions={
						<>
							<Button variant="outlined" onClick={() => setDialogOpen(false)}>Cancle</Button>
							<Button variant="filled" href="/students/delete?uid=#1002">Continue</Button>
						</>
					}
				>
					Are you sure you want to permanently delete this student from the database? This action cannot be undone.
				</Dialog>
            </Container>
		</>
	);
}