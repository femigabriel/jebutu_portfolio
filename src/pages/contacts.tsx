import { Inter } from "next/font/google";
import Headers from "@/components/Header";
import Contacts from "@/components/Contacts";

const inter = Inter({ subsets: ["latin"] });
export default function contacts() {
  return (
    <div>
      {/* <link
        href="https://fonts.cdnfonts.com/css/ubuntu-title"
        rel="stylesheet"
      ></link> */}
      <div className="banner pt-0">
        <Headers />
        <Contacts />
      </div>
      hello
    </div>
  );
}
