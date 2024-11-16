"use client"
import { Button, CardContent, CardFooter, CardHeader, CardTitle, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui";
import { Card } from "@repo/ui";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function AddMoneyCard(){
    const [redirectURl, setRedirectURL] = useState("")
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
                        <Input type="number" placeholder="Amount"/>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label>Bank</Label>
                        <Select onValueChange={(val) => {setRedirectURL(val)}}>
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
                <Button onClick={() => {
                    router.push(redirectURl)
                }} >Add money</Button>
            </CardFooter>
        </Card>
    </div>
}