import { signIn, signOut, useSession } from 'next-auth/react'

export const Appbar = () => {
    const session = useSession()
    return <div>
        <button onClick={ () => signIn()}>
            Sign in
        </button>
        <br />
        <br />
        <button onClick = { () => signOut()}>
            Logout
        </button>
        <br />
        <br />
        {JSON.stringify(session)}
    </div>
}