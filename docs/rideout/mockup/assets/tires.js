(function(){
  function money(n){return '¥'+Number(n).toLocaleString('ja-JP')}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function norm(s){return String(s||'').toLowerCase().replace(/[　\s]+/g,' ').replace(/[／/]/g,'/').trim()}
  function debounce(fn,ms){var t;return function(){clearTimeout(t);var a=arguments;t=setTimeout(function(){fn.apply(null,a)},ms)}}
  /* --- カテゴリページ：キーワード＋複数条件（ブランド／前後／リム径は単一、在庫はトグル、特徴は複数AND） --- */
  var ctrl=document.querySelector('.pctrl-multi');
  if(ctrl){
    var grid=document.getElementById('pgrid'), cnt=ctrl.querySelector('.cnt b'), q=ctrl.querySelector('#q'), state={}, feats=[];
    function apply(){
      var n=0, words=norm(q&&q.value).split(' ').filter(Boolean);
      grid.querySelectorAll('.pc').forEach(function(c){
        var ok=true;
        for(var f in state){ if(!state[f]) continue;
          var v=c.dataset[f]||''; if(f==='rim') v=v+'"';
          if(f==='in'){ if(v!=='1') ok=false; }
          else if(f==='surf'){ if(v.split('|').indexOf(state[f])<0) ok=false; }
          else if(v!==state[f]) ok=false; }
        if(ok&&feats.length){ var have=(c.dataset.feat||'').split('|'); ok=feats.every(function(x){return have.indexOf(x)>=0}); }
        if(ok&&words.length){ var t=c.dataset.q||''; ok=words.every(function(w){return t.indexOf(w)>=0}); }
        c.hidden=!ok; if(ok)n++;
      });
      grid.querySelectorAll('.pgh').forEach(function(h){
        var el=h.nextElementSibling, any=false;
        while(el && !el.classList.contains('pgh') && !el.classList.contains('pgf')){ if(!el.hidden){any=true;break;} el=el.nextElementSibling; }
        h.hidden=!any;
      });
      grid.querySelectorAll('.pgf').forEach(function(h){
        var el=h.nextElementSibling, any=false;
        while(el && !el.classList.contains('pgf')){ if(el.classList.contains('pc') && !el.hidden){any=true;break;} el=el.nextElementSibling; }
        h.hidden=!any;
      });
      if(cnt)cnt.textContent=n;
      var empty=document.getElementById('pempty'); if(empty) empty.hidden=n>0;
    }
    ctrl.querySelectorAll('.seg').forEach(function(seg){
      var f=seg.dataset.f, mode=seg.dataset.mode;
      seg.addEventListener('click',function(ev){
        var b=ev.target.closest('button'); if(!b)return; var v=b.dataset.v;
        if(mode==='multi'){ var k=feats.indexOf(v); if(k>=0)feats.splice(k,1); else feats.push(v); b.setAttribute('aria-pressed',k>=0?'false':'true'); }
        else if(mode==='toggle'){ state[f]=(state[f]===v)?'':v; b.setAttribute('aria-pressed',state[f]?'true':'false'); }
        else{ state[f]=v; seg.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')}); }
        apply();
      });
    });
    if(q) q.addEventListener('input',debounce(apply,120));
    var h=decodeURIComponent(location.hash||'');
    h.replace(/^#/,'').split('&').forEach(function(kv){ var p=kv.split('='); if(p.length<2)return;
      if(p[0]==='q'&&q){ q.value=p[1]; return; }
      var seg=ctrl.querySelector('.seg[data-f="'+p[0]+'"]'); if(!seg)return;
      var btn=[].slice.call(seg.querySelectorAll('button')).find(function(x){return x.dataset.v===p[1]}); if(btn) btn.click(); });
    if(q&&q.value) apply();
  }
  /* --- ハブ：キーワード＋サイズ検索＋特徴（assets/tires.json を必要になったときに読む） --- */
  var form=document.getElementById('tsearch'), res=document.getElementById('tresult'), note=document.getElementById('tnote');
  if(form && res){
    var data=null, loading=null, hfeats=[];
    function load(){ if(data) return Promise.resolve(data); if(loading) return loading;
      loading=fetch(res.dataset.src).then(function(r){return r.json()}).then(function(j){data=j.items;return data}); return loading; }
    function card(i){
      var meta=[i.z,i.p,i.t].filter(Boolean).join(' ／ ');
      var price=i.v?'<b>'+money(i.v)+'</b><small>税込／'+i.u+'</small>':'<small>価格は商品ページで表示</small>';
      var strike=(i.l&&i.v&&i.l>i.v)?'<s>'+money(i.l)+'</s>':'';
      return '<a class="pc" href="https://moto.customjapan.net/i/'+i.c+'" target="_blank" rel="noopener">'
        +'<div class="pimg"><img src="https://img.customjapan.net'+i.g+'" alt="" loading="lazy" decoding="async" width="600" height="600"></div>'
        +'<span class="pk">'+esc(i.m+(i.s?' / '+i.s:''))+'</span><h3>'+esc(i.n)+'</h3>'+(meta?'<p class="pcatch">'+esc(meta)+'</p>':'')
        +'<div class="pprice">'+price+strike+'</div><div class="pfoot"><span class="st'+(i.i?' in':'')+'">'+esc(i.st)+'</span><span class="pno">品番 '+i.c+'</span></div></a>';
    }
    function run(){
      var words=norm(form.q.value).split(' ').filter(Boolean);
      var qq={rim:form.rim.value,pos:form.pos.value,cat:form.cat.value,brand:form.brand.value,in:form.in.checked,use:form.use.value,surf:form.surf.value};
      if(!words.length&&!qq.rim&&!qq.pos&&!qq.cat&&!qq.brand&&!qq.in&&!qq.use&&!qq.surf&&!hfeats.length){ res.hidden=true; note.textContent='キーワードか条件を選ぶと該当するタイヤを表示します。'; return; }
      load().then(function(items){
        var hit=items.filter(function(i){ return (!qq.rim||i.r===qq.rim)&&(!qq.pos||i.p===qq.pos)&&(!qq.cat||i.k===qq.cat)&&(!qq.brand||i.m===qq.brand)&&(!qq.in||i.i===1)
          &&(!qq.use||i.e===qq.use)&&(!qq.surf||(i.w||[]).indexOf(qq.surf)>=0)
          &&hfeats.every(function(x){return (i.f||[]).indexOf(x)>=0})&&words.every(function(w){return (i.q||'').indexOf(w)>=0}); });
        res.innerHTML=hit.slice(0,120).map(card).join(''); res.hidden=!hit.length;
        note.textContent=hit.length?(hit.length>120?'条件を足すと、さらに絞り込めます。':''):'該当するタイヤがありません。条件を減らしてください。';
      });
    }
    form.addEventListener('change',run);
    form.q.addEventListener('input',debounce(run,160));
    /* バイクから探す：メーカー → 車種 → 車種ページへ */
    var bf=document.getElementById('tbike'), go=document.getElementById('bgo');
    if(bf && go){
      var V=[]; try{ V=JSON.parse(bf.dataset.veh); }catch(e){}
      function setGo(v){ if(v){ go.href=v[4]; go.removeAttribute('aria-disabled'); go.textContent=v[2]+' のタイヤを見る →'; } else { go.href='./bike/'; go.setAttribute('aria-disabled','true'); go.textContent='この車種のタイヤを見る →'; } }
      bf.mk.addEventListener('change',function(){
        var mk=bf.mk.value, sel=bf.veh; sel.innerHTML='';
        if(!mk){ sel.disabled=true; sel.innerHTML='<option value="">メーカーを先に選んでください</option>'; setGo(null); return; }
        sel.disabled=false; var html='<option value="">車種を選んでください</option>', cur=null;
        V.forEach(function(v,k){ if(v[0]!==mk) return; if(v[1]!==cur){ if(cur!==null) html+='</optgroup>'; html+='<optgroup label="'+esc(v[1])+'">'; cur=v[1]; } html+='<option value="'+k+'">'+esc(v[2])+'</option>'; });
        if(cur!==null) html+='</optgroup>'; sel.innerHTML=html; setGo(null);
      });
      bf.veh.addEventListener('change',function(){ setGo(V[bf.veh.value]||null); });
      function findV(q){ q=norm(q); if(!q) return null; var ex=V.filter(function(v){return norm(v[2])===q||norm(v[3])===q}); if(ex.length) return ex[0];
        var pa=V.filter(function(v){return norm(v[2]).indexOf(q)>=0||norm(v[3]).indexOf(q)>=0}); return pa.length===1?pa[0]:(pa[0]||null); }
      bf.vq.addEventListener('input',function(){ setGo(findV(bf.vq.value)); });
      bf.vq.addEventListener('keydown',function(ev){ if(ev.key==='Enter'){ var v=findV(bf.vq.value); if(v) location.href=v[4]; } });
      go.addEventListener('click',function(ev){ if(go.getAttribute('aria-disabled')==='true'){ ev.preventDefault(); location.href='./bike/'; } });
    }
    var fs=form.querySelector('.seg-feat');
    if(fs) fs.addEventListener('click',function(ev){ var b=ev.target.closest('button'); if(!b)return; var v=b.dataset.v, k=hfeats.indexOf(v);
      if(k>=0)hfeats.splice(k,1); else hfeats.push(v); b.setAttribute('aria-pressed',k>=0?'false':'true'); run(); });
  }
})();