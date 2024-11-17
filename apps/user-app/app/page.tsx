// "use client"
// import { PrismaClient } from "@repo/db/client"
// const client = new PrismaClient()

import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from './lib/auth'
import { signIn, signOut, useSession } from 'next-auth/react'
import {Appbar} from '@repo/ui/appbar'

export default async function Home() {
  const session = await getServerSession(authOptions)

  if(session?.user){
    redirect('/dashboard')
  } else{
    redirect('/signin')
  }
  // return (
  //   <div>
  //     {/* <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user}></Appbar> */}

  //   </div>
  // );
}
