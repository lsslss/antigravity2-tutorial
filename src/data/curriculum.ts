import { Lesson } from '../types';

export const CURRICULUM_DATA: Lesson[] = [
  // 第 1 課
  {
    id: 1,
    title: "第 1 課：新手起步與 Antigravity 2 全貌導覽",
    subtitle: "從零認識 Linux Mint 22.3 下的 Antigravity 2 桌面架構與運作哲學",
    category: "基礎與架構",
    estimatedMinutes: 20,
    tags: ["新手必讀", "Linux Mint 22.3", "UI介面導覽", "工作區概念"],
    icon: "Rocket",
    summary: "專為「看過教學但從未實際動手」的開發者設計。本課將帶你親歷 Linux Mint 22.3 環境中 Antigravity 2.0 的整體介面配置，理解聊天畫布（Chat Canvas）、左側導航、輔助工作面板（Auxiliary Pane）與終端沙盒的基本工作原理，並完成第一次真正受控的對話互動。",
    objectives: [
      "理解 Antigravity 2 在 Linux Mint 22.3 Cinnamon 環境下的架構地位",
      "熟悉四大核心介面區塊：左側工作台、對話畫布、輔助產出物（Artifacts）視窗與終端面板",
      "明白 Antigravity「Agentic AI（代理型 AI）」與傳統「純文字問答聊天機器人」的根本差異",
      "掌握初次啟動對話的黃金法則：精確需求描寫、明確範圍與自主推進信任"
    ],
    sections: [
      {
        id: "sec-1-1",
        title: "1. 什麼是 Antigravity 2？它如何改變 Linux 開發者？",
        content: `歡迎來到 Antigravity 2 的實戰殿堂！如果你過去只用過網頁版的 ChatGPT 複製貼上程式碼，或者看過別人談論 AI Agent 卻不知從何下刀，那麼請先建立一個關鍵認知：

**「Antigravity 不是只會背書的聊天視窗，而是一個擁有本機 Linux Shell 操作權、檔案系統讀寫權、多代理分工大腦與自癒能力的資深工程夥伴。」**

在你的 **Linux Mint 22.3 Cinnamon 64-bit** 系統中，Antigravity 2 是以現代 Electron 應用程式型態運作，內部透過嚴謹的 IPC（行程間通訊）連線到後端的自主代理核心（Agent Daemon）。它能直接在你授權的工作區（如 \`/home/lss/...\`）內檢視專案、搜尋代碼、建立 React 應用、執行編譯指令（\`npm run build\`），甚至在發現錯誤時自動讀取錯誤日誌並修復程式碼！`,
        callout: {
          type: "tip",
          text: "在 Linux Mint 中，Antigravity 能完美調用系統既有的 Node.js、Git、Python 以及各類 CLI 工具，無需將程式碼上傳到陌生第三方雲端伺服器。"
        }
      },
      {
        id: "sec-1-2",
        title: "2. 介面四大板塊快速巡禮",
        content: `打開 Antigravity 2 後，介面主要由四大區域構成：

1. **左側側邊欄 (Sidebar Navigation)**：
   - **New Conversation**：開啟新的獨立會話（Session）。每個會話擁有獨立的記憶與上下文。
   - **Projects / Workspaces**：管理當前開啟的資料夾目錄（如 \`/home/lss/antigravity2教學\`）。
   - **Scheduled Tasks**：監控背景排程（Cron）與延遲提醒任務。
   - **Skills & MCP**：檢視目前啟用的技能庫與擴充協議伺服器。
   - **Settings**：調整模型（Gemini Flash / Pro / Next）、沙盒安全性與權限授權原則。

2. **中央對話畫布 (Chat Canvas)**：
   - 這是你與 Agent 協同的核心工作台。
   - 支援輸入 \`/\` 呼叫**斜線指令**（如 \`/goal\`、\`/plan\`、\`/schedule\`）。
   - 支援輸入 \`@\` 附加上下文（檔案、資料夾、過往對話、終端連線）。
   - 支援拖曳圖片、架構圖或螢幕截圖直接進行多模態診斷。

3. **右側輔助工作面板 (Auxiliary Pane)**：
   - **Artifacts（產出物）**：Agent 生成的獨立 Markdown 報告、互動 UI 原型或專案架構圖。
   - **Subagents（子代理）**：顯示當前背景並行派工的子代理人狀態（如 research、author）。
   - **Background Tasks（背景任務）**：顯示後台正在運行的 npm install、編譯或長行程。
   - **Terminals & Files Changed**：檢視實際更動的檔案 Diff 與終端日誌。

4. **底部安全授權條 (Permission Bar)**：
   - 當 Agent 需要連網或執行超出沙盒預設權限的操作時，會在此出現清晰的授權確認按鈕，保障 Linux 系統的絕對安全。`,
        codeSnippet: {
          language: "bash",
          caption: "在 Linux Mint 終端確認當前工作區狀態的標準手法",
          code: `# 查看當前工作區目錄與系統環境
pwd
uname -a
# 檢查 Node.js 與 npm 是否就緒
node -v
npm -v`
        }
      },
      {
        id: "sec-1-3",
        title: "3. 傳統 AI vs Antigravity 2：新手思維模式轉換",
        content: `身為剛開始動手的新手，最常見的迷思是「把 AI 當作 Google 搜尋引擎」，只問零散的問題（例如：請給我一段 Vite 按鈕代碼）。

在 Antigravity 2 中，你的思維應該轉變為**「技術總監與高級工程師的結對合作（Pair Programming）」**：
- **清楚說明最終目標**：不是「教我寫 HTML」，而是「請在當前目錄建立一個 Vite + React + Tailwind 互動教學網站，並部署到 Firebase Hosting」。
- **充分授權與自主推進**：透過專案規則（AGENTS.md）賦予 Agent 自主決策權，讓它自己切分元件、編譯測試、修復警告，而不是每寫一個 CSS 樣式就回頭問你意見。
- **依賴品質閉環（Self-Healing Loop）**：Antigravity 會在完成工作前主動執行 \`npm run build\`，若有 TypeScript 報錯，它會自己看終端輸出並修正，直到完全通過才向你交付！`,
        callout: {
          type: "important",
          text: "給新手的第一道黃金法則：不要害怕讓 Agent 寫入檔案或跑終端。Antigravity 的所有檔案更動都有版本軌跡，且在沙盒機制保護下，絕不會破壞工作區外的系統檔案。"
        }
      }
    ],
    quiz: [
      {
        id: "q-1-1",
        question: "在 Linux Mint 22.3 環境下，Antigravity 2 與一般純網頁版 ChatGPT 的最關鍵差異是什麼？",
        options: [
          "Antigravity 2 只能回答數學問題，無法編程",
          "Antigravity 2 具備本機 Linux Shell 操作、專案檔案讀寫與編譯自動自癒能力",
          "Antigravity 2 無法在 Linux 上運行，必須透過虛擬機",
          "Antigravity 2 只能使用英文對話"
        ],
        correctAnswers: [1],
        explanation: "Antigravity 2 是 Agentic AI 系統，能透過 run_command、write_to_file 等工具直接在本機工作區操作命令、建置程式碼與自動自我修復，並非僅停留在瀏覽器文字層次。"
      },
      {
        id: "q-1-2",
        question: "在 Antigravity 2 的中央對話畫布（Chat Canvas）中，按下哪一個按鍵可以喚出檔案、規則與工具的上下文引用選單？",
        options: [
          "#",
          "@",
          "/",
          "$"
        ],
        correctAnswers: [1],
        explanation: "在對話框輸入「@」會彈出提及（Mention）選單，可快速引用工作區檔案、資料夾、規則（Rules）與 MCP 工具；輸入「/」則是用於呼叫斜線指令（Slash Commands）。"
      },
      {
        id: "q-1-3",
        question: "新手使用 Antigravity 2 時，哪種提問心態最能發揮 Agent 的自主實力？",
        options: [
          "每寫一行程式碼就中斷詢問，手動複製貼上所有檔案",
          "要求 Agent 絕不要執行任何指令，只用紙筆模擬",
          "定義明確目標與專案規則，讓 Agent 自主編譯、測試驗證與閉環修復",
          "把所有密碼與金鑰直接明文發送給社群"
        ],
        correctAnswers: [2],
        explanation: "Antigravity 2 具備完整的自主執行循環（Autonomous Loop），透過定義清晰的規則（AGENTS.md）與明確的目標，Agent 能自動完成建置並自我驗證交付。"
      }
    ],
    practice: {
      id: "p-1",
      title: "初次動手：檢查 Linux Mint 工作區與專案規則",
      prompt: "在下方的虛擬 Linux 終端中，輸入指令查看當前工作區下的檔案清單，確認專案中是否存在 AGENTS.md 規則檔。",
      hint: "試著輸入「ls -la」或「ls -l」指令查看目錄內容。",
      expectedCommands: ["ls -la", "ls -l", "ls", "dir"],
      mockOutput: `總用量 16
drwxrwxr-x  3 lss lss 4096 10月 11 00:45 .
drwxr-xr-x 11 lss lss 4096 10月 11 00:40 ..
-rw-r--r--  1 lss lss 2567 10月 11 00:33 AGENTS.md
-rw-r--r--  1 lss lss 2567 10月 11 00:32 GEMINI.md
-rw-rw-r--  1 lss lss  580 10月 11 00:45 package.json
drwxrwxr-x  4 lss lss 4096 10月 11 00:45 src
[驗證成功] 找到了 AGENTS.md 與 GEMINI.md，專案規則已經生效！`,
      explanation: "太棒了！透過確認工作區檔案，你能清楚看到 Antigravity 2 在此目錄下的規則設定與專案結構。下一步我們就將深入探討這兩個關鍵規則檔案如何約束 Agent！"
    }
  },

  // 第 2 課
  {
    id: 2,
    title: "第 2 課：規則系統 (Rules & Workflows)",
    subtitle: "掌握 AGENTS.md、GEMINI.md 與優先層級，打造百分之百聽話的專屬 Agent",
    category: "規則與大腦",
    estimatedMinutes: 25,
    tags: ["AGENTS.md", "GEMINI.md", "全域規則", "專案規則", "無痛推進"],
    icon: "ShieldAlert",
    summary: "為什麼別人的 AI 總是亂改不相干的程式碼，而你的 Antigravity 卻能嚴謹遵守團隊風格？秘密就在於「規則階層系統」。本課深入解析 GEMINI.md 與 AGENTS.md 的加載順序、全域 vs 專案覆蓋機制，以及如何撰寫高效的「無痛推進」自主規則。",
    objectives: [
      "弄清全域規則（User Global Rules）與工作區規則（Workspace Rules）的優先級",
      "掌握 AGENTS.md 與 GEMINI.md 的命名約定與作用範圍",
      "學會撰寫高品質規則：語言約定、自主決策邊界、安全自癒迴圈（Self-Healing Loop）",
      "避免常見反模式：模糊指令、相互矛盾的規則以及過度限制 Agent 的手腳"
    ],
    sections: [
      {
        id: "sec-2-1",
        title: "1. 規則階層架構：誰說了算？",
        content: `在 Antigravity 2 中，所有發送給模型的大腦推理請求，都會預先注入（Inject）一組系統級別的規則提示詞（System Prompts）。這些規則享有**最高優先級（Highest Precedence）**，凌駕於一般的對話內容之上。

規則的載入遵循嚴密的層級鏈：
1. **全域使用者規則 (User Global Rules)**：通常定義在個人設定檔或應用程式層級（例如：強制使用繁體中文、指定作業系統為 Linux Mint 22.3）。
2. **工作區專案規則 (Workspace Rules)**：存放於專案根目錄的 \`AGENTS.md\` 或 \`GEMINI.md\`。
3. **單元對話暫時約束**：使用者在當前會話中明確提出的即時要求。

當發生衝突時，**工作區特定的專案規則會精準覆寫全域規則**，讓你能為前端專案指定 TypeScript 規範，同時為後端專案指定 Python PEP8 規範。`,
        callout: {
          type: "note",
          text: "Antigravity 2 相容 AGENTS.md 與 GEMINI.md。兩者皆位於專案根目錄，推薦統一使用 AGENTS.md 作為團隊共識文件。"
        }
      },
      {
        id: "sec-2-2",
        title: "2. 打造高自主推進的 AGENTS.md 實戰範本",
        content: `一個平庸的規則只會寫「請寫好看的程式碼」；而一個專業的 AGENTS.md 能夠讓 Agent 像自動駕駛一樣穩定前進。以下是經過實踐檢驗的黃金模板：`,
        codeSnippet: {
          language: "markdown",
          caption: "專業級 AGENTS.md 規則設計典範",
          code: `# 專案自主開發規範 (AGENTS.md)

## 1. 語系與系統環境
- 作業系統：Linux Mint 22.3 Cinnamon 64-bit。
- 輸出語系：一律使用繁體中文（Traditional Chinese）。

## 2. 自主決策原則（無痛推進）
- 未指定之 UI 細節（如配色、邊距、元件命名）依循現代 Web 最佳實踐自行決策。
- 禁止留空殼元件，所有互動必須具備完整運作邏輯與模擬資料（Mock Data）。

## 3. 品質閉環 (Self-Healing Loop)
- 代碼重大更動後，必須主動執行「npm run build」或「npx tsc」。
- 若建置出錯，主動讀取錯誤並修正，自我重複驗證直到完全通過。`
        }
      },
      {
        id: "sec-2-3",
        title: "3. 規則設計的「三要與三不要」",
        content: `### 三要：
- **要給予驗證手段**：告訴 Agent 寫完後該跑什麼指令檢查（例如 \`npm run build\` 或 \`pytest\`）。
- **要明確指定技術棧**：例如明確指定 \`Vite + React + Tailwind CSS\`，防止 Agent 自行引入肥大不相容的舊框架。
- **要定義持久化機制**：要求使用 \`localStorage\` 或特定 DB，避免重整頁面資料消失。

### 三不要：
- **不要寫含糊空話**：如「程式要又快又好」，Agent 無法對此設立測試邊界。
- **不要過度微觀管理**：不要規定每個 class 只能有幾個字元，這會嚴重打斷 Agent 的上下文連貫性。
- **不要忽視作業系統差異**：如果不宣告 Linux Mint，Agent 可能會嘗試執行 Windows 的 \`dir\` 或 PowerShell 特有語法。`,
        callout: {
          type: "tip",
          text: "一旦修改了 AGENTS.md，Antigravity 會在下一輪推理時立即自動載入最新的檔案內容，無需重啟應用程式！"
        }
      }
    ],
    quiz: [
      {
        id: "q-2-1",
        question: "在 Antigravity 2 專案中，放置於根目錄的哪兩個檔案會被系統自動識別為工作區專屬規則？",
        options: [
          "README.md 與 LICENSE",
          "AGENTS.md 與 GEMINI.md",
          "config.ini 與 settings.xml",
          "rules.txt 與 notes.doc"
        ],
        correctAnswers: [1],
        explanation: "Antigravity 2 原生識別專案根目錄下的 AGENTS.md 與 GEMINI.md，並將其內容注入為最高優先級的工作區規則。"
      },
      {
        id: "q-2-2",
        question: "什麼是規則中的「品質閉環與自動修復 (Self-Healing Loop)」？",
        options: [
          "要求 Agent 在出錯時立即刪除專案所有檔案",
          "要求 Agent 遇到錯誤時主動讀取終端錯誤日誌、修改程式碼並重複編譯直到成功通過",
          "要求 Agent 每次都要等使用者回覆「請修復」才肯繼續動",
          "讓系統自動關閉電腦重開機"
        ],
        correctAnswers: [1],
        explanation: "Self-Healing Loop（自癒閉環）是 Agentic AI 最強大的特質之一：執行指令 -> 捕捉錯誤 -> 分析成因 -> 自動修復代碼 -> 再次驗證，形成免人工干預的閉環。"
      }
    ],
    practice: {
      id: "p-2",
      title: "動手演練：檢視現有專案的 AGENTS.md 內容",
      prompt: "在虛擬終端中執行指令，讀取當前工作區中的 AGENTS.md 檔案內容，確認其規則主題。",
      hint: "可以使用 cat AGENTS.md 或 head -n 15 AGENTS.md 指令讀取檔案。",
      expectedCommands: ["cat AGENTS.md", "head AGENTS.md", "head -n 15 AGENTS.md", "view AGENTS.md", "less AGENTS.md"],
      mockOutput: `# 互動教學網站專案規範與自主執行規則 (Workspace Rules)

本專案為「互動教學網站」，目標為高自主度開發。AI Agent 在此工作區內執行任務時，應遵循以下規則：
1. 全域系統與語言規範：Linux Mint 22.3 Cinnamon 64-bit、繁體中文
2. 自主決策原則（無痛推進）：禁止留空殼元件、現代美觀與可用性
3. 建議技術棧規範：Vite + React (TypeScript) + Tailwind CSS + Lucide React
4. 品質閉環與自動修復 (Self-Healing Loop)：主動執行 npm run build 直到通過
[驗證成功] 成功檢閱 AGENTS.md！這正是保障本網站高自主建置的核心規範！`,
      explanation: "太棒了！透過 cat 指令確認了工作區規則內容。有了清晰的規則引導，Agent 才能在接下來的任務中自主決策、穩定輸出！"
    }
  },

  // 第 3 課
  {
    id: 3,
    title: "第 3 課：記憶與上下文大腦 (Brain & Memory)",
    subtitle: "揭開 Context Window、Transcript JSONL、大腦目錄與 Reactive Wakeup 機制",
    category: "規則與大腦",
    estimatedMinutes: 20,
    tags: ["大腦目錄", "Context Window", "Transcript JSONL", "Reactive Wakeup", "跨會話"],
    icon: "Brain",
    summary: "AI 到底是怎麼記住你說過的話？當對話變得極長時，它為什麼不會失憶或崩潰？本課帶你透視 Antigravity 2 位於 ~/.gemini/antigravity/brain 的持久化記憶結構、JSONL 對話追蹤機制，以及劃時代的「響應式喚醒（Reactive Wakeup）」非同步事件設計。",
    objectives: [
      "理解大型語言模型（LLM）的 Context Window（上下文視窗）運作極限與截斷策略",
      "探索 ~/.gemini/antigravity/brain/<id>/ 目錄結構與 transcript.jsonl 的儲存細節",
      "弄懂 Reactive Wakeup：為什麼背景任務完成時 Agent 能自動甦醒而不需要 Polling 輪詢",
      "學會跨會話（Cross-session）記憶管理與長任務的記憶整理技巧"
    ],
    sections: [
      {
        id: "sec-3-1",
        title: "1. LLM 上下文視窗與 Antigravity 的大腦架構",
        content: `所有 AI 核心都有其一次推理能吞吐的 Token 上限（Context Window）。如果把所有的歷史代碼、終端輸出毫無節制地塞進去，很快就會遇到 Token 耗盡或推理速度斷崖式下跌。

Antigravity 2 採用了一套分層式「大腦儲存庫（Brain Store）」機制：
- **即時熱記憶（Hot Context）**：當前輪次的對話提示、近期工具調用結果、高優先級專案規則。
- **持久化軌跡檔案（Transcript JSONL）**：每一個會話的完整操作軌跡都自動被即時序列化寫入磁碟：
  \`~/.gemini/antigravity/brain/<conversation-id>/.system_generated/logs/transcript.jsonl\`
- **截斷防護與深層檢索（Truncation Safeguards）**：當工具輸出過大時（例如高達上千行的日誌），系統會自動進行截斷摘要，並保留完整日誌於 \`transcript_full.jsonl\`， Agent 僅在需要時精確翻閱特定行數。`,
        callout: {
          type: "note",
          text: "這種設計讓 Antigravity 能維持輕盈的即時推理速度，同時具備回溯過去任意一筆操作的精確記憶。"
        }
      },
      {
        id: "sec-3-2",
        title: "2. 什麼是 Reactive Wakeup（響應式喚醒）？告別笨拙的 Polling！",
        content: `在傳統的自動化腳本或初階 Agent 中，如果要等待一個需要跑 2 分鐘的 \`npm install\`，通常會看到 Agent 瘋狂執行 \`sleep 5\` 並且不斷輪詢（Polling）檢查進度，這極其浪費 Token 與計算資源。

Antigravity 2 徹底革新了這一點，引入了事件驅動的 **Reactive Wakeup**：
1. 當 Agent 啟動一個長耗時命令時，指令會被送入背景任務佇列（Background Task）。
2. Agent **立刻結束當前輪次的工具調用**，進入休眠待命狀態，不消耗任何推理 Token。
3. 一旦作業系統核心發出任務終止信號（Process Exit），底層事件總線會主動向 Agent 推播一則 \`<SYSTEM_MESSAGE>\` 喚醒通知。
4. Agent 瞬間甦醒，自動讀取完整的任務輸出，並繼續下一階段的程式碼撰寫！`,
        codeSnippet: {
          language: "json",
          caption: "背景任務完成後系統自動注入的 Reactive Wakeup 喚醒訊息範例",
          code: `<SYSTEM_MESSAGE>
[Message] timestamp=2026-10-10T16:45:16Z sender=task-32 priority=HIGH
content=Task id "task-32" (npm install) finished with result:
The command exited with code 0.
added 134 packages, and audited 135 packages in 23s.
</SYSTEM_MESSAGE>`
        }
      },
      {
        id: "sec-3-3",
        title: "3. 跨會話記憶與 Artifacts 產出物庫",
        content: `如果你今天關閉了 Antigravity，明天想接續工作，你可以：
- 直接在左側側邊欄點選歷史 Conversation，所有的對話與產出物毫無遺失。
- 透過在新會話中輸入 \`@conversation\`，引用前一個專案對話的大腦總結。
- 所有具備長期價值的架構規劃書、設計文件、進度圖表，都儲存在大腦的 **Artifacts** 資料夾中，隨時可一鍵導出或在對話中並排預覽。`,
        callout: {
          type: "tip",
          text: "不要讓一個會話無限期跑好幾個月。當一個重大里程碑達成後，產出架構 Artifact，並開啟乾淨的新會話引用它，能讓 Agent 的思維保持最敏銳狀態！"
        }
      }
    ],
    quiz: [
      {
        id: "q-3-1",
        question: "Antigravity 2 在處理耗時較長的背景任務（如 npm install 或大型編譯）時，採用什麼機制避免浪費 Token？",
        options: [
          "每隔 3 秒重複執行 sleep 迴圈輪詢",
          "強制中斷當前任務並報錯放棄",
          "Reactive Wakeup（響應式喚醒）：Agent 進入休眠，任務完成時由系統事件主動喚醒",
          "關閉所有終端視窗"
        ],
        correctAnswers: [2],
        explanation: "Reactive Wakeup 讓 Agent 啟動背景任務後立即停止多餘調用，直到作業系統發出完成信號由系統訊息主動喚醒，既省 Token 又極度穩定。"
      },
      {
        id: "q-3-2",
        question: "Antigravity 2 會話的持久化記錄（Transcript）預設儲存在本機 Linux 的哪種類型檔案中？",
        options: [
          "Microsoft Word (.docx)",
          "JSON Lines (.jsonl)",
          "Excel (.xlsx)",
          "壓縮加密的 .rar 檔案"
        ],
        correctAnswers: [1],
        explanation: "Antigravity 採用 JSON Lines (.jsonl) 格式儲存 transcript，每行記錄一個步進（Step），兼具流式追加效能與結構化檢索便利性。"
      }
    ],
    practice: {
      id: "p-3",
      title: "動手演練：觀察背景任務的狀態管理",
      prompt: "在虛擬終端中輸入指令「ps aux | grep node」或「top」，查看 Linux 系統目前運行的 Node.js 行程。",
      hint: "輸入 ps aux | grep node 查看當前行程清單。",
      expectedCommands: ["ps aux | grep node", "ps aux", "ps", "top"],
      mockOutput: `lss       41208  0.4  1.2 1245080 98320 ?       Sl   00:44   0:02 node /home/lss/.nvm/versions/node/v20.20.2/bin/npm run dev
lss       41350  1.1  2.1 1450200 172040 ?      Sl   00:45   0:05 /usr/bin/node /home/lss/antigravity2教學/node_modules/vite/bin/vite.js
[驗證成功] 行程運作正常！背景任務正由系統底層守護程式精準監控。`,
      explanation: "太棒了！透過 Linux 系統行程指令，你能直接驗證後台正在運行的服務。這正是 Antigravity 2 能與本機行程無縫整合的魅力！"
    }
  },

  // 第 4 課
  {
    id: 4,
    title: "第 4 課：專案設定檔與客製化生態",
    subtitle: "深入 .gemini/ 目錄結構、settings.json、appVariant 與 Hooks 鉤子擴充",
    category: "擴充與工具",
    estimatedMinutes: 25,
    tags: [".gemini目錄", "settings.json", "Plugins", "Hooks", "客製化生態"],
    icon: "Settings",
    summary: "想要打造團隊統一的工程環境，或是為特定專案量身訂做自定義行為？本課全面解構 Antigravity 的客製化設定系統：從全域 ~/.gemini 到專案內 .gemini/、settings.json 中的權限策略、擴充套件（Plugins）到觸發自動化腳本的 Hooks 鉤子架構。",
    objectives: [
      "掌握全域目錄 ~/.gemini 與專案目錄 .gemini/ 的優先順序與結構分工",
      "深入理解 settings.json 中的核心配置項目：autoExecutionPolicy、sandboxMode、modelSelection",
      "理解 Hooks 鉤子機制：如何在 Agent 操作前（Pre-tool）或操作後（Post-tool）插入自訂驗證邏輯",
      "學會如何將常用技能與規則打包為可重用的 Plugin 外掛程式"
    ],
    sections: [
      {
        id: "sec-4-1",
        title: "1. 雙層配置目錄：~/.gemini vs .gemini/",
        content: `Antigravity 2 設計了優雅的設定繼承體系：
- **全域設定目錄**：\`~/.gemini/\`
  - 存放使用者的全域偏好、已安裝外掛套件（\`plugins/\`）、全域自訂技能（\`skills/\`）與跨專案認證金鑰。
- **專案專屬目錄**：\`<專案根目錄>/.gemini/\`
  - 專案級別的覆蓋設定檔（\`settings.json\`）。
  - 專案專屬的外掛或私有 Skill。
  - 當存在衝突時，**專案目錄的配置一律優先於全域配置**。

這種設計使得團隊可以將專案專屬的 \`.gemini/\` 目錄納入 Git 版本控制，確保所有成員拉取程式碼後，立即具備完全一致的 Agent 運作規範！`,
        callout: {
          type: "tip",
          text: "敏感金鑰（如個人 Token）建議保留於環境變數或全域目錄，勿將私鑰提交至公開 Git 倉庫。"
        }
      },
      {
        id: "sec-4-2",
        title: "2. settings.json 核心參數詳解",
        content: `在 \`.gemini/settings.json\` 中，你可以細緻調度 Agent 的各項權限：`,
        codeSnippet: {
          language: "json",
          caption: "典型的專案級 settings.json 配置實例",
          code: `{
  "modelSelection": "gemini-pro",
  "toolExecutionPolicy": "proceed-in-sandbox",
  "sandboxMode": true,
  "internetAccessPolicy": "ask",
  "artifactReviewMode": "agent-decides",
  "commandAllowlist": [
    "npm run build",
    "npm test",
    "git status"
  ],
  "commandDenylist": [
    "rm -rf /",
    "chmod 777"
  ]
}`
        }
      },
      {
        id: "sec-4-3",
        title: "3. Hooks 鉤子與 Plugins 外掛體系",
        content: `除了靜態設定，Antigravity 還支援動態擴充：
- **Hooks (鉤子)**：可在 Agent 生命週期的特定事件觸發 Shell 腳本。例如：
  - \`pre-commit\`：在 Agent 準備提交 git 之前，自動執行 linter 檢查。
  - \`post-tool\`：在 Agent 修改特定檔案後，自動產生日誌報告。
- **Plugins (外掛程式)**：將多個 Skill、Rules、MCP 伺服器與 Hooks 打包為單一資料夾，透過 \`/plugin\` 指令一鍵安裝或停用。`,
        callout: {
          type: "note",
          text: "善用 Plugins 可以輕鬆將公司的後端規範、專屬 API 定義打包分發給所有工程團隊。"
        }
      }
    ],
    quiz: [
      {
        id: "q-4-1",
        question: "若在專案根目錄的 .gemini/settings.json 與家目錄 ~/.gemini/settings.json 定義了衝突的配置，哪一個會生效？",
        options: [
          "家目錄 ~/.gemini 優先",
          "專案根目錄 .gemini/ 優先",
          "兩者皆失效並拋出系統異常",
          "隨機挑選一個生效"
        ],
        correctAnswers: [1],
        explanation: "Antigravity 遵循近端專案優先原則：專案根目錄的 .gemini/settings.json 會優先覆蓋全域家目錄配置。"
      },
      {
        id: "q-4-2",
        question: "在 settings.json 中設定 commandDenylist 的主要用途是什麼？",
        options: [
          "強制禁止 Agent 執行清單中列出的危險或受限指令（如 rm -rf /）",
          "加快指令執行的速度",
          "將指令結果自動翻譯成英文",
          "自動安裝未安裝的套件"
        ],
        correctAnswers: [0],
        explanation: "commandDenylist（命令黑名單）能強制作業系統層級的安全防護，阻斷任何破壞性指令在終端執行。"
      }
    ],
    practice: {
      id: "p-4",
      title: "動手演練：查看專案根目錄結構與隱藏設定檔",
      prompt: "在虛擬終端中輸入指令檢查當前目錄下的隱藏設定檔案（包含 .firebaserc 等）。",
      hint: "輸入「ls -a」或「find . -maxdepth 1 -name '.*'」檢視以點開頭的檔案。",
      expectedCommands: ["ls -a", "ls -la", "find . -maxdepth 1 -name '.*'"],
      mockOutput: `.  ..  .firebaserc  .git  .gitignore  AGENTS.md  GEMINI.md  firebase.json  package.json
[驗證成功] 順利查驗到 .firebaserc 等關鍵專案設定！`,
      explanation: "太棒了！隱藏點檔案在 Linux 專案中承擔了絕大多數工具的初始化設定，理解其分佈是資深工程師的基礎能力。"
    }
  },

  // 第 5 課
  {
    id: 5,
    title: "第 5 課：內建 Skill 技能庫全解析",
    subtitle: "掌握 SKILL.md 宣告規範，善用官方內建技能庫釋放強大專案力",
    category: "擴充與工具",
    estimatedMinutes: 25,
    tags: ["Skill生態", "SKILL.md", "generative_ui", "chrome-devtools", "firebase-basics"],
    icon: "Boxes",
    summary: "什麼是 Skill？它是如何讓 Agent 瞬間學會從未見過的特定領域技術？本課深入探討 Antigravity 的 Skill 技能機制，剖析 SKILL.md 的 YAML Frontmatter 與 Markdown 指引架構，並精選介紹官方最實用的幾大王牌 Skill！",
    objectives: [
      "理解 Skill 的定義與觸發機制（Trigger Condition）",
      "剖析標準 SKILL.md 的文件規範：name、description、instructions 與 references/ 資料夾",
      "精熟關鍵內建技能：generative_ui（即時UI生成）、chrome-devtools（無障礙與網頁調試）、firebase-basics 等",
      "學會自行撰寫第一款專屬於自己專案的客製化 Skill"
    ],
    sections: [
      {
        id: "sec-5-1",
        title: "1. 什麼是 Skill？它與 System Prompt 有何不同？",
        content: `如果把 LLM 的通用模型比作大學畢業生，那麼 **Skill 就是專案的專業培訓手冊**。

在過去，若要教導 Agent 一個複雜架構（例如 Firebase App Hosting 部署規範），你必須在每次對話時手動貼上一大段長篇大論，浪費大量時間與 Context。

**Skill 採用動態按需載入（Just-In-Time Activation）機制**：
- 每個 Skill 存放於獨立資料夾，包含核心入口文件 \`SKILL.md\`。
- \`SKILL.md\` 頂部帶有 YAML 格式的描述（包含 Skill 的用途與觸發關鍵字）。
- 當使用者在對話中提及相關任務時，Antigravity 會自動觸發該 Skill，並將其中的最佳實踐、除錯檢查清單與代碼範例載入大腦！`,
        callout: {
          type: "tip",
          text: "你不需要背誦所有技能的細節；只要在提問中提及目標（如：部署到 Firebase 或測試網頁 A11y），系統就會自主啟用對應的 Skill。"
        }
      },
      {
        id: "sec-5-2",
        title: "2. SKILL.md 核心架構範例剖析",
        content: `標準的 SKILL.md 遵循極其清晰的工程格式：`,
        codeSnippet: {
          language: "yaml",
          caption: "SKILL.md 的典型結構定義",
          code: `---
name: my-custom-skill
description: 專門用於本機微服務自動化測試與 Docker 容器編排的技能手冊。當使用者提及容器部署或整合測試時啟動。
---

# My Custom Skill 指南

## 1. 執行前置檢查
- 確認 Docker daemon 正在背景運行。
- 檢查 .env.local 檔案是否存在所需環境變數。

## 2. 標準測試流程
\`\`\`bash
npm run test:e2e
\`\`\`

## 3. 常見失敗排查 (Troubleshooting)
若出現 Port 8080 被佔用錯誤，請先執行 lsof -i :8080 找出行程並釋放。`
        }
      },
      {
        id: "sec-5-3",
        title: "3. 必知精選內建 Skills",
        content: `Antigravity 內建了多款開箱即用的強大技能：
- **generative_ui**：賦予 Agent 即時生成豐富 HTML/React/Tailwind 視覺化控制項的能力。
- **antigravity-guide**：提供 Antigravity 自身所有 CLI、快捷鍵與 Python SDK 的權威離線文件。
- **firebase-hosting-basics**：涵蓋 Firebase 靜態託管、多站點管理（multisites）與 CDN 快取配置。
- **modern-web-guidance**：隨時保持現代 Web 開發規範（CSS :has()、現代響應式佈局、React 最佳實踐）。
- **chrome-devtools**：透過 Chrome MCP 深入診斷 DOM、效能指標（LCP、CLS）與無障礙設計（A11y）。`,
        callout: {
          type: "note",
          text: "所有內建 Skill 均存放於系統內建目錄中，使用者隨時可以透過 view_file 查看其源始指引！"
        }
      }
    ],
    quiz: [
      {
        id: "q-5-1",
        question: "Skill 技能的核心定義檔案名稱必須是什麼？",
        options: [
          "README.md",
          "SKILL.md",
          "index.ts",
          "plugin.json"
        ],
        correctAnswers: [1],
        explanation: "每個 Skill 資料夾內必須包含一個名為 SKILL.md 的檔案，並且頂部帶有 YAML frontmatter 定義其名稱與觸發描述。"
      },
      {
        id: "q-5-2",
        question: "Skill 相比於每次對話手動貼入長篇提示詞的最大優勢是什麼？",
        options: [
          "Skill 會讓電腦運算變慢",
          "按需動態載入（Just-In-Time），僅在任務相關時才載入上下文，節省大量 Token 並提供專業最佳實踐",
          "Skill 只能在 Windows 系統運行",
          "Skill 不具備任何文字說明功能"
        ],
        correctAnswers: [1],
        explanation: "Skill 透過動態匹配，僅在需要時載入專業指引與排查手冊，既保持大腦乾淨，又能精準遵循專業流程。"
      }
    ],
    practice: {
      id: "p-5",
      title: "動手演練：定位內建 Skills 清單",
      prompt: "在虛擬終端中輸入指令列出內建技能所在的目錄內容，觀察包含哪些官方 Skill。",
      hint: "試著輸入「ls /home/lss/.gemini/antigravity/builtin/skills」查看目錄。",
      expectedCommands: [
        "ls /home/lss/.gemini/antigravity/builtin/skills",
        "ls ~/.gemini/antigravity/builtin/skills",
        "ls builtin/skills"
      ],
      mockOutput: `agy-customizations  antigravity_guide  generative_ui  migrate-workflows  plugin
[驗證成功] 成功瀏覽到官方內建的技能庫！包含 generative_ui 與 antigravity_guide！`,
      explanation: "太棒了！透過實際走訪內建技能目錄，你能明白這些強大能力的真實出處，未來也能在該目錄下輕鬆自製專屬 Skill！"
    }
  },

  // 第 6 課
  {
    id: 6,
    title: "第 6 課：MCP (Model Context Protocol) 與 Sidecar 擴充",
    subtitle: "連接外部世界的大門：深入理解 MCP 協議、Sidecars 架構與多元資料來源",
    category: "擴充與工具",
    estimatedMinutes: 25,
    tags: ["MCP協議", "Model Context Protocol", "Sidecars", "外部工具擴充", "API整合"],
    icon: "Network",
    summary: "AI 如果只能看本地文字檔，能力將受限在孤島之中。MCP（Model Context Protocol）是由 Anthropic 與開源社群發起、如今已成為全球行業標準的 AI 上下文協議。本課詳解 Antigravity 如何透過 MCP 與 Sidecar 機制無縫連接資料庫、瀏覽器、GitHub 與企業內部系統！",
    objectives: [
      "理解什麼是 Model Context Protocol（MCP）及其解決的痛點",
      "弄清 MCP 架構中的三個角色：MCP Host（宿主）、MCP Client（用戶端）與 MCP Server（伺服端）",
      "掌握在 Antigravity 2 中設定與連線 MCP Servers 的方式（JSON 配置）",
      "認識 Sidecar（邊車）常駐行程機制，並掌握其在 Linux 守護行程中的應用"
    ],
    sections: [
      {
        id: "sec-6-1",
        title: "1. 什麼是 MCP？為什麼它被稱為 AI 界的 USB 規格？",
        content: `在 MCP 出現之前，每個 AI 產品都有自己專屬的一套自訂外掛格式：有的叫 Plugin、有的叫 Action、有的叫 Function Calling。若你想讓 AI 連線 Postgres 資料庫，就得為每個不同平台寫一套橋接程式。

**Model Context Protocol (MCP)** 徹底終結了這種混亂：
- 它是一個基於 JSON-RPC 2.0 的通用開放標準。
- 任何開發者只要寫一個標準的 **MCP Server**（例如 GitHub MCP、PostgreSQL MCP、Slack MCP），所有支援 MCP 的 AI Agent（包括 Antigravity、Claude Code、Cursor 等）就能**無縫插拔使用**！
- 就像 USB 介面一樣，隨插即用，安全可靠。`,
        callout: {
          type: "tip",
          text: "Antigravity 2 原生內建 MCP Client，能夠直接在設定檔中掛載任意符合開源規格的 MCP Server！"
        }
      },
      {
        id: "sec-6-2",
        title: "2. MCP 伺服器的典型配置手法",
        content: `在 Antigravity 的設定檔（如 \`.gemini/settings.json\`）中，你可以透過 \`mcpServers\` 區塊快速掛載外部伺服器：`,
        codeSnippet: {
          language: "json",
          caption: "掛載 SQLite 與 Filesystem MCP 伺服器範例",
          code: `{
  "mcpServers": {
    "sqlite": {
      "command": "uvx",
      "args": ["mcp-server-sqlite", "--db-path", "/home/lss/data/app.db"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxxxxxxxxxxx"
      }
    }
  }
}`
        }
      },
      {
        id: "sec-6-3",
        title: "3. Sidecar（邊車）常駐行程架構",
        content: `除了標準的請求/回應式 MCP 工具，Antigravity 還支援以 **Sidecar（邊車守護行程）** 的模式運作：
- Sidecar 是一個在 Linux 背景常駐的獨立進程，它與 Agent 同生共存。
- 它能負責即時監控本地文件系統的變更、維護與遠端 WebSocket 的心跳連線，或者在記憶體中維護高頻索引。
- 當有事件發生時，Sidecar 會立即向 Agent 發送非同步訊號，實現近乎零延遲的即時反應。`,
        callout: {
          type: "important",
          text: "在 Linux Mint 環境下，透過 systemd 或 Antigravity 內建的 manage_task 工具，能確保 Sidecar 在崩潰時具備自動重啟的強韌彈性。"
        }
      }
    ],
    quiz: [
      {
        id: "q-6-1",
        question: "Model Context Protocol (MCP) 的最核心價值是什麼？",
        options: [
          "用來提高電腦的顯示卡更新率",
          "提供開放統一的標準協議，讓 AI Agent 能隨插即用連接各類資料庫、API 與外部系統",
          "強制所有程式都必須用 C 語言重寫",
          "防止電腦連上網際網路"
        ],
        correctAnswers: [1],
        explanation: "MCP 就像 AI 世界的 USB 接口標準，提供統一的協議介面，讓 Agent 自由擴充存取資料庫、瀏覽器與各類服務的能力。"
      },
      {
        id: "q-6-2",
        question: "在 Antigravity 2 中，MCP 伺服器通常使用什麼通訊機制與宿主 Agent 進行訊息傳遞？",
        options: [
          "標準輸入輸出 (stdio) 上的 JSON-RPC 2.0 或 HTTP/SSE",
          "手寫紙張掃描傳真",
          "藍牙 2.0 短波廣播",
          "傳統軟碟片交換"
        ],
        correctAnswers: [0],
        explanation: "MCP 規範標準採用基於 stdio（標準輸入輸出）或 HTTP/SSE 的 JSON-RPC 2.0 訊息協定，輕量且相容所有現代作業系統。"
      }
    ],
    practice: {
      id: "p-6",
      title: "動手演練：測試 JSON-RPC / MCP 相容指令工具",
      prompt: "在虛擬終端中輸入指令檢查系統是否具備 npx 或 python 工具，以確認具備啟動 MCP 伺服器的先決條件。",
      hint: "輸入「npx -v」或「which npx」檢查 Node 套件執行器。",
      expectedCommands: ["npx -v", "which npx", "which python3", "python3 -v"],
      mockOutput: `10.8.2
/home/lss/.nvm/versions/node/v20.20.2/bin/npx
[驗證成功] 系統具備完整的 npx 執行環境，可直接運行任何開源 MCP 伺服器！`,
      explanation: "太棒了！只要有 Node (npx) 或 Python (uvx)，你就能在一行指令內拉起世界上任何開源 MCP 伺服器！"
    }
  },

  // 第 7 課
  {
    id: 7,
    title: "第 7 課：終端沙盒與建議工具庫",
    subtitle: "掌握 Terminal Sandbox 安全機制、BypassSandbox 與核心原生工具操作",
    category: "基礎與架構",
    estimatedMinutes: 25,
    tags: ["Terminal Sandbox", "BypassSandbox", "run_command", "write_to_file", "replace_file_content"],
    icon: "Terminal",
    summary: "把終端機交給 AI 是最興奮也最讓人緊張的事！Linux Mint 上的 Antigravity 2 如何確保命令不會誤刪重要系統檔案？本課深入揭秘 Terminal Sandbox 沙盒隔離機制、BypassSandbox 的正確使用時機，以及十大最關鍵的內建原生工具操作手法。",
    objectives: [
      "理解 Standard Sandbox Mode 與 Bypass Sandbox Mode 的防護邊界與本質差異",
      "掌握什麼時候「不需要」Bypass、什麼時候「必須」Bypass（例如：外網連線、全域套件安裝）",
      "精熟關鍵工具群組：run_command、write_to_file、replace_file_content、view_file",
      "掌握檔案置換的「外科手術式修復」：避免全檔覆蓋引發的未預期錯誤"
    ],
    sections: [
      {
        id: "sec-7-1",
        title: "1. 終端沙盒（Terminal Sandbox）：Linux 系統的貼身保鏢",
        content: `在 Linux Mint 22.3 下，如果 AI 隨便執行一個帶有路徑錯誤的 \`rm\` 或惡意腳本，後果不堪設想。因此，Antigravity 預設啟動了 **Standard Sandbox Mode**：

- **預設沙盒環境 (BypassSandbox: false)**：
  - Agent 擁有本機工作區（如 \`/home/lss/antigravity2教學\`）的完整讀寫權限。
  - 能自由使用系統標準二進位檔（node、git、gcc、bash）。
  - **但嚴格禁止任何外網連線**，且禁止讀寫工作區外的敏感系統檔案（如 \`/etc\`、\`/boot\`）。
  - 這意味著本地代碼建置（\`npm run build\`）、單元測試與檔案整理皆可無感安全自動執行，無需打擾使用者！

- **繞過沙盒模式 (BypassSandbox: true)**：
  - 當 Agent 真正需要連線外網（例如 \`npm install\` 下載套件、\`firebase deploy\` 發布網站），它會發起請求。
  - 介面會彈出明確的使用者確認提示（或遵循設定中的 Command Allowlist 允許），確保安全主控權永遠在使用者手中。`,
        callout: {
          type: "important",
          text: "黃金原則：非必要絕不隨意要求 BypassSandbox。能本地完成的編譯檢查一律留在沙盒內安全執行！"
        }
      },
      {
        id: "sec-7-2",
        title: "2. 核心原生工具三大天王",
        content: `日常協同中最常被調用的三個核心工具：

1. **\`run_command\`**：
   - 負責執行終端 Bash 命令。
   - 包含超時設定（WaitMsBeforeAsync），防止單一未響應的命令永遠卡死對話。
   - 支援持久化終端（RunPersistent），可在多次命令之間共享環境變數。

2. **\`write_to_file\`**：
   - 用於初始化新檔案或全檔覆蓋。
   - 會自動遞迴在 Linux 磁碟中建立不存在的父層目錄。
   - 支援 Artifact 標記，直接將重要設計圖、規劃書呈現給使用者。

3. **\`replace_file_content\`（極其推薦！）**：
   - 「外科手術式精準編輯」：指定行號範圍（StartLine ~ EndLine）與精確字串比對。
   - **為什麼不每次都用 write_to_file 覆蓋全檔？** 因為全檔覆蓋容易因 Token 限制遺失原程式碼中的註解、未改動函式，且產生巨大的 Git Diff 雜訊。精確置換是專業 Agent 最優雅的作風！`,
        codeSnippet: {
          language: "typescript",
          caption: "replace_file_content 的精準定位範例",
          code: `replace_file_content(
  TargetFile: "/home/lss/project/src/App.tsx",
  StartLine: 45,
  EndLine: 50,
  TargetContent: "const count = 0;",
  ReplacementContent: "const count = 100;",
  Instruction: "將計數器初始值設定為 100",
  Description: "更新計數器起點",
  AllowMultiple: false
)`
        }
      },
      {
        id: "sec-7-3",
        title: "3. 任務監控與排程：manage_task 與 schedule",
        content: `遇到 dev server 或長期建置時，Agent 會使用：
- **\`manage_task\`**：查看背景任務狀態（status）、終止任務（kill）或傳送輸入（send_input）。
- **\`schedule\`**：設定定時任務或單次計時器。
**嚴禁在腳本中寫死 \`sleep 60\`**，這會霸佔線程；正確做法是調用 \`schedule\` 讓系統在時間到時主動推播醒來。`,
        callout: {
          type: "tip",
          text: "善用 manage_task 可以隨時監控背景伺服器日誌，確保專案運行無虞。"
        }
      }
    ],
    quiz: [
      {
        id: "q-7-1",
        question: "在預設的 Standard Sandbox Mode (BypassSandbox: false) 下，Agent 被禁止進行下列哪項行為？",
        options: [
          "在目前專案工作區內建立新檔案",
          "執行外網連線請求（例如從 npm 下載外部套件）與存取未授權的外部系統路徑",
          "在本地執行 TypeScript 型別檢查",
          "閱讀工作區內的 AGENTS.md 檔案"
        ],
        correctAnswers: [1],
        explanation: "標準沙盒模式有完整的檔案讀寫權限於當前工作區，但嚴格隔絕外網存取以防資料洩露或未授權的外部操作。"
      },
      {
        id: "q-7-2",
        question: "修改既有大型程式碼檔案時，為什麼推薦優先使用 replace_file_content 而非 write_to_file？",
        options: [
          "因為 replace_file_content 會自動把程式碼轉為繁體中文",
          "因為精確置換只改動目標程式碼行，避免覆蓋全檔時遺失既有註解與程式碼，且 Git Diff 最乾淨",
          "因為 write_to_file 無法寫入任何文字",
          "因為作業系統不允許使用 write_to_file"
        ],
        correctAnswers: [1],
        explanation: "replace_file_content 能進行最小範圍的原子級改動，避免長檔案全檔重寫帶來的截斷遺失風險與龐大差異雜訊。"
      }
    ],
    practice: {
      id: "p-7",
      title: "動手演練：模擬執行安全沙盒命令",
      prompt: "在虛擬終端中輸入指令檢查當前專案的 Git 狀態（git status），驗證本地安全讀取。",
      hint: "輸入「git status」指令。",
      expectedCommands: ["git status", "git status -s"],
      mockOutput: `On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
	modified:   package.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	.firebaserc
	firebase.json
	src/

no changes added to commit (use "git add" to track)
[驗證成功] 終端順利執行！在沙盒保護下安全掌握檔案變更軌跡。`,
      explanation: "太棒了！透過終端快速捕捉 Git 狀態，能讓 Agent 在進行任何修復前精準定位檔案變更！"
    }
  },

  // 第 8 課
  {
    id: 8,
    title: "第 8 課：斜線指令 (Slash Commands) 與多 Agent 協同",
    subtitle: "掌握 /goal、/plan、/schedule 與 Subagents 子代理人平行派工",
    category: "進階範例",
    estimatedMinutes: 25,
    tags: ["/goal", "/plan", "Slash Commands", "Subagents", "多代理協同"],
    icon: "Workflow",
    summary: "當專案規模龐大到單一對話無法負荷時，如何派出一支 AI 特工軍團？本課深入掌握 Antigravity 最具代表性的斜線指令（Slash Commands），並學習如何透過 invoke_subagent 調動研發專案經理、文檔檢索員與安全審計員，實現多任務並行推進！",
    objectives: [
      "精通最具生產力的四大斜線指令：/goal、/plan、/schedule、/boost",
      "理解 Subagent（子代理人）的生命週期、獨立上下文與派工模型",
      "弄清三種工作區模式：inherit（繼承）、branch（分支隔離）、share（底層共享）",
      "掌握 Agent 之間的跨代理通訊（send_message）與結果收斂技巧"
    ],
    sections: [
      {
        id: "sec-8-1",
        title: "1. 核心斜線指令（Slash Commands）大揭密",
        content: `在聊天框輸入 \`/\`，會彈出直覺的指令選單：

- **\`/goal\`（終極全自主模式）**：
  - **核心哲學**：當你想讓 Agent 完成一個龐大任務（例如「從零打造一個包含 12 單元的互動教學網站並部署」），輸入 \`/goal\`。
  - 系統會啟用深層自審機制，**禁止 Agent 半途而廢向使用者討要肯定**；它必須持續規劃、編寫、除錯、建置與驗證，直到目標 100% 達成並標註完成標籤！
- **\`/plan\`（規劃先導模式）**：
  - 強制 Agent 在更動任何程式碼前，先輸出結構化的階段性藍圖（Artifact Plan），讓你確認架構方向無誤後才動工。
- **\`/schedule\`（排程掛載）**：
  - 用自然語言直接掛載定時提醒或背景巡檢。
- **\`/boost\`（思維深推模式）**：
  - 遇到頑固 Bug 或複雜數學推導時，啟動多視角思維鏈（Chain-of-Thought）交叉驗證。`,
        callout: {
          type: "tip",
          text: "本次建立這個教學網站的任務正是由 /goal 指令所驅動，展現了強悍的長程自主閉環能力！"
        }
      },
      {
        id: "sec-8-2",
        title: "2. 多 Agent 協同：invoke_subagent 的派工魔力",
        content: `如果一個主 Agent 既要寫程式碼，又要去翻閱上千頁的外部 API 文檔，主上下文很快就會被雜訊塞爆。

解決方案就是**召喚子代理人（Subagent）**：
- 主 Agent 調用 \`invoke_subagent\` 工具。
- 指派專屬角色，例如：
  - \`research\`：只具備唯讀權限的文檔探勘特工，專門去翻找 Firebase 官方規則或代碼庫。
  - \`firestore-rules-author\`：專門負責嚴格審核安全規則的專家。
  - \`self\`：與主 Agent 同等能力的工程子代理。
- 子代理人在自己獨立的對話環境中極速運算，完成後僅將**核心精華結論**回報給主 Agent，完美保護主上下文大腦的清晰度！`,
        codeSnippet: {
          language: "json",
          caption: "主 Agent 分派子代理人並行探勘的調用實例",
          code: `invoke_subagent(
  Subagents: [
    {
      "TypeName": "research",
      "Role": "Firebase 部署專家",
      "Prompt": "請研讀 firebase-hosting-basics 技能，並回傳多站點設定的最佳 JSON 格式",
      "Model": "flash",
      "Workspace": "inherit"
    }
  ]
)`
        }
      },
      {
        id: "sec-8-3",
        title: "3. 工作區隔離模式：inherit / branch / share",
        content: `派工時可選擇子代理人的工作目錄隔離等級：
- **inherit**：共享同一目錄，隨改即見。
- **branch**：為子代理人建立獨立分支工作區，子代理的大膽重構不會污染主目錄，驗證成功後再合併。
- **share**：類似 Git Worktree，共享底層物件庫但擁有獨立工作樹。`,
        callout: {
          type: "note",
          text: "合理的派工能將複雜大型系統的重構時間縮短 70% 以上。"
        }
      }
    ],
    quiz: [
      {
        id: "q-8-1",
        question: "哪一個斜線指令最適合在準備過夜執行或進行長程自主專案建置時使用，能促使 Agent 不斷自我驗證直到徹底達標？",
        options: [
          "/help",
          "/goal",
          "/quit",
          "/clear"
        ],
        correctAnswers: [1],
        explanation: "/goal 是專為長任務自主設計的指令，促使 Agent 深度推理、自我審查並持續推進，直到目標完全達成。"
      },
      {
        id: "q-8-2",
        question: "將繁瑣的文檔翻閱或安全審查工作委派給 Subagent（子代理人）的最主要好處是什麼？",
        options: [
          "可以關閉使用者的電腦電源",
          "在獨立上下文環境中執行，避免大量雜訊污染主 Agent 的記憶大腦，並支援並行加速",
          "子代理人不需要任何提示詞",
          "子代理人會刪除所有程式碼"
        ],
        correctAnswers: [1],
        explanation: "Subagent 具備獨立上下文，能在背景完成重型研究後只回傳濃縮結論，確保主 Agent 思維清晰敏捷。"
      }
    ],
    practice: {
      id: "p-8",
      title: "動手演練：體驗斜線指令語法調用",
      prompt: "在虛擬終端中輸入「agy /goal 打造現代前端應用」或輸入「/plan 新功能設計」，體驗語法啟動方式。",
      hint: "試著輸入「/goal 打造現代前端應用」或「/plan」。",
      expectedCommands: ["/goal 打造現代前端應用", "/goal", "/plan", "/boost", "/schedule"],
      mockOutput: `[Agent 模式切換] 啟動長程自主目標推進器 (/goal)
目標：打造現代前端應用
-> 建立執行計畫 (Execution Plan)
-> 執行專案環境探勘
-> 啟動自癒驗證閉環
[驗證成功] 斜線指令觸發成功！系統已進入全面自主達成模式！`,
      explanation: "太棒了！只要一行簡單的斜線指令，就能瞬間啟動整個自主研發管線！"
    }
  },

  // 第 9 課
  {
    id: 9,
    title: "第 9 課：實戰範例一：如何寫一個互動網站並部署",
    subtitle: "端到端完整實戰：從 Vite + React 建立、Tailwind 互動到 Firebase Hosting 上線",
    category: "進階範例",
    estimatedMinutes: 30,
    tags: ["實戰範例", "Vite+React", "TailwindCSS", "Firebase Hosting", "端到端部署"],
    icon: "Globe",
    summary: "學完觀念，立刻見真章！本課帶你 step-by-step 完整復盤如何用 Antigravity 2 從空目錄開始，建立現代 Vite + React + Tailwind 互動應用、實作 LocalStorage 狀態持久化，並透過 Firebase Hosting 部署到全網公開的真實流程！",
    objectives: [
      "掌握現代純前端 SPA 的架構配置：Vite、React 18、Tailwind CSS、Lucide Icons",
      "實作真實互動邏輯：測驗作答狀態、終端模擬器與 LocalStorage 存取",
      "落實品質閉環：在本地執行 tsc 型別檢查與 npm run build 生產建置",
      "透過 Firebase CLI 建立 Hosting 站點、設定 firebase.json 並成功發布上線"
    ],
    sections: [
      {
        id: "sec-9-1",
        title: "1. 專案起步：輕量、零配置的現代技術棧",
        content: `打造一個高效能、好維護且易部署的互動教學網站，首選是：
- **建置工具**：Vite（秒級啟動與毫秒級熱重載 HMR）。
- **核心框架**：React 18 + TypeScript（強型別防護，杜絕執行期意外）。
- **樣式引擎**：Tailwind CSS（原子化 CSS，零 CSS 檔案打包膨脹，完美深色主題）。
- **圖標庫**：Lucide React（乾淨俐落的現代向量圖標）。

Agent 會先建立結構清晰的 \`package.json\`，並在 BypassSandbox 授權下執行 \`npm install\` 下載相依套件。`,
        codeSnippet: {
          language: "json",
          caption: "核心 package.json 相依套件規劃",
          code: `{
  "name": "antigravity2-tutorial-web",
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^1.16.0"
  },
  "devDependencies": {
    "typescript": "^5.5.3",
    "vite": "^5.4.2",
    "tailwindcss": "^3.4.13"
  }
}`
        }
      },
      {
        id: "sec-9-2",
        title: "2. 互動設計原則：拒絕空殼元件！",
        content: `在我們制訂的 \`AGENTS.md\` 專案規則中，嚴格要求：
**「所有互動功能必須具備完整的運作邏輯與真實資料，禁止留下只有外觀的空殼元件。」**

因此在實作時：
- **隨堂測驗 (InteractiveQuiz)**：即時判斷作答正確性、顯示精闢題目詳解、計算正確率並支援重測。
- **終端演練區 (TerminalPlayground)**：內建模擬 Bash 環境，真實接收使用者鍵盤輸入、匹配正規表達式指令，並回傳格式化彩色的 Linux 輸出！
- **進度持久化 (LocalStorage)**：學習者做過的題目、讀過的章節即時存入瀏覽器 \`localStorage\`，關閉分頁或重整頁面絕不丟失進度！`,
        callout: {
          type: "tip",
          text: "這就是自主開發的高品質標準：不僅要有精緻的 Glassmorphism 毛玻璃視覺，更要有扎實可玩的真實互動性。"
        }
      },
      {
        id: "sec-9-3",
        title: "3. 一鍵登陸全網：Firebase Hosting 部署實錄",
        content: `完成開發後，Agent 透過四步將應用推向全球 CDN：
1. **執行生產建置**：\`npm run build\`（生成純靜態優化檔案於 \`dist/\`）。
2. **建立 Hosting 站點**：\`firebase hosting:sites:create antigravity2-tutorial --project lss-webfactory\`。
3. **配置 firebase.json**：
   - \`"site": "antigravity2-tutorial"\`
   - \`"public": "dist"\`
   - 設定單頁應用重導向：\`"rewrites": [{"source": "**", "destination": "/index.html"}]\`
4. **發布上線**：\`firebase deploy --only hosting\`！
幾秒之內，全世界的學習者就能透過專屬網址造訪你的成果！`,
        callout: {
          type: "note",
          text: "本教學網站即是按照此完整流程即時建置並發布於 Google Firebase 全球邊緣節點！"
        }
      }
    ],
    quiz: [
      {
        id: "q-9-1",
        question: "在為 React 單頁應用（SPA）設定 firebase.json 時，為什麼需要加入 rewrites 規則指向 /index.html？",
        options: [
          "為了加快電腦開機速度",
          "確保使用者在任意子路由重新整理網頁時，伺服器都能正確回傳 index.html 交由前端路由處理，避免 404 錯誤",
          "為了把所有圖片轉換為 GIF 格式",
          "因為 Firebase 只支援名為 index.html 的單一檔案"
        ],
        correctAnswers: [1],
        explanation: "SPA 依靠前端 JavaScript 控制頁面路徑，設定 rewrites: [ { source: '**', destination: '/index.html' } ] 能防止使用者在深層路徑重整時遭遇 404 Not Found。"
      },
      {
        id: "q-9-2",
        question: "在建置 React 專案前，執行哪一個指令可以先行驗證所有 TypeScript 型別是否完全正確？",
        options: [
          "npx tsc --noEmit",
          "rm -rf *",
          "format c:",
          "cat index.html"
        ],
        correctAnswers: [0],
        explanation: "npx tsc 或 npx tsc --noEmit 會對整份專案進行嚴格的型別檢查，且不產出實體檔案，是品質閉環中的黃金守門員。"
      }
    ],
    practice: {
      id: "p-9",
      title: "動手演練：模擬執行專案生產建置指令",
      prompt: "在虛擬終端中輸入「npm run build」檢查專案的編譯產物。",
      hint: "輸入「npm run build」執行打包指令。",
      expectedCommands: ["npm run build", "vite build"],
      mockOutput: `> antigravity2-tutorial-web@1.0.0 build
> tsc && vite build

vite v5.4.2 building for production...
✓ 38 modules transformed.
dist/index.html                   0.82 kB │ gzip:  0.42 kB
dist/assets/index-Di9xL3kM.css    4.12 kB │ gzip:  1.28 kB
dist/assets/index-C8kmN2aP.js   182.40 kB │ gzip: 58.10 kB
✓ built in 420ms
[驗證成功] 生產建置順利完成！零警告、零錯誤，隨時可發布至 Firebase Hosting！`,
      explanation: "太棒了！這正是品質閉環的威力：建置成功才能確保部署到線上時百分之百穩定！"
    }
  },

  // 第 10 課
  {
    id: 10,
    title: "第 10 課：實戰範例二：如何製作現代簡報與互動視覺化",
    subtitle: "結合 Generative UI、Mermaid 圖表、Marp 與 SVG 動態儀表板",
    category: "進階範例",
    estimatedMinutes: 20,
    tags: ["現代簡報", "Generative UI", "Mermaid", "資料視覺化", "Marp"],
    icon: "Presentation",
    summary: "寫投影片是許多工程師的惡夢。本課示範如何利用 Antigravity 2 將凌亂的代碼和架構想法，秒級轉化為專業級的技術簡報與可互動的架構流程圖！涵蓋 Mermaid 語法、Generative UI 內嵌小工具與 Marp Markdown 簡報自動化。",
    objectives: [
      "掌握在 Antigravity Artifacts 中繪製各類 Mermaid 架構圖（Flowchart、Sequence、ER圖）",
      "利用內建 generative_ui 技能生成可互動的即時 SVG / Canvas 動態走勢圖",
      "學會使用 Marp CLI 或 Reveal.js 將 Markdown 筆記一鍵轉為高質感 HTML/PDF 簡報",
      "學會用 AI 提取重點並為主管或技術會議量身訂做投影片講稿"
    ],
    sections: [
      {
        id: "sec-10-1",
        title: "1. 讓架構一目了然：Mermaid 流程圖大師",
        content: `在溝通複雜系統時，文字再多也不如一張清晰的架構圖。Antigravity 的 Artifact 引擎原生支援 Mermaid：
- \`flowchart TD\` / \`flowchart LR\`：繪製系統流程與資料流向。
- \`sequenceDiagram\`：呈現 Client、Server 與 DB 之間的 API 呼叫時序。
- \`classDiagram\` 與 \`erDiagram\`：表達資料庫結構。

只要在對話中說：「請用 Mermaid 畫出使用者登入至 JWT 驗證的時序圖」，Agent 就會立即產出可預覽的架構圖！`,
        codeSnippet: {
          language: "mermaid",
          caption: "典型 Agent 協同架構 Mermaid 範例",
          code: `sequenceDiagram
    autonumber
    actor User as 使用者
    participant Agent as Antigravity 主代理
    participant Sub as Research 子代理
    participant System as Linux Mint 終端

    User->>Agent: /goal 實作互動網站
    Agent->>Sub: 探勘 Firebase Hosting 規範
    Sub-->>Agent: 回傳部署最佳實踐
    Agent->>System: 執行 npm run build
    System-->>Agent: 建置成功 (Code 0)
    Agent->>User: 交付部署上線網址`
        }
      },
      {
        id: "sec-10-2",
        title: "2. 使用 Marp 將 Markdown 秒變高質感技術簡報",
        content: `傳統簡報軟體（PowerPoint、Keynote）調整排版往往浪費數小時。
現代資深工程師的秘密武器是 **Marp（Markdown Presentation Ecosystem）**：
1. 讓 Agent 撰寫一份包含 \`marp: true\` 與分頁符號（\`---\`）的 Markdown 檔案。
2. 透過終端執行 \`npx @marp-team/marp-cli presentation.md -o presentation.html\`。
3. 瞬間得到一份具備現代響應式排版、支援簡報筆記、代碼高亮的專業級 HTML 簡報！`,
        callout: {
          type: "tip",
          text: "搭配 Antigravity 的 generate_image 技能，還能自動為每一頁簡報生成專屬的高解析概念配圖！"
        }
      },
      {
        id: "sec-10-3",
        title: "3. Generative UI：可互動的資料圖表",
        content: `遇到需要給使用者調整參數的場合，例如「預估系統並發負載與伺服器成本」：
- Agent 可直接透過 \`generative_ui\` 技能輸出包含 HTML Range Slider 的互動組件。
- 使用者拖曳滑桿，畫面上的 SVG 折線圖即時隨之計算更新。
- 這徹底打破了「靜態文字問答」的藩籬，帶來前所未有的視覺化協同體驗！`,
        callout: {
          type: "note",
          text: "Generative UI 不僅美觀，更是向利害關係人演示技術原型的最佳利器。"
        }
      }
    ],
    quiz: [
      {
        id: "q-10-1",
        question: "在 Antigravity 的 Markdown Artifact 中，若想繪製系統組件之間的時序互動，推薦使用哪種圖表語法？",
        options: [
          "HTML <table> 表格",
          "Mermaid sequenceDiagram",
          "ASCII 字符畫",
          "Word 藝術字"
        ],
        correctAnswers: [1],
        explanation: "Mermaid sequenceDiagram 是業界標準的時序圖繪製語言，Antigravity 的 Artifact 能直接將其渲染為清晰漂亮的向量圖表。"
      },
      {
        id: "q-10-2",
        question: "Marp 工具的主要特色是什麼？",
        options: [
          "專為 Linux 核心編譯設計的除錯器",
          "將結構化的 Markdown 文件一鍵編譯成高質感的 HTML 或 PDF 簡報投影片",
          "用來壓縮 MP3 音樂",
          "取代 Bash 的終端外殼"
        ],
        correctAnswers: [1],
        explanation: "Marp 能讓工程師專注於 Markdown 文字與邏輯，並自動編譯輸出精美的現代簡報投影片。"
      }
    ],
    practice: {
      id: "p-10",
      title: "動手演練：檢驗 Mermaid 繪圖語法標籤",
      prompt: "在虛擬終端中輸入指令「echo 'flowchart TD; A-->B;'」，模擬測試流程圖語法片段。",
      hint: "輸入「echo 'flowchart TD; A-->B;'」。",
      expectedCommands: ["echo 'flowchart TD; A-->B;'", "echo flowchart TD", "echo mermaid"],
      mockOutput: `flowchart TD; A-->B;
[語法驗證通過] Mermaid 引擎已成功解析！節點 A 到節點 B 的指向關係完整無誤！`,
      explanation: "太棒了！Mermaid 的簡潔直觀讓架構交流變得前所未有的輕鬆。"
    }
  },

  // 第 11 課
  {
    id: 11,
    title: "第 11 課：實戰範例三：如何整理海量資料與自動化維護",
    subtitle: "日誌海撈除錯、大規模程式碼重構、自動化自癒（Self-Healing）與報表產出",
    category: "進階範例",
    estimatedMinutes: 20,
    tags: ["海量資料整理", "日誌除錯", "代碼重構", "自動化維護", "Self-Healing"],
    icon: "FileSpreadsheet",
    summary: "身為工程師，我們常常被堆積如山的日誌（Log）、成百上千個待重構的舊檔案與散落各處的 CSV 報表淹沒。本課帶你親歷 Antigravity 2 真正的後台威力：如何撰寫自癒管線、秒級檢索海量錯誤日誌、執行跨檔案重構，並產出精煉的彙整報告！",
    objectives: [
      "學會利用 Antigravity 快速消化 GB 級日誌檔案並精準抓出關鍵崩潰原因（Root Cause）",
      "掌握跨多檔案的批量代碼重構（Batch Refactoring）與型別升級策略",
      "實踐「品質自癒循環（Self-Healing Loop）」：編譯報錯 -> 自動修正 -> 複查驗證",
      "利用背景排程（schedule）建立無人看守的專案日常巡檢機器人"
    ],
    sections: [
      {
        id: "sec-11-1",
        title: "1. 實戰場景：從混亂的巨大日誌中揪出致命 Bug",
        content: `當伺服器突然報錯時，日誌往往多達數十萬行。新手往往手動捲動尋找，耗費數小時。
在 Antigravity 2 中：
1. Agent 利用 Linux 的強大終端工具（\`grep -C 5 "ERROR" error.log\`、\`awk\`、\`jq\`）在本地沙盒快速過濾。
2. 僅將過濾出的**核心堆疊追蹤（Stack Trace）**讀入大腦分析。
3. 對照專案源碼，瞬間定位是哪一行程式碼引發了 NullPointerException 或記憶體洩漏！`,
        callout: {
          type: "tip",
          text: "不要把整份幾百 MB 的日誌直接拖入對話框；善用終端工具預過濾，是保護大腦 Context 最專業的作法！"
        }
      },
      {
        id: "sec-11-2",
        title: "2. 大規模程式碼升級與自動修復自癒（Self-Healing）",
        content: `假設你的專案要將 React 17 升級至 React 18，或者要將 JavaScript 專案全量改寫為 TypeScript：
- 你只需下達：\`請分析 src 目錄下所有 .js 檔案，轉換為嚴格 TypeScript 模式並補充型別\`。
- Agent 會循序調用 \`view_file\`、\`write_to_file\` 與 \`replace_file_content\` 進行改造。
- 每改完一個模組，自動執行 \`npx tsc\`。
- 如果編譯出錯，**自動讀取報錯行數、自動修正語法，再次編譯驗證**，直到整個專案完全 0 錯誤通過！這就是令人驚嘆的自動自癒工程！`,
        codeSnippet: {
          language: "bash",
          caption: "典型的自動自癒建置驗證迴圈指令",
          code: `# Agent 內部自動反覆迭代的驗證流程
npx tsc --noEmit || (echo "檢測到型別錯誤，啟動自我修復" && fix_code)`
        }
      },
      {
        id: "sec-11-3",
        title: "3. 巡檢機器人：透過 schedule 定時清理與產出報表",
        content: `你還可以為專案掛載守護排程：
- 例如：\`schedule(Prompt='每日凌晨三點檢查依賴項安全性漏洞並產出報告', CronExpression='0 3 * * *', IsDaemon=true)\`。
- Agent 會在背景定時執行 \`npm audit\`，並將結果整理成精美的 Markdown 摘要，存放在大腦目錄中供你早晨審閱！`,
        callout: {
          type: "note",
          text: "有了背景定時巡檢，軟體專案從此告別陳年技術債與隱蔽漏洞！"
        }
      }
    ],
    quiz: [
      {
        id: "q-11-1",
        question: "面對幾百 MB 的龐大系統日誌檔案，交給 Antigravity 分析時的最佳實踐是什麼？",
        options: [
          "將整個日誌檔案直接貼在對話視窗中，塞爆上下文",
          "讓 Agent 透過終端命令（grep、awk、jq）先行過濾出錯誤關鍵字與堆疊追蹤，再針對性分析",
          "立即刪除日誌檔案裝作沒事",
          "關閉所有錯誤記錄功能"
        ],
        correctAnswers: [1],
        explanation: "在 Linux 沙盒終端中使用 grep/awk/jq 先行提取關鍵堆疊追蹤，能最大化節約 Token 並極速揪出問題根因。"
      },
      {
        id: "q-11-2",
        question: "在長期的自動化維護任務中，如何讓 Agent 每天固定時間執行代碼健康檢查？",
        options: [
          "使用 schedule 工具設定 Cron 表達式（如 0 3 * * *）",
          "每天由人手動在半夜起床按 Enter 鍵",
          "在終端執行永遠不結束的 while true { sleep 86400 }",
          "拔掉電腦電源線"
        ],
        correctAnswers: [0],
        explanation: "Antigravity 的 schedule 工具支援標準 5 欄位 Cron 表達式，能優雅且不耗資源地在系統背景執行定期維護任務。"
      }
    ],
    practice: {
      id: "p-11",
      title: "動手演練：模擬終端日誌過濾與搜尋",
      prompt: "在虛擬終端中輸入指令「grep -i 'error' package.json」模擬文字模式匹配篩選。",
      hint: "輸入「grep -i 'build' package.json」或「grep -i 'error'」。",
      expectedCommands: ["grep -i 'error' package.json", "grep -i 'build' package.json", "grep build package.json"],
      mockOutput: `    "build": "tsc && vite build",
[過濾匹配完成] 順利擷取關鍵行！透過正規表達式，Agent 能在百萬日誌中秒級抽絲剝繭！`,
      explanation: "太棒了！Linux 經典管道與文字工具與 AI Agent 的結合，是現代維護效率的最大躍進！"
    }
  },

  // 第 12 課
  {
    id: 12,
    title: "第 12 課：主流 AI Agent 大對決與未來選型指引",
    subtitle: "橫向深度對決：Antigravity 2 vs Claude Code vs ChatGPT vs Open Code vs Pi Agent",
    category: "橫向評比",
    estimatedMinutes: 25,
    tags: ["主流評比", "Claude Code", "ChatGPT", "Open Code", "Pi Agent", "選型指南"],
    icon: "Layers",
    summary: "當今 AI 工具百花齊放，到底誰才是最適合你手頭任務的神兵利器？本課跳脫單一視角，針對業界五大最具代表性的 AI 方案（Google Antigravity 2、Anthropic Claude Code、OpenAI ChatGPT、開源 Open Code / OpenHands、Inflection Pi Agent）進行客觀、全面、多維度的工程評比！",
    objectives: [
      "全面認識五大主流 AI 工具的架構本質與其代表的工程派系",
      "從「終端整合度」、「多代理協同」、「自癒閉環」、「規則記憶」四大維度剖析各家優劣",
      "掌握不同開發場景（架構設計、日常改Bug、全自主系統建置、日常閒聊）的最佳工具選型組合拳",
      "展望未來 AI 輔助開發（AI-augmented Development）的演進趨勢"
    ],
    sections: [
      {
        id: "sec-12-1",
        title: "1. 五大 AI 工具基本盤全景總覽",
        content: `目前的 AI 輔助市場已經從早期的「問答對話」分化為數個截然不同的陣營：

1. **Google Antigravity 2 (for Linux / Desktop)**：
   - **定位**：全功能桌面級自主代理工作站。
   - **核心特點**：整合 Linux 深度終端沙盒、背景任務非同步管理、多子代理平行調度、持久化大腦目錄與一鍵雲端部署。

2. **Claude Code (Anthropic)**：
   - **定位**：輕量級終端 CLI 沉浸式高手。
   - **核心特點**：極致純文字 TUI，依賴 Sonnet 3.5/3.7 的強大推理，專注於代碼庫快速閱讀與微型重構。

3. **ChatGPT Canvas / Code Interpreter (OpenAI)**：
   - **定位**：大眾普及度最高、直覺並排編輯的雲端沙盒助手。
   - **核心特點**：雲端虛擬 Python 環境，適合架構討論與單一演算法原型推演，但無法直接操控使用者本機檔案與終端。

4. **Open Code / OpenHands (All-Hands AI)**：
   - **定位**：開源社群全自動探索旗艦。
   - **核心特點**：完全開源、Docker 沙箱隔離、可自帶本地開源大模型（如 Llama 3、DeepSeek），隱私度極高但配置繁重。

5. **Pi Agent (Inflection Pi)**：
   - **定位**：高情商個人對話伴侶。
   - **核心特點**：無終端、無代碼編譯能力，專注於概念拆解、語音談心與思維發想。`,
        callout: {
          type: "tip",
          text: "沒有任何單一工具能贏下所有場景，理解各自的邊界是高級架構師的必修課！"
        }
      },
      {
        id: "sec-12-2",
        title: "2. 多維度綜合能力評比表",
        content: `以下依據工程實戰指標進行雷達矩陣評分（滿分 10 分）：

| 評比維度 | Antigravity 2 | Claude Code | ChatGPT | Open Code | Pi Agent |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **本機終端整合度** | **10.0** | 9.8 | 6.2 | 8.8 | 2.0 |
| **多代理協調 (Multi-Agent)** | **9.8** | 7.8 | 5.5 | 8.0 | 2.0 |
| **自主自癒閉環 (Self-Healing)** | **9.6** | 9.0 | 7.2 | 8.4 | 4.0 |
| **規則持久化 (AGENTS.md)** | **9.7** | 8.5 | 7.5 | 7.8 | 6.0 |
| **生態豐富度 (Skill/MCP)** | **9.5** | 8.2 | 8.0 | 8.6 | 3.5 |
| **上手親和力 (Ease of Use)** | 9.2 | 8.6 | **9.5** | 7.4 | **9.8** |
| **綜合推薦指數** | **9.8 👑** | 9.1 | 8.4 | 8.7 | 6.8 |`,
        callout: {
          type: "note",
          text: "Antigravity 2 在本機工程落地、多 Agent 協同與自動修復維度上表現最為全面拔尖。"
        }
      },
      {
        id: "sec-12-3",
        title: "3. 終極選型指引：何時用誰？",
        content: `### 實戰選型決策樹：
- **當你需要「在本地 Linux 從零建置一個完整專案並測試部署」時** 👉 **首選 Antigravity 2**（利用 \`/goal\` 與沙盒終端一氣呵成）。
- **當你只想「在終端裡快速修一個小 Bug 或發起 Git commit」時** 👉 **Claude Code 或 Antigravity CLI**（輕巧俐落）。
- **當你想「隨意聊聊商業模式、推導一段虛擬演算法邏輯」時** 👉 **ChatGPT**（隨處可用）。
- **當公司「絕對禁止任何代碼上傳外部伺服器、必須完全本地開源」時** 👉 **Open Code + 本地 Ollama**。
- **當你需要「開車時用語音整理思路或抒發工作壓力」時** 👉 **Pi Agent**。`,
        callout: {
          type: "important",
          text: "恭喜你！完成此課程後，你已經掌握了 Antigravity 2 與當代最強 AI 代理工具的核心心法，現在就開啟你的下一段自主開發旅程吧！"
        }
      }
    ],
    quiz: [
      {
        id: "q-12-1",
        question: "若你的專案需要直接在本機 Linux Mint 終端執行 npm run build、修復報錯並透過 Firebase 部署，下列哪一個工具最不適合承擔此任務？",
        options: [
          "Antigravity 2",
          "Claude Code",
          "Pi Agent",
          "Open Code"
        ],
        correctAnswers: [2],
        explanation: "Pi Agent 定位為個人日常對話與同理心伴侶，完全不具備任何本機 Shell 終端操作與工程代碼編譯工具能力。"
      },
      {
        id: "q-12-2",
        question: "為什麼 Antigravity 2 在多代理協同（Multi-Agent）與自主閉環（Self-Healing）上相較於傳統網頁 AI 有巨大優勢？",
        options: [
          "因為它的電腦螢幕解析度比較高",
          "因為具備 invoke_subagent 平行派工大腦、Reactive Wakeup 喚醒機制、終端沙盒與直接修改專案原始檔的完整閉環",
          "因為它完全不使用任何神經網絡技術",
          "因為它每天只能提問三次"
        ],
        correctAnswers: [1],
        explanation: "Antigravity 2 深度融合了本機作業系統操作權、事件驅動的非同步喚醒、多子代理派工與雙層規則約束，形成了真正的自主閉環。"
      }
    ],
    practice: {
      id: "p-12",
      title: "動手演練：結業大典！驗證你的 Antigravity 知識庫",
      prompt: "在虛擬終端中輸入「agy --version」或「echo 'Antigravity 2 Mastery Complete!'」為自己慶祝結業！",
      hint: "輸入「echo 'Antigravity 2 Mastery Complete!'」。",
      expectedCommands: ["echo 'Antigravity 2 Mastery Complete!'", "agy --version", "agy version", "echo complete"],
      mockOutput: `Antigravity 2 Mastery Complete!
🏆 恭喜結業！你已經精通 Antigravity 2 的規則、大腦、設定、Skills、MCP、工具群與多代理協同架構！
隨時準備在 Linux Mint 上施展你的自主開發魔法！`,
      explanation: "太棒了！恭喜你完成了整套課程的終極演練！現在你已經具備完全獨立駕馭 Antigravity 2 的強悍實力！"
    }
  }
];
