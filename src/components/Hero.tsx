import React from 'react';
import { MessageSquare, Users, Building2, Pill, FlaskConical, UserPlus, Shield, Clock, Globe, Sparkles, Zap, Award, TrendingUp, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Section } from '../App';

interface HeroProps {
  onNavigate: (section: Section) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const features = [
    {
      icon: MessageSquare,
      title: t('aiHealthAssistant'),
      description: t('aiHealthAssistantDesc'),
      action: () => onNavigate('chat'),
      color: 'bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-700',
      buttonColor: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Users,
      title: t('findDoctor'),
      description: t('findDoctorDesc'),
      action: () => onNavigate('doctors'),
      color: 'bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700',
      buttonColor: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Building2,
      title: t('hospitals'),
      description: t('hospitalsDesc'),
      action: () => onNavigate('hospitals'),
      color: 'bg-gradient-to-br from-purple-100 to-pink-100 text-purple-700',
      buttonColor: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Pill,
      title: t('medicines'),
      description: t('medicinesDesc'),
      action: () => onNavigate('medicines'),
      color: 'bg-gradient-to-br from-orange-100 to-red-100 text-orange-700',
      buttonColor: 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700',
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: FlaskConical,
      title: t('labs'),
      description: t('labsDesc'),
      action: () => onNavigate('labs'),
      color: 'bg-gradient-to-br from-pink-100 to-rose-100 text-pink-700',
      buttonColor: 'bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700',
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: UserPlus,
      title: t('joinAsDoctor'),
      description: t('joinAsDoctorDesc'),
      action: () => onNavigate('register'),
      color: 'bg-gradient-to-br from-teal-100 to-cyan-100 text-teal-700',
      buttonColor: 'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-emerald-500 animate-pulse mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              {t('heroTitle')}
            </h1>
            <Sparkles className="w-8 h-8 text-emerald-500 animate-pulse ml-3" />
          </div>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Award className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-600 font-semibold">Pakistan's #1 AI Health Platform</span>
            <Award className="w-5 h-5 text-emerald-600" />
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('heroDescription')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onNavigate('chat')}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-medium hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <MessageSquare className="w-5 h-5" />
              <Zap className="w-4 h-4 animate-pulse" />
              <span>{t('startChat')}</span>
            </button>
            <button
              onClick={() => onNavigate('doctors')}
              className="bg-white/80 backdrop-blur-sm text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-xl font-medium hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Users className="w-5 h-5" />
              <span>{t('findDoctor')}</span>
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20"
              >
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute bottom-2 left-2 w-10 h-10 rounded-lg ${feature.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <button
                  onClick={feature.action}
                  className={`w-full ${feature.buttonColor} text-white py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{t('getStarted')}</span>
                  <Sparkles className="w-3 h-3 animate-pulse" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-16 border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Trusted by Thousands Across Pakistan
            </h2>
            <p className="text-gray-600">Real-time statistics from our platform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-10 h-10 text-emerald-600" />
              </div>
              <h4 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center">
                24/7
                <TrendingUp className="w-5 h-5 text-emerald-500 ml-2 animate-bounce" />
              </h4>
              <p className="text-gray-600 font-medium">{t('availableAlways')}</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock className="w-10 h-10 text-blue-600" />
              </div>
              <h4 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center">
                &lt;2s
                <Zap className="w-5 h-5 text-blue-500 ml-2 animate-pulse" />
              </h4>
              <p className="text-gray-600 font-medium">{t('responseTime')}</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Globe className="w-10 h-10 text-purple-600" />
              </div>
              <h4 className="text-3xl font-bold text-gray-800 mb-2">5+</h4>
              <p className="text-gray-600 font-medium">{t('languages')}</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-10 h-10 text-orange-600" />
              </div>
              <h4 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center">
                10K+
                <TrendingUp className="w-5 h-5 text-orange-500 ml-2 animate-bounce" />
              </h4>
              <p className="text-gray-600 font-medium">Active Users</p>
            </div>
          </div>
        </div>

        {/* Features Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 text-white shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-3 rounded-xl mr-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">AI-Powered Diagnostics</h3>
            </div>
            <p className="text-emerald-100 mb-6 leading-relaxed">
              Our advanced AI analyzes symptoms and provides instant medical guidance, 
              helping you understand your health concerns before visiting a doctor.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm">Real-time Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-sm">99% Accuracy</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-3 rounded-xl mr-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Verified Healthcare Network</h3>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Connect with verified doctors, hospitals, and labs across Pakistan. 
              All healthcare providers are thoroughly vetted for your safety.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm">PMC Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-sm">Secure Platform</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-16 border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
              What Our Users Say
            </h2>
            <p className="text-gray-600">Real feedback from people across Pakistan</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. Ahmed Hassan",
                location: "Lahore",
                text: "This platform has revolutionized how I connect with patients in remote areas. The AI assistant is incredibly accurate.",
                avatar: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100"
              },
              {
                name: "Fatima Khan",
                location: "Karachi",
                text: "As a mother in a remote village, this app has been a lifesaver. I can get medical advice instantly for my children.",
                avatar: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=100"
              },
              {
                name: "Muhammad Ali",
                location: "Islamabad",
                text: "The multilingual support makes it accessible to everyone. Finally, healthcare technology that understands Pakistan.",
                avatar: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=100"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                <div className="flex text-yellow-400 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Section */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 border border-red-300 rounded-2xl p-8 text-center shadow-2xl">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white/20 p-3 rounded-xl mr-4">
              <Phone className="w-8 h-8 text-white animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              {t('emergencyTitle')}
            </h3>
          </div>
          <p className="text-red-100 mb-6 text-lg">
            {t('emergencyDescription')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:1122"
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>{t('call')} 1122 - {t('rescue')}</span>
            </a>
            <a
              href="tel:115"
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>{t('call')} 115 - {t('edhi')}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};