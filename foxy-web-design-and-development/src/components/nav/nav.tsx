import NavLinkCta from "./nav-link-cta";
import NavLinks from "./nav-links";
import NavLogo from "./nav-logo";

export default function Nav() {
  return (
    <nav className="nav-container flex justify-between max-w-7xl m-auto px-10 pt-6">
      <NavLogo />
      <div className="bg-red-600 flex justify-between gap-16 text-primary-orange font-bold">
        <NavLinks />
        <NavLinkCta />
      </div>
    </nav>
  );
}
