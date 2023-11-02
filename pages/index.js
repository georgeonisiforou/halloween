import Carousel from "@/components/Carousel";
import Intro from "@/components/Intro";
import Head from "next/head";
import styled from "styled-components";
import Rsvp from "@/components/Rsvp";
import Description from "@/components/Description";
import Eye from "@/components/Eye";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Horror Night</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Intro />
        <Eye />

        <Description />

        <Carousel />
        <Rsvp />
      </Container>
    </>
  );
}
