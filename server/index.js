const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api", (req, res) => {
    res.json({
        message: "Hello world",
    });
});

app.register("/register",(req,res)=>{
    const {username,email,password}=req.body;
    console.log(req.body)
})


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});