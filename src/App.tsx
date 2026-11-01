import './App.css'

import { useEffect, useState } from "react"

import Navbar from "@/components/Navbar"
import Home from "@/components/pages/Home"
import List from "@/components/pages/List"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function App() {
    const [page, setPage] = useState<"home" | "list">(() =>
        window.location.hash === "#/list" ? "list" : "home"
    )
    const [pulsingCard, setPulsingCard] = useState<string | null>(null)

    useEffect(() => {
        const syncPage = () => {
            setPage(window.location.hash === "#/list" ? "list" : "home")
        }

        window.addEventListener("hashchange", syncPage)
        return () => window.removeEventListener("hashchange", syncPage)
    }, [])

    const navigateToPage = (nextPage: "home" | "list") => {
        window.location.hash = nextPage === "list" ? "/list" : "/"
    }

    return (
        <>
            <main className="min-h-svh animated-gradient dark">
                <SidebarProvider>
                    <div className="flex min-h-svh w-full">

                        <Navbar onNavigate={setPulsingCard} onRouteChange={navigateToPage} />
                        <div className="min-w-0 flex-1 p-4">
                            <div className="fixed top-2 left-2 z-50 md:hidden">
                                <SidebarTrigger className="bg-background shadow-md" />
                            </div>
                            {page === "home" ? <Home pulsingCard={pulsingCard} /> : <List />}
                        </div>
                    </div>
                </SidebarProvider>
            </main>
        </>
    )
}
