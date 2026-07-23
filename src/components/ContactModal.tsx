import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, Send, Mail, CheckCircle2, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [senderName, setSenderName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [templateType, setTemplateType] = useState<'recruitment' | 'collaboration' | 'coffeeChat' | 'custom'>('recruitment');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleApplyTemplate = (type: 'recruitment' | 'collaboration' | 'coffeeChat') => {
    setTemplateType(type);
    if (type === 'recruitment') {
      setSubject(`[채용 문의] 서비스 기획자 서달미님 포트폴리오를 보고 연락드립니다.`);
      setMessage(`안녕하세요 서달미님,\n\n저희 회사 서비스 기획 직무에 관련하여 제안드리고자 연락드렸습니다.\n\n편하신 일정을 말씀해 주시면 안내해 드리겠습니다.\n\n감사합니다.`);
    } else if (type === 'collaboration') {
      setSubject(`[프로젝트 협업] 신규 서비스 기획 협업 제안건`);
      setMessage(`안녕하세요 서달미 기획자님,\n\n진행 중인 서비스 기획 프로젝트 관련하여 협업 논의를 드리고자 합니다.\n\n프로젝트 관련 자세한 내용을 설명해 드리겠습니다.`);
    } else if (type === 'coffeeChat') {
      setSubject(`[커피챗] 서비스기획 직무/커리어 이야기 나눠요`);
      setMessage(`안녕하세요 서달미님,\n\n포트폴리오에 정리된 사용자 조사 및 기능 우선순위화 사례가 인상적이었습니다.\n\n가벼운 커피챗을 나누고 싶습니다.`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Create mailto fallback link
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `보내는 사람: ${senderName} (${email})\n\n${message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 1200);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-[#fcf9f8] rounded-2xl border border-[#ddc1b3] shadow-2xl max-w-lg w-full p-6 sm:p-8 relative my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#564338] hover:bg-[#f0eded] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#ffdbc9] text-[#974400] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#1b1c1c]">메시지가 작성되었습니다!</h3>
            <p className="text-sm text-[#564338]">
              이메일 클라이언트가 실행됩니다. 서달미 기획자에게 직접 발송됩니다.
            </p>
            <button
              onClick={resetAndClose}
              className="mt-4 bg-[#974400] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#7a3700] transition-colors"
            >
              확인
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-6 h-6 text-[#974400]" />
              <h3 className="text-2xl font-bold text-[#1b1c1c]">Let's Connect</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#564338] mb-6">
              서달미 기획자에게 문의 메시지를 전송합니다 ({PERSONAL_INFO.email}).
            </p>

            {/* Template Selector Quick Buttons */}
            <div className="mb-6">
              <span className="text-xs font-bold text-[#8a7266] uppercase block mb-2">
                빠른 템플릿 선택
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => handleApplyTemplate('recruitment')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                    templateType === 'recruitment' 
                      ? 'bg-[#974400] text-white border-[#974400]' 
                      : 'bg-white text-[#564338] border-[#ddc1b3] hover:bg-[#ffdbc9]/40'
                  }`}
                >
                  💼 채용 문의
                </button>
                <button
                  type="button"
                  onClick={() => handleApplyTemplate('collaboration')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                    templateType === 'collaboration' 
                      ? 'bg-[#974400] text-white border-[#974400]' 
                      : 'bg-white text-[#564338] border-[#ddc1b3] hover:bg-[#ffdbc9]/40'
                  }`}
                >
                  🤝 프로젝트 협업
                </button>
                <button
                  type="button"
                  onClick={() => handleApplyTemplate('coffeeChat')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                    templateType === 'coffeeChat' 
                      ? 'bg-[#974400] text-white border-[#974400]' 
                      : 'bg-white text-[#564338] border-[#ddc1b3] hover:bg-[#ffdbc9]/40'
                  }`}
                >
                  ☕ 커피챗
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#1b1c1c] mb-1">성함 / 회사명</label>
                <input
                  type="text"
                  required
                  placeholder="예: 홍길동 (ABC 컴퍼니)"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#ddc1b3] text-sm text-[#1b1c1c] focus:outline-none focus:border-[#974400]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1b1c1c] mb-1">회신받으실 이메일</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#ddc1b3] text-sm text-[#1b1c1c] focus:outline-none focus:border-[#974400]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1b1c1c] mb-1">제목</label>
                <input
                  type="text"
                  required
                  placeholder="문의 제목을 입력하세요"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#ddc1b3] text-sm text-[#1b1c1c] focus:outline-none focus:border-[#974400]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1b1c1c] mb-1">메시지 내용</label>
                <textarea
                  required
                  rows={4}
                  placeholder="내용을 입력하세요..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#ddc1b3] text-sm text-[#1b1c1c] focus:outline-none focus:border-[#974400] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#974400] text-white rounded-xl font-bold text-sm hover:bg-[#7a3700] transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Send className="w-4 h-4" />
                <span>이메일 보내기</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
