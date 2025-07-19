import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Zap, Shield, Clock } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const PWAInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if it's iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Show install prompt for iOS users after 3 seconds
    if (iOS) {
      const timer = setTimeout(() => {
        setShowInstallPrompt(true);
      }, 3000);
      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt && !isIOS) return;

    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        setShowInstallPrompt(false);
      }
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    setDeferredPrompt(null);
  };

  if (!showInstallPrompt) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fadeIn" onClick={handleDismiss}></div>
      
      {/* Install Prompt Modal */}
      <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 animate-slideIn">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md mx-auto border border-emerald-100">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 p-6 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                <Smartphone className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Install Health Assistant</h3>
                <p className="text-emerald-100 text-sm">Get the full app experience</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-10 h-10 text-emerald-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Install our Health App
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get instant access to AI health guidance, find doctors, and manage your health - all offline capable!
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-sm text-gray-700">Instant AI health consultations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm text-gray-700">Offline access & secure data</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-sm text-gray-700">24/7 health monitoring</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-3">
              {isIOS ? (
                <div className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl text-center">
                  <div className="text-sm font-medium">
                    Tap <span className="inline-block mx-1">📤</span> then "Add to Home Screen"
                  </div>
                </div>
              ) : (
                <button
                  onClick={handleInstallClick}
                  className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-medium hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Download className="w-4 h-4" />
                  <span>Install App</span>
                </button>
              )}
              <button
                onClick={handleDismiss}
                className="bg-gray-100 text-gray-600 px-4 py-3 rounded-xl hover:bg-gray-200 transition-all duration-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom note */}
            <p className="text-xs text-gray-500 text-center mt-4">
              Free • No ads • Works offline
            </p>
          </div>
        </div>
      </div>
    </>
  );
};