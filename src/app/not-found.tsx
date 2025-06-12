import { ArrowBigRight } from "@/components/icons";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-5">
      <h2 className="text-primary text-3xl font-bold">404 - Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        className="flex items-center gap-1.5 hover:underline underline-offset-4"
        href="/"
      >
        <span>Return Home</span> <ArrowBigRight />
      </Link>
    </section>
  );
}
