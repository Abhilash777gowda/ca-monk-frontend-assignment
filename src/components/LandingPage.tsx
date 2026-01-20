import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-background text-center px-4">
            <div className="max-w-3xl space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 pb-2">
                        CA Monk Blog
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Master the art of Finance, Accounting, and Career Growth with our curated insights.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                    <Button
                        size="lg"
                        className="text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 py-6 shadow-lg shadow-blue-600/20 transition-all hover:scale-105"
                        onClick={() => navigate("/blogs")}
                    >
                        Go to Blog <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="text-lg rounded-full px-10 py-6"
                        onClick={() => navigate("/login")}
                    >
                        Join Community
                    </Button>
                </div>

                <div className="pt-20 grid grid-cols-3 gap-8 text-center opacity-70">
                    <div>
                        <div className="text-3xl font-bold text-foreground">500+</div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wider">Articles</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-foreground">10k+</div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wider">Readers</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-foreground">Top 1%</div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wider">Insights</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
