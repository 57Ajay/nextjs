import { NextResponse } from "next/server"
import { users } from "@/app/util/db";
export const GET = ()=>{
    const data = users;

    return NextResponse.json({data});
};
