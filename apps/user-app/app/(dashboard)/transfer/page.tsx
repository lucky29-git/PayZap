import AddMoneyCard from '../../../components/AddMoney' 
import BalanceCard from '../../../components/BalanceCard'
import OnRampTransactions from '../../../components/OnRampTransactions'

export default function Transfer(){

    return <div className=' h-full max-w-screen-xl'>
      
        <div className='grid grid-cols-2 '>

        {/* <div className='flex flex-col justify-center items-center h-full max-w-screen-xl' > */}
        <div className='m-10 flex flex-col gap-4' >
            <AddMoneyCard/>
            <BalanceCard amount={50000} locked={20000}/>
        </div>
        <div className='m-10 mr-10'>
            <OnRampTransactions transactions={{}}></OnRampTransactions>
        </div>
        </div>
    </div>
}