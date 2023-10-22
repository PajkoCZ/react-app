import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateComp = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
            <h1>Vyberte datum:</h1>
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"  // formát data podle vašeho výběru
            />
            {selectedDate && (
                <p>Vybrané datum: {selectedDate.toLocaleDateString()}</p>
            )}
        </div>
    )
}

export default DateComp;