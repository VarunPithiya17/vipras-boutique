/* parametric blouse illustration, used by home teaser + Design Studio */
const NECK_F={round:'M116 42 Q150 98 184 42',sweetheart:'M112 42 L117 84 Q132 106 150 90 Q168 106 183 84 L188 42',v:'M116 42 L150 124 L184 42',boat:'M96 44 Q150 66 204 44',square:'M116 42 L116 102 L184 102 L184 42'};
const NECK_B={deepu:'M108 42 Q106 178 150 178 Q194 178 192 42',dori:'M110 42 Q108 160 150 160 Q192 160 190 42',keyhole:'M118 42 Q150 82 182 42',matka:'M112 42 Q92 140 150 168 Q208 140 188 42',paan:'M112 42 C100 120 150 172 150 172 C150 172 200 120 188 42'};
const SLEEVE={none:null,short:112,elbow:178,three:236};
function blouseSVG(o){
 const c=o.color||'#6b1420',st=shade(c,-35),skin='#ecd3bd',back=o.view=='back';
 const neck=back?NECK_B[o.back]:NECK_F[o.front];
 const body='M96 44 Q72 48 62 64 L70 128 Q92 140 92 176 L96 262 Q150 274 204 262 L208 176 Q208 140 230 128 L238 64 Q228 48 204 44 Z';
 let sl='';const L=SLEEVE[o.sleeve];
 if(L){sl=`<path d="M62 64 Q44 70 38 92 L${L>150?24:30} ${L} L${L>150?54:62} ${L+6} L70 128 Z" fill="${c}" stroke="${st}" stroke-width="1.6"/><path d="M238 64 Q256 70 262 92 L${L>150?276:270} ${L} L${L>150?246:238} ${L+6} L230 128 Z" fill="${c}" stroke="${st}" stroke-width="1.6"/>`;
  if(o.work=='piping'||o.work=='ari')sl+=`<path d="M${L>150?24:30} ${L} L${L>150?54:62} ${L+6}M${L>150?276:270} ${L} L${L>150?246:238} ${L+6}" stroke="#d9b36a" stroke-width="4" stroke-linecap="round"/>`}
 const cut=`<path d="${neck}${back&&o.back=='keyhole'?'':' Z'}" fill="${skin}" stroke="${st}" stroke-width="1.6"/>`+(back&&o.back=='keyhole'?`<path d="M150 70 C128 70 128 120 150 132 C172 120 172 70 150 70Z" fill="${skin}" stroke="${st}" stroke-width="1.6"/>`:'');
 let deco='';
 if(o.work=='piping')deco+=`<path d="${neck}" fill="none" stroke="#d9b36a" stroke-width="4"/><path d="M96 262 Q150 274 204 262" fill="none" stroke="#d9b36a" stroke-width="5"/>`;
 if(o.work=='ari')deco+=`<path d="${neck}" fill="none" stroke="#d9b36a" stroke-width="2.4" stroke-dasharray="1 7" stroke-linecap="round" class="ari"/><path d="${neck}" fill="none" stroke="#d9b36a" stroke-width="1" transform="translate(0 7)" opacity=".8"/><path d="M96 252 Q150 264 204 252" fill="none" stroke="#d9b36a" stroke-width="3" stroke-dasharray="1 6" stroke-linecap="round"/>`;
 if(o.work=='mirror'){for(let x=104;x<=196;x+=13)deco+=`<path d="M${x} 248 l5 6 -5 6 -5 -6z" fill="#f4ecdf" stroke="#d9b36a" stroke-width="1"/>`}
 if(back&&(o.back=='dori'||o.latkan))deco+=`<path d="M128 150 Q150 160 172 150" fill="none" stroke="#d9b36a" stroke-width="2"/><path d="M150 158 L138 214 M150 158 L162 214" stroke="#d9b36a" stroke-width="1.8"/><circle cx="138" cy="218" r="6" fill="#c8302c"/><circle cx="162" cy="218" r="6" fill="#c8302c"/><path d="M134 222 l-2 14 M138 224 v14 M142 222 l2 14 M158 222 l-2 14 M162 224 v14 M166 222 l2 14" stroke="#d9b36a" stroke-width="1.2"/>`;
 const hooks=back?'':`<path d="M150 ${o.front=='v'?126:o.front=='square'?104:100} V262" stroke="${st}" stroke-width="1" stroke-dasharray="3 5" opacity=".6"/>`;
 return `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="tx" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M0 8L8 0" stroke="#fff" stroke-opacity=".07"/></pattern></defs>${sl}<path d="${body}" fill="${c}" stroke="${st}" stroke-width="1.6"/><path d="${body}" fill="url(#tx)"/><path d="M92 176 Q150 190 208 176" fill="none" stroke="${st}" stroke-width="1" opacity=".5"/>${hooks}${cut}${deco}</svg>`}
function shade(h,a){const n=parseInt(h.slice(1),16);const f=v=>Math.max(0,Math.min(255,v+a));return '#'+((f(n>>16)<<16)|(f(n>>8&255)<<8)|f(n&255)).toString(16).padStart(6,'0')}
