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
    <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 font-mono shadow-2xl my-6">
      {/* 終端視窗標題列 */}
      <div className="bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/50" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/50" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50" />
          </div>
          <span className="text-xs text-slate-400 font-sans ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            lss@mint22: ~/antigravity2 (bash sandboxed)
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-slate-500 font-sans">
          <span>Linux Mint 22.3</span>
          <button
            onClick={() => handleExecute('clear')}
            className="text-slate-400 hover:text-slate-200 px-2 py-0.5 rounded bg-slate-800/80 hover:bg-slate-800"
          >
            Clear
          </button>
        </div>
      </div>

      {/* 演練任務提示卡（若有綁定當前任務） */}
      {currentTask && (
        <div className="bg-cyan-950/40 border-b border-cyan-800/50 p-4 font-sans flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-cyan-300 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                當前實戰任務：{currentTask.title}
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
            className="self-start sm:self-center flex-shrink-0 px-3 py-1.5 rounded-lg bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-200 border border-cyan-500/40 text-xs font-medium transition-all"
          >
            一鍵代填推薦指令
          </button>
        </div>
      )}

      {/* 終端訊息流區域 */}
      <div className="p-4 space-y-4 max-h-96 overflow-y-auto text-xs leading-relaxed select-text">
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-cyan-400 font-bold">lss@mint22:~$</span>
              <span className="text-slate-100 font-semibold">{item.command}</span>
              <span className="text-[10px] text-slate-600 ml-auto">{item.timestamp}</span>
            </div>
            <pre className="text-slate-300 whitespace-pre-wrap pl-4 border-l border-slate-800 font-mono text-[11.5px]">
              {item.output}
            </pre>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* 常用推薦快捷按鈕 */}
      <div className="bg-slate-900/40 px-4 py-2 border-t border-slate-800/60 flex items-center gap-2 overflow-x-auto text-[11px] font-sans">
        <span className="text-slate-500 flex-shrink-0">快捷常用：</span>
        <button
          onClick={() => handleQuickCommand('ls -la')}
          className="px-2 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 flex-shrink-0 font-mono"
        >
          ls -la
        </button>
        <button
          onClick={() => handleQuickCommand('cat AGENTS.md')}
          className="px-2 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 flex-shrink-0 font-mono"
        >
          cat AGENTS.md
        </button>
        <button
          onClick={() => handleQuickCommand('npm run build')}
          className="px-2 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 flex-shrink-0 font-mono"
        >
          npm run build
        </button>
        <button
          onClick={() => handleQuickCommand('firebase deploy')}
          className="px-2 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 flex-shrink-0 font-mono"
        >
          firebase deploy
        </button>
        <button
          onClick={() => handleQuickCommand('/goal 實作網站')}
          className="px-2 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-cyan-300 flex-shrink-0 font-mono"
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
        className="bg-slate-900 px-4 py-3 border-t border-slate-800 flex items-center gap-3"
      >
        <span className="text-cyan-400 font-bold select-none text-xs">
          lss@mint22:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="輸入指令（例如：ls -la、npm run build、help）並按 Enter 執行..."
          className="flex-1 bg-transparent text-slate-100 text-xs focus:outline-none placeholder:text-slate-600 font-mono"
        />
        <button
          type="submit"
          className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-sans font-semibold flex items-center gap-1 transition-colors"
        >
          <Send className="w-3 h-3" />
          <span>送出</span>
        </button>
      </form>
    </div>
  );
};
