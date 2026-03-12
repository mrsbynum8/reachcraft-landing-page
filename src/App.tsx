import { Hero } from './components/Hero';
import { FeatureShowcase } from './components/FeatureShowcase';
import { ProcessTimeline } from './components/ProcessTimeline';
import { PremiumTestimonials } from './components/ui/premium-testimonials';
import { FitCall } from './components/FitCall';
import { Footer } from './components/Footer';
import { StickyHeader } from './components/StickyHeader';

function App() {
    return (
        <div className="min-h-screen bg-[#0D1321] text-[#FFFAF1] font-sans selection:bg-[#D37B07] selection:text-white">
            <StickyHeader />

            <main className="relative">
                {/* Section 1: Hero */}
                <div className="relative z-0">
                    <Hero />
                </div>

                {/* Section 2: Map */}
                <div className="relative z-10 bg-[#0D1321]">
                    <FeatureShowcase />
                </div>

                {/* Section 3: Timeline */}
                <div className="relative z-20 bg-[#0D1321]">
                    <ProcessTimeline />
                </div>

                {/* Section 4: Findings */}
                <div className="relative z-30 bg-[#0D1321]">
                    <PremiumTestimonials />
                </div>

                {/* Section 5: Fit Call */}
                <div className="relative z-40 bg-[#0D1321]">
                    <FitCall />
                </div>
            </main>

            {/* Footer */}
            <div className="relative z-50 bg-[#0D1321]">
                <Footer />
            </div>
        </div>
    );
}

export default App;
