'use client';

import * as React from "react";
import { Suspense } from "react";
import styles from "./page.module.css";
import useScreenSize from "@/hooks/useScreenSize";
import { useNavDrawer } from "@/context/NavDrawerContext";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import CoreNavbar from "@/widgets/UI/Navbar";
import SearchbarAppbar from "@/components/appbars/top-appbar/searchbar/Searchbar";
import Container from "@/components/containers/Containers";
import Button from "@/components/buttons/Buttons";
import List, {ListItem} from "@/components/lists/Lists";
import {data} from "../students/list/data";
import ReactPaginate from "react-paginate";
import { useRouter, useSearchParams } from "next/navigation";

const ReportsContent: React.FC = () => {
    const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
    const [pageNumber, setPageNumber] = React.useState(0);
    const studentsPerPage = 10;
    const pagesVisited = pageNumber * studentsPerPage;

    const displayedData = data.slice(pagesVisited, pagesVisited + studentsPerPage);
    const pageCount = Math.ceil(data.length / studentsPerPage);

    const isLargeScreen: boolean = useScreenSize(1024);

    const router = useRouter();
    const searchParams = useSearchParams();
    const show = searchParams.get('show');
    const grade = searchParams.get('grade');
    const stream = searchParams.get('stream');
    const section = searchParams.get('section');
    const date = searchParams.get('date');
    
    if (!show && !grade && !section) router.push("/reports/portal");

    return (
        <>
            {isLargeScreen 
                ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Reports" />
                : <SearchbarAppbar
                    buttons={
                        <>
                            {(!date || date === "today") 
                                && <Button variant="icon" href="/attendance/edit/portal" tooltip="Edit" icon="playlist_add_check_circle"/>
                            }
                            <Button variant="icon" icon="settings" tooltip="Settings" href="/settings" />
                            <Button variant="icon" icon="notifications" tooltip="Notifications" href="/notifications" alignTooltip="left"></Button>
                        </>
                    }
                    title={"Notifications"}
                />
            }
            {isLargeScreen ? <CoreNavDrawer isOpen={isNavDrawerOpen} active={4} /> : <CoreNavbar active={4} />}
            <Container 
                hasSearchbarAppbar 
                navDrawerOpen={isNavDrawerOpen} 
                title="Today's Records" 
                rightActions={ (!date || date === "today") 
                    ? <Button variant="icon" href="/attendance/edit/portal" tooltip="Edit" icon="playlist_add_check_circle"/>
                    : ""
                }
            >
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
                </div>
                <div className={styles.action_button}>
                    <Button variant="extended" icon="more_time" href="/reports/select-date">Other Days</Button>
                </div>
            </Container>
        </>
    );
}

export default function Reports() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ReportsContent />
        </Suspense>
    );
}