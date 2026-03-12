import { Zap, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="py-16 border-t border-[#FFFAF1]/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img
                            src="/RCALogo Version2 White.svg"
                            alt="ReachCraft"
                            className="h-12 w-auto object-contain"
                        />
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-[#93A4AF]">
                        <a href="#" className="hover:text-[#D37B07] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#D37B07] transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-[#D37B07] transition-colors">Contact</a>
                    </nav>
                </div>

                <div className="mt-12 text-center text-sm text-[#93A4AF]/60">
                    © 2026 Blue Corner Ventures LLC. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
