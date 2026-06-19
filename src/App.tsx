import Navbar from './components/nav/navbar';
import HomeHero from './components/landing-page';
import NoticeBoard from './components/notice-board';
import About from './components/about';
import AcademicStreams from './components/streams';
import PrincipalsVoice from './components/principal-voice';
import StudentAchievements from './components/achievement-card';
import Staff from './components/staff';
import Gallery from './components/gallery';
import Contact from './components/contact';
import Footer from './components/footer';
import { useEffect } from 'react';

export default function App() {
  const queryParams = new URLSearchParams(window.location.search);
const academyName = queryParams.get("name") || "Academy";

useEffect(() => {
  document.title = academyName;
}, [academyName]);
  return (
    /*
      FIXED: Removed 'overflow-x-hidden' from this root div.

      'overflow-x-hidden' (and overflow-hidden) implicitly promotes an element to a
      scroll container. A sticky element only sticks relative to its nearest scroll
      container ancestor — so the Navbar was sticking inside this div, not the
      viewport, making it look completely broken.

      The fix: move overflow-x clipping to <main> instead. <main> is below the
      Navbar in the tree, so Navbar's sticky positioning resolves against the
      viewport correctly, while horizontal overflow from section content is
      still clipped inside <main>.
    */
    <div className="min-h-screen bg-white selection:bg-emerald-500 selection:text-slate-900 antialiased relative">
      <Navbar />
      {/* overflow-x-hidden lives here now — below the sticky nav, so it doesn't trap it */}
      <main className="w-full relative overflow-x-hidden">
        <HomeHero />
        <NoticeBoard />
        <About />
        <AcademicStreams />
        <PrincipalsVoice />
        <StudentAchievements />
        <Staff />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}