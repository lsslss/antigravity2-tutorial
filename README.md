# Antigravity 2 互動教學學院 (Linux Mint 22.3 實戰版)

專為看過教學但尚未實際動手體驗的開發者打造之 **Antigravity 2 for Linux** 高自主度互動學習平台。深入解析 Google Antigravity 2 桌面架構、終端沙盒、大腦記憶、專案規則、內建技能（Skills）、Model Context Protocol（MCP）擴充、三大實戰範例與主流五大 AI 工具橫向深度評比。

- **線上體驗網址 (Firebase Hosting)**：[https://antigravity2-tutorial.web.app](https://antigravity2-tutorial.web.app)
- **相容環境**：Linux Mint 22.3 Cinnamon 64-bit / 現代 Linux 發行版
- **技術棧**：React 18 + TypeScript + Vite + Tailwind CSS + Lucide React + Firebase Hosting

---

## 🌟 專案核心特色與互動功能

1. **12 單元完整階梯式課綱**：
   - **第 1 課**：新手起步與 Antigravity 2 全貌導覽（極致深度導引，初學者零障礙上手）
   - **第 2 課**：規則系統 (Rules & Workflows)：`AGENTS.md`、`GEMINI.md`、全域 vs 專案覆蓋層級
   - **第 3 課**：記憶與上下文大腦 (Brain & Memory)：Context Window、`transcript.jsonl`、大腦目錄與 Reactive Wakeup
   - **第 4 課**：專案設定檔與客製化生態：`.gemini/` 目錄、`settings.json`、Plugins 與 Hooks
   - **第 5 課**：內建 Skill 技能庫全解析：`SKILL.md` 架構、`generative_ui`、`antigravity-guide`、`firebase`
   - **第 6 課**：MCP (Model Context Protocol) 與 Sidecar 擴充：標準協議、JSON-RPC、邊車守護行程
   - **第 7 課**：終端沙盒與建議工具庫：Terminal Sandbox 安全邊界、`BypassSandbox` 授權、核心十項工具
   - **第 8 課**：斜線指令 (Slash Commands) 與多 Agent 協同：`/goal`、`/plan`、`invoke_subagent` 子代理派工
   - **第 9 課**：實戰範例一：如何寫一個互動網站並部署（Vite + React + Tailwind + Firebase Hosting）
   - **第 10 課**：實戰範例二：如何製作現代簡報與互動視覺化（Mermaid、Marp、Generative UI）
   - **第 11 課**：實戰範例三：如何整理海量資料與自動化維護（日誌過濾、大規模重構、自癒循環）
   - **第 12 課**：主流 AI Agent 大對決與未來選型指引（Antigravity 2 vs Claude Code vs ChatGPT vs Open Code vs Pi Agent）

2. **Linux Mint 終端實戰演練區 (Terminal Playground)**：
   - 逼真模擬 Linux Mint 22.3 Bash 沙盒終端。
   - 具備指令歷程（Arrow Up / Down）、推薦快捷指令一鍵代填。
   - 支援各課專屬演練任務檢驗，輸入正確指令自動即時解鎖通關徽章！

3. **單元即時互動隨堂測驗 (Interactive Quiz)**：
   - 支援單選與多選題型。
   - 即時計算得分率、標記正誤並提供深度技術詳解。
   - 作答成績自動同步至瀏覽器 `localStorage`。

4. **互動工具庫與技能百科 (Tools Explorer)**：
   - 涵蓋 16+ 項原生工具、官方 Skills、MCP 伺服器與斜線指令。
   - 支援即時關鍵字搜尋、分類過濾、語法速查與範例一鍵複製。

5. **5 大主流 AI Agent 橫向決戰矩陣 (AI Comparison Matrix)**：
   - 多維度工程實戰評分（終端深度、多代理協調、自癒閉環、規則記憶、生態豐富、上手親和）。
   - 完整分析 Antigravity 2、Claude Code、ChatGPT、Open Code 與 Pi Agent 的架構差異、優勢與適用場景。

6. **全域學習進度持久化 (LocalStorage Persistence)**：
   - 關閉瀏覽器或重新整理頁面進度永不丟失。
   - 支援頂部一鍵重設或進度進階追蹤。

---

## 🚀 本機啟動與開發指令

### 1. 安裝相依套件
\`\`\`bash
npm install
\`\`\`

### 2. 啟動本機開發伺服器
\`\`\`bash
npm run dev
\`\`\`
預設將在 \`http://localhost:5173\` 開啟本機即時預覽。

### 3. 型別檢查與生產打包
\`\`\`bash
npm run build
\`\`\`
打包完成後檔案位於 \`dist/\` 目錄。

### 4. 部署至 Firebase Hosting
\`\`\`bash
firebase deploy --only hosting --project lss-webfactory
\`\`\`

---

## 📁 專案檔案結構導覽

\`\`\`
antigravity2教學/
├── AGENTS.md                  # 專案工作區自主規範文件 (繁體中文、品質閉環)
├── GEMINI.md                  # Antigravity 專案規則配置
├── firebase.json              # Firebase Hosting 配置 (多站點目標 antigravity2-tutorial)
├── .firebaserc                # Firebase 專案對應設定 (lss-webfactory)
├── package.json               # 專案相依定義與建置腳本
├── tsconfig.json              # TypeScript 編譯器選項
├── vite.config.ts             # Vite 打包配置
├── tailwind.config.js         # Tailwind CSS 主題與色票設定
├── index.html                 # 應用入口 HTML (載入 Google Fonts 與深色主題)
├── src/
│   ├── main.tsx               # React 根節點掛載
│   ├── App.tsx                # 主應用路由、全域狀態與 LocalStorage 存取
│   ├── index.css              # 全域樣式、毛玻璃特效 (Glassmorphism) 與自訂滾動條
│   ├── types/
│   │   └── index.ts           # 課程、測驗、演練、工具與評比之 TypeScript 型別
│   ├── data/
│   │   ├── curriculum.ts      # 完整 12 單元詳細課程內文、題目與演練資料
│   │   ├── toolsList.ts       # 原生工具、Skills、MCP 與斜線指令目錄
│   │   └── comparisons.ts     # 5 大主流 AI 工具橫向評比矩陣數據
│   └── components/
│       ├── Navbar.tsx         # 頂部導航列 (進度追蹤、切換分頁、重設進度)
│       ├── Sidebar.tsx        # 課程目錄側邊欄 (章節列表、完成勾選、得分標籤)
│       ├── LessonView.tsx     # 課程內文、程式碼區塊、提示卡與上下課導航
│       ├── InteractiveQuiz.tsx # 隨堂互動測驗 (即時評分、解析與重測)
│       ├── TerminalPlayground.tsx # Linux Mint 22.3 模擬終端演練區
│       ├── ToolExplorer.tsx   # 工具與 Skill 百科搜尋過濾器
│       ├── ComparisonMatrix.tsx # 5 大 AI 工具深度評比與指標分析面板
│       └── Footer.tsx         # 頁尾資訊與規範聲明
└── dist/                      # 生產建置打包靜態檔案 (供 Firebase Hosting 發布)
\`\`\`

---

## 📜 授權與宣告
本專案依循繁體中文與 Linux Mint 22.3 開發者友善實踐建置。
歡迎自由研讀、實踐與客製化專屬的 Agentic 流程！
