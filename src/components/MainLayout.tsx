import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Outlet } from "react-router-dom";

export function MainLayout() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
            <Navbar />
            <div className="flex-1 w-full">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
