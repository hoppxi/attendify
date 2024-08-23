'use client'
import * as React from "react";
import styles from "../page.module.css";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import useScreenSize from "@/hooks/useScreenSize";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import List, { ListItem } from "@/components/lists/Lists";
import { useNavDrawer } from "@/context/NavDrawerContext";
import Container from "@/components/containers/Containers";
import Dialog from "@/components/dialogs/Dialogs";
import Form from "@/components/forms/Forms";
import ToggleInput from "@/components/inputs/toggle-inputs/Toggle-inputs";
import Button from "@/components/buttons/Buttons";
import Link from "@/components/links/Links";

export default function InterfaceSettings() {
    const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
    const isLargeScreen: boolean = useScreenSize(1024);

    const [isThemeDialogOpen, setThemeDialogOpen] = React.useState(false);
    const [theme, setTheme] = React.useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem('theme') || 'system';
        }
        return 'system';
    });

    const [isFontSizeDialogOpen, setFontSizeDialogOpen] = React.useState(false);
    const [fontSize, setFontSize] = React.useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem('font-size') || 'small';
        }
        return 'small';
    });

    React.useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    React.useEffect(() => {
        applyFontSize(fontSize);
    }, [fontSize]);

    const applyTheme = (selectedTheme: string) => {
        if (selectedTheme === 'dark') {
            document.documentElement.classList.add('dark-mode');
            document.documentElement.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        } else if (selectedTheme === 'light') {
            document.documentElement.classList.remove('dark-mode');
            document.documentElement.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.remove('dark-mode');
            document.documentElement.classList.remove('light-mode');
            localStorage.removeItem('theme');
        }
    };

    const applyFontSize = (selectedFontSize: string) => {
        document.documentElement.classList.remove('small-font-size', 'medium-font-size', 'large-font-size');
        if (selectedFontSize === 'medium') {
            document.documentElement.style.fontSize = "14px";
            localStorage.setItem('font-size', 'medium');
        } else if (selectedFontSize === 'large') {
            document.documentElement.style.fontSize = "16px";
            localStorage.setItem('font-size', 'large');
        } else {
            document.documentElement.style.fontSize = "12px";
            localStorage.setItem('font-size', 'small');
        }
    };

    const handleThemeChange = (newTheme: string) => {
        setTheme(newTheme);
        setThemeDialogOpen(false);
    };

    const handleFontSizeChange = (newFontSize: string) => {
        setFontSize(newFontSize);
        setFontSizeDialogOpen(false);
    };

    return (
        <>
            {isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Interface Settings" /> : <CoreSearchbarAppbar hideSettingsBtn title="Interface Settings" />}
            {isLargeScreen && <CoreNavDrawer isOpen={isNavDrawerOpen} active={1} />}
            <Container hasSearchbarAppbar hasNavbar={false} navDrawerOpen={isNavDrawerOpen}>
                <List>
                    <ListItem icon="brightness_4" heading="Theme" supportingText={theme} onClick={() => setThemeDialogOpen(true)} />
                    <ListItem icon="zoom_in" heading="Font Size" supportingText={fontSize} onClick={() => setFontSizeDialogOpen(true)} />
                </List>
				<List heading="Looking for something?" sectionClassName={styles.ql_list} >
					<Link padded href="/settings/account/privacy">Updates and Offers</Link>
					<Link padded href="/settings/account">Account settings</Link>
					<Link padded href="/info/support/help">Help & Support</Link>
				</List>
                <Dialog
                    isOpen={isThemeDialogOpen}
                    onClose={() => setThemeDialogOpen(false)}
                    subtitle="Select Theme"
                    type="basic"
                    actions={<Button variant="filled" onClick={() => setThemeDialogOpen(false)}>Close</Button>}
                >
                    <Form
                        inputs={
                            <>
                                <ToggleInput
                                    type="radio"
                                    name="themeOption"
                                    label="System Default"
                                    checked={theme === 'system'}
                                    onChange={() => handleThemeChange('system')}
                                />
                                <ToggleInput
                                    type="radio"
                                    name="themeOption"
                                    label="Light"
                                    checked={theme === 'light'}
                                    onChange={() => handleThemeChange('light')}
                                />
                                <ToggleInput
                                    type="radio"
                                    name="themeOption"
                                    label="Dark"
                                    checked={theme === 'dark'}
                                    onChange={() => handleThemeChange('dark')}
                                />
                            </>
                        }
                    />
                </Dialog>
                <Dialog
                    isOpen={isFontSizeDialogOpen}
                    onClose={() => setFontSizeDialogOpen(false)}
                    subtitle="Select Font Size"
                    type="basic"
                    actions={<Button variant="filled" onClick={() => setFontSizeDialogOpen(false)}>Close</Button>}
                >
                    <Form
                        inputs={
                            <>
                                <ToggleInput
                                    type="radio"
                                    name="fontSizeOption"
                                    label="Small"
                                    checked={fontSize === 'small'}
                                    onChange={() => handleFontSizeChange('small')}
                                />
                                <ToggleInput
                                    type="radio"
                                    name="fontSizeOption"
                                    label="Medium"
                                    checked={fontSize === 'medium'}
                                    onChange={() => handleFontSizeChange('medium')}
                                />
                                <ToggleInput
                                    type="radio"
                                    name="fontSizeOption"
                                    label="Large"
                                    checked={fontSize === 'large'}
                                    onChange={() => handleFontSizeChange('large')}
                                />
                            </>
                        }
                    />
                </Dialog>
            </Container>
        </>
    );
}
