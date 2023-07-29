const star = "./images/star.svg";
const info = "./images/info.svg";
const play = "./images/play.svg";
import {
  FacebookFilled,
  LinkedinFilled,
  MailOutlined,
  MailFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
const image = "./images/jebutu2.jpeg";

export default function HeroPage() {
  return (
    <div className="">
      <div className="lg:pt-5 sm:pt-10 p-5  lgpx-28 ">
        <div className="">
          <h1 className="text-[#FDFDFD] text-[56px] font-semibold mt-5 flex flex-col leading-12">
            <span> Hello,</span>
            I'm Jebutu Blessing
          </h1>
          <h3 className="text-[#FDFDFD] font-bold lg:text-[26x] mt-3 mb-10">
            Accountant, Finance Officer, Internal Audit/Control
          </h3>
          <p className="lg:text-[16px] sm:text=[12px] text-gray-100  lg:w-[38em] sm:w-[32em] leading-relaxed  mt-5 tracking-widest mb-10">
            A Driven accountant with over five years of experience specializing
            in accounting, auditing, budgeting, and performance management.
            Advanced knowledge of generally accepted accounting principles and
            practices. Fosters transparency, understanding, and ownership of
            financial reports and financial and operational metrics across the
            organization—a thorough knowledge of applicable laws, regulations,
            public finance, and external reporting.
          </p>
        </div>
        <footer>
          <div className="profile-pics flex text-[16px] text-gray-300">
            {/* <img
              src={image}
              className="rounded-full w-[50px] h-[50px] mr-5"
              alt=""
            /> */}
            <div className="socials flex">
              <a
                href="https://www.linkedin.com/in/blessing-oreofe"
                className="flex"
              >
                <LinkedinFilled className="mr-2 rounded-full" />
                LinkedIn
              </a>
            </div>
            <div className="socials flex">
              <a
                href="https://www.facebook.com/jebutu.blessing"
                className="flex"
              >
                <FacebookFilled className="mr-2 rounded-full" />
                Facebook
              </a>
            </div>
            <div className="socials flex">
              <a href="">
                <MailFilled className="rounded-full mr-2" />
                Email
                {/* <span className=""> Email</span> */}
              </a>
            </div>
            <div className="socials flex">
              <a href="https://twitter.com/">
                <TwitterSquareFilled className="mr-2" />
                Twitter
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
