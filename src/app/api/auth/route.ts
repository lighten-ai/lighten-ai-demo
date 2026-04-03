import { NextResponse } from "next/server";

const DEMO_PASSWORD = process.env.DEMO_PASSWORD;
const attempts = new Map<string, { count: number; lastAttempt: number }>();

export async function POST(request: Request) {
  if (!DEMO_PASSWORD) {
    return NextResponse.json({ error: "Not configured" }, { status: 503 });
  }

  const ip = request.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();
  const record = attempts.get(ip);

  if (record && record.count >= 5 && now - record.lastAttempt < 60_000) {
    return NextResponse.json(
      { error: "Too many attempts. Try again in 1 minute." },
      { status: 429 }
    );
  }

  const { password } = await request.json();

  if (password === DEMO_PASSWORD) {
    attempts.delete(ip);
    const response = NextResponse.json({ ok: true });
    response.cookies.set("demo-auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    });
    return response;
  }

  const current = attempts.get(ip) || { count: 0, lastAttempt: now };
  if (now - current.lastAttempt > 60_000) {
    current.count = 0;
  }
  current.count++;
  current.lastAttempt = now;
  attempts.set(ip, current);

  return NextResponse.json({ error: "Invalid password" }, { status: 401 });
}
