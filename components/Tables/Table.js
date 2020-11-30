import React from "react";
import PropTypes from "prop-types";
import { useTable, useFilters } from "react-table";
import { matchSorter } from "match-sorter";

// components

// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <div className="relative flex w-full flex-wrap items-stretch">
      <span className="z-10 h-full leading-4 font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
        <i className="fas fa-search"></i>
      </span>
      <input
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`Search ${count} records...`}
        className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
      />
    </div>
  );
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, {
    keys: [(row) => row.values?.title],
  });
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val) => !val;

export default function Table({ color, columns, data }) {
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values?.title;
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );
  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
    },
    useFilters // useFilters!
  );

  const renderValue = (value) => {
    let cellValue;
    switch (value.type) {
      case "string":
        cellValue = (
          <div className="flex items-center">
            <span
              className={
                "m-auto align-middle " +
                (color === "light" ? "text-gray-700" : "text-white")
              }
            >
              {value?.title}
            </span>
          </div>
        );
        break;
      case "percentage":
        cellValue = (
          <div className="flex items-center">
            <span className=" mr-2">{`${value?.title}`}%</span>
            <div className="relative w-full">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                <div
                  style={{ width: `${value?.value}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                ></div>
              </div>
            </div>
          </div>
        );
        break;
      case "boolean":
        const valueBool = {
          true: "text-green-500",
          false: "text-red-500",
        }[value.value];
        cellValue = (
          <div className="flex justify-items-center items-center">
            <i
              className={`fas ${
                valueBool ? valueBool : "text-orange-500"
              } fa-circle mr-4 ml-24`}
            ></i>{" "}
            <span
              className={
                "ml-2 " + (color === "light" ? "text-gray-700" : "text-white")
              }
            >
              {value?.title}
            </span>
          </div>
        );
        break;

      default:
        cellValue = (
          <div className="flex items-center">
            <span
              className={
                "m-auto align-middle " +
                (color === "light" ? "text-gray-700" : "text-white")
              }
            >
              {value?.title}
            </span>
          </div>
        );
        break;
    }

    return cellValue;
  };

  const firstPageRows = rows.slice(0, 10);

  return (
    <>
      <table
        {...getTableProps()}
        className="items-center w-full bg-transparent border-collapse"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-bold " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
          <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: "left",
              }}
            ></th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  const { value } = cell;
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 justify-center"
                    >
                      {/* {renderValue(value)} */}
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

Table.defaultProps = {
  color: "light",
};

Table.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
