import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Eterno Weddings | Luxury Wedding Planner Zurich',
  description: 'Exquisite bespoke wedding planning in Zurich and Switzerland for the modern romantic.',
};

export default function Home() {
  return (
    <main style={{ position: 'relative' }}>
      <Navigation />
      <Hero />
      <Features />
      <Gallery />
      <BookingForm />
      <Footer />
    </main>
  );
}

