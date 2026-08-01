import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OVER Racing Brand Study | 社内共有資料",
  description:
    "OVER Racingのブランド、製品、競合、カスタムジャパン資産活用、全社連携を整理した社内共有資料。",
};

const sources = [
  { no: "01", label: "OVER Racing 公式サイト", href: "https://www.over.co.jp/", note: "理念、創業、会社概要、ニュース、イベント、OVシリーズ" },
  { no: "02", label: "OVER Racing オンラインショップ", href: "https://www.over.co.jp/ec/", note: "車種検索、商品カテゴリー、適合、価格、取扱説明書" },
  { no: "03", label: "OVER Racing スイングアーム Type7", href: "https://www.over.co.jp/ec/item/IovercN16157.html", note: "材料、重量、強度・剛性・しなりの設計思想" },
  { no: "04", label: "OVER Racing BACK-STEP", href: "https://www.over.co.jp/ec/item/IovercN20732.html", note: "削り出し、ポジション、ストリートとスポーツの両立" },
  { no: "05", label: "Webike OVERブランド", href: "https://www.webike.net/brand/541/", note: "商品数、評価、レビュー、記事、カテゴリー構成" },
  { no: "06", label: "Webike バックステップ", href: "https://www.webike.net/bm/1000131110506340/541/", note: "商品数、レビュー、売れ筋ブランド順位" },
  { no: "07", label: "Webike マフラー", href: "https://www.webike.net/bm/10001001/541/", note: "商品数、評価、売れ筋ブランド順位" },
  { no: "08", label: "Webike スイングアームブランド", href: "https://www.webike.net/bm/100013111088/brand/", note: "公開ランキング上の競合関係" },
  { no: "09", label: "NAPS OVER Racing特集", href: "https://www.naps-jp.com/Page/Feature/over_racing.aspx", note: "歴史、製品価値、Z900RS別注企画、店頭接点" },
  { no: "10", label: "NAPS × OVER Racing 発表", href: "https://naps.co.jp/press/55148/", note: "Z900RS向け限定ビレットパーツ4品の共同企画" },
  { no: "11", label: "WEBヤングマシン ブランドページ", href: "https://young-machine.com/brand/over-racing-projects/", note: "ブランドポスト、CB1000F開発、OVシリーズ、編集記事" },
  { no: "12", label: "BikeBros × Rough & Road", href: "https://news.bikebros.co.jp/parts/news20251128-04/", note: "Z900RS用別注カラー・専用設計の共同商品例" },
  { no: "13", label: "PR TIMES キーワードページ", href: "https://prtimes.jp/topics/keywords/%E3%82%AA%E3%83%BC%E3%83%B4%E3%82%A1%E3%83%BC%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%84", note: "現状確認できる対外発表の露出" },
  { no: "14", label: "カスタムジャパン 企業サイト", href: "https://www.customjapan.jp/", note: "BtoB会員、販売店リーチ、物流、商品DB" },
  { no: "15", label: "カスタムジャパン BtoB通販", href: "https://www.customjapan.net/", note: "商品検索、会員機能、EC、コンテンツ導線" },
  { no: "16", label: "カスタムジャパン 採用・事業紹介", href: "https://www.customjapan.jp/recruit/", note: "インハウス制作、EC、紙カタログ、ダイレクトマーケティング" },
  { no: "17", label: "カスタムジャパン 沿革", href: "https://www.customjapan.jp/history.html", note: "カタログ、展示会、販路開発の蓄積" },
];

const nav = [
  ["01", "要約", "#summary"], ["02", "ブランド", "#overview"], ["03", "製品", "#products"],
  ["04", "技術・レース", "#engineering"], ["05", "ブランド資産", "#assets"], ["06", "顧客・市場", "#audience"],
  ["07", "CJ資産活用", "#activation"], ["08", "競合分析", "#competition"], ["09", "全社連携", "#orchestration"],
  ["10", "実行提案", "#opportunity"], ["11", "参照情報", "#sources"],
];

const products = [
  { no: "01", tag: "EXHAUST", name: "Muffler", jp: "マフラー", image: "/over/muffler.jpg", src: "02", copy: "GP-PERFORMANCE、TT-Formula、SESMICなど、音・出力特性・重量・造形を車種ごとに統合。ブランドの最大カテゴリー。", points: ["チタン／ステンレス", "車種専用設計", "政府認証製品", "多様なサイレンサー造形"] },
  { no: "02", tag: "CONTROL", name: "Back Step", jp: "バックステップ", image: "/over/step.jpg", src: "04", copy: "高精度なアルミ削り出しと複数ポジションで、操作のダイレクト感とライディング姿勢を変える代表製品。", points: ["マルチポジション", "アルミ削り出し", "車種別最適化", "補修部品"] },
  { no: "03", tag: "CHASSIS", name: "Swing Arm", jp: "スイングアーム", image: "/over/swingarm.jpg", src: "03", copy: "OVERを他社と分ける構造部品。軽さだけでなく、強度・剛性・しなりのバランスを設計し、車体挙動を作る。", points: ["7N01アルミ", "軽量化", "適度なしなり", "溶接・切削の構造美"] },
  { no: "04", tag: "ORIGINAL", name: "OV Series", jp: "オリジナルフレーム／車両", image: "/over/ov44.webp", src: "01", copy: "1982年以来の『オリジナルバイクを作る』を可視化する象徴。市販部品の集合ではなく、車体全体を設計できる証明。", points: ["OV-01〜46", "レース実証", "独自フレーム", "コンストラクター精神"] },
];

function Source({ no }: { no: string }) {
  const s = sources.find((item) => item.no === no);
  if (!s) return null;
  return <a className="source" href={s.href} target="_blank" rel="noreferrer" aria-label={`${s.label}を開く`}>S{no}</a>;
}

function SectionTitle({ index, kicker, title, copy }: { index: string; kicker: string; title: string; copy?: string }) {
  return <header className="section-title"><span>{index}</span><div><p>{kicker}</p><h2>{title}</h2>{copy && <small>{copy}</small>}</div></header>;
}

export default function Home() {
  return (
    <div className="shell" id="top">
      <aside className="rail">
        <a className="logo" href="#top"><img src="/over/logo.png" alt="OVER Racing" /></a>
        <nav>{nav.map(([n, label, href]) => <a href={href} key={href}><span>{n}</span>{label}</a>)}</nav>
        <div className="rail-foot"><b>INTERNAL STUDY</b><span>01 AUG 2026</span></div>
      </aside>

      <main>
        <section className="hero">
          <img className="hero-image" src="/over/hero.webp" alt="OVER Racing OV-43とOV-46" />
          <div className="hero-shade" />
          <div className="hero-copy">
            <p>BRAND / MARKET / ACTIVATION STUDY</p>
            <h1>BUILD<br />BEYOND<br /><em>ORIGINAL.</em></h1>
            <div><b>鈴鹿で、昨日の自分を超える。</b><span>レースから始まり、オリジナル車両へ向かう。OVER Racingは「部品メーカー」より広い、ものづくりのブランドである。</span></div>
          </div>
          <div className="hero-facts"><span><b>1982</b>創立</span><span><b>SUZUKA</b>三重県鈴鹿市</span><span><b>OV-46</b>公式確認できるOV号</span><span><b>4.4 / 5</b>Webike公開評価</span></div>
          <Source no="01" />
        </section>

        <section className="summary" id="summary">
          <div className="summary-label"><span>01</span><b>EXECUTIVE<br />SUMMARY</b></div>
          <p>OVER Racingの核は、<strong>「楽しく、カッコ良く、そして安全に」</strong>を、レース・車体設計・少量高品質生産で実装すること。マフラーやステップだけでなく、スイングアーム、ホイール、フレーム、完成車構想まで扱う<strong>“鈴鹿のコンストラクター”</strong>である。</p>
          <div className="summary-chips"><span>RACE-BORN</span><span>ORIGINAL BIKE</span><span>STRUCTURAL BEAUTY</span><span>SUZUKA</span></div>
        </section>

        <section className="section paper" id="overview">
          <SectionTitle index="02" kicker="BRAND OVERVIEW" title="速さを求めて、会社を始めた。" copy="創業の目的そのものがレース参戦。挑戦、独創性、カッコ良さ、安全が一本の線でつながる。" />
          <div className="overview-grid">
            <div className="overview-story"><p className="quote">“「レースで優勝する」という目標に向かって、ただ速いバイクを造る為に会社を経営してきました。”</p><p>1982年7月創立。オートバイのカスタムパーツを製造販売しながら、オリジナルフレームのOV号を開発。欧州スーパーモノ、鈴鹿8耐、現代のTaste of Tsukubaやトライアルまで、実走を開発の場としている。</p><Source no="01" /></div>
            <div className="philosophy-card"><small>PHILOSOPHY</small><h3>楽しく、<br />カッコ良く、<br />そして安全に。</h3><p>見えない場所も妥協しない誠実なものづくりが、結果として安全につながるという思想。</p></div>
          </div>
          <div className="timeline">
            <article><b>1982</b><span>創立／レース参戦を目的に製造販売を開始</span></article><i />
            <article><b>1984</b><span>全日本参戦へOV-01が誕生</span></article><i />
            <article><b>1989–97</b><span>欧州スーパーモノで挑戦・連覇</span></article><i />
            <article><b>2013–</b><span>OVER-ASIA設立、再び世界へ</span></article><i />
            <article><b>NOW</b><span>OV-46、新製品、走行会、レース活動</span></article>
          </div>
        </section>

        <section className="section dark" id="products">
          <SectionTitle index="03" kicker="PRODUCT SYSTEM" title="車体を、部分ではなく全体で考える。" copy="排気、操作、車体、オリジナル車両。各製品は独立していても、目指す走りと造形は同じ。" />
          <div className="product-grid">{products.map((p) => <article className="product-card" key={p.no}><figure><img src={p.image} alt={p.jp} /><span>{p.no}</span></figure><div><p className="product-tag">{p.tag}</p><h3>{p.name}</h3><b>{p.jp}</b><p>{p.copy}</p><ul>{p.points.map((x) => <li key={x}>{x}</li>)}</ul><Source no={p.src} /></div></article>)}</div>
          <div className="portfolio"><b>ADJACENT PORTFOLIO</b><p>ハンドル、トップブリッジ、サブフレーム、スライダー、ブレーキ、ホイール、外装、キャリア、グッズまで展開。新型車1台を複数カテゴリーで深くカスタムできる。</p></div>
        </section>

        <section className="section engineering" id="engineering">
          <SectionTitle index="04" kicker="ENGINEERING & RACING" title="レースは広告ではなく、開発方法。" copy="設計・加工・溶接・組立・実走・改善が同じ組織で回ることが、OVERの説得力を生む。" />
          <div className="engineering-flow"><div><span>01</span><b>構想</b><p>誰もやらない車両・構造を考える</p></div><i>→</i><div><span>02</span><b>設計</b><p>車体全体で寸法とバランスを決める</p></div><i>→</i><div><span>03</span><b>製造</b><p>切削、曲げ、溶接、仕上げを形にする</p></div><i>→</i><div><span>04</span><b>実走</b><p>レースとイベントで限界を確かめる</p></div><i>→</i><div><span>05</span><b>市販化</b><p>体感できる製品へ戻す</p></div></div>
          <div className="engineering-grid"><img src="/over/handle.jpg" alt="CB1000F用スポーツライディングハンドルキット" /><div><article><span>01 / ORIGINALITY</span><h3>オリジナル車両を頂点に置く</h3><p>OVシリーズが、商品企画・開発技術・生産技術・営業・サービスを一段高くする共通目標。</p></article><article><span>02 / BALANCE</span><h3>数値だけでなく、しなりを設計</h3><p>スイングアームは強度と剛性だけでなく、ライダーが感じる適度なしなりまで価値にする。</p></article><article><span>03 / HONEST CRAFT</span><h3>見えない場所もカッコ良く</h3><p>造形は装飾ではなく、機能を妥協せず作った結果。品質と安全を視覚的に伝える。</p></article><article><span>04 / DIALOGUE</span><h3>走行会をユーザー対話に使う</h3><p>イベントは体験接点であり、要望を企画へ戻すフィードバックループでもある。</p></article></div></div>
        </section>

        <section className="section assets-section" id="assets">
          <SectionTitle index="05" kicker="BRAND ASSETS" title="OVERだけが持つ、5つの記憶装置。" />
          <div className="asset-grid"><article><span>01</span><b>OV</b><p>連番で蓄積するオリジナルマシン。挑戦を一目で語れるブランドアイコン。</p></article><article><span>02</span><b>鈴鹿</b><p>世界的レース都市に根差す、技術・歴史・人材・走行環境の地理的資産。</p></article><article><span>03</span><b>赤・黒・銀</b><p>レーシングレッド、黒い機能面、アルミとチタンの素材色。</p></article><article><span>04</span><b>構造美</b><p>溶接ビード、肉抜き、曲げ、切削面が、説明前から技術を感じさせる。</p></article><article><span>05</span><b>体験</b><p>レース、走行会、CUP、展示会でブランドを「見る」から「参加する」へ。</p></article></div>
          <div className="brand-equation"><div><span>RACE</span><b>実証</b></div><i>＋</i><div><span>ORIGINAL</span><b>独創</b></div><i>＋</i><div><span>CRAFT</span><b>誠実</b></div><i>＝</i><strong>乗る人の夢まで<br />カッコ良くする。</strong></div>
        </section>

        <section className="section audience" id="audience">
          <SectionTitle index="06" kicker="AUDIENCE & JOBS" title="性能を買う人と、夢を買う人。" />
          <div className="audience-table"><div className="aud-row head"><span>SEGMENT</span><span>DESIRE</span><span>HERO PRODUCT</span><span>MESSAGE</span></div><div className="aud-row"><b>スポーツ走行層</b><span>操作・軽さ・剛性感を体感したい</span><span>ステップ／マフラー／車体部品</span><span>レースで試し、道路で楽しめる</span></div><div className="aud-row"><b>ネオクラシック層</b><span>ノーマルの魅力を壊さず質を上げたい</span><span>Z900RS／CB1000F系</span><span>やりすぎない構造美</span></div><div className="aud-row"><b>4MINIカスタム層</b><span>小さな車体で最大限遊びたい</span><span>Monkey／GROM／DAX／OV-44</span><span>遊びを本気で設計する</span></div><div className="aud-row"><b>構造・工作好き</b><span>素材、加工、溶接、設計背景を味わいたい</span><span>スイングアーム／ホイール／フレーム</span><span>部品そのものが技術の証拠</span></div><div className="aud-row"><b>販売店・カスタムショップ</b><span>説明しやすく、長く支持される商品</span><span>車種別セット／補修／取付支援</span><span>単品でなく完成像を売れる</span></div></div>
        </section>

        <section className="section activation" id="activation">
          <SectionTitle index="07" kicker="CUSTOM JAPAN × OVER RACING" title="ブランドの深さを、販路の広さへ。" copy="カスタムジャパンの会員網、適合DB、制作、CRM、営業、物流を、OVERの車種深掘り・体験・ストーリーへ接続する。" />
          <div className="cj-metrics"><article><small>BtoB MEMBERS</small><b>約90,000</b><span>事業者会員</span><Source no="14" /></article><article><small>DEALER REACH</small><b>90%+</b><span>国内バイク販売店の会員化率</span><Source no="14" /></article><article><small>ONLINE ASSORTMENT</small><b>928,187</b><span>調査時のEC掲載商品数</span><Source no="15" /></article><article><small>FULFILLMENT</small><b>SAME DAY</b><span>対象商品の当日出荷</span><Source no="14" /></article></div>
          <div className="activation-thesis"><span>STRATEGIC THESIS</span><p>OVER Racingは<strong>単品SKUより「車両完成像」</strong>で強くなる。カスタムジャパンは、車種データと販売店接点を使い、<strong>1台の段階的カスタム計画</strong>として提案・在庫・取付を束ねるべきである。</p></div>
          <div className="activation-grid"><article><span>01</span><b>車種別ガレージ</b><p>Z900RS、CB1000F、Monkey125など、車種ごとにStage 1〜3の完成像、適合、併売、予算を提示。</p><strong>EC × 適合DB × 商品画像</strong></article><article><span>02</span><b>OVER Pro Builder 30</b><p>加工・取付・セットアップを説明できる30店を選定し、展示車、研修、優先在庫、店頭イベントを提供。</p><strong>会員網 × 営業 × 物流</strong></article><article><span>03</span><b>鈴鹿からの技術連載</b><p>OV、開発者、スイングアーム、マフラー音、加工工程を記事・動画・紙面で連載。</p><strong>制作 × SNS × メルマガ</strong></article><article><span>04</span><b>新型車72時間展開</b><p>メーカー発表・適合確定後、商品マスター、特集、営業資料、モール情報を共通データから同時更新。</p><strong>商品DB × CRM × モール</strong></article><article><span>05</span><b>取付まで売る</b><p>高額・構造部品は、商品だけでなく相談予約、取付店、工数目安、必要同時交換部品まで提示。</p><strong>営業 × CS × ショップ</strong></article><article><span>06</span><b>イベントを商談化</b><p>走行会、CUP、展示会を試乗・相談・販売店研修・取材の複合接点として活用。</p><strong>PR × 営業 × コンテンツ</strong></article></div>
        </section>

        <section className="section competition" id="competition">
          <SectionTitle index="08" kicker="COMPETITIVE LANDSCAPE" title="全体シェアは非公開。カテゴリーでは強さが見える。" copy="実売・出荷シェアは公開されていないため、Webikeの公開商品・評価・ランキング、記事、店頭・共同企画を代理指標として比較。" />
          <div className="share-note"><b>ACTUAL SALES SHARE</b><span>算出不可</span><p>公開売上・販売数量・チャネル別出荷がないため、市場シェアとは表現しない。以下は<strong>公開情報上の可視性とカテゴリー競争力</strong>である。</p></div>
          <div className="public-proof"><article><small>WEBIKE LISTINGS</small><b>1,493</b><p>ブランド商品。新製品168、シリーズ16、レビュー1,300件規模。</p><Source no="05" /></article><article><small>BACK STEP</small><b>#2</b><p>100商品。公開売れ筋順位はBabyFaceに次ぐ2位。</p><Source no="06" /></article><article><small>MUFFLER</small><b>#7</b><p>約378商品。YOSHIMURA、MORIWAKI等と競合。</p><Source no="07" /></article><article><small>SWING ARM</small><b>#1</b><p>公開ブランド順位1位。OVERの独自優位が最も明確。</p><Source no="08" /></article></div>
          <div className="competitor-matrix"><div className="comp-row comp-head"><span>ARENA</span><span>主要競合</span><span>OVERの位置</span><span>勝ち筋</span></div><div className="comp-row"><b>バックステップ</b><span>BabyFace／COERCE／STRIKER</span><span>公開売れ筋2位、評価4.5</span><p>操作感＋車体全体の完成像。スイングアームやハンドルとのセット提案。</p></div><div className="comp-row"><b>マフラー</b><span>YOSHIMURA／MORIWAKI／KITACO／TRICKSTAR</span><span>強いが競合密度も高い</span><p>音だけでなく出力、造形、車体部品との統一感。SESMIC等の歴史資産も活用。</p></div><div className="comp-row highlight"><b>スイングアーム</b><span>G-Craft／J-TRIP／ACTIVE系</span><span>公開順位1位</span><p>強度・剛性・しなりと、溶接・切削の構造美をヒーローコンテンツ化。</p></div><div className="comp-row"><b>4MINI総合</b><span>G-Craft／SP武川／KITACO／YOSHIMURA</span><span>OV-44まで作る独創性</span><p>単品数でなく「小さな車体を本気で作り切る」プロジェクトとして差別化。</p></div><div className="comp-row"><b>ネオクラシック</b><span>ARCHI／PMC／MORIWAKI／K-FACTORY</span><span>Z900RSで別注実績</span><p>車種別トータルカスタムと、小売・ショップ共同企画を拡張。</p></div></div>
          <div className="channel-analysis"><article><span>WEBIKE</span><b>デジタル発見面の主導者</b><p>1,493商品、ランキング、レビュー、関連記事。商品量とUGCの両方が強い。</p></article><article><span>NAPS</span><b>競合であり協業パートナー</b><p>2025年末にZ900RS限定4品を共同企画。特集と店頭を結び、ブランド文脈まで保有。</p><Source no="10" /></article><article><span>2りんかん</span><b>全国店頭・取付接点</b><p>店舗の取扱ブランドとして確認できるが、公開の専用特集はNAPSほど強くない。</p></article><article><span>MEDIA</span><b>専門媒体の蓄積が豊富</b><p>ヤングマシンにブランドページと継続PR。BikeBros等にも新製品・別注が掲載。</p><Source no="11" /></article><article><span>PR TIMES</span><b>現状は協業発表中心</b><p>キーワードページで確認できる主要露出はNAPS発表。自社発の物語拡張余地。</p><Source no="13" /></article><article><span>CUSTOM JAPAN</span><b>公開可視性は要検証</b><p>公開検索では専用ハブの強い露出を確認できず。BtoB実売は社内データで別途評価。</p></article></div>
          <div className="competition-conclusion"><b>競争戦略</b><p>Webikeの商品量、NAPSの限定企画、専門媒体のブランドポストはすでに強い。カスタムジャパンは同じことを複製せず、<strong>販売店の提案・取付・在庫・再注文を一体化する「車種別カスタム実装網」</strong>を独占領域にする。</p></div>
        </section>

        <section className="section orchestration" id="orchestration">
          <SectionTitle index="09" kicker="CROSS-FUNCTIONAL ORCHESTRATION" title="一つの開発を、全社で売り切る。" copy="PR、メディア、SNS、BtoB、モール、自社EC、営業を、一つの車種テーマと素材セットで同期。" />
          <div className="orchestration-line"><div><span>ONE VEHICLE</span><b>重点車種</b></div><i>→</i><div><span>ONE STORY</span><b>開発理由</b></div><i>→</i><div><span>ONE MASTER</span><b>適合・素材</b></div><i>→</i><div><span>ALL CHANNELS</span><b>同時展開</b></div><i>→</i><div><span>SELL THROUGH</span><b>消化・再注文</b></div></div>
          <div className="department-grid"><article><header><span>01</span><b>PR TIMES／メディア</b></header><p>新型車プロジェクト、OV新号、レース結果、ショップ網、共同企画を発表。開発者コメント、走行動画、仕様表、写真を媒体キット化。</p><strong>掲載／指名検索／記事流入</strong></article><article><header><span>02</span><b>カスタムジャパンSNS</b></header><p>溶接、切削、音、装着前後、OVストーリー、ショップ取付を連載。1取材から短尺、カルーセル、ストーリーへ再編集。</p><strong>保存／完視聴／商品遷移</strong></article><article><header><span>03</span><b>BtoB通販＋BIZ CRM</b></header><p>WEB特集を母艦に、メルマガは車種別提案、LINEは即納・締切・相談通知。利益、併売、工数、補修まで販売店視点で提示。</p><strong>導入店／初回発注／再注文</strong></article><article><header><span>04</span><b>Amazon／楽天／Yahoo!</b></header><p>Amazonは型番・適合・比較、楽天は車種特集と回遊、Yahoo!は検索・PayPay・配送。価格より正規性と情報精度で選ばれる。</p><strong>検索順位／転換／返品率</strong></article><article><header><span>05</span><b>customjapan.net</b></header><p>公開領域はブランド・車種・技術の理解、会員領域は価格・在庫・販促素材・営業相談。全モールと営業資料の一次情報源へ。</p><strong>自然検索／記事→商品／会員発注</strong></article><article><header><span>06</span><b>営業／カスタムショップ</b></header><p>Pro Builder 30へ展示・研修・相談会を提供。商談で対象車保有、競合、取付課題、失注理由を集め、開発とコンテンツへ戻す。</p><strong>商談／採用／消化／VOC</strong></article></div>
          <div className="launch-sequence"><header><span>INTEGRATED LAUNCH</span><h3>発売前4週から、同じ物語を重ねる。</h3></header><div><article><b>W−4</b><span>MASTER</span><p>重点SKU、適合、在庫、価格、表現、権利を確定。</p></article><article><b>W−2</b><span>DEALER FIRST</span><p>重点店研修と先行受注。FAQを公開素材へ反映。</p></article><article><b>W0</b><span>ONE LAUNCH</span><p>PR、記事、SNS、BtoB、モール、営業を同時公開。</p></article><article><b>W+2</b><span>PROOF</span><p>取付、音、走行、店頭事例を追加し再配信。</p></article><article><b>W+6</b><span>OPTIMIZE</span><p>売れた車種・店・素材へ在庫と露出を再配分。</p></article></div></div>
          <div className="raci"><div><small>OPERATING MODEL</small><h3>商品開発は事実、各部門は成果に責任を持つ。</h3><p>週次25分で障害を除き、月次45分で認知→商談→受注→再注文を確認。四半期ごとに重点車種と投資を入れ替える。</p></div><div className="raci-table"><div className="raci-row head"><span>WORK</span><span>OWNER</span><span>DO</span><span>SUPPORT</span></div><div className="raci-row"><b>重点車種・SKU</b><span>ブランド責任者</span><span>商品開発</span><span>仕入・営業・EC</span></div><div className="raci-row"><b>適合・技術・権利</b><span>商品開発</span><span>商品DB／制作</span><span>OVER</span></div><div className="raci-row"><b>PR・記事・SNS</b><span>マーケ責任者</span><span>PR／制作</span><span>商品開発</span></div><div className="raci-row"><b>BtoB・CRM</b><span>BtoB責任者</span><span>EC／CRM</span><span>営業・物流</span></div><div className="raci-row"><b>モール・BtoC</b><span>BtoC責任者</span><span>各EC担当</span><span>制作・CS</span></div><div className="raci-row"><b>店頭消化</b><span>営業責任者</span><span>担当営業</span><span>商品開発・物流</span></div></div></div>
        </section>

        <section className="section opportunity" id="opportunity">
          <SectionTitle index="10" kicker="PRIORITY ACTIONS" title="最初の12週間で、勝ち筋を作る。" />
          <div className="priority-grid"><article><span>P1</span><small>VEHICLE COMMERCE</small><h3>Z900RS Complete Path</h3><p>マフラー、ステップ、ハンドル、車体部品をStage 1〜3で束ね、予算と取付店まで提示。既存の認知と共同企画実績を活用する。</p></article><article><span>P2</span><small>DEALER ENABLEMENT</small><h3>OVER Pro Builder 30</h3><p>スポーツ・ネオクラシック・4MINIに強い30店を選定。展示サンプル、研修、優先在庫、相談会、事例制作をセット提供。</p></article><article><span>P3</span><small>PROOF CONTENT</small><h3>Why OVER Works</h3><p>スイングアームをヒーローに、強度・剛性・しなり、加工、溶接、実走を可視化。カテゴリー1位の理由をブランド全体へ波及。</p></article></div>
          <div className="pilot"><div><span>12-WEEK PILOT</span><h3>1車種 × 15SKU × 30店舗</h3></div><p><b>成功条件</b> ①重点店70%以上が研修完了 ②全チャネル同日公開 ③記事接触店と未接触店の発注率比較 ④取付相談→受注率 ⑤返品・適合問合せ ⑥90日追加発注を計測。</p></div>
          <div className="guardrails"><b>実行原則</b><p><strong>値引きを物語にしない。</strong> 技術、正規性、適合精度、取付、即納を優先する。</p><p><strong>共同企画の重複を避ける。</strong> NAPSやRough & Roadの既存別注と競合しない車種・色・販路をメーカーと確認する。</p><p><strong>実売シェアは社内で作る。</strong> 受注・出荷・導入店・再注文を接続し、公開ランキングとは分けて管理する。</p></div>
        </section>

        <section className="section sources-section" id="sources">
          <SectionTitle index="11" kicker="SOURCES & NOTES" title="参照情報。" copy="2026年8月1日時点の公開情報。価格、適合、法規、在庫、ランキングは必ず最新情報を再確認する。" />
          <div className="source-list">{sources.map((s) => <a href={s.href} target="_blank" rel="noreferrer" key={s.no}><span>S{s.no}</span><div><b>{s.label}</b><small>{s.note}</small></div><i>↗</i></a>)}</div>
          <div className="research-note"><b>資料の扱い</b><p>本資料は公開情報をもとにした社内検討用の分析です。戦略・機会・施策はOVER Racing公式の見解ではなく、今後のメーカー・社内ヒアリングで検証する仮説です。掲載商品画像・ロゴの権利は各権利者に帰属します。</p></div>
        </section>

        <footer><img src="/over/logo.png" alt="OVER Racing" /><p>INTERNAL BRAND RESEARCH / CUSTOM JAPAN / 01 AUG 2026</p><a href="#top">BACK TO TOP ↑</a></footer>
      </main>
    </div>
  );
}
