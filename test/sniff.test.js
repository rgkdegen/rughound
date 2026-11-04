// npm test  (Node 18+, no dependencies)
const test = require('node:test');
const assert = require('node:assert');
const { bark, run, GATE, FLAGS } = require('../src/sniff');
const pairs = require('../data/pairs.json');

const clean = {
  ticker: 'CLEAN', mc: 200000, ageSec: 600,
  dev: { holdPct: 1.5, walletAgeDays: 400, fundedBy: 'cex', priorRugs: 0 },
  holders: 900, top10Pct: 15, bundledPct: 2, lpBurned: true, mintRevoked: true, freezeRevoked: true,
  sellTaxPct: 0, botMentionPct: 10, socialsAgeMin: 3000, copycatOf: null,
};

test('a clean coin gets no WOOF', () => assert.deepStrictEqual(bark(clean), []));

test('every red flag alone buries the coin', () => {
  const bad = [
    { dev: { ...clean.dev, holdPct: 41 } }, { lpBurned: false }, { sellTaxPct: 99 }, { bundledPct: 68 },
    { copycatOf: 'SNIFF' }, { mintRevoked: false }, { freezeRevoked: false }, { botMentionPct: 92 },
    { socialsAgeMin: 3 }, { top10Pct: 64 }, { dev: { ...clean.dev, priorRugs: 1 } },
  ];
  assert.strictEqual(bad.length, FLAGS.length);
  for (const patch of bad) assert.strictEqual(run([{ ...clean, ...patch }]).log[0].verdict, 'BURY', JSON.stringify(patch));
});

test('a clean coin is fetched above the gate', () => {
  const r = run([clean]).log[0];
  assert.strictEqual(r.verdict, 'FETCH');
  assert.ok(r.conf >= GATE);
});

test('demo run: 6 buried, 4 fetched, spend cap respected', () => {
  const res = run(pairs);
  assert.strictEqual(res.buried.length, 6);
  assert.strictEqual(res.fetched.length, 4);
  assert.ok(res.spent <= 5);
});
