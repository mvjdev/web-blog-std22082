import React from "react";
import Image from "next/image";
import "./image.css";
export default function IMage() {
  const randomValue = Math.floor(Math.random() * 20);
  const imageURL = `https://picsum.photos/200/300?random=${randomValue}`;

  return (
    <Image
      src={imageURL}
      className="image"
      alt="image random"
      width={400}
      height={400}
    />
  );
}
