import { Inter } from "next/font/google";
import Headers from "@/components/Header";
import ItemCard from "@/components/Roles";
import AboutMe from "@/components/AboutMe";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div>
     <link
        href="https://fonts.cdnfonts.com/css/clash-display"
        rel="stylesheet"
      ></link>
      <div className=" mb-20">
        <Headers />
        <AboutMe />
        <ItemCard />
      </div>
    </div>
  );
}
