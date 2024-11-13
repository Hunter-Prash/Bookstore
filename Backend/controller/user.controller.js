import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

//The below function is to create a user
export const signup=async(req,res)=>{
    try{
        const {fullname,email,password}=req.body;
        const user=await User.findOne({email})//finding wether user exists in db or not based on the email...

        if(user){
            return res.status(400).json({message:"User already exists"})
        }

        const hashpassword=await bcryptjs.hash(password,10)//Using Bcrypt so that the password is not visible in the database
        
        const createdUser=new User({
            fullname:fullname,
            email:email,
            password:hashpassword
        });
        
        await createdUser.save()
        res.status(201).json({message:"User created successfully",
            user:{
                _id:createdUser._id,
                fullname:createdUser.fullname,
                email:createdUser.email
            }
        })
        
    }
    catch(err){
        res.status(500).json({message:"Internal server error"})
        console.error(err);
    }
}

//This function is used to LOGIN a user
export const login=async(req,res)=>{
    try{
        const {email,password}=req.body;

        const  user=await User.findOne({email})//is the password stored in the users collection in the database so user variable is an object here 

        const match=await bcryptjs.compare(password,user.password)//The first password comes from body, and then we access user.password from the above variable as it is a object
        
        if(!user || !match){
            return res.status(400).json({message:"Invalid email or password"})
        }
        else{
            res.status(200).json({message:"login successfull",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }
    } catch(err){
        console.error(err)
        return res.status(500).json({message:"Internal server error"})      
    }
}

