'use client'
import * as React from "react";
import styles from "./page.module.css";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import useScreenSize from "@/hooks/useScreenSize";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import CoreNavbar from "@/widgets/UI/Navbar";
import { useNavDrawer } from "@/context/NavDrawerContext";
import Container from "@/components/containers/Containers";
import ReactPaginate from "react-paginate";
import { data } from "./data";
import List, { ListItem } from "@/components/lists/Lists";
import Button from "@/components/buttons/Buttons";
import Tabs, { TabButton } from "@/components/tabs/Tabs";

export default function StudentsList() {
	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
    const [pageNumber, setPageNumber] = React.useState(0);
    const studentsPerPage = 10;
    const pagesVisited = pageNumber * studentsPerPage;

    // Slice data to show only items for the current page
    const displayedData = data.slice(pagesVisited, pagesVisited + studentsPerPage);
    const pageCount = Math.ceil(data.length / studentsPerPage);

	const isLargeScreen: boolean = useScreenSize(1024);

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Students List" /> : <CoreSearchbarAppbar title="Students List" />}
			{isLargeScreen ? <CoreNavDrawer isOpen={isNavDrawerOpen} active={2} /> : <CoreNavbar active={2} />}
            <Container hasSearchbarAppbar navDrawerOpen={isNavDrawerOpen}>
                <>
                    <List heading="Grade 10, section B Students">
                        {displayedData.map((student) => (
                            <ListItem 
                                key={student.id} 
                                listNum={student.id} 
                                heading={student.fullname} 
                                supportingText={`${student.status} - ${student.grade}`} 
                                info={student.uid} 
                                href={`/students/profile?uid=${student.uid}`}
                            />
                        ))}
                    </List>
                </>
                <ReactPaginate
                    previousLabel={<span className="material-symbols-outlined">chevron_left</span>}
                    nextLabel={<span className="material-symbols-outlined">chevron_right</span>}
                    pageCount={pageCount}
                    onPageChange={({selected}) => {
                        setPageNumber(selected);
                    }}
                    containerClassName={styles.pagination}
                    activeClassName={styles.active}
                    previousClassName={styles.prev_next_btn}
                    nextClassName={styles.prev_next_btn}
                />
            </Container>
		</>
	);
}
