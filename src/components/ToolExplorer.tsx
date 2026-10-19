import React, { useState } from 'react';
import { TOOLS_LIST } from '../data/toolsList';
import { ToolItem } from '../types';
import { 
  Search, 
  Copy, 
  Check, 
  Terminal, 
  Boxes, 
  Network, 
  Sparkles, 
  Info,
  SlidersHorizontal,
  X
} from 'lucide-react';

export const ToolExplorer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    '全部',
    '原生工具 (Built-in Tools)',
    '內建技能 (Skills)',
    'MCP / Sidecars',
    '斜線指令 (Slash Commands)'
  ];

  // 過濾工具清單
  const filteredTools = TOOLS_LIST.filter((tool) => {
    const matchesCategory =
      selectedCategory === '全部' || tool.category === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      tool.name.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query) ||
      tool.syntax.toLowerCase().includes(query) ||
      (tool.linuxTip && tool.linuxTip.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case '原生工具 (Built-in Tools)':
        return <Terminal className="w-3.5 h-3.5 text-cyan-400" />;
      case '內建技能 (Skills)':
        return <Boxes className="w-3.5 h-3.5 text-emerald-400" />;
      case 'MCP / Sidecars':
        return <Network className="w-3.5 h-3.5 text-purple-400" />;
      case '斜線指令 (Slash Commands)':
        return <Sparkles className="w-3.5 h-3.5 text-amber-400" />;
      default:
        return <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-8 space-y-6 sm:space-y-8 pb-28 md:pb-16">
      {/* 頁頭標題 */}
      <div className="text-center space-y-2 sm:space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-semibold">
          <Boxes className="w-3.5 h-3.5" />
          全能軍火庫百科
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
          Antigravity 2 內建工具、Skill 與 MCP 指南
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed px-2">
          查詢所有開箱即用的原生 Tools、官方內建 Skills、Model Context Protocol 協定與高效斜線指令。
        </p>
      </div>

      {/* 搜尋與分類選單 */}
      <div className="space-y-3 sm:space-y-4">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜尋工具名稱、語法（例：run_command, mcp, /goal）..."
            className="w-full pl-10 pr-10 py-2.5 sm:py-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500/80 transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* 分類標籤頁 (手機流暢橫向滾動) */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1.5 touch-scroll">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all border active:scale-95 ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-sm'
                  : 'bg-slate-900/60 hover:bg-slate-800/80 text-slate-400 border-slate-800'
              }`}
            >
              {getCategoryIcon(cat)}
              <span>{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 工具卡片網格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5">
        {filteredTools.map((tool) => (
          <div
            key={tool.id}
            className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-800/80 space-y-3 sm:space-y-4 hover:border-slate-700 transition-all group flex flex-col justify-between"
          >
            <div className="space-y-2.5">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 flex-shrink-0">
                    {getCategoryIcon(tool.category)}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-100 font-mono group-hover:text-cyan-300 transition-colors">
                    {tool.name}
                  </h3>
                </div>
                <span className="text-[9.5px] sm:text-[10px] px-2 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-800 flex-shrink-0">
                  {tool.category.split(' ')[0]}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {tool.description}
              </p>

              {/* 語法展示 */}
              <div className="space-y-1">
                <div className="text-[9.5px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  調用語法 / 宣告方式：
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs font-mono text-cyan-300 overflow-x-auto touch-scroll">
                  {tool.syntax}
                </div>
              </div>

              {/* Linux 實戰提點 */}
              {tool.linuxTip && (
                <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800 text-[11px] sm:text-[11.5px] text-slate-300">
                  <Info className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{tool.linuxTip}</span>
                </div>
              )}
            </div>

            {/* 範例與複製按鈕 */}
            <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between gap-2">
              <div className="text-[10.5px] sm:text-[11px] font-mono text-slate-400 truncate flex-1">
                <span className="text-slate-500 mr-1.5">例:</span>
                {tool.example}
              </div>
              <button
                onClick={() => handleCopy(tool.id, tool.example)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 active:scale-95 text-[11px] text-slate-300 hover:text-white transition-all border border-slate-700/60 flex-shrink-0"
              >
                {copiedId === tool.id ? (
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
          </div>
        ))}
      </div>

      {filteredTools.length === 0 && (
        <div className="text-center py-12 text-slate-500 text-xs sm:text-sm">
          找不到符合「{searchQuery}」的工具或技能項目。試試更換關鍵字！
        </div>
      )}
    </div>
  );
};
