"use client"
import { Card } from "@repo/ui/card"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./shadcn/ui/card"
import { Input } from "./shadcn/ui/input"
import { Button } from "./shadcn/ui/button"
import { signIn, useSession } from 'next-auth/react'
import { useState } from "react"
import { useRouter } from 'next/navigation'
export const SigninCard = () => {
    const [ phone, setPhone ] = useState("")
    const [ password, setPassword ] = useState("")
    const router = useRouter()
    const session = useSession()

    return <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col justify-center items-center gap-4 p-4 border-2 rounded max-w-sm  w-full"> 
            <h1 className="text-2xl">PayZap</h1>      
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <label htmlFor="email">Phone number</label>
                <Input type="text" id="number" placeholder="9876543210" onChange = { (e : React.ChangeEvent<HTMLInputElement>) => {
                    setPhone(e.target.value)
                }} />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <label htmlFor="password">Password</label>
                <Input type="password" id="password" placeholder="@Shhhh" onChange = { (e : React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value)
                }} />
            </div>
            <div>
                <Button onClick={ async() => {
                    await signIn("credentials",{
                        phone: phone,
                        password: password,
                        redirect: false
                    })
                    console.log(session);
                    router.push("/")
                } }>Login</Button>
            </div>
        </div>

  </div>
}