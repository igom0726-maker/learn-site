import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, Volume2, Phone, Mail, MapPin, ExternalLink, RefreshCw, GraduationCap, TrendingUp, Cpu, Users, Star } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onScrollToProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToProjects }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  const speakGreeting = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const text = "안녕하세요! 사용자 조사와 기능 우선순위로 문제를 해결하는 서비스기획자 서달미입니다. 반갑습니다!";
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ko-KR';
      utterance.rate = 1.0;
      utterance.pitch = 1.1;

      utterance.onstart = () => setIsPlayingVoice(true);
      utterance.onend = () => setIsPlayingVoice(false);
      utterance.onerror = () => setIsPlayingVoice(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
    speakGreeting();
  };

  return (
    <section id="top" className="pt-8 md:pt-12 pb-16 md:pb-20 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-[#ffdbc9] text-[#321200] px-3.5 py-1 rounded-full w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#974400]" />
              <span className="font-semibold text-xs tracking-wider uppercase">
                {PERSONAL_INFO.heroTag} • {PERSONAL_INFO.name}
              </span>
            </div>

            {/* Main Display Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b1c1c] leading-[1.25] tracking-tight whitespace-pre-line">
              {'사용자 조사로 문제를 정의하고,\n'}
              <span className="text-[#974400]">우선순위로 기능</span>
              {'을 좁히는\n서비스기획자 서달미입니다.'}
            </h1>

            <p className="text-base sm:text-lg text-[#564338] leading-relaxed max-w-xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTA Action */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onScrollToProjects}
                className="bg-[#974400] text-white px-8 py-3.5 rounded-xl font-semibold text-base sm:text-lg shadow-md hover:bg-[#7a3700] transition-all flex items-center gap-2 cursor-pointer group"
              >
                <span>프로젝트 보기</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>

              <button
                onClick={speakGreeting}
                className={`inline-flex items-center gap-2 px-4 py-3.5 rounded-xl border border-[#ddc1b3] font-semibold text-sm transition-all cursor-pointer ${
                  isPlayingVoice 
                    ? 'bg-[#974400] text-white animate-pulse' 
                    : 'bg-white text-[#564338] hover:bg-[#ffdbc9]/40 hover:text-[#974400]'
                }`}
              >
                <Volume2 className={`w-4 h-4 ${isPlayingVoice ? 'animate-bounce' : 'text-[#974400]'}`} />
                <span>{isPlayingVoice ? '음성 인사 재생 중...' : '🔊 음성 인사 듣기'}</span>
              </button>
            </div>
          </div>

          {/* Right Profile Photo Flip Card with FLOATING CAREER GRAPHICS */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[480px]">
            {/* FLOATING GRAPHIC ITEM 1: AI Plant Care PM Badge (Top-Left) */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [-3, 2, -3],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-4 -left-4 sm:-left-8 z-20 bg-gradient-to-br from-amber-50 to-orange-100 border-2 border-[#974400]/40 p-3 rounded-2xl shadow-lg flex items-center gap-2.5 backdrop-blur-md cursor-pointer hover:scale-105 transition-transform"
              onClick={handleCardClick}
            >
              <div className="w-9 h-9 rounded-xl bg-[#974400] text-white flex items-center justify-center shadow-md">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-extrabold text-[#974400] tracking-wider uppercase block">AI 프로젝트</span>
                <span className="text-xs font-bold text-[#1b1c1c] block">식물케어 PM</span>
              </div>
            </motion.div>

            {/* FLOATING GRAPHIC ITEM 2: Growth Views +34% (Top-Right) */}
            <motion.div
              animate={{
                y: [0, 14, 0],
                rotate: [2, -4, 2],
              }}
              transition={{
                duration: 5.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="absolute -top-2 -right-4 sm:-right-8 z-20 bg-white border-2 border-emerald-400 p-2.5 px-3.5 rounded-2xl shadow-xl flex items-center gap-2"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-stone-500 font-bold block">조회수 성과</span>
                <span className="text-xs font-extrabold text-emerald-600">+34% 상승</span>
              </div>
            </motion.div>

            {/* FLOATING GRAPHIC ITEM 3: User Research Specialist (Bottom-Left) */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [3, -2, 3],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute -bottom-4 -left-6 sm:-left-10 z-20 bg-white border-2 border-[#ddc1b3] p-3 rounded-2xl shadow-lg flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-xl bg-[#ffdbc9] text-[#974400] flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#8a7266] block">핵심 역량</span>
                <span className="text-xs font-bold text-[#1b1c1c]">사용자 조사 & UT</span>
              </div>
            </motion.div>

            {/* FLOATING GRAPHIC ITEM 4: Degree & Education (Bottom-Right) */}
            <motion.div
              animate={{
                y: [0, 12, 0],
                rotate: [-2, 3, -2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.5,
              }}
              className="absolute -bottom-2 -right-6 sm:-right-10 z-20 bg-gradient-to-br from-sky-50 to-blue-100 border-2 border-sky-300 p-3 rounded-2xl shadow-lg flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-xs">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-sky-800 font-bold block">전공 학력</span>
                <span className="text-xs font-bold text-sky-950">경영 & 컴공 학사</span>
              </div>
            </motion.div>

            {/* FLOATING GRAPHIC ITEM 5: Star Achievement Tag (Center-Right Accent) */}
            <motion.div
              animate={{
                scale: [0.95, 1.05, 0.95],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-1/2 -right-8 sm:-right-12 z-20 bg-[#974400] text-white p-2 px-3 rounded-full shadow-lg flex items-center gap-1.5 text-xs font-bold"
            >
              <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>이탈률 -12%p</span>
            </motion.div>

            <div 
              className="w-full max-w-xs h-[450px] cursor-pointer perspective-1000 group relative z-10"
              onClick={handleCardClick}
              title="클릭하여 프로필 뒷면 인적사항 보기 및 음성 인사 듣기"
            >
              <div 
                className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* CARD FRONT SIDE (Resume ID Photo) */}
                <div className="absolute inset-0 w-full h-full bg-white rounded-2xl border-2 border-[#ddc1b3] p-5 shadow-xl backface-hidden flex flex-col justify-between">
                  {/* Top Card Badge */}
                  <div>
                    <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#ddc1b3]/60">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-bold text-[#1b1c1c]">지원서 증명사진</span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#974400] bg-[#ffdbc9] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        클릭하여 반전
                      </span>
                    </div>

                    {/* Profile Image Frame - 3:4 Classic Resume ID Ratio */}
                    <div className="aspect-[3/4] rounded-lg overflow-hidden bg-[#e8ecef] border border-[#d0d7de] relative shadow-inner group-hover:scale-[1.01] transition-transform">
                      <img
                        src={PERSONAL_INFO.profileImage}
                        alt={`${PERSONAL_INFO.name} 증명사진`}
                        className="w-full h-full object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <p className="text-sm font-bold">{PERSONAL_INFO.name} <span className="text-xs font-normal opacity-90">({PERSONAL_INFO.englishName})</span></p>
                        <p className="text-[11px] text-stone-200">{PERSONAL_INFO.role}</p>
                      </div>

                      {/* Floating Voice Indicator */}
                      {isPlayingVoice && (
                        <div className="absolute top-3 right-3 bg-[#974400] text-white text-[11px] px-2.5 py-1 rounded-full font-bold flex items-center gap-1 shadow-md animate-pulse">
                          <Volume2 className="w-3 h-3" />
                          <span>말하는 중...</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Identification Footer Info */}
                  <div className="pt-2 text-center border-t border-[#ddc1b3]/40">
                    <p className="text-xs font-bold text-[#1b1c1c]">{PERSONAL_INFO.name} 서비스기획자 지원</p>
                    <p className="text-[11px] text-[#8a7266] mt-0.5 flex items-center justify-center gap-1">
                      <span>👆 카드를 누르면 인적사항과 음성 인사가 나와요</span>
                    </p>
                  </div>
                </div>

                {/* CARD BACK SIDE (Personal Information Details) */}
                <div className="absolute inset-0 w-full h-full bg-[#fcf9f8] rounded-2xl border-2 border-[#974400] p-5 shadow-2xl backface-hidden rotate-y-180 flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#ddc1b3]">
                      <span className="text-xs font-bold text-[#974400] uppercase tracking-wider">
                        지원자 인적사항 (Candidate Details)
                      </span>
                      <span className="text-[10px] bg-[#974400] text-white px-2 py-0.5 rounded font-bold">
                        VERIFIED
                      </span>
                    </div>

                    {/* Candidate Name & Title */}
                    <div className="mb-4 bg-white p-3 rounded-xl border border-[#ddc1b3]">
                      <h3 className="text-lg font-bold text-[#1b1c1c]">
                        {PERSONAL_INFO.name} <span className="text-xs text-[#8a7266]">({PERSONAL_INFO.englishName})</span>
                      </h3>
                      <p className="text-xs font-semibold text-[#974400]">{PERSONAL_INFO.role}</p>
                    </div>

                    {/* Details List */}
                    <div className="space-y-2.5 text-xs text-[#564338]">
                      <a 
                        href={`tel:${PERSONAL_INFO.phone}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2.5 p-2 bg-white rounded-lg border border-[#ddc1b3]/60 hover:border-[#974400] transition-colors"
                      >
                        <Phone className="w-4 h-4 text-[#974400] shrink-0" />
                        <div>
                          <span className="text-[10px] text-[#8a7266] block">전화번호</span>
                          <span className="font-semibold text-[#1b1c1c]">{PERSONAL_INFO.phone}</span>
                        </div>
                      </a>

                      <a 
                        href={`mailto:${PERSONAL_INFO.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2.5 p-2 bg-white rounded-lg border border-[#ddc1b3]/60 hover:border-[#974400] transition-colors"
                      >
                        <Mail className="w-4 h-4 text-[#974400] shrink-0" />
                        <div>
                          <span className="text-[10px] text-[#8a7266] block">이메일</span>
                          <span className="font-semibold text-[#1b1c1c]">{PERSONAL_INFO.email}</span>
                        </div>
                      </a>

                      <div className="flex items-center gap-2.5 p-2 bg-white rounded-lg border border-[#ddc1b3]/60">
                        <MapPin className="w-4 h-4 text-[#974400] shrink-0" />
                        <div>
                          <span className="text-[10px] text-[#8a7266] block">거주지</span>
                          <span className="font-semibold text-[#1b1c1c]">{PERSONAL_INFO.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 p-2 bg-white rounded-lg border border-[#ddc1b3]/60">
                        <GraduationCap className="w-4 h-4 text-[#974400] shrink-0" />
                        <div>
                          <span className="text-[10px] text-[#8a7266] block">학력</span>
                          <span className="font-semibold text-[#1b1c1c]">경영학 & 컴퓨터공학 학사</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back Footer Action */}
                  <div className="pt-2 border-t border-[#ddc1b3] flex items-center justify-between">
                    <button
                      onClick={speakGreeting}
                      className="text-xs bg-[#ffdbc9] hover:bg-[#974400] hover:text-white text-[#321200] px-3 py-1.5 rounded-lg font-bold transition-colors flex items-center gap-1.5"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>다시 인사 듣기</span>
                    </button>

                    <span className="text-[11px] text-[#974400] font-semibold flex items-center gap-1">
                      <RefreshCw className="w-3 h-3" />
                      사진으로 돌아가기
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#8a7266] mt-3 font-medium flex items-center gap-1">
              <span>💡 사진 카드를 클릭하면 3D 반전되어 인적사항을 확인하고 음성을 들을 수 있습니다.</span>
            </p>
          </div>
        </div>

        {/* Key Achievements Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16">
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


