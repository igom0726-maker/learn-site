import { Project, TimelineItem, SkillCategory, ToolItem } from '../types';

export const PERSONAL_INFO = {
  name: '서달미',
  englishName: 'Dalmi Seo',
  role: 'Service Planner & Strategic Thinker',
  heroTag: 'Service Planner',
  headline: '사용자 조사로 문제를 정의하고,\n우선순위로 기능을 좁히는\n서비스기획자 서달미입니다.',
  bio: '복잡한 비즈니스 요구사항을 데이터와 사용자 보이스를 기반으로 해석하여, 실행 가능한 로드맵으로 변환하는 과정을 즐깁니다. 고객의 숨겨진 니즈를 발견하고 우선순위에 따라 제품의 핵심 가치를 정의하는 데 강점이 있습니다.',
  email: 'dalmi.seo@example.com',
  phone: '010-1234-5678',
  location: '서울특별시 성동구',
  profileImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
  linkedIn: 'https://linkedin.com',
  github: 'https://github.com',
  certifications: [
    '서비스기획 입문 과정 수료',
    '컴퓨터활용능력 2급',
    'GTQ 그래픽기술자격 1급'
  ],
  heroAchievements: [
    { value: '3위', label: '서비스 기획 경진대회' },
    { value: '4건', label: '전략 서비스 프로젝트 수행' },
    { value: '20명+', label: '누적 사용자 심층 인터뷰' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'plant-care-ai',
    title: 'AI 반려식물 관리 서비스 기획',
    subtitle: '초보 식물 집사를 위한 데이터 기반 맞춤형 케어 솔루션',
    category: 'AI',
    tags: ['Competitive Winner', 'AI Management', '사용자 조사', 'UX/UI'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr6N3MUPDYfT71H9-nTTmU30500o8mZ3vNzlvO9StsYitmn0Bs9lD2XGi_lLHU8DoTqjqZy281YIW1nWtyYJ3osGpXPloI4bH5Ifgb3UV75nuCp6ftQpuias9tWyFq5b8NAJmMP7I1nkbkcBZKCUiikPh8GelG7tDVLZ3_j2BsuEiOcR_XqAMlPCl7j6F6AKtuhb7LkiUiWQ2KJMEgBmFE9YNlVD5NAtxZ5gaaMIBxTs49-pY169AB',
    badge: 'Competitive Winner',
    problem: '인터넷상의 파편화된 식물 관리 정보로 인한 일관성 없는 케어 방식 및 과습·건조로 인한 식물 고사 방치',
    research: '반려식물 경험자 8인 심층 인터뷰(IDI)를 통해 \'정보의 신뢰도\'와 \'물주기 알림의 타깃화\'가 핵심 과제임을 발견',
    serviceLogic: {
      steps: ['사용자 조사 (8인 IDI)', 'Pain-point 정의', '8가지 핵심 기능 추출'],
      focusHighlight: '8가지 핵심 기능 추출'
    },
    result: '기획 경진대회 본선 3위 수상 및 시장성 검증 완료',
    detailedOverview: {
      duration: '2023.09 ~ 2023.11 (3개월)',
      role: '메인 서비스 기획자 (기획 100%, IA 정의, Wireframe)',
      teamSize: '4명 (기획자 1, 디자이너 1, 개발자 2)',
      background: '코로나19 이후 반려식물 유행으로 초보 집사가 급증했으나, 블로그·카페 마다 다른 케어 정보로 식물 사망률이 높아 사전 예방 케어 서비스가 절실했습니다.',
      userPersonas: [
        {
          name: '김초보 (27세, 직장인)',
          role: '원룸에서 식물 3뿌리를 키우는 초보 집사',
          painPoints: ['물주는 주기를 자꾸 잊어버림', '잎이 시들었을 때 원인을 모름'],
          needs: ['사진 한 장으로 상태 진단받기', '우리 집 환경에 맞춘 자동 알림']
        }
      ],
      keyFeatures: [
        {
          title: '사진 기반 AI 식물 상태 진단 및 질병 예측',
          priority: 'P0',
          description: 'Gemini Vision 모델을 연동하여 잎의 변색, 반점을 촬영하면 원인과 처방 가이드를 즉시 제공'
        },
        {
          title: '스마트 물주기 / 분갈이 D-Day 커스텀 알림',
          priority: 'P0',
          description: '온습도 데이터 및 식물 종류에 따른 가변 알고리즘 기반 Push 알림 제공'
        },
        {
          title: '반려식물 성장 일지 및 타임라인',
          priority: 'P1',
          description: '날짜별 사진 기록 및 높이/잎 개수 변화 그래프 시각화'
        }
      ],
      deliverables: ['서비스 기획서 (PPT 45장)', 'IA (Information Architecture)', 'Figma 와이어프레임 & 화면정의서', '사용자 인터뷰 녹취록 및 어피니티 다이어그램']
    }
  },
  {
    id: 'local-store-booking',
    title: '동네 소상공인 주문예약 서비스 기획',
    subtitle: '지역 상권의 아날로그 예약 프로세스 디지털화',
    category: '커머스/소상공인',
    tags: ['소상공인 UX', '주문예약', 'UX 설계 85% 달성'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYpC-1lHHDCvrFhsc3Cit8xBUif4gq25JJBq-QFYNcX81RViQLr3-GSogZOH5Dd8FlmSgX0b_DZFpW3qy4R8C9gh4F4C2LiroqJ46fF-hg9EctpfHcrlVr12YXlEkSFxi89t0Km_fGS6Mw1Zlqy-0qIlfBu3PBHm-qV0zRcIMme6NN9qJ5S3mbn0K40K3Wn4b_ORnctXxqOmdXxaV3C9CPO1i44vBQDyiWrdPu7g_eLKrNBDIXXcFk',
    problem: '전화/SNS 메시지 등 비효율적인 수동 예약 프로세스로 인한 영업 중 업무 누락 및 노쇼 발생',
    research: '점주 5인 현장 인터뷰 및 소비자 32명 설문을 통해 \'실시간 확인 및 카톡 알림톡 자동화\' 필요성 도출',
    executionFocus: {
      description: '복잡한 기능(복잡한 다단계 메뉴 구성)을 배제하고 5060 점주 연령층을 고려한 7가지 핵심 UX 플로우 설계',
      progressPercentage: 85,
      progressLabel: '사용성 중심 설계 85% 달성'
    },
    result: '교내 서비스 기획 프로젝트 평가 2위',
    detailedOverview: {
      duration: '2023.05 ~ 2023.07 (2개월)',
      role: '서비스 기획 및 UX 흐름 설계',
      teamSize: '3명 (기획자 2, 디자이너 1)',
      background: '동네 반찬가게, 미용실, 떡집 등 아날로그 주문이 우세한 매장의 일손 부족 문제를 해결하기 위해 시니어 점주도 10초 만에 접수 가능한 모바일 UX를 기획하였습니다.',
      userPersonas: [
        {
          name: '박사장 (54세, 반찬가게 운영)',
          role: '조리 중 전화 응대가 어려운 소상공인',
          painPoints: ['조리 중 손이 젖어 카톡 답장이 힘듦', '예약 장부 분실 위험'],
          needs: ['터치 2번으로 예약 승인하기', '한눈에 들어오는 대형 글자 장부']
        }
      ],
      keyFeatures: [
        {
          title: '원클릭 예약 승인/거절 모드',
          priority: 'P0',
          description: '큰 글씨와 대비감 높은 UI로 조리 중에도 3초 만에 예약 처리 가능'
        },
        {
          title: '알림톡 기반 자동 예약 상태 전송',
          priority: 'P0',
          description: '소비자에게 예약 확정/입금 안내/방문 10분 전 알림 메시지 자동 전송'
        }
      ],
      deliverables: ['사용자 여정 지도 (User Journey Map)', '점주용 모바일 웹 와이어프레임', '소비자용 카카오 챗봇 UX 시나리오']
    }
  },
  {
    id: 'youth-job-content',
    title: '청년 취업정보 콘텐츠 운영',
    subtitle: '타겟 지향적 정보 큐레이션을 통한 인게이지먼트 최적화',
    category: '콘텐츠/운영',
    tags: ['콘텐츠 큐레이션', '데이터 분석', '성장 지표'],
    problem: '정보의 과부하 및 파편화로 인해 청년 구직자의 실질적 필독 정보 도달률이 저하되는 현상',
    research: '구직 준비생 대상 정량 조사 결과, 10분 이상 긴 글보다 3줄 핵심 요약 및 카드뉴스 형태 선호도 89%',
    growthMetrics: {
      viewsGrowth: '+34%',
      churnDecrease: '-12%',
      description: '데이터 기반 콘텐츠 운영 성과 시각화'
    },
    result: '조회수 34% 증가 및 이탈률 12% 감소 달성',
    detailedOverview: {
      duration: '2023.01 ~ 2023.04 (4개월)',
      role: '콘텐츠 기획 및 퍼포먼스 데이터 운영',
      teamSize: '2명 (기획/운영 1, 에디터 1)',
      background: '공공 취업 지원금, 채용 일정, 자소서 팁 정보가 산재되어 구직자가 중요 기한을 놓치는 문제를 해결하고자 맞춤형 3단계 큐레이션을 설계했습니다.',
      userPersonas: [
        {
          name: '이취준 (25세, 취업준비생)',
          role: '상반기 공채 준비생',
          painPoints: ['채용 공고가 너무 많아 필터링이 어려움', '자격 요건 분석 시간 소요'],
          needs: ['내 직무 맞춤 3줄 요약', '마감일 D-Day 체크리스트']
        }
      ],
      keyFeatures: [
        {
          title: '직무별 단계별 필수 정보 카드뉴스',
          priority: 'P0',
          description: '핵심만 압축한 요약형 카드뉴스 및 한눈에 보는 공채 일정표'
        },
        {
          title: 'Weekly 반응도 분석 피드백 루프',
          priority: 'P1',
          description: '구독자 클릭률(CTR)과 저장률 데이터를 매주 분석하여 카테고리 재배치'
        }
      ],
      deliverables: ['콘텐츠 카테고리 분류체계 (Taxonomy)', '구독자 행동 분석 리포트 (GA4)', '주간 큐레이션 템플릿']
    }
  },
  {
    id: 'univ-teamwork-improvement',
    title: '대학생 팀플 관리 서비스 개선안',
    subtitle: '협업툴 내 진척도 시각화 위젯 및 역할 분담 피드백 제안',
    category: '기타',
    tags: ['팀플 관리', '위젯 UX', '협업 툴'],
    isMiniProject: true,
    problem: '팀원 간 실시간 업무 진행 상황 미공유로 인한 무임승차 및 일정 지연',
    research: '대학생 15명 대상 워크플로우 분석 결과, 단톡방 질문보다 visual dashboard 선호',
    result: '협업툴 내 진척도 시각화 위젯 추가 및 사용자 만족도 개선 제안',
    detailedOverview: {
      duration: '2023.02 (3주)',
      role: '서비스 개선안 기획',
      teamSize: '1명 (개인 프로젝트)',
      background: '대학생 팀 프로젝트 진행 시 각자 맡은 분량의 진행률을 직관적으로 확인하고 피드백할 수 있는 가벼운 위젯을 기획했습니다.',
      userPersonas: [
        {
          name: '최팀장 (23세, 대학생)',
          role: '경영학과 3학년 팀장',
          painPoints: ['팀원들에게 진행 상황을 매번 독촉하기 부담스러움'],
          needs: ['개별 진행률 0%~100% 한눈에 보는 대시보드']
        }
      ],
      keyFeatures: [
        {
          title: '개인별 Task progress bar 위젯',
          priority: 'P0',
          description: '팀원이 세부 항목 체크시 전체 팀 진척도가 실시간 갱신됨'
        }
      ],
      deliverables: ['개선안 제안서', '와이어프레임']
    }
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'experience-1',
    period: '2023.04 ~ 12',
    role: '스타트업 인턴 (운영지원)',
    companyCategory: '초기 스타트업',
    bullets: [
      '운영 데이터 정리 및 지표 분석 (Weekly Active User 행동 파이프라인 정리)',
      '고객 문의(CS) 분류 체계화 및 응대 가이드북(FAQ/SOP) 수립',
      '경쟁 서비스 5종 시장 조사 및 벤치마킹 리포트 작성',
      'SNS 브랜드 콘텐츠 기획 및 인게이지먼트 집계 운영'
    ]
  },
  {
    id: 'experience-2',
    period: '2021.04 ~ 22.03',
    role: '고객센터 계약직',
    companyCategory: '커머스 / 고객 케어 Center',
    bullets: [
      '전화 및 이메일 기반 고객 페인포인트 실시간 수집 및 응대 업무 수행',
      '반복 발생하는 VOC(Voice of Customer) 패턴 추출하여 서비스 개선 아이디어 제안',
      '고객 만족도(CSAT) 우수 상위 10% 유치'
    ]
  },
  {
    id: 'experience-3',
    period: '2019.03 ~ 21.01',
    role: '카페·서점 아르바이트',
    companyCategory: '오프라인 서비스 현장',
    bullets: [
      '3년 이상의 대면 고객 응대 경험을 통한 실질적 사용자 경험(UX) 현장 이해',
      '동선 효율화 및 최고 피크타임 결제 대기시간 20% 단축 제안'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Planning Competency',
    iconName: 'strategy',
    items: [
      { name: '요구사항 정의 및 백로그 관리', grade: 'A', description: 'User Story 작성 및 P0/P1/P2 우선순위 도출 능력' },
      { name: 'IA 설계 및 화면 정의서(Storyboard)', grade: 'A', description: '메뉴 구조도 및 Detail Specification 정의' },
      { name: '서비스 프로세스 및 흐름도(Flowchart)', grade: 'B+', description: '예외 케이스 처리 및 User Journey Map 구체화' }
    ]
  },
  {
    title: 'Research Skills',
    iconName: 'search',
    items: [
      { name: '사용자 인터뷰(IDIs) 설계 및 진행', grade: 'A', description: '질문지 설계, 20명+ 인터뷰 수행 및 팩트 추출' },
      { name: '정량 설문 설계 및 데이터 분석', grade: 'B+', description: '구글 폼 설문지 설계 및 교차 분석' },
      { name: '어피니티 다이어그램을 통한 인사이트 도출', grade: 'A', description: '유사한 Pain Point 그룹핑으로 핵심 기능 도출' }
    ]
  }
];

export const TOOLS: ToolItem[] = [
  { name: 'Figma', category: 'Design & Wireframe', icon: 'edit_square', useCase: '와이어프레임, 와이어블록, 화면정의서, 간단한 프로토타이핑 제작' },
  { name: 'Notion', category: 'Documentation', icon: 'description', useCase: '프로젝트 요구사항 명세서(PRD), WBS 및 회의록 통합 정리' },
  { name: 'Canva', category: 'Presentation', icon: 'grid_view', useCase: '기획 발표 자료, 리포트 시각화 요약 장표 제작' },
  { name: 'Excel / Workspace', category: 'Data & Form', icon: 'table_view', useCase: '정량 설문 데이터 정제, 기능 점수 산출 표, 스프레드시트 관리' },
  { name: 'Slack / Trello', category: 'Collaboration', icon: 'chat', useCase: '팀원 간 일일 칸반 보드 업무 공유 및 커뮤니케이션' },
  { name: 'ChatGPT / Gemini', category: 'AI Tools', icon: 'psychology', useCase: '초기 아이데이션, 페르소나 시나리오 보강, 프롬프트 테스트' }
];
