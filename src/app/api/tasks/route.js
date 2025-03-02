import { connectDb } from "@/helper/db";
import getResponesMessage from "@/helper/getResponesMessage";
import { Task } from "@/models/tasks";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
export async function GET(request){
try {
    await connectDb();
   const alltask=await Task.find();
    return NextResponse.json(
        alltask,{
            status:201
        }
    )
    
} catch (error) {
    console.log(error);
    return getResponesMessage("Failed to create Task",500,false);
}
}
//create
export async function POST(request){

try {
    await connectDb();
    const {title,content,status,userId}= await request.json();
     const authtoken = request.cookies.get('Authtoken')?.value;
    const data=jwt.verify(authtoken,process.env.JWT_TOKEN);
    const task=new Task({
        title,
        content,
        status: status || "pending",
        userId:data._id,
    });
    const createdTask=await task.save();
    return NextResponse.json(createdTask,{status:201});
} catch (error) {
    console.log(error);
    return getResponesMessage("Failed to create Task",500,false);
}
}