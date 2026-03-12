import { useState } from 'react';
import { Hero } from './components/Hero';
import { FeatureShowcase } from './components/FeatureShowcase';
import { ProcessTimeline } from './components/ProcessTimeline';
import { PremiumTestimonials } from './components/ui/premium-testimonials';
import { FitCall } from './components/FitCall';
import { Footer } from './components/Footer';
import { StickyHeader } from './components/StickyHeader';
import { BookingModal } from './components/BookingModal';

function App() {
    const [isBookingModalOpen, setBookingModalOpen] = useState(false);

    const openBooking = () => setBookingModalOpen(true);

    return (
        <div className="min-h-screen bg-[#0D1321] text-[#FFFAF1] font-sans selection:bg-[#D37B07] selection:text-white overflow-x-hidden">
            <StickyHeader onOpenBooking={openBooking} />

            <main className="relative">
                {/* Section 1: Hero */}
                <div className="relative z-0">
                    <Hero onOpenBooking={openBooking} />
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
                    <FitCall onOpenBooking={openBooking} />
                </div>
            </main>

            {/* Footer */}
            <div className="relative z-50 bg-[#0D1321]">
                <Footer />
            </div>

            {/* Booking Modal Overlay */}
            <BookingModal 
                isOpen={isBookingModalOpen} 
                onClose={() => setBookingModalOpen(false)} 
            />
        </div>
    );
}

export default App;
