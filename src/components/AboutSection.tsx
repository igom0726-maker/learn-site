import React from 'react';
import { PERSONAL_INFO, TIMELINE_ITEMS } from '../data/portfolioData';
import { Award, Briefcase, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#f6f3f2]" id="about">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left column: Narrative & Certifications */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-6 h-6 text-[#974400]" />
              <h2 className="text-3xl font-bold text-[#974400]">About</h2>
            </div>
            
            <p className="text-[#564338] text-lg leading-relaxed font-normal">
              {PERSONAL_INFO.bio}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {PERSONAL_INFO.certifications.map((cert, index) => (
                <span
                  key={index}
                  className="bg-[#e4e2e1] text-[#564338] px-3.5 py-1.5 rounded-full font-medium text-xs sm:text-sm border border-[#ddc1b3]/50 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#974400]" />
                  <span>{cert}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 p-5 bg-white rounded-2xl border border-[#ddc1b3] shadow-xs">
            <h4 className="font-semibold text-sm text-[#974400] uppercase tracking-wider mb-2">
              Core Strengths
            </h4>
            <p className="text-sm text-[#564338] leading-relaxed">
              · 사용자 인터뷰(IDI) 기반 문제 발굴<br />
              · P0 / P1 / P2 기능 우선순위화(MoSCoW)<br />
              · 가독성 높은 IA 및 와이어프레임 설계
            </p>
          </div>
        </div>

        {/* Right column: Experience Timeline */}
        <div className="md:col-span-7 flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-5 h-5 text-[#8a7266]" />
            <h3 className="text-xs font-semibold text-[#8a7266] uppercase tracking-widest">
              Experience Timeline
            </h3>
          </div>

          {TIMELINE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-4 p-6 bg-white rounded-xl border border-[#ddc1b3] hover:border-[#974400]/50 transition-all shadow-xs"
            >
              <div className="text-[#974400] font-semibold text-sm sm:text-base whitespace-nowrap min-w-[130px]">
                {item.period}
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="font-bold text-lg text-[#1b1c1c]">
                    {item.role}
                  </h4>
                  <span className="text-xs bg-[#f0eded] text-[#564338] px-2.5 py-0.5 rounded-md font-medium">
                    {item.companyCategory}
                  </span>
                </div>

                <ul className="text-[#564338] text-sm space-y-1.5 list-disc list-inside leading-normal">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-[#564338]">
                      <span className="text-[#1b1c1c]">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
