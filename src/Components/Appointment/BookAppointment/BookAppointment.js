import React from 'react';
import BookingCard from '../BookingCard/BookingCard';


const bookingData = [
    {
        _id: "01",
        id: 1,
        subject: "Teeth Orthodontics",
        visitingHour: "8:00 AM - 9:00 AM",
        totalSpace: 10
    },
    {
        _id: "02",
        id: 2,
        subject: "Cavity Protection",
        visitingHour: "6:00 AM - 8:00 AM",
        totalSpace: 10
    },
    {
        _id: "03",
        id: 3,
        subject: "Teeth Orthodontics",
        visitingHour: "8:00 AM - 9:00 AM",
        totalSpace: 10
    },
    {
        _id: "04",
        id: 4,
        subject: "Teeth Cleaning ",
        visitingHour: "5:00 PM - 7:00 PM",
        totalSpace: 10
    },
    {
        _id:"05",
        id: 5,
        subject: "Cosmetic Dentistry",
        visitingHour: "10:00 AM - 12:00 AM",
        totalSpace: 10
    },
    {
        _id: "06",
        id: 6,
        subject: "Teeth Orthodontics",
        visitingHour: "8:00 AM - 9:00 AM",
        totalSpace: 10
    }
];

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className="text-center text-brand mb-5">Available Appointment on {date.toDateString()} </h2>  
            <div className="row">
                {
                    bookingData.map(booking => <BookingCard booking={booking}  date={date} key={booking.id}></BookingCard>)
                }
            </div>         
        </section>
    );
};

export default BookAppointment;