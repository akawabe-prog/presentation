(function(){
  function money(n){return '¥'+Number(n).toLocaleString('ja-JP')}
  /* --- カテゴリページ：複数条件の絞り込み（ブランド／前後／リム径は単一選択、在庫はトグル） --- */
  var ctrl=document.querySelector('.pctrl-multi');
  if(ctrl){
    var grid=document.getElementById('pgrid'), cnt=ctrl.querySelector('.cnt b'), state={};
    function apply(){
      var n=0;
      grid.querySelectorAll('.pc').forEach(function(c){
        var ok=true;
        for(var f in state){ if(!state[f]) continue;
          var v=c.dataset[f]||''; if(f==='rim') v=v+'"';
          if(f==='in'){ if(v!=='1') ok=false; } else if(v!==state[f]) ok=false; }
        c.hidden=!ok; if(ok)n++;
      });
      /* 見出し：配下に表示中のカードが無ければ隠す */
      grid.querySelectorAll('.pgh').forEach(function(h){
        var el=h.nextElementSibling, any=false;
        while(el && !el.classList.contains('pgh')){ if(!el.hidden){any=true;break;} el=el.nextElementSibling; }
        h.hidden=!any;
      });
      if(cnt)cnt.textContent=n;
    }
    ctrl.querySelectorAll('.seg').forEach(function(seg){
      var f=seg.dataset.f, toggle=seg.dataset.mode==='toggle';
      seg.addEventListener('click',function(ev){
        var b=ev.target.closest('button'); if(!b)return; var v=b.dataset.v;
        if(toggle){ state[f]=(state[f]===v)?'':v; b.setAttribute('aria-pressed',state[f]?'true':'false'); }
        else{ state[f]=v; seg.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')}); }
        apply();
      });
    });
    var h=decodeURIComponent(location.hash||'');
    h.replace(/^#/,'').split('&').forEach(function(kv){ var p=kv.split('='); if(p.length<2)return;
      var seg=ctrl.querySelector('.seg[data-f="'+p[0]+'"]'); if(!seg)return;
      var btn=[].slice.call(seg.querySelectorAll('button')).find(function(x){return x.dataset.v===p[1]}); if(btn) btn.click(); });
  }
  /* --- ハブ：サイズ検索（assets/tires.json を条件が選ばれたときに読む） --- */
  var form=document.getElementById('tsearch'), res=document.getElementById('tresult'), note=document.getElementById('tnote'), tc=document.getElementById('tcount');
  if(form && res){
    var data=null, loading=null;
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
    function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
    function run(){
      var q={rim:form.rim.value,pos:form.pos.value,cat:form.cat.value,brand:form.brand.value,in:form.in.checked};
      if(!q.rim&&!q.pos&&!q.cat&&!q.brand&&!q.in){ res.hidden=true; note.textContent='条件を選ぶと該当するタイヤを表示します。'; tc.textContent='–'; return; }
      load().then(function(items){
        var hit=items.filter(function(i){ return (!q.rim||i.r===q.rim)&&(!q.pos||i.p===q.pos)&&(!q.cat||i.k===q.cat)&&(!q.brand||i.m===q.brand)&&(!q.in||i.i===1); });
        tc.textContent=hit.length; res.innerHTML=hit.slice(0,120).map(card).join(''); res.hidden=!hit.length;
        note.textContent=hit.length?(hit.length>120?'多いので先頭 120 点を表示。条件を足して絞ってください。':''):'該当するタイヤがありません。条件を減らしてください。';
      });
    }
    form.addEventListener('change',run);
  }
})();