"use client"
import * as React from "react";
import { Suspense } from "react";
import ReactPaginate from "react-paginate";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "../page.module.css";
import useScreenSize from "@/hooks/useScreenSize";
import { useNavDrawer } from "@/context/NavDrawerContext";
import CoreSearchbarAppbar from "@/widgets/UI/SearchbarAppbar";
import CoreNormalAppbar from "@/widgets/UI/NormalAppbar";
import CoreNavDrawer from "@/widgets/UI/NavDrawer";
import CoreNavbar from "@/widgets/UI/Navbar";
import Container from "@/components/containers/Containers";
import List, { ListItem } from "@/components/lists/Lists";
import { data } from "../../students/list/data";
import Dialog from "@/components/dialogs/Dialogs";
import Button from "@/components/buttons/Buttons";
import Form from "@/components/forms/Forms";
import ToggleInput from "@/components/inputs/toggle-inputs/Toggle-inputs";

const ManualAttendanceContent: React.FC = () => {
    const { isNavDrawerOpen, toggleNavDrawer } = useNavDrawer();
    const [pageNumber, setPageNumber] = React.useState(0);
    const studentsPerPage = 10;
    const pagesVisited = pageNumber * studentsPerPage;

    const displayedData = data.slice(pagesVisited, pagesVisited + studentsPerPage);
    const pageCount = Math.ceil(data.length / studentsPerPage);

    const isLargeScreen: boolean = useScreenSize(1024);

    const [isStatusDialogOpened, setStatusDialog] = React.useState(false);
    const [selectedStudent, setSelectedStudent] = React.useState<number | null>(null);
    const [studentStatus, setStudentStatus] = React.useState<Record<number, string>>({});

    const handleRadioChange = (value: string) => {
        if (selectedStudent !== null) {
            setStudentStatus((prev) => ({
                ...prev,
                [selectedStudent]: value
            }));
        }
    };

    const handleClickStudent = (studentId: number) => {
        setSelectedStudent(studentId);
        setStudentStatus((prev) => ({
            ...prev,
            [studentId]: prev[studentId] || "present" 
        }));
        setStatusDialog(true);
    };

    const router = useRouter();
    const searchParams = useSearchParams();
    const grade = searchParams.get('grade');
    const stream = searchParams.get('stream');
    const section = searchParams.get('section');

    if (!grade && !section) router.push("/attendance/manual/portal");

    return (
        <>
            {isLargeScreen ? <CoreNormalAppbar navdrawerOpener={toggleNavDrawer} title="Manual Attendance" /> : <CoreSearchbarAppbar title="Manual Attendance" />}
            {isLargeScreen ? <CoreNavDrawer isOpen={isNavDrawerOpen} active={3} /> : <CoreNavbar active={3} />}
            <Container hasSearchbarAppbar navDrawerOpen={isNavDrawerOpen}>
                <div className={styles.list}>
                    <List heading={`Students of Grade ${grade} - Section ${section} ${stream ? stream : ""}`}>
                        {displayedData.map((student) => (
                            <ListItem 
                                key={student.id} 
                                listNum={student.id} 
                                heading={student.fullname} 
                                supportingText={`${studentStatus[student.id] || "present"} - ${student.grade}`} 
                                info={student.uid}
                                onClick={() => handleClickStudent(student.id)}
                            />
                        ))}
                    </List>
                    <ReactPaginate
                        previousLabel={<span className="material-symbols-outlined">chevron_left</span>}
                        nextLabel={<span className="material-symbols-outlined">chevron_right</span>}
                        pageCount={pageCount}
                        onPageChange={({ selected }) => {
                        setPageNumber(selected);
                        }}
                        containerClassName={styles.pagination}
                        activeClassName={styles.active}
                        previousClassName={styles.prev_next_btn}
                        nextClassName={styles.prev_next_btn}
                    />
                </div>
                <Dialog
                    isOpen={isStatusDialogOpened}
                    onClose={() => setStatusDialog(false)}
                    subtitle="Select QR code number in a paper"
                    type="basic"
                    actions={<Button variant="filled" onClick={() => setStatusDialog(false)}>Close</Button>}
                >
                    <Form
                        inputs={
                            <>
                                <ToggleInput
                                    type="radio"
                                    name="StatusOption"
                                    label="Absent"
                                    checked={studentStatus[selectedStudent || -1] === "absent"}
                                    onChange={() => handleRadioChange("absent")}
                                    color="primary"
                                />
                                <ToggleInput
                                    type="radio"
                                    name="StatusOption"
                                    label="Present"
                                    checked={studentStatus[selectedStudent || -1] === "present"}
                                    onChange={() => handleRadioChange("present")}
                                    color="primary"
                                />
                                <ToggleInput
                                    type="radio"
                                    name="StatusOption"
                                    label="Late"
                                    checked={studentStatus[selectedStudent || -1] === "late"}
                                    onChange={() => handleRadioChange("late")}
                                    color="primary"
                                />
                                <ToggleInput
                                    type="radio"
                                    name="StatusOption"
                                    label="Permission"
                                    checked={studentStatus[selectedStudent || -1] === "permission"}
                                    onChange={() => handleRadioChange("permission")}
                                    color="primary"
                                />
                            </>
                        }
                    />
                </Dialog>
            </Container>
        </>
    );
}

export default function ManualAttendance() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ManualAttendanceContent />
    </Suspense>
  );
}
