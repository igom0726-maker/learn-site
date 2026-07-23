import React, { useState, useEffect, useRef } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { TrendingUp, TrendingDown, BarChart2, Eye, UserMinus, Sparkles, RefreshCw } from 'lucide-react';

interface GrowthMetricsChartProps {
  monthlyData?: {
    month: string;
    views: number;
    churnRate: number;
    ctr: number;
  }[];
}

const DEFAULT_DATA = [
  { month: '1월 (운영 초)', views: 12400, churnRate: 48, ctr: 4.2 },
  { month: '2월 (요약 도입)', views: 13800, churnRate: 44, ctr: 6.1 },
  { month: '3월 (맞춤 배치)', views: 15200, churnRate: 40, ctr: 7.8 },
  { month: '4월 (최적화)', views: 16616, churnRate: 36, ctr: 9.4 },
];

// Smooth Animated Counter Component
const AnimatedCounter: React.FC<{
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  keyTrigger?: number;
}> = ({ end, duration = 1800, decimals = 0, prefix = '', suffix = '', keyTrigger = 0 }) => {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Smooth deceleration easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(easeProgress * end);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, end, duration, keyTrigger]);

  const formattedNumber =
    decimals > 0
      ? count.toFixed(decimals)
      : Math.floor(count).toLocaleString();

  return (
    <span ref={containerRef} className="tabular-nums">
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
};

export const GrowthMetricsChart: React.FC<GrowthMetricsChartProps> = ({
  monthlyData = DEFAULT_DATA,
}) => {
  const [activeTab, setActiveTab] = useState<'views' | 'churn' | 'combined'>('combined');
  const [triggerCount, setTriggerCount] = useState(0);

  const handleReplayAnimation = () => {
    setTriggerCount((prev) => prev + 1);
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-[#ddc1b3] p-5 shadow-sm space-y-4">
      {/* Header & Metric Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ddc1b3]/60 pb-3">
        <div>
          <span className="text-[11px] font-bold text-[#8a7266] uppercase tracking-wider block">
            Performance Analytics
          </span>
          <h4 className="text-lg font-bold text-[#1b1c1c] flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-[#974400]" />
            <span>콘텐츠 성과 지표 (Month-over-Month)</span>
          </h4>
        </div>

        {/* Tab Toggle Buttons */}
        <div className="flex items-center gap-1.5 bg-[#f0eded] p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('combined')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'combined'
                ? 'bg-[#974400] text-white shadow-xs'
                : 'text-[#564338] hover:bg-[#ffdbc9]/50'
            }`}
          >
            종합 시각화
          </button>
          <button
            onClick={() => setActiveTab('views')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'views'
                ? 'bg-[#974400] text-white shadow-xs'
                : 'text-[#564338] hover:bg-[#ffdbc9]/50'
            }`}
          >
            조회수 (+34%)
          </button>
          <button
            onClick={() => setActiveTab('churn')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'churn'
                ? 'bg-[#0284c7] text-white shadow-xs'
                : 'text-[#564338] hover:bg-[#ffdbc9]/50'
            }`}
          >
            이탈률 (-12%)
          </button>
        </div>
      </div>

      {/* Prominent Metric Highlight Cards with Live Count-Up Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {/* Metric 1: Monthly Views */}
        <div 
          onClick={handleReplayAnimation}
          className="group relative bg-gradient-to-br from-[#ffdbc9]/40 via-white to-[#ffdbc9]/20 border-2 border-[#ffdbc9] hover:border-[#974400] p-4 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden"
          title="클릭하여 숫자 올라가는 카운트업 애니메이션 다시 재생"
        >
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-bold text-[#8a7266] uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#974400]" />
                월간 누적 조회수
              </span>
              
              <div className="text-2xl sm:text-3xl font-black text-[#974400] tracking-tight my-1 flex items-baseline gap-1">
                <AnimatedCounter end={16616} suffix=" 회" keyTrigger={triggerCount} />
              </div>
            </div>

            <div className="w-11 h-11 rounded-2xl bg-[#974400] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform shrink-0">
              <Eye className="w-6 h-6" />
            </div>
          </div>

          <div className="mt-2 pt-2 border-t border-[#ddc1b3]/50 flex items-center justify-between text-xs font-bold">
            <span className="text-[#564338]">콘텐츠 개선 성과</span>
            <span className="text-emerald-700 bg-emerald-100/90 border border-emerald-300 px-2.5 py-1 rounded-full flex items-center gap-1 font-black shadow-2xs">
              <TrendingUp className="w-3.5 h-3.5" />
              <AnimatedCounter end={34} prefix="+" suffix="%" keyTrigger={triggerCount} />
            </span>
          </div>

          {/* Replay Hint Icon */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-[#974400] font-bold flex items-center gap-0.5 bg-white/80 px-1.5 py-0.5 rounded-full border border-[#ddc1b3]">
            <RefreshCw className="w-2.5 h-2.5 animate-spin" /> 다시 재생
          </div>
        </div>

        {/* Metric 2: Subscriber Churn Rate */}
        <div 
          onClick={handleReplayAnimation}
          className="group relative bg-gradient-to-br from-[#e0f2fe]/50 via-white to-[#e0f2fe]/20 border-2 border-[#bae6fd] hover:border-[#0284c7] p-4 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden"
          title="클릭하여 숫자 올라가는 카운트업 애니메이션 다시 재생"
        >
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-bold text-[#0369a1] uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
                구독자 이탈률
              </span>
              
              <div className="text-2xl sm:text-3xl font-black text-[#0284c7] tracking-tight my-1 flex items-baseline gap-1">
                <AnimatedCounter end={36} suffix="%" keyTrigger={triggerCount} />
              </div>
            </div>

            <div className="w-11 h-11 rounded-2xl bg-[#0284c7] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform shrink-0">
              <UserMinus className="w-6 h-6" />
            </div>
          </div>

          <div className="mt-2 pt-2 border-t border-[#bae6fd]/60 flex items-center justify-between text-xs font-bold">
            <span className="text-[#0369a1]">이탈률 감소폭</span>
            <span className="text-sky-800 bg-sky-100 border border-sky-300 px-2.5 py-1 rounded-full flex items-center gap-1 font-black shadow-2xs">
              <TrendingDown className="w-3.5 h-3.5" />
              <AnimatedCounter end={12} prefix="-" suffix="%p" keyTrigger={triggerCount} />
            </span>
          </div>

          {/* Replay Hint Icon */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-[#0284c7] font-bold flex items-center gap-0.5 bg-white/80 px-1.5 py-0.5 rounded-full border border-[#bae6fd]">
            <RefreshCw className="w-2.5 h-2.5 animate-spin" /> 다시 재생
          </div>
        </div>
      </div>

      {/* Visual Chart Area */}
      <div className="h-[210px] w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          {activeTab === 'views' ? (
            <AreaChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#974400" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#974400" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0eded" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#564338' }} />
              <YAxis tick={{ fontSize: 11, fill: '#564338' }} domain={[10000, 18000]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  borderColor: '#ddc1b3',
                  borderRadius: '12px',
                  fontSize: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                }}
                formatter={(value: number) => [`${value.toLocaleString()}회`, '조회수']}
              />
              <Area
                type="monotone"
                dataKey="views"
                stroke="#974400"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#viewsGradient)"
              />
            </AreaChart>
          ) : activeTab === 'churn' ? (
            <AreaChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="churnGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0284c7" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#0284c7" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0eded" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#564338' }} />
              <YAxis tick={{ fontSize: 11, fill: '#564338' }} domain={[30, 55]} unit="%" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  borderColor: '#bae6fd',
                  borderRadius: '12px',
                  fontSize: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                }}
                formatter={(value: number) => [`${value}%`, '이탈률']}
              />
              <Area
                type="monotone"
                dataKey="churnRate"
                stroke="#0284c7"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#churnGradient)"
              />
            </AreaChart>
          ) : (
            <BarChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0eded" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#564338' }} />
              <YAxis yAxisId="left" tick={{ fontSize: 11, fill: '#974400' }} domain={[10000, 18000]} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: '#0284c7' }} domain={[30, 55]} unit="%" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  borderColor: '#ddc1b3',
                  borderRadius: '12px',
                  fontSize: '12px',
                }}
                formatter={(value: number, name: string) => {
                  if (name === 'views') return [`${value.toLocaleString()}회`, '월 조회수 (+34%)'];
                  if (name === 'churnRate') return [`${value}%`, '이탈률 (-12%)'];
                  return [value, name];
                }}
              />
              <Bar yAxisId="left" dataKey="views" fill="#974400" radius={[6, 6, 0, 0]} name="views" />
              <Bar yAxisId="right" dataKey="churnRate" fill="#0284c7" radius={[6, 6, 0, 0]} name="churnRate" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Growth Stage Explanation Footer */}
      <div className="pt-2 border-t border-[#ddc1b3]/50 flex items-center justify-between text-xs text-[#564338]">
        <span className="font-semibold text-[#974400]">
          💡 핵심 요약 기획 + D-Day 체크리스트 도입 후 지속적인 상승세 유지
        </span>
        <span className="text-[11px] bg-[#f0eded] text-[#564338] px-2 py-0.5 rounded font-medium">
          GA4 Analytics Data
        </span>
      </div>
    </div>
  );
};
