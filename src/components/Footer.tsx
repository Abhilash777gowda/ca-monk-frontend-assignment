import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t">
            <div className="container mx-auto px-4 md:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-15">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 font-bold text-xl">
                            <div className="bg-primary text-primary-foreground p-1 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 10v6M2 10v6" /><path d="M22 16a6 6 0 0 1-12 0" /><path d="M14 16a6 6 0 0 1-12 0" /><path d="M12 10v6" /><path d="M12 3a7 7 0 0 1 7 7v6" /><path d="M5 10V9a7 7 0 0 1 7-7" /></svg>
                            </div>
                            <span>CA MONK</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Empowering finance professionals with cutting-edge insights and tools for career growth.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-muted-foreground hover:text-sky-500 transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-muted-foreground hover:text-pink-600 transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-muted-foreground hover:text-blue-700 transition-colors"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-foreground hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:text-foreground hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:text-foreground hover:underline">Press</a></li>
                            <li><a href="#" className="hover:text-foreground hover:underline">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-foreground hover:underline">Blog</a></li>
                            <li><a href="#" className="hover:text-foreground hover:underline">Newsletter</a></li>
                            <li><a href="#" className="hover:text-foreground hover:underline">Case Studies</a></li>
                            <li><a href="#" className="hover:text-foreground hover:underline">Help Center</a></li>
                        </ul>
                    </div>

                   
                </div>

                <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} CA Monk. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
