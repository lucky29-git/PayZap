import { Home, Clock3, ArrowLeftRight } from "lucide-react"
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
        url: "#",
        icon: Home
    },
    {
        title: "Transfer",
        url: "#",
        icon: ArrowLeftRight
    },
    {
        title: "Transactions",
        url: "#",
        icon: Clock3
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