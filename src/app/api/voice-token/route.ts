import { NextRequest, NextResponse } from "next/server";

const VOCAL_BRIDGE_API_KEY = process.env.VOCAL_BRIDGE_API_KEY || "vb_yEhgqLupf8yTTDPLxWMJbK1DRh1WhjfCgx5Q7k5pU4A";
const VOCAL_BRIDGE_AGENT_ID = process.env.VOCAL_BRIDGE_AGENT_ID;

async function fetchToken(participantName: string = "Web User", agentId?: string) {
  const targetAgentId = agentId || VOCAL_BRIDGE_AGENT_ID;

  const headers: Record<string, string> = {
    "X-API-Key": VOCAL_BRIDGE_API_KEY,
    "Content-Type": "application/json",
  };

  if (targetAgentId) {
    headers["X-Agent-Id"] = targetAgentId;
  }

  const response = await fetch("https://vocalbridgeai.com/api/v1/token", {
    method: "POST",
    headers,
    body: JSON.stringify({
      participant_name: participantName,
    }),
  });

  if (!response.ok) {
    let errorDetails = "";
    try {
      const errJson = await response.json();
      errorDetails = JSON.stringify(errJson);
    } catch {
      try {
        errorDetails = await response.text();
      } catch {
        errorDetails = response.statusText;
      }
    }
    throw new Error(`Vocal Bridge token API returned status: ${response.status}. Details: ${errorDetails}`);
  }

  return await response.json();
}

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const participantName = url.searchParams.get("participant_name") || "Web User";
    const agentId = url.searchParams.get("agent_id") || request.headers.get("X-Agent-Id") || undefined;
    const data = await fetchToken(participantName, agentId);
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Vocal Bridge token proxy failed (GET):", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch voice token" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    let participantName = "Web User";
    let agentId = request.headers.get("X-Agent-Id") || undefined;
    try {
      const body = await request.json();
      participantName = body?.participant_name || "Web User";
      if (body?.agent_id) {
        agentId = body.agent_id;
      }
    } catch {
      // Body may be empty or not JSON
    }
    const data = await fetchToken(participantName, agentId);
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Vocal Bridge token proxy failed (POST):", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch voice token" },
      { status: 500 }
    );
  }
}
