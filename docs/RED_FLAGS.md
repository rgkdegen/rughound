# Sniff's red flags 🚩

One of these is a **WOOF**: the coin is buried, whatever the score.

| # | flag | rule (`src/sniff.js`) | why it kills a coin |
|---|---|---|---|
| 1 | dev bag | dev holds > 10% | one wallet can dump on everyone |
| 2 | LP unlocked | LP not burned | the dev can pull liquidity any time |
| 3 | honeypot | sell tax ≥ 50% | you can buy, you can't sell |
| 4 | bundled | > 50% bought by linked wallets at launch | the "holders" are one person |
| 5 | copycat | same name/art as an earlier coin | rides someone else's chart |
| 6 | mint live | mint authority not revoked | the dev can print supply |
| 7 | freeze live | freeze authority not revoked | the dev can freeze your tokens |
| 8 | bot hype | > 85% of X mentions from bot-like accounts | the attention is paid for |
| 9 | fresh socials | socials younger than 10 min | made for the launch, gone after it |
| 10 | top-10 heavy | top 10 wallets hold > 60% | a dev bag spread over wallets |
| 11 | serial rugger | dev wallet rugged a coin before | same dev, same ending |

No flags? Sniff still needs **confidence ≥ 0.85** (scent + dev trust) before he fetches.
