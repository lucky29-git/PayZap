"use client"
// import { PrismaClient } from "@repo/db/client"
// const client = new PrismaClient()

import { useSession } from 'next-auth/react'
import {Appbar} from '@repo/ui/appbar'

export default function Home() {
  const session = useSession()
  return (
    <div>
      <Appbar></Appbar>

    </div>
  );
}
