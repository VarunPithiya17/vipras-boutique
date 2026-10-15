/* Vipra's Boutique — shared data, layout, bag, search, motion */
const WA='919422012929',PHONE='+91 94220 12929';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const rs=n=>'₹'+Math.round(n).toLocaleString('en-IN');
const P=[
 {id:1,n:'Handwork Silk Saree & Matching Blouse',c:'Sarees',p:6800,i:['p01','l07'],t:'Signature',d:'The same hand-embroidered motif carried from blouse to saree border. Blouse stitched to your measurements.',k:'silk saree handwork wedding festive blouse',fab:'Pure silk blend',days:14},
 {id:2,n:'Ari Work Designer Blouse',c:'Blouses',p:3200,i:['p02','l06'],t:'Bestseller',d:'Intricate Ari hand embroidery on raw silk, with a back-neck design of your choice.',k:'ari aari blouse embroidery bridal silk',fab:'Raw silk',days:12,v:'ari'},
 {id:3,n:'Woven Yoke Straight Kurta',c:'Kurtas',p:1650,i:['p03','l05'],d:'Rani-pink cotton kurta with a woven yoke. Stitched straight or A-line, any length.',k:'kurta pink cotton daily',fab:'Cotton',days:7},
 {id:4,n:'Cobalt Cotton Suit Set',c:'Dress Materials',p:1140,i:['p04','l04'],t:'From ₹1,140',d:'Three-piece unstitched set with mirror-diamond motif. Add stitching from ₹750.',k:'suit dress material cotton blue unstitched',fab:'Cotton',days:7,v:'fabric'},
 {id:5,n:'Slate & Gold Dupatta Set',c:'Dress Materials',p:1890,i:['p05','l02'],d:'Patchwork kurta fabric with a shimmering gold-tone dupatta. Festive but light.',k:'dupatta gold festive dress material',fab:'Cotton silk',days:7},
 {id:6,n:'Coral Brocade Kurta Fabric',c:'Dress Materials',p:1480,i:['p06','l07'],t:'New',d:'Soft brocade with tonal florals. Perfect for an anarkali or a short festive kurta.',k:'brocade coral kurta fabric festive',fab:'Brocade',days:7},
 {id:7,n:'Teal Leaf Embroidered Set',c:'Dress Materials',p:2150,i:['p07','l08'],t:'New',d:'Leaf embroidery on teal cotton silk, with a matching pastel dupatta.',k:'teal embroidery cotton silk set',fab:'Cotton silk',days:7},
 {id:8,n:'Noir Floral Butta Set',c:'Dress Materials',p:1750,i:['p08','l03'],d:'Black base with rose butta embroidery and a printed floral dupatta.',k:'black floral embroidery set',fab:'Chanderi',days:7},
 {id:9,n:'Everyday Printed Tops',c:'Kurtas',p:890,i:['p09','l05'],t:'Ready to wear',d:'Breathable cotton tops in sizes S–XXL. Pocket friendly, office ready.',k:'top kurti daily office printed cotton',fab:'Cotton',days:3},
 {id:10,n:'Ikat Silk Kurta Fabric',c:'Dress Materials',p:1140,i:['p10','l09'],d:'Handloom ikat in sky blue with a woven border. Our most re-ordered fabric.',k:'ikat silk handloom blue fabric',fab:'Handloom ikat',days:7},
 {id:11,n:'Silk Blouse Fabric Edit',c:'Blouses',p:650,i:['p11','l01'],d:'Plain and printed raw-silk blouse pieces. Pick any shade, stitched in a week.',k:'blouse fabric silk plain',fab:'Raw silk',days:7,v:'fabric2'},
 {id:12,n:'Little Princess Gown',c:'Kids',p:1950,i:['p12','l11'],t:'Kids',d:'Blush satin gown with a bow back, made to measure for ages 3–12.',k:'kids girl gown frock birthday party',fab:'Satin',days:10},
 {id:13,n:'Customised Twinning Set',c:'Twinning',p:4999,i:['l10','l11'],t:'Exclusive',d:'Coordinated outfits for couples or mother-daughter, cut from the same fabric story.',k:'twinning couple family matching wedding',fab:'Silk brocade',days:14,v:'family'},
 {id:14,n:'Festive Yellow Suit & Dupatta',c:'Kurtas',p:2450,i:['l09','l02'],d:'Navratri-ready mustard suit with contrast dupatta, stitched to measure.',k:'yellow festive navratri suit kurta',fab:'Cotton silk',days:10},
 {id:15,n:'Pink Chanderi Anarkali Suit',c:'Kurtas',p:2890,i:['l06','l08'],t:'Bestseller',d:'Floor-grazing chanderi suit with gota detailing and a printed silk dupatta.',k:'pink anarkali chanderi suit festive',fab:'Chanderi',days:10},
 {id:16,n:'Coral Handloom Saree',c:'Sarees',p:3450,i:['l07','p06'],d:'Lightweight handloom with a woven zari border. Blouse piece included.',k:'saree coral handloom zari',fab:'Handloom cotton',days:5},
];
const CATS=[['Blouses','p02','Ari, designer & bridal'],['Kurtas','l06','Straight, A-line, anarkali'],['Sarees','p01','Handwork & handloom'],['Dress Materials','p07','Unstitched sets'],['Twinning','l10','Couples & families'],['Kids','p12','Made to measure']];
const SERVICES=[
 {id:'blouse',n:'Designer blouse',p:850,m:45,d:'Custom back neck, piping, latkans'},
 {id:'ari',n:'Ari work blouse',p:2200,m:60,d:'Hand embroidery consultation'},
 {id:'kurta',n:'Kurta / suit stitching',p:550,m:30,d:'Straight, A-line or anarkali'},
 {id:'bridal',n:'Bridal & bulk orders',p:0,m:90,d:'Wedding wardrobe planning'},
 {id:'twin',n:'Twinning set',p:4999,m:60,d:'Couple or family coordination'},
 {id:'alter',n:'Alterations',p:150,m:20,d:'Fitting, length, sleeves'},
];
const LS={g(k,d){try{const v=JSON.parse(localStorage.getItem(k));return v??d}catch(e){return d}},s(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const byId=id=>P.find(p=>p.id==id);
const store={get cart(){return LS.g('vb_cart',[])},set cart(v){LS.s('vb_cart',v);badges()},get wish(){return LS.g('vb_wish',[])},set wish(v){LS.s('vb_wish',v);badges()}};
const heart='<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>';
const logoSvg='<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="19" fill="none" stroke="#b8893b"/><circle cx="20" cy="20" r="16.2" fill="none" stroke="#b8893b" stroke-width=".4" stroke-dasharray="1 1.6"/><path d="M20 8.4c1.5 0 2.3 1.3 1.9 2.6-.3.9-1.1 1.5-1.9 1.5s-1.6-.6-1.9-1.5c-.4-1.3.4-2.6 1.9-2.6zm-2.5 5.2h5l1.2 3.8 5 11.8H11.3l5-11.8z" fill="#c8302c"/><path d="M15.6 17.6l-4.2-3.4M24.4 17.6l4.2-3.4" stroke="currentColor" stroke-width=".8"/></svg>';
function card(p){const w=store.wish.includes(p.id);return `<article class="pc" data-rv><a class="ph" href="product.html?id=${p.id}" data-cur="View">${p.t?`<span class="tag">${p.t}</span>`:''}<img src="img/${p.i[0]}.webp" alt="${p.n}" loading="lazy"><img src="img/${p.i[1]}.webp" alt="" loading="lazy"><button class="qa" data-add="${p.id}">Add to bag</button></a><button class="wl${w?' on':''}" data-wl="${p.id}" aria-label="Save to wishlist">${heart}</button><h4><a href="product.html?id=${p.id}">${p.n}</a></h4><div class="pr"><span>${p.c}</span><b>${rs(p.p)}</b></div></article>`}
function match(p,s){s=(s||'').toLowerCase().trim();if(!s)return true;const h=(p.n+' '+p.c+' '+p.k+' '+p.fab).toLowerCase();return s.split(/\s+/).every(w=>h.includes(w))}

/* ---------- layout ---------- */
const page=document.body.dataset.page||'';
const NAV=[['index.html','Home','home'],['shop.html','Shop','shop'],['studio.html','Design Studio','studio'],['book.html','Appointments','book'],['about.html','Our Story','about']];
document.body.insertAdjacentHTML('afterbegin',`
<div id="curtain"><span>Vipra's</span></div><div class="cursor" id="cursor"></div>
<header class="hd${document.body.dataset.dark?' onDark':''}" id="hd"><div class="wrap in">
 <a href="index.html" class="logo" aria-label="Vipra's Boutique home">${logoSvg}<span>Vipra's<small>BOUTIQUE · PUNE</small></span></a>
 <nav class="main">${NAV.map(n=>`<a href="${n[0]}" class="${page==n[2]?'on':''}">${n[1]}</a>`).join('')}<a href="track.html" class="${page=='track'?'on':''}">Track</a></nav>
 <div class="icons">
  <button class="ic" data-open="search" aria-label="Search"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg></button>
  <a class="ic hide-m" href="track.html" aria-label="Track order"><svg viewBox="0 0 24 24"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg></a>
  <button class="ic" data-open="wish" aria-label="Wishlist"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg><span class="badge" id="wb">0</span></button>
  <button class="ic" data-open="cart" aria-label="Bag"><svg viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6zM9 8V6a3 3 0 0 1 6 0v2"/></svg><span class="badge" id="cb">0</span></button>
  <a href="book.html" class="btn btn-dark bookbtn hide-m">Book fitting</a>
  <button class="ic burger" data-open="mnav" aria-label="Menu"><svg viewBox="0 0 24 24"><path d="M4 8h16M4 16h10"/></svg></button>
 </div></div></header>
<div class="mnav" id="mnav"><button class="x" data-close>×</button>${NAV.map(n=>`<a href="${n[0]}">${n[1].replace(' ',' <em>')}${n[1].includes(' ')?'</em>':''}</a>`).join('')}<a href="track.html">Track <em>order</em></a></div>`);
document.body.insertAdjacentHTML('beforeend',`
<footer class="ft"><div class="wrap">
 <div class="ftg">
  <div><a class="logo" href="index.html">${logoSvg}<span>Vipra's<small>BOUTIQUE · PUNE</small></span></a><p style="color:var(--mute);margin-top:18px;max-width:300px;font-size:14px">Adding a designer touch to your daily wear. 10+ years of designing and stitching in Kothrud.</p>
   <form class="news" id="news"><input type="email" required placeholder="Email for new arrivals" aria-label="Email"><button>JOIN →</button></form></div>
  <div><h5>Shop</h5><ul>${CATS.slice(0,5).map(c=>`<li><a href="shop.html?c=${encodeURIComponent(c[0])}">${c[0]}</a></li>`).join('')}</ul></div>
  <div><h5>Services</h5><ul><li><a href="book.html">Book a fitting</a></li><li><a href="studio.html">Design your blouse</a></li><li><a href="track.html">Track order / booking</a></li><li><a href="about.html#rates">Stitching rates</a></li><li><a href="about.html">Our story</a></li></ul></div>
  <div><h5>Visit the studio</h5><ul><li>Bageshree Co-op Soc., Dahanukar Colony, Kothrud, Pune 411038</li><li>Mon–Sat · 10:30 am – 8:00 pm</li><li><a href="tel:+919422012929">${PHONE}</a></li><li><a href="https://www.instagram.com/vipras.boutique/" target="_blank" rel="noopener">Instagram ↗</a> · <a href="https://maps.google.com/?q=Vipra's+Boutique+Kothrud+Pune" target="_blank" rel="noopener">Directions ↗</a></li></ul></div>
 </div>
 <div class="big serif" id="bigword"><span>Vipra's</span> <em>✦</em></div>
 <div class="legal"><span>© 2026 Vipra's Boutique, Pune</span><span>Demo website by KORTIQ · prices indicative</span></div>
</div></footer>
<a class="wa" href="https://wa.me/${WA}?text=${encodeURIComponent("Hi Vipra's Boutique!")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.2.5.1.6 0l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.6-.1 1.2z"/></svg></a>
<div class="ov" id="ov"></div>
<aside class="drawer" id="cart" aria-label="Shopping bag"><div class="dh"><h3>Your bag</h3><button class="x" data-close>×</button></div><div class="db" id="cartb"></div><div class="df" id="cartf"></div></aside>
<aside class="drawer" id="wish" aria-label="Wishlist"><div class="dh"><h3>Wishlist</h3><button class="x" data-close>×</button></div><div class="db" id="wishb"></div></aside>
<div class="searchov" id="search"><div class="wrap">
 <div style="display:flex;justify-content:space-between;align-items:center"><span class="eyebrow">Search the boutique</span><button class="x" data-close>×</button></div>
 <input id="sq" placeholder="Try “ari blouse” or “ikat”" autocomplete="off">
 <div class="sugg">Popular: ${['Blouse','Kurta','Silk','Twinning','Kids','Saree'].map(s=>`<button class="chip" data-s="${s}">${s}</button>`).join('')}</div>
 <div class="sres" id="sres"></div></div></div>
<div class="modal" id="checkout"><button class="x" data-close>×</button><div class="in">
 <div class="eyebrow">Checkout</div><h3 style="margin-top:10px">Almost <em>yours</em></h3><p class="s">Every order is confirmed personally on WhatsApp. Pay by UPI or on delivery / pickup.</p>
 <form class="f" id="cof">
  <label>Full name<input name="n" required autocomplete="name"></label>
  <label>Mobile<input name="p" type="tel" required pattern="[0-9+ ]{10,14}" autocomplete="tel"></label>
  <label class="full">Delivery<select name="dm" id="dm"><option value="Pickup">Pickup from Kothrud studio (free)</option><option value="Pune delivery">Home delivery in Pune (₹60)</option><option value="India shipping">Ship across India (₹120)</option></select></label>
  <label class="full">Address<textarea name="a" placeholder="Flat, society, area, pincode"></textarea></label>
  <label class="full">Payment<select name="pm"><option>UPI on confirmation</option><option>Cash on delivery / pickup</option></select></label>
  <div class="full"><button class="btn btn-dark" type="submit" style="width:100%">Place order →</button></div>
 </form></div></div>
<div class="toast" id="toast"><i></i><span></span></div>`);

function toast(m){const t=$('#toast');t.querySelector('span').textContent=m;t.classList.add('on');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('on'),2800)}
function badges(){const c=store.cart.reduce((a,b)=>a+b.q,0),w=store.wish.length;$('#cb').textContent=c;$('#cb').classList.toggle('on',c>0);$('#wb').textContent=w;$('#wb').classList.toggle('on',w>0)}
function add(id,size='',q=1,note=''){const cart=store.cart,k=id+'|'+size+'|'+note;const e=cart.find(x=>x.k==k);e?e.q+=q:cart.push({k,id,s:size,q,note});store.cart=cart;drawCart();toast(byId(id).n+' added to bag');const b=$('#cb');if(window.gsap)gsap.fromTo(b,{scale:1.8},{scale:1,duration:.6,ease:'back.out(3)'})}
function togWish(id){let w=store.wish;w=w.includes(id)?w.filter(x=>x!=id):[...w,id];store.wish=w;$$(`[data-wl="${id}"]`).forEach(b=>b.classList.toggle('on',w.includes(id)));drawWish();toast(w.includes(id)?'Saved to wishlist ♥':'Removed from wishlist')}
const FREE=2999;
function drawCart(){const cart=store.cart,sub=cart.reduce((a,x)=>a+byId(x.id).p*x.q,0);
 $('#cartb').innerHTML=cart.length?cart.map((x,i)=>{const p=byId(x.id);return `<div class="ci"><img src="img/${p.i[0]}.webp" alt=""><div><h5>${p.n}</h5><small>${[x.s&&'Size '+x.s,x.note].filter(Boolean).join(' · ')||p.c} · ${rs(p.p)}</small><span class="qty" style="margin-top:8px"><button data-q="${i}" data-v="-1" aria-label="Less">−</button><span>${x.q}</span><button data-q="${i}" data-v="1" aria-label="More">+</button></span></div><button class="rm" data-rm="${i}">Remove</button></div>`}).join(''):`<div class="empty" style="padding:80px 0">Your bag is empty.<br><a href="shop.html" class="btn btn-dark" style="margin-top:22px">Browse the edit</a></div>`;
 $('#cartf').innerHTML=cart.length?`<div class="ship">${sub>=FREE?'✦ You have <b>free Pune delivery</b>':`Add <b>${rs(FREE-sub)}</b> more for free Pune delivery`}<i><b style="width:${Math.min(100,sub/FREE*100)}%"></b></i></div><div class="tot"><span>Subtotal</span><span>${rs(sub)}</span></div><div class="tot g"><span>Total</span><span>${rs(sub)}</span></div><button class="btn btn-dark" data-open="checkout">Checkout →</button>`:''}
function drawWish(){const w=store.wish;$('#wishb').innerHTML=w.length?w.map(id=>{const p=byId(id);return `<div class="ci"><img src="img/${p.i[0]}.webp" alt=""><div><h5>${p.n}</h5><small>${rs(p.p)}</small><button class="chip" style="margin-top:8px" data-add="${p.id}">Add to bag</button></div><button class="rm" data-wl="${p.id}">Remove</button></div>`}).join(''):`<div class="empty" style="padding:80px 0">No saved pieces yet.</div>`}
let lenis=null;
function open(id){closeAll(true);$('#'+id).classList.add('on');if(id!='mnav')$('#ov').classList.add('on');document.documentElement.style.overflow='hidden';lenis&&lenis.stop();if(id=='search')setTimeout(()=>$('#sq').focus(),300);if(id=='cart')drawCart();if(id=='wish')drawWish()}
function closeAll(keep){$$('.drawer.on,.modal.on,.searchov.on,.mnav.on').forEach(e=>e.classList.remove('on'));if(!keep){$('#ov').classList.remove('on');document.documentElement.style.overflow='';lenis&&lenis.start()}}
addEventListener('pageshow',e=>{closeAll();if(e.persisted){const c=$('#curtain');if(c)c.style.transform='translateY(-100%)'}});
addEventListener('keydown',e=>{if(e.key=='Escape')closeAll()});
document.addEventListener('click',e=>{const t=e.target.closest('[data-open],[data-close],[data-add],[data-wl],[data-q],[data-rm],[data-s],#ov');if(!t)return;const d=t.dataset;
 if(t.id=='ov')return closeAll();
 if(d.open){e.preventDefault();return open(d.open)}
 if('close' in d)return closeAll();
 if(d.add){e.preventDefault();e.stopPropagation();return add(+d.add)}
 if(d.wl){e.preventDefault();e.stopPropagation();return togWish(+d.wl)}
 if(d.q){const c=store.cart,x=c[+d.q];x.q+=+d.v;if(x.q<1)c.splice(+d.q,1);store.cart=c;return drawCart()}
 if(d.rm){const c=store.cart;c.splice(+d.rm,1);store.cart=c;return drawCart()}
 if(d.s){$('#sq').value=d.s;return sres()}
});
function sres(){const s=$('#sq').value,L=s.trim()?P.filter(p=>match(p,s)):[];$('#sres').innerHTML=s.trim()?(L.length?L.map(p=>`<a href="product.html?id=${p.id}"><img src="img/${p.i[0]}.webp" alt=""><span><b>${p.n}</b><small>${p.c} · ${rs(p.p)}</small></span></a>`).join('')+`<a href="shop.html?q=${encodeURIComponent(s)}" style="grid-template-columns:1fr;place-items:center;border:1px dashed var(--line)"><b>See all results →</b></a>`:`<p style="color:var(--mute)">No pieces found. We stitch custom too, <a class="link" href="book.html">book a consultation</a>.</p>`):''}
$('#sq').addEventListener('input',sres);
$('#sq').addEventListener('keydown',e=>{if(e.key=='Enter')location.href='shop.html?q='+encodeURIComponent(e.target.value)});
$('#news').addEventListener('submit',e=>{e.preventDefault();e.target.reset();toast('Welcome to the Vipra\'s circle ✦')});
$('#cof').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target),cart=store.cart;if(!cart.length)return;
 if(f.get('dm')!='Pickup'&&!f.get('a').trim())return toast('Please add a delivery address');
 const fee={Pickup:0,'Pune delivery':60,'India shipping':120}[f.get('dm')],sub=cart.reduce((a,x)=>a+byId(x.id).p*x.q,0),tot=sub+(f.get('dm')=='Pune delivery'&&sub>=FREE?0:fee);
 const id='VB-'+(10000+Math.floor(Math.random()*89999));
 const o=LS.g('vb_orders',{});o[id]={t:Date.now(),items:cart.map(x=>({id:x.id,q:x.q,s:x.s})),tot,dm:f.get('dm'),n:f.get('n')};LS.s('vb_orders',o);
 const lines=cart.map(x=>`• ${byId(x.id).n}${x.s?' ('+x.s+')':''}${x.note?' ['+x.note+']':''} × ${x.q} = ${rs(byId(x.id).p*x.q)}`).join('\n');
 window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(`*New order ${id}*\n${lines}\nDelivery: ${f.get('dm')}\n*Total: ${rs(tot)}*\nPayment: ${f.get('pm')}\n\nName: ${f.get('n')}\nPhone: ${f.get('p')}${f.get('a')?'\nAddress: '+f.get('a'):''}`),'_blank');
 store.cart=[];e.target.reset();closeAll();location.href='track.html?id='+id+'&new=1'});
badges();drawCart();

/* ---------- motion ---------- */
function splitLines(el){el.innerHTML=el.innerHTML.split(/<br\s*\/?>/i).map(l=>`<span class="ln"><span>${l}</span></span>`).join('')}
function initMotion(){
 const cur=$('#curtain');
 if(!window.gsap){cur&&cur.remove();return}
 gsap.registerPlugin(ScrollTrigger);
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(window.Lenis&&!reduce){lenis=new Lenis({lerp:.09});lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0)}
 // page enter
 gsap.to(cur,{yPercent:-100,duration:1,ease:'expo.inOut',delay:.15});
 gsap.fromTo('#curtain span',{yPercent:0,opacity:1},{yPercent:-60,opacity:0,duration:.6,ease:'power2.in'});
 // page leave
 document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(!a||e.defaultPrevented||e.metaKey||e.ctrlKey||a.target=='_blank')return;const h=a.getAttribute('href');if(/^(https?:|tel:|mailto:|#)/.test(h)||a.hasAttribute('download'))return;
  if(h.split('#')[0]==location.pathname.split('/').pop()&&h.includes('#')){return}
  e.preventDefault();closeAll();gsap.fromTo(cur,{yPercent:100},{yPercent:0,duration:.7,ease:'expo.inOut',onComplete:()=>location.href=h});gsap.fromTo('#curtain span',{yPercent:60,opacity:0},{yPercent:0,opacity:1,duration:.5,delay:.3})});
 // header
 let last=0;ScrollTrigger.create({start:0,end:'max',onUpdate:s=>{const y=s.scroll(),hd=$('#hd');hd.classList.toggle('scrolled',y>40);hd.classList.toggle('hide',y>400&&y>last&&!document.documentElement.style.overflow);last=y}});
 // reveals
 $$('[data-split]').forEach(el=>{splitLines(el);gsap.from($$('.ln>span',el),{yPercent:110,rotate:2,duration:1.2,stagger:.09,ease:'expo.out',delay:el.dataset.split==='now'?.6:0,scrollTrigger:el.dataset.split==='now'?null:{trigger:el,start:'top 88%'}})});
 gsap.set('[data-rv]',{opacity:0,y:60});
 ScrollTrigger.batch('[data-rv]',{start:'top 92%',onEnter:b=>gsap.fromTo(b,{y:60,opacity:0},{y:0,opacity:1,duration:1.1,stagger:.08,ease:'expo.out',overwrite:true})});
 $$('[data-fade]').forEach(el=>gsap.from(el,{y:24,opacity:0,duration:1,ease:'power3.out',delay:+el.dataset.fade||0,scrollTrigger:{trigger:el,start:'top 92%'}}));
 $$('[data-clip]').forEach(el=>gsap.from(el,{clipPath:'inset(18% 18% 18% 18% round 220px)',duration:1.6,ease:'expo.inOut',scrollTrigger:{trigger:el,start:'top 82%'}}));
 $$('[data-par]').forEach(el=>gsap.fromTo(el,{yPercent:-(+el.dataset.par||10)},{yPercent:+el.dataset.par||10,ease:'none',scrollTrigger:{trigger:el.parentElement,scrub:true}}));
 $$('[data-count]').forEach(b=>{const o={v:0},n=+b.dataset.count,f=b.dataset.dec;gsap.to(o,{v:n,duration:2.2,ease:'power2.out',scrollTrigger:{trigger:b,start:'top 92%'},onUpdate:()=>b.textContent=(f?o.v.toFixed(1):Math.round(o.v).toLocaleString('en-IN'))+(b.dataset.suf||'')})});
 gsap.from('#bigword span, #bigword em',{yPercent:60,opacity:0,stagger:.1,duration:1.4,ease:'expo.out',scrollTrigger:{trigger:'#bigword',start:'top 98%'}});
 // cursor
 const cu=$('#cursor');if(matchMedia('(pointer:fine)').matches){const xT=gsap.quickTo(cu,'x',{duration:.22}),yT=gsap.quickTo(cu,'y',{duration:.22});addEventListener('mousemove',e=>{xT(e.clientX);yT(e.clientY)});document.addEventListener('mouseover',e=>{const t=e.target.closest('[data-cur]');cu.classList.toggle('big',!!t);if(t)cu.dataset.l=t.dataset.cur})}
 // magnetic
 if(matchMedia('(pointer:fine)').matches)$$('.btn').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.22,y:(e.clientY-r.top-r.height/2)*.32,duration:.4})});b.addEventListener('mouseleave',()=>gsap.to(b,{x:0,y:0,duration:.7,ease:'elastic.out(1,.4)'}))});
 // in-page anchors via lenis
 $$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const h=a.getAttribute('href');if(h.length>1&&lenis){e.preventDefault();lenis.scrollTo(h,{offset:-70})}}));
 // videos: play only when visible
 const io=new IntersectionObserver(es=>es.forEach(x=>{const v=x.target;x.isIntersecting?v.play().catch(()=>{}):v.pause()}),{rootMargin:'100px'});$$('video[data-auto]').forEach(v=>io.observe(v));
 addEventListener('load',()=>ScrollTrigger.refresh());
}

/* ---------- appointments (shared by book / track / home) ---------- */
const SLOT_TIMES=['10:30','11:15','12:00','12:45','14:30','15:15','16:00','16:45','17:30','18:15','19:00'];
const dkey=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const isOpen=d=>d.getDay()!==0; // closed Sundays
// ponytail: demo availability is a deterministic hash of the date, swap for a real calendar API when she signs up
function busy(key,t){let h=0;for(const c of key+t)h=(h*31+c.charCodeAt(0))>>>0;return h%10<4}
function slotsFor(d){const key=dkey(d),mine=LS.g('vb_appts',{}),now=new Date();
 return SLOT_TIMES.map(t=>{const [hh,mm]=t.split(':').map(Number),dt=new Date(d.getFullYear(),d.getMonth(),d.getDate(),hh,mm);
  const taken=busy(key,t)||Object.values(mine).some(a=>a.date==key&&a.time==t&&a.status!='cancelled');return {t,ok:!taken&&dt>now}})}
function nextSlots(n=4){const out=[];const d=new Date();for(let i=0;i<14&&out.length<n;i++){const x=new Date(d.getFullYear(),d.getMonth(),d.getDate()+i);if(!isOpen(x))continue;for(const s of slotsFor(x))if(s.ok&&out.length<n)out.push({d:x,t:s.t})}return out}
const fmtD=d=>d.toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'});
const t12=t=>{let [h,m]=t.split(':').map(Number);const ap=h>=12?'pm':'am';h=h%12||12;return h+':'+String(m).padStart(2,'0')+' '+ap};
function reveal(els){if(!window.gsap)return;gsap.fromTo(els,{y:50,opacity:0},{y:0,opacity:1,duration:1,stagger:.05,ease:'expo.out',clearProps:'transform'})}
