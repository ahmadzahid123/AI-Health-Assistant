import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Volume2, Mic, MicOff, Sparkles, Zap, Brain, MessageCircle, Heart, Shield, Phone, AlertTriangle, Stethoscope, Activity } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { aiHealthService } from '../services/aiService';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  isTyping?: boolean;
}

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '🌟 **Assalam-o-Alaikum! Welcome to HealthPK AI** 🌟\n\nI am your advanced AI Health Assistant powered by **DeepSeek R1 Distill Llama 70B**, specifically designed for Pakistan\'s healthcare needs.\n\n**I can help you with:**\n• 🩺 Symptom analysis and health guidance\n• 💊 Medicine information and interactions\n• 🚑 Emergency and first aid guidance\n• 🏥 Finding doctors and healthcare facilities\n• 🧠 Mental health support\n• 👶 Child and maternal health advice\n\n**Emergency Numbers:**\n📞 **1122** - Rescue Services\n📞 **115** - Edhi Ambulance\n\nHow can I assist you with your health today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      const aiResponse = await aiHealthService.sendMessage(inputText);
      
      // Simulate typing delay for better UX
      const typingDelay = Math.min(aiResponse.length * 20, 3000); // Max 3 seconds
      
      setTimeout(() => {
        setIsTyping(false);
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: aiResponse,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiMessage]);
        setIsLoading(false);
      }, typingDelay);
    } catch (error) {
      setIsTyping(false);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: '⚠️ I apologize, but I encountered a technical issue. Please try again or contact emergency services if this is urgent.\n\n📞 **Emergency: 1122**',
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  const quickActions = [
    { 
      text: 'I have fever and body aches', 
      icon: '🌡️', 
      color: 'from-red-100 to-orange-100 text-red-700 hover:from-red-200 hover:to-orange-200' 
    },
    { 
      text: 'Chest pain and breathing difficulty', 
      icon: '🫁', 
      color: 'from-red-200 to-red-300 text-red-800 hover:from-red-300 hover:to-red-400' 
    },
    { 
      text: 'Headache and dizziness', 
      icon: '🧠', 
      color: 'from-blue-100 to-indigo-100 text-blue-700 hover:from-blue-200 hover:to-indigo-200' 
    },
    { 
      text: 'Stomach pain and nausea', 
      icon: '🤢', 
      color: 'from-green-100 to-emerald-100 text-green-700 hover:from-green-200 hover:to-emerald-200' 
    },
    { 
      text: 'Find a doctor near me', 
      icon: '👨‍⚕️', 
      color: 'from-emerald-100 to-teal-100 text-emerald-700 hover:from-emerald-200 hover:to-teal-200' 
    },
    { 
      text: 'Medicine side effects', 
      icon: '💊', 
      color: 'from-purple-100 to-pink-100 text-purple-700 hover:from-purple-200 hover:to-pink-200' 
    },
    { 
      text: 'Mental health support', 
      icon: '🧘‍♀️', 
      color: 'from-indigo-100 to-purple-100 text-indigo-700 hover:from-indigo-200 hover:to-purple-200' 
    },
    { 
      text: 'Emergency help needed', 
      icon: '🚨', 
      color: 'from-red-300 to-red-400 text-red-900 hover:from-red-400 hover:to-red-500' 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-pink-400/5 to-orange-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/30 animate-fadeIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 text-white p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
            <div className="relative flex items-center space-x-6">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 animate-glow">
                  <Brain className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl font-bold">HealthPK AI Assistant</h1>
                  <Sparkles className="w-6 h-6 animate-pulse" />
                  <Heart className="w-6 h-6 text-red-300 animate-pulse" />
                </div>
                <p className="text-white/90 text-lg flex items-center space-x-2 mb-3">
                  <Zap className="w-5 h-5" />
                  <span>Powered by DeepSeek R1 Distill Llama 70B</span>
                  <Shield className="w-4 h-4 text-green-300" />
                </p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-white/80">AI Online</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm text-white/80">Instant Response</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Stethoscope className="w-4 h-4" />
                    <span className="text-sm text-white/80">Medical AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-sm">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-slideIn`}
              >
                <div
                  className={`max-w-xs lg:max-w-2xl px-6 py-4 rounded-2xl shadow-xl border ${
                    message.isUser
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-200'
                      : 'bg-white/95 backdrop-blur-sm text-gray-800 border-gray-200'
                  } hover:shadow-2xl transition-all duration-300`}
                >
                  <div className="flex items-start space-x-3">
                    {!message.isUser && (
                      <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-2 rounded-full border border-emerald-200">
                        <Bot className="w-5 h-5 text-emerald-600" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="text-sm whitespace-pre-line leading-relaxed">
                        {message.text}
                      </div>
                      {!message.isUser && (
                        <div className="flex items-center space-x-2 mt-4">
                          <button
                            onClick={() => speakText(message.text)}
                            className="p-2 hover:bg-emerald-100 rounded-full transition-all duration-300 group"
                            title="Read aloud"
                          >
                            <Volume2 className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                          </button>
                          <div className="text-xs text-gray-500">
                            {message.timestamp.toLocaleTimeString()}
                          </div>
                        </div>
                      )}
                    </div>
                    {message.isUser && (
                      <div className="bg-white/20 p-2 rounded-full">
                        <User className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {(isLoading || isTyping) && (
              <div className="flex justify-start animate-fadeIn">
                <div className="bg-white/95 backdrop-blur-sm text-gray-800 px-6 py-4 rounded-2xl shadow-xl border border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-2 rounded-full">
                      <Bot className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Activity className="w-5 h-5 text-emerald-600 animate-pulse" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-sm text-emerald-600 font-medium">AI is analyzing...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200/50 p-6 bg-white/95 backdrop-blur-sm">
            <div className="flex space-x-4 mb-4">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Describe your symptoms or health concerns..."
                className="flex-1 px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isLoading}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <Send className="w-6 h-6" />
                {!isLoading && <Sparkles className="w-4 h-4 animate-pulse" />}
              </button>
            </div>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => setInputText(action.text)}
                  className={`bg-gradient-to-r ${action.color} px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center space-x-2`}
                >
                  <span className="text-lg">{action.icon}</span>
                  <span className="hidden md:inline">{action.text.split(' ').slice(0, 2).join(' ')}</span>
                  <span className="md:hidden">{action.icon}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Emergency Banner */}
        <div className="mt-6 p-6 bg-gradient-to-r from-red-500 to-red-600 border border-red-300 rounded-2xl shadow-2xl animate-fadeIn">
          <div className="flex items-center justify-center space-x-4">
            <div className="bg-white/20 p-3 rounded-xl">
              <Phone className="w-8 h-8 text-white animate-pulse" />
            </div>
            <div className="text-center text-white">
              <h3 className="text-xl font-bold mb-2">Medical Emergency?</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:1122"
                  className="bg-white text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  📞 1122 - Rescue
                </a>
                <a
                  href="tel:115"
                  className="bg-white text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  📞 115 - Edhi
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-6 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl shadow-lg animate-fadeIn">
          <div className="flex items-start space-x-4">
            <div className="bg-yellow-200 p-3 rounded-full">
              <AlertTriangle className="w-6 h-6 text-yellow-700" />
            </div>
            <div>
              <h4 className="font-bold text-yellow-800 mb-2">Medical Disclaimer</h4>
              <p className="text-sm text-yellow-800 leading-relaxed">
                This AI assistant provides general health information and guidance. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult qualified healthcare professionals for medical concerns. In emergencies, contact emergency services immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};