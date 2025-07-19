import React, { useState } from 'react';
import { MapPin, Phone, Calendar, Clock, ChevronDown, FlaskConical } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Lab {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  tests: string[];
  homeCollection: boolean;
  reportTime: string;
  pricing: {
    basicPackage: number;
    comprehensivePackage: number;
    singleTest: string;
  };
  timings: string;
  rating: number;
  image: string;
}

export const LabSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedLab, setSelectedLab] = useState<Lab | null>(null);

  const cities = [
    'Lahore',
    'Karachi',
    'Islamabad',
    'Rawalpindi',
    'Faisalabad',
    'Multan',
    'Peshawar',
    'Quetta',
    'Sialkot',
    'Gujranwala'
  ];

  const labs: Lab[] = [
    {
      id: '1',
      name: 'Chughtai Lab',
      city: 'Lahore',
      address: 'Multiple locations across Lahore',
      phone: '+92-42-111-456-789',
      tests: ['Blood Tests', 'Urine Tests', 'X-Ray', 'CT Scan', 'MRI', 'Ultrasound', 'ECG'],
      homeCollection: true,
      reportTime: '24-48 hours',
      pricing: {
        basicPackage: 3500,
        comprehensivePackage: 8500,
        singleTest: 'Rs. 300-2000'
      },
      timings: '24/7 Collection, Reports: 8 AM - 8 PM',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      id: '2',
      name: 'Dr. Essa Laboratory',
      city: 'Karachi',
      address: 'Multiple locations across Karachi',
      phone: '+92-21-111-372-372',
      tests: ['Pathology', 'Radiology', 'Cardiology', 'Endoscopy', 'Histopathology'],
      homeCollection: true,
      reportTime: '12-24 hours',
      pricing: {
        basicPackage: 3000,
        comprehensivePackage: 7500,
        singleTest: 'Rs. 250-1800'
      },
      timings: '24/7 Collection, Reports: 7 AM - 9 PM',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      id: '3',
      name: 'Islamabad Diagnostic Center',
      city: 'Islamabad',
      address: 'F-8 Markaz, Islamabad',
      phone: '+92-51-2604444',
      tests: ['Laboratory Tests', 'Imaging', 'Cardiac Tests', 'Pulmonary Function'],
      homeCollection: true,
      reportTime: '24-72 hours',
      pricing: {
        basicPackage: 4000,
        comprehensivePackage: 9000,
        singleTest: 'Rs. 350-2500'
      },
      timings: '7 AM - 10 PM',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      id: '4',
      name: 'Excel Lab',
      city: 'Rawalpindi',
      address: 'Multiple locations in Rawalpindi',
      phone: '+92-51-5487000',
      tests: ['Clinical Pathology', 'Microbiology', 'Immunology', 'Molecular Biology'],
      homeCollection: true,
      reportTime: '24-48 hours',
      pricing: {
        basicPackage: 3200,
        comprehensivePackage: 7800,
        singleTest: 'Rs. 280-2200'
      },
      timings: '6 AM - 10 PM',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      id: '5',
      name: 'Frontier Labs',
      city: 'Peshawar',
      address: 'University Road, Peshawar',
      phone: '+92-91-5842000',
      tests: ['Blood Chemistry', 'Hematology', 'Serology', 'Hormone Tests'],
      homeCollection: true,
      reportTime: '24-48 hours',
      pricing: {
        basicPackage: 2800,
        comprehensivePackage: 6500,
        singleTest: 'Rs. 200-1500'
      },
      timings: '7 AM - 8 PM',
      rating: 4.4,
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      id: '6',
      name: 'Agha Khan Laboratory',
      city: 'Karachi',
      address: 'Stadium Road, Karachi',
      phone: '+92-21-34864000',
      tests: ['Advanced Pathology', 'Genetic Testing', 'Specialized Tests', 'Research Tests'],
      homeCollection: true,
      reportTime: '24-72 hours',
      pricing: {
        basicPackage: 4500,
        comprehensivePackage: 12000,
        singleTest: 'Rs. 400-3000'
      },
      timings: '24/7 Collection, Reports: 8 AM - 6 PM',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    }
  ];

  const filteredLabs = labs.filter(lab => {
    return !selectedCity || lab.city === selectedCity;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {t('labs')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('labsDescription')}
          </p>
        </div>

        {/* City Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="max-w-md mx-auto">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('selectCity')}
            </label>
            <div className="relative">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none"
              >
                <option value="">{t('allCities')}</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-2.5 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLabs.map((lab) => (
            <div key={lab.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={lab.image} 
                  alt={lab.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="text-lg font-bold text-white mb-1">{lab.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-medium text-white">{lab.rating}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{lab.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{lab.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{lab.timings}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">{t('reportTime')}: {lab.reportTime}</span>
                  </div>
                  {lab.homeCollection && (
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-sm text-green-700">{t('homeCollection')}</span>
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">{t('popularTests')}</h4>
                  <div className="flex flex-wrap gap-1">
                    {lab.tests.slice(0, 3).map((test) => (
                      <span
                        key={test}
                        className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
                      >
                        {test}
                      </span>
                    ))}
                    {lab.tests.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        +{lab.tests.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('basicPackage')}</span>
                    <span className="font-semibold text-gray-800">Rs. {lab.pricing.basicPackage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('comprehensivePackage')}</span>
                    <span className="font-semibold text-gray-800">Rs. {lab.pricing.comprehensivePackage}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <a
                    href={`tel:${lab.phone}`}
                    className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg text-center hover:bg-emerald-700 transition-colors"
                  >
                    {t('callLab')}
                  </a>
                  <button
                    onClick={() => setSelectedLab(lab)}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {t('viewDetails')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredLabs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              {t('noLabsFound')}
            </p>
          </div>
        )}

        {/* Lab Detail Modal */}
        {selectedLab && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedLab.name}</h2>
                    <p className="text-gray-600">{selectedLab.city}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm font-medium text-gray-700">{selectedLab.rating}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedLab(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">{selectedLab.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">{selectedLab.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">{selectedLab.timings}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('availableTests')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedLab.tests.map((test) => (
                      <span
                        key={test}
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full"
                      >
                        {test}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('pricing')}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">{t('basicPackage')}</span>
                      <span className="font-semibold">Rs. {selectedLab.pricing.basicPackage}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">{t('comprehensivePackage')}</span>
                      <span className="font-semibold">Rs. {selectedLab.pricing.comprehensivePackage}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">{t('singleTest')}</span>
                      <span className="font-semibold">{selectedLab.pricing.singleTest}</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={`tel:${selectedLab.phone}`}
                    className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg text-center hover:bg-emerald-700 transition-colors"
                  >
                    {t('callLab')}
                  </a>
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    {t('bookAppointment')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};