import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/lib/api";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate, useParams } from "react-router-dom";
import { cn } from "@/lib/utils";

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return "Just now";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(date);
};

// Helper for category icons could be expanded, using simple mapping for now
import { BookOpen, Briefcase, Calculator, Cpu, User } from "lucide-react";

const getCategoryIcon = (category: string) => {
    switch (category.toUpperCase()) {
        case "FINANCE": return <Calculator className="w-3 h-3" />;
        case "TECH": return <Cpu className="w-3 h-3" />;
        case "CAREER": return <Briefcase className="w-3 h-3" />;
        case "EDUCATION": return <BookOpen className="w-3 h-3" />;
        default: return <User className="w-3 h-3" />;
    }
};

export function BlogList() {
    const { data: blogs, isLoading, error } = useQuery({
        queryKey: ["blogs"],
        queryFn: getBlogs,
    });

    const navigate = useNavigate();
    const { id: activeId } = useParams();

    if (isLoading) {
        return (
            <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-32 w-full rounded-xl" />
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 text-center text-red-500">
                Error loading blogs. Please try again later.
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4 pb-20">
            <h2 className="text-xl font-bold mb-2 px-1">Latest Articles</h2>
            {blogs?.map((blog) => {
                const isActive = activeId === blog.id;
                const primaryCategory = blog.category[0] || "General";

                return (
                    <Card
                        key={blog.id}
                        className={cn(
                            "cursor-pointer transition-all duration-200 border-0 shadow-sm hover:shadow-md relative overflow-hidden bg-card",
                            isActive
                                ? "ring-2 ring-blue-600 bg-blue-50/50 dark:bg-blue-950/20"
                                : "hover:bg-accent/50"
                        )}
                        onClick={() => navigate(`/blogs/${blog.id}`)}
                    >
                        {/* Active Indicator Strip */}
                        {isActive && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600" />
                        )}

                        <div className="p-5">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2 text-blue-600 font-semibold text-xs tracking-wide uppercase">
                                    {getCategoryIcon(primaryCategory)}
                                    <span>{primaryCategory}</span>
                                </div>
                                <span className="text-muted-foreground text-xs font-medium">
                                    {formatDate(blog.date)}
                                </span>
                            </div>

                            <CardTitle className="text-lg font-bold leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                                {blog.title}
                            </CardTitle>

                            <CardDescription className="line-clamp-2 text-sm leading-relaxed mb-4">
                                {blog.description}
                            </CardDescription>

                            <div className="flex items-center gap-2 mt-auto">
                                <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-gray-500/10">
                                    {blog.id === "1" ? "Featured" : "Study Tips"}
                                </span>
                            </div>
                        </div>
                    </Card>
                );
            })}
        </div>
    );
}
