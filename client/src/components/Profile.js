import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Profile = () => {

    const [schedules, setSchedules] = useState([]);
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState("");
    const [timezone, setTimezone] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (!localStorage.getItem("_id")) {
            navigate("/");
        }
    }, [navigate]);

    useEffect(() => {
        function getUserDetails() {
            if (id) {
                fetch(`/schedules/${id}`)
                    .then((res) => res.json())
                    .then((data) => {
                        setUsername(data.username);
                        setSchedules(data.schedules);
                        setTimezone(data.timezone.label);
                        setLoading(false);
                    })
                    .catch((err) => console.error(err))
            }
        }

        getUserDetails();
    }, [id])
    return (
        <main className='profile'>
            {loading ? (<p>Loading...</p>)
                :
                (<div style={{ width: "70%" }}>
                    <h2>Hey, {username}</h2>
                    <p>Here is your schedule: - {timezone}</p>
                    <table>
                        <tbody>
                        {
                            schedules.map((sch)=>(
                            <tr key={sch.day}>
                                <td style={{fontWeight:"bold"}}>{sch.day.toUpperCase()}</td>
                                <td>{sch.startTime || "Unavailable"}</td>
                                <td>{sch.endTime || "Unavailable"}</td>
                            </tr>

                            ))
                        }
                        </tbody>
                    </table>
                </div>)
            }
        </main>
    )
}

export default Profile;