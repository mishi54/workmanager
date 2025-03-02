import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
export async function GET(request) {
        const authtoken = request.cookies.get('Authtoken')?.value;
        const data=jwt.verify(authtoken,process.env.JWT_TOKEN);
        const user=await User.findById(data._id).select("-password");
                return NextResponse.json(user)
                }