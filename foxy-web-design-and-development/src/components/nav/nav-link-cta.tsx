import Link from "next/link";

export default function NavLinkCta() {
  return (
    <ul className="flex items-center py-1 px-4 ">
      <li>
        <Link href="#contact">Contact</Link>
      </li>
    </ul>
  );
}