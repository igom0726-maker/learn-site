import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#fcf9f8] border-t border-[#ddc1b3] py-16">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto px-6 gap-6">
        <div className="text-left">
          <div className="text-2xl font-bold text-[#974400] mb-1">
            {PERSONAL_INFO.englishName}
          </div>
          <p className="text-xs sm:text-sm text-[#564338]">
            © 2024 Dalmi Seo. Service Planner & Strategic Thinker.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={onOpenContact}
            className="text-xs sm:text-sm text-[#564338] hover:text-[#974400] transition-colors font-medium cursor-pointer"
          >
            Email
          </button>
          <a
            href={PERSONAL_INFO.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-[#564338] hover:text-[#974400] transition-colors font-medium"
          >
            LinkedIn
          </a>
          <button
            onClick={onOpenResume}
            className="text-xs sm:text-sm text-[#564338] hover:text-[#974400] transition-colors font-medium cursor-pointer"
          >
            Resume
          </button>
          
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-[#f0eded] text-[#974400] hover:bg-[#ffdbc9] transition-colors cursor-pointer ml-2"
            title="맨 위로 가기"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
