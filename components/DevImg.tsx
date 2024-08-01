import React from "react";
import Image from "next/image";

export default function DevImg({ containerSyles, imgSrc }: any) {
  return (
    <div className={`${containerSyles}`}>
      <Image src={imgSrc} fill priority alt="" />
    </div>
  );
}
