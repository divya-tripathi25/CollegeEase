import React, { useState } from 'react';
import { Container, Button, Modal, Form } from 'react-bootstrap';
import BasicTable from '../../Components/Common/ReactTable/BasicTable';
import { data } from './data';
import toast from 'react-hot-toast';

export default function RequestQueries() {
  const [queryList, setQueryList] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [newQuery, setNewQuery] = useState({
    name: '',
    email: '',
    phone: '',
    query: '',
    category: '',
    comments: '',
    date: '',
    status: 'Pending',
  });

  const handleViewAction = (query) => {
    setSelectedQuery(query); // Set the selected query
    setShowModal(true); // Show the modal
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedQuery(null); // Reset selectedQuery when closing
  };

  const handleAddQuery = () => {
    setShowModal(true);
  };

  const handleSaveNewQuery = () => {
    setQueryList((prevList) => [...prevList, { ...newQuery, id: Date.now() }]);
    setNewQuery({
      name: '',
      email: '',
      phone: '',
      query: '',
      category: '',
      comments: '',
      date: '',
      status: 'Pending',
    });
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewQuery((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleResolved = () => {
    toast.success("Query resolved");
  }

  const handleRejected = () => {
    toast.success("Query rejected");
  }

  const columns = [
    {
      header: 'S.No',
      accessorKey: '',
      cell: (info) => info.row.index + 1,
    },
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Email',
      accessorKey: 'email',
    },
    {
      header: 'Phone',
      accessorKey: 'phone',
    },
    {
      header: 'Query',
      accessorKey: 'query',
    },
    {
      header: 'Category',
      accessorKey: 'category',
    },
    {
      header: 'Date',
      accessorKey: 'date',
    },
    {
      header: 'Status',
      accessorKey: 'status',
    },
    {
      header: 'Actions',
      accessorKey: 'actions',
      cell: ({ row }) => (
        <>
          <Button
            variant="primary"
            size="sm"
            className="me-2"
            onClick={() => handleViewAction(row.original)}
          >
            View
          </Button>
          <Button
            variant="success"
            size="sm"
            className="me-2"
            onClick={handleResolved}
          >
            Mark as resolved
          </Button>
          <Button
            variant="danger"
            size="sm"
            className="me-2"
            onClick={handleRejected}
          >
            Mark as rejected
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Container fluid className="mt-4">
        <h1 className="text-center mb-4">Request & Queries</h1>
        <Button variant="primary" className="mb-3" onClick={handleAddQuery}>
          Add Query
        </Button>
        <BasicTable columns={columns} data={queryList} customPageSize={10} searchBarSize={2} />
      </Container>

      {/* Modal for Query Details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedQuery ? 'Query Details' : 'Add New Query'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!selectedQuery ? (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Query</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="query"
                  value={newQuery.query}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleSaveNewQuery}>
                Save
              </Button>
            </Form>
          ) : (
            <h5>
              Admission process details
            </h5>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}