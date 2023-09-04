import { NextResponse } from "next/server";

import clientPromise from "../../lib/mongodb";

export async function POST(request) {
  const data = await request.json();

  try {
    const client = await clientPromise;
    const db = client.db("email_newsletter");

    const insert = await db
      .collection("signups")
      .insertOne({ name: data.name, email: data.email });

    if(insert.acknowledged){
       return NextResponse.json({ status: 200, data: data });
    }
    
  } catch (e) {
    console.error(e);
  }

  return NextResponse.json({ status: 500});
}
