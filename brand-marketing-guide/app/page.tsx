import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブランド分析・マーケティング実践ガイド",
  description: "SP Connect、BabyFace、OVER Racing、Beta Toolsの事例から学ぶ、ブランド調査・戦略・全社連携・90日実行の標準プロセス。",
};

const cases = [
  {
    no: "01",
    name: "SP Connect",
    theme: "権限 × 価値戦略",
    summary: "商品担当者からブランド責任者へ。契約上の権限を起点に、ブランド・事業・成長を統合する90日プログラムを設計。",
    learned: ["事業形態で責任範囲が変わる", "高付加価値と利便性を両立", "2名で事業と成長を分担"],
    tone: "green",
  },
  {
    no: "02",
    name: "BabyFace",
    theme: "技術 × 操作体験",
    summary: "レースで磨いた技術を、一般ライダーが感じる操作感と安心へ翻訳。販売店で提案・販売できる状態まで設計。",
    learned: ["技術を体感価値へ翻訳", "重点商品から商品群を理解", "店頭消化までを施策に含める"],
    href: "https://akawabe-prog.github.io/presentation/babyface/",
    tone: "gold",
  },
  {
    no: "03",
    name: "OVER Racing",
    theme: "歴史 × 構造美",
    summary: "OVシリーズ、鈴鹿、レース、アルミ加工を資産化。重点車種から複数カテゴリーを段階的に提案する戦略へ。",
    learned: ["歴史を現在の証拠へつなぐ", "代理指標と実売シェアを分ける", "車種別の完成像で売る"],
    href: "https://akawabe-prog.github.io/presentation/over-racing/",
    tone: "red",
  },
  {
    no: "04",
    name: "Beta Tools",
    theme: "商品体系 × 3社連携",
    summary: "膨大な商品群を仕事別に編集し、BETA・喜一工具・カスタムジャパンの資産をワークショップ体験へ統合。",
    learned: ["HERO／CORE／DEPTHで編集", "検索ノイズを前提に設計", "一つの導入事例を全社展開"],
    href: "https://akawabe-prog.github.io/presentation/beta-tools/",
    tone: "orange",
  },
];

const learningAreas = [
  {
    no: "01",
    title: "事業と契約",
    en: "RIGHTS & BUSINESS",
    statement: "作れる施策は、持っている権限で決まる。",
    learn: ["自社ブランド・総代理店・一般代理店の違い", "商標・画像・価格・販路・保証の責任範囲", "売上・粗利・在庫・仕入条件の基礎"],
    focus: ["日本独自の編集・広告は可能か", "モールや限定セットを展開できるか", "誰が価格と顧客対応を決めるか"],
    output: "ブランド権限マップ",
  },
  {
    no: "02",
    title: "リサーチ",
    en: "RESEARCH LITERACY",
    statement: "検索結果ではなく、根拠の強さを集める。",
    learn: ["一次情報と二次情報の使い分け", "公式商品ページ・説明書・社内実績の読み方", "事実・仮説・提案・未確認の分離"],
    focus: ["発信元・更新日・調査目的", "現在も有効な仕様か", "断定できない情報は何か"],
    output: "F / H / P / U シート",
  },
  {
    no: "03",
    title: "ブランド資産",
    en: "BRAND ASSETS",
    statement: "歴史を、今日選ばれる理由へ変える。",
    learn: ["創業理由・人物・技術・産地・レース", "色・形・素材・音・言葉の記憶資産", "機能・感情・社会価値への翻訳"],
    focus: ["変わっていない思想は何か", "他社がまねできない蓄積は何か", "現在の商品で証明できるか"],
    output: "資産マップ＋コアメッセージ",
  },
  {
    no: "04",
    title: "商品と技術",
    en: "PRODUCT SYSTEM",
    statement: "全商品を並べず、売る順番を設計する。",
    learn: ["HERO／CORE／DEPTHの商品分類", "仕様から体感価値への翻訳", "適合・取付・安全・補修の基本"],
    focus: ["最初に見せる商品は何か", "2品目・3品目へどうつながるか", "違いを何で証明できるか"],
    output: "商品体系＋重点10SKU",
  },
  {
    no: "05",
    title: "顧客理解",
    en: "AUDIENCE & JOBS",
    statement: "属性より、目的・不満・障壁で分ける。",
    learn: ["利用者と購入者の違い", "BtoB販売店と最終利用者の二層構造", "認知から利用・推奨までの行動"],
    focus: ["何を達成したいのか", "何が購入を止めるのか", "誰の説明を信頼するのか"],
    output: "重点顧客シート＋ジャーニー",
  },
  {
    no: "06",
    title: "市場と競合",
    en: "COMPETITIVE ARENA",
    statement: "順位ではなく、戦う場所を決める。",
    learn: ["直接競合・代替・何もしない選択", "商品・情報・店頭・サービスの比較", "公開指標と社内実売の使い分け"],
    focus: ["顧客が実際に比較する相手", "競合が強いチャネル", "自社だけが作れる市場の空白"],
    output: "競争アリーナ＋勝つ／戦わない領域",
  },
  {
    no: "07",
    title: "チャネルとコンテンツ",
    en: "ONE SOURCE / MANY OUTPUTS",
    statement: "一つの企画を、全社で増幅する。",
    learn: ["PR・SNS・記事・EC・CRM・営業の役割", "顧客状態に合うCTA", "一回の取材から複数成果物を作る方法"],
    focus: ["各チャネルの役割は重複していないか", "共通メッセージと証拠は何か", "次の行動へつながるか"],
    output: "統合キャンペーン設計図",
  },
  {
    no: "08",
    title: "KPIと全社連携",
    en: "MEASURE & OPERATE",
    statement: "実施件数ではなく、顧客と事業の変化を見る。",
    learn: ["ブランド・顧客行動・事業の3層KPI", "BtoBとBtoCの評価方法", "RACIと90日パイロット"],
    focus: ["誰が最終判断するか", "何と比較するか", "続行・停止・拡大の条件は何か"],
    output: "KPIツリー＋RACI＋90日計画",
  },
];

const process = [
  ["00", "目的", "誰が読み、何を決める資料かを一文にする"],
  ["01", "権限", "契約・画像・価格・販路・保証・社内データを確認"],
  ["02", "公式調査", "会社・歴史・理念・商品・技術・説明書を収集"],
  ["03", "資産抽出", "現在の選ばれる理由につながる3〜5資産へ絞る"],
  ["04", "商品編集", "カテゴリー・重点車種・重点10SKU・セットを決定"],
  ["05", "顧客選定", "最初に狙う1〜3組と購入障壁を明確にする"],
  ["06", "競争分析", "競合の強さと市場の空白、自社の勝ち場を探す"],
  ["07", "資産接続", "CJの商品DB・EC・CRM・営業・物流をつなぐ"],
  ["08", "戦略化", "顧客・固有価値・重点商品・自社優位を一文化"],
  ["09", "実行設計", "全チャネル、担当、KPI、90日検証を同期する"],
];

const channels = [
  ["PR TIMES", "社会的な節目・第三者掲載の起点", "詳細／取材"],
  ["専門メディア", "比較・検証・専門家による信頼", "製品確認"],
  ["SNS", "発見・共感・反復接触", "保存／視聴"],
  ["WEB特集", "歴史・技術・選び方の理解", "商品／相談"],
  ["商品ページ", "適合・仕様・価格・不安解消", "購入／見積"],
  ["メルマガ／LINE", "顧客別の再接触・入荷通知", "再訪／発注"],
  ["モール", "検索・比較・購入", "購入"],
  ["営業／販売店", "提案・体験・取付・商談", "導入／再注文"],
];

const deliverables = [
  "目的と意思決定事項", "ブランド権限マップ", "F/H/P/U一覧", "ブランド概要と歴史", "ブランド資産3〜5個", "商品体系と重点10SKU", "重点顧客1〜3組", "競合・市場分析", "CJ資産活用案", "統合企画1案", "RACI", "KPIツリー", "90日ロードマップ", "出典・制約・確認事項",
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a href="#top" className="brandmark"><span>CJ</span> BRAND PRACTICE</a>
        <nav aria-label="ページ内ナビゲーション">
          <a href="#cases">4事例</a>
          <a href="#learn">学ぶこと</a>
          <a href="#process">制作手順</a>
          <a href="#training">研修</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-noise" />
        <div className="hero-copy">
          <p className="eyebrow">BRAND ANALYSIS & MARKETING PLAYBOOK / 2026</p>
          <h1>調べる。<br />翻訳する。<br /><em>動かす。</em></h1>
          <p className="hero-lead">ブランド紹介を作るための資料ではない。<br />ブランド固有の事実から、顧客が選ぶ理由と<br />90日の実行計画をつくるための実践ガイド。</p>
          <a href="#summary" className="hero-cta">全体像から読む <span>↓</span></a>
        </div>
        <div className="hero-metrics" aria-label="資料の構成">
          <div><strong>04</strong><span>CASES</span><small>前回事例</small></div>
          <div><strong>08</strong><span>AREAS</span><small>学習領域</small></div>
          <div><strong>10</strong><span>STEPS</span><small>制作手順</small></div>
          <div><strong>90</strong><span>DAYS</span><small>実行検証</small></div>
        </div>
        <p className="scroll-label">SCROLL TO LEARN</p>
      </section>

      <section className="summary dark-section" id="summary">
        <div className="section-heading light">
          <span>00</span>
          <div><p>EXECUTIVE SUMMARY</p><h2>ブランドマーケティングは、<br />事業を一つに動かす仕事。</h2></div>
        </div>
        <div className="summary-grid">
          <div className="summary-statement">広告やデザインを作るだけではない。</div>
          <div className="summary-body">
            <p>商品、顧客、価格、在庫、販路、コンテンツ、営業、データを、一つの判断軸で接続する。</p>
            <div className="five-actions">
              {[["01","調べる"],["02","翻訳する"],["03","選ぶ"],["04","展開する"],["05","検証する"]].map(([n,t]) => <div key={n}><span>{n}</span><b>{t}</b></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="cases section" id="cases">
        <div className="section-heading">
          <span>01</span>
          <div><p>WHAT WE BUILT</p><h2>前回の4事例で、<br />何を学んだのか。</h2><small>ブランドは違っても、見るべき構造は共通している。</small></div>
        </div>
        <div className="case-grid">
          {cases.map((item) => {
            const content = <>
              <div className="case-top"><span>{item.no}</span><small>{item.theme}</small></div>
              <h3>{item.name}</h3>
              <p>{item.summary}</p>
              <ul>{item.learned.map(x => <li key={x}>{x}</li>)}</ul>
              {item.href && <b className="case-link">資料を見る ↗</b>}
            </>;
            return item.href ? <a className={`case-card ${item.tone}`} href={item.href} target="_blank" rel="noreferrer" key={item.name}>{content}</a> : <article className={`case-card ${item.tone}`} key={item.name}>{content}</article>;
          })}
        </div>
        <div className="case-conclusion"><span>COMMON LEARNING</span><p>個別ブランドを詳しく説明することが目的ではない。<strong>固有の事実を、顧客価値・重点商品・全社施策・検証計画へ変える。</strong></p></div>
      </section>

      <section className="learn section" id="learn">
        <div className="section-heading">
          <span>02</span>
          <div><p>EIGHT LEARNING AREAS</p><h2>資料を作るために、<br />学ぶべき8領域。</h2><small>それぞれに「知識」「着目点」「成果物」がある。</small></div>
        </div>
        <div className="learning-list">
          {learningAreas.map((area) => <details className="learning-row" key={area.no} open={area.no === "01"}>
            <summary>
              <span className="learning-no">{area.no}</span>
              <div><small>{area.en}</small><h3>{area.title}</h3></div>
              <p>{area.statement}</p>
              <i aria-hidden="true">＋</i>
            </summary>
            <div className="learning-detail">
              <div><b>学ぶこと</b><ul>{area.learn.map(x => <li key={x}>{x}</li>)}</ul></div>
              <div><b>着目すること</b><ul>{area.focus.map(x => <li key={x}>{x}</li>)}</ul></div>
              <div className="learning-output"><b>OUTPUT</b><strong>{area.output}</strong></div>
            </div>
          </details>)}
        </div>
      </section>

      <section className="thinking dark-section">
        <div className="section-heading light compact">
          <span>03</span>
          <div><p>HOW TO TRANSLATE</p><h2>仕様を、顧客の変化までつなぐ。</h2></div>
        </div>
        <div className="translation-flow">
          {[["FACT","仕様・事実"],["WHY","仕組み・理由"],["VALUE","体感・作業変化"],["PROOF","試験・レビュー"],["ACTION","商品・相談"]].map(([a,b],i) => <div key={a}><small>{String(i+1).padStart(2,"0")}</small><b>{a}</b><span>{b}</span></div>)}
        </div>
        <div className="translation-example">
          <p className="bad"><span>NG</span>「アルミ削り出しだから高品質」</p>
          <p className="good"><span>GOOD</span>どの部位を、なぜ削り出しで作り、操作・耐久・所有感にどう影響し、何で確認できるか。</p>
        </div>
      </section>

      <section className="process section" id="process">
        <div className="section-heading">
          <span>04</span>
          <div><p>STANDARD WORKFLOW</p><h2>誰でも再現できる、<br />10段階の制作手順。</h2><small>調査から実行までを分断しない。</small></div>
        </div>
        <div className="process-list">
          {process.map(([n,title,copy]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
        <div className="strategy-formula">
          <small>ONE-SENTENCE STRATEGY</small>
          <p><span>重点顧客</span>に対し、<span>ブランド固有の価値</span>を、<span>重点商品・体験</span>で証明し、<span>自社固有の販路・支援</span>によって購入障壁を下げる。</p>
        </div>
      </section>

      <section className="channels dark-section">
        <div className="section-heading light compact">
          <span>05</span>
          <div><p>CHANNEL ORCHESTRATION</p><h2>同じ企画を、違う役割で届ける。</h2></div>
        </div>
        <div className="channel-table" role="table" aria-label="チャネル別の役割">
          <div className="channel-row head" role="row"><span>CHANNEL</span><span>ROLE</span><span>NEXT ACTION</span></div>
          {channels.map(([name,role,cta],i) => <div className="channel-row" role="row" key={name}><b><i>{String(i+1).padStart(2,"0")}</i>{name}</b><span>{role}</span><strong>{cta}</strong></div>)}
        </div>
        <div className="source-outputs">
          <div><small>ONE INTERVIEW</small><strong>1</strong><p>開発者・利用者への取材</p></div>
          <span>→</span>
          <div className="output-cloud"><b>記事</b><b>動画</b><b>SNS</b><b>商品説明</b><b>営業資料</b><b>FAQ</b><b>研修</b><b>PR</b><b>比較表</b><b>CRM</b></div>
        </div>
      </section>

      <section className="quality section">
        <div className="section-heading">
          <span>06</span>
          <div><p>QUALITY STANDARD</p><h2>良い資料は、<br />この5条件を満たす。</h2></div>
        </div>
        <div className="quality-grid">
          {[
            ["01","事実性","重要な数値と技術に出典があり、事実と提案が分かれている。"],
            ["02","ブランドらしさ","ブランド名を他社へ置き換えると成立しない。"],
            ["03","顧客視点","仕様が体感や仕事の変化へ翻訳されている。"],
            ["04","事業性","売上だけでなく、粗利・在庫・返品・再注文を見る。"],
            ["05","実行性","担当・期限・KPI・比較方法が開始前に決まっている。"],
          ].map(([n,t,c]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}
        </div>
        <div className="warning-grid">
          <div className="warning-title"><small>COMMON FAILURES</small><h3>避けるべき<br />8つの失敗。</h3></div>
          <ul>
            {["歴史の紹介で終わる","高品質・高性能だけで説明する","全商品を平等に紹介する","検索件数を市場シェアと呼ぶ","部門ごとに別企画を作る","表示回数だけを成果にする","AI文章を事実確認せず使う","きれいな資料をゴールにする"].map((x,i)=><li key={x}><span>{String(i+1).padStart(2,"0")}</span>{x}</li>)}
          </ul>
        </div>
      </section>

      <section className="deliverables dark-section">
        <div className="section-heading light compact">
          <span>07</span>
          <div><p>FINAL DELIVERABLES</p><h2>担当者が提出する14項目。</h2></div>
        </div>
        <div className="deliverable-grid">
          {deliverables.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span><b>{x}</b></div>)}
        </div>
      </section>

      <section className="training section" id="training">
        <div className="section-heading">
          <span>08</span>
          <div><p>ONBOARDING PROGRAM</p><h2>初参加者は、<br />4回で実践まで進む。</h2></div>
        </div>
        <div className="training-grid">
          {[
            ["SESSION 01","60 MIN","理解する","4事例と共通プロセス。ブランド担当者の役割を理解する。"],
            ["SESSION 02","90 MIN","調べる","公式情報からF/H/P/Uを作り、根拠の強さを評価する。"],
            ["SESSION 03","120 MIN","設計する","資産・顧客・10SKU・競合・統合企画を作る。"],
            ["SESSION 04","90 MIN","決める","担当・KPI・実施条件を含む90日計画を発表する。"],
          ].map(([s,time,title,copy],i)=><article key={s}><div><span>{s}</span><small>{time}</small></div><strong>{String(i+1).padStart(2,"0")}</strong><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
        <div className="ninety-days">
          <div><small>WEEK 01—02</small><b>FOUNDATION</b><p>事実・権利・商品・在庫</p></div>
          <div><small>WEEK 03—06</small><b>BUILD</b><p>売場・記事・営業・研修</p></div>
          <div><small>WEEK 07—10</small><b>PILOT</b><p>限定した対象で実施</p></div>
          <div><small>WEEK 11—13</small><b>DECIDE</b><p>継続・停止・拡大</p></div>
        </div>
      </section>

      <section className="closing">
        <p>THE MOST IMPORTANT IDEA</p>
        <h2>情報を増やすのではなく、<br /><em>意思決定の質</em>を上げる。</h2>
        <div><p>ブランド固有の事実から顧客が選ぶ理由を見つけ、重点商品と重点顧客を選び、全社が同じ方向で動き、結果を検証できる状態をつくる。</p><a href="#top">最初から読み直す ↑</a></div>
      </section>

      <footer><span>CUSTOM JAPAN / BRAND PRACTICE</span><p>INTERNAL LEARNING MATERIAL — AUGUST 2026</p></footer>
    </main>
  );
}
