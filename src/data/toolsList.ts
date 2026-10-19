import { ToolItem } from '../types';

export const TOOLS_LIST: ToolItem[] = [
  // 原生工具
  {
    id: "run_command",
    name: "run_command",
    category: "原生工具 (Built-in Tools)",
    description: "在 Linux 系統終端執行 Bash 指令。具備自動超時控制、長任務非同步後台化（manage_task）以及持久化終端模式。",
    syntax: "run_command(CommandLine, Cwd, WaitMsBeforeAsync, BypassSandbox, ...)",
    linuxTip: "在 Linux Mint 22.3 下預設以 sandbox 模式執行本機指令；若需連網或安裝套件請開啟 BypassSandbox 獲得授權。",
    example: "run_command(CommandLine='npm run build', Cwd='/home/lss/antigravity2教學', WaitMsBeforeAsync=5000)"
  },
  {
    id: "write_to_file",
    name: "write_to_file",
    category: "原生工具 (Built-in Tools)",
    description: "建立新檔案或全面覆寫現有檔案，支援建立 Artifacts（使用者可視化產出物）與附加寫入模式（Append）。",
    syntax: "write_to_file(TargetFile, CodeContent, Description, Overwrite, ArtifactMetadata?)",
    linuxTip: "寫入路徑必須為絕對路徑，系統會自動在 Linux 檔案系統中遞迴建立不存在的父目錄。",
    example: "write_to_file(TargetFile='/home/lss/project/App.tsx', CodeContent='...', Overwrite=true)"
  },
  {
    id: "replace_file_content",
    name: "replace_file_content",
    category: "原生工具 (Built-in Tools)",
    description: "精準置換檔案中的特定程式碼區塊。具備行號範圍限制與安全比對機制，避免全檔覆蓋引發的未預期副作用。",
    syntax: "replace_file_content(TargetFile, StartLine, EndLine, TargetContent, ReplacementContent, Instruction, ...)",
    linuxTip: "置換時須包含完全相符的空白與縮排，是 Linux 專案日常重構最精準的利器。",
    example: "replace_file_content(TargetFile='/path/to/main.ts', StartLine=10, EndLine=15, TargetContent='const port = 3000;', ReplacementContent='const port = 8080;')"
  },
  {
    id: "view_file",
    name: "view_file",
    category: "原生工具 (Built-in Tools)",
    description: "檢視本地檔案內容，支援文字檔切片（StartLine ~ EndLine）以及圖片、PDF 等二進位預覽，具備內存緩衝保護。",
    syntax: "view_file(AbsolutePath, StartLine?, EndLine?, ContentOffset?)",
    linuxTip: "單次讀取上限 800 行或 45KB，避免單次傾倒巨大檔案塞滿上下文大腦。",
    example: "view_file(AbsolutePath='/home/lss/antigravity2教學/AGENTS.md', StartLine=1, EndLine=60)"
  },
  {
    id: "manage_task",
    name: "manage_task",
    category: "原生工具 (Built-in Tools)",
    description: "管理長時間執行的背景任務（如 dev server、npm install、長期建置）。支援 list、kill、status、send_input。",
    syntax: "manage_task(Action, TaskId?, Input?)",
    linuxTip: "搭配系統 Reactive Wakeup 機制，背景任務完成時會自動喚醒 Agent，無需在迴圈中無謂 polling。",
    example: "manage_task(Action='status', TaskId='c70ad246.../task-16')"
  },
  {
    id: "schedule",
    name: "schedule",
    category: "原生工具 (Built-in Tools)",
    description: "設定單次計時器（DurationSeconds）或定時循環 Cron 任務（CronExpression），支援條件中斷與常駐 Daemon 模式。",
    syntax: "schedule(Prompt, DurationSeconds?, CronExpression?, TimerCondition?, IsDaemon?)",
    linuxTip: "禁止在背景用 sleep 指令佔用資源，一律使用 schedule 進行精確排程喚醒。",
    example: "schedule(Prompt='檢查自動化部署狀態', DurationSeconds=300, TimerCondition='any')"
  },
  {
    id: "invoke_subagent",
    name: "invoke_subagent",
    category: "原生工具 (Built-in Tools)",
    description: "分發獨立子代理人（Subagents）並行執行任務，支援自訂 Prompt、專屬 Workspace 模式（inherit、branch 或 share）。",
    syntax: "invoke_subagent(Subagents: [{TypeName, Role, Prompt, Model, Workspace}])",
    linuxTip: "適合將繁瑣的程式庫研讀、安全性審查或獨立模組重構平行交由 research 或 self 子代理處理。",
    example: "invoke_subagent(Subagents=[{TypeName: 'research', Role: '文檔搜尋員', Prompt: '查詢 Firebase API 最新規範'}])"
  },
  {
    id: "define_subagent",
    name: "define_subagent",
    category: "原生工具 (Built-in Tools)",
    description: "動態定義具備專屬系統提示詞（System Prompt）與專屬工具權限的新型態子代理人。",
    syntax: "define_subagent(name, description, system_prompt, enable_write_tools, ...)",
    linuxTip: "可在運行期打造專門負責「安全審計員」或「測試自動化特工」的微型專案助手。",
    example: "define_subagent(name='sql_expert', description='SQL 優化專家', system_prompt='...')"
  },
  {
    id: "ask_question",
    name: "ask_question",
    category: "原生工具 (Built-in Tools)",
    description: "當遇到關鍵設計分歧、架構決策或需使用者授權的方向時，彈出互動式多選題模態對話方塊向使用者詢問。",
    syntax: "ask_question(questions: [{question, options, is_multi_select}])",
    linuxTip: "日常小事依循自主推進原則自行決策，僅在重大架構選型或不可逆操作時使用。",
    example: "ask_question(questions=[{question: '請選擇部署環境', options: ['(Recommended) Firebase Hosting', 'Vercel', 'GitHub Pages']}])"
  },
  {
    id: "generate_image",
    name: "generate_image",
    category: "原生工具 (Built-in Tools)",
    description: "調用多模態生成引擎，依據文字提示詞或參考圖產生 UI 設計稿、視覺素材與圖示。",
    syntax: "generate_image(Prompt, ImageName, AspectRatio?, ImagePaths?)",
    linuxTip: "產生的圖像直接儲存於 Artifact 目錄，供互動介面展示與後續引用。",
    example: "generate_image(Prompt='A futuristic Linux terminal cyberpunk UI', ImageName='terminal_hero', AspectRatio='16:9')"
  },

  // 內建技能
  {
    id: "antigravity-guide",
    name: "antigravity-guide",
    category: "內建技能 (Skills)",
    description: "Antigravity 官方權威指南與站點地圖。包含 CLI 指令、IDE 快捷鍵、Electron 桌面介面與 Python SDK 核心知識庫。",
    syntax: "自動於詢問 AGY、Antigravity 2.0 或 Linux 安裝版時啟動",
    linuxTip: "內嵌離線參考文檔（references/app.md、cli.md、sdk.md），斷網環境亦可即時查閱精準手冊。",
    example: "view_file(AbsolutePath='/home/lss/.gemini/antigravity/builtin/skills/antigravity_guide/SKILL.md')"
  },
  {
    id: "agy-customizations",
    name: "agy-customizations",
    category: "內建技能 (Skills)",
    description: "深入剖析 Antigravity 客製化生態：載入優先級別（Global vs Project）、Skills 宣告、Rules 定義、MCP 整合與 Hooks 鉤子。",
    syntax: "引導擴充專屬能力與管理外掛程式",
    linuxTip: "了解 ~/.gemini/ 與工作區根目錄的載入順序，打造專屬團隊標準實踐。",
    example: "參閱 /home/lss/.gemini/antigravity/builtin/skills/agy-customizations/SKILL.md"
  },
  {
    id: "generative_ui",
    name: "generative_ui",
    category: "內建技能 (Skills)",
    description: "即時生成豐富互動的 HTML/SVG/React 小工具、圖表、架構走勢圖與演練模擬器，支援在聊天視窗直接算繪。",
    syntax: "輸出包含互動邏輯與現代視覺效果的獨立 UI 元件",
    linuxTip: "教學、數據可視化或即時控制台原型的終極視覺化手段。",
    example: "運用 Tailwind 與現代 JS 繪製具備即時互動狀態的進度看板或儀表板"
  },
  {
    id: "firebase-hosting-basics",
    name: "firebase-hosting-basics",
    category: "內建技能 (Skills)",
    description: "Google Firebase Hosting 專業部署與配置指引。涵蓋 firebase.json、多站點目標（multisites）、快取與 CDN 最佳實踐。",
    syntax: "firebase deploy --only hosting[:target]",
    linuxTip: "配合 bypass sandbox 權限，從本地專案一鍵編譯並發布至全域邊緣節點（web.app 網域）。",
    example: "firebase hosting:sites:create antigravity2-tutorial --project lss-webfactory"
  },
  {
    id: "chrome-devtools",
    name: "chrome-devtools",
    category: "內建技能 (Skills)",
    description: "整合 Chrome DevTools MCP，實現瀏覽器自動化測試、DOM 節點分析、網路請求攔截與 Core Web Vitals (LCP/CLS) 調優。",
    syntax: "透過 MCP 橋接瀏覽器底層協議 (CDP)",
    linuxTip: "可在 Linux 無頭（Headless）環境下直接進行 E2E 網頁端功能性驗證。",
    example: "chrome-devtools 檢查載入效能與無障礙可存取性 (A11y)"
  },
  {
    id: "modern-web-guidance",
    name: "modern-web-guidance",
    category: "內建技能 (Skills)",
    description: "現代 Web 前端開發最佳實踐庫。包含 CSS 最新特徵（:has()、容器查詢、View Transitions）、TypeScript 與 React 模式。",
    syntax: "前端開發前的必備指引手冊",
    linuxTip: "確保生成的 UI 遵循現代響應式標準（RWD）與流暢動畫規範。",
    example: "使用現代語法與 Tailwind CSS 建立兼具美觀與效能的 SPA"
  },

  // MCP 與擴充
  {
    id: "mcp-filesystem",
    name: "Filesystem MCP",
    category: "MCP / Sidecars",
    description: "Model Context Protocol 標準檔案系統伺服器，提供結構化檔案瀏覽、安全權限讀寫與目錄遍歷能力。",
    syntax: "配置於 .gemini/settings.json -> mcpServers.filesystem",
    linuxTip: "可精確限制 Agent 僅能存取特定的沙箱資料夾，防止誤觸系統敏感區域（如 /etc）。",
    example: "{ \"command\": \"npx\", \"args\": [\"-y\", \"@modelcontextprotocol/server-filesystem\", \"/path\"] }"
  },
  {
    id: "mcp-devtools",
    name: "Chrome DevTools MCP",
    category: "MCP / Sidecars",
    description: "透過 MCP 協議將瀏覽器內部狀態直接暴露給 Agent 大腦，包含 Console 日誌、網路請求、DOM 樹與效能指標。",
    syntax: "透過外掛程式插件目錄自動掛載",
    linuxTip: "自動協助偵錯 SPA 單頁應用的執行期 JavaScript 例外與非預期重繪。",
    example: "調用 devtools MCP 執行頁面截圖與按鈕自動點擊測試"
  },
  {
    id: "mcp-sidecar",
    name: "Sidecar 容器代理機制",
    category: "MCP / Sidecars",
    description: "Antigravity 支援與獨立常駐行程（Sidecar Process）協同，進行背景長連線（WebSocket、監控守護程式、本地向量資料庫）。",
    syntax: "在背景常駐並透過 IPC 與 Agent 即時同步狀態",
    linuxTip: "極適合在 Linux 下監控專案目錄變動或維護本機端快取索引。",
    example: "啟動本地後端伺服器並即時監聽 3000 連接埠的心跳狀態"
  },

  // 斜線指令
  {
    id: "slash-goal",
    name: "/goal",
    category: "斜線指令 (Slash Commands)",
    description: "啟動超長任務全自主模式。Agent 將進行深度多輪推理、持續自我驗證與修復，直到完全達成目標為止不中斷。",
    syntax: "/goal <目標描述>",
    linuxTip: "適合過夜執行、大型專案從零到一建立、大規模代碼庫重構或端到端自動化發布。",
    example: "/goal 做一個現代化的全功能互動教學網站並部署在 Firebase"
  },
  {
    id: "slash-plan",
    name: "/plan",
    category: "斜線指令 (Slash Commands)",
    description: "在實際寫入任何程式碼前，強制 Agent 進行結構化步驟規劃，並產出清晰的任務清單（Artifact Plan）。",
    syntax: "/plan <任務需求>",
    linuxTip: "架構複雜時的最佳首發指令，可預先理清相依性與驗證節點。",
    example: "/plan 規劃升級既有系統至微前端架構的執行方案"
  },
  {
    id: "slash-schedule",
    name: "/schedule",
    category: "斜線指令 (Slash Commands)",
    description: "以自然語言對話快速註冊單次提醒或定時 Cron 週期任務。",
    syntax: "/schedule <排程條件與提示內容>",
    linuxTip: "例如設定每小時檢查伺服器健康度，或在 20 分鐘後提醒備份資料庫。",
    example: "/schedule 30分鐘後檢查 npm build 與測試覆蓋率"
  },
  {
    id: "slash-boost",
    name: "/boost",
    category: "斜線指令 (Slash Commands)",
    description: "啟動高階思考加強模式。結合多視角批判審查、深度架構推演與更嚴密的代碼驗證規範。",
    syntax: "/boost <複雜演算法或高難度任務>",
    linuxTip: "適合遇到頑固的並行競態條件（Race condition）或複雜記憶體洩漏時召喚。",
    example: "/boost 分析並修復在高並發情境下的死鎖問題"
  }
];
