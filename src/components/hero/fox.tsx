import Image from "next/image";

export default function Fox() {
  return (
    <Image
      src="/foxy-logo-big.png"
      alt="A fox as the logo of foxy web design and development"
      width={600}
      height={100}
      style={{ display: "block", margin: "0 auto" }}
    />
  );
}
