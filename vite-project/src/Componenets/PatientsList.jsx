import { PatientsData } from "../PatientData";
import { useState } from "react";

function PatientsList() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const openPopup = (patient) => {
    setSelectedPatient(patient);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setSelectedPatient(null);
  };

 
  const filteredPatients = PatientsData.filter((patient) =>{
      const matchesName = patient.fullName
      .toLowerCase()
      .includes(patientName.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || patient.status === statusFilter;

       return matchesName && matchesStatus
  });

  return (
    <div className="bg-violet-800">
     
      <div className="flex justify-center py-4 gap-2">
        <input
          placeholder="Search Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          className="border border-gray-400 p-2 rounded-md w-64 bg-white"
        />

         <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-400 p-2 rounded-md bg-white"
        >
          <option value="all">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      
      <div className="flex flex-row flex-wrap gap-5 justify-center ">
        {filteredPatients.length > 0 ? (
          filteredPatients.map((item, ind) => (
            <div
              key={ind}
              className=" w-60 cursor-pointer bg-white hover:bg-gray-100 p-2 rounded"
              onClick={() => openPopup(item)}
            >
              <h1><span className="font-bold">Name - </span>{item.fullName}</h1>
              <h1><span className="font-bold">Age - </span>{item.age}</h1>
              <h1><span className="font-bold">Type of Care - </span>{item.careType}</h1>
              <h1><span className="font-bold">Status - </span>{item.status}</h1>
              <h1><span className="font-bold">Next Visit Date - </span>{item.nextVisitDate}</h1>
            </div>
          ))
        ) : (
          <p className="text-gray-500 mt-4">No patients found.</p>
        )}
      </div>

      {/* Popup */}
      {isOpen && selectedPatient && (
        <div className="fixed inset-0 backdrop-blur-xl flex justify-center items-center z-50">
          <div className="bg-white w-80 p-5 rounded-lg shadow-lg relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-3 text-xl font-bold cursor-pointer"
            >
              ×
            </button>

            <h2 className="text-xl font-semibold mb-3">Patient Details</h2>

            <p>
              <span className="font-semibold">Name:</span>{" "}
              {selectedPatient.fullName}
            </p>
            <p>
              <span className="font-semibold">Age:</span>{" "}
              {selectedPatient.age}
            </p>
            <p>
              <span className="font-semibold">Care Type:</span>{" "}
              {selectedPatient.careType}
            </p>
            <p>
              <span className="font-semibold">Status:</span>{" "}
              {selectedPatient.status}
            </p>
            <p>
              <span className="font-semibold">Next Visit Date:</span>{" "}
              {selectedPatient.nextVisitDate}
            </p>

            <p>
              <span className="font-semibold">Assigned Caregiver Name:</span>{" "}
              Ranjith
            </p>
            <p>
              <span className="font-semibold">Remarks:</span> Need Take Rest
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PatientsList;
