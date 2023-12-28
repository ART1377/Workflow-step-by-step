"use client";
import Link from "next/link";
import Button from "./components/Button/Button";
import { useParams } from "next/navigation";

export default function NotFound() {
  const { productId } = useParams();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center pb-16 mt-40">
      <h5>Not Found</h5>
      <p className="mb-4">
        Could not find page with this ID {` : ${productId}`}
      </p>
      <Link href="/">
        <Button variant="upload">Back to Home</Button>
      </Link>
    </div>
  );
}
