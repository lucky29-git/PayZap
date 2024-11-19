"use client"
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Label } from "@repo/ui";
import { useState } from "react";
import { p2pSendMoney } from "../app/lib/actions/p2pSendMoney";


export default function SendMoney(){
    const [to, setTo] = useState("")
    const [amount, setAmount] = useState(0)
    

    return <div>
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle >Send Money</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-4 ">
                    <div className=" flex flex-col space-y-1.5">
                        <Label>Number</Label>
                        <Input placeholder="9876543210" onChange={(e) => (setTo(String(e.target.value)))} />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label>Amount</Label>
                        <Input placeholder="Amount" type="number" onChange={(e) => (setAmount(Number(e.target.value)))} />
                    </div>
                    <div className="flex flex-col justify-center mt-5">
                        <Button onClick={async() => {
                            console.log("hello from button");
                            console.log(amount);
                            console.log("to" + to);
                            await p2pSendMoney(to, Number(amount)*100)
                        }}>Send</Button>
                    </div>
                </div>
            </CardContent>
        </Card>

    </div>
}