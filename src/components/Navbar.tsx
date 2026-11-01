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

import { House } from "lucide-react"

export default function Navbar({ onNavigate }: { onNavigate: (id: string) => void }) {
    const { setOpenMobile } = useSidebar()

    return (
        <div className="bg-gradient-to-r from-violet-500 via-pink-500 to-blue-400 p-[1px]">
            <div className="bg-background">
                <Sidebar>
                    <SidebarHeader>
                        ladder64
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton onClick={() => setOpenMobile(false)}>
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
