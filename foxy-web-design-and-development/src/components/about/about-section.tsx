import Image from "next/image";
import AboutText from "./about-text";

export default function AboutSection() {
  return (
    <section
      className="bg-white text-black flex"
      style={{
        clipPath: "polygon(0% 16.5%, 100% 6.5%, 100% 100%, 0% 100%)",
      }}
      id="about"
    >
      <div className="w-1/2 flex items-center justify-center">
        <AboutText />
      </div>
      <div className="w-1/2 mt-5 bg-black bg-opacity-50 ">
        <Image
          src="/felipe2.jpg"
          width={500}
          height={100}
          alt="Foxy owner, Felipe Ocampo"
          style={{ width: "100%" }}
        />
      </div>
    </section>
  );
}
