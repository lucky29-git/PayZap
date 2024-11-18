"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";
// not taking userId as input for security purposes 
export async function createOnRampTxn(amount: number, provider: string){
    const session = await getServerSession(authOptions)
    const userId = session?.user?.id

    // this token comes from bank server ( rn, putting some random stuff)
    // const token = axios.fetch("http://api.hdfcbank.com/getToken", {
    //     amount : amount
    // })
    const token = Math.random().toString(  )
    console.log("from on ramp");
    try{
    if(!userId){
        return{
            message: "User not logged in"
        }
    }
    await prisma.onRampTransaction.create({
        data: {
            userId: Number(userId),
            amount: amount*100,
            provider: provider,
            StartTime: new Date(),
            status: "Processing",
            token: token
        }
    })

    return {
        message: "On ramp Transaction added"
    }
    } catch(e){
        console.error(e)
    }
}