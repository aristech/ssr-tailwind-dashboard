import React from "react";
import FullCalendar from "./FullCalendar";

export default function Calendar() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <FullCalendar />
          </div>
        </div>
      </div>
    </>
  );
}
