import React from 'react';
import { Project } from '../types';
import { X, CheckCircle, ChevronRight, Layers, UserCheck, FileText, Calendar, Users, Briefcase } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const detail = project.detailedOverview;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-[#fcf9f8] rounded-2xl border border-[#ddc1b3] shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto my-auto relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-[#fcf9f8]/95 backdrop-blur-md px-6 py-4 border-b border-[#ddc1b3] flex items-center justify-between z-10">
          <div>
            <span className="text-xs font-bold text-[#974400] uppercase tracking-wider">
              Project Specification
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1b1c1c] leading-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#564338] hover:bg-[#f0eded] hover:text-[#974400] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Top Hero Banner / Image */}
          {project.imageUrl && (
            <div className="rounded-xl overflow-hidden border border-[#ddc1b3] bg-[#f0eded] aspect-video max-h-[360px] w-full">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {/* Quick Info Grid */}
          {detail && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-white rounded-xl border border-[#ddc1b3]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#974400]" />
                <div>
                  <p className="text-xs text-[#8a7266]">기간</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#1b1c1c]">{detail.duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#974400]" />
                <div>
                  <p className="text-xs text-[#8a7266]">기획 역할</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#1b1c1c]">{detail.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#974400]" />
                <div>
                  <p className="text-xs text-[#8a7266]">팀 구성</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#1b1c1c]">{detail.teamSize}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#974400]" />
                <div>
                  <p className="text-xs text-[#8a7266]">카테고리</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#974400]">{project.category}</p>
                </div>
              </div>
            </div>
          )}

          {/* Background & Core Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-white rounded-xl border border-[#ddc1b3]">
              <h4 className="text-xs font-bold text-[#974400] uppercase mb-2">Problem Statement</h4>
              <p className="text-sm text-[#1b1c1c] leading-relaxed">{project.problem}</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#ddc1b3]">
              <h4 className="text-xs font-bold text-[#974400] uppercase mb-2">User Research Insight</h4>
              <p className="text-sm text-[#1b1c1c] leading-relaxed">{project.research}</p>
            </div>
          </div>

          {/* User Personas */}
          {detail?.userPersonas && detail.userPersonas.length > 0 && (
            <div>
              <h4 className="text-base font-bold text-[#1b1c1c] mb-3 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[#974400]" />
                <span>핵심 타깃 페르소나 (Target Persona)</span>
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {detail.userPersonas.map((persona, idx) => (
                  <div key={idx} className="p-5 bg-white rounded-xl border border-[#ddc1b3]">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-base text-[#1b1c1c]">{persona.name}</span>
                      <span className="text-xs bg-[#ffdbc9] text-[#321200] px-2.5 py-0.5 rounded-full font-medium">
                        {persona.role}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                      <div className="bg-[#f0eded] p-3 rounded-lg">
                        <span className="font-semibold text-[#ba1a1a] block mb-1">Pain Points</span>
                        <ul className="list-disc list-inside text-[#564338] space-y-1">
                          {persona.painPoints.map((pt, i) => (
                            <li key={i}>{pt}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-[#f6f3f2] p-3 rounded-lg">
                        <span className="font-semibold text-[#974400] block mb-1">Needs</span>
                        <ul className="list-disc list-inside text-[#564338] space-y-1">
                          {persona.needs.map((nd, i) => (
                            <li key={i}>{nd}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Feature Backlog with Priority Tags */}
          {detail?.keyFeatures && detail.keyFeatures.length > 0 && (
            <div>
              <h4 className="text-base font-bold text-[#1b1c1c] mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#974400]" />
                <span>주요 기획 기능 백로그 (Key Feature Backlog)</span>
              </h4>
              <div className="space-y-3">
                {detail.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-[#ddc1b3] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs px-2 py-0.5 rounded-md font-bold ${
                          feat.priority === 'P0' 
                            ? 'bg-[#ba1a1a] text-white' 
                            : 'bg-[#ffdbc9] text-[#763400]'
                        }`}>
                          {feat.priority}
                        </span>
                        <span className="font-bold text-sm text-[#1b1c1c]">{feat.title}</span>
                      </div>
                      <p className="text-xs text-[#564338]">{feat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Deliverables */}
          {detail?.deliverables && (
            <div className="p-5 bg-[#f6f3f2] rounded-xl border border-[#ddc1b3]">
              <h4 className="text-xs font-bold text-[#8a7266] uppercase mb-2">산출물 목록 (Deliverables)</h4>
              <div className="flex flex-wrap gap-2">
                {detail.deliverables.map((del, i) => (
                  <span key={i} className="bg-white text-[#564338] px-3 py-1 rounded-md text-xs font-medium border border-[#ddc1b3] flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#974400]" />
                    {del}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Result Banner */}
          <div className="p-4 bg-[#ffdbc9] text-[#321200] rounded-xl font-semibold text-sm sm:text-base flex items-center justify-between">
            <span>Result: {project.result}</span>
            <ChevronRight className="w-5 h-5 text-[#974400]" />
          </div>
        </div>
      </div>
    </div>
  );
};
