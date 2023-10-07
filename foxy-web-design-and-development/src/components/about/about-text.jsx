import Image from "next/image";

export default function AboutText() {
  return (
    <div className="p-32 pt-80">
      <h2>Hi!</h2>
      <p>
        My name is <span>Felipe Ocampo</span> and I&apos;m the mastermind behind
        Foxy Web Design and Development. For the past 3+ years I&apos;ve had the
        absolute pleasure to design and develop some awesome websites and web
        apps. Check out what people are saying about my work below...
      </p>
      <div className="flex gap-4">
        <div className="flex items-center">
          <Image
            src="/foxy-dark-bg-alt.png"
            width={250}
            height={50}
            alt="DUMMY PIC"
          />
        </div>
        <div className="flex items-center">
          <Image
            src="/foxy-logo-big.png"
            width={250}
            height={50}
            alt="DUMMY PIC"
          />
        </div>
      </div>
    </div>
  );
}
