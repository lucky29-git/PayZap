"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import prisma from "@repo/db/client"

export async function p2pSendMoney(to: string, amount: number){
    console.log("hello from p2pSendmoney");
    const session = await getServerSession(authOptions)
    const userId = session?.user?.id
    if(!userId){
        return "Error while sending money"
    }
    const toUser = await prisma.user.findFirst({
        where: {
            number: to
        }
    })

    if(!toUser){
        return "User not found"
    }

    await prisma.$transaction(async(trxn) => {
        await trxn.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(userId)} FOR UPDATE`;
        const fromBalance = await trxn.balance.findUnique({
            where: {
                userId: Number(userId)
            }
        })
        if(!fromBalance || fromBalance.amount < amount){
            throw new Error("Insufficient funds")
        }

        await trxn.balance.update({
            where: {
                userId: Number(userId)
            },
            data:{
                amount: {
                    decrement: amount
                }
            }
        })

        await trxn.balance.update({
            where:{
                userId: Number(toUser.id)
            },
            data: {
                amount: {
                    increment: amount
                }
            }
        })

        await prisma.p2PTransfers.create({
            data: {
                amount: amount,
                timeStamp: new Date(),
                fromUserId: Number(userId),
                toUserId: Number(toUser.id)
            }
        })
    })
}