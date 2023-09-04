import Button from "./components/ui/Button";

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
      body: JSON.stringify({secret: secret_token}),
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
      <main className="flex min-h-screen flex-col items-center p-24 gap-2 text-center">
        <h1 className="pb-4">Don't miss out</h1>
        <p>Sign up now to be the first to hear when the registration is open</p>
        <p>
          Join the army of{" "}
          <span className="text-2xl font-bold">{count?.count}</span> users who
          already signed up... And still growing..
        </p>
        <div className="mt-9 flex">
          <Button href="/newsletter" label="Sign up for Newsletter" />
        </div>
      </main>
    </>
  );
}
