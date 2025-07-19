import React, { useState } from 'react';
import { MessageSquare, Users, Building2, Pill, FlaskConical, UserPlus, Phone, MapPin, Globe, Menu, X, Sparkles } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ChatInterface } from './components/ChatInterface';
import { DoctorSection } from './components/DoctorSection';
import { HospitalSection } from './components/HospitalSection';
import { MedicineSection } from './components/MedicineSection';
import { LabSection } from './components/LabSection';
import { DoctorRegistration } from './components/DoctorRegistration';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { LanguageProvider } from './contexts/LanguageContext';

export type Section = 'home' | 'doctors' | 'hospitals' | 'medicines' | 'labs' | 'register' | 'chat';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'doctors':
        return <DoctorSection />;
      case 'hospitals':
        return <HospitalSection />;
      case 'medicines':
        return <MedicineSection />;
      case 'labs':
        return <LabSection />;
      case 'register':
        return <DoctorRegistration />;
      case 'chat':
        return <ChatInterface />;
      default:
        return <Hero onNavigate={setActiveSection} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
        <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
        <main className="pt-20">
          {renderSection()}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;