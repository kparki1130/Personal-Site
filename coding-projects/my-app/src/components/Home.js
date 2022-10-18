import React from "react";

export default function Home() {
  return (
    <div>
      <header>Hi, I'm Kyle!</header>
      <p>a software engineer</p>
      <div className="socials-container">
        <a href={"https://github.com/kparki1130"}>
          <i className="fa fa-github fa-social github" />
        </a>
        <a href={"https://www.linkedin.com/in/kyle-e-parkinson/"}>
          <i className="fa fa-linkedin-square fa-social linkedin" />
        </a>
      </div>
    </div>
  );
}
