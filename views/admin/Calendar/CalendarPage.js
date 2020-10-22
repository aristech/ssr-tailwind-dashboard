import React from "react";
import elLocale from "@fullcalendar/core/locales/el";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function CalendarPage(props) {
  //   title: "All Day Event",
  //   allDay: true,
  //   start: new Date(y, m, 1),
  //   end: new Date(y, m, 1),
  //   color: "default"

  const ev = [
    { title: "Call doctor", date: "2020-10-24" },
    { title: "Check e-Mails", date: "2020-10-21" },
  ];

  return (
    <div>
      <FullCalendar
        // timeZone="Europe/Athens"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,timeGrid",
        }}
        locale={elLocale}
        selectable={true}
        height="auto"
        editable={true}
        eventDurationEditable={false}
        //   eventLimit={true}
        events={ev}
        // eventRender={(info) => {
        //   info.el.firstChild.innerText = `${info.el.firstChild.innerText} \n ${info.event.extendedProps.name}`;
        //   return info.el;
        // }}
        eventDrop={(ev) => {
          const type = ev.event.extendedProps.type;
          const id = ev.event.extendedProps.event_id;
          const start = ev.event.start;
          const end = ev.event.end;

          console.log("drop event", start);
        }}
        // eventRender={function(info) {
        //   console.log(info.event.extendedProps.description);
        // }}
        // defaultView="month"
        // scrollToTime={new Date(1970, 1, 1, 6)}
        // defaultDate={new Date()}
        eventClick={(eventClickInfo) => {
          const evType = eventClickInfo.event.extendedProps.type;
          const evId = eventClickInfo.event.extendedProps.event_id;
          // ctx.openEditCalendarDialog({ evType, evId });
          console.log(evType);
        }}
        dateClick={(slotInfo) => console.log(slotInfo)}
        //   eventPropGetter={eventColors}
      />
    </div>
  );
}
export default CalendarPage;
