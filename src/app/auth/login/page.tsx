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
            <Container hasNavDrawer={false} hasNavbar={false} hasTopAppbar={false} className={`${style.login_card} ${style.login} ${style.container}`}>
                
                <Logo type="medium" className={style.logo} />
                <div className={style.form_container}>
                    <div className={`${style.more_details_form} ${style.login}`}>
                        <div className={style.form_more_heading}>Login to Attendify Account</div>
                        <div className={style.form_more_details}>Enter your school name</div>
                    </div>
                    <Form 
                        onSubmit={toggleNavDrawer}
                        // heading="Login"
                        inputs={
                            <>
                                <TextField 
                                    label="Email"
                                    name="email"
                                    required
                                    onChange={toggleNavDrawer}
                                    type="email"
                                />
                                <TextField 
                                    label="Password"
                                    name="password"
                                    type="password"
                                    required
                                    onChange={toggleNavDrawer}
                                />
                            </>
                        }
                        formLinks={
                            <>
                                <Link href="/login" padded>Forgot password?</Link>
                                <Link href="/login" padded>Need help?</Link>
                                <Link href="/login" padded>Don't have Account? Signup here.</Link>
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
