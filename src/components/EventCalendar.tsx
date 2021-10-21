import React, {FC} from 'react';
import {Calendar} from "antd";

interface EventCalendarProps {
    events: Event[]
}

const EventCalendar: FC<EventCalendarProps> = () => {
    return (
        <div>
            <Calendar/>
        </div>
    );
};

export default EventCalendar;