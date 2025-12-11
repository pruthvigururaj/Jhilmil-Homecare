import React, { useEffect, useState } from "react";

function History() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(stored);
  }, []);

  return (
    <div className="bg-violet-800 pb-12">

      <h1 className="text-2xl font-bold mb-4 text-white pt-6 pl-6">Booking History</h1>

      {bookings.length === 0 ? (
        <p className="text-2xl text-white pt-6 pl-6">No bookings found.</p>
      ) : (
        <div className="flex flex-row flex-wrap gap-6 justify-center">

          {bookings.map((item, index) => (
            <div
              key={index}
              className=" p-4 rounded-md bg-white "
            >
              <h2 className="text-lg font-semibold mb-2">
                Name - {item.patientName}
              </h2>

              <p><strong>Service:</strong> {item.patientService}</p>
              <p><strong>Visit Date:</strong> {item.patientVisitDate}</p>
              <p><strong>Contact:</strong> {item.patientNumber}</p>
              <p><strong>Address:</strong> {item.patientAddress}</p>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default History;
