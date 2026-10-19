import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, Award } from 'lucide-react';

interface InteractiveQuizProps {
  lessonId: number;
  questions: QuizQuestion[];
  savedScore?: number;
  onSaveScore: (score: number) => void;
}

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({
  questions,
  savedScore,
  onSaveScore
}) => {
  // 記錄使用者的選擇：questionId -> 選擇的選項索引陣列
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number[]>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(savedScore !== undefined);
  const [currentScore, setCurrentScore] = useState<number>(savedScore || 0);

  // 切換選項選擇
  const handleToggleOption = (qId: string, optIndex: number, isMulti: boolean) => {
    if (isSubmitted) return; // 送出後鎖定

    setSelectedAnswers((prev) => {
      const current = prev[qId] || [];
      if (isMulti) {
        if (current.includes(optIndex)) {
          return { ...prev, [qId]: current.filter(i => i !== optIndex) };
        } else {
          return { ...prev, [qId]: [...current, optIndex] };
        }
      } else {
        return { ...prev, [qId]: [optIndex] };
      }
    });
  };

  // 送出評分
  const handleSubmit = () => {
    let correctCount = 0;

    questions.forEach((q) => {
      const userSelected = (selectedAnswers[q.id] || []).slice().sort();
      const expected = q.correctAnswers.slice().sort();

      const isMatch =
        userSelected.length === expected.length &&
        userSelected.every((val, index) => val === expected[index]);

      if (isMatch) {
        correctCount += 1;
      }
    });

    const scorePercentage = Math.round((correctCount / questions.length) * 100);
    setCurrentScore(scorePercentage);
    setIsSubmitted(true);
    onSaveScore(scorePercentage);
  };

  // 重新作答
  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  return (
    <div className="glass-card rounded-2xl p-6 border border-slate-800 my-8 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800">
              <HelpCircle className="w-5 h-5" />
            </span>
            <h3 className="text-lg font-bold text-slate-100">
              單元實戰隨堂測驗
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            本單元共有 {questions.length} 道精選實戰題，檢驗您對核心觀念與規則的理解
          </p>
        </div>

        {isSubmitted && (
          <div className="flex items-center gap-3">
            <div className={`px-3 py-1.5 rounded-xl border flex items-center gap-2 ${
              currentScore >= 80 
                ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300' 
                : 'bg-amber-950/80 border-amber-500/50 text-amber-300'
            }`}>
              <Award className="w-4 h-4" />
              <span className="font-bold text-sm">得分：{currentScore} 分</span>
            </div>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors border border-slate-700"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              重新作答
            </button>
          </div>
        )}
      </div>

      {/* 題目列表 */}
      <div className="space-y-6 mt-6">
        {questions.map((q, qIndex) => {
          const isMulti = q.correctAnswers.length > 1;
          const userSelected = selectedAnswers[q.id] || [];

          return (
            <div 
              key={q.id}
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-sm font-semibold text-slate-100 leading-relaxed">
                  <span className="text-cyan-400 font-mono mr-2">Q{qIndex + 1}.</span>
                  {q.question}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 flex-shrink-0">
                  {isMulti ? '多選題' : '單選題'}
                </span>
              </div>

              {/* 選項清單 */}
              <div className="grid grid-cols-1 gap-2 pt-1">
                {q.options.map((opt, optIndex) => {
                  const isChecked = userSelected.includes(optIndex);
                  const isCorrect = q.correctAnswers.includes(optIndex);

                  let itemStyle = "bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-900";

                  if (isSubmitted) {
                    if (isCorrect) {
                      itemStyle = "bg-emerald-950/50 border-emerald-500/60 text-emerald-200 font-medium";
                    } else if (isChecked && !isCorrect) {
                      itemStyle = "bg-rose-950/50 border-rose-500/60 text-rose-300";
                    } else {
                      itemStyle = "bg-slate-950/40 border-slate-800/40 text-slate-500 opacity-60";
                    }
                  } else if (isChecked) {
                    itemStyle = "bg-cyan-950/70 border-cyan-500/60 text-cyan-200 font-medium";
                  }

                  return (
                    <button
                      key={optIndex}
                      type="button"
                      disabled={isSubmitted}
                      onClick={() => handleToggleOption(q.id, optIndex, isMulti)}
                      className={`text-left p-3 rounded-lg border text-xs transition-all flex items-start gap-3 ${itemStyle}`}
                    >
                      <div className="mt-0.5">
                        {isSubmitted ? (
                          isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          ) : isChecked ? (
                            <XCircle className="w-4 h-4 text-rose-400" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-slate-700" />
                          )
                        ) : (
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isChecked ? 'border-cyan-400 bg-cyan-500/30' : 'border-slate-700'
                          }`}>
                            {isChecked && <div className="w-2 h-2 rounded-full bg-cyan-400" />}
                          </div>
                        )}
                      </div>
                      <span className="flex-1 leading-relaxed">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* 答案解析（送出後顯示） */}
              {isSubmitted && (
                <div className="mt-3 p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs space-y-1">
                  <div className="text-cyan-400 font-semibold flex items-center gap-1.5">
                    <span>💡 題目深度解析：</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {q.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 送出作答按鈕 */}
      {!isSubmitted && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={Object.keys(selectedAnswers).length < questions.length}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg ${
              Object.keys(selectedAnswers).length >= questions.length
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-cyan-500/20 cursor-pointer'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
            }`}
          >
            {Object.keys(selectedAnswers).length >= questions.length
              ? '送出測驗並查看詳解'
              : `尚有題目未作答 (${Object.keys(selectedAnswers).length}/${questions.length})`}
          </button>
        </div>
      )}
    </div>
  );
};
