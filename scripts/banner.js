// Renders assets/banner.png (1500x500) with the terminal's own dog art.
const {chromium}=require('playwright');const path=require('path');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1500,height:500}});
await p.goto('file://'+path.resolve(__dirname,'../terminal/index.html')+'?render');await p.waitForFunction('window.READY');
await p.evaluate(()=>{
 document.documentElement.style.cssText='width:1500px;height:500px';document.body.style.cssText='width:1500px;height:500px;overflow:hidden;background:#0a0907';
 const bones=[[620,70,1.2],[1440,440,1],[980,40,.8],[560,440,.9],[1460,60,.9]].map(([x,y,s])=>`<g opacity=".35">${bone(x,y,s,'#ffb340')}</g>`).join('');
 document.body.innerHTML=`
 <div style="position:absolute;inset:0;background:radial-gradient(520px 420px at 1150px 260px,rgba(255,179,64,.2),transparent 70%),radial-gradient(700px 500px at 0% 100%,rgba(63,255,200,.12),transparent 70%),#0a0907"></div>
 <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(255,179,64,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,179,64,.04) 1px,transparent 1px);background-size:22px 22px"></div>
 <svg width="1500" height="500" style="position:absolute;left:0;top:0">${bones}</svg>
 <div style="position:absolute;left:64px;top:44px;font:800 15px JB;color:#ffb340;letter-spacing:3px">PUMP.FUN · RUG FILTER · BUILT BY RUGIKK</div>
 <div style="position:absolute;left:58px;top:66px;font:900 132px RB;color:#ffb340;letter-spacing:2px;text-shadow:0 0 34px rgba(255,179,64,.75)">RUG<span style="color:#3fffc8;text-shadow:0 0 34px rgba(63,255,200,.75)">HOUND</span></div>
 <div style="position:absolute;left:66px;top:224px"><span style="display:inline-block;padding:4px 18px;border:3px solid #ffd84a;border-radius:10px;font:800 34px JB;color:#ffd84a;box-shadow:0 0 18px rgba(255,216,74,.5)">$SNIFF</span></div>
 <div style="position:absolute;left:66px;top:298px;font:700 19px JB;color:#f5ecdf">one dog · every task · no rugs in the bag</div>
 <div style="position:absolute;left:66px;top:342px;display:flex;gap:8px;font:800 13px JB">${['SNIFF','DIG','BARK','BURY','FETCH'].map((s,i)=>`<span style="padding:6px 12px;border:1px solid ${['#ffb340','#ffb340','#ff4d5e','#ff4d5e','#3fffc8'][i]};border-radius:6px;color:${['#ffb340','#ffd080','#ff6b78','#ff6b78','#3fffc8'][i]};background:rgba(255,255,255,.03)">${s}</span>${i<4?'<span style="color:#5e5240;align-self:center">→</span>':''}`).join('')}</div>
 <div style="position:absolute;left:66px;top:400px;font:700 15px JB;color:#f5ecdf">8 hard red flags &nbsp;·&nbsp; <span style="color:#ff6b78">one WOOF = skip</span> &nbsp;·&nbsp; <span style="color:#3fffc8">clean = fetch</span> &nbsp;·&nbsp; 0 runtime deps</div>
 <div style="position:absolute;left:66px;top:440px;font:700 13px JB;color:#ff8a1f">@rgk_degen <span style="color:#9a8a72;font-weight:400">· open source · MIT</span></div>
 <div style="position:absolute;left:1000px;top:40px;width:330px;height:440px;background:radial-gradient(ellipse at 50% 30%,rgba(255,220,150,.16),transparent 65%);clip-path:polygon(35% 0,65% 0,100% 100%,0 100%)"></div>
 <div id="bdog" style="position:absolute;left:1040px;top:78px;width:260px;height:325px">${dogSVG('b')}</div>
 <div style="position:absolute;left:870px;top:160px;transform:rotate(-14deg);padding:5px 14px;border:3px solid #ff4d5e;border-radius:8px;color:#ff4d5e;font:800 26px RB;letter-spacing:2px;box-shadow:0 0 18px rgba(255,77,94,.6);text-shadow:0 0 8px #ff4d5e;background:rgba(40,6,10,.6)">WOOF!</div>
 <div style="position:absolute;left:1316px;top:300px;transform:rotate(10deg);padding:5px 14px;border:3px solid #3fffc8;border-radius:8px;color:#3fffc8;font:800 20px JB;text-align:center;line-height:20px;box-shadow:0 0 18px rgba(63,255,200,.5);background:rgba(4,30,22,.6)">🦴 FETCH<div style="font-size:10px">+5.49 SOL</div></div>
 <div style="position:absolute;left:1010px;top:402px;width:320px;height:3px;background:#ffb340;box-shadow:0 0 14px #ffb340"></div>`;
 poseDog('b','happy',0.4,0,0);
});
await p.waitForTimeout(200);await p.screenshot({path:path.resolve(__dirname,'../assets/banner.png')});await b.close()})();
