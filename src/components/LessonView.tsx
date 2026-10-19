import React, { useState } from 'react';
import { Lesson, UserProgress } from '../types';
import { InteractiveQuiz } from './InteractiveQuiz';
import { TerminalPlayground } from './TerminalPlayground';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Copy, 
  Check, 
  Terminal, 
  AlertTriangle, 
  Info, 
  Lightbulb, 
  ShieldCheck,
  CheckCheck,
  BookOpen
} from 'lucide-react';

interface LessonViewProps {
  lesson: Lesson;
  totalLessons: number;
  progress: UserProgress;
  onSelectLesson: (id: number) => void;
  onToggleComplete: (id: number) => void;
  onSaveQuizScore: (lessonId: number, score: number) => void;
  onCompletePractice: (lessonId: number) => void;
  onOpenChapterDrawer?: () => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  totalLessons,
  progress,
  onSelectLesson,
  onToggleComplete,
  onSaveQuizScore,
  onCompletePractice,
  onOpenChapterDrawer
}) => {
  const [copiedCodeSnippetId, setCopiedCodeSnippetId] = useState<string | null>(null);

  const isCompleted = progress.completedLessons.includes(lesson.id);
  const quizScore = progress.quizScores[lesson.id];
  const isPracticeDone = progress.completedPractices.includes(lesson.id);

  const handleCopyCode = (snippetId: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeSnippetId(snippetId);
    setTimeout(() => setCopiedCodeSnippetId(null), 2000);
  };

  const getCalloutStyles = (type?: string) => {
    switch (type) {
      case 'tip':
        return {
          bg: 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200',
          icon: <Lightbulb className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />,
          title: '實戰小技巧 (Tip)'
        };
      case 'important':
        return {
          bg: 'bg-blue-950/40 border-cyan-500/40 text-cyan-200',
          icon: <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />,
          title: '關鍵要點 (Important)'
        };
      case 'caution':
        return {
          bg: 'bg-rose-950/40 border-rose-500/40 text-rose-200',
          icon: <AlertTriangle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />,
          title: '特別警示 (Caution)'
        };
      default:
        return {
          bg: 'bg-slate-900/60 border-slate-700/60 text-slate-300',
          icon: <Info className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />,
          title: '備註說明 (Note)'
        };
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 py-4 sm:py-8 space-y-6 sm:space-y-10 pb-28 md:pb-16">
      {/* 手機專屬頂部章節快速跳轉列 */}
      <div className="md:hidden glass-panel p-2.5 rounded-xl border border-slate-800 flex items-center justify-between gap-2 shadow-sm">
        <button
          onClick={() => lesson.id > 1 && onSelectLesson(lesson.id - 1)}
          disabled={lesson.id <= 1}
          className={`p-1.5 rounded-lg border text-xs flex items-center ${
            lesson.id > 1 
              ? 'bg-slate-800 border-slate-700 text-slate-200 active:bg-slate-700' 
              : 'border-transparent text-slate-600 opacity-40'
          }`}
          aria-label="上一課"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={onOpenChapterDrawer}
          className="flex-1 flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-semibold text-cyan-300 truncate"
        >
          <BookOpen className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">第 {lesson.id} 課 (共 {totalLessons} 課) • 目錄</span>
        </button>

        <button
          onClick={() => lesson.id < totalLessons && onSelectLesson(lesson.id + 1)}
          disabled={lesson.id >= totalLessons}
          className={`p-1.5 rounded-lg border text-xs flex items-center ${
            lesson.id < totalLessons 
              ? 'bg-slate-800 border-slate-700 text-slate-200 active:bg-slate-700' 
              : 'border-transparent text-slate-600 opacity-40'
          }`}
          aria-label="下一課"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* 課程頂部 Header */}
      <div className="space-y-3 sm:space-y-4 pb-5 sm:pb-6 border-b border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/80 text-[11px] sm:text-xs font-semibold">
              {lesson.category}
            </span>
            <span className="text-[11px] sm:text-xs text-slate-400 font-mono">
              第 {lesson.id} / {totalLessons} 課
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="flex items-center gap-1 font-mono text-[11px] sm:text-xs">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              約 {lesson.estimatedMinutes} 分鐘
            </span>
            <button
              onClick={() => onToggleComplete(lesson.id)}
              className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-xl text-[11px] sm:text-xs font-semibold transition-all border active:scale-95 ${
                isCompleted
                  ? 'bg-emerald-950/70 border-emerald-500/60 text-emerald-300'
                  : 'bg-slate-900 border-slate-700 hover:border-slate-600 text-slate-300'
              }`}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>已完成</span>
                </>
              ) : (
                <>
                  <Circle className="w-3.5 h-3.5 text-slate-500" />
                  <span>標記完成</span>
                </>
              )}
            </button>
          </div>
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-100 tracking-tight leading-snug">
          {lesson.title}
        </h1>

        <p className="text-sm sm:text-base text-cyan-400/90 font-medium leading-relaxed">
          {lesson.subtitle}
        </p>

        {/* 標籤清單 */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {lesson.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-900/90 text-slate-400 border border-slate-800"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* 單元概要與學習目標 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {/* 本單元概要 */}
        <div className="glass-card p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-2">
          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <span>📖 單元導讀概要</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lesson.summary}
          </p>
        </div>

        {/* 學習目標卡片 */}
        <div className="glass-card p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-2">
          <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
            <span>🎯 本單元核心目標</span>
          </h3>
          <ul className="space-y-1.5">
            {lesson.objectives.map((obj, i) => (
              <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                <span className="text-cyan-400 font-bold mt-0.5">•</span>
                <span className="leading-relaxed">{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 正文核心小節 */}
      <div className="space-y-8 sm:space-y-10">
        {lesson.sections.map((sec) => {
          const callout = sec.callout ? getCalloutStyles(sec.callout.type) : null;

          return (
            <div key={sec.id} className="space-y-3 sm:space-y-4">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-100 flex items-center gap-2 pb-2 border-b border-slate-800/80 leading-snug">
                <span className="w-1.5 h-4 sm:h-5 rounded-full bg-cyan-500 flex-shrink-0" />
                <span>{sec.title}</span>
              </h2>

              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line space-y-3">
                {sec.content}
              </div>

              {/* 呼叫提示塊 (Callout) */}
              {sec.callout && callout && (
                <div className={`p-3.5 sm:p-4 rounded-xl border flex items-start gap-3 text-xs sm:text-sm leading-relaxed ${callout.bg}`}>
                  {callout.icon}
                  <div className="space-y-0.5 flex-1 min-w-0">
                    <span className="font-bold block text-xs">{callout.title}</span>
                    <span className="text-xs sm:text-sm">{sec.callout.text}</span>
                  </div>
                </div>
              )}

              {/* 程式碼範例塊 (Code Snippet) */}
              {sec.codeSnippet && (
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 font-mono text-xs my-3 sm:my-4 shadow-xl">
                  <div className="bg-slate-900/90 px-3 sm:px-4 py-2 border-b border-slate-800 flex items-center justify-between gap-2 text-slate-400">
                    <span className="text-[10px] sm:text-[11px] font-sans text-slate-300 font-semibold truncate">
                      {sec.codeSnippet.caption || `範例代碼 (${sec.codeSnippet.language})`}
                    </span>
                    <button
                      onClick={() => handleCopyCode(sec.id, sec.codeSnippet!.code)}
                      className="flex items-center gap-1 text-[10px] sm:text-[11px] hover:text-white px-2 py-0.5 rounded bg-slate-800/80 hover:bg-slate-800 transition-colors flex-shrink-0 active:scale-95"
                    >
                      {copiedCodeSnippetId === sec.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">已複製</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>複製</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-3 sm:p-4 text-cyan-300 overflow-x-auto leading-relaxed select-text font-mono text-[11px] sm:text-[12px] touch-scroll">
                    {sec.codeSnippet.code}
                  </pre>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 單元實戰演練區 (Terminal Playground) */}
      <div className="pt-6 border-t border-slate-800 space-y-3">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800 flex-shrink-0">
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
          </span>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-100">
              單元實戰：Linux Mint 終端演練區
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
              請在下方終端機敲擊指定指令，親身體驗 Antigravity 在 Linux 上的響應
            </p>
          </div>
        </div>

        <TerminalPlayground
          currentTask={lesson.practice}
          onCompleteTask={() => onCompletePractice(lesson.id)}
          isTaskCompleted={isPracticeDone}
        />
      </div>

      {/* 單元隨堂互動測驗 (Interactive Quiz) */}
      <InteractiveQuiz
        lessonId={lesson.id}
        questions={lesson.quiz}
        savedScore={quizScore}
        onSaveScore={(score) => onSaveQuizScore(lesson.id, score)}
      />

      {/* 底部章節導航控制列 */}
      <div className="pt-6 sm:pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        {lesson.id > 1 ? (
          <button
            onClick={() => {
              onSelectLesson(lesson.id - 1);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-semibold transition-colors active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>上一課：第 {lesson.id - 1} 課</span>
          </button>
        ) : <div className="hidden sm:block" />}

        <button
          onClick={() => onToggleComplete(lesson.id)}
          className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95 ${
            isCompleted
              ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
              : 'bg-cyan-600 hover:bg-cyan-500 text-white'
          }`}
        >
          <CheckCheck className="w-4 h-4" />
          <span>{isCompleted ? '已完成本課 (點擊切換)' : '完成研讀並標記本課'}</span>
        </button>

        {lesson.id < totalLessons ? (
          <button
            onClick={() => {
              onSelectLesson(lesson.id + 1);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-semibold transition-all shadow-lg shadow-cyan-600/20 active:scale-95"
          >
            <span>下一課：第 {lesson.id + 1} 課</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : <div className="hidden sm:block" />}
      </div>
    </div>
  );
};
