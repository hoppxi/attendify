
import React from "react";
import Navbar, {NavbarButton} from "@/components/navigation/navbar/Navbar";

const CoreNavbar: React.FC<{active?: 1 | 2 | 3| 4 | 5}> = ({active}) => {
    return (
        <Navbar>
            <NavbarButton variant="text" fullWidth btnIcon="home" label="Home" active={active === 1} href="/" />
            <NavbarButton variant="text" fullWidth btnIcon="groups" label="Students" active={active === 2} href="/students" />
            <NavbarButton variant="text" fullWidth btnIcon="assignment" label="Attendance" active={active === 3} href="/attendance" />
            <NavbarButton variant="text" fullWidth btnIcon="assessment" label="Reports" active={active === 4} href="/reports" />
            <NavbarButton variant="text" fullWidth btnIcon="account_circle" label="Account" active={active === 5} href="/account" />
        </Navbar>
    )
}

export default CoreNavbar;