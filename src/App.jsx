import { useEffect, useState } from 'react';
import './App.css'; 
import {Header,Home,Benefits, HowItWorks, Faq,SubscribingForm, Team,Footer} from './components/index.js'; 

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      threshold: 0.6,
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
    <div className="flex flex-col min-h-screen bg-[#0C0C0C] text-white">
      
      <Header activeSection={activeSection} /> 

      <main className="flex-1">
        <Home />
        <Benefits/>
        <HowItWorks/>
        <Team/>
        <Faq/>
        <SubscribingForm/>
        
      </main>

      <Footer/>
    </div>
  );
}

export default App;
