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

                    {/* Social */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="w-10 h-10 rounded-full border border-[#FFFAF1]/20 flex items-center justify-center text-[#93A4AF] hover:text-[#D37B07] hover:border-[#D37B07]/50 transition-colors">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-[#FFFAF1]/20 flex items-center justify-center text-[#93A4AF] hover:text-[#D37B07] hover:border-[#D37B07]/50 transition-colors">
                            <Linkedin className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <div className="mt-12 text-center text-sm text-[#93A4AF]/60">
                    © {new Date().getFullYear()} ReachCraft. All rights reserved. Made with 🔥 for ambitious founders.
                </div>
            </div>
        </footer>
    );
}
