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
} from "@/components/ui/sidebar"

import { House } from "lucide-react"

export default function Navbar() {
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
                                    <SidebarMenuButton>
                                        <House />Home
                                    </SidebarMenuButton>
                                    <SidebarMenuSub>
                                        <SidebarMenuSubButton>
                                            Recent Submissions
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
        </div>
    )
}
