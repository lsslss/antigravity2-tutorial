import React from 'react';
import { Lesson, UserProgress } from '../types';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  HelpCircle,
  Terminal,
  BookOpen
} from 'lucide-react';

interface SidebarProps {
  lessons: Lesson[];
  currentLessonId: number;
  onSelectLesson: (id: number) => void;
  progress: UserProgress;
}

export const Sidebar: React.FC<SidebarProps> = ({
  lessons,
  currentLessonId,
  onSelectLesson,
  progress
}) => {
  // 依分類將課程分組
  const categories = Array.from(new Set(lessons.map(l => l.category)));

  return (
    <aside className="w-full md:w-80 lg:w-88 flex-shrink-0 bg-slate-950/70 border-r border-slate-800/80 p-4 h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="mb-4 pb-3 border-b border-slate-800">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
          全課程導覽大綱 (12 堂課)
        </h2>
        <p className="text-[11px] text-slate-500 mt-0.5">
          每課包含深度原理、隨堂測驗與真實終端演練
        </p>
      </div>

      <div className="space-y-6">
        {categories.map((category) => {
          const categoryLessons = lessons.filter(l => l.category === category);
          return (
            <div key={category} className="space-y-2">
              <div className="text-[11px] font-bold text-slate-400 px-2 flex items-center justify-between">
                <span>{category}</span>
                <span className="text-[10px] text-slate-500 font-mono">
                  {categoryLessons.filter(l => progress.completedLessons.includes(l.id)).length}/{categoryLessons.length}
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
                      onClick={() => onSelectLesson(lesson.id)}
                      className={`w-full text-left p-2.5 rounded-xl transition-all relative flex flex-col gap-1 border ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-950/80 to-blue-950/50 border-cyan-500/50 shadow-sm shadow-cyan-950 text-slate-100'
                          : 'bg-slate-900/40 hover:bg-slate-900/90 border-slate-800/60 text-slate-300'
                      }`}
                    >
                      {/* 上層：課程編號、標題與狀態 */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          {isCompleted ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          ) : (
                            <Circle className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-cyan-400' : 'text-slate-600'}`} />
                          )}
                          <span className={`text-xs font-semibold line-clamp-1 ${isActive ? 'text-cyan-300' : 'text-slate-200'}`}>
                            {lesson.title}
                          </span>
                        </div>
                      </div>

                      {/* 下層：時長與標記 */}
                      <div className="flex items-center gap-2 pl-6 text-[10px] text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-500" />
                          {lesson.estimatedMinutes} 分鐘
                        </span>

                        {quizScore !== undefined && (
                          <span className={`px-1.5 py-0.2 rounded font-mono ${
                            quizScore >= 80 ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/50' : 'bg-amber-950 text-amber-300 border border-amber-800/50'
                          }`}>
                            測驗 {quizScore}分
                          </span>
                        )}

                        {hasPractice && (
                          <span className="flex items-center gap-0.5 text-cyan-400" title="已完成演練">
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
    </aside>
  );
};
