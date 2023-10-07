import Link from "next/link";

export default function NavLinkCta() {
  return (
    <ul className="flex items-center py-2 px-4 text-bg-black rounded-full bg-primary-orange">
      <li>
        <Link href="#contact">Contact</Link>
      </li>
    </ul>
  );
}
