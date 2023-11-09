import React, { useState } from "react";

const BookingForm = (props) => {

    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    const handleDateChange = (e) => {
        setDate(e);
        props.dispatach(e);
    };

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset className="formField">
                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input id="book-date" value={date} onChange={(e) => handleDateChange(e.target.value)} type="date" required/>
                        </div>

                        <div>
                            <label htmlFor="book-time">Choose Time</label>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                                }
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                                <option>21:00</option>
                                <option>22:00</option> 
                            </select>

                        </div>
                        <div>
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <input id="book-guests" min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"}placeholder={0} max={10} required></input>
                        </div>

                        <div>
                            <label htmlFor="book-occasion">Occasion</label>
                            <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option value="">Select an Occasion</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>

                        <div className="btnReceive">
                            <input aria-label='On Click' type={"submit"} value={"Make Your Reservation"}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};
export default BookingForm;