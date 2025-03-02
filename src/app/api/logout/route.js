
import { NextResponse } from "next/server";
export async function POST(request) {

const response= NextResponse.json({
                    message:"success",
                    success:true,
                   },{
                       status:200
                   })
// response.cookies.set("Authtoken","",{
//     expires:new Date(0),
// });
response.cookies.delete("Authtoken");
return response;

}