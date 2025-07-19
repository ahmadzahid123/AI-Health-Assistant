import React, { useState } from 'react';
import { Search, AlertTriangle, Info, Clock, Pill } from 'lucide-react';
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
      manufacturer: 'GlaxoSmithKline / Local manufacturers'
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
      manufacturer: 'Abbott / Searle'
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
      manufacturer: 'GlaxoSmithKline / Getz Pharma'
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
      manufacturer: 'Novartis / Searle'
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
      manufacturer: 'Merck / Sanofi'
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
      manufacturer: 'Pfizer / Boehringer Ingelheim'
    }
  ];

  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {t('medicines')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('medicinesDescription')}
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={t('searchMedicines')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Medicines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedicines.map((medicine) => (
            <div key={medicine.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{medicine.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{medicine.genericName}</p>
                    <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs">
                      {medicine.type}
                    </span>
                  </div>
                  <Pill className="w-8 h-8 text-emerald-600" />
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">{t('commonUses')}</h4>
                  <div className="flex flex-wrap gap-1">
                    {medicine.uses.slice(0, 3).map((use) => (
                      <span
                        key={use}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                      >
                        {use}
                      </span>
                    ))}
                    {medicine.uses.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        +{medicine.uses.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">{t('price')}</p>
                  <p className="font-semibold text-gray-800">{medicine.price}</p>
                </div>

                <button
                  onClick={() => setSelectedMedicine(medicine)}
                  className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Info className="w-4 h-4" />
                  <span>{t('getDetailedInfo')}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredMedicines.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              {t('noMedicinesFound')}
            </p>
          </div>
        )}

        {/* Medicine Detail Modal */}
        {selectedMedicine && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedMedicine.name}</h2>
                    <p className="text-gray-600">{selectedMedicine.genericName}</p>
                    <span className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm mt-2">
                      {selectedMedicine.type}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedMedicine(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                      <Pill className="w-5 h-5 text-emerald-600" />
                      <span>{t('uses')}</span>
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 mb-6">
                      {selectedMedicine.uses.map((use, index) => (
                        <li key={index}>{use}</li>
                      ))}
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span>{t('dosage')}</span>
                    </h3>
                    <p className="text-gray-600 mb-6">{selectedMedicine.dosage}</p>

                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {t('manufacturer')}
                    </h3>
                    <p className="text-gray-600 mb-6">{selectedMedicine.manufacturer}</p>

                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {t('price')}
                    </h3>
                    <p className="text-gray-600 mb-6">{selectedMedicine.price}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      <span>{t('sideEffects')}</span>
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 mb-6">
                      {selectedMedicine.sideEffects.map((effect, index) => (
                        <li key={index}>{effect}</li>
                      ))}
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                      <Info className="w-5 h-5 text-blue-600" />
                      <span>{t('precautions')}</span>
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 mb-6">
                      {selectedMedicine.precautions.map((precaution, index) => (
                        <li key={index}>{precaution}</li>
                      ))}
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                      <span>{t('contraindications')}</span>
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {selectedMedicine.contraindications.map((contraindication, index) => (
                        <li key={index}>{contraindication}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>{t('disclaimer')}:</strong> {t('medicineDisclaimer')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};