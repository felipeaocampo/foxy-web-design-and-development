import MainContainer from "@/components/containers/main-container";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainContainer>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          background: #101010;
        }
      `}</style>
    </MainContainer>
  );
}
