import React, { useState } from "react";

export const Footer = () => {
  let currentYear: number = new Date().getFullYear();

  return (
    <footer className="footer cont">
      <div className="footer__inner">
        <p>
          Made by Alex.C. All rights reserved ®{" "}
          <span className="year">{currentYear}</span>
        </p>
      </div>
    </footer>
  );
};
