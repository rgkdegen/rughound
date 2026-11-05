function dogSVG(id){return `<svg viewBox="0 0 240 300" width="100%" height="100%" style="overflow:visible">
<defs>
 <filter id="g${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2.6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
 <filter id="gg${id}" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
 <radialGradient id="ey${id}" cx="45%" cy="40%" r="65%"><stop offset="0" stop-color="#fff"/><stop offset=".45" stop-color="var(--e1,#ffb340)"/><stop offset="1" stop-color="var(--e2,#ff6a00)"/></radialGradient>
 <linearGradient id="gold${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff3a8"/><stop offset=".5" stop-color="#ffd84a"/><stop offset="1" stop-color="#c98a10"/></linearGradient>
</defs>
<g id="tail${id}"><path d="M176,262 C214,250 226,212 214,182" fill="none" stroke="#ffb340" stroke-width="15" stroke-linecap="round" filter="url(#g${id})"/><path d="M176,262 C214,250 226,212 214,182" fill="none" stroke="#120c07" stroke-width="9" stroke-linecap="round"/></g>
<path d="M60,290 C50,226 64,168 120,160 C176,168 190,226 180,290 Z" fill="#120c07" stroke="#ffb340" stroke-width="3.2" filter="url(#g${id})"/>
<path d="M96,206 C104,236 136,236 144,206 C138,250 102,250 96,206 Z" fill="#f2dcb6" opacity=".92"/>
<!-- gold chain + pendant -->
<path d="M78,196 Q120,232 162,196" fill="none" stroke="url(#gold${id})" stroke-width="5" stroke-dasharray="7 3" filter="url(#g${id})"/>
<g id="pend${id}"><circle cx="120" cy="230" r="17" fill="url(#gold${id})" stroke="#fff3a8" stroke-width="1.5" filter="url(#gg${id})"/><text x="120" y="234" text-anchor="middle" font-family="RB" font-weight="900" font-size="10" fill="#4a3208">$SNIFF</text></g>
<ellipse cx="92" cy="290" rx="22" ry="12" fill="#120c07" stroke="#ffb340" stroke-width="3"/><ellipse cx="148" cy="290" rx="22" ry="12" fill="#120c07" stroke="#ffb340" stroke-width="3"/>
<g id="pl${id}"><path d="M82,286 l0,-7 M92,284 l0,-8 M102,286 l0,-7" stroke="#ffb340" stroke-width="1.6"/></g>
<g id="hd${id}">
 <g id="el${id}"><path d="M66,72 C38,78 26,128 36,176 C44,190 66,184 74,164 C80,132 82,98 66,72 Z" fill="#2a1a0c" stroke="#ffb340" stroke-width="3" filter="url(#g${id})"/></g>
 <g id="er${id}"><path d="M174,72 C202,78 214,128 204,176 C196,190 174,184 166,164 C160,132 158,98 174,72 Z" fill="#2a1a0c" stroke="#ffb340" stroke-width="3" filter="url(#g${id})"/></g>
 <path d="M120,48 C168,48 186,82 184,120 C182,158 160,182 120,184 C80,182 58,158 56,120 C54,82 72,48 120,48 Z" fill="#120c07" stroke="#ffb340" stroke-width="3.2" filter="url(#g${id})"/>
 <path d="M120,52 L120,92" stroke="#ff8a1f" stroke-width="2" opacity=".35"/>
 <ellipse cx="92" cy="86" rx="8" ry="5" fill="#ffb340" opacity=".85"/><ellipse cx="148" cy="86" rx="8" ry="5" fill="#ffb340" opacity=".85"/>
 <g id="cap${id}"><path d="M70,62 C74,30 166,30 170,62 Z" fill="#14203a" stroke="#7ab8ff" stroke-width="3" filter="url(#g${id})"/><path d="M60,64 Q120,80 180,64 L176,72 Q120,88 64,72 Z" fill="#0c1426" stroke="#7ab8ff" stroke-width="2.5"/><path d="M120,32 l9,6 -3,11 h-12 l-3,-11 z" fill="url(#gold${id})" stroke="#fff3a8" stroke-width="1"/><text x="120" y="46" text-anchor="middle" font-family="RB" font-weight="900" font-size="8" fill="#14203a">K9</text></g><g id="eyes${id}" filter="url(#gg${id})"><g class="eo"><ellipse cx="94" cy="108" rx="15" ry="17" fill="url(#ey${id})"/><ellipse cx="146" cy="108" rx="15" ry="17" fill="url(#ey${id})"/>
  <circle class="pu" cx="95" cy="110" r="6.5" fill="#0a0604"/><circle class="pu" cx="147" cy="110" r="6.5" fill="#0a0604"/><circle cx="90" cy="103" r="3" fill="#fff"/><circle cx="142" cy="103" r="3" fill="#fff"/></g>
  <g class="eh" style="display:none"><path d="M80,112 Q94,94 108,112" stroke="#3fffc8" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M132,112 Q146,94 160,112" stroke="#3fffc8" stroke-width="6" fill="none" stroke-linecap="round"/></g></g>
 <g class="eb" style="display:none"><path d="M76,86 L108,96" stroke="#ff4d5e" stroke-width="5" stroke-linecap="round"/><path d="M164,86 L132,96" stroke="#ff4d5e" stroke-width="5" stroke-linecap="round"/></g>
 <ellipse cx="120" cy="150" rx="40" ry="28" fill="#f2dcb6" stroke="#ffb340" stroke-width="2"/>
 <g id="nose${id}"><path d="M104,136 C104,126 136,126 136,136 C136,146 126,152 120,152 C114,152 104,146 104,136 Z" fill="#0a0604" stroke="#3a2a1a" stroke-width="1.5"/><ellipse cx="114" cy="133" rx="5" ry="2.5" fill="#fff" opacity=".75"/></g>
 <path d="M120,152 L120,160" stroke="#0a0604" stroke-width="2.4"/>
 <path class="mc" d="M100,160 Q110,170 120,160 Q130,170 140,160" fill="none" stroke="#0a0604" stroke-width="2.6" stroke-linecap="round"/>
 <path class="mopen" d="M100,160 Q120,198 140,160 Q120,170 100,160 Z" fill="#6a1420" stroke="#0a0604" stroke-width="2.4" style="display:none"/>
 <path class="tongue" d="M112,164 Q112,190 120,192 Q128,190 128,164 Z" fill="#ff7a9a" stroke="#d24a6a" stroke-width="1.5" style="display:none"/>
 <g id="shades${id}" style="display:none"><rect x="70" y="96" width="44" height="22" rx="3" fill="#050505" stroke="#ffd84a" stroke-width="2"/><rect x="126" y="96" width="44" height="22" rx="3" fill="#050505" stroke="#ffd84a" stroke-width="2"/><rect x="112" y="102" width="16" height="5" fill="#050505" stroke="#ffd84a" stroke-width="1.5"/><path d="M76,100 l10,0 M132,100 l10,0" stroke="#fff" stroke-width="2.5" opacity=".8"/></g>
</g></svg>`}

function poseDog(id,st,t,lean,shadesY){const root=document.getElementById('hd'+id).ownerSVGElement;const q=s=>root.querySelector(s);
 const col={idle:['#ffb340','#ff6a00'],sniff:['#fff0a0','#ffb000'],dig:['#ffd080','#ff8a1f'],bark:['#ff6b78','#d2142b'],happy:['#3fffc8','#0fbf8a']}[st]||['#ffb340','#ff6a00'];
 root.style.setProperty('--e1',col[0]);root.style.setProperty('--e2',col[1]);
 const happy=st=='happy';q('.eo').style.display=happy?'none':'';q('.eh').style.display=happy?'':'none';q('.eb').style.display=st=='bark'?'':'none';
 const barkOpen=st=='bark'&&Math.sin(t*20)>-.2;q('.mopen').style.display=barkOpen||happy?'':'none';q('.mc').style.display=barkOpen||happy?'none':'';q('.tongue').style.display=happy?'':'none';
 const bl=(t%3.2)<.1&&st=='idle';q('.eo').setAttribute('transform',`translate(0,108) scale(1,${st=='sniff'?.55:bl?.1:1}) translate(0,-108)`);
 root.querySelectorAll('.pu').forEach(p=>p.setAttribute('transform',`translate(${lean*6+(st=='sniff'?Math.sin(t*9)*2:0)},${st=='dig'?4:0})`));
 const hr=st=='sniff'?lean*10+Math.sin(t*14)*3:st=='bark'?Math.sin(t*20)*3:st=='dig'?lean*6:lean*4+Math.sin(t*1.4)*3;
 const hy=st=='sniff'?8:st=='dig'?12:st=='bark'?-6+Math.sin(t*20)*2:Math.sin(t*2)*2;
 q('#hd'+id).setAttribute('transform',`translate(${lean*8},${hy}) rotate(${hr} 120 170)`);
 q('#nose'+id).setAttribute('transform',st=='sniff'?`translate(${Math.sin(t*38)*1.6},${Math.cos(t*31)*1.2}) scale(${1+Math.abs(Math.sin(t*19))*.06})`:'');
 const ef=st=='bark'?Math.sin(t*20)*10:st=='happy'?Math.sin(t*12)*8:Math.sin(t*2)*3;
 q('#el'+id).setAttribute('transform',`rotate(${ef} 66 76)`);q('#er'+id).setAttribute('transform',`rotate(${-ef} 174 76)`);
 q('#tail'+id).setAttribute('transform',`rotate(${(st=='happy'?Math.sin(t*28)*26:Math.sin(t*9)*10)} 176 262)`);
 q('#pl'+id).setAttribute('transform',st=='dig'?`translate(0,${Math.sin(t*34)*5})`:'');
 const sh=q('#shades'+id);if(shadesY===null){sh.style.display='none'}else{sh.style.display='';sh.setAttribute('transform',`translate(0,${shadesY})`)}
 q('#pend'+id).setAttribute('transform',`rotate(${Math.sin(t*3)*6} 120 210)`)}
