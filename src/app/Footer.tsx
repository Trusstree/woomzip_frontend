"use client"

import React from "react";

type FooterProps = {};

export default function Footer(props: FooterProps) {
  return (
    <footer className="text-muted text-center py-5">
      <div className="container">
        <p className="float mb-3">
          <button type="button"
            className="btn btn-link link-dark"
            onClick={()=>{window.scrollTo(0, 0);}}>
            Back to top
          </button>
        </p>
        <p className="mb-0">Copyright ©2023 by TRUSS. All Rights Reserved.</p>
      </div>
    </footer>
  );
}