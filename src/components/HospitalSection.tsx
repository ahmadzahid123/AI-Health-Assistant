import React, { useState } from 'react';
import { MapPin, Phone, Clock, Star, ChevronDown, Building2, Bed, Calendar, Shield } from 'lucide-react';
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
  verified: boolean;
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
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      verified: true
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
      image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      verified: true
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
      image: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      verified: true
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
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      verified: true
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
      image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      verified: true
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
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      verified: true
    }
  ];

  const filteredHospitals = hospitals.filter(hospital => {
    return !selectedCity || hospital.city === selectedCity;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl mb-6">
            <Building2 className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            {t('hospitals')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t('hospitalsDescription')}
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
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
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

        {/* Hospitals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredHospitals.map((hospital) => (
            <div key={hospital.id} className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
              {/* Hospital Image Header */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={hospital.image} 
                  alt={hospital.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Verification Badge */}
                {hospital.verified && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Shield className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                )}

                {/* Rating Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-gray-800">{hospital.rating}</span>
                </div>

                {/* Hospital Type Badge */}
                <div className="absolute bottom-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    hospital.type === 'Private' ? 'bg-blue-500/80 text-white' :
                    hospital.type === 'Government' ? 'bg-green-500/80 text-white' :
                    'bg-purple-500/80 text-white'
                  }`}>
                    {hospital.type}
                  </span>
                </div>

                {/* Hospital Info Overlay */}
                <div className="absolute bottom-4 left-4 right-20">
                  <h3 className="text-xl font-bold text-white mb-1">{hospital.name}</h3>
                  <p className="text-blue-200 font-medium">{hospital.city}</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mt-0.5 text-blue-500" />
                    <span>{hospital.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4 text-green-500" />
                    <span>{hospital.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-red-600">
                    <Phone className="w-4 h-4 text-red-500" />
                    <span className="font-medium">{t('emergency')}: {hospital.emergency}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-blue-500" />
                    <span>{t('specialties')}</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {hospital.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-xl">
                    <div className="flex items-center space-x-2 mb-1">
                      <Bed className="w-4 h-4 text-emerald-600" />
                      <p className="text-sm text-emerald-600 font-medium">{t('beds')}</p>
                    </div>
                    <p className="text-lg font-bold text-emerald-700">{hospital.beds}</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl">
                    <div className="flex items-center space-x-2 mb-1">
                      <Calendar className="w-4 h-4 text-purple-600" />
                      <p className="text-sm text-purple-600 font-medium">{t('established')}</p>
                    </div>
                    <p className="text-lg font-bold text-purple-700">{hospital.established}</p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={`tel:${hospital.phone}`}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl text-center hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {t('callHospital')}
                  </a>
                  <a
                    href={`tel:${hospital.emergency}`}
                    className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 rounded-xl text-center hover:from-red-700 hover:to-red-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {t('emergency')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredHospitals.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-12 h-12 text-gray-400" />
            </div>
            <p className="text-gray-600 text-lg font-medium">
              {t('noHospitalsFound')}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Try selecting a different city to see more results
            </p>
          </div>
        )}
      </div>
    </div>
  );
};