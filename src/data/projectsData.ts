export type ProjectCategory =
  | 'chrome-extension'
  | 'cli'
  | 'web-app'
  | 'desktop-app'
  | 'neovim-plugin'
  | 'mobile-app';

export const categoryLabels: Record<ProjectCategory, string> = {
  'chrome-extension': 'Chrome Extension',
  'cli': 'CLI / TUI',
  'web-app': 'Web App',
  'desktop-app': 'Desktop App',
  'neovim-plugin': 'Neovim Plugin',
  'mobile-app': 'Mobile App',
};

export const categoryOrder: ProjectCategory[] = [
  'chrome-extension',
  'cli',
  'web-app',
  'desktop-app',
  'neovim-plugin',
  'mobile-app',
];

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  name: string;
  description: string;
  category: ProjectCategory;
  links: ProjectLink[];
  image?: string | null;
  isHome?: boolean;
  tags?: string[];
}

export const projects: Project[] = [
  // ===== Chrome Extensions =====
  {
    name: 'TabyJourney',
    description: 'ブラウザ履歴のようにタブ移動を Back/Forward できる Chrome 拡張。Alt+[ / Alt+] やマウス戻る/進むに対応。',
    category: 'chrome-extension',
    isHome: true,
    image: '/assets/project/tabyjourney.png',
    tags: ['TypeScript'],
    links: [
      { label: 'Web Store', url: 'https://chromewebstore.google.com/detail/tabyjourney/aodjblbpfcccjlljpcfknakknbbladhb' },
      { label: 'GitHub', url: 'https://github.com/mei28/TabyJourney' },
    ],
  },
  {
    name: 'inkling',
    description: 'Web ページ上のカラーコード (#fff, rgb(), hsl()) をその場で着色プレビュー。6 種類の表示モードを組合せ可能。',
    category: 'chrome-extension',
    isHome: true,
    image: '/assets/project/inkling.png',
    tags: ['TypeScript'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mei28/inkling' },
    ],
  },
  {
    name: 'quickdeck',
    description: 'SlideShare をプレゼンモードで開く Chrome 拡張。',
    category: 'chrome-extension',
    image: '/assets/project/quickdeck.png',
    tags: ['JavaScript'],
    links: [
      { label: 'Web Store', url: 'https://chromewebstore.google.com/detail/pfibfibjnamhmjgaenlajeanecihncko' },
      { label: 'GitHub', url: 'https://github.com/mei28/quickdeck_chrome' },
    ],
  },

  // ===== CLI / TUI =====
  {
    name: 'bonsai',
    description: 'Git worktree を直感的に管理する CLI ツール。',
    category: 'cli',
    isHome: true,
    tags: ['Rust'],
    links: [
      { label: 'crates.io', url: 'https://crates.io/crates/bonsai-wt' },
      { label: 'GitHub', url: 'https://github.com/mei28/bonsai' },
    ],
  },
  {
    name: 'cliperge',
    description: '複数ファイルをまとめてクリップボードへコピーする CLI。LLM への入力に便利。',
    category: 'cli',
    isHome: true,
    tags: ['Rust'],
    links: [
      { label: 'crates.io', url: 'https://crates.io/crates/cliperge' },
      { label: 'GitHub', url: 'https://github.com/mei28/cliperge' },
    ],
  },
  {
    name: 'PortSage',
    description: 'プロセスとポートを横断的に閲覧・フィルタ・kill できる TUI。Kanagawa / Tokyo Night / Nord テーマ切替対応。',
    category: 'cli',
    tags: ['Rust'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mei28/PortSage' },
    ],
  },
  {
    name: 'utsushi',
    description: 'Keynote / PowerPoint / Google Slides 間のスライド変換 + テーマ正規化 + 差分検出 CLI (macOS)。',
    category: 'cli',
    tags: ['Python'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mei28/utsushi' },
    ],
  },

  // ===== Web App =====
  {
    name: 'SeeSS',
    description: 'リアルタイム HTML/CSS プレビューアプリ。Mobile/Tablet/Desktop ビューポート切替、CSS 分析機能付き。',
    category: 'web-app',
    image: '/assets/project/seess.png',
    tags: ['TypeScript'],
    links: [
      { label: 'Web', url: 'https://mei28.github.io/SeeSS/' },
      { label: 'GitHub', url: 'https://github.com/mei28/SeeSS' },
    ],
  },
  {
    name: 'Atchi',
    description: '「あっち」だけを頼りに散歩する、ルート案内をしない地図 PWA。コンパス矢印で目的地方向を示す。',
    category: 'web-app',
    isHome: true,
    image: '/assets/project/atchi.png',
    tags: ['TypeScript', 'PWA'],
    links: [
      { label: 'Web', url: 'https://mei28.github.io/Atchi/' },
      { label: 'GitHub', url: 'https://github.com/mei28/Atchi' },
    ],
  },
  {
    name: 'Yggdrasil',
    description: 'ディレクトリ構造をツリー形式で作成・可視化・エクスポートできる Web ツール。',
    category: 'web-app',
    image: '/assets/project/yggdrasil.png',
    tags: ['TypeScript'],
    links: [
      { label: 'Web', url: 'https://yggdrasil-tree.vercel.app' },
      { label: 'GitHub', url: 'https://github.com/mei28/Yggdrasil' },
    ],
  },
  {
    name: 'jupyeek',
    description: 'ブラウザで .ipynb を開いて閲覧できる Jupyter Notebook ビューア。',
    category: 'web-app',
    tags: ['TypeScript'],
    links: [
      { label: 'Web', url: 'https://mei28.github.io/jupyeek/' },
      { label: 'GitHub', url: 'https://github.com/mei28/jupyeek' },
    ],
  },
  {
    name: 'CHI 2025 Papers Explorer',
    description: 'CHI 2025 の採択論文を検索・閲覧できる Web アプリ。',
    category: 'web-app',
    tags: ['TypeScript'],
    links: [
      { label: 'Web', url: 'https://mei28.github.io/CHI-2025-Papers-explorer/' },
      { label: 'GitHub', url: 'https://github.com/mei28/CHI-2025-Papers-explorer' },
    ],
  },
  {
    name: 'Tick-Tock-Toe',
    description: 'React フロントエンドと Rust バックエンドで作った三目並べ Web ゲーム。',
    category: 'web-app',
    image: '/assets/project/tick-tock-toe.png',
    tags: ['TypeScript', 'Rust'],
    links: [
      { label: 'Web', url: 'https://tick-tock-toe.vercel.app' },
      { label: 'GitHub', url: 'https://github.com/mei28/Tick-Tock-Toe-frontend' },
    ],
  },
  {
    name: 'Hobeeeeee!!',
    description: '新しい趣味を発見・共有する Web サービス。enPiT 筑波大ワークショップ最優秀賞。',
    category: 'web-app',
    isHome: true,
    image: 'https://raw.githubusercontent.com/Seeeeee-D/Hobeeeeee/develop/static/title.png',
    links: [
      { label: 'Web', url: 'https://hobeeeeee.netlify.app/' },
    ],
  },

  // ===== Desktop App =====
  {
    name: 'Hotaru',
    description: 'アクティブウィンドウの周囲を蛍のような光のボーダーで縁取る macOS メニューバーアプリ。Tahoe (Liquid Glass) でのフォーカス把握を補助。',
    category: 'desktop-app',
    isHome: true,
    image: '/assets/project/hotaru.png',
    tags: ['Swift', 'macOS'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mei28/Hotaru' },
    ],
  },
  {
    name: 'Fathom',
    description: 'Tauri (Rust + React) 製のフロータイムベース作業時間管理アプリ。',
    category: 'desktop-app',
    isHome: true,
    image: '/assets/project/fathom.png',
    tags: ['Rust', 'TypeScript'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mei28/Fathom' },
    ],
  },

  // ===== Neovim Plugin =====
  {
    name: 'luminate.nvim',
    description: 'yank / paste / undo / redo した範囲を一瞬カラフルにハイライト。',
    category: 'neovim-plugin',
    tags: ['Lua'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mei28/luminate.nvim' },
    ],
  },
  {
    name: 'blink-bang-word-light.nvim',
    description: 'カーソル下の単語をバッファ全体でハイライト。',
    category: 'neovim-plugin',
    tags: ['Lua'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mei28/blink-bang-word-light.nvim' },
    ],
  },
  {
    name: 'slidev.nvim',
    description: 'Slidev (開発者向けスライドツール) との連携プラグイン。',
    category: 'neovim-plugin',
    tags: ['Lua'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mei28/slidev.nvim' },
    ],
  },
  {
    name: 'instant-rename.nvim',
    description: ':s コマンドを即時 global substitute に置き換える小型プラグイン。',
    category: 'neovim-plugin',
    tags: ['Lua'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mei28/instant-rename.nvim' },
    ],
  },
  {
    name: 'chromabuffer.nvim',
    description: '現在のカラースキームに連動した色コードを動的に生成。',
    category: 'neovim-plugin',
    tags: ['Lua'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mei28/chromabuffer.nvim' },
    ],
  },
  {
    name: 'qfc.nvim',
    description: 'quickfix をタイマーで自動クローズ。',
    category: 'neovim-plugin',
    tags: ['Lua'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mei28/qfc.nvim' },
    ],
  },
  {
    name: 'BigSheetGardna.nvim',
    description: '大きいファイルを検知して重い機能を自動オフにし、Neovim を軽快に保つ。',
    category: 'neovim-plugin',
    tags: ['Lua'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mei28/BigSheetGardna.nvim' },
    ],
  },
  {
    name: 'weview.nvim',
    description: 'エディタから事前定義/エイリアスで Web 検索を実行。',
    category: 'neovim-plugin',
    tags: ['Lua'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mei28/weview.nvim' },
    ],
  },
  {
    name: 'nvim-overleaf',
    description: 'Overleaf と双方向リアルタイム同期。保存で push、共同編集者の変更も自動取り込み。',
    category: 'neovim-plugin',
    tags: ['Lua'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mei28/nvim-overleaf' },
    ],
  },
  {
    name: 'toggleqf.nvim',
    description: 'quickfix のトグルプラグイン。',
    category: 'neovim-plugin',
    tags: ['Lua'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mei28/toggleqf.nvim' },
    ],
  },
  {
    name: 'swapwords.nvim',
    description: '隣接する単語を入れ替えるプラグイン。',
    category: 'neovim-plugin',
    tags: ['Lua'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mei28/swapwords.nvim' },
    ],
  },
  {
    name: 'codelens.nvim',
    description: 'codelens 表示用のプラグイン。',
    category: 'neovim-plugin',
    tags: ['Lua'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mei28/codelens.nvim' },
    ],
  },

  // ===== Mobile App =====
  {
    name: '災害医療タッチ',
    description: 'いつでもどこでも災害医療を学ぶ iOS / Android アプリ。',
    category: 'mobile-app',
    isHome: true,
    image: '/assets/project/touch.jpg',
    links: [
      { label: 'HP', url: 'http://www.disaster-medutainment.jp/learn_the_disaster_medical/' },
      { label: 'iOS', url: 'https://apps.apple.com/jp/app/%E7%81%BD%E5%AE%B3%E5%8C%BB%E7%99%82%E3%82%BF%E3%83%83%E3%83%81/id1139091258' },
      { label: 'Android', url: 'https://play.google.com/store/apps/details?id=go.aist.DMTouch' },
    ],
  },
  {
    name: '災害医療クエスト',
    description: 'ゲーム感覚で子ども向けの災害医療教育 iOS / Android アプリ。',
    category: 'mobile-app',
    isHome: true,
    image: '/assets/project/quest.jpg',
    links: [
      { label: 'HP', url: 'http://www.disaster-medutainment.jp/teaching_materials_for_junior/' },
      { label: 'iOS', url: 'https://apps.apple.com/jp/app/%E7%81%BD%E5%AE%B3%E5%8C%BB%E7%99%82quest/id1139119937' },
      { label: 'Android', url: 'https://play.google.com/store/apps/details?id=go.aist.DMQuest' },
    ],
  },
  {
    name: 'ジェスチャーミュージック',
    description: 'ジェスチャーインターフェースを用いた音楽演奏ゲーム。',
    category: 'mobile-app',
    isHome: true,
    image: '/assets/project/gesture-music.png',
    links: [
      { label: 'HP', url: 'http://gesture-interface.jp/download/gesture_music/' },
    ],
  },
  {
    name: 'SKYLock',
    description: 'RaspberryPi と自作 Android アプリを組み合わせたスマートロック + インターホンアプリ。DESIGNSPARK 掲載。',
    category: 'mobile-app',
    tags: ['Python', 'RaspberryPi'],
    links: [
      { label: 'HP', url: 'https://www.rs-online.com/designspark/skylock-jp' },
      { label: 'GitHub', url: 'https://github.com/mei28/SKY_LOCK' },
    ],
  },
];
