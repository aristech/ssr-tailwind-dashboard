import React from "react";

function PercentageCell({ value }) {
  return (
    <div className="flex items-center">
      <span className="mr-2">{value}</span>
      <div className="relative w-full">
        <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
          <div
            style={{ width: "100%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default PercentageCell;
