import { Home, Clock3, ArrowLeftRight, ChevronsLeftRight } from "lucide-react"
import { 
    Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,

} from "@repo/ui"

const items = [
    {
        title: "Home",
        url: "dashboard",
        icon: Home
    },
    {
        title: "Transfer",
        url: "transfer",
        icon: ArrowLeftRight
    },
    {
        title: "Transactions",
        url: "transactions",
        icon: Clock3
    },
    {
        title: "P2P transfer",
        url: "p2p",
        icon: ChevronsLeftRight
    }
]

export default function SidebarNew(){
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel> Menu </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon/>
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}