"use client";

import { useDaumPostcodePopup } from "react-daum-postcode";

export function AddressInputForm({
  className,
  addr,
  name,
  setAddr,
}: {
  className?: string;
  name: string;
  addr: string;
  setAddr: Function;
}) {
  const open = useDaumPostcodePopup();

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddr(fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <div className={`d-flex w-100 ${className && ""}`}>
      <input className={"col-9"} style={{ textOverflow: "ellipsis" }} disabled name={name} value={addr} />
      <button className={`col-3 btn btn-outline-primary`} type="button" onClick={handleClick}>
        Open
      </button>
    </div>
  );
}
