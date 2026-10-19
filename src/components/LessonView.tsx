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
  CheckCheck
} from 'lucide-react';

interface LessonViewProps {
  lesson: Lesson;
  totalLessons: number;
  progress: UserProgress;
  onSelectLesson: (id: number) => void;
  onToggleComplete: (id: number) => void;
  onSaveQuizScore: (lessonId: number, score: number) => void;
  onCompletePractice: (lessonId: number) => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  totalLessons,
  progress,
  onSelectLesson,
  onToggleComplete,
  onSaveQuizScore,
  onCompletePractice
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      {/* 課程頂部 Header */}
      <div className="space-y-4 pb-6 border-b border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/80 text-xs font-semibold">
              {lesson.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              第 {lesson.id} / {totalLessons} 課
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              約 {lesson.estimatedMinutes} 分鐘
            </span>
            <button
              onClick={() => onToggleComplete(lesson.id)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold transition-all border ${
                isCompleted
                  ? 'bg-emerald-950/70 border-emerald-500/60 text-emerald-300'
                  : 'bg-slate-900 border-slate-700 hover:border-slate-600 text-slate-300'
              }`}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  已完成此課
                </>
              ) : (
                <>
                  <Circle className="w-3.5 h-3.5 text-slate-500" />
                  標記為已完成
                </>
              )}
            </button>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight leading-tight">
          {lesson.title}
        </h1>

        <p className="text-base text-cyan-400/90 font-medium">
          {lesson.subtitle}
        </p>

        {/* 標籤清單 */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {lesson.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* 單元概要與學習目標 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 本單元概要 */}
        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-2">
          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <span>📖 單元導讀概要</span>
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            {lesson.summary}
          </p>
        </div>

        {/* 學習目標卡片 */}
        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-2">
          <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
            <span>🎯 本單元核心目標</span>
          </h3>
          <ul className="space-y-1.5">
            {lesson.objectives.map((obj, i) => (
              <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                <span className="text-cyan-400 font-bold mt-0.5">•</span>
                <span className="leading-relaxed">{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 正文核心小節 */}
      <div className="space-y-10">
        {lesson.sections.map((sec) => {
          const callout = sec.callout ? getCalloutStyles(sec.callout.type) : null;

          return (
            <div key={sec.id} className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-100 flex items-center gap-2.5 pb-2 border-b border-slate-800/80">
                <span className="w-1.5 h-5 rounded-full bg-cyan-500" />
                {sec.title}
              </h2>

              <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-line space-y-3">
                {sec.content}
              </div>

              {/* 呼叫提示塊 (Callout) */}
              {sec.callout && callout && (
                <div className={`p-4 rounded-xl border flex items-start gap-3 text-xs leading-relaxed ${callout.bg}`}>
                  {callout.icon}
                  <div className="space-y-0.5">
                    <span className="font-bold block">{callout.title}</span>
                    <span>{sec.callout.text}</span>
                  </div>
                </div>
              )}

              {/* 程式碼範例塊 (Code Snippet) */}
              {sec.codeSnippet && (
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 font-mono text-xs my-4 shadow-xl">
                  <div className="bg-slate-900/80 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-slate-400">
                    <span className="text-[11px] font-sans text-slate-300 font-semibold">
                      {sec.codeSnippet.caption || `範例代碼 (${sec.codeSnippet.language})`}
                    </span>
                    <button
                      onClick={() => handleCopyCode(sec.id, sec.codeSnippet!.code)}
                      className="flex items-center gap-1 text-[11px] hover:text-white px-2 py-0.5 rounded bg-slate-800/60 hover:bg-slate-800 transition-colors"
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
                  <pre className="p-4 text-cyan-300 overflow-x-auto leading-relaxed select-text font-mono text-[12px]">
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
          <span className="p-1.5 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800">
            <Terminal className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-lg font-bold text-slate-100">
              單元實戰：Linux Mint 終端演練區
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              請在下方終端機中敲擊指定指令，親身體驗 Antigravity 在 Linux 上的精確響應
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
      <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        {lesson.id > 1 ? (
          <button
            onClick={() => onSelectLesson(lesson.id - 1)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-semibold transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            上一課：第 {lesson.id - 1} 課
          </button>
        ) : <div className="hidden sm:block" />}

        <button
          onClick={() => onToggleComplete(lesson.id)}
          className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md ${
            isCompleted
              ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
              : 'bg-cyan-600 hover:bg-cyan-500 text-white'
          }`}
        >
          <CheckCheck className="w-4 h-4" />
          {isCompleted ? '已完成本課！(點擊可切換)' : '完成研讀並標記本課'}
        </button>

        {lesson.id < totalLessons ? (
          <button
            onClick={() => onSelectLesson(lesson.id + 1)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-semibold transition-all shadow-lg shadow-cyan-600/20"
          >
            下一課：第 {lesson.id + 1} 課
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : <div className="hidden sm:block" />}
      </div>
    </div>
  );
};
