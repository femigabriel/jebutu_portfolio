import Resume from "@/components/Resume";
import { Inter } from "next/font/google";
import Headers from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
export default function resume() {
  return (
    <div>
      {/* <link
        href="https://fonts.cdnfonts.com/css/ubuntu-title"
        rel="stylesheet"
      ></link> */}
      <div className="banner pt-0">
        <Headers />
        <Resume />
      </div>
      hello
    </div>
  );
}
