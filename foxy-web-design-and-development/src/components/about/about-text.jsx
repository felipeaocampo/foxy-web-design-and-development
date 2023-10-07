import Image from "next/image";

export default function AboutText() {
  return (
    <div className="pr-16 pt-52 max-w-2xl	">
      <div className="mb-8">
        <h2 className="text-8xl mb-12 px-12">Hi!</h2>
        <p className="text-xl pl-12 pr-6 leading-loose	">
          My name is <span className="font-bold">Felipe Ocampo</span>, and
          I&apos;m the mastermind behind{" "}
          <span className="font-bold text-primary-orange">
            Foxy Web Design and Development
          </span>
          . For the past 3+ years I&apos;ve had the absolute pleasure to design
          and develop some awesome websites and web apps. Check out what people
          are saying about my work below...
        </p>
      </div>
      <div className=" border-solid border-2 border-extra-light-gray rounded-lg p-8 mb-24">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 pb-16">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              eligendi cum hic laborum id, doloribus non magnam veniam fuga
              facilis sequi sunt fugit quis autem ad placeat reiciendis aut
              ratione!
            </p>
            <p className="text-end	italic">- Jason T. Straussman</p>
          </div>
          <Image
            src="/client-profile-1.jpg"
            width={80}
            height={50}
            alt="DUMMY PIC"
            style={{ borderRadius: 999 }}
          />
        </div>
      </div>
    </div>
  );
}
