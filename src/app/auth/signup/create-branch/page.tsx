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
            <Container hasNavDrawer={false} hasNavbar={false} hasTopAppbar={false} className={`${style.login_card} ${style.login} ${style.container}`}>
                
                <Logo type="medium" className={style.logo} />
                <div className={style.form_container}>
                    <div className={`${style.more_details_form} ${style.login}`}>
                        <div className={style.form_more_heading}>Create Branch for Company</div>
                        <div className={style.form_more_details}>Enter your Branch name</div>
                    </div>
                    <Form 
                        onSubmit={toggleNavDrawer}
                        // heading="Login"
                        inputs={
                            <>
                                <TextField 
                                    label="Branch Name (School Identifier)"
                                    name="school_name"
                                    required
                                    helperText="Enter The branch name of the school"
                                />
                                <TextField 
                                    label="Branch Address"
                                    name="branch_address"
                                    required
                                    helperText="`Country, city, street`, eg. (Ethiopia, Addis Ababa, 2034YT)"
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
                                <Button variant="filled" type="submit">Add</Button>
                            </>
                        }
                    />
                </div>
            </Container>
        </div>
    )
}
