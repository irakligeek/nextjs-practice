import Button from "./components/ui/Button";
import Image from "next/image";
import headerImage from "../public/header-bg.png";
const base_url = process.env.BASE_URI;
const secret_token = process.env.SECRET_TOKEN;

export default async function Home() {
  let count = false;
  try {
    const response = await fetch(base_url + "api/get-signups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ secret: secret_token }),
      //cache: "no-store", //disable cache
      next: { revalidate: 60 }, //in seconds
    });

    if (!response.ok) {
      console.log("something went wrong fetch count data");
    }

    count = await response.json();
  } catch (error) {
    console.log("something went wrong: ", error);
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center px-24 gap-2 pt-8 text-center">
        <h1 className="pb-4">A simple static page</h1>
        <p>
          Using the new Next.js{" "}
          <a href="https://nextjs.org/docs/app/building-your-application/data-fetching">
            App Router data fetching
          </a>{" "}
          with revalidation set to 60 seconds. The number below is coming from
          MongoDb to count how many people signed up for a newsletter.
        </p>
        <p>
          <span className="text-2xl font-bold">{count?.count}</span> users who
          already signed up... And still growing..
        </p>
        <div className="mt-9 flex">
          <Button href="/newsletter" label="Sign Up Now" />
        </div>
      </main>
    </>
  );
}
