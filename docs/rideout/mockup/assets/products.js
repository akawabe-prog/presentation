(function(){
  var ctrl=document.querySelector('.pctrl');
  if(ctrl){
    var grid=document.getElementById('pgrid'), cnt=ctrl.querySelector('.cnt b');
    var state={cat:'',in:'',ser:''}, q=ctrl.querySelector('#q');
    function apply(){
      var n=0, words=String(q&&q.value||'').toLowerCase().replace(/[　\s]+/g,' ').trim().split(' ').filter(Boolean);
      grid.querySelectorAll('.pc').forEach(function(c){
        var ok=(!state.cat||c.dataset.cat===state.cat)&&(!state.in||c.dataset.in==='1')&&(!state.ser||c.dataset.ser===state.ser);
        if(ok&&words.length){ var t=c.dataset.q||''; ok=words.every(function(w){return t.indexOf(w)>=0}); }
        c.hidden=!ok; if(ok)n++;
      });
      if(cnt)cnt.textContent=n;
    }
    ctrl.querySelectorAll('.seg').forEach(function(seg){
      var f=seg.dataset.f;
      seg.addEventListener('click',function(ev){
        var b=ev.target.closest('button'); if(!b)return;
        var v=b.dataset.v;
        if(f==='in'){ state.in=(state.in===v)?'':v; b.setAttribute('aria-pressed',state.in?'true':'false'); }
        else{ state[f]=v; seg.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')}); }
        apply();
      });
    });
    if(q){ var t; q.addEventListener('input',function(){clearTimeout(t);t=setTimeout(apply,120)}); }
    var m=/[#&]cat=([^&]+)/.exec(decodeURIComponent(location.hash||''));
    if(m){ var want=m[1]; var btn=[].slice.call(ctrl.querySelectorAll('.seg[data-f=cat] button')).find(function(x){return x.dataset.v===want});
      if(btn) btn.click(); }
  }
  /* ライブ更新：customjapan.net 配下でのみ（他ドメインからは商品APIが 403） */
  if(!/(^|\.)customjapan\.net$/.test(location.hostname)||!ctrl) return;
  var ids; try{ ids=JSON.parse(ctrl.getAttribute('data-live')).ids; }catch(e){ return; }
  var API='https://api-a.customjapan.net/1/indexes/*/queries';
  function q(filters){
    return fetch(API,{method:'POST',headers:{'Content-Type':'application/json'},credentials:'include',cache:'no-store',
      body:JSON.stringify({requests:[{indexName:'item',params:{query:'',filters:filters,hitsPerPage:100,page:0,
        attributesToRetrieve:['id','price','status','icons'],attributesToHighlight:[]}}]})})
      .then(function(r){return r.json()}).then(function(j){return (j.results&&j.results[0]&&j.results[0].hits)||[]});
  }
  var batches=[]; for(var i=0;i<ids.length;i+=50) batches.push(ids.slice(i,i+50).map(function(x){return 'objectID:'+x}).join(' OR '));
  Promise.all(batches.map(q)).then(function(all){
    var upd=0;
    all.flat().forEach(function(h){
      var c=document.querySelector('.pc[data-id="'+h.id+'"]'); if(!c)return;
      var p=h.price&&h.price.regular&&h.price.regular.pc&&h.price.regular.pc.taxIn;
      var b=c.querySelector('.pprice b'); if(b&&p)b.textContent='¥'+p.toLocaleString('ja-JP');
      var st=c.querySelector('.st'); var cd=h.status&&h.status.cd;
      if(st&&cd){ var inst=cd==='SE'; st.textContent=inst?'在庫あり':(h.status.txt||'取寄'); st.classList.toggle('in',inst); c.dataset.in=inst?'1':'0'; }
      upd++;
    });
    var n=document.getElementById('livenote'); if(n&&upd){ n.textContent='LIVE ／ customjapan.net 商品APIから価格・在庫を更新（'+new Date().toLocaleTimeString('ja-JP',{hour:'2-digit',minute:'2-digit'})+'）'; n.classList.add('ok'); }
  }).catch(function(){});
})();