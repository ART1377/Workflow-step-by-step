"use client";
import Link from "next/link";
import Button from "./components/Global/Button/Button";

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center pb-16 mt-40">
      <h5>Not Found</h5>
      <p className="mb-4 capitalize">not find page</p>
      <Link href="/">
        <Button variant="primary-main" size="medium">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
