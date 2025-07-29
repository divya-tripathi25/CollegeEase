import React from 'react';
import BasicTable from '../Common/ReactTable/BasicTable';

export default function StudentListTable() {

    const studentList = [
        { name: "Dinesh Pathak", admissionNo: '28BCA2023', course: 'BCA', semester: '1' },
        { name: "Amit Sharma", admissionNo: '28BCA2024', course: 'BCA', semester: '1' },
        { name: "Priya Gupta", admissionNo: '28BCA2025', course: 'BCA', semester: '2' },
        { name: "Rahul Yadav", admissionNo: '28BCA2026', course: 'BCA', semester: '2' },
        { name: "Neha Singh", admissionNo: '28BCA2027', course: 'BCA', semester: '1' },
        { name: "Arjun Verma", admissionNo: '28BCA2028', course: 'BCA', semester: '3' },
        { name: "Komal Joshi", admissionNo: '28BCA2029', course: 'BCA', semester: '3' },
        { name: "Rohit Kumar", admissionNo: '28BCA2030', course: 'BCA', semester: '2' },
        { name: "Sonia Malik", admissionNo: '28BCA2031', course: 'BCA', semester: '4' },
        { name: "Vikash Tiwari", admissionNo: '28BCA2032', course: 'BCA', semester: '4' },
    ];

    const data = studentList;
    const columns = [
        {
            header: "S.No",
            accessorKey: "",
            cell: (info) => info.row.index + 1,
        },
        {
            header: "Student Name",
            accessorKey: "name",
        },
        {
            header: "Admission No",
            accessorKey: "admissionNo",
        },
        {
            header: "Course",
            accessorKey: "course",
        },
        {
            header: "Semester",
            accessorKey: "semester",
        },
    ];

    return (
        <>
            <BasicTable
                columns={columns}
                data={data}
                customPageSize={5}
                searchBarSize={4}
            />
        </>
    )
}
