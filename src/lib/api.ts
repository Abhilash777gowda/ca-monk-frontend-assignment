import axios from "axios";

export interface Blog {
    id: string;
    title: string;
    category: string[];
    description: string;
    date: string;
    coverImage: string;
    content: string;
}

export type NewBlog = Omit<Blog, "id">;

const api = axios.create({
    baseURL: "http://localhost:3001",
});

export const getBlogs = async (): Promise<Blog[]> => {
    const response = await api.get<Blog[]>("/blogs");
    return response.data;
};

export const getBlogById = async (id: string): Promise<Blog> => {
    const response = await api.get<Blog>(`/blogs/${id}`);
    return response.data;
};

export const createBlog = async (blog: NewBlog): Promise<Blog> => {
    const response = await api.post<Blog>("/blogs", blog);
    return response.data;
};

// Helper for image generation or placeholders if needed,
// though the assignment provides a sample image URL.
export { api };
