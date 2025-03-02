

import { NextResponse } from 'next/server';
import { User } from "@/models/user";
import { connectDb } from '@/helper/db';
import bcrypt from "bcryptjs";
//create user
export async function POST(request) {
    try {
        await connectDb();
        const {name,email,password,profileUrl,about} =await request.json();
        const user=new User({
            name,
            email,
            password,
            profileUrl,
            about
          });
          user.password= bcrypt.hashSync(user.password, 10);
          const createdUser=await user.save();

          return NextResponse.json(createdUser, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

}
//get all users
export async function GET(request) {
    try {
        await connectDb();
        let user=[];
        user=await User.find().select("-password");

          return NextResponse.json(user, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

}
