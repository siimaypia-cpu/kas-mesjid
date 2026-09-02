import { useState, useMemo } from "react";

const DAYS_IN_WEEK = 7;
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const useCalendar = (initialDate = new Date()) => {
  const [currentDate, setCurrentDate] = useState(initialDate);

  const isCurrentMonth = (date) => date.getMonth() === currentDate.getMonth();

  const calendarInfo = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = new Date();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    for (let i = 0; i < startingDayOfWeek; i++) {
      const prevDate = new Date(year, month, -i);
      days.push({
        day: prevDate.getDate(),
        isCurrentMonth: false,
        isToday: false,
        date: prevDate,
      });
    }

    for (let date = 1; date <= daysInMonth; date++) {
      const dayDate = new Date(year, month, date);
      const isToday =
        dayDate.toDateString() === today.toDateString();
      days.push({
        day: date,
        isCurrentMonth: true,
        isToday,
        date: dayDate,
        dots: isToday ? [{ color: "bg-secondary" }] : [],
      });
    }

    const totalCells = Math.ceil((startingDayOfWeek + daysInMonth) / DAYS_IN_WEEK) * DAYS_IN_WEEK;
    for (let date = 1; days.length < totalCells; date++) {
      const nextDate = new Date(year, month + 1, date);
      days.push({
        day: date,
        isCurrentMonth: false,
        isToday: false,
        date: nextDate,
      });
    }

    return {
      year,
      month,
      monthName: MONTH_NAMES[month],
      days,
      isCurrentMonth,
    };
  }, [currentDate]);

  const goPrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  return {
    calendarInfo,
    goPrevMonth,
    goNextMonth,
    goToToday,
    currentDate,
  };
};

export default useCalendar;