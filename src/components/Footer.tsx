import React from 'react';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-emerald-600 p-2 rounded-full">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">{t('appName')}</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {t('footerDescription')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('findDoctor')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('hospitals')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('medicines')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('labs')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('joinAsDoctor')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="text-gray-300">+92-300-1234567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="text-gray-300">info@healthassistant.pk</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5" />
                <span className="text-gray-300">Islamabad, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Numbers */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-red-400">{t('emergencyNumbers')}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:1122" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors">
                1122 - {t('rescue')}
              </a>
              <a href="tel:115" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors">
                115 - {t('edhi')}
              </a>
              <a href="tel:1021" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors">
                1021 - {t('ambulance')}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © 2024 {t('appName')}. {t('allRightsReserved')}
          </p>
          <p className="text-gray-400 text-sm mt-2">
            {t('medicalDisclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
};