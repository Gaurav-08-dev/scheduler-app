import { toast } from "react-toastify";

export const time = [
	{ id: "null", t: "Select" },
	{ id: "7", t: "7:00am" },
	{ id: "8", t: "8:00am" },
	{ id: "9", t: "9:00am" },
	{ id: "10", t: "10:00am" },
	{ id: "11", t: "11:00am" },
	{ id: "12", t: "12:00pm" },
	{ id: "13", t: "13:00pm" },
	{ id: "14", t: "14:00pm" },
	{ id: "15", t: "15:00pm" },
	{ id: "16", t: "16:00pm" },
	{ id: "17", t: "17:00pm" },
	{ id: "18", t: "18:00pm" },
	{ id: "19", t: "19:00pm" },
];
export async function handleLogin(username, password, navigate) {

	try {
		const request = await fetch("http://localhost:4000/login", {
			method: "POST",
			body: JSON.stringify({ 
				username, 
				password, 
			}),
			headers: {
				Accept: "application/json",
				"Content-Type":"application/json"
		},
		});

		const data=await request.json();
		if(data.error_message){
			toast.error(data.error_message);
		}
		else{
			// if login successful
			toast.success(data.message);
			
			// save email and id for identification
			localStorage.setItem("_id",data.data._id);
			localStorage.setItem("_myEmail",data.data._email);
			navigate("/dashboard")
		}
	} catch (err) {
		console.log(err)
	}
}

export async function handleRegister(email, username, password, navigate) {

	try {
		const request = await fetch("http://localhost:4000/register", {
			method: "POST",
			body: JSON.stringify({
				email,
				username,
				password,
			}),
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		const data = await request.json();
		if (data.error_message) {
			toast.error(data.error_message);
		}
		else {
			toast.success(data.message);
			navigate("/");
		}
	}
	catch (err) {
		console.log(err)
		toast.error("Account creation failed")
	}
}