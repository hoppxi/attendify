
import React from "react";
import BottomAppbar from "@/components/appbars/bottom-appbar/Bottom-appbar";
import Button from "@/components/buttons/Buttons";

const CoreBottomAppbar: React.FC<{fabIcon?: string; fabClick?: () => {}}> = ({fabClick, fabIcon}) => {
    return(
        <BottomAppbar 
            leftButtons={
                <>
                    <Button variant="icon" icon="search" href="/search" />
                    <Button variant="icon" icon="settings" href="/settings" />
                    <Button variant="icon" icon="notifications" href="/notifications" />
                </>
            }
            fabIcon={fabIcon}
            fabClick={fabClick}
        />
    )
}

export default CoreBottomAppbar;