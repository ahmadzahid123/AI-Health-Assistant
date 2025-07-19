import React, { useState } from 'react';
import { Upload, Check, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FormData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    cnic: string;
    dateOfBirth: string;
    gender: string;
  };
  professionalInfo: {
    pmcNumber: string;
    qualification: string;
    specialty: string;
    experience: string;
    currentWorkplace: string;
    consultationFee: string;
  };
  practiceInfo: {
    clinicName: string;
    clinicAddress: string;
    city: string;
    availability: string;
    languages: string[];
    onlineConsultation: boolean;
    homeVisit: boolean;
  };
  documents: {
    pmcCertificate: File | null;
    degreeCertificate: File | null;
    cnicCopy: File | null;
    profilePhoto: File | null;
  };
}

export const DoctorRegistration: React.FC = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      cnic: '',
      dateOfBirth: '',
      gender: ''
    },
    professionalInfo: {
      pmcNumber: '',
      qualification: '',
      specialty: '',
      experience: '',
      currentWorkplace: '',
      consultationFee: ''
    },
    practiceInfo: {
      clinicName: '',
      clinicAddress: '',
      city: '',
      availability: '',
      languages: [],
      onlineConsultation: false,
      homeVisit: false
    },
    documents: {
      pmcCertificate: null,
      degreeCertificate: null,
      cnicCopy: null,
      profilePhoto: null
    }
  });

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
    'Gastroenterologist',
    'Endocrinologist',
    'Pulmonologist',
    'Nephrologist',
    'Rheumatologist'
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
    'Gujranwala',
    'Hyderabad',
    'Sargodha'
  ];

  const languages = [
    'Urdu',
    'English',
    'Punjabi',
    'Sindhi',
    'Pashto',
    'Balochi',
    'Arabic'
  ];

  const handlePersonalInfoChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const handleProfessionalInfoChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      professionalInfo: {
        ...prev.professionalInfo,
        [field]: value
      }
    }));
  };

  const handlePracticeInfoChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({
      ...prev,
      practiceInfo: {
        ...prev.practiceInfo,
        [field]: value
      }
    }));
  };

  const handleLanguageChange = (language: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      practiceInfo: {
        ...prev.practiceInfo,
        languages: checked 
          ? [...prev.practiceInfo.languages, language]
          : prev.practiceInfo.languages.filter(lang => lang !== language)
      }
    }));
  };

  const handleFileUpload = (field: string, file: File | null) => {
    setFormData(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        [field]: file
      }
    }));
  };

  const handleSubmit = () => {
    alert('Application submitted successfully! We will review your documents and contact you within 2-3 business days.');
  };

  const steps = [
    { id: 1, title: t('personalInfo'), icon: '👤' },
    { id: 2, title: t('professionalInfo'), icon: '🏥' },
    { id: 3, title: t('practiceInfo'), icon: '📋' },
    { id: 4, title: t('documents'), icon: '📄' },
    { id: 5, title: t('review'), icon: '✅' }
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('fullName')} *
                </label>
                <input
                  type="text"
                  value={formData.personalInfo.name}
                  onChange={(e) => handlePersonalInfoChange('name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Dr. Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('email')} *
                </label>
                <input
                  type="email"
                  value={formData.personalInfo.email}
                  onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="doctor@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('phone')} *
                </label>
                <input
                  type="tel"
                  value={formData.personalInfo.phone}
                  onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="+92-XXX-XXXXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('cnic')} *
                </label>
                <input
                  type="text"
                  value={formData.personalInfo.cnic}
                  onChange={(e) => handlePersonalInfoChange('cnic', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="XXXXX-XXXXXXX-X"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('dateOfBirth')} *
                </label>
                <input
                  type="date"
                  value={formData.personalInfo.dateOfBirth}
                  onChange={(e) => handlePersonalInfoChange('dateOfBirth', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('gender')} *
                </label>
                <select
                  value={formData.personalInfo.gender}
                  onChange={(e) => handlePersonalInfoChange('gender', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">{t('selectGender')}</option>
                  <option value="male">{t('male')}</option>
                  <option value="female">{t('female')}</option>
                  <option value="other">{t('other')}</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('pmcNumber')} *
                </label>
                <input
                  type="text"
                  value={formData.professionalInfo.pmcNumber}
                  onChange={(e) => handleProfessionalInfoChange('pmcNumber', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="PMC Registration Number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('qualification')} *
                </label>
                <input
                  type="text"
                  value={formData.professionalInfo.qualification}
                  onChange={(e) => handleProfessionalInfoChange('qualification', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="MBBS, FCPS, MD, etc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('specialty')} *
                </label>
                <select
                  value={formData.professionalInfo.specialty}
                  onChange={(e) => handleProfessionalInfoChange('specialty', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">{t('selectSpecialty')}</option>
                  {specialties.map(specialty => (
                    <option key={specialty} value={specialty}>{specialty}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('experience')} *
                </label>
                <input
                  type="number"
                  value={formData.professionalInfo.experience}
                  onChange={(e) => handleProfessionalInfoChange('experience', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Years of experience"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('currentWorkplace')}
                </label>
                <input
                  type="text"
                  value={formData.professionalInfo.currentWorkplace}
                  onChange={(e) => handleProfessionalInfoChange('currentWorkplace', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Current hospital/clinic"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('consultationFee')} *
                </label>
                <input
                  type="number"
                  value={formData.professionalInfo.consultationFee}
                  onChange={(e) => handleProfessionalInfoChange('consultationFee', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Fee in PKR"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('clinicName')}
                </label>
                <input
                  type="text"
                  value={formData.practiceInfo.clinicName}
                  onChange={(e) => handlePracticeInfoChange('clinicName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your clinic name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('city')} *
                </label>
                <select
                  value={formData.practiceInfo.city}
                  onChange={(e) => handlePracticeInfoChange('city', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">{t('selectCity')}</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('clinicAddress')}
              </label>
              <textarea
                value={formData.practiceInfo.clinicAddress}
                onChange={(e) => handlePracticeInfoChange('clinicAddress', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Complete clinic address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('availability')} *
              </label>
              <input
                type="text"
                value={formData.practiceInfo.availability}
                onChange={(e) => handlePracticeInfoChange('availability', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Mon-Sat: 9:00 AM - 6:00 PM"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('languages')} *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {languages.map(language => (
                  <label key={language} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.practiceInfo.languages.includes(language)}
                      onChange={(e) => handleLanguageChange(language, e.target.checked)}
                      className="rounded text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-sm text-gray-700">{language}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.practiceInfo.onlineConsultation}
                  onChange={(e) => handlePracticeInfoChange('onlineConsultation', e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-sm text-gray-700">{t('onlineConsultation')}</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.practiceInfo.homeVisit}
                  onChange={(e) => handlePracticeInfoChange('homeVisit', e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-sm text-gray-700">{t('homeVisit')}</span>
              </label>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries({
                pmcCertificate: t('pmcCertificate'),
                degreeCertificate: t('degreeCertificate'),
                cnicCopy: t('cnicCopy'),
                profilePhoto: t('profilePhoto')
              }).map(([key, label]) => (
                <div key={key} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{label}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {key === 'profilePhoto' ? 'PNG, JPG up to 2MB' : 'PDF, PNG, JPG up to 5MB'}
                  </p>
                  <input
                    type="file"
                    onChange={(e) => handleFileUpload(key, e.target.files?.[0] || null)}
                    accept={key === 'profilePhoto' ? 'image/*' : 'image/*,.pdf'}
                    className="hidden"
                    id={key}
                  />
                  <label
                    htmlFor={key}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
                  >
                    {formData.documents[key as keyof typeof formData.documents] ? (
                      <><Check className="w-4 h-4 mr-2 text-green-600" /> {t('uploaded')}</>
                    ) : (
                      <><Upload className="w-4 h-4 mr-2" /> {t('upload')}</>
                    )}
                  </label>
                </div>
              ))}
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-yellow-400 mr-2" />
                <div>
                  <h3 className="text-sm font-medium text-yellow-800">{t('documentRequirements')}</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <ul className="list-disc list-inside space-y-1">
                      <li>{t('pmcCertificateRequired')}</li>
                      <li>{t('degreeCertificateRequired')}</li>
                      <li>{t('cnicCopyRequired')}</li>
                      <li>{t('profilePhotoRequired')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">{t('reviewApplication')}</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800">{t('personalInfo')}</h4>
                  <p className="text-sm text-gray-600">
                    {formData.personalInfo.name} • {formData.personalInfo.email} • {formData.personalInfo.phone}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800">{t('professionalInfo')}</h4>
                  <p className="text-sm text-gray-600">
                    {formData.professionalInfo.specialty} • {formData.professionalInfo.experience} years • Rs. {formData.professionalInfo.consultationFee}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800">{t('practiceInfo')}</h4>
                  <p className="text-sm text-gray-600">
                    {formData.practiceInfo.city} • {formData.practiceInfo.languages.join(', ')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <div className="flex">
                <Check className="h-5 w-5 text-emerald-400 mr-2" />
                <div>
                  <h3 className="text-sm font-medium text-emerald-800">{t('verificationProcess')}</h3>
                  <p className="mt-1 text-sm text-emerald-700">
                    {t('verificationProcessDescription')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {t('joinAsDoctor')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('joinAsDoctorDescription')}
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step.id ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > step.id ? <Check className="w-5 h-5" /> : <span className="text-sm font-medium">{step.id}</span>}
                </div>
                <div className="ml-2 hidden sm:block">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.id ? 'text-emerald-600' : 'text-gray-600'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-2 ${
                    currentStep > step.id ? 'bg-emerald-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            {steps[currentStep - 1].title}
          </h2>
          
          {renderStepContent()}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className={`px-6 py-2 rounded-lg font-medium ${
                currentStep === 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              {t('previous')}
            </button>
            
            {currentStep < 5 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
              >
                {t('next')}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
              >
                {t('submitApplication')}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};