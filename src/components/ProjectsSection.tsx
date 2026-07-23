import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ChevronRight, CheckCircle2, ArrowRight, Layers, FileText } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'AI', '커머스/소상공인', '콘텐츠/운영'];

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const plantProject = PROJECTS.find(p => p.id === 'plant-care-ai');
  const storeProject = PROJECTS.find(p => p.id === 'local-store-booking');
  const contentProject = PROJECTS.find(p => p.id === 'youth-job-content');
  const miniProject = PROJECTS.find(p => p.id === 'univ-teamwork-improvement');

  return (
    <section className="py-20" id="projects">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#974400] mb-3">
            Selected Projects
          </h2>
          <p className="text-[#564338] text-base max-w-xl mx-auto">
            데이터와 사용자 보이스 기반으로 문제를 정의하고, 명확한 가치를 창출한 기획 프로젝트
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#974400] text-white shadow-xs'
                    : 'bg-[#f0eded] text-[#564338] hover:bg-[#ffdbc9] hover:text-[#321200]'
                }`}
              >
                {cat === 'ALL' ? '전체 프로젝트' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-16 md:gap-20">
          {/* Project 1: AI 반려식물 */}
          {plantProject && (activeCategory === 'ALL' || activeCategory === 'AI') && (
            <article className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-[#ddc1b3] pb-16">
              <div className="md:col-span-5">
                <div 
                  className="aspect-video bg-[#f0eded] rounded-2xl overflow-hidden mb-4 shadow-xs border border-[#ddc1b3] cursor-pointer group"
                  onClick={() => onSelectProject(plantProject)}
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={plantProject.imageUrl}
                    alt={plantProject.title}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#ffdbc9] text-[#321200] px-3 py-1 rounded-full font-semibold text-xs">
                    Competitive Winner
                  </span>
                  <span className="bg-[#e4e2e1] text-[#564338] px-3 py-1 rounded-full font-semibold text-xs">
                    AI Management
                  </span>
                </div>
              </div>

              <div className="md:col-span-7 flex flex-col gap-6">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#974400] mb-1">
                      {plantProject.title}
                    </h3>
                    <button
                      onClick={() => onSelectProject(plantProject)}
                      className="text-xs bg-[#f0eded] hover:bg-[#ffdbc9] text-[#974400] px-3 py-1.5 rounded-lg font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>기획 상세서</span>
                    </button>
                  </div>
                  <p className="text-base text-[#564338] font-normal">
                    {plantProject.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 bg-white rounded-xl border border-[#ddc1b3]">
                    <span className="text-xs font-bold text-[#974400] uppercase block mb-1">
                      Problem
                    </span>
                    <p className="text-xs sm:text-sm text-[#1b1c1c] leading-relaxed">
                      {plantProject.problem}
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-[#ddc1b3]">
                    <span className="text-xs font-bold text-[#974400] uppercase block mb-1">
                      Research
                    </span>
                    <p className="text-xs sm:text-sm text-[#1b1c1c] leading-relaxed">
                      {plantProject.research}
                    </p>
                  </div>
                </div>

                {/* Service Logic Flow Chevron Diagram */}
                <div className="bg-[#f6f3f2] p-5 rounded-xl border border-[#ddc1b3]">
                  <span className="text-xs font-bold text-[#974400] uppercase block mb-3">
                    Service Logic (Focus Strategy)
                  </span>
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    <div className="min-w-[110px] p-2 bg-white rounded-lg border border-[#974400]/20 text-center text-xs font-medium text-[#1b1c1c]">
                      사용자 조사
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#974400] shrink-0" />
                    <div className="min-w-[110px] p-2 bg-white rounded-lg border border-[#974400]/20 text-center text-xs font-medium text-[#1b1c1c]">
                      Pain-point 정의
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#974400] shrink-0" />
                    <div className="min-w-[130px] p-2 bg-[#974400] text-white rounded-lg border border-[#974400] text-center text-xs font-semibold shrink-0">
                      8가지 핵심 기능 추출
                    </div>
                  </div>
                </div>

                {/* Result */}
                <div className="flex items-baseline gap-2 pt-1">
                  <span className="text-xl font-bold text-[#974400]">Result:</span>
                  <span className="text-base text-[#1b1c1c] font-medium">
                    {plantProject.result}
                  </span>
                </div>
              </div>
            </article>
          )}

          {/* Project 2: 소상공인 주문예약 */}
          {storeProject && (activeCategory === 'ALL' || activeCategory === '커머스/소상공인') && (
            <article className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-[#ddc1b3] pb-16">
              <div className="md:col-span-7 order-2 md:order-1 flex flex-col gap-6">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#974400] mb-1">
                      {storeProject.title}
                    </h3>
                    <button
                      onClick={() => onSelectProject(storeProject)}
                      className="text-xs bg-[#f0eded] hover:bg-[#ffdbc9] text-[#974400] px-3 py-1.5 rounded-lg font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>기획 상세서</span>
                    </button>
                  </div>
                  <p className="text-base text-[#564338] font-normal">
                    {storeProject.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 bg-white rounded-xl border border-[#ddc1b3]">
                    <span className="text-xs font-bold text-[#974400] uppercase block mb-1">
                      Problem
                    </span>
                    <p className="text-xs sm:text-sm text-[#1b1c1c] leading-relaxed">
                      {storeProject.problem}
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-[#ddc1b3]">
                    <span className="text-xs font-bold text-[#974400] uppercase block mb-1">
                      Research
                    </span>
                    <p className="text-xs sm:text-sm text-[#1b1c1c] leading-relaxed">
                      {storeProject.research}
                    </p>
                  </div>
                </div>

                {/* Execution Focus + Progress Bar */}
                <div className="bg-[#f6f3f2] p-5 rounded-xl border border-[#ddc1b3]">
                  <span className="text-xs font-bold text-[#974400] uppercase block mb-2">
                    Execution Focus
                  </span>
                  <p className="text-xs sm:text-sm text-[#1b1c1c] mb-3">
                    {storeProject.executionFocus?.description}
                  </p>
                  <div className="h-2.5 w-full bg-[#e4e2e1] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#974400] rounded-full transition-all duration-1000"
                      style={{ width: `${storeProject.executionFocus?.progressPercentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-1.5 text-xs font-semibold text-[#564338]">
                    <span>사용성 중심 설계</span>
                    <span className="text-[#974400]">85% 달성</span>
                  </div>
                </div>

                {/* Result */}
                <div className="flex items-baseline gap-2 pt-1">
                  <span className="text-xl font-bold text-[#974400]">Result:</span>
                  <span className="text-base text-[#1b1c1c] font-medium">
                    {storeProject.result}
                  </span>
                </div>
              </div>

              <div className="md:col-span-5 order-1 md:order-2">
                <div 
                  className="aspect-video bg-[#f0eded] rounded-2xl overflow-hidden mb-4 shadow-xs border border-[#ddc1b3] cursor-pointer group"
                  onClick={() => onSelectProject(storeProject)}
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={storeProject.imageUrl}
                    alt={storeProject.title}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </article>
          )}

          {/* Project 3: 청년 취업정보 콘텐츠 */}
          {contentProject && (activeCategory === 'ALL' || activeCategory === '콘텐츠/운영') && (
            <article className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-[#ddc1b3] pb-16">
              <div className="md:col-span-5">
                <div className="p-6 bg-white rounded-2xl border border-[#ddc1b3] shadow-xs h-full flex flex-col justify-between">
                  <span className="text-xs font-bold text-[#8a7266] uppercase tracking-wider">
                    Growth Metrics
                  </span>

                  <div className="flex flex-col gap-6 my-6">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-sm font-semibold text-[#1b1c1c]">
                        <span>조회수 상승률</span>
                        <span className="text-[#974400] font-bold text-lg">+34%</span>
                      </div>
                      <div className="h-3 bg-[#f0eded] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#974400] rounded-full transition-all duration-1000"
                          style={{ width: '34%' }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-sm font-semibold text-[#1b1c1c]">
                        <span>이탈률 감소</span>
                        <span className="text-[#974400] font-bold text-lg">-12%</span>
                      </div>
                      <div className="h-3 bg-[#f0eded] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#bb5808] rounded-full transition-all duration-1000"
                          style={{ width: '60%' }}
                        />
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#8a7266] italic">
                    데이터 기반 콘텐츠 운영 성과 시각화
                  </p>
                </div>
              </div>

              <div className="md:col-span-7 flex flex-col gap-6">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#974400] mb-1">
                      {contentProject.title}
                    </h3>
                    <button
                      onClick={() => onSelectProject(contentProject)}
                      className="text-xs bg-[#f0eded] hover:bg-[#ffdbc9] text-[#974400] px-3 py-1.5 rounded-lg font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>기획 상세서</span>
                    </button>
                  </div>
                  <p className="text-base text-[#564338] font-normal">
                    {contentProject.subtitle}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#ddc1b3]">
                    <CheckCircle2 className="w-5 h-5 text-[#974400] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-[#1b1c1c]">Problem Definition</p>
                      <p className="text-xs sm:text-sm text-[#564338]">
                        {contentProject.problem}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#ddc1b3]">
                    <CheckCircle2 className="w-5 h-5 text-[#974400] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-[#1b1c1c]">Solution</p>
                      <p className="text-xs sm:text-sm text-[#564338]">
                        취업 준비 단계별 필수 정보만 압축한 요약형 콘텐츠 기획
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Project 4: Mini Project Bento */}
          {miniProject && (activeCategory === 'ALL' || activeCategory === '기타') && (
            <div
              onClick={() => onSelectProject(miniProject)}
              className="bento-card p-6 rounded-2xl flex items-center justify-between cursor-pointer group hover:border-[#974400] transition-all"
            >
              <div>
                <span className="text-xs font-bold text-[#8a7266] uppercase tracking-wider block mb-1">
                  Mini Project / Proposal
                </span>
                <h4 className="text-xl font-bold text-[#1b1c1c] group-hover:text-[#974400] transition-colors">
                  {miniProject.title}
                </h4>
                <p className="text-sm text-[#564338] mt-1">
                  {miniProject.subtitle}
                </p>
              </div>

              <div className="p-3 rounded-full bg-[#f0eded] group-hover:bg-[#ffdbc9] transition-colors">
                <ArrowRight className="w-5 h-5 text-[#8a7266] group-hover:text-[#974400] transition-colors" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
