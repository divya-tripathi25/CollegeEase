import React, { useState } from 'react'
import BasicTable from '../../Components/Common/ReactTable/BasicTable';
import { Button, Container, Modal } from 'react-bootstrap';

export default function Students() {

  const studentList = [
    {
      name: "Dinesh Pathak",
      admissionNo: "28BCA2023",
      course: "FYMCA",
      semester: "1",
      email: "dinesh.pathak@example.com",
      phone: "+91 9876543210",
      address: "123 Street,Pune, Maharashtra",
      dob: "2004-05-15",
    },
    {
      name: "Amit Sharma",
      admissionNo: "28BCA2024",
      course: "FYMCA",
      semester: "1",
      email: "amit.sharma@example.com",
      phone: "+91 9876543211",
      address: "456 Lane, Pune, Maharashtra",
      dob: "2003-08-20",
    },
    {
      name: "Priya Gupta",
      admissionNo: "28BCA2025",
      course: "SYMCA",
      semester: "3",
      email: "priya.gupta@example.com",
      phone: "+91 9876543212",
      address: "789 Colony, Roorkee, Uttarakhand",
      dob: "2004-01-30",
    },
    {
      name: "Rahul Yadav",
      admissionNo: "28BCA2026",
      course: "SYMCA",
      semester: "3",
      email: "rahul.yadav@example.com",
      phone: "+91 9876543213",
      address: "12 Avenue, Lucknow, Uttar Pradesh",
      dob: "2004-11-12",
    },
    {
      name: "Neha Singh",
      admissionNo: "28BCA2027",
      course: "FYMCA",
      semester: "1",
      email: "neha.singh@example.com",
      phone: "+91 9876543214",
      address: "34 Road, Pune, Maharashtra",
      dob: "2003-03-08",
    },
    {
      name: "Arjun Verma",
      admissionNo: "28BCA2028",
      course: "SYMCA",
      semester: "3",
      email: "arjun.verma@example.com",
      phone: "+91 9876543215",
      address: "56 Sector, Jaipur, Rajasthan",
      dob: "2002-07-17",
    },
    {
      name: "Komal Joshi",
      admissionNo: "28BCA2029",
      course: "SYMCA",
      semester: "3",
      email: "komal.joshi@example.com",
      phone: "+91 9876543216",
      address: "78 Block, Haldwani, Uttarakhand",
      dob: "2004-09-22",
    },
    {
      name: "Rohit Kumar",
      admissionNo: "28BCA2030",
      course: "FYMCA",
      semester: "2",
      email: "rohit.kumar@example.com",
      phone: "+91 9876543217",
      address: "90 Square, Patna, Bihar",
      dob: "2003-02-14",
    },
    {
      name: "Sonia Malik",
      admissionNo: "28BCA2031",
      course: "FYMCA",
      semester: "4",
      email: "sonia.malik@example.com",
      phone: "+91 9876543218",
      address: "12 Park, South Extension, New Delhi",
      dob: "2002-12-03",
    },
    {
      name: "Vikash Tiwari",
      admissionNo: "28BCA2032",
      course: "SYMCA",
      semester: "4",
      email: "vikash.tiwari@example.com",
      phone: "+91 9876543219",
      address: "34 Mall Road, Mussoorie, Uttarakhand",
      dob: "2003-10-10",
    },
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
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Phone",
      accessorKey: "phone",
    },
    {
      header: "Address",
      accessorKey: "address",
    },
    {
      header: "Date of Birth",
      accessorKey: "dob",
    },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: ({ row }) => (
        <>
          <button
            className="btn btn-primary btn-sm me-2"
            onClick={() => handleViewAction(row.original)}
          >
            View
          </button>
          <button
            className="btn btn-warning btn-sm"
          >
            Block Student
          </button>
        </>
      ),
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleCloseModal = () => setShowModal(false);

  const handleViewAction = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  return (
    <>
      <Container fluid className="mt-4">
        <h1 className="text-center mb-4">Students</h1>
        <BasicTable
          columns={columns}
          data={data}
          customPageSize={10}
          searchBarSize={2}
        />
      </Container>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Student Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedStudent ? (
            <>
              <p><strong>Name:</strong> {selectedStudent.name}</p>
              <p><strong>Admission No:</strong> {selectedStudent.admissionNo}</p>
              <p><strong>Course:</strong> {selectedStudent.course}</p>
              <p><strong>Semester:</strong> {selectedStudent.semester}</p>
              <p><strong>Email:</strong> {selectedStudent.email}</p>
              <p><strong>Phone:</strong> {selectedStudent.phone}</p>
              <p><strong>Address:</strong> {selectedStudent.address}</p>
              <p><strong>Date of Birth:</strong> {selectedStudent.dob}</p>
            </>
          ) : (
            <p>No student selected.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
