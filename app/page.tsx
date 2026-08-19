import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Dashboard from "@/components/layout/Dashboard";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-200 via-sky-100 to-yellow-100">
            <Header />

            <main className="grid grid-cols-[200px_1fr]">
                <Sidebar />
                <Dashboard />
            </main>
        </div>
    );
}