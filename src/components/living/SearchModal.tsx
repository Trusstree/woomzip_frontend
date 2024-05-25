"use client"

import { useState } from "react";

export function SearchModal({ data, setData }) {
  const [asdf,setAsdf]=useState("body");

  return (
    <div
      className="modal fade"
      id={`search_modal`}
      aria-labelledby={`search_modal_Label`}
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content" style={{ width: 500 }}>
          <div className="modal-header">
            <h5 className="modal-title" id={`search_modal_Label`}>
              title
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            body
            <div>{asdf}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
