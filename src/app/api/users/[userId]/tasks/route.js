import { connectDb } from "@/helper/db";
import { Task } from "@/models/tasks";
import { NextResponse } from "next/server";
export async function GET(request,context){
    try {
        await connectDb();
        const params = await context.params; 
        const userId = params?.userId; 

        const tasks = await Task.find(
            {
                userId:userId,
            }
        )
        return NextResponse.json(tasks,{
            status:201
        })
        
    } catch (error) {
       
        return NextResponse.json({ message: "Failed to find task of the user", error: error.message }, { status: 500 });
    }
}
