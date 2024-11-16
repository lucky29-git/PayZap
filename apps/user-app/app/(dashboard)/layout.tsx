import { SidebarProvider, SidebarTrigger } from "@repo/ui";
import AppbarClient from "../../components/AppbarClient";
import SidebarNew from "../../components/SidebarNew";


export default function Layout( {children} : { children : React.ReactNode}) : JSX.Element{

    return (
        <SidebarProvider>
        <div className='w-full fixed'>
            {/* <div className=' w-full '>
                <AppbarClient/>
            </div> */}
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
    </SidebarProvider>
    )
}