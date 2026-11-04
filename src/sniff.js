#!/usr/bin/env node
// RUGHOUND · $SNIFF — one dog, five tasks.
// SNIFF → DIG → BARK → BURY / FETCH
// Simulated: reads token snapshots from data/pairs.json, never touches a wallet.

const fs = require('fs');
const path = require('path');

const GATE = 0.85;
const GUARD = { spendCapSol: 5.0, sizeSol: 0.5, tp: [2, 4, 9], tpSplit: [0.4, 0.35, 0.15], sl: -0.35 };
const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));

// 01 SNIFF — is the scent worth following at all? (cheap pre-filter)
function sniff(p) {
  const scent = clamp(p.holders / 500) * 0.5 + clamp(1 - p.top10Pct / 100) * 0.3 + clamp(p.socialsAgeMin / 1440) * 0.2;
  return { scent: +scent.toFixed(2), follow: p.mc >= 20000 };
}

// 02 DIG — who is the dev, really?
function dig(p) {
  const d = p.dev;
  const trust = clamp(d.walletAgeDays / 180) * 0.4 + (d.fundedBy === 'cex' ? 0.3 : 0) + clamp(1 - d.holdPct / 10) * 0.3 - d.priorRugs * 0.5;
  return { devTrust: +clamp(trust).toFixed(2), serialRugger: d.priorRugs > 0 };
}

// 03 BARK — hard red flags. One WOOF is enough.
const FLAGS = [
  ['dev bag', p => p.dev.holdPct > 10, p => `dev holds ${p.dev.holdPct}%`],
  ['LP unlocked', p => !p.lpBurned, () => 'LP unlocked'],
  ['honeypot', p => p.sellTaxPct >= 50, p => `${p.sellTaxPct}% sell tax`],
  ['bundled', p => p.bundledPct > 50, p => `${p.bundledPct}% bundled`],
  ['copycat', p => !!p.copycatOf, p => `copycat of $${p.copycatOf}`],
  ['mint live', p => !p.mintRevoked, () => 'mint still live'],
  ['freeze live', p => !p.freezeRevoked, () => 'freeze authority live'],
  ['bot hype', p => p.botMentionPct > 85, p => `${p.botMentionPct}% bot mentions`],
  ['fresh socials', p => p.socialsAgeMin < 10, p => `socials ${p.socialsAgeMin}m old`],
  ['top-10 heavy', p => p.top10Pct > 60, p => `top10 hold ${p.top10Pct}%`],
  ['serial rugger', p => p.dev.priorRugs > 0, p => `dev rugged ${p.dev.priorRugs} coin(s) before`],
];
function bark(p) {
  return FLAGS.filter(([, test]) => test(p)).map(([name, , why]) => ({ name, why: why(p) }));
}

// score: scent + dev trust, squashed into a confidence
function score(s, d) {
  const raw = s.scent * 0.5 + d.devTrust * 0.5;
  return +(1 / (1 + Math.exp(-14 * (raw - 0.68)))).toFixed(2);
}

function run(pairs) {
  const out = { spent: 0, buried: [], fetched: [], log: [] };
  for (const p of pairs) {
    const s = sniff(p);
    if (!s.follow) { out.log.push({ ticker: p.ticker, verdict: 'SKIP', why: 'no scent' }); continue; }
    const d = dig(p);
    const woofs = bark(p);
    const conf = woofs.length ? 0 : score(s, d);
    if (woofs.length || conf < GATE || out.spent + GUARD.sizeSol > GUARD.spendCapSol) {
      // 04 BURY
      const why = woofs[0] ? woofs[0].why : `confidence ${conf} < ${GATE}`;
      out.buried.push({ ticker: p.ticker, why });
      out.log.push({ ticker: p.ticker, verdict: 'BURY', conf, why });
    } else {
      // 05 FETCH (simulated entry)
      out.spent += GUARD.sizeSol;
      out.fetched.push({ ticker: p.ticker, conf });
      out.log.push({ ticker: p.ticker, verdict: 'FETCH', conf, why: `ape ${GUARD.sizeSol} SOL · tp ${GUARD.tp.join('x/')}x · sl ${GUARD.sl * 100}%` });
    }
  }
  return out;
}

if (require.main === module) {
  const file = process.argv[2] || path.join(__dirname, '..', 'data', 'pairs.json');
  const res = run(JSON.parse(fs.readFileSync(file, 'utf8')));
  console.log('\n  U・ᴥ・U  RUGHOUND · $SNIFF · gate', GATE, '\n');
  for (const r of res.log) {
    const tag = r.verdict === 'FETCH' ? '\x1b[36mFETCH\x1b[0m' : '\x1b[31mBURY \x1b[0m';
    console.log(`  sniff> ${tag}  $${r.ticker.padEnd(9)} ${String(r.conf ?? '-').padEnd(4)}  ${r.why}`);
  }
  console.log(`\n  ${res.buried.length} buried · ${res.fetched.length} fetched · spent ${res.spent.toFixed(1)}/${GUARD.spendCapSol} SOL · good boy\n`);
}

module.exports = { sniff, dig, bark, score, run, FLAGS, GATE, GUARD };
