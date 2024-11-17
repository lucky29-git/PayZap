import { getServerSession } from 'next-auth'
import AddMoneyCard from '../../../components/AddMoney' 
import BalanceCard from '../../../components/BalanceCard'
import OnRampTransactions from '../../../components/OnRampTransactions'
import { authOptions } from '../../lib/auth'
import prisma from '@repo/db/client'

async function getBalance(){
    const session = await getServerSession(authOptions)
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    })

    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}

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

export default async function Transfer(){
    const bal = await getBalance();
    const transaction = await getOnRampTransactions();

    return <div className=' h-full max-w-screen-xl'>
      
        <div className='grid grid-cols-2 '>

        {/* <div className='flex flex-col justify-center items-center h-full max-w-screen-xl' > */}
        <div className='m-10 flex flex-col gap-4' >
            <AddMoneyCard/>
            <BalanceCard amount={bal.amount} locked={bal.locked}/>
        </div>
        <div className='m-10 mr-10'>
            <OnRampTransactions transactions={transaction}></OnRampTransactions>
        </div>
        </div>
    </div>
}