import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex h-screen bg-background">
            <div className="flex flex-1 overflow-hidden">
                <div className="border-r-2 mt-6 w-[250px]"><DashboardSidebar /></div>
                <div className = "flex-1 overflow-y-auto">
                    <main className = "p-5"> 
                        <div className ="border border-b-2 w-full p-3">Navbar</div>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}