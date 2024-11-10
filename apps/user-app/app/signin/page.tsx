import { SigninCard } from "@repo/ui"
import { signIn } from "next-auth/react"

export default function Signin(){
    return <div>
        <SigninCard></SigninCard>
    </div>
}