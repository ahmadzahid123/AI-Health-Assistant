import React, { useState } from 'react';
import { MapPin, Phone, Calendar, Star, Clock, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  qualifications: string;
  location: string;
  city: string;
  phone: string;
  rating: number;
  experience: number;
  availability: string;
  consultationFee: number;
  languages: string[];
}

export const DoctorSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');

  const specialties = [
    'General Physician',
    'Cardiologist',
    'Dermatologist',
    'Gynecologist',
    'Pediatrician',
    'Orthopedic Surgeon',
    'Neurologist',
    'Psychiatrist',
    'ENT Specialist',
    'Ophthalmologist',
    'Urologist',
    'Gastroenterologist'
  ];

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

  const doctors: Doctor[] = [
    {
      id: '1',
      name: 'Dr. Ahmed Hassan',
      specialty: 'General Physician',
      qualifications: 'MBBS, FCPS',
      location: 'Gulberg, Lahore',
      city: 'Lahore',
      phone: '+92-42-35757575',
      rating: 4.8,
      experience: 15,
      availability: 'Mon-Sat: 9:00 AM - 6:00 PM',
      consultationFee: 2000,
      languages: ['Urdu', 'English', 'Punjabi']
    },
    {
      id: '2',
      name: 'Dr. Fatima Khan',
      specialty: 'Gynecologist',
      qualifications: 'MBBS, FCPS, MRCOG',
      location: 'DHA, Karachi',
      city: 'Karachi',
      phone: '+92-21-35353535',
      rating: 4.9,
      experience: 12,
      availability: 'Mon-Fri: 10:00 AM - 8:00 PM',
      consultationFee: 3000,
      languages: ['Urdu', 'English', 'Sindhi']
    },
    {
      id: '3',
      name: 'Dr. Muhammad Ali',
      specialty: 'Cardiologist',
      qualifications: 'MBBS, FCPS, FRCP',
      location: 'F-8, Islamabad',
      city: 'Islamabad',
      phone: '+92-51-22222222',
      rating: 4.7,
      experience: 20,
      availability: 'Mon-Sat: 8:00 AM - 4:00 PM',
      consultationFee: 4000,
      languages: ['Urdu', 'English']
    },
    {
      id: '4',
      name: 'Dr. Ayesha Malik',
      specialty: 'Dermatologist',
      qualifications: 'MBBS, FCPS, Dip. Dermatology',
      location: 'Johar Town, Lahore',
      city: 'Lahore',
      phone: '+92-42-35858585',
      rating: 4.6,
      experience: 8,
      availability: 'Tue-Sun: 11:00 AM - 7:00 PM',
      consultationFee: 2500,
      languages: ['Urdu', 'English', 'Punjabi']
    },
    {
      id: '5',
      name: 'Dr. Sami Ullah',
      specialty: 'Pediatrician',
      qualifications: 'MBBS, FCPS, DCH',
      location: 'Saddar, Rawalpindi',
      city: 'Rawalpindi',
      phone: '+92-51-55555555',
      rating: 4.8,
      experience: 18,
      availability: 'Mon-Sat: 9:00 AM - 5:00 PM',
      consultationFee: 2200,
      languages: ['Urdu', 'English', 'Pashto']
    },
    {
      id: '6',
      name: 'Dr. Zara Ahmed',
      specialty: 'Psychiatrist',
      qualifications: 'MBBS, FCPS, MRCPsych',
      location: 'Clifton, Karachi',
      city: 'Karachi',
      phone: '+92-21-35757575',
      rating: 4.9,
      experience: 14,
      availability: 'Mon-Fri: 2:00 PM - 9:00 PM',
      consultationFee: 3500,
      languages: ['Urdu', 'English', 'Sindhi']
    }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSpecialty = !selectedSpecialty || doctor.specialty === selectedSpecialty;
    const matchesCity = !selectedCity || doctor.city === selectedCity;
    return matchesSpecialty && matchesCity;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {t('findDoctor')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('findDoctorDescription')}
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('specialty')}
              </label>
              <div className="relative">
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none"
                >
                  <option value="">{t('allSpecialties')}</option>
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-2.5 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('city')}
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
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
                    <p className="text-emerald-600 font-medium">{doctor.specialty}</p>
                    <p className="text-gray-600 text-sm">{doctor.qualifications}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{doctor.rating}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{doctor.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{doctor.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{doctor.availability}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-600">{t('experience')}</p>
                    <p className="font-semibold text-gray-800">{doctor.experience} {t('years')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{t('consultationFee')}</p>
                    <p className="font-semibold text-gray-800">Rs. {doctor.consultationFee}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">{t('languages')}</p>
                  <div className="flex flex-wrap gap-1">
                    {doctor.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <a
                    href={`tel:${doctor.phone}`}
                    className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg text-center hover:bg-emerald-700 transition-colors"
                  >
                    {t('callNow')}
                  </a>
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    {t('bookAppointment')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              {t('noDoctorsFound')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};