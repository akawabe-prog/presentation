import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BabyFace Brand Study | 社内共有資料",
  description:
    "BabyFace（ベビーフェイス）のブランド概要、製品体系、技術的特徴、ブランド資産を整理した社内共有資料。",
};

const sources = [
  {
    no: "01",
    label: "BabyFace 公式サイト",
    href: "https://www.babyface.co.jp/",
    note: "会社所在地・商品カテゴリー・販売情報",
  },
  {
    no: "02",
    label: "パフォーマンスステップ",
    href: "https://www.babyface.co.jp/billettop.htm",
    note: "開発思想・製造方法・製品機能・対応車種",
  },
  {
    no: "03",
    label: "フレーム／エンジンスライダー",
    href: "https://www.babyface.co.jp/frameslidertop.htm",
    note: "開発背景・材料・保護機能",
  },
  {
    no: "04",
    label: "Race Concept ハンドルキット",
    href: "https://www.babyface.co.jp/RaceConcept%20HandleKitTop.htm",
    note: "レース向け操作系製品",
  },
  {
    no: "05",
    label: "DUCATI Streetfighter V4 パーツ",
    href: "https://www.babyface.co.jp/Parts_DUCATI_StreetFighterV4_20.htm",
    note: "車種別の商品構成・公式掲載画像",
  },
  {
    no: "06",
    label: "Webike ブランド紹介",
    href: "https://www.webike.net/brand/72/",
    note: "市場から見たブランド評価",
  },
  {
    no: "07",
    label: "BikeBros アイテムレビュー",
    href: "https://www.bikebros.co.jp/vb/sports/sitemreview/gn-20111122/",
    note: "1984年の開業背景・海外展開の補足",
  },
  {
    no: "08",
    label: "カスタムジャパン コーポレートサイト",
    href: "https://www.customjapan.jp/",
    note: "BtoB会員基盤・5つの強み・ビジネスモデル",
  },
  {
    no: "09",
    label: "カスタムジャパン BtoBサイト",
    href: "https://www.customjapan.net/",
    note: "商品点数・検索・会員機能・コンテンツ導線",
  },
  {
    no: "10",
    label: "カスタムジャパン 採用・事業紹介",
    href: "https://www.customjapan.jp/recruit/",
    note: "EC・紙カタログのインハウス制作とダイレクトマーケティング",
  },
  {
    no: "11",
    label: "カスタムジャパン 沿革",
    href: "https://www.customjapan.jp/history.html",
    note: "カタログ、展示会、事業・販路開発の蓄積",
  },
  {
    no: "12",
    label: "BabyFace Official Friend Shop",
    href: "https://www.babyface.co.jp/FriendShop.htm",
    note: "公式認定3店舗・実物確認・取付・スタッフ相談（掲載更新日：2021年3月28日）",
  },
  {
    no: "13",
    label: "Webike BabyFace 商品一覧",
    href: "https://www.webike.net/brand/72/",
    note: "1,515商品、ランキング、レビュー、車種・カテゴリー導線（調査時表示）",
  },
  {
    no: "14",
    label: "Webike バックステップ比較記事",
    href: "https://news.webike.net/parts-gears/17360/",
    note: "BabyFace・STRIKER・OVER・AGRAS・YOSHIMURAの比較文脈",
  },
  {
    no: "15",
    label: "NAPS BabyFace 商品ページ",
    href: "https://www.naps-jp.com/Form/Product/ProductDetail.aspx?pid=4589981462060&shop=0",
    note: "価格・適合・画像・実店舗在庫・お気に入り・レビュー導線",
  },
  {
    no: "16",
    label: "2りんかん BabyFace関連記事",
    href: "https://2rinkan.jp/info/tag/%E3%83%99%E3%83%93%E3%83%BC%E3%83%95%E3%82%A7%E3%82%A4%E3%82%B9/",
    note: "ブランドタグ記事と店舗単位の商品入荷・取扱情報",
  },
  {
    no: "17",
    label: "ビックカメラ BabyFace 商品ページ",
    href: "https://www.biccamera.com/bc/item/12444773/",
    note: "価格・ポイント・配送・店舗受取によるモール型の露出例",
  },
];

const products = [
  {
    number: "01",
    tag: "CORE",
    name: "Performance Step Kit",
    jp: "パフォーマンスステップ／バックステップ",
    description:
      "ライダーの入力を車体へ伝える、ブランドの象徴。ポジション調整、軸受け、グリップ、シフトフィールを一体で設計する。",
    points: ["マルチポジション", "ダブルベアリング", "切削ロレット", "正／逆シフト対応製品"],
    image: "/babyface/step-kit-left.jpg",
    source: "02",
  },
  {
    number: "02",
    tag: "PROTECTION",
    name: "Slider & Protector",
    jp: "フレーム／エンジンスライダー・プロテクター",
    description:
      "耐久レースの『転倒後も復帰したい』という要求から生まれた保護系。ストリートからサーキットまで用途を拡張する。",
    points: ["衝撃を滑らせて緩和", "耐摩耗素材", "車種専用設計", "アクスル保護"],
    image: "/babyface/slider-detail.jpg",
    source: "03",
  },
  {
    number: "03",
    tag: "CONTROL",
    name: "Cockpit & Control",
    jp: "ハンドル・レバーガード・バーエンド",
    description:
      "フロントまわりの情報をダイレクトに伝え、操作と安全性を補完。Race Conceptとして競技志向の製品も展開する。",
    points: ["ハンドルキット", "レバーガード", "バーエンド", "セットツール"],
    image: "/babyface/lever-guard.jpg",
    source: "04",
  },
  {
    number: "04",
    tag: "DETAIL",
    name: "Detail Parts",
    jp: "車体ディテール・利便パーツ",
    description:
      "ヘルメットロック、レーシングフック、スタンドフック、キャップ類など。小さな接点にも機能と金属加工の統一感を持たせる。",
    points: ["ヘルメットロック", "レーシングフック", "キャップ類", "チタンアクスル"],
    image: "/babyface/rear-slider.jpg",
    source: "01",
  },
];

const nav = [
  ["01", "要約", "#summary"],
  ["02", "ブランド概要", "#overview"],
  ["03", "製品体系", "#products"],
  ["04", "技術と開発", "#engineering"],
  ["05", "ブランド資産", "#brand"],
  ["06", "顧客と市場", "#audience"],
  ["07", "CJ資産活用", "#activation"],
  ["08", "取扱競合", "#competition"],
  ["09", "全社連携", "#orchestration"],
  ["10", "課題と機会", "#opportunity"],
  ["11", "参照情報", "#sources"],
];

function SourceBadge({ no }: { no: string }) {
  const source = sources.find((item) => item.no === no);
  if (!source) return null;
  return (
    <a
      className="source-badge"
      href={source.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${source.label}を開く`}
    >
      S{no}
    </a>
  );
}

function SectionTitle({
  index,
  kicker,
  title,
  copy,
}: {
  index: string;
  kicker: string;
  title: string;
  copy?: string;
}) {
  return (
    <header className="section-title">
      <div className="section-index">{index}</div>
      <div>
        <p className="eyebrow">{kicker}</p>
        <h2>{title}</h2>
        {copy && <p className="section-copy">{copy}</p>}
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <aside className="side-rail">
        <a className="brand-mark" href="#top" aria-label="ページ上部へ">
          <img src="/babyface/logo.jpg" alt="BabyFace" />
        </a>
        <div className="rail-meta">
          <span>INTERNAL BRAND STUDY</span>
          <span>01 AUG 2026</span>
        </div>
        <nav aria-label="ページ内ナビゲーション">
          {nav.map(([no, label, href]) => (
            <a href={href} key={href}>
              <span>{no}</span>
              {label}
            </a>
          ))}
        </nav>
        <div className="rail-legend">
          <p><i className="dot fact" />確認できた事実</p>
          <p><i className="dot insight" />本資料の読み解き</p>
        </div>
      </aside>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow gold">BRAND RESEARCH / BABYFACE</p>
            <h1>
              操作は、<br />
              <span>精度</span>になる。
            </h1>
            <p className="hero-lead">
              ライダーと車体の間を、削り出しの機能美でつなぐ。<br />
              BabyFaceを理解するための社内共有資料。
            </p>
            <div className="hero-facts">
              <div><b>1984</b><span>チューニングショップとして開業</span></div>
              <div><b>OSAKA</b><span>大阪府富田林市を拠点</span></div>
              <div><b>GLOBAL</b><span>日本・北米・欧州へ展開</span></div>
            </div>
          </div>
          <figure className="hero-visual">
            <img
              src="/babyface/ducati-bike.jpg"
              alt="BabyFace製パーツを装着したDucati Streetfighter V4"
            />
            <figcaption>
              <span>OFFICIAL PRODUCT IMAGE</span>
              DUCATI STREETFIGHTER V4 <SourceBadge no="05" />
            </figcaption>
            <div className="hero-stamp" aria-hidden="true">BF</div>
          </figure>
        </section>

        <section className="summary-band" id="summary">
          <div className="summary-label">
            <span>EXECUTIVE</span>
            <b>SUMMARY</b>
          </div>
          <p>
            BabyFaceは、レース由来の要求を<span>高精度な機械加工</span>で市販品に落とし込み、
            ライダーの<span>操作性・安心感・所有満足</span>を同時に高める二輪カスタムパーツブランドである。
          </p>
          <div className="summary-keywords" aria-label="重要キーワード">
            <span>RACE PROVEN</span><span>PRECISION</span><span>CONTROL</span><span>FUNCTIONAL BEAUTY</span>
          </div>
        </section>

        <section className="content-section" id="overview">
          <SectionTitle
            index="02"
            kicker="BRAND OVERVIEW"
            title="レースの要求を、日常の操作へ。"
            copy="会社情報、公式の商品説明、外部メディアの記録から、ブランドの輪郭を整理する。"
          />
          <div className="overview-grid">
            <article className="fact-panel">
              <div className="panel-label"><i className="dot fact" />FACT</div>
              <p className="large-copy">
                1984年、大阪でレース用マシンのチューニングショップとして開業。
                現在は大阪府富田林市を拠点に、オートバイ用パーツを展開している。
                <SourceBadge no="01" /><SourceBadge no="07" />
              </p>
              <dl className="data-list">
                <div><dt>法人</dt><dd>株式会社ベビーフェイス</dd></div>
                <div><dt>所在地</dt><dd>大阪府富田林市錦織北1丁目5-3</dd></div>
                <div><dt>中核領域</dt><dd>二輪用パフォーマンス／プロテクションパーツ</dd></div>
                <div><dt>主な市場</dt><dd>日本、北米、欧州ほか</dd></div>
              </dl>
            </article>
            <article className="insight-panel">
              <div className="panel-label"><i className="dot insight" />INTERPRETATION</div>
              <p className="quote">「削り出し部品メーカー」ではなく、<br />“操作の質”をつくるブランド。</p>
              <p>
                ステップ、ハンドル、レバーガードはすべて、身体から車体へ入力を渡す接点にある。
                保護系製品も含め、ブランドの価値は「速さ」だけでなく、意図どおりに操れる信頼感にある。
              </p>
              <div className="formula">
                <span>RIDER</span><b>×</b><span>PRECISION PARTS</span><b>=</b><span>CONTROL</span>
              </div>
            </article>
          </div>

          <div className="history-strip" aria-label="ブランドの流れ">
            <div><b>1984</b><span>レース用マシンの<br />チューニングショップとして開業</span></div>
            <div className="history-line" />
            <div><b>IDEAL</b><span>削り出しパーツを中心に<br />オリジナル製品を展開</span></div>
            <div className="history-line" />
            <div><b>GLOBAL</b><span>北米・欧州を含む<br />世界のライダーへ</span></div>
            <div className="history-line" />
            <div><b>NOW</b><span>ストリートから<br />競技まで幅広く対応</span></div>
          </div>
        </section>

        <section className="content-section dark-section" id="products">
          <SectionTitle
            index="03"
            kicker="PRODUCT PORTFOLIO"
            title="車体との“接点”を中心に広がる製品群。"
            copy="主力から周辺商品までを、ユーザーにもたらす役割で分類した。"
          />
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.number}>
                <div className="product-image">
                  <img src={product.image} alt={`${product.jp}の公式商品画像`} />
                  <span>{product.number}</span>
                </div>
                <div className="product-body">
                  <p className="product-tag">{product.tag}</p>
                  <h3>{product.name}</h3>
                  <p className="product-jp">{product.jp} <SourceBadge no={product.source} /></p>
                  <p>{product.description}</p>
                  <ul>
                    {product.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="portfolio-note">
            <span>FITMENT BREADTH</span>
            <p>
              国産4メーカーに加え、DUCATI、BMW、TRIUMPH、KTM、APRILIA、MV AGUSTAなど幅広い車種を掲載。
              新旧モデルを横断する適合の厚みもブランド資産になっている。 <SourceBadge no="02" />
            </p>
          </div>
        </section>

        <section className="content-section" id="engineering">
          <SectionTitle
            index="04"
            kicker="ENGINEERING & DEVELOPMENT"
            title="感覚を、設計値へ変換する。"
            copy="公式説明から読み取れる、BabyFaceの開発ループと製品ディテール。"
          />
          <div className="process-flow">
            <div><small>01 / FIELD</small><b>RACE</b><span>MotoGP・AMA・全日本など<br />極限環境でテスト</span></div>
            <i>→</i>
            <div><small>02 / INPUT</small><b>FEEDBACK</b><span>サポートライダーの<br />感覚と言葉を収集</span></div>
            <i>→</i>
            <div><small>03 / DESIGN</small><b>CAD / CAM / CAE</b><span>位置・形状・剛性を<br />デジタル設計</span></div>
            <i>→</i>
            <div><small>04 / MAKE</small><b>MACHINING</b><span>マシニングセンタ・NC旋盤で<br />高精度に製作</span></div>
            <i>→</i>
            <div><small>05 / VALUE</small><b>CONTROL</b><span>ストリートからサーキットへ<br />確かな操作感を提供</span></div>
          </div>

          <div className="engineering-grid">
            <figure className="engineering-visual">
              <img src="/babyface/step-kit-right.jpg" alt="BabyFace パフォーマンスステップの右側" />
              <figcaption>削り出し形状とゴールドアルマイトが、機能と識別性を両立する。 <SourceBadge no="05" /></figcaption>
            </figure>
            <div className="engineering-points">
              <article><b>POSITION</b><h3>走る場所と身体に合わせる</h3><p>複数のステップ位置を選べるマルチポジション設計。車種ごとに操作姿勢を最適化する。</p></article>
              <article><b>FEEL</b><h3>滑らかさとガタの少なさ</h3><p>可動部の軸受けにベアリングをダブルで組み込み、ペダル操作の精度と滑らかさを追求。</p></article>
              <article><b>GRIP</b><h3>雨天でも入力を逃がさない</h3><p>バーエンドまで及ぶ切削ロレット加工により、濡れた環境でも足のグリップを確保。</p></article>
              <article><b>MATERIAL</b><h3>素材の特性を役割へ結びつける</h3><p>アルミニウム／ステンレス合金、ジュラコン®、ポリプロピレンなどを用途に応じて選定。</p></article>
            </div>
          </div>
        </section>

        <section className="content-section brand-section" id="brand">
          <SectionTitle
            index="05"
            kicker="BRAND ASSETS"
            title="BabyFaceらしさをつくる、5つの資産。"
            copy="ここからは、公式情報と製品表現を横断した本資料の読み解き。"
          />
          <div className="asset-grid">
            <article><span>01</span><b>削り出しの機能美</b><p>軽量化ポケット、稜線、ロレットなど、加工跡そのものが性能の説明になる。</p></article>
            <article><span>02</span><b>ゴールドの記憶性</b><p>ブラック／シルバーと並ぶ選択色の中でも、ゴールドアルマイトは視認性の高い象徴。</p></article>
            <article><span>03</span><b>レースの証明力</b><p>競技を広告的な装飾ではなく、テストとフィードバックの場として語れる。</p></article>
            <article><span>04</span><b>車種別の深さ</b><p>幅広いメーカーと年式への適合が、「自分の車体にもある」という発見につながる。</p></article>
            <article><span>05</span><b>触れて分かる価値</b><p>ポジション、作動感、グリップなど、装着後に身体で差を理解できる。</p></article>
          </div>
          <div className="brand-core">
            <div className="core-word"><span>FUNCTION</span><b>機能</b></div>
            <div className="plus">×</div>
            <div className="core-word"><span>PRECISION</span><b>精度</b></div>
            <div className="plus">×</div>
            <div className="core-word"><span>FORM</span><b>造形</b></div>
            <div className="equals">=</div>
            <div className="core-result"><small>PROVISIONAL BRAND CORE</small><b>意図どおりに、操れる。</b></div>
          </div>
          <div className="visual-language">
            <div className="color black"><span>BLACK</span><small>機能／コントラスト</small></div>
            <div className="color gold-bg"><span>GOLD</span><small>精密／象徴性</small></div>
            <div className="color silver"><span>SILVER</span><small>素材／加工感</small></div>
            <div className="visual-note">
              <b>観察メモ</b>
              <p>これは正式なブランドガイドではなく、現在の製品・WEB表現から抽出した色彩傾向。今後、ロゴ規定や正式カラーの確認が必要。</p>
            </div>
          </div>
        </section>

        <section className="content-section" id="audience">
          <SectionTitle
            index="06"
            kicker="AUDIENCE & VALUE"
            title="誰に、どの価値が届いているか。"
            copy="製品用途と公式の語りから想定した、主要な顧客セグメント。"
          />
          <div className="audience-table" role="table" aria-label="想定顧客と提供価値">
            <div className="table-row table-head" role="row">
              <span>SEGMENT</span><span>NEED</span><span>VALUE</span><span>PROOF</span>
            </div>
            <div className="table-row" role="row">
              <b>サーキット／競技ユーザー</b><span>正確な操作、最適な姿勢、転倒時の復帰性</span><span>操作系の精度と保護性能</span><span>レーステスト、Race Concept</span>
            </div>
            <div className="table-row" role="row">
              <b>スポーツ走行ユーザー</b><span>ワインディングでの操作感向上</span><span>身体に合わせた調整幅</span><span>マルチポジション、軸受け</span>
            </div>
            <div className="table-row" role="row">
              <b>ストリートカスタム層</b><span>性能と外観を同時に高めたい</span><span>機能美とカラー選択</span><span>削り出し造形、アルマイト</span>
            </div>
            <div className="table-row" role="row">
              <b>輸入車／希少車オーナー</b><span>自車に合う高品質な専用品</span><span>幅広い車種適合と専門性</span><span>国内外メーカーへの展開</span>
            </div>
          </div>
        </section>

        <section className="content-section cj-section" id="activation">
          <SectionTitle
            index="07"
            kicker="CUSTOM JAPAN × BABYFACE"
            title="流通資産を、ブランド成長装置へ。"
            copy="カスタムジャパンが既に持つ顧客接点・データ・販売支援・物流を、BabyFaceの認知から再購入まで一つの導線に組み直す。"
          />

          <div className="cj-numbers">
            <article><small>BtoB MEMBERS</small><b>約90,000</b><span>事業者会員</span><SourceBadge no="08" /></article>
            <article><small>BIKE DEALER REACH</small><b>90%+</b><span>国内バイク販売店の会員化率</span><SourceBadge no="08" /></article>
            <article><small>ONLINE ASSORTMENT</small><b>928,187</b><span>EC掲載商品数（調査時表示）</span><SourceBadge no="09" /></article>
            <article><small>FULFILLMENT</small><b>SAME DAY</b><span>対象商品の当日出荷体制</span><SourceBadge no="08" /></article>
          </div>

          <div className="cj-thesis">
            <div className="panel-label"><i className="dot insight" />STRATEGIC THESIS</div>
            <p>
              BabyFaceにとって最大の機会は、カスタムジャパンの<span>「広い販路」</span>を使うことだけではない。
              適合検索・購買履歴・電話相談・営業接点をつなぎ、<span>“この車種、この店、このタイミング”</span>に最適な提案を届けることである。
            </p>
          </div>

          <div className="cj-asset-grid">
            <article>
              <div className="asset-head"><span>01</span><b>BtoB会員網</b></div>
              <p>約9万の事業者会員と、国内バイク販売店の90%以上へ届くネットワーク。</p>
              <div><small>活用</small><strong>スポーツ車・輸入車に強い店舗を抽出し、全店一律ではなく優先店から育成。</strong></div>
            </article>
            <article>
              <div className="asset-head"><span>02</span><b>適合・購買データ</b></div>
              <p>型式、純正品番、車種情報を扱う独自の検索基盤と注文・閲覧履歴。</p>
              <div><small>活用</small><strong>車種×年式別の商品ページ、新型車通知、関連パーツのクロスセルへ。</strong></div>
            </article>
            <article>
              <div className="asset-head"><span>03</span><b>オウンドメディア</b></div>
              <p>WEB、約1,000ページの紙カタログ、記事、電子書籍、メルマガ、ブランド特設サイト。</p>
              <div><small>活用</small><strong>製品一覧から「操作感が変わる理由」を理解させる連続コンテンツへ。</strong></div>
            </article>
            <article>
              <div className="asset-head"><span>04</span><b>営業・カスタマーセンター</b></div>
              <p>ヒューマンセールスと電話相談から、店舗の課題や商品選定ニーズを収集。</p>
              <div><small>活用</small><strong>販売店向け研修、商談用チートシート、問い合わせ起点のFAQ改善へ。</strong></div>
            </article>
            <article>
              <div className="asset-head"><span>05</span><b>物流・品質管理</b></div>
              <p>国内外物流拠点、在庫管理、入出荷検品、当日出荷を支える運用。</p>
              <div><small>活用</small><strong>主力SKUの即納率を高め、装着予定日に間に合う安心をブランド価値へ。</strong></div>
            </article>
            <article>
              <div className="asset-head"><span>06</span><b>インハウス制作・展示</b></div>
              <p>ECと紙カタログの自社主導制作、展示会・モーターサイクルショーの経験。</p>
              <div><small>活用</small><strong>ブランド表現を統一し、削り出しの質感を実物・動画・紙面で一貫提示。</strong></div>
            </article>
          </div>

          <div className="activation-funnel">
            <header>
              <p className="eyebrow">ACTIVATION FUNNEL</p>
              <h3>認知ではなく、店頭で売り切るところまで設計する。</h3>
            </header>
            <div className="funnel-steps">
              <article><span>01</span><small>DISCOVER</small><b>知る</b><p>対象店舗別メルマガ、カタログ特集、ブランドハブ、展示会で「BabyFace＝操作の精度」を定着。</p><em>到達率／ブランドページ訪問</em></article>
              <article><span>02</span><small>UNDERSTAND</small><b>理解する</b><p>車種別適合ページ、60秒機能動画、純正との違い、ポジション解説でスタッフが説明できる状態へ。</p><em>適合検索／動画完視聴／資料DL</em></article>
              <article><span>03</span><small>ORDER</small><b>仕入れる</b><p>重点20〜30SKU、店舗タイプ別スターターセット、在庫表示、周辺パーツ同時提案で初回導入を簡単に。</p><em>新規導入店／初回発注率</em></article>
              <article><span>04</span><small>SELL THROUGH</small><b>販売する</b><p>実物サンプル、店頭POP、接客トーク、取付ガイド、スタッフ研修でエンドユーザーへの提案を支援。</p><em>店頭消化率／問い合わせ→受注</em></article>
              <article><span>05</span><small>REPEAT</small><b>継続する</b><p>新型車・追加適合通知、補修部品、スライダーやレバーガードの追加提案、導入店事例で再注文へ。</p><em>90日再注文率／併売率</em></article>
            </div>
          </div>

          <div className="campaign-packages">
            <header><span>THREE PRIORITY PROGRAMS</span><h3>最初に動かす3つの施策。</h3></header>
            <article>
              <span className="priority">P1</span>
              <div><small>FITMENT COMMERCE</small><b>車種別「操作アップグレード」導線</b><p>車種・年式を起点に、ステップ→レバーガード→スライダーを目的別に束ねる。型番を知る人だけでなく、「自分のバイクで何が変えられるか」から買える設計。</p></div>
              <strong>EC・適合DB・購買履歴</strong>
            </article>
            <article>
              <span className="priority">P2</span>
              <div><small>DEALER ENABLEMENT</small><b>BabyFace Pro Shop 50</b><p>スポーツ車・輸入車に強い50店舗を選び、実物展示、商品研修、優先在庫、店舗紹介コンテンツを一体提供。販売実績を見て段階的に拡大する。</p></div>
              <strong>会員網・営業・物流</strong>
            </article>
            <article>
              <span className="priority">P3</span>
              <div><small>PROOF CONTENT</small><b>「なぜ、この形なのか」シリーズ</b><p>開発者、加工、レーステスト、装着後の操作感を短尺動画・記事・紙面で連載。ゴールドの見た目から、設計根拠への理解を深める。</p></div>
              <strong>制作・記事・メルマガ・展示会</strong>
            </article>
          </div>

          <div className="roadmap">
            <header><p className="eyebrow">90-DAY ROADMAP</p><h3>小さく検証し、売れる型だけを拡張する。</h3></header>
            <div>
              <article><span>DAY 0–30</span><b>基盤を整える</b><ul><li>SKU・適合・在庫・画像の監査</li><li>重点20〜30SKUを選定</li><li>対象店舗を3セグメント化</li><li>ブランドメッセージを統一</li></ul></article>
              <article><span>DAY 31–60</span><b>50店舗で試す</b><ul><li>車種別ページと動画を公開</li><li>販売スタッフ向け15分研修</li><li>店頭サンプル／POPを設置</li><li>行動・発注データを計測</li></ul></article>
              <article><span>DAY 61–90</span><b>勝ち筋を拡張</b><ul><li>売れた車種・店舗へ在庫集中</li><li>閲覧・購入別フォロー配信</li><li>導入店の事例をコンテンツ化</li><li>次の100〜200店舗へ展開</li></ul></article>
            </div>
          </div>

          <div className="guardrails">
            <b>実行時の原則</b>
            <p><span>値引き依存にしない。</span> BabyFaceは精度と機能美を売るプレミアム寄りのブランドであり、一律クーポンより、適合精度・即納・説明力・取付支援を優先する。</p>
            <p><span>個人情報とメーカー権利を守る。</span> 購買・閲覧データは利用目的と社内規程に沿って集計・セグメント化し、公式画像・ロゴ・レース実績は許諾範囲を確認する。</p>
          </div>
        </section>

        <section className="content-section competition-section" id="competition">
          <SectionTitle
            index="08"
            kicker="CHANNEL COMPETITION"
            title="売上シェアは見えない。だが、見つけられ方は見える。"
            copy="取扱企業の実売・仕入シェアは公開されていないため、商品露出、検索、記事、レビュー、店頭体験という観測可能な代理指標で比較した。"
          />

          <div className="share-caveat">
            <div><span>SHARE STATUS</span><b>実売シェア：算出不可</b></div>
            <p>公開売上、チャネル別出荷、販売数量が確認できないため、以下は市場シェアではなく<strong>「公開情報上の可視性」</strong>の分析。カスタムジャパンの実売は、社内の受注・出荷データを接続して初めて評価できる。</p>
          </div>

          <div className="competition-thesis">
            <article><small>DIGITAL DISCOVERY</small><b>Webikeが先行</b><p>1,515商品にランキング、レビュー、編集記事、車種別導線を重ね、比較検討の入口を広く押さえる。</p><SourceBadge no="13" /></article>
            <article><small>PHYSICAL EXPERIENCE</small><b>用品店が担う</b><p>NAPS・2りんかんは在庫や店舗情報、公式Friend Shopは実物確認・取付・専門相談で購入不安を下げる。</p><SourceBadge no="12" /></article>
            <article><small>CUSTOM JAPAN WHITE SPACE</small><b>販売店の売り切る力</b><p>商品数の競争ではなく、適合データ、約9万会員、営業支援、物流を結び「説明→取付→再注文」を握る余地がある。</p><SourceBadge no="08" /></article>
          </div>

          <div className="competition-matrix" role="table" aria-label="BabyFace取扱チャネルの競合比較">
            <div className="competition-row competition-head" role="row">
              <span>CHANNEL</span><span>品揃え／権威性</span><span>検索露出</span><span>情報・レビュー</span><span>店頭体験</span><span>公開情報上の立ち位置</span>
            </div>
            <div className="competition-row" role="row">
              <b>BabyFace 公式</b><span><i className="level very-high" />非常に高い</span><span><i className="level medium" />中</span><span><i className="level low" />低〜中</span><span><i className="level low" />限定的</span><p>一次情報・技術権威。新製品更新は現行だが、HTML／PDFに情報が分散。</p>
            </div>
            <div className="competition-row featured" role="row">
              <b>Webike</b><span><i className="level very-high" />非常に高い</span><span><i className="level very-high" />非常に高い</span><span><i className="level very-high" />非常に高い</span><span><i className="level low" />低い</span><p><strong>デジタル可視性のリーダー。</strong> 商品・比較記事・ランキング・UGCを一体化。</p>
            </div>
            <div className="competition-row" role="row">
              <b>NAPS</b><span><i className="level high" />高い</span><span><i className="level high" />高い</span><span><i className="level medium" />中</span><span><i className="level high" />高い</span><p>商品詳細と実店舗在庫をつなぐOMO型。専門記事より購入・受取情報が中心。</p>
            </div>
            <div className="competition-row" role="row">
              <b>2りんかん</b><span><i className="level medium" />中</span><span><i className="level medium" />中</span><span><i className="level low" />低〜中</span><span><i className="level very-high" />非常に高い</span><p>店舗網と取付接点が強み。情報発信はブランド一括より店舗ニュースに分散。</p>
            </div>
            <div className="competition-row" role="row">
              <b>Ricoland公式Friend Shop</b><span><i className="level unknown" />公開不明</span><span><i className="level low" />低い</span><span><i className="level low" />低い</span><span><i className="level high" />高い</span><p>姫路・小牧・京都の3店舗。触れる、聞ける、取り付けられる専門接点。</p>
            </div>
            <div className="competition-row" role="row">
              <b>量販EC／モール</b><span><i className="level medium" />中</span><span><i className="level high" />高い</span><span><i className="level low" />低い</span><span><i className="level low" />低〜中</span><p>価格・ポイント・配送のロングテール露出。ブランド理解より条件比較に寄る。</p>
            </div>
            <div className="competition-row cj-row" role="row">
              <b>Custom Japan</b><span><i className="level unknown" />公開確認できず</span><span><i className="level low" />低い</span><span><i className="level low" />低い</span><span><i className="level unknown" />公開確認できず</span><p><strong>BtoB潜在力は非常に高い。</strong> 公開検索で専用ハブは確認できず、現状の実売は社内データで別途検証。</p>
            </div>
          </div>

          <div className="signal-grid">
            <article><span>1,515</span><b>Webike掲載商品</b><p>調査時のブランドページ表示。SKUの多さに加え、売れ筋・注目・満足度のランキングを持つ。</p><SourceBadge no="13" /></article>
            <article><span>3</span><b>公式Friend Shop</b><p>公式ページ掲載は3店舗。専門接客モデルの価値は高い一方、全国規模への拡張余地が大きい。</p><SourceBadge no="12" /></article>
            <article><span>1 HUB</span><b>CJ公開ブランドハブ</b><p>公開検索では確認できず。閉じたBtoBサイトの性質を踏まえ、非取扱いとは判断しない。</p><em>NOT CONFIRMED</em></article>
          </div>

          <div className="volume-table">
            <header><p className="eyebrow">INFORMATION VOLUME</p><h3>発信量は「件数」だけでなく、更新頻度と役割で見る。</h3></header>
            <div>
              <article><b>Webike</b><span>継続的</span><p>新製品ニュース、車種別特集、比較記事、商品・ランキング・レビュー。</p></article>
              <article><b>BabyFace公式</b><span>継続的／分散</span><p>価格・適合・製品情報は現行。ブランド理解に必要な情報が複数ページとPDFへ分散。</p></article>
              <article><b>NAPS</b><span>商品連動型</span><p>多数の商品詳細、店舗在庫、画像、価格情報。独自の技術解説は相対的に限定。</p></article>
              <article><b>2りんかん</b><span>店舗分散型</span><p>ブランドタグの蓄積は小さく、店舗ごとの入荷・キャンペーン情報が中心。</p></article>
              <article><b>Ricoland</b><span>低頻度</span><p>公式Friend Shop情報は価値が明確だが、公開ページの最終更新表示は2021年。</p></article>
              <article><b>Custom Japan</b><span>公開確認できず</span><p>BabyFace専用の公開コンテンツ量は確認できず。社内・会員限定配信は別途棚卸しが必要。</p></article>
            </div>
          </div>

          <div className="competitive-actions">
            <header><small>STRATEGIC RESPONSE</small><h3>Webikeの物量と競わず、販売店の成果を独占領域にする。</h3></header>
            <ol>
              <li><span>01</span><div><b>公開ブランドハブを作る</b><p>車種別適合、技術解説、正規取扱店を集約し、同名ブランド混在の検索ノイズを減らす。</p></div></li>
              <li><span>02</span><div><b>Pro Shop 50へ拡張</b><p>公式Friend Shopの「実物・相談・取付」を、販売実績で選んだ50店へ標準化して展開。</p></div></li>
              <li><span>03</span><div><b>販売店限定データを武器にする</b><p>適合チートシート、15分研修、接客トーク、即納対象SKUを会員向けに提供。</p></div></li>
              <li><span>04</span><div><b>月次で可視性を計測する</b><p>検索上位率、優先SKU掲載数、記事本数、レビュー、取扱店数に、社内の受注・消化・再注文を接続。</p></div></li>
            </ol>
          </div>

          <div className="share-dashboard">
            <b>「シェア」を2層で管理</b>
            <div><span>PUBLIC VISIBILITY SHARE</span><p>検索上位占有、インデックス商品数、記事・動画・レビュー量、取扱店表示を月次観測。</p></div>
            <div><span>ACTUAL SELL-THROUGH SHARE</span><p>社内受注、出荷、導入店数、店頭消化、90日再注文率をメーカー提供の市場母数と照合。</p></div>
          </div>
        </section>

        <section className="content-section orchestration-section" id="orchestration">
          <SectionTitle
            index="09"
            kicker="ONE TEAM ORCHESTRATION"
            title="一つの企画を、全チャネルで増幅する。"
            copy="PR、オウンドメディア、BtoB、BtoC、営業を個別最適にせず、一つの製品テーマ・素材・計測設計で連動させる全社運用案。"
          />

          <div className="orchestration-thesis">
            <div><span>CAMPAIGN CORE</span><b>1つの製品テーマ</b><p>例：新型車向け「操作精度アップグレード」</p></div>
            <i>→</i>
            <div><span>MASTER ASSETS</span><b>1つの素材セット</b><p>事実、適合、写真、動画、技術解説、FAQ</p></div>
            <i>→</i>
            <div><span>CHANNEL EXECUTION</span><b>7つの顧客接点</b><p>PR・メディア・SNS・BtoB・モール・自社EC・営業</p></div>
            <i>→</i>
            <div className="result"><span>BUSINESS RESULT</span><b>店頭消化と再注文</b><p>認知ではなく受注・取付・継続まで追う</p></div>
          </div>

          <div className="department-grid">
            <article>
              <header><span>01</span><div><small>CORPORATE PR</small><b>PR TIMES／メディア掲載</b></div></header>
              <p>企業ニュースではなく、ライダーと販売店にとっての「ニュース性」を作る。全SKUを配信せず、新型車、レース実証、Pro Shop、共同企画を発表トリガーにする。</p>
              <ul><li>PR TIMES：四半期1〜2本の大きな発表</li><li>媒体向け：画像、適合表、開発者コメントを一括提供</li><li>試着・取材会：編集部とショップを同日に招待</li></ul>
              <strong>指標：掲載数／指名検索／記事経由訪問</strong>
            </article>
            <article>
              <header><span>02</span><div><small>OWNED SOCIAL</small><b>カスタムジャパンSNS</b></div></header>
              <p>発売告知だけで終わらせず、製品を理解する連載へ。1つの取材から縦型動画、カルーセル、ストーリーズ、ショップ紹介を切り出す。</p>
              <ul><li>造形：削り出し・ゴールド・装着前後</li><li>機能：60秒で分かるポジションと操作感</li><li>証拠：開発者・メカニック・ユーザーの声</li></ul>
              <strong>指標：保存率／完視聴率／商品遷移</strong>
            </article>
            <article>
              <header><span>03</span><div><small>BtoB COMMERCE</small><b>自社通販＋BIZ会員CRM</b></div></header>
              <p>会員を車種・業態・購買履歴で分け、店舗が「仕入れて説明できる」状態を作る。WEB特集を母艦に、メルマガとLINEは要点と行動喚起へ絞る。</p>
              <ul><li>特集：車種別適合・利益・併売・取付情報</li><li>メルマガ：新型車／再入荷／導入事例</li><li>LINE：締切、即納、営業相談の短い通知</li></ul>
              <strong>指標：導入店／初回発注／90日再注文</strong>
            </article>
            <article>
              <header><span>04</span><div><small>BtoC MARKETPLACES</small><b>Amazon／楽天／Yahoo!</b></div></header>
              <p>同じ商品マスターを使いながら、各モールの購買文脈に最適化。価格競争を主役にせず、適合の正確さ、正規流通、納期、画像品質で選ばれる状態を作る。</p>
              <ul><li>Amazon：型番・適合・比較表・検索語を精緻化</li><li>楽天：特集、買い回り、関連商品の回遊設計</li><li>Yahoo!：検索とPayPay需要、優良配送を活用</li></ul>
              <strong>指標：検索順位／転換率／返品・適合問合せ</strong>
            </article>
            <article>
              <header><span>05</span><div><small>BtoC OWNED COMMERCE</small><b>customjapan.netの情報発信</b></div></header>
              <p>公開領域はブランド理解とSEO、ログイン後は発注に役割を分ける。モールでは伝え切れない開発思想、車種別選び方、取付店への相談導線を蓄積する。</p>
              <ul><li>公開：ブランドハブ、車種特集、技術記事</li><li>会員：在庫、価格、販促素材、営業相談</li><li>全モールの商品説明の参照元にする</li></ul>
              <strong>指標：自然検索／記事→商品／会員化・発注</strong>
            </article>
            <article>
              <header><span>06</span><div><small>FIELD SALES</small><b>営業部門／カスタムショップ</b></div></header>
              <p>営業は配布係ではなく、市場情報を戻すセンサー。重点ショップへ実物、接客トーク、取付情報を持ち込み、店頭での反応を次のコンテンツと在庫へ戻す。</p>
              <ul><li>重点50店：展示サンプルと15分研修</li><li>訪問：対象車保有、競合、失注理由を記録</li><li>成功店：事例化し次の店舗へ横展開</li></ul>
              <strong>指標：商談／採用店／店頭消化／現場VOC</strong>
            </article>
          </div>

          <div className="channel-sequence">
            <header><p className="eyebrow">LAUNCH SEQUENCE</p><h3>発信順をそろえ、接触を重ねる。</h3></header>
            <div>
              <article><span>W−4</span><b>企画固定</b><p>対象車・重点SKU・主張・適合・在庫・価格・権利を確定。全部門が同じマスターブリーフを使う。</p></article>
              <article><span>W−2</span><b>営業先行</b><p>重点店へ予告、研修、先行受注。FAQと失注理由を回収し、公開前に説明を修正。</p></article>
              <article><span>W0</span><b>同時公開</b><p>PR TIMES、メディア、ブランドハブ、BtoB特集、モール商品情報、SNSを同日公開。</p></article>
              <article><span>W+1〜4</span><b>証拠を追加</b><p>装着動画、メカニック解説、導入店、ユーザー反応を連載。CRMは行動別に再配信。</p></article>
              <article><span>W+6</span><b>検証・再配分</b><p>売れた車種・店舗・クリエイティブへ在庫と露出を集中。弱いSKUは説明・適合・価格を診断。</p></article>
            </div>
          </div>

          <div className="content-factory">
            <header><small>ONE SOURCE, MANY OUTPUTS</small><h3>1回の開発者取材から、12の成果物を作る。</h3></header>
            <div className="content-source"><span>SOURCE</span><b>開発者90分取材＋商品撮影</b><p>設計意図、純正との差、適合、加工、装着、レース／走行検証、FAQ</p></div>
            <div className="content-outputs">
              <span>PR TIMES</span><span>媒体向け資料</span><span>WEB特集</span><span>商品説明</span><span>60秒動画</span><span>SNSカルーセル</span><span>メルマガ</span><span>LINE</span><span>営業資料</span><span>店頭POP</span><span>研修動画</span><span>FAQ</span>
            </div>
          </div>

          <div className="operating-model">
            <div className="operating-head"><small>OPERATING MODEL</small><h3>役割を決めて、会議を減らす。</h3><p>商品開発2名を「情報の正しさ」と「ブランドの理由」に集中させ、展開と成果責任を各部門へ分担する。</p></div>
            <div className="raci-table" role="table" aria-label="全社連携の責任分担">
              <div className="raci-row raci-head"><span>WORK</span><span>最終責任</span><span>実行</span><span>協力</span></div>
              <div className="raci-row"><b>テーマ・重点SKU</b><span>ブランド責任者</span><span>商品開発</span><span>仕入・営業・EC</span></div>
              <div className="raci-row"><b>事実・適合・権利確認</b><span>商品開発</span><span>商品DB／制作</span><span>BabyFace</span></div>
              <div className="raci-row"><b>PR・記事・SNS</b><span>マーケ責任者</span><span>PR／制作／SNS</span><span>商品開発</span></div>
              <div className="raci-row"><b>BtoB販売・CRM</b><span>BtoB責任者</span><span>EC／CRM</span><span>営業・物流</span></div>
              <div className="raci-row"><b>モール・自社BtoC</b><span>BtoC責任者</span><span>各EC担当</span><span>制作・CS</span></div>
              <div className="raci-row"><b>ショップ開拓・消化</b><span>営業責任者</span><span>担当営業</span><span>商品開発・物流</span></div>
            </div>
          </div>

          <div className="governance-strip">
            <article><span>WEEKLY / 25 MIN</span><b>発売進行</b><p>素材・在庫・公開・営業の障害だけを解消。</p></article>
            <article><span>MONTHLY / 45 MIN</span><b>成果レビュー</b><p>認知→商談→受注→再注文を1枚で確認。</p></article>
            <article><span>QUARTERLY</span><b>重点の入替</b><p>車種・SKU・店舗・媒体への投資配分を更新。</p></article>
          </div>

          <div className="pilot-plan">
            <header><small>12-WEEK PILOT</small><h3>1車種 × 10SKU × 20店舗で始める。</h3></header>
            <div><b>成功条件</b><p>①全チャネルの発売日同期 ②重点店の70%以上が研修完了 ③記事・SNS接触店の発注率を未接触店と比較 ④適合問い合わせと返品を基準値以下へ ⑤90日以内の追加発注を計測。</p></div>
          </div>
        </section>

        <section className="content-section opportunity-section" id="opportunity">
          <SectionTitle
            index="10"
            kicker="BRANDING OPPORTUNITY"
            title="強い製品を、強い物語へ。"
            copy="WEB調査時点で見えた強みと、今後の社内ヒアリングで確認したい論点。"
          />
          <div className="opportunity-grid">
            <article className="strength-card">
              <p className="card-kicker">EXISTING STRENGTH</p>
              <h3>すでに持っている強さ</h3>
              <ol>
                <li><b>象徴商品が明確</b><span>パフォーマンスステップがブランドの技術と造形を代表する。</span></li>
                <li><b>機能の説明が具体的</b><span>素材、構造、加工、使用場面まで、価値の根拠がある。</span></li>
                <li><b>レースと市販品がつながる</b><span>テストとフィードバックという開発物語を持っている。</span></li>
                <li><b>視覚的な識別性がある</b><span>ゴールド、削り出し、複雑な機械造形が記憶に残る。</span></li>
              </ol>
            </article>
            <article className="gap-card">
              <p className="card-kicker">OPPORTUNITY</p>
              <h3>伝え方の伸びしろ</h3>
              <ol>
                <li><b>ブランドストーリーの集約</b><span>会社の歩み、思想、人物、転機を1か所で理解できる情報が少ない。</span></li>
                <li><b>ブランド階層の整理</b><span>BabyFace、IDEAL、Race Conceptの関係を初見でも分かるようにする。</span></li>
                <li><b>製品価値から体験価値へ</b><span>スペックだけでなく、装着前後で何が変わるかを言語・映像化する。</span></li>
                <li><b>グローバルな実績の可視化</b><span>地域、ライダー、装着車、販売実績など、海外支持の証拠を蓄積する。</span></li>
              </ol>
            </article>
          </div>
          <div className="workshop-questions">
            <p>次の社内ヒアリングで確認したい5問</p>
            <div>
              <span><b>01</b>創業時から変わらない判断基準は何か？</span>
              <span><b>02</b>BabyFace製品で最初に体感してほしい違いは？</span>
              <span><b>03</b>ゴールドは意図的なブランド資産か、商品上の選択肢か？</span>
              <span><b>04</b>IDEAL／Race Conceptを今後どう位置づけたいか？</span>
              <span><b>05</b>5年後、世界で何の代名詞になりたいか？</span>
            </div>
          </div>
        </section>

        <section className="content-section source-section" id="sources">
          <SectionTitle
            index="11"
            kicker="SOURCES & NOTES"
            title="参照情報。"
            copy="2026年8月1日時点でオンライン上から確認。製品価格・適合・仕様は必ず公式の最新情報を参照すること。"
          />
          <div className="source-list">
            {sources.map((source) => (
              <a href={source.href} target="_blank" rel="noreferrer" key={source.no}>
                <span>S{source.no}</span>
                <div><b>{source.label}</b><small>{source.note}</small></div>
                <i>↗</i>
              </a>
            ))}
          </div>
          <div className="research-note">
            <b>資料の扱い</b>
            <p>
              本資料は公開情報をもとにした社内理解・ブランディング検討用の一次整理です。
              「INTERPRETATION」「OPPORTUNITY」に記載した内容はBabyFace公式見解ではなく、今後の関係者ヒアリングで検証する仮説です。
              掲載写真の著作権は株式会社ベビーフェイスに帰属します。
            </p>
          </div>
        </section>

        <footer>
          <img src="/babyface/logo.jpg" alt="BabyFace" />
          <p>INTERNAL BRAND RESEARCH / PREPARED 01 AUG 2026</p>
          <a href="#top">BACK TO TOP ↑</a>
        </footer>
      </main>
    </div>
  );
}
