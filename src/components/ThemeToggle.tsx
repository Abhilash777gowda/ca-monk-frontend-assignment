import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full relative overflow-hidden transition-all duration-300 hover:bg-muted dark:hover:bg-muted bg-transparent">
            <Sun className={`h-[1.5rem] w-[1.5rem] transition-all duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-500
          ${theme === 'dark' ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}
      `} />
            <Moon className={`h-[1.5rem] w-[1.5rem] transition-all duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-400
          ${theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}
      `} />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
