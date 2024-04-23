import { useState } from "react";

export function SigninForm () {

	const [data, setData]=useState({});
  return (
    <div>
			<div className={`d-flex flex-column`}>
				<label
					htmlFor={`signin_ID`}
					className="fs-5"
					style={{color:"#101648"}}>
					{"ID"}
				</label>
				<input
					type='text'
					id={`signin_ID`}
					value={data["id"]} />
			</div>

			<div className={`d-flex flex-column`}>
				<label
					htmlFor={`signin_PW`}
					className="fs-5"
					style={{color:"#101648"}}>
					{"PW"}
				</label>
				<input
					type='text'
					id={`signin_PW`}
					value={data["pw"]} />
			</div>

    </div>
  )
}