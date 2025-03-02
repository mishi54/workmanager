import { NextResponse } from 'next/server';
import { User } from "@/models/user";
import { connectDb } from '@/helper/db';
//get by id
export async function GET(request, { params }) {
    try {
        await connectDb();
        const userId = params?.userId;

        if (!userId) {
            return NextResponse.json({ error: "User ID is required" }, { status: 400 });
        }

        const user = await User.findById(userId).select("-password");

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
//del by id
export async function DELETE(request, { params }) {
    try {
        await connectDb();
        const userId = params?.userId;

        if (!userId) {
            return NextResponse.json({ error: "User ID is required" }, { status: 400 });
        }

        const user = await User.findByIdAndDelete(userId);

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
// update user
export async function PUT(request,{params}) {
   
    try {
        await connectDb();
        const userId = params?.userId;
        console.log(userId);
        const {name,email,password,profileUrl,about} =await request.json();
        const user= await User.findById(userId);
      
            user.name=name;
            user.email=email;
            user.password=password;
            user.profileUrl=profileUrl;
            user.about=about;

        
          const UpdatedUser=await user.save();

          return NextResponse.json(UpdatedUser, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

}