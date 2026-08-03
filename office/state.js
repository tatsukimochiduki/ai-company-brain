// 🔄 会社「ナエドコ」の、いまの状態。Claude Code がここを書き換えると、
//    オフィス画面（看板・掲示板・タスクリスト・社員の動き）に反映されます。
//
// ★ v2：すべての仕事は「タスク」を中心に回る。

window.AI_STATE = {
  updatedAt: "2026-08-03T15:10:00+09:00",

  setup: {
    completed: true,
    steps: [
      { key: "design", label: "会社を設計する（あなたの情報を聞く）", done: true },
      { key: "launch", label: "会社を立ち上げる（設立・就任式）", done: true },
      { key: "office", label: "オフィスを開く（この画面）", done: true },
      { key: "gmail", label: "メール連携（任意）", done: true },
      { key: "calendar", label: "カレンダー連携（任意）", done: true },
      { key: "line", label: "LINE連携：外出先から指示（任意）", done: true },
      { key: "skills", label: "社員の専用ツールをつなぐ（任意・導入オプション）", done: false },
    ],
  },

  business: {
    goalLabel: "月商目標（年内・2026年12月まで）",
    goalAmount: 20000000,
    current: 0,
    pipeline: [
      { label: "応募", count: 0 },
      { label: "返信", count: 0 },
      { label: "受注", count: 0 },
    ],
  },

  tasks: [
    { id: "T2", title: "ナエドコ看板LP → ホームページ化（構成拡張）", owner: "コピー",
      status: "review", progress: 75,
      hint: "index・about・worksのFV見出し候補（各3案）から選ぶだけ。選んだら実装に進みます",
      cmd: "T2の見出し、index/about/worksともに案1でOK。実装を進めて",
      log: [
        { time: "13:40", text: "社長承認：8ページ構成でOK。コピー→実装の順で進行開始" },
        { time: "13:55", text: "コピー：全8ページ分の見出し・本文・CTAが完成。index/about/worksは見出し候補3案ずつ、社長の選択待ち" },
        { time: "13:12", text: "メインコピーB確定。構成案＋コピー案をもとに実装開始" },
        { time: "13:20", text: "全9セクションをHTML/CSSで実装。スマホ対応・FAQ開閉つき。表示確認OK" },
        { time: "13:30", text: "社長より修正依頼：単発LPではなく、ホームページを兼ねる構成にしたい。追加したいページ・要素をヒアリング中" },
        { time: "13:35", text: "デザ：トップ＋会社概要＋サービス一覧＋サービス詳細3本＋実績＋問い合わせの8ページ構成案が完成。実績ゼロ問題は「自社サイトを実績第一号に」「準備中枠」「代表の実務経験で補完」で正直に解決" },
      ],
      deliverables: [
        { title: "ナエドコ看板LP（旧・単ページ版）", type: "コード", at: "13:20",
          path: "logs/ナエドコ看板LP.html", app: "Google Chrome" },
        { title: "サイト構成案 v2（8ページ・デザ）", type: "ドキュメント", at: "13:35",
          path: "logs/ナエドコ_サイト構成案_v2.md", app: "Google Chrome" },
        { title: "サイトコピー v2（8ページ分・コピー）", type: "ドキュメント", at: "13:55",
          path: "logs/ナエドコ_サイトコピー_v2.md", app: "Google Chrome" },
      ] },
    { id: "T1", title: "ナエドコ看板LPの企画（構成＋コピー）", owner: "デザ／コピー",
      status: "done", progress: 100,
      log: [
        { time: "13:00", text: "デザ＝構成設計、コピー＝キャッチ/CTA を並列で着手" },
        { time: "13:08", text: "デザ：9セクションのLP構成案が完成" },
        { time: "13:09", text: "コピー：キャッチ3案＋各セクション文言が完成" },
        { time: "13:12", text: "社長承認：方向OK・メインコピーはBに確定" },
      ],
      deliverables: [
        { title: "看板LP 構成案（デザ）", type: "ドキュメント", at: "13:08",
          path: "logs/ナエドコ看板LP_構成案.md", app: "Google Chrome" },
        { title: "看板LP コピー案（コピー）", type: "ドキュメント", at: "13:09",
          path: "logs/ナエドコ看板LP_コピー案.md", app: "Google Chrome" },
      ] },
  ],
  proposals: [],

  employees: [
    { name: "サトル", status: "idle", taskId: "" },
    { name: "デザ", status: "idle", taskId: "" },
    { name: "コード", status: "idle", taskId: "" },
    { name: "コピー", status: "idle", taskId: "" },
    { name: "ハック", status: "idle", taskId: "" },
    { name: "リサ", status: "idle", taskId: "" },
  ],

  links: [],

  activity: [
    { time: "15:10", who: "アイ", text: "LINE連携が完了。RenderにデプロイしてPCを閉じても外出先から指示できるようになりました" },
    { time: "14:20", who: "アイ", text: "メール・カレンダー連携が完了。オフィスの受信箱が社長の実データになりました" },
    { time: "13:40", who: "アイ", text: "T2：社長がサイト構成を承認。コピーが8ページ分の文章作成を開始しました" },
    { time: "13:35", who: "アイ", text: "T2：デザが8ページのサイト構成案を完成。社長の確認待ちです🖐" },
    { time: "13:30", who: "アイ", text: "T2：社長より修正依頼。単発LPからホームページ構成へ拡張することに" },
    { time: "13:20", who: "アイ", text: "T2：看板LPをコードが実装完了。表示確認OK・社長の確認待ちです🖐" },
    { time: "13:09", who: "アイ", text: "T1：看板LPの構成案とコピー案が完成（承認済み・メインコピーB）" },
    { time: "13:00", who: "アイ", text: "T1：デザとコピーが同時に動き始めました（看板LP企画）" },
    { time: "12:40", who: "アイ", text: "「ナエドコ」設立！望月社長のAI会社が動き始めました🌱" },
  ],

  command: { id: "inauguration-2026-08-03", type: "inauguration" },
};
