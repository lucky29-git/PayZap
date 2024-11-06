import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from './button'

interface AppbarProps{
    user?: {
        name?: string | null
    },
    // TODO : put types of onSignin and onSignout 
    onSignin : any,
    onSignout : any
}

export const Appbar = ({
    user, 
    onSignin,
    onSignout
} : AppbarProps) => {

    const session = useSession()
    
    return <div className="flex justify-between border-b px-4">
    <div className="text-lg flex flex-col justify-center">
        PayZap
    </div>
    <div className="flex flex-col justify-center pt-2">
        <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
    </div>
</div>
}