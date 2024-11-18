"use client"
import { Button, CardContent, CardFooter, CardHeader, CardTitle, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui";
import { Card } from "@repo/ui";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createOnRampTxn } from "../app/lib/actions/createOnRampTxn";


export default function AddMoneyCard(){
    const [redirectURl, setRedirectURL] = useState("")
    const [amount, setAmount] = useState(0)
    const [provider, setProvider] = useState("HDFC")
    const router = useRouter()

    return <div >
        <Card className="w-[450px]">
            <CardHeader>
                <CardTitle> Add money </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label>Amount</Label>
                        <Input type="number" placeholder="Amount" onChange= {(e : React.ChangeEvent<HTMLInputElement>) => {setAmount(Number(e.target.value))} }/>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label>Bank</Label>
                        <Select onValueChange={(val) => {
                            setRedirectURL(val)
                            setProvider(val)
                            }}>
                            <SelectTrigger >
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                            <SelectItem value="https://netbanking.hdfcbank.com" >HDFC</SelectItem>
                            <SelectItem value="https://www.axisbank.com/">Axis Bank</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center ">
                <Button onClick={ async () => {
                    router.push(redirectURl)
                    await createOnRampTxn(amount, provider )
                }}>Add money</Button>
            </CardFooter>
        </Card>
    </div>
}