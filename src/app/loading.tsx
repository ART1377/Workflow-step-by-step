"use client";
import { TailSpin } from "react-loader-spinner";

export default function Loading() {
  return (
    <>
      <div className="mx-auto text-center w-screen h-screen">
        <TailSpin
          height={60}
          width={60}
          radius={5}
          color="#4fa94d"
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
