import React from 'react';
import { MessageSquare, Users, Building2, Pill, FlaskConical, UserPlus, Shield, Clock, Globe, Sparkles, Zap, Award, TrendingUp, Phone, Brain, Heart, Activity, Stethoscope, Microscope, Ambulance } from 'lucide-react';
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
      title: 'AI Health Assistant',
      description: 'Advanced AI powered by DeepSeek R1 for instant medical guidance and symptom analysis',
      action: () => onNavigate('chat'),
      color: 'bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-700',
      buttonColor: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700',
      image: 'https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      badge: 'AI Powered'
    },
    {
      icon: Users,
      title: 'Find Doctors',
      description: 'Connect with verified doctors across Pakistan with instant booking and consultation',
      action: () => onNavigate('doctors'),
      color: 'bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700',
      buttonColor: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      badge: 'Verified'
    },
    {
      icon: Building2,
      title: 'Hospitals',
      description: 'Locate top hospitals with specialties, emergency services, and real-time availability',
      action: () => onNavigate('hospitals'),
      color: 'bg-gradient-to-br from-purple-100 to-pink-100 text-purple-700',
      buttonColor: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
      image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      badge: '24/7'
    },
    {
      icon: Pill,
      title: 'Medicines',
      description: 'Comprehensive medicine database with interactions, side effects, and availability',
      action: () => onNavigate('medicines'),
      color: 'bg-gradient-to-br from-orange-100 to-red-100 text-orange-700',
      buttonColor: 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700',
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      badge: 'Safe'
    },
    {
      icon: FlaskConical,
      title: 'Lab Tests',
      description: 'Book diagnostic tests with home collection and digital reports delivery',
      action: () => onNavigate('labs'),
      color: 'bg-gradient-to-br from-pink-100 to-rose-100 text-pink-700',
      buttonColor: 'bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700',
      image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      badge: 'Digital'
    },
    {
      icon: UserPlus,
      title: 'Join as Doctor',
      description: 'Register as a healthcare provider and expand your practice digitally',
      action: () => onNavigate('register'),
      color: 'bg-gradient-to-br from-teal-100 to-cyan-100 text-teal-700',
      buttonColor: 'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700',
      image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      badge: 'Professional'
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
            <Brain className="w-12 h-12 text-emerald-500 animate-pulse mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent animate-shimmer">
              HealthPK AI Platform
            </h1>
            <Heart className="w-12 h-12 text-red-500 animate-pulse ml-4" />
          </div>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Shield className="w-6 h-6 text-emerald-600" />
            <span className="text-emerald-600 font-bold text-lg">Pakistan's Most Advanced AI Health Platform</span>
            <Stethoscope className="w-6 h-6 text-emerald-600" />
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI-powered healthcare platform designed for Pakistan. Get instant medical guidance, 
            connect with verified doctors, and access comprehensive health services - all in one intelligent platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onNavigate('chat')}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-5 rounded-2xl font-bold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 text-lg animate-glow"
            >
              <Brain className="w-6 h-6" />
              <Zap className="w-5 h-5 animate-pulse" />
              <span>Start AI Chat</span>
              <Sparkles className="w-5 h-5 animate-pulse" />
            </button>
            <button
              onClick={() => onNavigate('doctors')}
              className="bg-white/90 backdrop-blur-sm text-emerald-600 border-2 border-emerald-600 px-10 py-5 rounded-2xl font-bold hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-2 text-lg"
            >
              <Users className="w-6 h-6" />
              <span>Find Doctors</span>
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
                className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/30 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-gray-800">{feature.badge}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center shadow-lg border border-white/20`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-20 right-4">
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                  <button
                    onClick={feature.action}
                    className={`w-full ${feature.buttonColor} text-white py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>Get Started</span>
                    <Sparkles className="w-4 h-4 animate-pulse" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-16 border border-white/30 animate-fadeIn">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Revolutionizing Healthcare in Pakistan
            </h2>
            <p className="text-gray-600 text-lg">Real-time impact and trusted by healthcare professionals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-float">
                <Brain className="w-12 h-12 text-emerald-600" />
              </div>
              <h4 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center">
                AI
                <Activity className="w-6 h-6 text-emerald-500 ml-2 animate-pulse" />
              </h4>
              <p className="text-gray-600 font-medium">Powered Intelligence</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <Clock className="w-12 h-12 text-blue-600" />
              </div>
              <h4 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center">
                24/7
                <Zap className="w-5 h-5 text-blue-500 ml-2 animate-pulse" />
              </h4>
              <p className="text-gray-600 font-medium">Available Always</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <Shield className="w-12 h-12 text-purple-600" />
              </div>
              <h4 className="text-4xl font-bold text-gray-800 mb-2">100%</h4>
              <p className="text-gray-600 font-medium">Secure & Private</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-float" style={{ animationDelay: '3s' }}>
                <Users className="w-12 h-12 text-orange-600" />
              </div>
              <h4 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center">
                50K+
                <TrendingUp className="w-5 h-5 text-orange-500 ml-2 animate-bounce" />
              </h4>
              <p className="text-gray-600 font-medium">Trusted Users</p>
            </div>
          </div>
        </div>

        {/* Features Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden animate-fadeIn">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-4 rounded-2xl mr-4 backdrop-blur-sm">
                <Brain className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold">DeepSeek AI Intelligence</h3>
            </div>
            <p className="text-emerald-100 mb-6 leading-relaxed text-lg">
              Powered by DeepSeek R1 Distill Llama 70B, our AI provides sophisticated medical analysis, 
              symptom evaluation, and personalized health recommendations tailored for Pakistani healthcare needs.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Advanced AI Model</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-sm font-medium">Medical Expertise</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden animate-fadeIn">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" style={{ animationDelay: '1s' }}></div>
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-4 rounded-2xl mr-4 backdrop-blur-sm">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold">Verified Healthcare Network</h3>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed text-lg">
              Connect with PMC-verified doctors, accredited hospitals, and certified labs across Pakistan. 
              Our comprehensive network ensures quality healthcare access in every province.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">PMC Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-sm font-medium">Nationwide Coverage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-16 border border-white/30 animate-fadeIn">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-gray-600 text-lg">Real experiences from doctors and patients across Pakistan</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. Ahmed Hassan",
                location: "Cardiologist, Lahore",
                text: "HealthPK AI has revolutionized patient care. The DeepSeek AI provides remarkably accurate preliminary assessments that help me prioritize urgent cases.",
                avatar: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
              },
              {
                name: "Dr. Fatima Khan",
                location: "Pediatrician, Karachi",
                text: "The AI's understanding of Pakistani healthcare context is impressive. It provides culturally appropriate guidance while maintaining medical accuracy.",
                avatar: "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
              },
              {
                name: "Dr. Sana Malik",
                location: "General Physician, Islamabad",
                text: "This platform bridges the gap between patients and healthcare. The AI assistant helps patients make informed decisions about seeking medical care.",
                avatar: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-3 border-emerald-200 shadow-lg"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-emerald-600 font-medium">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex text-yellow-400 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Section */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 border border-red-300 rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden animate-fadeIn">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-2xl mr-4 backdrop-blur-sm">
              <Ambulance className="w-10 h-10 text-white animate-pulse" />
            </div>
            <h3 className="text-3xl font-bold text-white">
              Medical Emergency?
            </h3>
          </div>
          <p className="text-red-100 mb-6 text-xl leading-relaxed">
            For life-threatening situations, call emergency services immediately. Every second counts in medical emergencies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:1122"
              className="bg-white text-red-600 px-10 py-5 rounded-2xl font-bold hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 flex items-center justify-center space-x-3 text-lg"
            >
              <Phone className="w-6 h-6" />
              <span>📞 1122 - Rescue Services</span>
            </a>
            <a
              href="tel:115"
              className="bg-white text-red-600 px-10 py-5 rounded-2xl font-bold hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 flex items-center justify-center space-x-3 text-lg"
            >
              <Phone className="w-6 h-6" />
              <span>📞 115 - Edhi Ambulance</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};