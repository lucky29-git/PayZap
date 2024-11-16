import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui"

export default function OnRampTransactions( {transactions}: {
    transactions: {
        time: Date, 
        amount: number, 
        status: string,          // put OnRampStatus
        provider: string
    }[]
}){
    if(!transactions.length){
        return <div>
            <Card className="w-[550px]">
                <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-center py-8">
                        No Recent Transactions
                    </div>
                </CardContent>
            </Card>
        </div>
    }

    return <div>
        <Card className="w-[550px]">
            <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
                {transactions.map(tran => (
                    <div className="flex justify-between">
                        <div>
                            <div className="text-sm ">
                                Received INR 
                            </div>
                            <div className="text-xs text-slate-600">
                                {tran.time.toDateString()}
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            +Rs {tran.amount/ 100}
                        </div>
                    </div>
                ) )}
            </CardContent>

        </Card>
    </div>
}