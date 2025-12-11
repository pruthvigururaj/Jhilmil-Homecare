import { useState } from "react";
import { ServicesData } from "../ServicesData";
import { Link } from "react-router-dom";

function ServicesList() {
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [booking, setBooking] = useState(false);
    const filteredServces = ServicesData.filter((services)=>{
        return selectedFilter === "all" || services.category === selectedFilter;
    })
    return (
        <div className="bg-violet-800">
            <div className="flex justify-center py-4 ">
                <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="bg-white p-2 rounded-md ">
                    <option value="all">All</option>
                    <option value="Recommended">Recommended</option>
                    <option value="Popular">Popular</option>
                </select>
            </div>
            <div className="flex flex-row flex-wrap  gap-4 justify-center">
                {filteredServces.map((item, ind) => (
                    <div key={ind} className="border border-black w-52  p-2 rounded flex flex-col gap-2 bg-white">
                        <h1><span className="font-semibold">Name - </span>{item.name}</h1>
                        <h1><span className="font-semibold">Description - </span>{item.description}</h1>
                        <h1><span className="font-semibold">Duration - </span>{item.duration}</h1>
                        <h1><span className="font-semibold">Cost - </span>{item.costRange}</h1>
                        <Link to="/bookings" state={{ item }}><button className="bg-green-800 text-white font-bold px-4 py-2 cursor-pointer rounded-md">Book a Service</button></Link>
                    </div>
                ))}
                
            </div>
        </div>
    )
}
export default ServicesList;