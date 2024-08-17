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
                        <div className={style.form_more_heading}>Your Account Credentials</div>
                        <div className={style.form_more_details}>Enter Email and Password</div>
                    </div>
                    <Form 
                        onSubmit={toggleNavDrawer}
                        // heading="Login"
                        inputs={
                            <>
                                <TextField 
                                    label="Email (Main Company)"
                                    name="email"
                                    type="email"
                                    required
                                />
                                <TextField 
                                    label="Password"
                                    name="password"
                                    type="password"
                                    required
                                    helperText="Remember those credentials; you'll use them to login"
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
