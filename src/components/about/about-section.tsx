import Image from "next/image";
import AboutText from "./about-text";

export default function AboutSection() {
  return (
    <section
      className="bg-white text-black flex pt-16 pl-16"
      style={{
        clipPath: "polygon(0% 16.5%, 100% 6.5%, 100% 100%, 0% 100%)",
      }}
      id="about"
    >
      <div className="w-1/2 flex items-center justify-center flex-col">
        <AboutText />
      </div>
      <div className="w-1/2">
        <Image
          src="/felipe2.jpg"
          width={500}
          height={100}
          alt="Foxy owner, Felipe Ocampo"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </section>
  );
}

// style="background-image: url('../public/images/hero.jpg');"
