import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<string, Record<string, string>> = {
  en: {
    appName: 'AI Health Assistant',
    findDoctor: 'Find a Doctor',
    hospitals: 'Hospitals',
    medicines: 'Medicines',
    labs: 'Labs',
    joinAsDoctor: 'Join as a Doctor',
    aiChat: 'AI Chat',
    emergency: 'Emergency',
    heroTitle: 'AI Health Assistant for Pakistan',
    heroDescription: 'Get instant health advice, find doctors, hospitals, and medicines. Designed for remote areas of Pakistan with multilingual support.',
    startChat: 'Start AI Chat',
    aiHealthAssistant: 'AI Health Assistant',
    aiHealthAssistantDesc: 'Get instant health advice and symptom guidance',
    findDoctorDesc: 'Find qualified doctors by specialty and location',
    hospitalsDesc: 'Locate hospitals with specialties and contact details',
    medicinesDesc: 'Get detailed information about medicines',
    labsDesc: 'Find diagnostic labs and book appointments',
    joinAsDoctorDesc: 'Register as a doctor to help patients',
    getStarted: 'Get Started',
    availableAlways: 'Available Always',
    responseTime: 'Response Time',
    languages: 'Languages',
    emergencyTitle: 'Medical Emergency?',
    emergencyDescription: 'For life-threatening situations, call emergency services immediately',
    call: 'Call',
    rescue: 'Rescue',
    edhi: 'Edhi',
    ambulance: 'Ambulance',
    // Chat interface
    aiChatDescription: 'Get instant health advice and medical guidance',
    typeYourMessage: 'Type your health question...',
    fever: 'Fever',
    headache: 'Headache',
    disclaimer: 'Disclaimer',
    disclaimerText: 'This AI assistant provides general health information only. Always consult with qualified medical professionals for proper diagnosis and treatment.',
    // Doctors section
    findDoctorDescription: 'Find qualified doctors by specialty and location across Pakistan',
    specialty: 'Specialty',
    allSpecialties: 'All Specialties',
    city: 'City',
    allCities: 'All Cities',
    experience: 'Experience',
    years: 'Years',
    consultationFee: 'Consultation Fee',
    callNow: 'Call Now',
    bookAppointment: 'Book Appointment',
    noDoctorsFound: 'No doctors found matching your criteria',
    // Hospitals section
    hospitalsDescription: 'Find hospitals with specialties and contact information',
    selectCity: 'Select City',
    specialties: 'Specialties',
    beds: 'Beds',
    established: 'Established',
    callHospital: 'Call Hospital',
    noHospitalsFound: 'No hospitals found in the selected city',
    // Medicines section
    medicinesDescription: 'Get detailed information about medicines, their uses, and side effects',
    searchMedicines: 'Search medicines...',
    commonUses: 'Common Uses',
    price: 'Price',
    getDetailedInfo: 'Get Detailed Information',
    noMedicinesFound: 'No medicines found matching your search',
    uses: 'Uses',
    dosage: 'Dosage',
    manufacturer: 'Manufacturer',
    sideEffects: 'Side Effects',
    precautions: 'Precautions',
    contraindications: 'Contraindications',
    medicineDisclaimer: 'This information is for educational purposes only. Always consult with a healthcare professional before taking any medication.',
    // Labs section
    labsDescription: 'Find diagnostic laboratories and book appointments',
    reportTime: 'Report Time',
    homeCollection: 'Home Collection Available',
    popularTests: 'Popular Tests',
    basicPackage: 'Basic Package',
    comprehensivePackage: 'Comprehensive Package',
    singleTest: 'Single Test',
    callLab: 'Call Lab',
    viewDetails: 'View Details',
    noLabsFound: 'No labs found in the selected city',
    availableTests: 'Available Tests',
    pricing: 'Pricing',
    // Doctor registration
    joinAsDoctorDescription: 'Join our platform to help patients across Pakistan',
    personalInfo: 'Personal Information',
    professionalInfo: 'Professional Information',
    practiceInfo: 'Practice Information',
    documents: 'Documents',
    review: 'Review',
    fullName: 'Full Name',
    email: 'Email',
    phone: 'Phone',
    cnic: 'CNIC',
    dateOfBirth: 'Date of Birth',
    gender: 'Gender',
    selectGender: 'Select Gender',
    male: 'Male',
    female: 'Female',
    other: 'Other',
    pmcNumber: 'PMC Number',
    qualification: 'Qualification',
    selectSpecialty: 'Select Specialty',
    currentWorkplace: 'Current Workplace',
    clinicName: 'Clinic Name',
    clinicAddress: 'Clinic Address',
    availability: 'Availability',
    onlineConsultation: 'Online Consultation',
    homeVisit: 'Home Visit',
    pmcCertificate: 'PMC Certificate',
    degreeCertificate: 'Degree Certificate',
    cnicCopy: 'CNIC Copy',
    profilePhoto: 'Profile Photo',
    upload: 'Upload',
    uploaded: 'Uploaded',
    documentRequirements: 'Document Requirements',
    pmcCertificateRequired: 'Valid PMC certificate is required',
    degreeCertificateRequired: 'Medical degree certificate is required',
    cnicCopyRequired: 'Clear copy of CNIC is required',
    profilePhotoRequired: 'Professional profile photo is required',
    reviewApplication: 'Review Your Application',
    verificationProcess: 'Verification Process',
    verificationProcessDescription: 'We will verify your documents and contact you within 2-3 business days.',
    previous: 'Previous',
    next: 'Next',
    submitApplication: 'Submit Application',
    // Footer
    footerDescription: 'Providing accessible healthcare information and services for remote areas of Pakistan.',
    quickLinks: 'Quick Links',
    contact: 'Contact',
    emergencyNumbers: 'Emergency Numbers',
    allRightsReserved: 'All rights reserved.',
    medicalDisclaimer: 'This platform provides general health information only. Always consult qualified medical professionals for proper diagnosis and treatment.',
  },
  ur: {
    appName: 'AI صحت کا معاون',
    findDoctor: 'ڈاکٹر تلاش کریں',
    hospitals: 'ہسپتال',
    medicines: 'ادویات',
    labs: 'لیبز',
    joinAsDoctor: 'ڈاکٹر کے طور پر شامل ہوں',
    aiChat: 'AI چیٹ',
    emergency: 'ایمرجنسی',
    heroTitle: 'پاکستان کے لیے AI صحت کا معاون',
    heroDescription: 'فوری صحت کی مشورہ، ڈاکٹرز، ہسپتالز اور ادویات تلاش کریں۔ پاکستان کے دور دراز علاقوں کے لیے ملتی لسانی سپورٹ کے ساتھ۔',
    startChat: 'AI چیٹ شروع کریں',
    aiHealthAssistant: 'AI صحت کا معاون',
    aiHealthAssistantDesc: 'فوری صحت کی مشورہ اور علامات کی رہنمائی حاصل کریں',
    findDoctorDesc: 'تخصص اور مقام کے مطابق قابل ڈاکٹرز تلاش کریں',
    hospitalsDesc: 'تخصصات اور رابطہ کی تفصیلات کے ساتھ ہسپتال تلاش کریں',
    medicinesDesc: 'ادویات کے بارے میں تفصیلی معلومات حاصل کریں',
    labsDesc: 'تشخیصی لیبز تلاش کریں اور اپائنٹمنٹ بک کریں',
    joinAsDoctorDesc: 'مریضوں کی مدد کے لیے ڈاکٹر کے طور پر رجسٹر کریں',
    getStarted: 'شروع کریں',
    availableAlways: 'ہمیشہ دستیاب',
    responseTime: 'جواب کا وقت',
    languages: 'زبانیں',
    emergencyTitle: 'طبی ایمرجنسی؟',
    emergencyDescription: 'جان لیوا حالات کے لیے فوری طور پر ایمرجنسی سروسز کو کال کریں',
    call: 'کال کریں',
    rescue: 'ریسکیو',
    edhi: 'ایدھی',
    ambulance: 'ایمبولینس',
    // ... Add more Urdu translations
  },
  pa: {
    appName: 'AI صحت دا معاون',
    findDoctor: 'ڈاکٹر لبھو',
    hospitals: 'ہسپتال',
    medicines: 'دوائیاں',
    labs: 'لیبز',
    joinAsDoctor: 'ڈاکٹر بن کے شامل ہوو',
    aiChat: 'AI چیٹ',
    emergency: 'ایمرجنسی',
    // ... Add more Punjabi translations
  },
  sd: {
    appName: 'AI صحت جو مددگار',
    findDoctor: 'ڊاڪٽر ڳوليو',
    hospitals: 'اسپتال',
    medicines: 'دوائون',
    labs: 'ليبز',
    joinAsDoctor: 'ڊاڪٽر طور شامل ٿيو',
    aiChat: 'AI چيٽ',
    emergency: 'ايمرجنسي',
    // ... Add more Sindhi translations
  },
  ps: {
    appName: 'AI د روغتیا مرستندوی',
    findDoctor: 'ډاکټر ومومئ',
    hospitals: 'روغتونونه',
    medicines: 'درمل',
    labs: 'لابراتوارونه',
    joinAsDoctor: 'د ډاکټر په توګه ګډون وکړئ',
    aiChat: 'AI چیټ',
    emergency: 'بیړني',
    // ... Add more Pashto translations
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};