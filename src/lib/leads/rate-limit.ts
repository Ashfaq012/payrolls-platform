/**
 * Fixed-window, in-memory rate limiter.
 * Good enough for a single instance and for local development. On serverless
 * or multi-instance hosting, swap for a shared store (e.g. Redis/Upstash or
 * the database) behind this same function signature.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const buckets = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(key: string, now = Date.now()): { ok: boolean; retryAfterMs: number } {
  if (buckets.size > 10_000) {
    for (const [k, b] of buckets) if (b.resetAt <= now) buckets.delete(k);
  }
  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, retryAfterMs: 0 };
  }
  bucket.count += 1;
  return bucket.count > MAX_REQUESTS ? { ok: false, retryAfterMs: bucket.resetAt - now } : { ok: true, retryAfterMs: 0 };
}
