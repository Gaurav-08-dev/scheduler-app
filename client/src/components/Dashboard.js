import React,{useState,useEffect} from "react";
import TimezoneSelect from "react-timezone-select";
import { useNavigate } from "react-router-dom";
import { time } from "../utils/resource";
import {toast} from "react-toastify";

const Dashboard=()=>{

    const [selectedTimezone,setSelectedTimezone]=useState({});
    const navigate=useNavigate();

    const [schedule, setSchedule] = useState([
		{ day: "Sun", startTime: "", endTime: "" },
		{ day: "Mon", startTime: "", endTime: "" },
		{ day: "Tue", startTime: "", endTime: "" },
		{ day: "Wed", startTime: "", endTime: "" },
		{ day: "Thu", startTime: "", endTime: "" },
		{ day: "Fri", startTime: "", endTime: "" },
		{ day: "Sat", startTime: "", endTime: "" },
	]);

    const handleLogout=()=>{
        localStorage.removeItem("_id");
        localStorage.removeItem("_myEmail");
        navigate("/")
    }


    return(
        <div>
            <nav className="dashboard_nav">
                <h2>Book a schedule</h2>
                <button onClick={handleLogout} className='logout__btn'> Log out</button>
            </nav>
            <main className="dashboard__main">
            <h2 className="dashboard__heading">Select your availability</h2>
            <div className="timezone__wrapper">
                <p>Pick your timezone</p>
                <TimezoneSelect
                    value={selectedTimezone}
                    onChange={setSelectedTimezone}
                />
            </div>
            </main>
        </div>
    )
}


export default Dashboard;