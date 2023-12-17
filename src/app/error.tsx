"use client";
import Link from "next/link";
import Button from "./components/Button/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

    return (
    <div className="w-screen h-screen flex flex-col justify-center items-center pb-16">
      <h5>something went wrong</h5>
      <p className="mb-4">{error.message}</p>
      <Link href="/">
        <Button variant="upload">Back to Home</Button>
      </Link>
    </div>
  );
}
