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
        <div className="min-h-screen bg-[#0D1321] text-[#FFFAF1] font-sans selection:bg-[#D37B07] selection:text-white">
            <StickyHeader onOpenBooking={openBooking} />

            <main className="relative overflow-x-clip">
                {/* Section 1: Hero */}
                <Hero onOpenBooking={openBooking} />

                {/* Section 2: Map */}
                <FeatureShowcase />

                {/* Section 3: Timeline */}
                <ProcessTimeline />

                {/* Section 4: Findings */}
                <PremiumTestimonials />

                {/* Section 5: Fit Call */}
                <FitCall onOpenBooking={openBooking} />
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
