const express =require('express')
const app = express();
const port = 5000;
const connectDB = require("./db");

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

connectDB();

app.get('/', (req,res)=>{
    res.send("hello")
})
app.use(express.json());
app.use('/email',require('./createUser'));

app.listen(port, ()=>{
    console.log(`listining on port ${port}`)
})