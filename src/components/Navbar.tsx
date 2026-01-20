import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Navbar() {
    const navigate = useNavigate();
    const { user } = useAuth();

    const navLinks = [
        "Tools", "Practice", "Events", "Job Board", "Points"
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-8">
                <div className="flex items-center gap-2 font-bold text-xl tracking-tight cursor-pointer" onClick={() => navigate("/")}>
                    <div className="bg-primary text-primary-foreground p-1 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 10v6M2 10v6" /><path d="M22 16a6 6 0 0 1-12 0" /><path d="M14 16a6 6 0 0 1-12 0" /><path d="M12 10v6" /><path d="M12 3a7 7 0 0 1 7 7v6" /><path d="M5 10V9a7 7 0 0 1 7-7" /></svg>
                    </div>
                    <span>CA MONK</span>
                </div>

               

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    {user ? (
                        <Button size="sm" className="hidden sm:flex bg-blue-600 hover:bg-blue-700 text-white rounded-full pl-2 pr-4 transition-all" onClick={() => navigate("/profile")}>
                            <Avatar className="w-6 h-6 mr-2">
                                <AvatarImage src={user.avatar} />
                                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            {user.name.split(' ')[0]}
                        </Button>
                    ) : (
                        <Button variant="ghost" className="hidden sm:flex" size="sm" onClick={() => navigate("/login")}>Log in</Button>
                    )}

                    <Button size="icon" variant="outline" className="sm:hidden" onClick={() => navigate("/blogs/create")}>
                        <PlusCircle className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="hidden sm:flex gap-2" onClick={() => navigate("/blogs/create")}>
                        <PlusCircle className="h-4 w-4" /> New Blog
                    </Button>
                </div>
            </div>
        </header>
    );
}
