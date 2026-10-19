import React, { useState } from 'react';
import { AI_COMPARISONS } from '../data/comparisons';
import { 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const ComparisonMatrix: React.FC = () => {
  const [selectedAIIndex, setSelectedAIIndex] = useState<number>(0);
  const currentAI = AI_COMPARISONS[selectedAIIndex];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* 標題與簡介 */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800 text-cyan-300 text-xs font-semibold">
          <Layers className="w-4 h-4" />
          業界權威橫向深度評比
        </div>
        <h1 className="text-3xl font-extrabold text-slate-100 sm:text-4xl">
          主流 AI Agent 工具大對決與選型矩陣
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
          深入對比 Antigravity 2、Claude Code、ChatGPT、Open Code 與 Pi Agent 在 Linux 環境下的終端操作、多代理協同與自主自癒表現。
        </p>
      </div>

      {/* AI 選擇頁籤卡片 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {AI_COMPARISONS.map((ai, index) => {
          const isSelected = index === selectedAIIndex;
          return (
            <button
              key={ai.name}
              onClick={() => setSelectedAIIndex(index)}
              className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-br from-cyan-950/80 to-blue-950/50 border-cyan-500/80 shadow-lg shadow-cyan-950/60 scale-[1.02]'
                  : 'glass-card border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{ai.avatar}</span>
                  <span className={`text-xs font-extrabold font-mono px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {ai.score} 分
                  </span>
                </div>
                <h3 className={`mt-2 font-bold text-sm line-clamp-1 ${isSelected ? 'text-slate-100' : 'text-slate-300'}`}>
                  {ai.name}
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5">{ai.provider}</p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800/80 text-[10px] text-cyan-400/90 font-medium line-clamp-1">
                {ai.badge}
              </div>
            </button>
          );
        })}
      </div>

      {/* 當前選中 AI 的深度剖析面板 */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-8 shadow-2xl">
        {/* 上半部：核心指標與雷達指標長條圖 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{currentAI.avatar}</span>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold text-slate-100">{currentAI.name}</h2>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                    {currentAI.provider}
                  </span>
                </div>
                <p className="text-sm font-semibold text-cyan-400 mt-1">
                  {currentAI.badge}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed pt-2">
              <strong className="text-slate-200">終極結論：</strong> {currentAI.verdict}
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs space-y-1.5">
              <div className="text-slate-400 font-semibold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>架構本質剖析：</span>
              </div>
              <p className="text-slate-300 font-mono text-[11px] leading-relaxed">
                {currentAI.architectureSummary}
              </p>
            </div>
          </div>

          {/* 6 維能力量化條形圖 */}
          <div className="lg:col-span-7 space-y-3 bg-slate-900/40 p-5 rounded-2xl border border-slate-800/60">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>工程實戰 6 維度指標評分</span>
              <span className="text-cyan-400 font-mono">綜合得分：{currentAI.score} / 10</span>
            </h4>

            <div className="space-y-2.5">
              {[
                { label: '本機終端整合度 (Terminal)', val: currentAI.dimensions.terminalIntegration },
                { label: '多代理人協調能力 (Multi-Agent)', val: currentAI.dimensions.multiAgentOrchestration },
                { label: '自主閉環修復 (Self-Healing)', val: currentAI.dimensions.autonomousSelfHealing },
                { label: '規則持久化大腦 (Rules Memory)', val: currentAI.dimensions.rulePersistence },
                { label: '生態擴充性 (Skill & MCP)', val: currentAI.dimensions.toolEcosystem },
                { label: '零門檻上手度 (Ease of Use)', val: currentAI.dimensions.easeOfUse },
              ].map((dim) => (
                <div key={dim.label} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">{dim.label}</span>
                    <span className="font-mono font-bold text-slate-200">{dim.val.toFixed(1)} / 10</span>
                  </div>
                  <div className="h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800/60">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        dim.val >= 9 ? 'bg-gradient-to-r from-cyan-400 to-blue-500' :
                        dim.val >= 7 ? 'bg-gradient-to-r from-sky-500 to-indigo-500' :
                        'bg-slate-700'
                      }`}
                      style={{ width: `${dim.val * 10}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 下半部：優勢亮點與侷限分析 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
          {/* 優勢特色 */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>實戰核心亮點與優勢</span>
            </h4>
            <ul className="space-y-2">
              {currentAI.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed bg-slate-900/30 p-2.5 rounded-xl border border-slate-800/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 侷限性 */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              <span>實戰限制與邊界提醒</span>
            </h4>
            <ul className="space-y-2">
              {currentAI.limitations.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed bg-slate-900/30 p-2.5 rounded-xl border border-slate-800/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 橫向總決賽矩陣對照表 */}
      <div className="glass-panel rounded-3xl p-6 border border-slate-800 space-y-4">
        <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <Terminal className="w-5 h-5 text-cyan-400" />
          五大工具核心指標全覽矩陣
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                <th className="py-3 px-3">工具名稱</th>
                <th className="py-3 px-3">本機終端支援</th>
                <th className="py-3 px-3">多子代理協同</th>
                <th className="py-3 px-3">自動自癒閉環</th>
                <th className="py-3 px-3">規則客製持久化</th>
                <th className="py-3 px-3">首選適用情境</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {AI_COMPARISONS.map((ai) => (
                <tr key={ai.name} className="hover:bg-slate-900/50 transition-colors">
                  <td className="py-3 px-3 font-bold text-slate-100 flex items-center gap-2">
                    <span>{ai.avatar}</span>
                    <span>{ai.name}</span>
                  </td>
                  <td className="py-3 px-3 font-mono">{ai.dimensions.terminalIntegration >= 9 ? '⭐⭐⭐ 本機深度沙盒' : ai.dimensions.terminalIntegration >= 6 ? '⭐⭐ 雲端沙箱' : '❌ 無終端'}</td>
                  <td className="py-3 px-3">{ai.dimensions.multiAgentOrchestration >= 9 ? '✅ 原生並行派工' : '⚠️ 單一或有限'}</td>
                  <td className="py-3 px-3">{ai.dimensions.autonomousSelfHealing >= 9 ? '✅ 高度自檢修復' : '⚠️ 需人工引導'}</td>
                  <td className="py-3 px-3">{ai.dimensions.rulePersistence >= 9 ? '✅ AGENTS.md + Brain' : '⚠️ 簡易自訂'}</td>
                  <td className="py-3 px-3 text-cyan-300 font-medium">{ai.badge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
