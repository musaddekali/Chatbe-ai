import { Button } from "@/components/ui";
import Link from "next/link";

export default function Home() {
  return (
    <main className="py-16 min-h-screen grid items-center">
      <div className="container">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-center justify-center">
            Chatbe your Ai agent
          </h1>
          <div className="text-center">
            <Button size={"lg"} asChild>
              <Link href={"/dashboard"}>Go to dashboard</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
