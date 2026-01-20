import { Routes, Route, Outlet, useMatch } from "react-router-dom";
import { BlogList } from "@/components/BlogList";
import { BlogDetail } from "@/components/BlogDetail";
import { CreateBlogForm } from "@/components/CreateBlogForm";
import { Layout as MainLayout } from "@/components/MainLayout"; // Wait, I named it MainLayout, let's fix import below
import { MainLayout as AppLayout } from "@/components/MainLayout";
import { LandingPage } from "@/components/LandingPage";
import { ProfilePage } from "@/components/ProfilePage";
import { LoginPage } from "@/components/LoginPage";
import { SignupPage } from "@/components/SignupPage";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { cn } from "@/lib/utils";

function BlogLayout() {
  // Check if we are on a detail or create page to toggle visibility on mobile
  const matchDetail = useMatch("/blogs/:id");
  const matchCreate = useMatch("/blogs/create");
  const showDetailMobile = matchDetail || matchCreate;

  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden container mx-auto px-4 md:px-8 py-8 gap-8">
      {/* Left Panel - Blog List (Sidebar) */}
      <aside
        className={cn(
          "w-full md:w-[350px] lg:w-[400px] flex-shrink-0 overflow-auto pr-2 custom-scrollbar",
          showDetailMobile ? "hidden md:block" : "block"
        )}
      >
        <BlogList />
      </aside>

      {/* Right Panel - Content */}
      <main className={cn(
        "flex-1 overflow-auto bg-background rounded-xl border bg-card text-card-foreground shadow-sm",
        !showDetailMobile ? "hidden md:block" : "block"
      )}>
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {/* Landing Page at Root */}
        <Route path="/" element={<LandingPage />} />

        {/* Blog Routes */}
        <Route path="/blogs" element={<BlogLayout />}>
          <Route index element={
            <div className="flex h-full flex-col items-center justify-center p-8 text-center text-muted-foreground">
              <h2 className="text-2xl font-bold mb-2">Welcome to the Blog</h2>
              <p>Select a blog from the list to read, or create a new one.</p>
            </div>
          } />
          <Route path="create" element={
            <ProtectedRoute>
              <CreateBlogForm />
            </ProtectedRoute>
          } />
          <Route path=":id" element={<BlogDetail />} />
        </Route>

        {/* Auth & Profile Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
