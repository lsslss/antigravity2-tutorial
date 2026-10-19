import { AIComparison } from '../types';

export const AI_COMPARISONS: AIComparison[] = [
  {
    name: "Antigravity 2 (for Linux)",
    badge: "本機主控與多 Agent 協同首選",
    provider: "Google DeepMind",
    avatar: "🚀",
    score: 9.8,
    dimensions: {
      terminalIntegration: 10,
      multiAgentOrchestration: 9.8,
      autonomousSelfHealing: 9.6,
      rulePersistence: 9.7,
      toolEcosystem: 9.5,
      easeOfUse: 9.2
    },
    highlights: [
      "專屬 Linux Mint / Desktop 整合，兼備 Terminal Sandbox 與高彈性 Bypass 授權機制",
      "原生支援 /goal、/plan 等斜線指令，具備多子代理（Subagent）並行派工與 Reactive Wakeup 通訊",
      "雙層規則治理（全域 GEMINI.md + 專案 AGENTS.md），嚴格落實品質自癒循環（Self-Healing Loop）",
      "開箱即用支援 Skill 擴充、MCP 協議整合、Generative UI 與 Firebase 一鍵發布"
    ],
    limitations: [
      "需要本機具備相應開發環境（Node.js、Python、Git 等）以發揮終端全自動威力",
      "在安全沙盒模式下需合理理解網路請求（如 npm install、firebase deploy 需要 BypassSandbox 權限）"
    ],
    architectureSummary: "Electron 桌面核心 + 獨立後端 Agent Daemon + 雙向 IPC 溝通 + 結構化日誌（Transcript JSONL）與大腦知識庫持久化",
    terminalStyle: "內建深度沙盒終端，支援背景任務非同步託管（manage_task）、定時排程（schedule）與自動失敗重試",
    verdict: "全方位兼顧本機專案掌控度、自動化程度與企業級安全的最頂級自主開發工作站。"
  },
  {
    name: "Claude Code",
    badge: "終端 CLI 沉浸式高手",
    provider: "Anthropic",
    avatar: "⚡",
    score: 9.1,
    dimensions: {
      terminalIntegration: 9.8,
      multiAgentOrchestration: 7.8,
      autonomousSelfHealing: 9.0,
      rulePersistence: 8.5,
      toolEcosystem: 8.2,
      easeOfUse: 8.6
    },
    highlights: [
      "極致輕量的純文字終端互動介面，專注於 CLI 快速編輯、Git 工作流程與代碼審查",
      "強大的 Claude 3.5 Sonnet / 3.7 推理能力，能精準捕捉程式碼上下文與小型重構",
      "支援 CLAUDE.md 作為專案專屬規範檔案"
    ],
    limitations: [
      "缺乏圖形化介面（GUI）與多子代理視覺化面板（如 Artifacts、Subagents 監控）",
      "對於非純文字任務（例如 Generative UI 預覽、瀏覽器模擬與複雜多進程託管）較受限",
      "計費依據終端 Token 即時消耗，大型專案連續迭代成本較為顯著"
    ],
    architectureSummary: "Node.js CLI 工具直接串接 Anthropic API，透過本地 Shell 執行命令與檔案編輯",
    terminalStyle: "純 TUI 互動，即時要求使用者確認命令，適合習慣鍵盤全控制的終端玩家",
    verdict: "喜愛純終端、習慣在 tmux / vim 中穿梭的高階開發者的極佳輕便助理。"
  },
  {
    name: "ChatGPT (Canvas / Code Interpreter)",
    badge: "雲端沙盒與通用思維庫",
    provider: "OpenAI",
    avatar: "🧠",
    score: 8.4,
    dimensions: {
      terminalIntegration: 6.2,
      multiAgentOrchestration: 5.5,
      autonomousSelfHealing: 7.2,
      rulePersistence: 7.5,
      toolEcosystem: 8.0,
      easeOfUse: 9.5
    },
    highlights: [
      "極高的大眾普及度與直覺的網頁聊天介面，學習門檻極低",
      "Canvas 介面提供文檔與代碼的並排編輯視窗",
      "雲端 Python 沙盒適合快速進行數據分析、繪製圖表與原型演算"
    ],
    limitations: [
      "無法直接存取使用者本機檔案系統或本機 Linux 終端環境",
      "無法直接執行本地專案的 npm run build、git push 或本地 Firebase 部署",
      "客製化規則（Custom Instructions / Projects）顆粒度較粗，不具備工程級工作區即時感知"
    ],
    architectureSummary: "雲端集中式 Web 架構，搭配隔離的雲端 Docker 容器做代碼解譯",
    terminalStyle: "僅限雲端虛擬 Python 執行環境，無本機 Linux 指令與硬體裝置控制權",
    verdict: "最適合架構設計探討、概念原型撰寫與單一函式除錯，但不適合作為全自主本機專案落地工具。"
  },
  {
    name: "Open Code / OpenHands",
    badge: "開源社群全自動探索者",
    provider: "All-Hands AI (Open Source)",
    avatar: "🛠️",
    score: 8.7,
    dimensions: {
      terminalIntegration: 8.8,
      multiAgentOrchestration: 8.0,
      autonomousSelfHealing: 8.4,
      rulePersistence: 7.8,
      toolEcosystem: 8.6,
      easeOfUse: 7.4
    },
    highlights: [
      "完全開源，支援透過 Docker 在本地部署自主 Agent 執行沙箱",
      "可自選後端 LLM 模型（透過 Ollama 本地模型、LiteLLM 或各家 API Key）",
      "提供網頁端瀏覽器檢視、終端機與代碼編輯器三合一界面"
    ],
    limitations: [
      "依賴 Docker 配置，本機 Linux 安裝與資源消耗門檻較高",
      "在長上下文與多步驟複雜任務時容易發生決策漂移（Context Drift），穩定度遜於商業級調校架構",
      "缺乏 Antigravity 2 般的無縫工作區持久化大腦（Brain Transcript）與系統級排程整合"
    ],
    architectureSummary: "Client-Server 容器化架構，以 Docker 虛擬化作為安全邊界",
    terminalStyle: "基於容器內部的 bash 終端，與實體宿主機環境有一定隔離度",
    verdict: "重視隱私、開源可審計、喜愛自行微調 Agent Prompt 與實驗 Docker 沙箱的技術狂熱者利器。"
  },
  {
    name: "Pi Agent (Inflection Pi / Conversational)",
    badge: "同理心與高情商對話顧問",
    provider: "Inflection AI",
    avatar: "💬",
    score: 6.8,
    dimensions: {
      terminalIntegration: 2.0,
      multiAgentOrchestration: 2.0,
      autonomousSelfHealing: 4.0,
      rulePersistence: 6.0,
      toolEcosystem: 3.5,
      easeOfUse: 9.8
    },
    highlights: [
      "極致自然的日常語言對話體驗與極高的同理心反饋",
      "優秀的概念啟發、專案架構思維發想與口語化問題拆解",
      "語音互動流暢，適合開車或散步時作為靈感伴侶"
    ],
    limitations: [
      "完全不具備工程開發終端能力、檔案寫入能力與程式碼編譯驗證工具",
      "無法安裝任何 MCP、Skill 或執行系統層級指令",
      "僅定位為個人對話夥伴（Personal AI），而非自主編程代理人（Coding Agent）"
    ],
    architectureSummary: "純雲端自然語言推理服務，專注對話風格與情感共鳴優化",
    terminalStyle: "無終端介面，僅供文字/語音對談",
    verdict: "適合專案企劃初期的頭腦風暴與日常放鬆，完全不可用於軟體開發與專案建置實戰。"
  }
];
