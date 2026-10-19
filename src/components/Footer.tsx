import React from 'react';
import { Rocket, Shield, Heart, Terminal, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
            <Rocket className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-slate-200">
              Antigravity 2 互動教學學院 (Linux 實戰版)
            </div>
            <div className="text-[11px] text-slate-500">
              專為 Linux Mint 22.3 Cinnamon 64-bit 設計之高自主 Agentic AI 課程
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
          <span className="flex items-center gap-1 text-cyan-400">
            <Globe className="w-3.5 h-3.5" />
            部署於 Google Firebase Hosting
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1 text-slate-400">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            Terminal Sandbox 安全沙盒認證
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1 text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-amber-400" />
            符合 AGENTS.md 品質閉環規範
          </span>
        </div>

        <div className="text-slate-500 text-center md:text-right text-[11px]">
          遵循繁體中文規範，打造頂級自主開發互動體驗
        </div>
      </div>
    </footer>
  );
};
