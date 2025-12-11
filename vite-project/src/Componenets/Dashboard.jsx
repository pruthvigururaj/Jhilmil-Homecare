import { Link } from "react-router-dom";

function Dashboard()
{
    return(
        <div className="h-screen  flex flex-col justify-center items-center bg-violet-800">
                 <h1 className="text-5xl pb-8 font-bold text-white">Homecare Service & Patient Dashboard</h1>
                 <div className="flex flex-row gap-6">
                     <Link to="/patients"> <button className="px-6 py-3 cursor-pointer rounded-md text-white bg-green-600 text-lg font-bold hover:bg-green-900">Patients Summary</button></Link>
                     <Link to="/services"><button className="px-6 py-3 cursor-pointer rounded-md text-white bg-green-600 text-lg font-bold hover:bg-green-900">Services Summary</button></Link>
                     <Link to="/history"><button className="px-6 py-3 cursor-pointer rounded-md text-white bg-green-600 text-lg font-bold hover:bg-green-900">My Bookings</button></Link>
                    
                 </div>
        </div>
    )
}
export default Dashboard;