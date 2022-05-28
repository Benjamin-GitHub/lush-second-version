import React from "react";
import Image from "next/image";
import logo from "../Logo/logo.webp";
// import "./Header.css";

export default function Header() {
  return (
    <div>
      <Image
            alt="LUSH"
            src={logo}
            className="App-logo"
            width="240"
            height="108"
          ></Image>
    </div>
  );
}
