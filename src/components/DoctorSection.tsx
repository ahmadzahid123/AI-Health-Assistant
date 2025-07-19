import React, { useState } from 'react';
import { MapPin, Phone, Calendar, Star, Clock, ChevronDown, Award, Users, Heart } from 'lucide-react';
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
  image: string;
  verified: boolean;
  patients: number;
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
      languages: ['Urdu', 'English', 'Punjabi'],
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      verified: true,
      patients: 1250
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
      languages: ['Urdu', 'English', 'Sindhi'],
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      verified: true,
      patients: 980
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
      languages: ['Urdu', 'English'],
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      verified: true,
      patients: 1500
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
      languages: ['Urdu', 'English', 'Punjabi'],
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      verified: true,
      patients: 750
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
      languages: ['Urdu', 'English', 'Pashto'],
      image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      verified: true,
      patients: 1100
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
      languages: ['Urdu', 'English', 'Sindhi'],
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      verified: true,
      patients: 650
    }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSpecialty = !selectedSpecialty || doctor.specialty === selectedSpecialty;
    const matchesCity = !selectedCity || doctor.city === selectedCity;
    return matchesSpecialty && matchesCity;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl mb-6">
            <Users className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
            {t('findDoctor')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t('findDoctorDescription')}
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {t('specialty')}
              </label>
              <div className="relative">
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <option value="">{t('allSpecialties')}</option>
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {t('city')}
              </label>
              <div className="relative">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
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
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
              {/* Doctor Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Verification Badge */}
                {doctor.verified && (
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Award className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                )}

                {/* Rating Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-medium text-gray-800">{doctor.rating}</span>
                </div>

                {/* Doctor Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{doctor.name}</h3>
                  <p className="text-emerald-200 font-medium">{doctor.specialty}</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-gray-600 text-sm">{doctor.qualifications}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{doctor.experience} years</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-gray-600">{doctor.patients}+ patients</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-emerald-500" />
                    <span>{doctor.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4 text-blue-500" />
                    <span>{doctor.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-purple-500" />
                    <span>{doctor.availability}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-600">{t('consultationFee')}</p>
                    <p className="font-bold text-lg text-emerald-600">Rs. {doctor.consultationFee}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">{t('languages')}</p>
                  <div className="flex flex-wrap gap-1">
                    {doctor.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <a
                    href={`tel:${doctor.phone}`}
                    className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-4 rounded-xl text-center hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {t('callNow')}
                  </a>
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    {t('bookAppointment')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-12 h-12 text-gray-400" />
            </div>
            <p className="text-gray-600 text-lg font-medium">
              {t('noDoctorsFound')}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Try adjusting your filters to see more results
            </p>
          </div>
        )}
      </div>
    </div>
  );
};