
import  React from "react";
import SearchbarAppbar from "@/components/appbars/top-appbar/searchbar/Searchbar";
import Button from "@/components/buttons/Buttons";
import Logo from "@/components/logo/Logo";

const CoreSearchbarAppbar: React.FC<{title?: React.ReactNode; hideBackBtn?: boolean}> = ({title, hideBackBtn}) => {
    return(
        <SearchbarAppbar
            noBackBtn={hideBackBtn}
            buttons={
                <>
                    <Button variant="icon" icon="settings" tooltip="Settings" href="/settings" />
                    <Button variant="icon" icon="notifications" tooltip="Notifications" href="/notifications" />
                </>
            }
            title={title ? title : <Logo />}
        />
    )
}

export default CoreSearchbarAppbar;