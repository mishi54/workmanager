import { connectDb } from "@/helper/db";
import { Task } from "@/models/tasks";
import { NextResponse } from "next/server";

export async function GET(request,context){
    try {
        await connectDb();
        const params = await context.params; 
        const taskId = params?.taskId; 
        if (!taskId) {
            return NextResponse.json({ message: "Task ID is missing" }, { status: 400 });
        }
        const TasktobeDel = await Task.findById(taskId);
        return NextResponse.json(TasktobeDel,{
            status:201
        })
        
    } catch (error) {
       
        return NextResponse.json({ message: "Failed to del task", error: error.message }, { status: 500 });
    }
}

export async function DELETE(request,context){
    try {
        await connectDb();
        const params = await context.params; 
        const taskId = params?.taskId; 
        if (!taskId) {
            return NextResponse.json({ message: "Task ID is missing" }, { status: 400 });
        }
        const TasktobeDel = await Task.findByIdAndDelete(taskId);
        return NextResponse.json(TasktobeDel,{
            status:201
        })
        
    } catch (error) {
       
        return NextResponse.json({ message: "Failed to del task", error: error.message }, { status: 500 });
    }
}


export async function PUT(request, context) {
    try {
        await connectDb();
        const params = await context.params; 
        const taskId = params?.taskId; 
        if (!taskId) {
            return NextResponse.json({ message: "Task ID is missing" }, { status: 400 });
        }
        const { title, content, status } = await request.json();
        const modifiedTask = await Task.findById(taskId);
        if (!modifiedTask) {
            return NextResponse.json({ message: "Task not found" }, { status: 404 });
        }
        modifiedTask.title = title;
        modifiedTask.content = content;
        modifiedTask.status = status;
        await modifiedTask.save();

        return NextResponse.json(modifiedTask, { status: 201 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Failed to modify task", error: error.message }, { status: 500 });
    }
}
