import React from "react";
import DataTable from "react-data-table-component";

function Table() {
  const columns = [
    {
      name: "Order Id",
      selector: (row) => row.id,
      cell: (row) => (
        <div className="text-blue-500 flex w-full justify-start">{row.id}</div>
      ),
      sortable: true,
    },
    {
      name: "Order Date",
      selector: (row) => row.date,
      cell: (row) => (
        <div className="flex justify-start w-full">{row.date}</div>
      ),
      sortable: true,
    },
    {
      name: "Order Amount",
      selector: (row) => row.amount,
      cell: (row) => (
        <div className="flex justify-end w-full">{row.amount}</div>
      ),
    },
    {
      name: "Transaction Fees",
      selector: (row) => row.fees,
      cell: (row) => <div className="flex justify-end w-full">{row.fees}</div>,
    },
  ];

  const data = [
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "Rs 1278.23",
      fees: "Rs 22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "Rs 1278.23",
      fees: "Rs 22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "Rs 1278.23",
      fees: "Rs 22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "Rs 1278.23",
      fees: "Rs 22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "Rs 1278.23",
      fees: "Rs 22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "Rs 1278.23",
      fees: "Rs 22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "Rs 1278.23",
      fees: "Rs 22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "Rs 1278.23",
      fees: "Rs 22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "Rs 1278.23",
      fees: "Rs 22",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: "Rs 1278.23",
      fees: "Rs 22",
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        color: "#4D4D4D",
        fontSize: "14px",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#F2F2F2",
        height: "40px",
        borderRadius: "0",
      },
      denseStyle: {
        maxHeight: "40px",
      },
    },
  };

  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        responsive={true}
        customStyles={customStyles}
      />
    </>
  );
}

export default Table;
