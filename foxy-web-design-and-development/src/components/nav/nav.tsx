import NavLinkCta from "./nav-link-cta";
import NavLinks from "./nav-links";
import NavLogo from "./nav-logo";

export default function Nav() {
  return (
    <header>
      <nav className="nav-container flex items-center justify-between max-w-7xl m-auto px-10 pt-6">
        <NavLogo />
        <div className="bg-red-600 flex items-center	justify-between gap-16 text-primary-orange font-bold uppercase">
          <NavLinks />
          <NavLinkCta />
        </div>
      </nav>
    </header>
  );
}
