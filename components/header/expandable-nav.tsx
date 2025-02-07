import { redirect } from "next/navigation";
import { ExpandableTabs, Tab } from "../ui/expandable-tabs"
import { Bell, Home, Settings, Shield, Mail, Folder, LayoutGrid, UserRound, FileText, Lock } from "lucide-react";


const ExpandableNav = () => {
    const tabs: Tab[] = [
        { title: "Home", icon: Home, href: "/" },
        { title: "About", icon: UserRound, href: "/about" },
        { title: "Projects", icon: LayoutGrid, href: "/projects" },
    ]

    const handleTabChange = (index: number | null) => {
        console.log("tab changed", index)
        redirect(tabs[index!].href!)
    }
    return (
        <>
            <ExpandableTabs tabs={tabs} onChange={handleTabChange} />
        </>
    )
}

export { ExpandableNav }
