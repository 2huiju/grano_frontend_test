import Head from "next/head";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useRouter } from "next/router";

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/allPage");
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Renaissance Lab. </title>
        <meta property="og:title" content="Renaissance Lab." />
        <meta property="og:description" content="Renaissance Lab. " />
        <link rel="icon" href="/img/layout/logo.svg" />
      </Head>
    </HomeContainer>
  );
}
