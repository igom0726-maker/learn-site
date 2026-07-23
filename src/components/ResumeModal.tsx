import React from 'react';
import { PERSONAL_INFO, TIMELINE_ITEMS, SKILL_CATEGORIES } from '../data/portfolioData';
import { X, Download, Printer, Mail, Phone, MapPin, Award } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Create text summary or trigger print preview
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-2xl border border-[#ddc1b3] shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto my-auto relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Actions */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#ddc1b3] flex items-center justify-between z-10 print:hidden">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#974400]" />
            <h3 className="font-bold text-lg text-[#1b1c1c]">이력서 (Resume)</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 bg-[#974400] text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#7a3700] transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>인쇄 / PDF 저장</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#564338] hover:bg-[#f0eded] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Container */}
        <div className="p-8 space-y-8 font-sans">
          {/* Candidate Header */}
          <div className="border-b border-[#ddc1b3] pb-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
              <div>
                <h1 className="text-3xl font-bold text-[#1b1c1c]">
                  {PERSONAL_INFO.name} <span className="text-lg font-normal text-[#8a7266]">({PERSONAL_INFO.englishName})</span>
                </h1>
                <p className="text-[#974400] font-semibold text-base mt-1">
                  {PERSONAL_INFO.role}
                </p>
              </div>

              <div className="text-xs sm:text-sm text-[#564338] space-y-1">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#974400]" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#974400]" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#974400]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-[#564338] leading-relaxed bg-[#f6f3f2] p-4 rounded-xl border border-[#ddc1b3]/60">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Experience Timeline */}
          <div>
            <h2 className="text-base font-bold text-[#974400] uppercase tracking-wider mb-4 border-b border-[#ffdbc9] pb-1">
              경력 사항 (Work Experience)
            </h2>
            <div className="space-y-6">
              {TIMELINE_ITEMS.map((item) => (
                <div key={item.id} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-base text-[#1b1c1c]">
                      {item.role} <span className="text-xs font-normal text-[#8a7266]">| {item.companyCategory}</span>
                    </h3>
                    <span className="text-xs font-semibold text-[#974400]">{item.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-[#564338] space-y-1 pl-1">
                    {item.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certificates */}
          <div>
            <h2 className="text-base font-bold text-[#974400] uppercase tracking-wider mb-3 border-b border-[#ffdbc9] pb-1">
              자격증 및 수료 (Certifications)
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {PERSONAL_INFO.certifications.map((cert, idx) => (
                <li key={idx} className="bg-[#f6f3f2] p-2.5 rounded-lg text-xs font-semibold text-[#1b1c1c] border border-[#ddc1b3]">
                  ✓ {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h2 className="text-base font-bold text-[#974400] uppercase tracking-wider mb-3 border-b border-[#ffdbc9] pb-1">
              핵심 역량 (Core Skills)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h3 className="font-semibold text-xs text-[#8a7266] uppercase">{cat.title}</h3>
                  <div className="space-y-1">
                    {cat.items.map((it, i) => (
                      <div key={i} className="flex justify-between items-center text-xs text-[#1b1c1c]">
                        <span>• {it.name}</span>
                        <span className="font-bold text-[#974400]">{it.grade}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
