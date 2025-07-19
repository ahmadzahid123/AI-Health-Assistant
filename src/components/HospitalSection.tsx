import React, { useState } from 'react';
import { MapPin, Phone, Clock, Star, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Hospital {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  emergency: string;
  specialties: string[];
  rating: number;
  type: string;
  beds: number;
  established: number;
  image: string;
}

export const HospitalSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCity, setSelectedCity] = useState<string>('');

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

  const hospitals: Hospital[] = [
    {
      id: '1',
      name: 'Shaukat Khanum Memorial Cancer Hospital',
      city: 'Lahore',
      address: '7-A, Block R-3, Johar Town, Lahore',
      phone: '+92-42-35905000',
      emergency: '+92-42-35905000',
      specialties: ['Oncology', 'Radiation Therapy', 'Nuclear Medicine', 'Pathology'],
      rating: 4.9,
      type: 'Private',
      beds: 195,
      established: 1994,
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      id: '2',
      name: 'Aga Khan University Hospital',
      city: 'Karachi',
      address: 'Stadium Road, Karachi',
      phone: '+92-21-34864000',
      emergency: '+92-21-34861739',
      specialties: ['Cardiology', 'Neurology', 'Pediatrics', 'Emergency Medicine'],
      rating: 4.8,
      type: 'Private',
      beds: 720,
      established: 1985,
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      id: '3',
      name: 'Pakistan Institute of Medical Sciences (PIMS)',
      city: 'Islamabad',
      address: 'Shaheed Zulfiqar Ali Bhutto Medical University, Islamabad',
      phone: '+92-51-9260500',
      emergency: '+92-51-9260500',
      specialties: ['General Surgery', 'Internal Medicine', 'Gynecology', 'Orthopedics'],
      rating: 4.2,
      type: 'Government',
      beds: 1200,
      established: 1985,
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      id: '4',
      name: 'Fatima Memorial Hospital',
      city: 'Lahore',
      address: 'Shadman, Lahore',
      phone: '+92-42-35169000',
      emergency: '+92-42-35169000',
      specialties: ['Cardiology', 'Cardiac Surgery', 'Neurology', 'Gastroenterology'],
      rating: 4.6,
      type: 'Private',
      beds: 450,
      established: 1948,
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      id: '5',
      name: 'Liaquat National Hospital',
      city: 'Karachi',
      address: 'Stadium Road, Karachi',
      phone: '+92-21-34412001',
      emergency: '+92-21-34412001',
      specialties: ['Emergency Medicine', 'Trauma Surgery', 'Intensive Care', 'Radiology'],
      rating: 4.5,
      type: 'Private',
      beds: 700,
      established: 1958,
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      id: '6',
      name: 'Combined Military Hospital (CMH)',
      city: 'Rawalpindi',
      address: 'Mall Road, Rawalpindi',
      phone: '+92-51-9270614',
      emergency: '+92-51-9270614',
      specialties: ['General Medicine', 'Surgery', 'Pediatrics', 'Gynecology'],
      rating: 4.3,
      type: 'Military',
      beds: 800,
      established: 1947,
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    }
  ];

  const filteredHospitals = hospitals.filter(hospital => {
    return !selectedCity || hospital.city === selectedCity;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {t('hospitals')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('hospitalsDescription')}
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

        {/* Hospitals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredHospitals.map((hospital) => (
            <div key={hospital.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={hospital.image} 
                  alt={hospital.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{hospital.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      hospital.type === 'Private' ? 'bg-blue-500/80 text-white' :
                      hospital.type === 'Government' ? 'bg-green-500/80 text-white' :
                      'bg-purple-500/80 text-white'
                    }`}>
                      {hospital.type}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-white">{hospital.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-4">
                  <div className="flex items-start space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span>{hospital.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{hospital.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-red-600">
                    <Phone className="w-4 h-4" />
                    <span>{t('emergency')}: {hospital.emergency}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">{t('specialties')}</h4>
                  <div className="flex flex-wrap gap-1">
                    {hospital.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-gray-600">{t('beds')}</p>
                    <p className="font-semibold text-gray-800">{hospital.beds}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">{t('established')}</p>
                    <p className="font-semibold text-gray-800">{hospital.established}</p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <a
                    href={`tel:${hospital.phone}`}
                    className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg text-center hover:bg-emerald-700 transition-colors"
                  >
                    {t('callHospital')}
                  </a>
                  <a
                    href={`tel:${hospital.emergency}`}
                    className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg text-center hover:bg-red-700 transition-colors"
                  >
                    {t('emergency')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredHospitals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              {t('noHospitalsFound')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};