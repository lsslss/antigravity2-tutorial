import React from 'react';
import { Rocket, Shield, Terminal, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 pt-8 sm:pt-10 pb-24 md:pb-10 px-4 sm:px-6 lg:px-8 text-xs text-slate-400 safe-bottom">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white flex-shrink-0">
            <Rocket className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-slate-200 text-xs sm:text-sm">
              Antigravity 2 互動教學學院 (Linux 實戰版)
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-500">
              專為 Linux Mint 22.3 Cinnamon 64-bit 設計之高自主 Agentic AI 課程
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-[11px]">
          <span className="flex items-center gap-1 text-cyan-400">
            <Globe className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Firebase Hosting 發布</span>
          </span>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <span className="flex items-center gap-1 text-slate-400">
            <Shield className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span>Terminal Sandbox 安全認證</span>
          </span>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <span className="flex items-center gap-1 text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <span>AGENTS.md 品質自癒閉環</span>
          </span>
        </div>

        <div className="text-slate-500 text-center md:text-right text-[10px] sm:text-[11px]">
          遵循繁體中文規範，打造頂級自主開發互動體驗
        </div>
      </div>
    </footer>
  );
};
