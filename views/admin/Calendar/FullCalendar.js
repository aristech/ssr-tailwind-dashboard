import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const DynamicCalendar = dynamic(() => import("./CalendarPage"), {
  ssr: false
});

export default () => <DynamicCalendar />;
