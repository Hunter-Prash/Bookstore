import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors'


import bookRoute from './routes/book.route.js'
import  userRoute from './routes/user.route.js'


dotenv.config()
const app = express();
app.use(express.json())
app.use(cors())

const PORT=process.env.PORT ||  3000;
const dburi=process.env.uri;

//connect to db
const connectDB=async()=>{
    try{
        await mongoose.connect(dburi)
        console.log('DB connected succesfully')

    }
    catch(err){
        console.error('DB connection error',err)
        process.exit(1)
    }
};
connectDB();

app.use('/book',bookRoute)
app.use('/users',userRoute)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
