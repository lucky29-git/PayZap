"use client"

import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil'
import { SidebarProvider, SidebarTrigger } from '@repo/ui'
import SidebarNew from '../components/SidebarNew'
import AppbarClient from '../components/AppbarClient'
export const Providers = ({children} : {
    children : React.ReactNode
}) => {
    return <RecoilRoot>
    <SessionProvider>
        
                {/* <SidebarProvider>
                    <div className='w-full fixed'>
                        <div className=' w-full '>
                            <AppbarClient/>
                        </div>
                        <div className='flex flex-1'>
                            <div>
                                <SidebarNew/>
                            </div>
                            <main  >
                                <SidebarTrigger/>
                                {children}
                            </main>
                        </div>
                        
                    </div>
                </SidebarProvider> */}
                {children}
           
    </SessionProvider>
    </RecoilRoot>
}