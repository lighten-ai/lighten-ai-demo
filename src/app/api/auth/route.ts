import { NextResponse } from "next/server";

const DEMO_PASSWORD = process.env.DEMO_PASSWORD || "L!ght3n_D3m0";

export async function POST(request: Request) {
  const { password } = await request.json();

  if (password === DEMO_PASSWORD) {
    const response = NextResponse.json({ ok: true });
    response.cookies.set("demo-auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return response;
  }

  return NextResponse.json({ error: "Invalid password" }, { status: 401 });
}
