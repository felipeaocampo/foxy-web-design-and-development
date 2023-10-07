import Link from "next/link";
import Image from "next/image";

export default function NavLogo() {
  return (
    <div>
      <Link href="/">
        <Image
          src="/foxy-logo-alt2.png"
          alt="Textual logo of foxy web design and development"
          width={180}
          height={200}
        />
      </Link>
    </div>
  );
}
