'use client'
import React from "react";
import style from "../page.module.css";
import Container from "@/components/containers/Containers";
import Form from "@/components/forms/Forms";
import Button from "@/components/buttons/Buttons";
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
                        <div className={style.form_more_heading}>Create another Branch.</div>
                        <div className={style.form_more_details}>Create another branch for the company other than the you just created.</div>
                        
                    </div>
                    <Form 
                        onSubmit={toggleNavDrawer}
                        details={
                            <>
                                <div>The purpose of adding branches is to enable the inclusion of multiple branch admins in one form submission, allowing you to manage and register several admins at once. </div>
                                <br />
                                <div>Click &apos;Add Another Branch&apos; to add details for a new admin. Click &apos;Finish&apos; if you&apos;re done and want to submit the current entries.</div>
                            </>
                        }
                        formAction={
                            <>
                                <Button fullWidth variant="outlined" type="button" href="/auth/signup/create-branch">Add</Button>
                                <Button fullWidth variant="outlined" type="button" href="/">Finish</Button>
                            </>
                        }
                        alignActions="fill-row"
                    />
                </div>
            </Container>
        </div>
    )
}
