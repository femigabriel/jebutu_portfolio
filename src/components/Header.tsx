import Link from "next/link";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import Contacts from "./Contacts";
export default function Headers() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="p-10 lg:px-20">
      <header className="flex justify-between">
        <div></div>
        <nav className="flex">
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
        </nav>
      </header>
      <Modal
        title={<h1>Contact me </h1>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="resume_container">
          <link
            href="https://fonts.cdnfonts.com/css/ubuntu-title"
            rel="stylesheet"
          ></link>
          <div>
         
            <Contacts />
          </div>
        </div>
      </Modal>
    </div>
  );
}
