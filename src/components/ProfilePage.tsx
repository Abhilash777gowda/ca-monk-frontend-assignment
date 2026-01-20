import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User, Mail, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function ProfilePage() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    if (!user) {
        navigate("/login");
        return null;
    }

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div className="container mx-auto py-10 px-4 max-w-2xl">
            <Card>
                <CardHeader className="text-center pb-2">
                    <div className="mx-auto w-24 h-24 mb-4 relative">
                        <Avatar className="w-24 h-24 cursor-pointer ring-4 ring-background shadow-lg">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>
                    </div>
                    <CardTitle className="text-3xl font-bold">{user.name}</CardTitle>
                    <CardDescription className="text-lg">{user.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                    <div className="grid gap-4">
                        <div className="flex items-center p-4 rounded-lg bg-muted/50 border">
                            <User className="w-5 h-5 mr-3 text-muted-foreground" />
                            <div className="flex-1">
                                <p className="text-sm font-medium text-muted-foreground">Full Name</p>
                                <p className="font-medium">{user.name}</p>
                            </div>
                        </div>

                        <div className="flex items-center p-4 rounded-lg bg-muted/50 border">
                            <Mail className="w-5 h-5 mr-3 text-muted-foreground" />
                            <div className="flex-1">
                                <p className="text-sm font-medium text-muted-foreground">Email Address</p>
                                <p className="font-medium">{user.email}</p>
                            </div>
                        </div>

                        <div className="flex items-center p-4 rounded-lg bg-muted/50 border">
                            <Shield className="w-5 h-5 mr-3 text-muted-foreground" />
                            <div className="flex-1">
                                <p className="text-sm font-medium text-muted-foreground">Account Status</p>
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    <p className="font-medium text-green-600">Active Member</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <Button variant="destructive" className="w-full" onClick={handleLogout}>
                            <LogOut className="mr-2 h-4 w-4" />
                            Log Out
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
