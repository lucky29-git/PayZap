import { getServerSession } from "next-auth"
import SendMoney from "../../../components/SendMoney"
import P2PTransfer from "../../../components/P2Ptransfer"
import { authOptions } from "../../lib/auth"
import prisma from "@repo/db/client"

async function getP2PTransfer(){
    const session = await getServerSession(authOptions)
    const userId = session?.user?.id
    const transactions = await prisma.p2PTransfers.findMany({
        where: {
            OR:[
                {
                    fromUserId: Number(userId)
                },
                {
                    toUserId: Number(userId)
                }
            ]
        }
    })
    return transactions.map(t => ({
        timeStamp: t.timeStamp,
        amount: t.amount,
        toUserId: t.toUserId,
        fromUserId: t.fromUserId
    }))
}

export default async function P2P(){
    const session = await getServerSession(authOptions)
    const p2ptransfers = await getP2PTransfer()

    return <div className="h-full max-w-screen-xl ">
        <div className="grid grid-cols-2 gap-28">
            <div className='m-16 ml-20 w-full' >
                <SendMoney/>
            </div>
            <div className='m-16 ml-20 w-full'>
                <P2PTransfer  p2pTxn={p2ptransfers} userId={session?.user?.id} />
            </div>
        </div>
    </div>
}