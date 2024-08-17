
import React from "react";
import AnimatedAppbar from "@/components/appbars/top-appbar/animated/Animated";
import Button from "@/components/buttons/Buttons";
import Logo from "@/components/logo/Logo";

interface CoreAnimatedAppbarProps {
    noBackBtn?: boolean,
    title?: React.ReactNode,
    icon?: React.ReactNode
}

const CoreAnimatedAppbar: React.FC<CoreAnimatedAppbarProps> = ({ noBackBtn, icon, title }) => {

    return(
        <AnimatedAppbar 
            noBackBtn={noBackBtn}
            title={title ? title : <Logo />}
            icon={icon ? icon : "home"}
            rightButtons={
                <>
                    <Button variant="icon" icon="search" tooltip="Search" href="/search" />
                    <Button variant="icon" icon="settings" tooltip="Settings" href="/settings" />
                    <Button variant="icon" icon="notifications" tooltip="Notifications" href="/notifications" />
                </>
            }
        />
    )
}

export default CoreAnimatedAppbar;