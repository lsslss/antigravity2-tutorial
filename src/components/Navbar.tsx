import React from 'react';
import { 
  Rocket, 
  Terminal, 
  Layers, 
  Boxes, 
  Award, 
  RotateCcw, 
  ExternalLink,
  Menu,
  X
} from 'lucide-react';

interface NavbarProps {
  currentTab: 'lesson' | 'tools' | 'comparison' | 'terminal';
  setCurrentTab: (tab: 'lesson' | 'tools' | 'comparison' | 'terminal') => void;
  progressPercent: number;
  completedCount: number;
  totalCount: number;
  onResetProgress: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  progressPercent,
  completedCount,
  totalCount,
  onResetProgress,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo & 標題 */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
            aria-label="開啟選單"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          
          <div 
            onClick={() => setCurrentTab('lesson')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                  Antigravity 2 學院
                </span>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60 hidden sm:inline-block">
                  Linux Mint 22.3
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                動手實戰型自主 AI Agent 互動指南
              </p>
            </div>
          </div>
        </div>

        {/* 主要導覽分頁 */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setCurrentTab('lesson')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
              currentTab === 'lesson'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Award className="w-4 h-4" />
            課程指南 (12單元)
          </button>
          <button
            onClick={() => setCurrentTab('tools')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
              currentTab === 'tools'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Boxes className="w-4 h-4" />
            工具與 Skill 百科
          </button>
          <button
            onClick={() => setCurrentTab('comparison')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
              currentTab === 'comparison'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Layers className="w-4 h-4" />
            5大 AI 評比對決
          </button>
          <button
            onClick={() => setCurrentTab('terminal')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
              currentTab === 'terminal'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Terminal className="w-4 h-4" />
            終端演練沙盒
          </button>
        </nav>

        {/* 右側：學習進度與重設 */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex flex-col items-end">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">通關進度</span>
              <span className="text-xs font-bold text-cyan-400">{completedCount}/{totalCount} ({progressPercent}%)</span>
            </div>
            <div className="w-28 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <button
            onClick={onResetProgress}
            title="重設所有已儲存的學習進度"
            className="p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-900 rounded-lg transition-colors border border-slate-800"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <a
            href="https://antigravity.google/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700/60"
          >
            <span>官方文檔</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>
      </div>

      {/* 手機版導覽選單 */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-3 space-y-2">
          <button
            onClick={() => { setCurrentTab('lesson'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-left ${
              currentTab === 'lesson' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-300'
            }`}
          >
            <Award className="w-4 h-4" />
            12 單元課程指南
          </button>
          <button
            onClick={() => { setCurrentTab('tools'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-left ${
              currentTab === 'tools' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-300'
            }`}
          >
            <Boxes className="w-4 h-4" />
            工具與 Skill 百科
          </button>
          <button
            onClick={() => { setCurrentTab('comparison'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-left ${
              currentTab === 'comparison' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-300'
            }`}
          >
            <Layers className="w-4 h-4" />
            5 大 AI 評比對決
          </button>
          <button
            onClick={() => { setCurrentTab('terminal'); setMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-left ${
              currentTab === 'terminal' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-300'
            }`}
          >
            <Terminal className="w-4 h-4" />
            終端演練沙盒
          </button>
          <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
            <span>進度：{completedCount}/{totalCount} ({progressPercent}%)</span>
            <button 
              onClick={onResetProgress}
              className="text-amber-400 hover:underline flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> 重設進度
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
