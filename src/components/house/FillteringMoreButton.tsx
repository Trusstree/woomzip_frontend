"use client"

import { SearchModal } from "./SearchModal";

export default function FillteringMoreButton({ title, data, setData }) {
	return(
    <>
		<button
			style={{
			width:"80px",
			height:"40px",
			borderRadius:"10px",
			borderStyle:"solid",
			margin:"3px",
			backgroundColor:"white",
			borderWidth:"2px",
			borderColor:"gray"}}
			data-bs-toggle="modal"
      data-bs-target={`#search_modal`}>
				<div style={{fontSize:"13px", fontWeight:"600"}}>
				{title}
				</div>
		</button>
		<SearchModal data={data} setData={setData} />
		</>
		);
}