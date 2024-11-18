import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import OnRampTransactions from "../../../components/OnRampTransactions";



async function getOnRampTransactions(){
    const session = await getServerSession(authOptions)
    const transaction = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    })
    return transaction.map( t => ({
        time: t.StartTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}

export default async function Transacions(){
    const transaction = await getOnRampTransactions();


    return <div className=' h-full max-w-screen-xl'>
      
   

    {/* <div className='flex flex-col justify-center items-center h-full max-w-screen-xl' > */}
    
    <div className='m-10 mr-10'>
        <OnRampTransactions transactions={transaction}></OnRampTransactions>
    </div>
</div>
}