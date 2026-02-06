import { Hero } from './components/Hero';
import { FeatureShowcase } from './components/FeatureShowcase';
import { ProcessTimeline } from './components/ProcessTimeline';
import { PremiumTestimonials } from './components/ui/premium-testimonials';
import { AuditForm } from './components/AuditForm';
import { Footer } from './components/Footer';
import { StickyHeader } from './components/StickyHeader';

function App() {
    return (
        <div className="min-h-screen bg-[#0D1321] text-[#FFFAF1] font-sans selection:bg-[#D37B07] selection:text-white">
            <StickyHeader />

            <main className="relative">
                {/* Section 1: Hero (Base Layer) */}
                <div className="sticky top-0 z-0 h-screen overflow-hidden">
                    <Hero />
                </div>

                {/* Section 2: Map (Overlaps Hero) */}
                <div className="sticky top-0 z-10 h-screen bg-[#0D1321] shadow-[0_-50px_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col justify-center">
                    <FeatureShowcase />
                </div>

                {/* Section 3: Timeline (Relative Flow with Internal Sticky) */}
                <div className="relative z-20 bg-[#0D1321] shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
                    <ProcessTimeline />
                </div>

                {/* Section 4: Testimonials (Relative - No Stick) */}
                <div className="relative z-30 bg-[#0D1321] shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
                    <PremiumTestimonials />
                </div>

                {/* Section 5: Audit Form (Relative - No Stick) */}
                <div className="relative z-40 bg-[#0D1321] shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
                    <AuditForm />
                </div>
            </main>

            {/* Footer - Sits on top of everything at the end */}
            <div className="relative z-50 bg-[#0D1321]">
                <Footer />
            </div>
        </div>
    );
}

export default App;
