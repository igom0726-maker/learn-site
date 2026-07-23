import React from 'react';
import { ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onScrollToProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToProjects }) => {
  return (
    <section id="top" className="pt-10 md:pt-14 pb-16 md:pb-20 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col gap-6 max-w-3xl">
          {/* Tag Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#ffdbc9] text-[#321200] px-3.5 py-1 rounded-full w-fit">
            <span className="font-semibold text-xs tracking-wider uppercase">
              {PERSONAL_INFO.heroTag}
            </span>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b1c1c] leading-[1.25] tracking-tight whitespace-pre-line">
            {'사용자 조사로 문제를 정의하고,\n'}
            <span className="text-[#974400]">우선순위로 기능</span>
            {'을 좁히는\n서비스기획자 서달미입니다.'}
          </h1>

          {/* CTA Action */}
          <div className="flex gap-4 mt-2">
            <button
              onClick={onScrollToProjects}
              className="bg-[#974400] text-white px-8 py-3.5 rounded-xl font-semibold text-lg shadow-md hover:bg-[#7a3700] transition-all flex items-center gap-2 cursor-pointer group"
            >
              <span>프로젝트 보기</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Key Achievements Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-20">
          {PERSONAL_INFO.heroAchievements.map((item, index) => (
            <div
              key={index}
              className="bento-card p-6 rounded-2xl flex flex-col justify-center border border-[#ddc1b3] bg-white hover:border-[#974400]/40 transition-all"
            >
              <span className="text-[#974400] font-bold text-4xl sm:text-5xl mb-1 tracking-tight">
                {item.value}
              </span>
              <span className="text-[#564338] font-medium text-sm sm:text-base">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

