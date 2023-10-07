import Image from "next/image";

export default function NavLogo() {
  return (
    <div>
      <Image
        src="/foxy-logo-short.png"
        alt="Logo of foxy-web-design-and-development"
        width={120}
        height={200}
      />
    </div>
  );
}
