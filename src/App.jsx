import { useEffect, useState } from 'react';
import './App.css'; 
import {Header,Home,Benefits, Faq,SubscribingForm, Team,Footer,Roadmap,Tokenomics, Stats} from './components/index.js'; 

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-white">
      
      <Header activeSection={activeSection} /> 

      <main className="flex-1">
        <Home />
        <Benefits/>
        <Roadmap/>
        <Faq/>
        {/* <Tokenomics/> */}
        <Stats/>
        <Team/>
        <SubscribingForm/>

      </main>

      <Footer/>
    </div>
  );
}

export default App;
