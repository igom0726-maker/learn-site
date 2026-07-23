import React, { useState } from 'react';
import { SKILL_CATEGORIES, TOOLS } from '../data/portfolioData';
import { ToolItem } from '../types';
import { Target, Search, Edit3, FileText, Grid, Table, MessageSquare, Cpu, CheckCircle } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(null);

  // Helper to get matching lucide icon for tech tools
  const renderToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'edit_square':
        return <Edit3 className="w-6 h-6 text-[#974400]" />;
      case 'description':
        return <FileText className="w-6 h-6 text-[#974400]" />;
      case 'grid_view':
        return <Grid className="w-6 h-6 text-[#974400]" />;
      case 'table_view':
        return <Table className="w-6 h-6 text-[#974400]" />;
      case 'chat':
        return <MessageSquare className="w-6 h-6 text-[#974400]" />;
      case 'psychology':
        return <Cpu className="w-6 h-6 text-[#974400]" />;
      default:
        return <FileText className="w-6 h-6 text-[#974400]" />;
    }
  };

  return (
    <section className="py-20 bg-[#f6f3f2]" id="skills">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#974400] text-center mb-12">
          Skills & Tools
        </h2>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="bento-card p-6 md:p-8 rounded-2xl bg-white border border-[#ddc1b3]">
              <h3 className="text-xl font-bold text-[#1b1c1c] mb-6 flex items-center gap-2">
                {cat.iconName === 'strategy' ? (
                  <Target className="w-6 h-6 text-[#974400]" />
                ) : (
                  <Search className="w-6 h-6 text-[#974400]" />
                )}
                <span>{cat.title}</span>
              </h3>

              <ul className="flex flex-col gap-3">
                {cat.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="p-4 bg-[#f6f3f2] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#ffdbc9]/30 transition-colors"
                  >
                    <div>
                      <span className="font-semibold text-sm sm:text-base text-[#1b1c1c]">
                        {item.name}
                      </span>
                      {item.description && (
                        <p className="text-xs text-[#564338] mt-0.5">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <span className="self-start sm:self-center text-[#974400] font-bold text-lg bg-white px-3 py-1 rounded-lg border border-[#ddc1b3] shrink-0">
                      {item.grade}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="mt-12 bento-card p-6 md:p-8 rounded-2xl bg-white border border-[#ddc1b3]">
          <h3 className="text-xs font-bold text-[#8a7266] uppercase tracking-widest mb-8 text-center">
            Tech Stack & Tools
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {TOOLS.map((tool, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedTool(tool)}
                className={`flex flex-col items-center justify-center p-4 rounded-xl border border-[#ddc1b3]/60 bg-[#f6f3f2] hover:bg-[#ffdbc9]/50 hover:border-[#974400] transition-all cursor-pointer group ${
                  selectedTool?.name === tool.name ? 'ring-2 ring-[#974400] bg-[#ffdbc9]' : ''
                }`}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-2xs mb-2 group-hover:scale-110 transition-transform">
                  {renderToolIcon(tool.icon)}
                </div>
                <span className="font-semibold text-xs sm:text-sm text-[#1b1c1c] text-center">
                  {tool.name}
                </span>
                <span className="text-[10px] text-[#8a7266] mt-0.5">
                  {tool.category}
                </span>
              </div>
            ))}
          </div>

          {/* Detailed Tool Usage Panel */}
          {selectedTool && (
            <div className="mt-6 p-4 bg-[#ffdbc9]/40 rounded-xl border border-[#974400]/30 animate-in fade-in duration-200 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#974400] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-[#321200]">
                  {selectedTool.name} 활용 방식
                </h4>
                <p className="text-xs sm:text-sm text-[#564338] mt-0.5">
                  {selectedTool.useCase}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
