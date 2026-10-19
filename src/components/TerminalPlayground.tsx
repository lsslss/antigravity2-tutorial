import React, { useState, useRef, useEffect } from 'react';
import { PracticeTask } from '../types';
import { Terminal, Send, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';

interface TerminalPlaygroundProps {
  currentTask?: PracticeTask;
  onCompleteTask?: () => void;
  isTaskCompleted?: boolean;
}

interface CommandLog {
  id: string;
  command: string;
  output: string;
  timestamp: string;
  isSuccess?: boolean;
}

export const TerminalPlayground: React.FC<TerminalPlaygroundProps> = ({
  currentTask,
  onCompleteTask,
  isTaskCompleted = false
}) => {
  const [inputVal, setInputVal] = useState<string>('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'uname -a',
      output: 'Linux mint22-cinnamon 6.8.0-45-generic #45-Ubuntu SMP PREEMPT_DYNAMIC x86_64 GNU/Linux (Linux Mint 22.3 Cinnamon)',
      timestamp: '00:40:12',
      isSuccess: true
    },
    {
      id: 'init-2',
      command: 'agy --version',
      output: 'Google Antigravity 2.0.4-linux-x64 (Agent Engine: Gemini 3.8 / Reactive Kernel v2)',
      timestamp: '00:40:15',
      isSuccess: true
    }
  ]);
  const [cmdHistoryIndex, setCmdHistoryIndex] = useState<number>(-1);
  const [pastCommands, setPastCommands] = useState<string[]>(['uname -a', 'agy --version']);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 自動捲動至終端底端
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // 處理鍵盤向上/向下歷史指令
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (pastCommands.length > 0) {
        const nextIndex = cmdHistoryIndex + 1 < pastCommands.length ? cmdHistoryIndex + 1 : cmdHistoryIndex;
        setCmdHistoryIndex(nextIndex);
        setInputVal(pastCommands[pastCommands.length - 1 - nextIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdHistoryIndex > 0) {
        const nextIndex = cmdHistoryIndex - 1;
        setCmdHistoryIndex(nextIndex);
        setInputVal(pastCommands[pastCommands.length - 1 - nextIndex] || '');
      } else if (cmdHistoryIndex === 0) {
        setCmdHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  // 執行指令
  const handleExecute = (rawCmd?: string) => {
    const cmd = (rawCmd !== undefined ? rawCmd : inputVal).trim();
    if (!cmd) return;

    // 清空目前輸入框
    setInputVal('');
    setPastCommands(prev => [...prev, cmd]);
    setCmdHistoryIndex(-1);

    const now = new Date().toLocaleTimeString('zh-TW', { hour12: false });
    const logId = Date.now().toString();

    // 處理特例指令 clear
    if (cmd.toLowerCase() === 'clear') {
      setHistory([]);
      return;
    }

    // 判斷是否滿足當前 Task 演練目標
    let isTaskMatch = false;
    let outputText = '';

    if (currentTask) {
      const isExpected = currentTask.expectedCommands.some(expected => 
        cmd.toLowerCase().includes(expected.toLowerCase()) || 
        expected.toLowerCase().includes(cmd.toLowerCase())
      );

      if (isExpected) {
        isTaskMatch = true;
        outputText = currentTask.mockOutput;
        if (onCompleteTask) {
          onCompleteTask();
        }
      }
    }

    // 若非特定 Task 匹配，則走通用模擬 Shell 響應
    if (!isTaskMatch) {
      if (cmd.startsWith('ls')) {
        outputText = `總用量 28
drwxrwxr-x  5 lss lss 4096 10月 11 00:45 .
drwxr-xr-x 11 lss lss 4096 10月 11 00:40 ..
-rw-r--r--  1 lss lss 2567 10月 11 00:33 AGENTS.md
-rw-r--r--  1 lss lss 2567 10月 11 00:32 GEMINI.md
-rw-rw-r--  1 lss lss  580 10月 11 00:45 package.json
-rw-rw-r--  1 lss lss  482 10月 11 00:45 tsconfig.json
-rw-rw-r--  1 lss lss  184 10月 11 00:45 vite.config.ts
drwxrwxr-x  4 lss lss 4096 10月 11 00:45 src`;
      } else if (cmd.startsWith('cat AGENTS') || cmd.startsWith('cat GEMINI')) {
        outputText = `# 互動教學網站專案規範與自主執行規則 (Workspace Rules)
- 環境：Linux Mint 22.3 Cinnamon 64-bit / 繁體中文
- 自主決策原則：高自主度推進，拒絕空殼元件
- 品質閉環：自動執行 npm run build 直到通過`;
      } else if (cmd.includes('npm run build') || cmd.includes('vite build')) {
        outputText = `> vite build
✓ 38 modules transformed.
dist/index.html   0.82 kB
dist/assets/index.js 182.40 kB
✓ built in 420ms [成功]`;
      } else if (cmd.includes('firebase deploy')) {
        outputText = `=== Deploying to 'lss-webfactory'...
i  hosting[antigravity2-tutorial]: beginning deploy...
✔  hosting[antigravity2-tutorial]: file upload complete
✔  Deploy complete!
Hosting URL: https://antigravity2-tutorial.web.app`;
      } else if (cmd.startsWith('/goal')) {
        outputText = `[Slash Command] 啟動長程全自主目標模式 (/goal)
Agent 即將執行自主探勘、編寫程式碼與多輪自癒修復，直到百分之百達成！`;
      } else if (cmd.startsWith('/plan')) {
        outputText = `[Slash Command] 產生執行計畫藍圖 (/plan)
1. 需求邊界審視
2. 檔案目錄建置
3. 互動功能實作
4. 品質閉環測試`;
      } else if (cmd === 'help') {
        outputText = `可用模擬指令：
- ls -la              : 查看工作區檔案清單
- cat AGENTS.md      : 檢視專案規範
- npm run build      : 執行前端生產打包
- firebase deploy    : 發布網站至 Firebase Hosting
- /goal, /plan       : 觸發斜線指令
- clear              : 清空終端畫面`;
      } else {
        outputText = `bash: ${cmd}: 指令已於 Linux Mint 沙盒中執行完畢 (回傳碼 0)。`;
      }
    }

    setHistory(prev => [
      ...prev,
      {
        id: logId,
        command: cmd,
        output: outputText,
        timestamp: now,
        isSuccess: isTaskMatch || !outputText.toLowerCase().includes('error')
      }
    ]);
  };

  const handleQuickCommand = (cmd: string) => {
    setInputVal(cmd);
    handleExecute(cmd);
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 font-mono shadow-2xl my-4 sm:my-6">
      {/* 終端視窗標題列 */}
      <div className="bg-slate-900/95 px-3 sm:px-4 py-2 sm:py-2.5 border-b border-slate-800 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 border border-rose-600/50" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 border border-amber-600/50" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50" />
          </div>
          <span className="text-[11px] sm:text-xs text-slate-400 font-sans ml-1 sm:ml-2 flex items-center gap-1.5 truncate">
            <Terminal className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
            <span className="truncate">lss@mint22: ~/antigravity2</span>
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-slate-500 font-sans flex-shrink-0">
          <span className="hidden sm:inline">Linux Mint 22.3</span>
          <button
            onClick={() => handleExecute('clear')}
            className="text-slate-400 hover:text-slate-200 px-2 py-0.5 rounded bg-slate-800/80 hover:bg-slate-800 active:scale-95 transition-transform"
          >
            Clear
          </button>
        </div>
      </div>

      {/* 演練任務提示卡（若有綁定當前任務） */}
      {currentTask && (
        <div className="bg-cyan-950/40 border-b border-cyan-800/50 p-3.5 sm:p-4 font-sans flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-cyan-300 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>實戰任務：{currentTask.title}</span>
              </span>
              {isTaskCompleted && (
                <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700 text-[10px] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> 已通關
                </span>
              )}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentTask.prompt}
            </p>
            <p className="text-[11px] text-cyan-400/80">
              💡 提示：{currentTask.hint}
            </p>
          </div>

          <button
            onClick={() => handleQuickCommand(currentTask.expectedCommands[0])}
            className="w-full sm:w-auto self-start sm:self-center flex-shrink-0 px-3.5 py-2 sm:py-1.5 rounded-lg bg-cyan-600/30 hover:bg-cyan-600/50 active:bg-cyan-600/60 text-cyan-200 border border-cyan-500/40 text-xs font-medium transition-all text-center"
          >
            一鍵代填推薦指令
          </button>
        </div>
      )}

      {/* 終端訊息流區域 */}
      <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 max-h-64 sm:max-h-96 overflow-y-auto text-xs leading-relaxed select-text touch-scroll">
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-1.5 sm:gap-2 text-slate-400 flex-wrap">
              <span className="text-cyan-400 font-bold text-[11px] sm:text-xs">lss@mint22:~$</span>
              <span className="text-slate-100 font-semibold break-all text-[11px] sm:text-xs">{item.command}</span>
              <span className="text-[9.5px] sm:text-[10px] text-slate-600 ml-auto">{item.timestamp}</span>
            </div>
            <pre className="text-slate-300 whitespace-pre-wrap pl-3 sm:pl-4 border-l border-slate-800 font-mono text-[11px] sm:text-[11.5px] overflow-x-auto">
              {item.output}
            </pre>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* 常用推薦快捷按鈕 (橫向流暢滾動) */}
      <div className="bg-slate-900/60 px-3 sm:px-4 py-2 border-t border-slate-800/60 flex items-center gap-1.5 sm:gap-2 overflow-x-auto text-[11px] font-sans touch-scroll">
        <span className="text-slate-500 flex-shrink-0 text-[10px] sm:text-[11px]">快捷：</span>
        <button
          onClick={() => handleQuickCommand('ls -la')}
          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-300 flex-shrink-0 font-mono text-[10px] sm:text-[11px]"
        >
          ls -la
        </button>
        <button
          onClick={() => handleQuickCommand('cat AGENTS.md')}
          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-300 flex-shrink-0 font-mono text-[10px] sm:text-[11px]"
        >
          cat AGENTS.md
        </button>
        <button
          onClick={() => handleQuickCommand('npm run build')}
          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-300 flex-shrink-0 font-mono text-[10px] sm:text-[11px]"
        >
          npm run build
        </button>
        <button
          onClick={() => handleQuickCommand('firebase deploy')}
          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-300 flex-shrink-0 font-mono text-[10px] sm:text-[11px]"
        >
          firebase deploy
        </button>
        <button
          onClick={() => handleQuickCommand('/goal 實作網站')}
          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-cyan-300 flex-shrink-0 font-mono text-[10px] sm:text-[11px]"
        >
          /goal
        </button>
      </div>

      {/* 指令輸入列 */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleExecute();
        }}
        className="bg-slate-900 px-3 sm:px-4 py-2.5 sm:py-3 border-t border-slate-800 flex items-center gap-2 sm:gap-3"
      >
        <span className="text-cyan-400 font-bold select-none text-[11px] sm:text-xs flex-shrink-0">
          $
        </span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="輸入指令（如 ls -la、npm run build）..."
          className="flex-1 bg-transparent text-slate-100 text-xs sm:text-xs focus:outline-none placeholder:text-slate-600 font-mono min-w-0"
        />
        <button
          type="submit"
          className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 text-white text-xs font-sans font-semibold flex items-center gap-1 transition-colors flex-shrink-0"
        >
          <Send className="w-3 h-3" />
          <span className="hidden xs:inline">執行</span>
        </button>
      </form>
    </div>
  );
};
