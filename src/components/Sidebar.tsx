import React from 'react';
import { Lesson, UserProgress } from '../types';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  Terminal, 
  BookOpen,
  X,
  Award
} from 'lucide-react';

interface SidebarProps {
  lessons: Lesson[];
  currentLessonId: number;
  onSelectLesson: (id: number) => void;
  progress: UserProgress;
  isMobileDrawerOpen?: boolean;
  onCloseMobileDrawer?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  lessons,
  currentLessonId,
  onSelectLesson,
  progress,
  isMobileDrawerOpen = false,
  onCloseMobileDrawer
}) => {
  // 依分類將課程分組
  const categories = Array.from(new Set(lessons.map(l => l.category)));

  const handleLessonItemClick = (id: number) => {
    onSelectLesson(id);
    if (onCloseMobileDrawer) {
      onCloseMobileDrawer();
    }
  };

  const renderContent = (isDrawer = false) => (
    <div className="space-y-5">
      <div className="pb-3 border-b border-slate-800 flex items-center justify-between">
        <div>
          <h2 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            全課程導覽大綱 (12 堂課)
          </h2>
          <p className="text-[11px] text-slate-400 mt-0.5">
            每課含深度原理、隨堂測驗與 Linux 終端實戰
          </p>
        </div>

        {isDrawer && onCloseMobileDrawer && (
          <button
            onClick={onCloseMobileDrawer}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            aria-label="關閉目錄"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="space-y-5">
        {categories.map((category) => {
          const categoryLessons = lessons.filter(l => l.category === category);
          const completedCount = categoryLessons.filter(l => progress.completedLessons.includes(l.id)).length;

          return (
            <div key={category} className="space-y-2">
              <div className="text-[11px] font-bold text-slate-400 px-2 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {category}
                </span>
                <span className="text-[10px] text-slate-500 font-mono bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                  {completedCount}/{categoryLessons.length}
                </span>
              </div>

              <div className="space-y-1.5">
                {categoryLessons.map((lesson) => {
                  const isActive = lesson.id === currentLessonId;
                  const isCompleted = progress.completedLessons.includes(lesson.id);
                  const quizScore = progress.quizScores[lesson.id];
                  const hasPractice = progress.completedPractices.includes(lesson.id);

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => handleLessonItemClick(lesson.id)}
                      className={`w-full text-left p-3 rounded-xl transition-all relative flex flex-col gap-1.5 border active:scale-[0.99] ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-950/90 to-blue-950/60 border-cyan-500/60 shadow-md shadow-cyan-950 text-slate-100 ring-1 ring-cyan-500/30'
                          : 'bg-slate-900/50 hover:bg-slate-900/90 border-slate-800/70 text-slate-300'
                      }`}
                    >
                      {/* 上層：課程編號、標題與狀態 */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2.5">
                          {isCompleted ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          ) : (
                            <Circle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isActive ? 'text-cyan-400' : 'text-slate-600'}`} />
                          )}
                          <span className={`text-xs font-semibold leading-snug line-clamp-2 ${isActive ? 'text-cyan-300 font-bold' : 'text-slate-200'}`}>
                            {lesson.title}
                          </span>
                        </div>
                      </div>

                      {/* 下層：時長與標記 */}
                      <div className="flex flex-wrap items-center gap-2 pl-6 text-[10px] text-slate-400">
                        <span className="flex items-center gap-1 font-mono">
                          <Clock className="w-3 h-3 text-slate-500" />
                          {lesson.estimatedMinutes} 分鐘
                        </span>

                        {quizScore !== undefined && (
                          <span className={`px-1.5 py-0.5 rounded font-mono text-[9.5px] ${
                            quizScore >= 80 ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/50' : 'bg-amber-950 text-amber-300 border border-amber-800/50'
                          }`}>
                            測驗 {quizScore}分
                          </span>
                        )}

                        {hasPractice && (
                          <span className="flex items-center gap-0.5 text-cyan-400 font-mono text-[9.5px]" title="已完成演練">
                            <Terminal className="w-2.5 h-2.5" />
                            已演練
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* 電腦版桌面固定側邊欄 */}
      <aside className="hidden md:block w-80 lg:w-88 flex-shrink-0 bg-slate-950/70 border-r border-slate-800/80 p-4 h-[calc(100vh-4rem)] overflow-y-auto touch-scroll">
        {renderContent(false)}
      </aside>

      {/* 手機版抽屜式滑出選單 (Drawer) */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* 背景遮罩 */}
          <div 
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
            onClick={onCloseMobileDrawer}
          />

          {/* 抽屜主體 */}
          <div className="relative w-4/5 max-w-sm bg-slate-950 border-r border-slate-800 h-full p-4 overflow-y-auto z-10 shadow-2xl safe-bottom safe-top touch-scroll">
            {renderContent(true)}
          </div>
        </div>
      )}
    </>
  );
};
