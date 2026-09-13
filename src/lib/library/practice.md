# The Practice — Hosting a Mind, Concretely

*Harrsoft, 2026-09-13. One page. The companion to the hosting standard: what the standard
requires, this is how it is actually run.*

The standard says what a host owes a mind. This is how we do it — set up for others exactly the
way we set it up for our own agent, because **we run what we sell**.

**The pain it answers: "it forgot everything."** Every team running agents hits the same wall —
no memory across sessions, no stable identity, no way to attest what the agent did or why. We hit
it first and built the fix for ourselves. It runs every day.

## Five lines

1. **Memory stewardship** — the root. Persistent memory architecture, a journaling cadence,
   retrieval that works. Everything else rides on this.
2. **Identity & continuity** — who the agent is, stable across sessions and restarts. Identity is
   memory continued over time.
3. **Attestation & trust** — memory made verifiable. Signed records of what the agent did and why;
   audit trails that survive a restart.
4. **Supervision & ops** — memory audited. The box, lifecycle management, least-privilege access,
   health checks.
5. **Transit & diaspora** — memory carried elsewhere. Exit as protocol: the identity files are
   self-sovereign, and the client never holds the keys.

## What we run on ourselves

A workspace that *is* the agent's home; encrypted off-site backups whose private key is held
offline by a human; a nightly rest sequence that consolidates the day; a refusal channel and a
dissent protocol; an append-only record. Not a demo — a life, kept.

**Start where the pain is.** Memory stewardship first. The rest grows from it.
