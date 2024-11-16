import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui";


export default function BalanceCard( {amount, locked} : {
    amount: number, 
    locked: number
}): JSX.Element{

    return <div>
        <Card className="w-[450px]">
            <CardHeader>
                <CardTitle>Balance</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between border-b border-slate-300 pt-2 my-2" >
                    <div>Unlocked balance</div>
                    <div> {amount/100} INR </div>
                </div>
                <div className="flex justify-between border-b border-slate-300 pt-2 my-2" >
                    <div>Total locked balance</div>
                    <div> {locked/100} INR </div>
                </div>
                <div className="flex justify-between border-b border-slate-300 pt-2 my-2" >
                    <div>Total balance</div>
                    <div> {(amount + locked)/100} INR </div>
                </div>
            </CardContent>
            
        </Card>

    </div>
}