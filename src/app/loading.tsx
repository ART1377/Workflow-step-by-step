"use client";
import { TailSpin } from "react-loader-spinner";

export default function Loading() {
  return (
    <>
      <div className="mx-auto text-center fixed top-0 z-10 w-screen h-screen backdrop-blur-sm">
        <TailSpin
          height={60}
          width={60}
          radius={5}
          color="#44709e"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          wrapperClass="dna-wrapper"
          visible={true}
        />
      </div>
    </>
  );
}
