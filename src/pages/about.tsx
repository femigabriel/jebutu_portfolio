import { Inter } from "next/font/google";
import Headers from "@/components/Header";
import ItemCard from "@/components/Roles";
import AboutMe from "@/components/AboutMe";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div>
      {/* <link
        href="https://fonts.cdnfonts.com/css/ubuntu-title"
        rel="stylesheet"
      ></link> */}
      <div className="banner mb-20">
        <Headers />
        <AboutMe />
        <ItemCard />
      </div>
    </div>
  );
}
