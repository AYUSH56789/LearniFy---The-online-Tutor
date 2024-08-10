require('dotenv').config();
const express=require("express") ;
const cors=require("cors") ;
const { dbConnect } = require("./connection");
const cookieParser=require('cookie-parser');
const { authRouter } = require('./routes/authRouter');
const { testimonialsRouter } = require('./routes/testimonialsRouter');
const app=express();

// variable;
const port=process.env.PORT || 3000;
const dbUrl=process.env.MONGODB_URL || "";

// connect db
dbConnect(dbUrl);

// # middleware

// always remember for frontend connection middileware
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from the frontend
    credentials: true // Allow sending cookies from the frontend
}));

// other middlewares parsing data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser()); //it is used to parse thr cookie

// routes middilewares
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/testimonials',testimonialsRouter);


app.listen(port,()=>{console.log(`server is start on port ${port}`)})


