
import React from "react";
import NavDrawer, { NavDrawerButton } from "@/components/navigation/nav-drawer/Nav-drawer";
import style from "./ui.module.css";

interface CoreNavDrawerProps {
    active?: 1 | 2 | 3 | 4 | 5; 
    isOpen?: boolean; onClose?: 
    () => void
}

const CoreNavDrawer: React.FC<CoreNavDrawerProps> = ({active, isOpen, onClose}) => {
    return(
        <NavDrawer 
            sections={[
                {
                    actions: 
                        <>
                            <NavDrawerButton variant="text" btnIcon="home" label="Home" active={active === 1} href="/" />
                            <NavDrawerButton variant="text" btnIcon="groups" label="Students" active={active === 2} href="/students" />
                            <NavDrawerButton variant="text" btnIcon="assignment" label="Attendance" active={active === 3} href="/attendance" />
                            <NavDrawerButton variant="text" btnIcon="assessment" label="Reports" active={active === 4} href="/reports" />
                            <NavDrawerButton variant="text" btnIcon="account_circle" label="Account" active={active === 5} href="/account" />
                        </> 
                }
            ]}
            top="4rem"
            noDivider
            isOpen={isOpen}
            onClose={onClose}
        />
    )
}

export default CoreNavDrawer;