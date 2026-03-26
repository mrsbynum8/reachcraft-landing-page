import { Zap, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="py-10 border-t border-[#FFFAF1]/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-sm text-[#93A4AF]">
                    {/* Logo - Left */}
                    <div className="flex-1 flex justify-start">
                        <img
                            src={`${import.meta.env.BASE_URL}RCALogoVersion3-white.png`}
                            alt="ReachCraft Logo"
                            className="h-10 w-auto object-contain"
                        />
                    </div>

                    {/* Links - Center */}
                    <nav className="flex items-center justify-center gap-x-8">
                        <a href="#" className="hover:text-[#D37B07] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#D37B07] transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-[#D37B07] transition-colors">Contact</a>
                    </nav>

                    {/* Copyright - Right */}
                    <div className="flex-1 flex justify-end opacity-60">
                        © 2026 Blue Corner Ventures LLC.
                    </div>
                </div>
            </div>
        </footer>
    );
}
