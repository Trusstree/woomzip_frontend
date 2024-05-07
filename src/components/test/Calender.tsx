"use client"

import React, { useState } from 'react';
import { StyledCalendarWrapper, StyledCalendar, StyledDate, StyledToday, StyledDot } from "./styles";
import moment from "moment";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalenderForm = () => {
    const today = new Date();
    const [date, setDate] = useState<Value>(today);
    const [activeStartDate, setActiveStartDate] = useState<Date | null>(new Date());
    const attendDay = ["2023-12-03", "2023-12-13"]; // 출석한 날짜 예시

    const handleDateChange = (newDate: Value) => {
        setDate(newDate);
    };

    const handleTodayClick = () => {
        const today = new Date();
        setActiveStartDate(today);
        setDate(today);
    };

    return (
        <StyledCalendarWrapper>
            <StyledCalendar
                locale='ko'
                value={date}
                onChange={handleDateChange}
                formatDay={(locale, date) => moment(date).format("D")}
                formatYear={(locale, date) => moment(date).format("YYYY")}
                formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
                calendarType="gregory"
                showNeighboringMonth={false}
                next2Label={null}
                prev2Label={null}
                minDetail="year"
                activeStartDate={activeStartDate === null ? undefined : activeStartDate}
                onActiveStartDateChange={({ activeStartDate }) => setActiveStartDate(activeStartDate)}
                tileContent={({ date, view }) => {
                    let html = [];
                    if (view === "month" && date.getMonth() === today.getMonth() && date.getDate() === today.getDate()) {
                        html.push(<StyledToday key={"today"}>오늘</StyledToday>);
                    }
                    if (attendDay.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                        html.push(<StyledDot key={moment(date).format("YYYY-MM-DD")} />);
                    }
                    return <>{html}</>;
                }}
            />
            <StyledDate onClick={handleTodayClick}>오늘</StyledDate>
        </StyledCalendarWrapper>
    );
};

export default CalenderForm; // CalenderForm 컴포넌트를 default export