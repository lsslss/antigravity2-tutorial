import React, { useState, useEffect } from 'react';
import { CURRICULUM_DATA } from './data/curriculum';
import { UserProgress } from './types';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { LessonView } from './components/LessonView';
import { ToolExplorer } from './components/ToolExplorer';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { TerminalPlayground } from './components/TerminalPlayground';
import { Footer } from './components/Footer';
import { Sparkles, Terminal, BookOpen, Layers } from 'lucide-react';

const STORAGE_KEY = 'antigravity2_tutorial_progress_v1';

const defaultProgress: UserProgress = {
  completedLessons: [],
  quizScores: {},
  completedPractices: [],
  currentLessonId: 1,
  notes: {}
};

export const App: React.FC = () => {
  // 載入 LocalStorage 儲存的學習進度
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load progress from localStorage', e);
    }
    return defaultProgress;
  });

  const [currentTab, setCurrentTab] = useState<'lesson' | 'tools' | 'comparison' | 'terminal'>('lesson');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // 當進度變動時持久化存回 LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to persist progress to localStorage', e);
    }
  }, [progress]);

  const currentLesson = CURRICULUM_DATA.find(l => l.id === progress.currentLessonId) || CURRICULUM_DATA[0];

  // 選取章節
  const handleSelectLesson = (id: number) => {
    setProgress(prev => ({
      ...prev,
      currentLessonId: id
    }));
    setCurrentTab('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 切換章節完成標記
  const handleToggleComplete = (id: number) => {
    setProgress(prev => {
      const isAlreadyCompleted = prev.completedLessons.includes(id);
      const newCompleted = isAlreadyCompleted
        ? prev.completedLessons.filter(lessonId => lessonId !== id)
        : [...prev.completedLessons, id];
      return {
        ...prev,
        completedLessons: newCompleted
      };
    });
  };

  // 儲存測驗分數
  const handleSaveQuizScore = (lessonId: number, score: number) => {
    setProgress(prev => {
      const updatedScores = {
        ...prev.quizScores,
        [lessonId]: score
      };
      // 若得分達 80 以上，且該章節尚未標記完成，自動標記為已完成
      let updatedCompleted = [...prev.completedLessons];
      if (score >= 80 && !updatedCompleted.includes(lessonId)) {
        updatedCompleted.push(lessonId);
      }
      return {
        ...prev,
        quizScores: updatedScores,
        completedLessons: updatedCompleted
      };
    });
  };

  // 標記演練完成
  const handleCompletePractice = (lessonId: number) => {
    setProgress(prev => {
      if (!prev.completedPractices.includes(lessonId)) {
        return {
          ...prev,
          completedPractices: [...prev.completedPractices, lessonId]
        };
      }
      return prev;
    });
  };

  // 重設進度
  const handleResetProgress = () => {
    if (window.confirm('確定要重設所有章節研讀、測驗成績與演練紀錄嗎？此操作將清除本機 LocalStorage 資料。')) {
      setProgress(defaultProgress);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  // 計算進度百分比
  const totalLessons = CURRICULUM_DATA.length;
  const completedCount = progress.completedLessons.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* 頂部導航列 */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        progressPercent={progressPercent}
        completedCount={completedCount}
        totalCount={totalLessons}
        onResetProgress={handleResetProgress}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* 主要內容區域 */}
      <main className="flex-1 flex flex-col">
        {currentTab === 'lesson' && (
          <div className="flex-1 flex flex-col md:flex-row">
            {/* 左側課程清單 */}
            <Sidebar
              lessons={CURRICULUM_DATA}
              currentLessonId={progress.currentLessonId}
              onSelectLesson={handleSelectLesson}
              progress={progress}
            />

            {/* 右側課程詳細閱讀與演練區 */}
            <div className="flex-1 overflow-y-auto">
              <LessonView
                lesson={currentLesson}
                totalLessons={totalLessons}
                progress={progress}
                onSelectLesson={handleSelectLesson}
                onToggleComplete={handleToggleComplete}
                onSaveQuizScore={handleSaveQuizScore}
                onCompletePractice={handleCompletePractice}
              />
            </div>
          </div>
        )}

        {currentTab === 'tools' && (
          <div className="flex-1">
            <ToolExplorer />
          </div>
        )}

        {currentTab === 'comparison' && (
          <div className="flex-1">
            <ComparisonMatrix />
          </div>
        )}

        {currentTab === 'terminal' && (
          <div className="flex-1 max-w-5xl mx-auto px-4 py-8 w-full space-y-4">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-semibold border border-cyan-800">
                <Terminal className="w-4 h-4" />
                全功能 Linux 沙盒終端練功房
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                Linux Mint 22.3 命令演練沙盒
              </h1>
              <p className="text-xs text-slate-400">
                自由練習 Linux 系統指令、Antigravity CLI (agy)、斜線指令與 Firebase 發布流程
              </p>
            </div>
            <TerminalPlayground />
          </div>
        )}
      </main>

      {/* 底部頁尾 */}
      <Footer />
    </div>
  );
};

export default App;
