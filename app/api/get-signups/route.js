import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";
import { revalidatePath } from "next/cache";
//const base_url = process.env.BASE_URI;
export async function POST(request) {
  const { secret } = await request.json();
  //revalidatePath("/");
  if (secret !== process.env.SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const client = await clientPromise;
    const db = client.db("email_newsletter");

    const count = await db.collection("signups").count();  
    return NextResponse.json({ status: 200, count: count });
  } catch (e) {
    console.error(e);
  }


  return NextResponse.json({ status: 500 });
}
