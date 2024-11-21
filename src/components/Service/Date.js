import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import './date.css'
import 'react-datepicker/dist/react-datepicker.css';

const DateUtility = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="date-range-select">
      <label className="input-label">تاريخ الوصول - تاريخ المغادرة</label>
      <div className="date-picker">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="تاريخ الوصول"
        />
        <span className="separator">إلى</span>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="تاريخ المغادرة"
        />
      </div>
    </div>
  );
};

export default DateUtility;
