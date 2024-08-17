'use client'
import * as React from "react";
import styles from "./page.module.css";
import useScreenSize from "@/hooks/useScreenSize";
import { useNavDrawer } from "@/context/NavDrawerContext";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import CoreNavbar from "@/widgets/UI/Navbar";
import Container from "@/components/containers/Containers";
import Button from "@/components/buttons/Buttons";
import List, {ListItem} from "@/components/lists/Lists";
import {data} from "../students/list/data";
import ReactPaginate from "react-paginate";
import { useRouter, useSearchParams } from "next/navigation";

export default function Reports() {

	const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
	const [pageNumber, setPageNumber] = React.useState(0);
    const studentsPerPage = 10;
    const pagesVisited = pageNumber * studentsPerPage;

    // Slice data to show only items for the current page
    const displayedData = data.slice(pagesVisited, pagesVisited + studentsPerPage);
    const pageCount = Math.ceil(data.length / studentsPerPage);

	const isLargeScreen: boolean = useScreenSize(1024);

	const router = useRouter();
	const searchParams = useSearchParams();
	const show = searchParams.get('show');
	const grade = searchParams.get('grade');
	const stream = searchParams.get('stream');
	const section = searchParams.get('section');
	if (!show && !grade && !section) router.push("/reports/portal")

	return (
	  	<>
			{isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Reports" /> : <CoreSearchbarAppbar title="Today's Record - Reports" />}
			{isLargeScreen ? <CoreNavDrawer isOpen={isNavDrawerOpen} active={4} /> : <CoreNavbar active={4} />}
			<Container hasSearchbarAppbar navDrawerOpen={isNavDrawerOpen} title="Today's Records" icon="playlist_add_check_circle">
				<div className={styles.list}>
                    <List heading={`${show} Students of ${grade} - ${section}`}>
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
					<ReactPaginate
						previousLabel={<span className="material-symbols-outlined" children="chevron_left" />}
						nextLabel={<span className="material-symbols-outlined" children="chevron_right" />}
						pageCount={pageCount}
						onPageChange={({selected}) => {
							setPageNumber(selected);
						}}
						containerClassName={styles.pagination}
						activeClassName={styles.active}
						previousClassName={styles.prev_next_btn}
						nextClassName={styles.prev_next_btn}
					/>
				</div>
				<div className={styles.action_button}>
					<Button variant="extended" icon="more_time" href="/reports/select-date">Other Days</Button>
				</div>
			</Container>
		</>
	);
}