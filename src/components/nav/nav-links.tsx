import Link from "next/link";

export default function NavLinks() {
  return (
    <ul className="flex items-center gap-8">
      <li>
        <Link href="/#about">About</Link>
      </li>
      <li>
        <Link href="#portfolio">Portfolio</Link>
      </li>
      <li>
        <Link href="#packages">Packages</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
    </ul>
  );
}
