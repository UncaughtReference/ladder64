import './App.css'

import Navbar from "@/components/Navbar"
import Home from "@/components/pages/Home"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function App() {
    return (
        <>
            <main className="min-h-svh animated-gradient dark">
                <SidebarProvider>
                    <div className="flex min-h-svh w-full">

                        <Navbar />
                        <div className="min-w-0 flex-1 p-4">
                            <div className="md:hidden">
                                <SidebarTrigger />
                            </div>
                            <Home />
                        </div>
                    </div>
                </SidebarProvider>
            </main>
        </>
    )
}
