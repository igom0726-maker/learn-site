export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI' | '커머스/소상공인' | '콘텐츠/운영' | '기타';
  tags: string[];
  imageUrl?: string;
  problem: string;
  research: string;
  serviceLogic?: {
    steps: string[];
    focusHighlight: string;
  };
  executionFocus?: {
    description: string;
    progressPercentage: number;
    progressLabel: string;
  };
  growthMetrics?: {
    viewsGrowth: string;
    churnDecrease: string;
    description: string;
  };
  result: string;
  badge?: string;
  isMiniProject?: boolean;
  
  // Detailed modal view data
  detailedOverview?: {
    duration: string;
    role: string;
    teamSize: string;
    background: string;
    userPersonas: {
      name: string;
      role: string;
      painPoints: string[];
      needs: string[];
    }[];
    keyFeatures: {
      title: string;
      priority: 'P0' | 'P1' | 'P2';
      description: string;
    }[];
    deliverables: string[];
  };
}

export interface TimelineItem {
  id: string;
  period: string;
  role: string;
  companyCategory: string;
  bullets: string[];
  description?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  items: {
    name: string;
    grade: string;
    description?: string;
  }[];
}

export interface ToolItem {
  name: string;
  category: string;
  icon: string;
  useCase: string;
}

export interface ContactForm {
  senderName: string;
  email: string;
  subject: string;
  templateType: 'recruitment' | 'collaboration' | 'coffeeChat' | 'custom';
  message: string;
}
