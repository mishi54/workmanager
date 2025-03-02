import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export async function POST(request) {
    const{email,password}=await request.json();
    try {
                await connectDb();
              
                const user=await User.findOne({
                    email:email,
                });
                if(user==null){
                    throw new Error("email not found");
                    
                }
                const pass= bcrypt.compareSync(password,user.password);
                if(!pass){
                    throw new Error("password not matched");
                }
                var token = jwt.sign({ 
                    _id:user._id,
                    name:user.name,
                 },process.env.JWT_TOKEN);
                 console.log(token);
                const response= NextResponse.json({
                    message:"success",
                    success:true,
                    user:user,
                   },{
                       status:200
                   })
response.cookies.set("Authtoken",token,{
    expiresIn:"1d",
    httpOnly:true,
});
return response;

    } catch (error) {
        return NextResponse.json({
         message:error.message,
         success:false,
        },{
            status:500
        })
        
    }    
}