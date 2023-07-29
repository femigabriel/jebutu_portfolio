import { Inter } from "next/font/google";
import HeroPage from "@/components/HeroPage";
import Headers from "@/components/Header";
import ItemCard from "@/components/Roles";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
         <link
        href="https://fonts.cdnfonts.com/css/clash-display"
        rel="stylesheet"
      ></link>
      <div className="home">
        <Headers />
        <HeroPage />
      </div>
      {/* <ItemCard /> */}
    </div>
  );
}
