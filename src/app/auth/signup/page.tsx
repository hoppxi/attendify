'use client'
import React from "react";
import style from "./page.module.css";
import Container from "@/components/containers/Containers";
import Form from "@/components/forms/Forms";
import TextField from "@/components/inputs/fields/Fields";
import Button from "@/components/buttons/Buttons";
import Link from "@/components/links/Links";
import Logo from "@/components/logo/Logo";
import { useNavDrawer } from "@/context/NavDrawerContext";

export default function Login() {
    const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
    return(
        <div className={style.app}>
            <Container hideContextBar hasNavDrawer={false} hasNavbar={false} hasTopAppbar={false} className={`${style.login_card} ${style.login} ${style.container}`}>
                
                <Logo type="medium" className={style.logo} />
                <div className={style.form_container}>
                    <div className={`${style.more_details_form} ${style.login}`}>
                        <div className={style.form_more_heading}>Create Attendify Account</div>
                        <div className={style.form_more_details}>Enter your Company name</div>
                    </div>
                    <Form 
                        onSubmit={toggleNavDrawer}
                        // heading="Login"
                        inputs={
                            <>
                                <TextField 
                                    label="Company Name"
                                    name="company_name"
                                    required
                                    helperText="Enter Company name; not school."
                                />
                                <TextField 
                                    label="Company Phone Number"
                                    name="company_phone_number"
                                    type="number"
                                    required
                                    helperText="Enter Main work company phone number"
                                />
                            </>
                        }
                        formLinks={
                            <>
                                <Link href="/login" padded>Terms and Conditions</Link>
                                <Link href="/login" padded>Privacy Policy</Link>
                                <Link href="/login" padded>Already have Account? Login here.</Link>
                            </>
                        }
                        formAction={
                            <>
                                <Button variant="text" type="button" href="/">Cancle</Button>
                                <Button variant="filled" type="submit">Continue</Button>
                            </>
                        }
                    />
                </div>
            </Container>
        </div>
    )
}
