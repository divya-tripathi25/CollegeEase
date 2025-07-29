import React from 'react'
import BasicTable from '../Common/ReactTable/BasicTable';
import { Badge } from 'react-bootstrap';

export default function VendorListTable() {

    const vendorList = [
        { name: "Vendor 1", foodItems: 20, rating: "4.5", foodType: "Veg", status: "Active" },
        { name: "Vendor 2", foodItems: 15, rating: "4.2", foodType: "Non-Veg", status: "Inactive" },
        { name: "Vendor 3", foodItems: 30, rating: "4.8", foodType: "Veg", status: "Active" },
        { name: "Vendor 4", foodItems: 12, rating: "3.9", foodType: "Mixed", status: "Active" },
        { name: "Vendor 5", foodItems: 25, rating: "4.1", foodType: "Veg", status: "Inactive" },
        { name: "Vendor 6", foodItems: 18, rating: "4.7", foodType: "Non-Veg", status: "Active" },
        { name: "Vendor 7", foodItems: 10, rating: "3.8", foodType: "Veg", status: "Inactive" },
        { name: "Vendor 8", foodItems: 22, rating: "4.3", foodType: "Mixed", status: "Active" },
        { name: "Vendor 9", foodItems: 28, rating: "4.6", foodType: "Non-Veg", status: "Active" },
        { name: "Vendor 10", foodItems: 35, rating: "4.9", foodType: "Veg", status: "Active" },
    ];

    const data = vendorList;
    const columns = [
        {
            header: "S.No",
            accessorKey: "",
            cell: (info) => info.row.index + 1,
        },
        {
            header: "Name",
            accessorKey: "name",
        },
        {
            header: "Food Items",
            accessorKey: "foodItems",
        },
        {
            header: "Rating",
            accessorKey: "rating",
        },
        {
            header: "Food Type",
            accessorKey: "foodType",
        },
        {
            header: "Status",
            accessorKey: "status",
            cell: ({ getValue }) => (
                <Badge bg={getValue() === 'Active' ? 'success' : 'danger'} className='fw-medium'>
                    {getValue()}
                </Badge>
            ),
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
