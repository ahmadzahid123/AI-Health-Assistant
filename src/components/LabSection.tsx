import React, { useState } from 'react';
import { MapPin, Phone, Calendar, Clock, ChevronDown, FlaskConical, Shield, DollarSign, Award } from 'lucide-react';
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
  verified: boolean;
  accredited: boolean;
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
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      verified: true,
      accredited: true
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
      image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      verified: true,
      accredited: true
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
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      verified: true,
      accredited: false
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
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      verified: true,
      accredited: true
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
      image: 'https://images.pexels.com/photos/3786164/pexels-photo-3786164.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      verified: true,
      accredited: false
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
      image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      verified: true,
      accredited: true
    }
  ];

  const filteredLabs = labs.filter(lab => {
    return !selectedCity || lab.city === selectedCity;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl mb-6">
            <FlaskConical className="w-8 h-8 text-pink-600" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {t('labs')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t('labsDescription')}
          </p>
        </div>

        {/* City Filter */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 border border-white/20">
          <div className="max-w-md mx-auto">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              {t('selectCity')}
            </label>
            <div className="relative">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 appearance-none bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
              >
                <option value="">{t('allCities')}</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLabs.map((lab) => (
            <div key={lab.id} className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
              {/* Lab Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={lab.image} 
                  alt={lab.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  {lab.verified && (
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Shield className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  )}
                  {lab.accredited && (
                    <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Award className="w-3 h-3" />
                      <span>Accredited</span>
                    </div>
                  )}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm font-medium text-gray-800">{lab.rating}</span>
                </div>

                {/* Home Collection Badge */}
                {lab.homeCollection && (
                  <div className="absolute bottom-16 left-4 bg-emerald-500/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Home Collection
                  </div>
                )}

                {/* Lab Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{lab.name}</h3>
                  <p className="text-pink-200 font-medium">{lab.city}</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-pink-500" />
                    <span>{lab.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4 text-blue-500" />
                    <span>{lab.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-purple-500" />
                    <span>{lab.timings}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">{t('reportTime')}: {lab.reportTime}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center space-x-2">
                    <FlaskConical className="w-4 h-4 text-pink-500" />
                    <span>{t('popularTests')}</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {lab.tests.slice(0, 3).map((test) => (
                      <span
                        key={test}
                        className="px-3 py-1 bg-pink-100 text-pink-700 text-xs rounded-full font-medium"
                      >
                        {test}
                      </span>
                    ))}
                    {lab.tests.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                        +{lab.tests.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-3 rounded-xl">
                    <div className="flex items-center space-x-1 mb-1">
                      <DollarSign className="w-3 h-3 text-emerald-600" />
                      <p className="text-xs text-emerald-600 font-medium">{t('basicPackage')}</p>
                    </div>
                    <p className="text-sm font-bold text-emerald-700">Rs. {lab.pricing.basicPackage}</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 rounded-xl">
                    <div className="flex items-center space-x-1 mb-1">
                      <DollarSign className="w-3 h-3 text-blue-600" />
                      <p className="text-xs text-blue-600 font-medium">{t('comprehensivePackage')}</p>
                    </div>
                    <p className="text-sm font-bold text-blue-700">Rs. {lab.pricing.comprehensivePackage}</p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <a
                    href={`tel:${lab.phone}`}
                    className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-4 rounded-xl text-center hover:from-pink-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {t('callLab')}
                  </a>
                  <button
                    onClick={() => setSelectedLab(lab)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {t('viewDetails')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredLabs.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FlaskConical className="w-12 h-12 text-gray-400" />
            </div>
            <p className="text-gray-600 text-lg font-medium">
              {t('noLabsFound')}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Try selecting a different city to see more results
            </p>
          </div>
        )}

        {/* Lab Detail Modal */}
        {selectedLab && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">{selectedLab.name}</h2>
                    <p className="text-gray-600 text-lg">{selectedLab.city}</p>
                    <div className="flex items-center space-x-4 mt-3">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm font-medium text-gray-700">{selectedLab.rating}</span>
                      </div>
                      {selectedLab.verified && (
                        <div className="flex items-center space-x-1 text-green-600">
                          <Shield className="w-4 h-4" />
                          <span className="text-sm font-medium">Verified</span>
                        </div>
                      )}
                      {selectedLab.accredited && (
                        <div className="flex items-center space-x-1 text-blue-600">
                          <Award className="w-4 h-4" />
                          <span className="text-sm font-medium">Accredited</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedLab(null)}
                    className="text-gray-500 hover:text-gray-700 text-3xl font-light"
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
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">Report Time: {selectedLab.reportTime}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                    <FlaskConical className="w-5 h-5 text-pink-600" />
                    <span>{t('availableTests')}</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedLab.tests.map((test) => (
                      <span
                        key={test}
                        className="px-3 py-2 bg-pink-100 text-pink-700 text-sm rounded-full font-medium"
                      >
                        {test}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span>{t('pricing')}</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-xl">
                      <p className="text-sm text-emerald-600 font-medium mb-1">{t('basicPackage')}</p>
                      <p className="text-xl font-bold text-emerald-700">Rs. {selectedLab.pricing.basicPackage}</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl">
                      <p className="text-sm text-blue-600 font-medium mb-1">{t('comprehensivePackage')}</p>
                      <p className="text-xl font-bold text-blue-700">Rs. {selectedLab.pricing.comprehensivePackage}</p>
                    </div>
                  </div>
                  <div className="mt-4 bg-gray-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-600 font-medium mb-1">{t('singleTest')}</p>
                    <p className="text-lg font-bold text-gray-700">{selectedLab.pricing.singleTest}</p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={`tel:${selectedLab.phone}`}
                    className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-4 rounded-xl text-center hover:from-pink-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                  >
                    {t('callLab')}
                  </a>
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
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