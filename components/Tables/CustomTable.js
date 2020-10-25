import React from "react";
import PropTypes from "prop-types";
import { useTable } from "react-table";

// components

import TableDropdown from "../Dropdowns/TableDropdown.js";
import Table from "./Table.js";

export default function CustomTable({ color }) {
  function NumberRangeColumnFilter({
    column: { filterValue = [], preFilteredRows, setFilter, id },
  }) {
    const [min, max] = React.useMemo(() => {
      let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
      let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
      preFilteredRows.forEach((row) => {
        min = Math.min(row.values[id], min);
        max = Math.max(row.values[id], max);
      });
      return [min, max];
    }, [id, preFilteredRows]);

    return (
      <div
        style={{
          display: "flex",
        }}
      >
        <input
          value={filterValue[0] || ""}
          type="number"
          onChange={(e) => {
            const val = e.target.value;
            setFilter((old = []) => [
              val ? parseInt(val, 10) : undefined,
              old[1],
            ]);
          }}
          placeholder={`Min (${min})`}
          style={{
            width: "70px",
            marginRight: "0.5rem",
          }}
        />
        to
        <input
          value={filterValue[1] || ""}
          type="number"
          onChange={(e) => {
            const val = e.target.value;
            setFilter((old = []) => [
              old[0],
              val ? parseInt(val, 10) : undefined,
            ]);
          }}
          placeholder={`Max (${max})`}
          style={{
            width: "70px",
            marginLeft: "0.5rem",
          }}
        />
      </div>
    );
  }
  //DATA
  const columns = React.useMemo(
    () => [
      {
        Header: "Project",
        accessor: "project",
        filter: "fuzzyText",
      },
      {
        Header: "Budget",
        accessor: "budget",
        filter: "fuzzyText",
      },
      {
        Header: "Status",
        accessor: "status",
        filter: "fuzzyText",
      },
      {
        Header: "Users",
        accessor: "users",
        filter: "fuzzyText",
      },
      {
        Header: "Completition",
        accessor: "completition",
        filter: "fuzzyText",
      },
    ],
    []
  );

  const data = [
    {
      project: {
        title: "Argon Design System",
        value: "Argon Design System",
        type: "string",
        editable: true,
      },
      budget: { title: "2,500", value: 2500, type: "number", editable: true },
      status: {
        title: "Pending",
        value: null,
        type: "boolean",
        editable: true,
      },
      users: { title: "Makis", value: "Makis", type: "string", editable: true },
      completition: {
        title: "60",
        value: 60,
        type: "percentage",
        editable: true,
      },
    },
    {
      project: {
        title: "material Design System",
        value: "material Design System",
        type: "string",
        editable: true,
      },
      budget: { title: "4,500", value: 4500, type: "number", editable: true },
      status: {
        title: "Active",
        value: true,
        type: "boolean",
        editable: true,
      },
      users: { title: "Grt", value: "Grt", type: "string", editable: true },
      completition: {
        title: "30",
        value: 30,
        type: "percentage",
        editable: true,
      },
    },
  ];

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blue-900 text-white")
        }
      >
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <Table color="light" columns={columns} data={data} />
        </div>
      </div>
    </>
  );
}

CustomTable.defaultProps = {
  color: "light",
};

CustomTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
