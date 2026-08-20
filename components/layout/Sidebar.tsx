import { PanelLeft } from "lucide-react"
import { PanelLeftOpen} from "lucide-react"

import { Menu } from "lucide-react"

import Image from "next/image"

export default function Sidebar () {
    return(
        <aside className="w-60 flex flex-col bg-cyan-600 p-6">

            {/* TOP */}
            <div className="space-y-2.5 mt-1.1">
                <p>Dashboard</p>
                <p>Projects</p>
                <p>Tasks</p>
                <p>Calendar</p>
                <p>Analytics</p>
            </div>

            {/* MIDDLE */}
            <div className="mt-50 space-y-2.5">
                <p>My Projects</p>
                <p>Favourites</p>
            </div>

            {/* BOTTOM */}
            <div className="mt-auto space-y-2.5">
                <p>Settings</p>
                <p>Help</p>
            </div>

        </aside>
    )
}