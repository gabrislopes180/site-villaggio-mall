import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Hero,
  About,
  StoreDirectory,
  Agenda,
  ContactMap,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <StoreDirectory />
        <Agenda />
        <ContactMap />
      </main>
      <Footer />
    </>
  );
}
