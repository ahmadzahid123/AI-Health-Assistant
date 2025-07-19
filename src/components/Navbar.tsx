import React, { useState, useEffect } from 'react';
import { MessageSquare, Users, Building2, Pill, FlaskConical, UserPlus, Phone, Menu, X, Heart, Sparkles, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Section } from '../App';

interface NavbarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'doctors' as Section, icon: Users, label: t('findDoctor') },
    { id: 'hospitals' as Section, icon: Building2, label: t('hospitals') },
    { id: 'medicines' as Section, icon: Pill, label: t('medicines') },
    { id: 'labs' as Section, icon: FlaskConical, label: t('labs') },
    { id: 'register' as Section, icon: UserPlus, label: t('joinAsDoctor') },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ur', name: 'اردو' },
    { code: 'pa', name: 'پنجابی' },
    { code: 'sd', name: 'سنڌي' },
    { code: 'ps', name: 'پښتو' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-emerald-100' 
        : 'bg-white/90 backdrop-blur-sm shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Heart className="w-7 h-7 text-white" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {t('appName')}
                </span>
                <Sparkles className="w-4 h-4 text-emerald-500 animate-pulse" />
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="w-3 h-3 text-emerald-500" />
                <span className="text-xs text-emerald-600 font-medium">Verified Platform</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 shadow-md'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-emerald-50 hover:text-emerald-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="px-4 py-2 text-sm border border-emerald-200 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Emergency Call */}
            <a
              href="tel:1122"
              className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2.5 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">1122</span>
            </a>

            {/* AI Chat Button */}
            <button
              onClick={() => onNavigate('chat')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                activeSection === 'chat'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                  : 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 hover:from-emerald-200 hover:to-teal-200'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <Sparkles className="w-3 h-3 animate-pulse" />
              <span className="text-sm font-medium">{t('aiChat')}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-emerald-100 py-4 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 shadow-md'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-emerald-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              
              {/* Mobile Actions */}
              <div className="flex items-center space-x-2 mt-4">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm border border-emerald-200 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
                
                <a
                  href="tel:1122"
                  className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">1122</span>
                </a>
              </div>
              
              <button
                onClick={() => {
                  onNavigate('chat');
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 mt-2"
              >
                <MessageSquare className="w-4 h-4" />
                <Sparkles className="w-3 h-3 animate-pulse" />
                <span className="text-sm font-medium">{t('aiChat')}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};