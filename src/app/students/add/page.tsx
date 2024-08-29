'use client'
import * as React from "react";
import styles from "../edit/page.module.css";
import Image from "next/image";
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

export default function Add() {
	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();

	const isLargeScreen: boolean = useScreenSize(1024);

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Add Student" /> : <CoreSearchbarAppbar title="Add Student" />}
			{isLargeScreen ? <CoreNavDrawer isOpen={isNavDrawerOpen} active={2} /> : <CoreNavbar active={2} />}
            <Container hasSearchbarAppbar navDrawerOpen={isNavDrawerOpen} icon="add" animateContextBar={false}>
                <Form 
                    // heading="Edit student profile"
                    className={styles.form}
                    inputs={
                        <>
                            <div className={styles.profile_info}>
                                <div className={styles.profile_pic_container}>
                                    <Image src={"/images/profile-pic/default-avatar-icon.png"} alt="" width="100" height="100" className={styles.profile_pic} />
                                    <div className={styles.ab_button_pp}>
                                        <Button variant="icon" icon="edit" type="button"></Button>
                                    </div>
                                </div>
                            </div>
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
                            <Button variant="outlined" type="button" href="/students">Cancle</Button>
                            <Button variant="filled" type="submit">Add</Button>
                        </>
                    }
                />
            </Container>
		</>
	);
}