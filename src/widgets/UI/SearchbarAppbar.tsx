
import  React from "react";
import SearchbarAppbar from "@/components/appbars/top-appbar/searchbar/Searchbar";
import Button from "@/components/buttons/Buttons";
import Logo from "@/components/logo/Logo";

interface CoreSearchbarAppbarProps {
    title?: React.ReactNode; 
    hideBackBtn?: boolean; 
    hideSettingsBtn?: boolean;
    hideNotificationsBtn?: boolean;
}

const CoreSearchbarAppbar: React.FC<CoreSearchbarAppbarProps> = ({title, hideBackBtn, hideSettingsBtn, hideNotificationsBtn}) => {
    return(
        <SearchbarAppbar
            noBackBtn={hideBackBtn}
            buttons={
                <>
                    {!hideSettingsBtn && <Button variant="icon" icon="settings" tooltip="Settings" href="/settings" />}
                    {!hideNotificationsBtn && <Button variant="icon" icon="notifications" tooltip="Notifications" href="/notifications" alignTooltip="right" />}
                </>
            }
            title={title ? title : <Logo />}
        />
    )
}

export default CoreSearchbarAppbar;