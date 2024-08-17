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
                        <div className={style.form_more_heading}>Add Admins to the Branch</div>
                        <div className={style.form_more_details}>Enter your Branch Admin</div>
                    </div>
                    <Form 
                        onSubmit={toggleNavDrawer}
                        // heading="Login"
                        inputs={
                            <>
                                <TextField 
                                    label="Branch Admin Full name"
                                    name="branch_admin"
                                    required
                                    helperText="Enter Branch Admin as the manager of the branch only"
                                />
                                <TextField 
                                    label="Branch Admin Phone Number"
                                    name="phone_number"
                                    required
                                    helperText="Phone number of the Branch Admin"
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
                                <Button variant="outlined" type="submit">Add another admin</Button>
                                <Button variant="filled" type="submit">submit and finish</Button>
                            </>
                        }
                    />
                </div>
            </Container>
        </div>
    )
}
