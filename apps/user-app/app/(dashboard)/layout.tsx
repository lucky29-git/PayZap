import { SidebarProvider, SidebarTrigger } from "@repo/ui";
import SidebarNew from "../../components/SidebarNew";

export function Layout( {children} : {children : React.ReactNode} ){
    return (
        <SidebarProvider>
            <SidebarNew/>
                <main>
                    <SidebarTrigger/>
                    {children}
                </main>
        </SidebarProvider>

    )
}