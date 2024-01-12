"use client";
import Link from "next/link";
import Button from "./components/Global/Button/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center pb-16 mt-40">
      <h5>something went wrong</h5>
      <p className="mb-4">{error.message}</p>
      <Link href="/">
        <Button variant="primary-main" size="medium">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
