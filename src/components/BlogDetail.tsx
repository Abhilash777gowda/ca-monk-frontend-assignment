import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/lib/api";
import { useParams, useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

import { ArrowLeft, Share2, ThumbsUp, MessageSquare } from "lucide-react";

export function BlogDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data: blog, isLoading, error } = useQuery({
        queryKey: ["blog", id],
        queryFn: () => getBlogById(id!),
        enabled: !!id,
    });

    if (!id) {
        return (
            <div className="flex h-full items-center justify-center text-muted-foreground">
                Select a blog to view details
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="space-y-6 p-10 max-w-4xl mx-auto">
                <div className="flex gap-4">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-20" />
                </div>
                <Skeleton className="h-16 w-3/4" />
                <Skeleton className="h-10 w-32" />
                <Skeleton className="h-64 w-full rounded-xl" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-10 text-red-500 text-center">
                Error loading blog details.
            </div>
        );
    }

    if (!blog) return null;

    // Static data for design matching since API doesn't have it
    const readTime = "5 mins";
    const authorName = "Arjun Mehta";
    const authorRole = "Senior Financial Analyst";

    return (
        <div className="flex flex-col h-full bg-background">
            {/* Mobile Back Button */}
            <div className="p-4 border-b flex items-center md:hidden sticky top-0 bg-background z-10">
                <Button variant="ghost" size="sm" onClick={() => navigate("/blogs")}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to list
                </Button>
            </div>

            <div className="flex-1 overflow-auto">
                <div className="max-w-3xl mx-auto py-12 px-6 md:px-10">

                    {/* Header Meta */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 mb-4 uppercase tracking-wider">
                        <span>{blog.category[0] || "General"}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground normal-case font-medium">{readTime} read</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-8 leading-[1.15]">
                        {blog.title}
                    </h1>

                    {/* Cover Image */}
                    <div className="mb-10 rounded-xl overflow-hidden shadow-sm border">
                        <img
                            src={blog.coverImage}
                            alt={blog.title}
                            className="w-full h-[400px] object-cover"
                        />
                    </div>

                    {/* Action Bar */}
                    <div className="mb-10">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 font-semibold">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share Article
                        </Button>
                    </div>

                    {/* Meta Stats Box */}
                    <div className="grid grid-cols-3 bg-muted/30 rounded-lg p-4 mb-10 border border-border">
                        <div className="flex flex-col items-center justify-center border-r border-border/50">
                            <span className="text-xs uppercase text-muted-foreground font-bold mb-1">Category</span>
                            <span className="font-semibold">{blog.category[0]} & AI</span>
                        </div>
                        <div className="flex flex-col items-center justify-center border-r border-border/50">
                            <span className="text-xs uppercase text-muted-foreground font-bold mb-1">Read Time</span>
                            <span className="font-semibold">{readTime}</span>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-xs uppercase text-muted-foreground font-bold mb-1">Date</span>
                            <span className="font-semibold">{new Date(blog.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                        </div>
                    </div>

                    {/* Content */}
                    <article className="prose prose-lg dark:prose-invert max-w-none text-foreground/80 leading-loose space-y-6">
                        <p className="lead text-xl text-foreground font-medium">
                            {blog.description}
                        </p>
                        <hr className="my-8 border-border" />
                        <div className="whitespace-pre-wrap font-serif text-lg">
                            {blog.content}
                            {/* Static dummy content extension for visuals if content is short */}
                            {blog.content.length < 500 && (
                                <>
                                    <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground sans-serif">The Rise of Automated Accounting</h3>
                                    <p>
                                        Automation is no longer a buzzword; it's a reality. Routine tasks like data entry, reconciliation,
                                        and payroll processing are being automated at an unprecedented pace. This shift allows finance professionals
                                        to focus on high-value activities such as:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 mt-4">
                                        <li>Strategic financial planning and analysis (FP&A)</li>
                                        <li>Risk management and compliance auditing</li>
                                        <li>Advisory services for business growth and sustainability</li>
                                    </ul>

                                    <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground sans-serif">Blockchain: Beyond Cryptocurrency</h3>
                                    <p>
                                        While Bitcoin grabs the headlines, the underlying technology—blockchain—is quietly revolutionizing auditing.
                                        The immutable ledger provides a "single source of truth" that could potentially eliminate the need for sampling
                                        in audits, allowing for 100% verification of transactions.
                                    </p>

                                    <blockquote className="border-l-4 border-blue-600 pl-6 py-2 my-8 italic text-xl bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
                                        "The accountant of the future will be a data scientist, a storyteller, and a strategic partner, all rolled into one."
                                    </blockquote>
                                </>
                            )}
                        </div>
                    </article>

                    <hr className="my-12" />

                    {/* Author Footer */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${authorName}`} alt="Author" className="w-full h-full" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground font-medium">Written by <span className="text-foreground font-bold">{authorName}</span></p>
                                <p className="text-xs text-muted-foreground">{authorRole}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-muted-foreground">
                            <ThumbsUp className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
                            <MessageSquare className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
                        </div>
                    </div>

                    <div className="h-20"></div> {/* Bottom spacer */}
                </div>
            </div>
        </div>
    );
}
