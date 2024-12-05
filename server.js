require("dotenv").config();
const  express =require("express") ;
const cors =require ("cors");
const app=express();
const PORT=process.env.PORT||5000;
const MONGO_URI=process.env.MONGO_URI;
const mongoose = require('mongoose');
//Set up default mongoose connection
cors({
    origin:process.env.CLIENT_URL,
    methods:["GET","POST","DELETE","PUT"],
    allowedHeaders:["content-type","Authorization"],

});
app.use(express.json());
mongoose.connect(MONGO_URI).then(()=>console.log("mongo db conncted ")).catch(e=>console.log(e));

app.listen(PORT,()=>{
    console.log(`server is now running on port ${PORT}`);
})