import Link from "next/link";
import {useRouter} from 'next/router';
import { Button, Modal } from "antd";
import React, { useState } from "react";
import Contacts from "./Contacts";
export default function Headers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter()

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const menu = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About Me",
      link: "/about",
    },
    {
      id: 3,
      title: "Resume",
      link: "/resume",
    },
  ];
  return (
    <div className="p-10 lg:px-20">
      <header className="flex justify-between">
        <div></div>
        {/* <nav className="flex">
          <li className="lg:p-5 sm:p-3">
            <Link href="/">Home</Link>
          </li>

          <li className="lg:p-5 sm:p-3">
            <Link href="/about"> About me</Link>
          </li>
          <li className="lg:p-5 sm:p-3">
            <Link href="/resume"> Resume</Link>
          </li>
          <li onClick={showModal} className="lg:p-5 sm:p-3 cursor-pointer">
            Contact
          </li>
        </nav> */}
        <nav className="flex">
          {menu?.map((list: any) => {
            return (
              <Link
                key={list.id}
                href={list.link}
                className={`${
                  router.pathname === list.link ? "active" : ""
                } text-[14px] py-2 font-medium cursor-pointer flex lg:p-5 sm:p-3"`}
              >
                <span className="tracking-[-0.011em]">{list.title}</span>
              </Link>
            );
          })}
          <li onClick={showModal} className="lg:p-5 sm:p-3 cursor-pointer">
            Contact
          </li>
        </nav>
      </header>
      <Modal
        title={<h1>Contacts </h1>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="resume_container">
          <div>
            <Contacts />
          </div>
        </div>
      </Modal>
    </div>
  );
}
