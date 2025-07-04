import Nav from "../nav/nav";
import { ReactNode } from "react";

type MainContainerProps = {
  children: ReactNode;
};

export default function MainContainer({ children }: MainContainerProps) {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
}
