import './App.css'

import { useState } from "react"

import Navbar from "@/components/Navbar"
import Home from "@/components/pages/Home"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function App() {
    const [pulsingCard, setPulsingCard] = useState<string | null>(null);

    return (
        <>
            <main className="min-h-svh animated-gradient dark">
                <SidebarProvider>
                    <div className="flex min-h-svh w-full">

                        <Navbar onNavigate={setPulsingCard} />
                        <div className="min-w-0 flex-1 p-4">
                            <div className="fixed top-2 left-2 z-50 md:hidden">
                                <SidebarTrigger className="bg-background shadow-md" />
                            </div>
                            <Home pulsingCard={pulsingCard} />
                        </div>
                    </div>
                </SidebarProvider>
            </main>
        </>
    )
}
