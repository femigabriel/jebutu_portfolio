import Link from "next/link";
import { Button, Modal } from "antd";
import React, { useState } from "react";
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
          <div>
            {/* <h2>Contact me on </h2> */}
            <div className="skills">
              <p className=" text-gray-400 ">
                <span className=" text-gray-600 font-semibold mr-3">
                  Email :
                </span>
                jebutublessing@gmailcom,
              </p>
              <p className=" text-gray-400">
                <span className=" text-gray-600 font-semibold mr-3">
                  Phone Numbers :
                </span>
                +2348165655677, +2348081977497
              </p>
              <p className=" text-gray-400">
                <span className=" text-gray-600 font-semibold mr-3">
                  Address :
                </span>
                Lekki, Lagos
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
