'use client'
import React from "react";
import style from "../page.module.css";
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
                        <div className={style.form_more_heading}>Details of Company Adimn</div>
                        <div className={style.form_more_details}>Enter your Company Admin</div>
                    </div>
                    <Form 
                        onSubmit={toggleNavDrawer}
                        // heading="Login"
                        inputs={
                            <>
                                <TextField 
                                    label="Company Admin Full name (owner)"
                                    name="company_admin"
                                    required
                                    helperText="Enter Company Admin as the owner of the company"
                                />
                                <TextField 
                                    label="Company Admin Phone Number"
                                    name="phone_number"
                                    required
                                    helperText="Phone number of the owner (admin)"
                                />
                            </>
                        }
                        formLinks={
                            <>
                                <Link href="/login" padded>Need Help?</Link>
                            </>
                        }
                        formAction={
                            <>
                                <Button variant="filled" type="submit">Next</Button>
                            </>
                        }
                    />
                </div>
            </Container>
        </div>
    )
}
