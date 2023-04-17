import MainPage from "../src/components/units/mainpage/MainPage";
import Head from "next/head";

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "100px",
      }}
    >
      <Head>
        <title>Renaissance Lab. </title>
        <meta property="og:title" content="Renaissance Lab." />
        <meta property="og:description" content="Renaissance Lab. " />
        <link rel="icon" href="/img/layout/logo.svg" />
      </Head>
      <MainPage />
    </div>
  );
}
