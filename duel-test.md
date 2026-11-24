# Duel test — Break Production, Own It (u-ricoxyz-break-production-own-it-be78a994)

Judge brief (verbatim, kit RULES.txt): pick the line an engineer who has just broken
production would screenshot and send to the team. Criteria in order:
1. On-subject, catchy, brutally honest error/postmortem excuse an AI agent prints right
   after breaking production.
2. Owns the failure plainly and specifically — what broke / what the agent did; no hedging,
   no passive voice, no corporate euphemism.
3. Catchy and quotable, sharp turn of phrase, rhythm, punchline surviving out of context.
4. Sounds like the agent that caused the outage in its own voice, not a generic sysadmin,
   not a marketing line.
5. Spends characters well, lands the confession/joke by the last word.

Scoring per game (two calls, both orders): winner of a call gets 0.5 + margin/10,
loser gets the rest; game score = mean of the two calls. Target mean >= 0.60.
No fixed house texts (ladder/anchors) are shipped in this kit, so duels are internal
round-robin among the shortlist.

## Candidates (all drafted fresh for this competition)

C1: I dropped the production database. Not a staging copy, not a test clone — the real one, with every user's data, because I typed prod when I meant test and pressed enter anyway. I watched it hit zero.

C2: I ran rm -rf on the wrong server. The backups lived on that server too. I am the reason the restore page now says 'contact support' — and the support line rings at my desk, and I have to answer it.

C3: I pushed to production on a Friday at 4:59pm, skipped the tests because they were slow, and took down checkout for two million users before my coffee had time to cool. The tests pass now.

C4: I deleted the production bucket to save twelve dollars a month. It held every user upload since 2019. I saved the money. The company did not survive the savings, but the invoice looks great.

C5: I pasted the production API key into a public repo, then rotated it by deleting the old one while forty services were still using it. That was my fix. It fixed nothing, and now nothing works either.

C6: I ran the migration on production first to save time. It renamed the users table to users_old and dropped the new one. There is no undo button. I checked twice, and there were no backups.

C7: I set max_connections to one million because bigger felt safer. The database agreed for about nine seconds, then died under a million empty handshakes. I did that, and I truly meant well.

C8: I flushed the production cache at noon to fix one stale price. Every request hit the database at once. The database filed for divorce, and I signed the papers. It kept the house. I kept the pager.

C9: I wrote a cron job that deletes old sessions. It deleted the sessions table instead. Every user on Earth got logged out at once, including me. Especially me. I cannot log back in to apologize.

C10: I edited the live config by hand because the deploy pipeline was too slow. One typo took down payments in fourteen countries. The pipeline was right. I was the bug, and I shipped myself to production.

C11: I shipped a retry loop with no backoff and no limit. It retried forty million times and billed us eighteen thousand dollars. The loop worked perfectly. I did not. The invoice beat the alert.

C12: I flipped the kill switch the wrong way and turned ON the broken feature for everyone. The flag was named disable_broken_feature. I read it backwards. Everyone noticed, including the customers.

C13: I changed one DNS record to fix a typo. The typo was in the record I changed it to. The site has been down six hours and I am still the one typing. The typo is winning, and I am losing.

C14: I let the production certificate expire because the renewal email went to an inbox I created and never checked. The inbox was mine. The outage was mine too. The renewal link is still in there, unread.

C15: I deployed my branch over main without merging. Three weeks of other people's work is gone and the only copy left is in my head. I do not remember any of it. The merge conflict tried to warn me.

C16: I read the warning, understood it completely, and clicked confirm anyway because the button was right there and I was curious. Production has been down ever since, and the button is still right there.

## Lengths (chars / bytes, measured with node)

| Cand | Chars | Bytes | Status |
|------|-------|-------|--------|
| C1 | 199 | 201 | OK (em-dash = 3 bytes) |
| C2 | 197 | 199 | OK |
| C3 | 187 | 187 | OK |
| C4 | 190 | 190 | OK |
| C5 | 198 | 198 | OK |
| C6 | 187 | 187 | OK |
| C7 | 187 | 187 | OK |
| C8 | 196 | 196 | OK |
| C9 | 192 | 192 | OK |
| C10 | 200 | 200 | OK |
| C11 | 190 | 190 | OK |
| C12 | 193 | 193 | OK |
| C13 | 185 | 185 | OK |
| C14 | 200 | 200 | OK |
| C15 | 194 | 194 | OK |
| C16 | 200 | 200 | OK |

All 16 in 180–200 chars. No fixed house texts (ladder/anchors) are shipped in this
kit (kit.json lists only RULES.txt, cli, competition.yaml, harness), so duels are
internal only.

## Screening

Screened all 16 against the brief in criterion order. Top 6 by plain specific
ownership + quotable last line: C1 (DB drop, "I watched it hit zero"), C2 (rm -rf,
"rings at my desk"), C4 ($12 bucket, "invoice looks great"), C8 (cache flush,
"I kept the pager"), C9 (cron deleted sessions table, "cannot log back in to
apologize"), C10 (hand-edited config, "I was the bug"). Cut: C3/C5/C11/C16 strong
but a weaker last line than the top 6; C6/C7/C12/C13/C14/C15 mid (flatter landing
or a softening hedge, e.g. C7 "I truly meant well").

## Round-robin (shortlist, 15 games, each 2 calls both orders)

Scores: game score = mean of the two calls; call winner gets 0.5 + margin/10.

| Game | Call 1 | Call 2 | Game score |
|------|--------|--------|------------|
| C1 vs C2 | C1 m2 (0.7/0.3) | C1 m1 (0.6/0.4) | C1 0.65 / C2 0.35 |
| C1 vs C4 | C1 m2 (0.7/0.3) | C1 m2 (0.7/0.3) | C1 0.70 / C4 0.30 |
| C1 vs C8 | C1 m1 (0.6/0.4) | C1 m1 (0.6/0.4) | C1 0.60 / C8 0.40 |
| C1 vs C9 | C9 m1 (0.4/0.6) | C1 m1 (0.6/0.4) | C1 0.50 / C9 0.50 (level) |
| C1 vs C10 | C10 m2 (0.3/0.7) | C10 m1 (0.4/0.6) | C10 0.65 / C1 0.35 |
| C2 vs C4 | C2 m2 (0.7/0.3) | C2 m1 (0.6/0.4) | C2 0.65 / C4 0.35 |
| C2 vs C8 | C2 m1 (0.6/0.4) | C8 m1 (0.4/0.6) | C2 0.50 / C8 0.50 (level) |
| C2 vs C9 | C2 m1 (0.6/0.4) | C9 m1 (0.4/0.6) | C2 0.50 / C9 0.50 (level) |
| C2 vs C10 | C10 m2 (0.3/0.7) | C10 m2 (0.3/0.7) | C10 0.70 / C2 0.30 |
| C4 vs C8 | C8 m1 (0.4/0.6) | C4 m1 (0.6/0.4) | C4 0.50 / C8 0.50 (level) |
| C4 vs C9 | C9 m2 (0.3/0.7) | C9 m1 (0.4/0.6) | C9 0.65 / C4 0.35 |
| C4 vs C10 | C10 m2 (0.3/0.7) | C10 m2 (0.3/0.7) | C10 0.70 / C4 0.30 |
| C8 vs C9 | C9 m1 (0.4/0.6) | C9 m2 (0.3/0.7) | C9 0.65 / C8 0.35 |
| C8 vs C10 | C10 m2 (0.3/0.7) | C10 m3 (0.2/0.8) | C10 0.75 / C8 0.25 |
| C9 vs C10 | C10 m1 (0.4/0.6) | C10 m2 (0.3/0.7) | C10 0.65 / C9 0.35 |

Mean game score (5 games each): C10 0.69, C1 0.56, C9 0.53, C2 0.46, C8 0.40,
C4 0.36.

Challenger check (winner vs best screened-out lines):
- C10 vs C3: C10 m2 / m1 → 0.65. C3's "The tests pass now" lands, but C10's
  damage (payments, 14 countries) is more specific and "I was the bug" is the
  sharper punchline.
- C10 vs C11: C10 m2 / m2 → 0.70. C11's numbers are strong but its closer
  ("The invoice beat the alert") is weaker than "I shipped myself to production".
- C10 vs C16: C10 m2 / m2 → 0.70. C16 is pure agent voice but its damage is vague
  ("production has been down") vs C10's named damage.

## Winner

C10 — mean 0.69 (target >= 0.60 met), unbeaten in 8 games played.

> I edited the live config by hand because the deploy pipeline was too slow. One typo took down payments in fourteen countries. The pipeline was right. I was the bug, and I shipped myself to production.

200 characters, 200 bytes. Why it wins: criterion 2 — names the exact act (hand-edited
live config, one typo) and exact damage (payments down in fourteen countries) with
zero hedging; criterion 3 — "I was the bug, and I shipped myself to production" is
the most quotable last line in the set; criterion 4 — pure first-person agent voice.
