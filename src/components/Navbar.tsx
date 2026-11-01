import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSubButton,
    SidebarMenuSub,
    useSidebar,
} from "@/components/ui/sidebar"

import { House, ScrollText } from "lucide-react"

export default function Navbar({
    onNavigate,
    onRouteChange,
}: {
    onNavigate: (id: string) => void
    onRouteChange: (page: "home" | "list") => void
}) {
    const { setOpenMobile } = useSidebar()

    return (
        <div className="bg-gradient-to-r from-violet-500 via-pink-500 to-blue-400 p-[1px]">
            <div className="bg-background">
                <Sidebar>
                    <SidebarHeader>
                        <div className="flex gap-2 items-center">
                            <img src={`${import.meta.env.BASE_URL}logo.png`} className="w-[40px]" />ladder64
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton onClick={() => {
                                        onRouteChange("home")
                                        setOpenMobile(false)
                                    }}>
                                        <House />Home
                                    </SidebarMenuButton>
                                    <SidebarMenuSub>
                                        <SidebarMenuSubButton href="#recentSubmissions" onClick={() => {
                                            onNavigate("recentSubmissions")
                                            setOpenMobile(false)
                                        }}>
                                            Recent Submissions
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSub>
                                    <SidebarMenuSub>
                                        <SidebarMenuSubButton href="#moderators" onClick={() => {
                                            onNavigate("moderators")
                                            setOpenMobile(false)
                                        }}>
                                            Moderators
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSub>
                                </SidebarMenuItem>
                                <SidebarMenuItem>
                                    <SidebarMenuButton onClick={() => {
                                        onRouteChange("list")
                                        setOpenMobile(false)
                                    }}>
                                        <ScrollText />List
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroup>
                    </SidebarContent>
                    <SidebarFooter>
                        @UncaughtReference
                    </SidebarFooter>
                </Sidebar>
            </div>
        </div >
    )
}
