import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ContactModal } from './components/ContactModal';
import { ScrollTiltWrapper } from './components/ScrollTiltWrapper';
import { Project } from './types';
import { Mail, Download } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [contactOpen, setContactOpen] = useState<boolean>(false);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1b1c1c] font-sans antialiased selection:bg-[#ffdbc9] selection:text-[#321200] overflow-x-hidden">
      {/* Fixed Navbar */}
      <Header
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Main Content */}
      <main className="space-y-4">
        {/* Hero Section */}
        <ScrollTiltWrapper>
          <Hero onScrollToProjects={scrollToProjects} />
        </ScrollTiltWrapper>

        {/* About & Timeline */}
        <ScrollTiltWrapper>
          <AboutSection />
        </ScrollTiltWrapper>

        {/* Projects Showcase */}
        <ScrollTiltWrapper>
          <ProjectsSection onSelectProject={(proj) => setSelectedProject(proj)} />
        </ScrollTiltWrapper>

        {/* Skills & Tech Stack */}
        <ScrollTiltWrapper>
          <SkillsSection />
        </ScrollTiltWrapper>

        {/* Bottom Contact Section */}
        <ScrollTiltWrapper id="contact">
          <section className="py-20">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#974400]">
                Let's Connect
              </h2>
              <p className="text-base sm:text-lg text-[#564338] max-w-xl mx-auto mb-10 leading-relaxed">
                함께 성장하며 가치 있는 서비스를 만들어갈 기회를 찾고 있습니다.<br />
                언제든 편하게 연락 부탁드립니다.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <button
                  onClick={() => setContactOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-[#974400] text-white px-8 py-3.5 rounded-xl font-bold text-base hover:bg-[#7a3700] transition-all shadow-md cursor-pointer"
                >
                  <Mail className="w-5 h-5" />
                  <span>이메일 보내기</span>
                </button>

                <button
                  onClick={() => setResumeOpen(true)}
                  className="inline-flex items-center justify-center gap-2 border border-[#974400] text-[#974400] px-8 py-3.5 rounded-xl font-bold text-base hover:bg-[#f0eded] transition-all cursor-pointer"
                >
                  <Download className="w-5 h-5" />
                  <span>이력서 PDF 다운로드</span>
                </button>
              </div>
            </div>
          </section>
        </ScrollTiltWrapper>
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
