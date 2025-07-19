import React, { useState } from 'react';
import { Search, AlertTriangle, Info, Clock, Pill, Shield, DollarSign } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Medicine {
  id: string;
  name: string;
  genericName: string;
  type: string;
  uses: string[];
  dosage: string;
  sideEffects: string[];
  precautions: string[];
  contraindications: string[];
  price: string;
  manufacturer: string;
  image: string;
  verified: boolean;
}

export const MedicineSection: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(null);

  const medicines: Medicine[] = [
    {
      id: '1',
      name: 'Paracetamol',
      genericName: 'Acetaminophen',
      type: 'Pain Relief / Fever Reducer',
      uses: ['Fever', 'Headache', 'Body aches', 'Pain relief'],
      dosage: '500mg-1000mg every 4-6 hours (max 4g/day)',
      sideEffects: ['Nausea', 'Stomach upset', 'Allergic reactions (rare)'],
      precautions: ['Do not exceed recommended dose', 'Avoid alcohol', 'Consult doctor if pregnant'],
      contraindications: ['Liver disease', 'Alcohol dependence', 'Allergy to acetaminophen'],
      price: 'Rs. 5-15 per tablet',
      manufacturer: 'GlaxoSmithKline / Local manufacturers',
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      verified: true
    },
    {
      id: '2',
      name: 'Ibuprofen',
      genericName: 'Ibuprofen',
      type: 'Anti-inflammatory / Pain Relief',
      uses: ['Pain relief', 'Inflammation', 'Fever', 'Menstrual cramps'],
      dosage: '200mg-400mg every 4-6 hours (max 1.2g/day)',
      sideEffects: ['Stomach upset', 'Nausea', 'Dizziness', 'Heartburn'],
      precautions: ['Take with food', 'Avoid in kidney disease', 'Monitor blood pressure'],
      contraindications: ['Kidney disease', 'Heart disease', 'Stomach ulcers', 'Pregnancy (3rd trimester)'],
      price: 'Rs. 8-20 per tablet',
      manufacturer: 'Abbott / Searle',
      image: 'https://images.pexels.com/photos/3683094/pexels-photo-3683094.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      verified: true
    },
    {
      id: '3',
      name: 'Amoxicillin',
      genericName: 'Amoxicillin',
      type: 'Antibiotic',
      uses: ['Bacterial infections', 'Respiratory tract infections', 'Urinary tract infections', 'Skin infections'],
      dosage: '250mg-500mg every 8 hours for 7-10 days',
      sideEffects: ['Nausea', 'Diarrhea', 'Stomach pain', 'Allergic reactions'],
      precautions: ['Complete full course', 'Take with food', 'Inform doctor of allergies'],
      contraindications: ['Penicillin allergy', 'Mononucleosis', 'Severe kidney disease'],
      price: 'Rs. 15-30 per capsule',
      manufacturer: 'GlaxoSmithKline / Getz Pharma',
      image: 'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      verified: true
    },
    {
      id: '4',
      name: 'Omeprazole',
      genericName: 'Omeprazole',
      type: 'Proton Pump Inhibitor',
      uses: ['Acid reflux', 'Stomach ulcers', 'GERD', 'Heartburn'],
      dosage: '20mg-40mg once daily before breakfast',
      sideEffects: ['Headache', 'Nausea', 'Diarrhea', 'Abdominal pain'],
      precautions: ['Take before meals', 'Monitor for bone fractures', 'Check B12 levels'],
      contraindications: ['Severe liver disease', 'Allergy to omeprazole'],
      price: 'Rs. 25-50 per capsule',
      manufacturer: 'Novartis / Searle',
      image: 'https://images.pexels.com/photos/3683089/pexels-photo-3683089.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      verified: true
    },
    {
      id: '5',
      name: 'Metformin',
      genericName: 'Metformin HCl',
      type: 'Antidiabetic',
      uses: ['Type 2 diabetes', 'Blood sugar control', 'Weight management'],
      dosage: '500mg-850mg twice daily with meals',
      sideEffects: ['Nausea', 'Diarrhea', 'Metallic taste', 'Vitamin B12 deficiency'],
      precautions: ['Take with meals', 'Monitor kidney function', 'Avoid alcohol'],
      contraindications: ['Kidney disease', 'Liver disease', 'Heart failure', 'Severe dehydration'],
      price: 'Rs. 10-25 per tablet',
      manufacturer: 'Merck / Sanofi',
      image: 'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      verified: true
    },
    {
      id: '6',
      name: 'Amlodipine',
      genericName: 'Amlodipine Besylate',
      type: 'Calcium Channel Blocker',
      uses: ['High blood pressure', 'Chest pain (angina)', 'Coronary artery disease'],
      dosage: '5mg-10mg once daily',
      sideEffects: ['Swelling of feet/ankles', 'Dizziness', 'Flushing', 'Fatigue'],
      precautions: ['Monitor blood pressure', 'Rise slowly from sitting', 'Regular check-ups'],
      contraindications: ['Severe heart failure', 'Severe liver disease', 'Allergy to amlodipine'],
      price: 'Rs. 20-40 per tablet',
      manufacturer: 'Pfizer / Boehringer Ingelheim',
      image: 'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      verified: true
    }
  ];

  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl mb-6">
            <Pill className="w-8 h-8 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            {t('medicines')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t('medicinesDescription')}
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={t('searchMedicines')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
            />
          </div>
        </div>

        {/* Medicines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMedicines.map((medicine) => (
            <div key={medicine.id} className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
              {/* Medicine Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={medicine.image} 
                  alt={medicine.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Verification Badge */}
                {medicine.verified && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Shield className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                )}

                {/* Medicine Type Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-gray-800">{medicine.type}</span>
                </div>

                {/* Medicine Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{medicine.name}</h3>
                  <p className="text-orange-200 font-medium">{medicine.genericName}</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center space-x-2">
                    <Pill className="w-4 h-4 text-orange-500" />
                    <span>{t('commonUses')}</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {medicine.uses.slice(0, 3).map((use) => (
                      <span
                        key={use}
                        className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium"
                      >
                        {use}
                      </span>
                    ))}
                    {medicine.uses.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                        +{medicine.uses.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
                    <div className="flex items-center space-x-2 mb-1">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <p className="text-sm text-green-600 font-medium">{t('price')}</p>
                    </div>
                    <p className="text-lg font-bold text-green-700">{medicine.price}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">Manufacturer</p>
                  <p className="text-sm font-medium text-gray-800">{medicine.manufacturer}</p>
                </div>

                <button
                  onClick={() => setSelectedMedicine(medicine)}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-4 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 flex items-center justify-center space-x-2 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Info className="w-4 h-4" />
                  <span>{t('getDetailedInfo')}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredMedicines.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Pill className="w-12 h-12 text-gray-400" />
            </div>
            <p className="text-gray-600 text-lg font-medium">
              {t('noMedicinesFound')}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Try searching with a different medicine name
            </p>
          </div>
        )}

        {/* Medicine Detail Modal */}
        {selectedMedicine && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">{selectedMedicine.name}</h2>
                    <p className="text-gray-600 text-lg">{selectedMedicine.genericName}</p>
                    <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm mt-2 font-medium">
                      {selectedMedicine.type}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedMedicine(null)}
                    className="text-gray-500 hover:text-gray-700 text-3xl font-light"
                  >
                    ×
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                      <Pill className="w-5 h-5 text-orange-600" />
                      <span>{t('uses')}</span>
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                      {selectedMedicine.uses.map((use, index) => (
                        <li key={index}>{use}</li>
                      ))}
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span>{t('dosage')}</span>
                    </h3>
                    <p className="text-gray-600 mb-6 bg-blue-50 p-4 rounded-xl">{selectedMedicine.dosage}</p>

                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      {t('manufacturer')}
                    </h3>
                    <p className="text-gray-600 mb-6">{selectedMedicine.manufacturer}</p>

                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <span>{t('price')}</span>
                    </h3>
                    <p className="text-gray-600 mb-6 bg-green-50 p-4 rounded-xl font-medium">{selectedMedicine.price}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      <span>{t('sideEffects')}</span>
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                      {selectedMedicine.sideEffects.map((effect, index) => (
                        <li key={index}>{effect}</li>
                      ))}
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                      <Info className="w-5 h-5 text-blue-600" />
                      <span>{t('precautions')}</span>
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                      {selectedMedicine.precautions.map((precaution, index) => (
                        <li key={index}>{precaution}</li>
                      ))}
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                      <span>{t('contraindications')}</span>
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {selectedMedicine.contraindications.map((contraindication, index) => (
                        <li key={index}>{contraindication}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <p className="text-sm text-yellow-800 leading-relaxed">
                        <strong>{t('disclaimer')}:</strong> {t('medicineDisclaimer')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};