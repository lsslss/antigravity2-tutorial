export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswers: number[]; // 支持單選或多選 (0-indexed)
  explanation: string;
}

export interface PracticeTask {
  id: string;
  title: string;
  prompt: string;
  initialCommand?: string;
  hint: string;
  expectedCommands: string[]; // 符合任一正則或字串即可觸發成功
  mockOutput: string;
  explanation: string;
}

export interface LessonSection {
  id: string;
  title: string;
  content: string; // 支援 markdown 或格式化文字
  codeSnippet?: {
    language: string;
    code: string;
    caption?: string;
  };
  callout?: {
    type: 'note' | 'tip' | 'important' | 'caution';
    text: string;
  };
}

export interface Lesson {
  id: number;
  title: string;
  subtitle: string;
  category: '基礎與架構' | '規則與大腦' | '擴充與工具' | '進階範例' | '橫向評比';
  estimatedMinutes: number;
  tags: string[];
  icon: string;
  summary: string;
  objectives: string[];
  sections: LessonSection[];
  quiz: QuizQuestion[];
  practice: PracticeTask;
}

export interface ToolItem {
  id: string;
  name: string;
  category: '原生工具 (Built-in Tools)' | '內建技能 (Skills)' | 'MCP / Sidecars' | '斜線指令 (Slash Commands)';
  description: string;
  syntax: string;
  linuxTip?: string;
  example: string;
}

export interface AIComparison {
  name: string;
  badge: string;
  provider: string;
  avatar: string;
  score: number; // 滿分 10
  dimensions: {
    terminalIntegration: number; // 終端整合度
    multiAgentOrchestration: number; // 多代理協調能力
    autonomousSelfHealing: number; // 自主閉環修復
    rulePersistence: number; // 規則與上下文記憶
    toolEcosystem: number; // Skill 與 MCP 生態
    easeOfUse: number; // 易用性與上手度
  };
  highlights: string[];
  limitations: string[];
  architectureSummary: string;
  terminalStyle: string;
  verdict: string;
}

export interface UserProgress {
  completedLessons: number[];
  quizScores: Record<number, number>; // lessonId -> percentage score
  completedPractices: number[];
  currentLessonId: number;
  notes: Record<number, string>;
}
