import Camp from "@/Components/Camp";
import Features from "@/Components/Features";
import GetApp from "@/Components/GetApp";
import Guide from "@/Components/Guide";
import Hero from "@/Components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero/>
      <Camp/>
      <Guide/>
      <Features/>
      <GetApp/>
    </>
  );
}
