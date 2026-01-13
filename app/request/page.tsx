
'use client';

import React from 'react';
import { Shield, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

// Request a Tutor Page Component
export default function RequestTutorPage() {
  const [formData, setFormData] = React.useState({
    parentName: '',
    email: '',
    phone: '',
    childLevel: '',
    subjects: '',
    sessionsPerWeek: '',
    teachingMode: '',
    location: '',
    notes: ''
  });

  const [submitStatus, setSubmitStatus] = React.useState<null | 'success' | 'error'>(null);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // <-- Move this OUTSIDE handleSubmit
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      if (
        !formData.parentName ||
        !formData.email ||
        !formData.phone ||
        !formData.childLevel ||
        !formData.subjects ||
        !formData.sessionsPerWeek ||
        !formData.teachingMode
      ) {
        throw new Error('Please fill in all required fields');
      }

      if (formData.teachingMode === 'home' && !formData.location) {
        throw new Error('Location is required for home tutoring');
      }

      // simulate API
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitStatus('success');

      setFormData({
        parentName: '',
        email: '',
        phone: '',
        childLevel: '',
        subjects: '',
        sessionsPerWeek: '',
        teachingMode: '',
        location: '',
        notes: ''
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error: unknown) {
      setSubmitStatus('error');

      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unknown error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
    

      <main className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Request a Tutor
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Tell us about your child's learning needs. We'll recommend a Royal Screened Tutor suited to your requirements.
            </p>
          </div>

          {/* Trust Micro-Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Shield className="text-teal-600 mr-2 flex-shrink-0" size={20} />
                <span className="text-gray-700">All tutors are Royal Screened and meet classroom teaching standards</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-teal-600 mr-2 flex-shrink-0" size={20} />
                <span className="text-gray-700">We respond within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-teal-600 mr-3 flex-shrink-0 mt-0.5" size={24} />
                <div>
                  <h3 className="font-semibold text-teal-900 mb-2">Thank you. Your request has been received.</h3>
                  <p className="text-teal-800">
                    A member of our team will contact you shortly to discuss tutor recommendations and pricing.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <AlertCircle className="text-red-600 mr-3 flex-shrink-0 mt-0.5" size={24} />
                <div>
                  <h3 className="font-semibold text-red-900 mb-2">Something went wrong</h3>
                  <p className="text-red-800">{errorMessage}</p>
                </div>
              </div>
            </div>
          )}

          {/* Form */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            
            {/* SECTION A: Parent Contact Details */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Parent Contact Details
              </h2>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="parentName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Parent Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
              </div>
            </div>

            {/* SECTION B: Child & Academic Needs */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Child & Academic Needs
              </h2>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="childLevel" className="block text-sm font-semibold text-gray-700 mb-2">
                    Child's Class Level <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="childLevel"
                    name="childLevel"
                    value={formData.childLevel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition bg-white"
                  >
                    <option value="">Select class level</option>
                    <option value="nursery">Nursery</option>
                    <option value="primary-1">Primary 1</option>
                    <option value="primary-2">Primary 2</option>
                    <option value="primary-3">Primary 3</option>
                    <option value="primary-4">Primary 4</option>
                    <option value="primary-5">Primary 5</option>
                    <option value="primary-6">Primary 6</option>
                    <option value="jss-1">JSS 1</option>
                    <option value="jss-2">JSS 2</option>
                    <option value="jss-3">JSS 3</option>
                    <option value="ss-1">SS 1</option>
                    <option value="ss-2">SS 2</option>
                    <option value="ss-3">SS 3</option>
                    <option value="jamb">JAMB Preparation</option>
                    <option value="waec">WAEC Preparation</option>
                    <option value="igcse">IGCSE</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subjects" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject(s) Needed <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subjects"
                    name="subjects"
                    value={formData.subjects}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                    placeholder="e.g., Mathematics, English, Physics"
                  />
                  <p className="text-sm text-gray-500 mt-1">Separate multiple subjects with commas</p>
                </div>

                <div>
                  <label htmlFor="sessionsPerWeek" className="block text-sm font-semibold text-gray-700 mb-2">
                    Sessions Per Week <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="sessionsPerWeek"
                    name="sessionsPerWeek"
                    value={formData.sessionsPerWeek}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition bg-white"
                  >
                    <option value="">Select number of sessions</option>
                    <option value="1">1 session per week</option>
                    <option value="2">2 sessions per week</option>
                    <option value="3">3 sessions per week</option>
                    <option value="4">4 sessions per week</option>
                    <option value="5">5 sessions per week</option>
                  </select>
                </div>
              </div>
            </div>

            {/* SECTION C: Tutoring Preferences */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Tutoring Preferences
              </h2>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="teachingMode" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mode of Tutoring <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="teachingMode"
                    name="teachingMode"
                    value={formData.teachingMode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition bg-white"
                  >
                    <option value="">Select tutoring mode</option>
                    <option value="home">Home Tutoring</option>
                    <option value="online">Online Tutoring</option>
                  </select>
                </div>

                {formData.teachingMode === 'home' && (
                  <div className="animate-fadeIn">
                    <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                      Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                      placeholder="Enter your location (e.g., Lekki, Victoria Island)"
                    />
                    <p className="text-sm text-gray-500 mt-1">Please provide your area or neighborhood in Lagos</p>
                  </div>
                )}
              </div>
            </div>

            {/* SECTION D: Additional Context */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Additional Context <span className="text-sm font-normal text-gray-500">(Optional)</span>
              </h2>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition resize-none"
                  placeholder="Any additional information we should know (learning challenges, goals, exam timelines, etc.)"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-teal-600 text-white py-4 px-6 rounded-md hover:bg-teal-700 transition-colors duration-200 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={20} />
                    Submitting Request...
                  </>
                ) : (
                  'Submit Request'
                )}
              </button>
              <p className="text-sm text-gray-600 text-center mt-3">
                We'll review your request and contact you within 24 hours
              </p>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
}




