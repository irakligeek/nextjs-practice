import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req, res) {
    return NextResponse.json({ status: "Hello" });
}