import { useState } from "react";
import { useLocation } from "react-router-dom";

function Booking()
{
    const [patientName, setPatientName] = useState("");
    const [patientVisitDate, setPatientVisitDate] = useState(Date);
    const [patientNumber, setPatientNumber] = useState("");
    const [patientAddress, setPatientAddress] = useState("");
    const location = useLocation();
  const { item } = location.state || {};

    const [patientService, setPatientService] = useState(item.name);
   if (!item) return <h1>No service selected</h1>; 

     const handleSubmit = (e) => {
   e.preventDefault();

    const bookingData = {
      patientName,
      patientService,
      patientVisitDate,
      patientNumber,
      patientAddress,
    
    };

  
    const prevBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    prevBookings.push(bookingData);
    localStorage.setItem("bookings", JSON.stringify(prevBookings));

  
  alert("Patient Booking Sucess");
  
    setPatientName("");
  
    setPatientVisitDate("");
    setPatientNumber("");
    setPatientAddress("");

   
  };

  return (
    <div className="flex justify-center pt-10 bg-violet-800 h-screen items-center">
         <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80 bg-white p-8 rounded-md">
        <input 
        value={patientName} 
        onChange={(e)=>setPatientName(e.target.value)} 
        placeholder="Enter patient Name"
        required
        className="border border-gray-600 px-3 py-2 rounded-md"
        />

        <input 
        value={item.name}
         className="border border-gray-600 px-3 py-2 rounded-md"
        />

        <input 
        value={patientVisitDate} 
        onChange={(e)=>setPatientVisitDate(e.target.value)} 
        placeholder="Please enter preferred date"
        type="date"
        required
         className="border border-gray-600 px-3 py-2 rounded-md"
        />

        <input 
        value={patientNumber} 
        onChange={(e)=>setPatientNumber(e.target.value)} 
        placeholder="Enter Patient Mobile Number"
        type="tel"
        maxLength={10}
        pattern="\d*"
        required
         className="border border-gray-600 px-3 py-2 rounded-md"
        />

         <textarea
        value={patientAddress} 
        onChange={(e)=>setPatientAddress(e.target.value)} 
        placeholder="Enter patient Address"
        type="text"
        required
         className="border border-gray-600 px-3 py-2 rounded-md"
        />
          <button
        type="submit"
        className="bg-green-800 text-white py-2 rounded cursor-pointer"
      >
        Submit Booking
      </button>
        </form>
    </div>
  );
}
export default Booking;