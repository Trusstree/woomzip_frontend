"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  StyledCalendarWrapper,
  StyledCalendar,
  StyledDate,
  StyledToday,
  StyledDot,
} from "@/app/living/[pid]/reservation/_styles/styles";
import moment from "moment";

const CalenderForm = ({ checkinDate, setCheckinDate, checkoutDate, setCheckoutDate, unavailableDay, isCheckin }) => {
  const today = new Date();
  const [activeStartDate, setActiveStartDate] = useState<Date>(today);
  const attendDay = ["2024-05-03", "2024-05-13"]; // 출석한 날짜 예시

  const handleDateChange = (newDate: Date) => {
    if (isCheckin) setCheckinDate(newDate < checkoutDate ? newDate : checkoutDate);
    else setCheckoutDate(newDate > checkinDate ? newDate : checkinDate);
  };

  const handleTodayClick = () => {
    setActiveStartDate(new Date());
  };

  useEffect(() => {
    // console.log(date);
    // console.log(activeStartDate);
  }, [checkinDate, checkoutDate, activeStartDate]);

  const tileContent = ({ date, view }) => {
    let html = [];
    if (view === "month" && date.getMonth() === today.getMonth() && date.getDate() === today.getDate()) {
      html.push(<StyledToday key={"today"}>오늘</StyledToday>);
    }
    if (attendDay.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
      html.push(<StyledDot key={moment(date).format("YYYY-MM-DD")} />);
    }
    return <>{html}</>;
  };

  const tileDisabled = useCallback(
    ({ date, view }) => {
      return (
        view === "month" && // Block day tiles only
        unavailableDay.some(
          (disabledDate) =>
            date.getFullYear() === disabledDate.getFullYear() &&
            date.getMonth() === disabledDate.getMonth() &&
            date.getDate() === disabledDate.getDate()
        )
      );
    },
    [unavailableDay]
  );

  return (
    <StyledCalendarWrapper>
      <StyledCalendar
        locale="ko"
        value={[checkinDate, checkoutDate]}
        onChange={handleDateChange}
        formatDay={(locale, date) => moment(date).format("D")}
        formatYear={(locale, date) => moment(date).format("YYYY")}
        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
        calendarType="gregory"
        showNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        minDetail="year"
        minDate={moment().toDate()}
        maxDate={new Date("2050-12-31")}
        activeStartDate={activeStartDate === null ? undefined : activeStartDate}
        onActiveStartDateChange={({ activeStartDate }) => setActiveStartDate(activeStartDate)}
        tileContent={tileContent}
        tileDisabled={tileDisabled}
      />
      <StyledDate onClick={handleTodayClick}>오늘</StyledDate>
    </StyledCalendarWrapper>
  );
};

export default CalenderForm; // CalenderForm 컴포넌트를 default export
