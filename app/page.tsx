import React from 'react';
import { CheckCircle, Shield, Award, Users, ArrowRight, BookOpen, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Homepage() {
  const sampleTutors = [
    {
      id: 1,
      name: "Dr. Adewale Ogunleye",
      subjects: ["Mathematics", "Further Mathematics"],
      levels: ["SS1", "SS2", "SS3", "JAMB", "WAEC"],
      experience: 12,
      mode: ["Home", "Online"],
      image: "AO"
    },
    {
      id: 2,
      name: "Mrs. Chioma Nwankwo",
      subjects: ["English Language", "Literature"],
      levels: ["JSS1-3", "SS1-3", "WAEC", "IGCSE"],
      experience: 8,
      mode: ["Home", "Online"],
      image: "CN"
    },
    {
      id: 3,
      name: "Mr. Ibrahim Yusuf",
      subjects: ["Physics", "Chemistry"],
      levels: ["SS1", "SS2", "SS3", "JAMB"],
      experience: 10,
      mode: ["Home", "Online"],
      image: "IY"
    },
    {
      id: 4,
      name: "Miss Tolulope Adeyemi",
      subjects: ["Biology", "Agricultural Science"],
      levels: ["JSS1-3", "SS1-3", "WAEC"],
      experience: 6,
      mode: ["Home", "Online"],
      image: "TA"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Classroom-Standard Education, Delivered at Home
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Connect with rigorously screened, professional tutors who meet formal classroom teaching standards. Personalized learning for your child, delivered through home and online tutoring you can trust.
            </p>
            <Link href="/request" className="inline-flex items-center bg-teal-600 text-white px-8 py-4 rounded-md hover:bg-teal-700 transition-colors duration-200 font-semibold text-lg">
              Find a Tutor
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Parent Problem Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Finding the Right Tutor Shouldn't Be This Hard
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              As a parent, you want the best for your child's education. But finding a tutor who is truly qualified, experienced, trustworthy, and aligned with school curriculum standards can feel overwhelming and risky.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Academic Credentials", desc: "Are they actually qualified to teach?" },
              { icon: Users, title: "Teaching Experience", desc: "Can they effectively engage children?" },
              { icon: Shield, title: "Trust & Safety", desc: "Can you trust them in your home?" },
              { icon: BookOpen, title: "Curriculum Alignment", desc: "Do they know what schools teach?" }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                <item.icon className="text-teal-600 mb-4" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              An Institutional-Quality Solution
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Royal Home Tutors removes the uncertainty and risk from private tutoring. We act as a quality-control layer between parents and tutors, ensuring every recommendation meets the same standards you'd expect from a formal classroom teacher.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We don't just connect you with tutors. We carefully vet, verify, and screen every tutor to ensure they deliver consistent, high-quality academic instruction that aligns with school curriculum standards.
            </p>
          </div>
        </div>
      </section>

      {/* The Royal Screen™ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-teal-50 text-teal-700 px-4 py-2 rounded-full font-semibold mb-4">
              <Shield className="mr-2" size={20} />
              Quality Assurance System
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Royal Screen™
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our rigorous four-stage screening process ensures every tutor meets classroom-level teaching standards before being recommended to your family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                stage: "Stage 1",
                title: "Academic Verification",
                description: "We verify educational credentials, assess subject mastery through competency evaluations, and confirm familiarity with current Nigerian curriculum standards including WAEC, JAMB, and IGCSE syllabi. Only tutors with proven academic qualifications advance to the next stage."
              },
              {
                stage: "Stage 2",
                title: "Teaching Competence",
                description: "Tutors demonstrate their ability to explain complex concepts clearly, engage students effectively, and adapt teaching methods to different learning styles. We assess communication skills, lesson structure, and pedagogical approach through live teaching demonstrations and scenario-based assessments."
              },
              {
                stage: "Stage 3",
                title: "Experience & Track Record",
                description: "We review prior tutoring or classroom teaching experience, verify professional references, and evaluate past student outcomes where applicable. This stage ensures tutors have practical experience working with children and a proven track record of helping students improve academically."
              },
              {
                stage: "Stage 4",
                title: "Integrity & Safety",
                description: "The final stage includes identity verification, conduct standards assessment, and basic background checks. We ensure tutors demonstrate professionalism, reliability, and personal integrity. Only tutors who successfully pass all four stages earn the designation of Royal Screened Tutor."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl border border-teal-100">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-sm text-teal-700 font-semibold">{item.stage}</p>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-amber-50 text-amber-800 px-6 py-3 rounded-lg border border-amber-200">
              <CheckCircle className="mr-2 text-amber-600" size={20} />
              <span className="font-semibold">All recommended tutors are Royal Screened Tutors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tutor Preview Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Royal Screened Tutors
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Every tutor has successfully completed The Royal Screen™ and meets our classroom-standard teaching requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {sampleTutors.map((tutor) => (
              <div key={tutor.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-teal-100 to-blue-100 h-32 flex items-center justify-center">
                  <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {tutor.image}
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <h3 className="font-bold text-gray-900 mb-1">{tutor.name}</h3>
                    <div className="flex items-center text-xs text-teal-700 bg-teal-50 px-2 py-1 rounded inline-flex">
                      <CheckCircle size={12} className="mr-1" />
                      Royal Screened
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-gray-600 font-medium">Subjects:</p>
                      <p className="text-gray-900">{tutor.subjects.join(", ")}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Levels:</p>
                      <p className="text-gray-900">{tutor.levels.join(", ")}</p>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock size={14} className="mr-1" />
                      <span>{tutor.experience} years experience</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin size={14} className="mr-1" />
                      <span>{tutor.mode.join(" & ")}</span>
                    </div>
                  </div>
                  <Link href="/request" className="block w-full mt-4 bg-teal-600 text-white text-center py-2 rounded-md hover:bg-teal-700 transition-colors font-medium text-sm">
                    Request This Tutor
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/tutors" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold">
              View All Tutors
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Getting started with Royal Home Tutors is simple, transparent, and designed with your family's needs in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Share Your Child's Needs",
                description: "Tell us about your child's class level, subjects, learning goals, and whether you prefer home or online tutoring. We take the time to understand what matters most to your family."
              },
              {
                step: "2",
                title: "We Match & Recommend",
                description: "Our team carefully reviews your requirements and matches you with a Royal Screened Tutor whose expertise, experience, and teaching style align with your child's academic needs."
              },
              {
                step: "3",
                title: "Lessons Begin",
                description: "Once you approve the match, lessons begin at your preferred location or online. Your child receives consistent, high-quality instruction from a tutor you can trust."
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Approach Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Fair, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We believe quality education should be accessible and pricing should be fair. That's why we don't use fixed rates or one-size-fits-all packages.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Your pricing is tailored based on your child's class level, the subjects needed, session frequency and duration, and whether you prefer home or online tutoring. This ensures you only pay for exactly what your child needs.
            </p>
            <Link href="/pricing" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold text-lg">
              Learn About Our Pricing Approach
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Give Your Child Classroom-Standard Education at Home?
          </h2>
          <p className="text-xl mb-8 text-teal-50 max-w-2xl mx-auto">
            Connect with a Royal Screened Tutor today and experience the difference that rigorous screening and professional teaching standards can make.
          </p>
          <Link href="/request" className="inline-flex items-center bg-white text-teal-600 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg">
            Request a Tutor Now
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
