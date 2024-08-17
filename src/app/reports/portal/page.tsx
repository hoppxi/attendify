
'use client'
import React from "react"
import { Accordion , AccordionItem} from "@/components/accordions/Accordions";
import styles from "./page.module.css";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import useScreenSize from "@/hooks/useScreenSize";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import CoreNavbar from "@/widgets/UI/Navbar";
import { useNavDrawer } from "@/context/NavDrawerContext";
import Container from "@/components/containers/Containers";
import List, { ListItem } from "@/components/lists/Lists";

const statuses = ["present", "absent", "permission", "late"];
const grades = [
    { grade: "Grade 9", sections: ["section A", "section B", "section C", "section D"] },
    { grade: "Grade 10", sections: ["section A", "section B", "section C", "section D"] },
    {
        grade: "Grade 11",
        sections: [
            { label: "Natural Science", sections: ["section A", "section B", "section C", "section D"] },
            { label: "Social Science", sections: ["section A", "section B", "section C", "section D"] },
        ],
        isNested: true,
    }
];

export default function ReportsPortal() {
	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();

	const isLargeScreen: boolean = useScreenSize(1024);

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Reports Portal" /> : <CoreSearchbarAppbar title="Reports Portal" />}
			{isLargeScreen ? <CoreNavDrawer isOpen={isNavDrawerOpen} active={4} /> : <CoreNavbar active={4} />}
            <Container hasSearchbarAppbar navDrawerOpen={isNavDrawerOpen}>
                <div className={styles.accordion_container}>
                    {statuses.map((status) => (
                        <Accordion key={status} variant="filled" title={status.charAt(0).toUpperCase() + status.slice(1)}>
                            {grades.map((grade, gradeIndex) => (
                                <AccordionItem key={grade.grade} label={grade.grade}>
                                    {grade.isNested ? (
                                        <Accordion variant="filled">
                                            {grade.sections.map((nestedGrade: any) => (
                                                <AccordionItem key={nestedGrade.label} label={nestedGrade.label}>
                                                    <List>
                                                        {nestedGrade.sections.map((section: string) => (
                                                            <ListItem key={section} href={`/reports?show=${status}&grade=${grade.grade}&stream=${nestedGrade.label.toLowerCase()}&section=${section}`} heading={section} />
                                                        ))}
                                                    </List>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    ) : (
                                        <List>
                                            {(grade.sections as string[]).map((section, index) => (
                                                <ListItem key={section} href={`/reports?show=${status}&grade=${grade.grade}&section=${section}`} heading={section} />
                                            ))}
                                        </List>
                                    )}
                                </AccordionItem>
                            ))}
                        </Accordion>
                    ))}
                </div>
            </Container>
		</>
	);
}