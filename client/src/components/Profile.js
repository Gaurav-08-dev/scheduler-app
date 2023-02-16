import React,{useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const {id}=useParams();

    useEffect(() => {
        if (!localStorage.getItem("_id")) {
            navigate("/");
        }
    }, [navigate]);
  return (
    <main className='profile'>
        <div style={{width:"70%"}}>
            <h2>Hey, Gaurav</h2>
            <p>Here is your schedule:WAT</p>
            <table>
                <tbody>
                    <tr>
                        <td>Mon</td>
                        <td>8:00am</td>
                        <td>10:00pm</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
  )
}

export default Profile;