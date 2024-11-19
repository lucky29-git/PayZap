import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";


export default function P2PTransfer({p2pTxn, userId} : {
    p2pTxn : {
        timeStamp: Date, 
        amount: number,
        fromUserId: number,
        toUserId: number
    }[] ,
    userId : number

}){
    

    if(!p2pTxn.length){
        return <div>
            <Card>
                <CardHeader>
                    <CardTitle>Recent P2P Transfers</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-center py-8">
                        No recent Transfers 
                    </div>
                </CardContent>
            </Card>
        </div>
    }

    return <div>
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Recent P2P Transfers</CardTitle>
            </CardHeader>
            <CardContent>
                {p2pTxn.map((txn) => (
                    <div className="flex justify-between">
                        <div>
                            <div className="text-sm">
                                {Number(txn.fromUserId) === userId ? (
                                    <div>
                                        Send INR
                                    </div>
                                ) : (
                                    <div>
                                        Received INR
                                    </div>
                                )  }
                            </div>
                            <div className="text-xs text-slate-600">
                                {new Date(txn.timeStamp).toDateString()}
                            </div>
                        </div>
                        <div>
                            {txn.fromUserId === userId ? `-Rs ${txn.amount/100}` : `+Rs ${txn.amount/100}`}
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    </div>
}