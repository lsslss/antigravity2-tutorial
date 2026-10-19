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
  X,
  BookOpen
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
  onOpenChapterDrawer?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  progressPercent,
  completedCount,
  totalCount,
  onResetProgress,
  mobileMenuOpen,
  setMobileMenuOpen,
  onOpenChapterDrawer
}) => {
  return (
    <>
      {/* 頂部導航列 */}
      <header className="sticky top-0 z-40 glass-panel border-b border-slate-800 bg-slate-950/85 backdrop-blur-md safe-top">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo & 標題 */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div 
              onClick={() => setCurrentTab('lesson')}
              className="flex items-center gap-2 cursor-pointer group min-w-0"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform flex-shrink-0">
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-base sm:text-lg bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent truncate">
                    Antigravity 2 學院
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase font-semibold px-1.5 sm:px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/60 hidden xs:inline-block flex-shrink-0">
                    Linux
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-400 hidden sm:block truncate">
                  動手實戰型自主 AI Agent 互動指南
                </p>
              </div>
            </div>
          </div>

          {/* 桌面主要導覽分頁 */}
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

          {/* 右側：學習進度與操作 */}
          <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            {/* 手機版目錄快捷按鈕（當在課程頁面時特別方便） */}
            {currentTab === 'lesson' && onOpenChapterDrawer && (
              <button
                onClick={onOpenChapterDrawer}
                className="md:hidden flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-950/80 text-cyan-300 border border-cyan-800/80 text-xs font-semibold active:scale-95 transition-transform"
                title="開啟章節目錄"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>目錄</span>
              </button>
            )}

            {/* 進度條 */}
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1 text-[11px] sm:text-xs">
                <span className="text-slate-400 hidden xs:inline">進度</span>
                <span className="font-bold text-cyan-400 font-mono">{completedCount}/{totalCount}</span>
                <span className="text-slate-500 font-mono text-[10px]">({progressPercent}%)</span>
              </div>
              <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-slate-800 rounded-full overflow-hidden mt-0.5">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <button
              onClick={onResetProgress}
              title="重設學習進度"
              className="p-1.5 sm:p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-900 rounded-lg transition-colors border border-slate-800"
              aria-label="重設進度"
            >
              <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <a
              href="https://antigravity.google/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700/60"
            >
              <span>文檔</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>
      </header>

      {/* 手機專屬底部快捷導覽列 (Mobile Bottom Tab Bar) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 border-t border-slate-800/90 backdrop-blur-lg safe-bottom">
        <div className="grid grid-cols-4 h-14">
          <button
            onClick={() => setCurrentTab('lesson')}
            className={`flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition-colors ${
              currentTab === 'lesson'
                ? 'text-cyan-400 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Award className="w-5 h-5" />
            <span>課程 12 課</span>
          </button>
          
          <button
            onClick={() => setCurrentTab('tools')}
            className={`flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition-colors ${
              currentTab === 'tools'
                ? 'text-cyan-400 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Boxes className="w-5 h-5" />
            <span>工具百科</span>
          </button>

          <button
            onClick={() => setCurrentTab('comparison')}
            className={`flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition-colors ${
              currentTab === 'comparison'
                ? 'text-cyan-400 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-5 h-5" />
            <span>AI 大對決</span>
          </button>

          <button
            onClick={() => setCurrentTab('terminal')}
            className={`flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition-colors ${
              currentTab === 'terminal'
                ? 'text-cyan-400 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-5 h-5" />
            <span>終端沙盒</span>
          </button>
        </div>
      </nav>
    </>
  );
};
