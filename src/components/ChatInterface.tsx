import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Volume2, Mic, MicOff, Sparkles, Zap, Brain, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Assalam-o-Alaikum! 🌟 I am your AI Health Assistant powered by DeepSeek R1 Distill Llama 70B. How can I help you today?',
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

  const callDeepSeekAPI = async (message: string): Promise<string> => {
    try {
      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`
        },
        body: JSON.stringify({
          model: 'deepseek-r1-distill-llama-70b',
          messages: [
            {
              role: 'system',
              content: `You are a professional AI Health Assistant for Pakistan. Provide accurate, helpful medical information while always recommending consulting with qualified healthcare professionals for serious concerns. Be culturally sensitive to Pakistani context. Always include emergency numbers (1122 for rescue, 115 for Edhi) for serious symptoms. Respond in a caring, professional manner.`
            },
            {
              role: 'user',
              content: message
            }
          ],
          max_tokens: 1000,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || 'I apologize, but I encountered an error. Please try again.';
    } catch (error) {
      console.error('DeepSeek API Error:', error);
      return generateFallbackResponse(message);
    }
  };

  const generateFallbackResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('fever') || lowerInput.includes('bukhar')) {
      return `I understand you're experiencing fever. Here's what I recommend:

🌡️ **Immediate Care:**
- Take paracetamol (500mg) every 6 hours
- Drink plenty of fluids (water, ORS)
- Rest in a cool, well-ventilated room

⚠️ **Seek immediate medical attention if:**
- Fever above 103°F (39.4°C)
- Difficulty breathing
- Severe headache or neck stiffness
- Persistent vomiting

📞 **Emergency:** Call 1122 if symptoms worsen suddenly.
🏥 **Find a Doctor:** I can help you find nearby doctors.`;
    }

    if (lowerInput.includes('cough') || lowerInput.includes('khansi')) {
      return `For your cough, here's what I suggest:

💊 **Home Remedies:**
- Honey and warm water (2 tsp honey in warm water)
- Steam inhalation 2-3 times daily
- Avoid cold drinks and ice

🚫 **Avoid:**
- Smoking and secondhand smoke
- Dust and strong odors
- Cold beverages

⚠️ **See a doctor if:**
- Cough persists for more than 2 weeks
- Blood in cough
- Chest pain or difficulty breathing
- High fever with cough

📞 **Emergency:** Call 1122 for severe breathing difficulties.`;
    }

    return `Thank you for your question. I'm here to help with health-related concerns. 

📋 **I can help you with:**
- Symptom guidance and first aid
- Finding doctors and specialists
- Medicine information
- Hospital and lab details
- Emergency contacts

🏥 **For specific medical advice, please consult with a qualified doctor.**

📞 **Emergency Numbers:**
- 1122 for Rescue Services
- 115 for Edhi Ambulance

Would you like me to help you find a doctor in your area?`;
  };

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
      const aiResponse = await callDeepSeekAPI(inputText);
      
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
      }, 1000);
    } catch (error) {
      setIsTyping(false);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'I apologize, but I encountered an error. Please try again or contact emergency services if this is urgent.',
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
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 text-white p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl font-bold">{t('aiHealthAssistant')}</h1>
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
                <p className="text-white/80 text-sm flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Powered by DeepSeek R1 Distill Llama 70B</span>
                </p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-white/80">Online</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-3 h-3" />
                    <span className="text-xs text-white/80">Instant Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-white/50 to-white/80">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fadeIn`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-6 py-4 rounded-2xl shadow-lg ${
                    message.isUser
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                      : 'bg-white/90 backdrop-blur-sm text-gray-800 border border-gray-200'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {!message.isUser && (
                      <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-1.5 rounded-full">
                        <Bot className="w-4 h-4 text-emerald-600" />
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                      {!message.isUser && (
                        <button
                          onClick={() => speakText(message.text)}
                          className="mt-3 p-2 hover:bg-emerald-100 rounded-full transition-all duration-300 group"
                          title="Read aloud"
                        >
                          <Volume2 className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                        </button>
                      )}
                    </div>
                    {message.isUser && (
                      <div className="bg-white/20 p-1.5 rounded-full">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {(isLoading || isTyping) && (
              <div className="flex justify-start">
                <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-4 rounded-2xl shadow-lg border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-1.5 rounded-full">
                      <Bot className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs text-emerald-600 font-medium">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200/50 p-6 bg-white/90 backdrop-blur-sm">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t('typeYourMessage')}
                className="flex-1 px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isLoading}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2"
              >
                <Send className="w-5 h-5" />
                {!isLoading && <Sparkles className="w-3 h-3 animate-pulse" />}
              </button>
            </div>
            
            {/* Quick Actions */}
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={() => setInputText('I have a fever')}
                className="bg-gradient-to-r from-red-100 to-orange-100 text-red-700 px-4 py-2 rounded-full text-sm hover:from-red-200 hover:to-orange-200 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                {t('fever')}
              </button>
              <button
                onClick={() => setInputText('I have a headache')}
                className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-2 rounded-full text-sm hover:from-blue-200 hover:to-indigo-200 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                {t('headache')}
              </button>
              <button
                onClick={() => setInputText('I need to find a doctor')}
                className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-4 py-2 rounded-full text-sm hover:from-emerald-200 hover:to-teal-200 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                {t('findDoctor')}
              </button>
              <button
                onClick={() => setInputText('Emergency help needed')}
                className="bg-gradient-to-r from-red-200 to-red-300 text-red-800 px-4 py-2 rounded-full text-sm hover:from-red-300 hover:to-red-400 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 font-medium"
              >
                {t('emergency')}
              </button>
            </div>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-6 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl shadow-lg">
          <div className="flex items-start space-x-3">
            <div className="bg-yellow-200 p-2 rounded-full">
              <Sparkles className="w-4 h-4 text-yellow-700" />
            </div>
            <p className="text-sm text-yellow-800 leading-relaxed">
              <strong>{t('disclaimer')}:</strong> {t('disclaimerText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};