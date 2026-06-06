import Navbar from './nav/navbar';
import HomeHero from './landing-page';
import NoticeBoard from './notice-board';
import About from './About';
import PrincipalsVoice from './principal-voice';
import Staff from './Staff';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-emerald-500 selection:text-slate-900 antialiased">
      <Navbar />
      <main>
        <HomeHero />
        
        {/* NoticeBoard inserted here captures maximum visitor focus instantly */}
        <NoticeBoard /> 
        
        <About />
        <PrincipalsVoice /> 
        <Staff />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}