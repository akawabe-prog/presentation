(function(){
  var dataEl=document.getElementById('gdata'); if(!dataEl) return;
  var D=JSON.parse(dataEl.textContent).map(function(a){return {id:a[0],n:a[1],m:a[2],t:a[3],w:a[4],f:a[5],z:a[6],k:a[7],v:a[8],l:a[9],s:a[10],x:a[11],u:a[12],q:a[13]}});
  var grid=document.getElementById('ggrid'), more=document.getElementById('gmorebtn'), empty=document.getElementById('gempty');
  var q=document.getElementById('gq'), sort=document.getElementById('gsort'), chips=document.getElementById('gchips'), on=document.getElementById('gfon');
  var S={type:'',brand:[],size:[],color:[],who:'',price:'',feat:[],in:''}, PAGE=48, shown=PAGE, hits=D;
  var IMG='https://img.customjapan.net/items/', ITEM='https://moto.customjapan.net/i/';
  function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
  function yen(v){return '¥'+Number(v).toLocaleString('ja-JP')}
  function card(i){
    var st=i.s==='SE'?'<span class="st in">在庫あり</span>':'<span class="st">'+esc(i.x)+'</span>';
    var sz=i.z.length?'<span class="sz">'+esc(i.z.slice(0,6).join(' / '))+(i.z.length>6?' ほか':'')+'</span>':'';
    return '<a class="pc" href="'+ITEM+esc(i.id)+'" target="_blank" rel="noopener"><div class="pimg"><img src="'+IMG+esc(i.id)+'_1.jpg" alt="'+esc(i.n)+'" loading="lazy" decoding="async" width="600" height="600"></div>'+
      '<span class="pk">'+esc(i.m)+' / '+esc(i.t)+'</span><h3>'+esc(i.n)+'</h3><div class="pprice"><b>'+yen(i.v)+'</b><small>税込／'+esc(i.u)+'</small>'+(i.l?'<s>'+yen(i.l)+'</s>':'')+'</div>'+
      '<div class="pfoot">'+st+sz+'<span class="pno">品番 '+esc(i.id)+'</span></div></a>';
  }
  function match(i){
    if(S.type&&i.t!==S.type) return false;
    if(S.brand.length&&S.brand.indexOf(i.m)<0) return false;
    if(S.size.length&&!S.size.some(function(z){return i.z.indexOf(z)>=0})) return false;
    if(S.color.length&&!S.color.some(function(k){return i.k.indexOf(k)>=0})) return false;
    if(S.who&&i.w!==S.who) return false;
    if(S.price){var p=S.price.split('-'),lo=+p[0]||0,hi=p[1]?+p[1]:1e9; if(i.v<lo||i.v>=hi) return false;}
    if(S.feat.length&&!S.feat.every(function(f){return i.f.indexOf(f)>=0})) return false;
    if(S.in&&i.s!=='SE') return false;
    var w=String(q&&q.value||'').toLowerCase().replace(/[　\s]+/g,' ').trim().split(' ').filter(Boolean);
    if(w.length&&!w.every(function(x){return i.q.indexOf(x)>=0})) return false;
    return true;
  }
  function render(){
    hits=D.filter(match);
    var o=sort.value;
    if(o==='pa') hits.sort(function(a,b){return a.v-b.v});
    else if(o==='pd') hits.sort(function(a,b){return b.v-a.v});
    else if(o==='off') hits.sort(function(a,b){return (b.l?(b.l-b.v)/b.l:0)-(a.l?(a.l-a.v)/a.l:0)});
    grid.innerHTML=hits.slice(0,shown).map(card).join('');
    more.hidden=hits.length<=shown; empty.hidden=hits.length>0;
    // 有効な条件をチップで表示
    var c=[];
    if(S.type) c.push(['type',S.type,S.type]);
    S.brand.forEach(function(v){c.push(['brand',v,v])}); S.size.forEach(function(v){c.push(['size',v,'サイズ '+v])});
    S.color.forEach(function(v){c.push(['color',v,v])}); if(S.who) c.push(['who',S.who,S.who]);
    if(S.price){var b=document.querySelector('[data-f=price] [data-v="'+S.price+'"]'); c.push(['price',S.price,b?b.textContent:S.price]);}
    S.feat.forEach(function(v){c.push(['feat',v,v])}); if(S.in) c.push(['in','1','在庫あり']);
    if(q&&q.value.trim()) c.push(['q','', '「'+q.value.trim()+'」']);
    chips.innerHTML=c.map(function(x){return '<button type="button" data-f="'+x[0]+'" data-v="'+esc(x[1])+'">'+esc(x[2])+' ×</button>'}).join('')+(c.length?'<button type="button" class="clr" id="gclear">すべてクリア</button>':'');
    on.textContent=c.filter(function(x){return x[0]!=='type'&&x[0]!=='q'}).length?'（条件あり）':'';
    sync(); hash();
  }
  function sync(){
    document.querySelectorAll('#gfil [data-f]').forEach(function(g){
      var f=g.dataset.f; if(g.closest('#gchips')) return;
      g.querySelectorAll('button').forEach(function(b){
        var v=b.dataset.v, f2=b.dataset.f2, pressed;
        if(f2==='in') pressed=!!S.in;
        else if(Array.isArray(S[f])) pressed=S[f].indexOf(v)>=0;
        else pressed=(S[f]||'')===v;
        b.setAttribute('aria-pressed',pressed?'true':'false');
      });
    });
  }
  function hash(){
    var p=[]; ['type','who','price','in'].forEach(function(k){if(S[k])p.push(k+'='+encodeURIComponent(S[k]))});
    ['brand','size','color','feat'].forEach(function(k){if(S[k].length)p.push(k+'='+S[k].map(encodeURIComponent).join(','))});
    if(q&&q.value.trim())p.push('q='+encodeURIComponent(q.value.trim())); if(sort.value)p.push('sort='+sort.value);
    history.replaceState(null,'',p.length?'#'+p.join('&'):location.pathname+location.search);
  }
  function load(){
    var h=location.hash.replace(/^#/,''); if(!h) return;
    h.split('&').forEach(function(kv){var i=kv.indexOf('='); if(i<0)return; var k=kv.slice(0,i), v=kv.slice(i+1);
      if(['brand','size','color','feat'].indexOf(k)>=0) S[k]=v.split(',').map(decodeURIComponent).filter(Boolean);
      else if(k==='q'&&q) q.value=decodeURIComponent(v); else if(k==='sort') sort.value=v; else if(k in S) S[k]=decodeURIComponent(v);});
  }
  document.getElementById('gfil').addEventListener('click',function(ev){
    var b=ev.target.closest('button'); if(!b) return;
    if(b.id==='gclear'){ reset(); return; }
    var g=b.closest('[data-f]'); if(!g) return;
    var f=b.dataset.f2||g.dataset.f, v=b.dataset.v;
    if(g.closest('#gchips')){ f=b.dataset.f; if(f==='q'){q.value='';} else if(Array.isArray(S[f])) S[f]=S[f].filter(function(x){return x!==v}); else S[f]=''; }
    else if(f==='in') S.in=S.in?'':'1';
    else if(Array.isArray(S[f])){ var i=S[f].indexOf(v); if(i>=0) S[f].splice(i,1); else S[f].push(v); }
    else S[f]=(S[f]===v&&f!=='type')?'':v;
    shown=PAGE; render();
  });
  function reset(){ S={type:'',brand:[],size:[],color:[],who:'',price:'',feat:[],in:''}; if(q)q.value=''; sort.value=''; shown=PAGE; render(); }
  var c2=document.getElementById('gclear2'); if(c2) c2.addEventListener('click',reset);
  more.addEventListener('click',function(){shown+=PAGE; render();});
  sort.addEventListener('change',function(){shown=PAGE; render();});
  if(q){var t; q.addEventListener('input',function(){clearTimeout(t); t=setTimeout(function(){shown=PAGE; render();},150)});}
  var det=document.getElementById('gfmore'); if(det&&window.matchMedia('(max-width:820px)').matches) det.open=false;
  window.addEventListener('hashchange',function(){ S={type:'',brand:[],size:[],color:[],who:'',price:'',feat:[],in:''}; load(); render(); });
  load(); render();
})();