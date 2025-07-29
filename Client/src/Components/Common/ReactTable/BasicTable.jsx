import React, { useState } from 'react';
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from '@tanstack/react-table';
import { Card, CardBody, Col, Row, Table } from 'react-bootstrap';

const BasicTable = ({ data, columns, customPageSize, searchBarSize }) => {

    const [sorting, setSorting] = useState([]);
    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: customPageSize, });

    const [filtering, setFiltering] = useState('');

    const table = useReactTable({
        data, columns, getCoreRowModel: getCoreRowModel(), getPaginationRowModel: getPaginationRowModel(), getSortedRowModel: getSortedRowModel(), getFilteredRowModel: getFilteredRowModel(), state: {
            sorting, pagination, globalFilter: filtering
        }, onSortingChange: setSorting, onPaginationChange: setPagination, onGlobalFilterChange: setFiltering
    });


    return (
        <>
            <Row className='mb-3'>
                <Col lg={searchBarSize}>
                    <input className='form-control' type="text" placeholder='Search...' value={filtering} onChange={(e) => setFiltering(e.target.value)} />
                </Col>
            </Row>

            <Table className='table' striped bordered>
                <thead>
                    {
                        table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {
                                    headerGroup.headers.map(header => (
                                        <th className='fw-medium' key={header.id} onClick={header.column.getToggleSortingHandler()}>
                                            {
                                                header.placeholderId ? null : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )
                                            }
                                            {
                                                { asc: '', desc: '' }[header.column.getIsSorted() ?? null]
                                            }
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody>
                    {
                        table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {
                                    row.getVisibleCells().map(cell => (
                                        <td key={cell.id} style={{fontSize: '.9rem'}}>
                                            {
                                                flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="text-muted">
                    Showing <span className="fw-semibold ms-1">{table.getState().pagination.pageSize}</span> of <span className="fw-semibold">{data.length}</span> Results
                </div>

                <div>
                    <ul className="pagination mb-0 justify-content-between">

                        <button className='btn btn-primary me-2' onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage() ? true : false}>1</button>

                        <button className='btn btn-primary me-2' onClick={table.previousPage} disabled={!table.getCanPreviousPage() ? true : false}>Previous</button>

                        <button className='btn btn-primary me-2' onClick={table.nextPage} disabled={!table.getCanNextPage() ? true : false}>Next</button>

                        <button className='btn btn-primary me-2' onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage() ? true : false}>{table.getPageCount() - 1 + 1}</button>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default BasicTable;