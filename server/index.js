const express = require("express");
const app = express();
const PORT = 4000;

// app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const database=[];
const generateId=()=> Math.random().toString(36).substring(2,10);

app.get("/api", (req, res) => {
    res.json({
        message: "Hello world",
    });
});

app.get("/schedules/:id", (req,res)=>{
    const {id}=req.params;
    let result=database.filter((db)=> db.id===id);

    if(result.length === 1){
        return res.json({
            message:"Schedules successfully retrieved",
            schedules:result[0].schedule,
            username:result[0].username,
            timezone:result[0].timezone
        });
    }

    return res.json({error_message:"Sign in again, an error occurred..."});
});

app.post("/register",(req,res)=>{
    const {username,email,password}=req.body;

    // check if user does not exist
    let result=database.filter((user)=> user.email===email || user.username === username);
    if(result.length===0){
        database.push({
            id:generateId(),
            username,
            password,
            email,
            timezone:{},
            schedule:[],
        });

        return res.json({message:"Account created successfully!"})
    }

    // return error
    res.json({error_message:"user already exists!"})
})

app.post("/login",(req,res)=>{
    const {username,password}=req.body;
    let result=database.filter((user)=> user.username === username && user.password === password);

    // user doesn't exists
    if(result.length!==1){
        return res.json({
            error_message:"Incorrect credentials"
        });
    }

    // user exists
    res.json({
        message:"Login Successful",
        data:{
            _id:result[0].id,
            _email:result[0].email,
        },
    })

})

app.post("/schedule/create",(req,res)=>{
    const {userId,timezone,schedule}=req.body;

    // filter the database using id
    let result=database.filter((db)=> db.id===userId)

    // update user's schedule and timezone

    result[0].timezone=timezone;
    result[0].schedule=schedule;
    res.json({message:"Ok"})
    console.log(req.body);
})

app.post("/schedules/:username",(req,res)=>{
    const {username}=req.body;

    let result=database.filter((db)=> db.username === username);

    if(result.length === 1){
        const scheduleArray=result[0].schedule;
        const filteredArray=scheduleArray.filter((sch)=> sch.starTime!== "")

        return res.json({
            message:"Schedules successfully retrieved!",
            schedules:filteredArray,
            timezone:result[0].timezone,
            receiverEmail:result[0].email,
        });
    }

    return res.json({error_message:"User doesn't exists"})
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});