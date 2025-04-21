import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.IG_ACCESS_TOKEN;
  const url = `https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption,media_type,timestamp&access_token=${token}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch feed" },
      { status: 500 }
    );
  }
}
