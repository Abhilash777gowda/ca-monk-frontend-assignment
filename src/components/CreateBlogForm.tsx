import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog, NewBlog } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

export function CreateBlogForm() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [error, setError] = useState<string | null>(null);

    const mutation = useMutation({
        mutationFn: createBlog,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["blogs"] });
            navigate("/blogs");
        },
        onError: () => {
            setError("Failed to create blog. Please try again.");
        },
    });

    const [formData, setFormData] = useState<NewBlog>({
        title: "",
        category: [],
        description: "",
        content: "",
        coverImage: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg", // Default image
        date: new Date().toISOString(),
    });

    // Helper for comma-separated categories
    const [categoryInput, setCategoryInput] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        const categories = categoryInput.split(",")
            .map((c) => c.trim().toUpperCase())
            .filter((c) => c.length > 0);

        const newBlog: NewBlog = {
            ...formData,
            category: categories.length > 0 ? categories : ["GENERAL"],
            date: new Date().toISOString(),
        };

        if (!newBlog.title || !newBlog.description || !newBlog.content) {
            setError("Please fill in all required fields.");
            return;
        }

        mutation.mutate(newBlog);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 md:p-10 w-full overflow-auto">
            <h1 className="text-3xl font-bold mb-8">Create New Blog</h1>

            {error && (
                <div className="bg-destructive/15 text-destructive p-3 rounded-md mb-6 font-medium">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Enter blog title"
                        required
                        disabled={mutation.isPending}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="description">Short Description *</Label>
                    <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Brief summary of the blog"
                        required
                        disabled={mutation.isPending}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="coverImage">Cover Image URL</Label>
                    <Input
                        id="coverImage"
                        value={formData.coverImage}
                        onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                        placeholder="https://..."
                        disabled={mutation.isPending}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="category">Categories (comma separated)</Label>
                    <Input
                        id="category"
                        value={categoryInput}
                        onChange={(e) => setCategoryInput(e.target.value)}
                        placeholder="TECH, FINANCE, AI"
                        disabled={mutation.isPending}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="content">Content *</Label>
                    <Textarea
                        id="content"
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        placeholder="Write your blog content here..."
                        className="min-h-[300px]"
                        required
                        disabled={mutation.isPending}
                    />
                </div>

                <div className="flex gap-4 pt-4">
                    <Button type="button" variant="outline" onClick={() => navigate("/blogs")} disabled={mutation.isPending}>
                        Cancel
                    </Button>
                    <Button type="submit" disabled={mutation.isPending}>
                        {mutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Create Blog
                    </Button>
                </div>
            </form>
        </div>
    );
}
