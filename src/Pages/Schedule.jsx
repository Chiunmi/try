import React, { useRef, useState } from "react";
import MainLayout from "../Layout/MainLayout";
import "./SchedulePage.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Container, Row, Col, Button } from "react-bootstrap";

function Schedule() {
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([]);

  const handleDateClick = (info) => {
    const startDate = new Date(info.dateStr);
    const endDate = new Date(info.dateStr);
    addEvent(startDate, endDate);
  };

  const handleAddEvent = () => {
    const currentDate = new Date();
    addEvent(currentDate, currentDate);
  };

  const addEvent = (start, end) => {
    const title = prompt("Enter event title:");
    if (title) {
      const newEvent = { title, start, end };
      calendarRef.current.getApi().addEvent(newEvent);
      setEvents([...events, newEvent]);
    }
  };

  return (
    <MainLayout>
      <Container fluid className="schedule">
        <Row className="schedule-calendar">
          <Col md={6} className="schedule-col">
            <div className="schedule-page">
              <button onClick={handleAddEvent}>Add Event</button>
              <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                  start: "today prev,next",
                  center: "title",
                  end: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                height={"90vh"}
                editable={true}
                selectable={true}
                select={handleDateClick}
                events={events}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}

export default React.memo(Schedule);
