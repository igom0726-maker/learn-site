import React, { useState } from 'react';
import { FileText, Menu, X, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-[#fcf9f8] border-b border-[#ddc1b3] shadow-2xs">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-6 h-20">
        {/* Brand Title */}
        <a 
          href="#" 
          onClick={(e) => handleLinkClick(e, '#top')}
          className="font-bold text-2xl text-[#974400] hover:opacity-80 transition-opacity tracking-tight"
        >
          {PERSONAL_INFO.englishName}
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-[#564338] hover:text-[#974400] font-medium text-sm tracking-wide transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-medium text-sm text-[#974400] bg-[#ffdbc9] hover:bg-[#f0eded] transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </button>
          
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 bg-[#974400] text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-[#7a3700] transition-all shadow-sm cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#564338] hover:text-[#974400] rounded-lg focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#ddc1b3] bg-[#fcf9f8] px-6 py-4 flex flex-col gap-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-[#564338] hover:text-[#974400] py-2 font-medium text-base border-b border-[#f0eded] last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex-1 flex justify-center items-center gap-2 py-2.5 rounded-lg font-medium text-sm text-[#974400] bg-[#ffdbc9]"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 flex justify-center items-center gap-2 bg-[#974400] text-white py-2.5 rounded-lg font-medium text-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
